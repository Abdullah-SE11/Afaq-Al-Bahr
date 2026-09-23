import React, { createContext, useContext, useEffect, useRef, useState, useMemo } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export const MapContext = createContext(null)

export function useMap() {
  return useContext(MapContext)
}

// Map Component
export function Map({
  center = [0, 0], // [lng, lat]
  zoom = 1,
  className = "",
  children,
}) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const [mapInstance, setMapInstance] = useState(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Clean previous instance if present
    if (mapRef.current) {
      mapRef.current.remove()
      mapRef.current = null
    }

    if (containerRef.current._leaflet_id) {
      containerRef.current._leaflet_id = null
    }

    // Convert [lng, lat] to Leaflet's [lat, lng]
    const lat = center[1] ?? 20
    const lng = center[0] ?? 10

    // Adjusted zoom for Leaflet to show all continents crystal clear
    const initialZoom = zoom < 1.5 ? 1.85 : zoom

    const map = L.map(containerRef.current, {
      center: [lat, lng],
      zoom: initialZoom,
      minZoom: 1.2,
      maxZoom: 7,
      zoomSnap: 0.1,
      zoomDelta: 0.5,
      zoomControl: false,
      attributionControl: false,
      worldCopyJump: true,
      scrollWheelZoom: true,
    })

    mapRef.current = map

    // CARTO Dark Matter Tile Layer - Crisp dark continents with country borders & labels
    const tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19,
      noWrap: false,
    }).addTo(map)

    setMapInstance(map)

    // Invalidate size after mount to guarantee tiles fill the container completely
    const timer = setTimeout(() => {
      map.invalidateSize()
    }, 150)

    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize()
    })
    resizeObserver.observe(containerRef.current)

    return () => {
      clearTimeout(timer)
      resizeObserver.disconnect()
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Map DOM Element */}
      <div
        ref={containerRef}
        className="w-full h-full z-0 leaflet-dark-custom"
        style={{ backgroundColor: '#131920' }}
      />

      {/* Map children rendered through Context */}
      {mapInstance && (
        <MapContext.Provider value={{ map: mapInstance, containerRef }}>
          {children}
        </MapContext.Provider>
      )}

      {/* Custom Scoped CSS for Dark Mode Leaflet */}
      <style>{`
        .leaflet-dark-custom .leaflet-tile {
          filter: brightness(0.95) contrast(1.1);
        }
        .leaflet-container {
          background: #131920 !important;
          font-family: inherit;
        }
      `}</style>
    </div>
  )
}

// Generate quadratic curve lat/lng points
function getArcCoordinates(fromLngLat, toLngLat, segments = 50) {
  const [lng1, lat1] = fromLngLat
  const [lng2, lat2] = toLngLat

  // If crossing antimeridian (e.g. Shanghai to LA)
  const isPacific = Math.abs(lng2 - lng1) > 180

  if (isPacific) {
    const pts = []
    for (let i = 0; i <= segments; i++) {
      const t = i / segments
      let lng
      if (lng1 > 0 && lng2 < 0) {
        const targetLng = lng2 + 360
        lng = lng1 + (targetLng - lng1) * t
        if (lng > 180) lng -= 360
      } else {
        lng = lng1 + (lng2 - lng1) * t
      }
      const midT = Math.sin(t * Math.PI)
      const lat = lat1 + (lat2 - lat1) * t + midT * 18
      pts.push([lat, lng])
    }
    return { pts, isPacific: true }
  }

  const dLng = lng2 - lng1
  const dLat = lat2 - lat1
  const dist = Math.sqrt(dLng * dLng + dLat * dLat)
  const archHeight = Math.min(dist * 0.18, 16)

  const pts = []
  for (let i = 0; i <= segments; i++) {
    const t = i / segments
    const midT = Math.sin(t * Math.PI)
    const lng = lng1 + dLng * t
    const lat = lat1 + dLat * t + midT * archHeight
    pts.push([lat, lng])
  }

  return { pts, isPacific: false }
}

// MapArc Component
export function MapArc({ data = [], paint = {}, hoverPaint = {}, onHover }) {
  const { map } = useMap()
  const layersRef = useRef([])

  // Resolve color from expression specification or string
  const getColor = (item) => {
    const lineColor = paint['line-color']
    if (typeof lineColor === 'string') return lineColor
    if (Array.isArray(lineColor)) {
      // ExpressionSpecification matcher: ["match", ["get", "mode"], "air", color1, "sea", color2, default]
      const mode = item.mode
      const modeIdx = lineColor.indexOf(mode)
      if (modeIdx !== -1 && modeIdx + 1 < lineColor.length) {
        return lineColor[modeIdx + 1]
      }
    }
    return item.mode === 'air' ? '#a78bfa' : '#34d399'
  }

  useEffect(() => {
    if (!map) return

    // Clear previous arc layers
    layersRef.current.forEach((layer) => layer.remove())
    layersRef.current = []

    const layerGroup = L.layerGroup().addTo(map)
    layersRef.current.push(layerGroup)

    data.forEach((arc) => {
      const color = getColor(arc)
      const lineWidth = paint['line-width'] || 1.8
      const hoverWidth = hoverPaint['line-width'] || 3
      const { pts, isPacific } = getArcCoordinates(arc.from, arc.to, 60)

      const handleHover = (e) => {
        const mouseEvent = e.originalEvent
        if (onHover) {
          onHover({
            arc,
            longitude: e.latlng.lng,
            latitude: e.latlng.lat,
          })
        }
      }

      const handleMouseOut = () => {
        if (onHover) onHover(null)
      }

      if (isPacific) {
        const seg1 = []
        const seg2 = []
        let switched = false
        for (let i = 0; i < pts.length; i++) {
          if (i > 0 && Math.abs(pts[i][1] - pts[i - 1][1]) > 180) {
            switched = true
          }
          if (!switched) seg1.push(pts[i])
          else seg2.push(pts[i])
        }

        const l1 = L.polyline(seg1, { color, weight: lineWidth, opacity: 0.9, smoothFactor: 1 }).addTo(layerGroup)
        const l2 = L.polyline(seg2, { color, weight: lineWidth, opacity: 0.9, smoothFactor: 1 }).addTo(layerGroup)

        ;[l1, l2].forEach((line) => {
          line.on('mouseover', (e) => {
            line.setStyle({ weight: hoverWidth, opacity: 1 })
            handleHover(e)
          })
          line.on('mousemove', handleHover)
          line.on('mouseout', () => {
            line.setStyle({ weight: lineWidth, opacity: 0.9 })
            handleMouseOut()
          })
        })
      } else {
        const polyline = L.polyline(pts, {
          color,
          weight: lineWidth,
          opacity: 0.9,
          smoothFactor: 1,
        }).addTo(layerGroup)

        polyline.on('mouseover', (e) => {
          polyline.setStyle({ weight: hoverWidth, opacity: 1 })
          handleHover(e)
        })
        polyline.on('mousemove', handleHover)
        polyline.on('mouseout', () => {
          polyline.setStyle({ weight: lineWidth, opacity: 0.9 })
          handleMouseOut()
        })
      }
    })

    return () => {
      layerGroup.remove()
    }
  }, [map, data, paint, hoverPaint, onHover])

  return null
}

// MapMarker Component
export function MapMarker({ longitude, latitude, children }) {
  const { map } = useMap()
  const markerRef = useRef(null)

  useEffect(() => {
    if (!map) return

    let labelText = ''
    const findText = (node) => {
      if (!node) return
      if (typeof node === 'string' || typeof node === 'number') {
        labelText = String(node)
        return
      }
      if (React.isValidElement(node) && node.props && node.props.children) {
        React.Children.forEach(node.props.children, findText)
      }
    }
    React.Children.forEach(children, findText)

    const markerHtml = `
      <div style="position: relative; display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -50%);">
        <span style="
          font-size: 11px;
          font-weight: 600;
          color: #f1f5f9;
          text-shadow: 0 1px 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.8);
          white-space: nowrap;
          margin-bottom: 3px;
          letter-spacing: -0.01em;
          pointer-events: none;
        ">${labelText}</span>
        <div style="
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #ffffff;
          box-shadow: 0 0 8px rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.6);
        "></div>
      </div>
    `

    const icon = L.divIcon({
      className: 'custom-maplibre-marker',
      html: markerHtml,
      iconSize: [0, 0],
    })

    const marker = L.marker([latitude, longitude], { icon, interactive: false }).addTo(map)
    markerRef.current = marker

    return () => {
      if (markerRef.current) {
        markerRef.current.remove()
      }
    }
  }, [map, longitude, latitude, children])

  return null
}

export function MarkerContent({ children }) {
  return <>{children}</>
}

export function MarkerLabel({ children, className = "" }) {
  return <span className={className}>{children}</span>
}

// MapPopup Component
export function MapPopup({
  longitude,
  latitude,
  children,
  className = "",
}) {
  const { map } = useMap()
  const [point, setPoint] = useState(null)

  useEffect(() => {
    if (!map) return

    const updatePoint = () => {
      const p = map.latLngToContainerPoint([latitude, longitude])
      setPoint(p)
    }

    updatePoint()
    map.on('move', updatePoint)
    map.on('zoom', updatePoint)

    return () => {
      map.off('move', updatePoint)
      map.off('zoom', updatePoint)
    }
  }, [map, longitude, latitude])

  if (!point) return null

  return (
    <div
      className={`absolute z-[999] pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3 ${className}`}
      style={{
        left: `${point.x}px`,
        top: `${point.y}px`,
      }}
    >
      <div className="bg-[#111822]/95 border border-white/20 text-white rounded-lg shadow-2xl backdrop-blur-md">
        {children}
      </div>
    </div>
  )
}
