import React, { useMemo, useState } from "react";
import {
  Map,
  MapArc,
  MapMarker,
  MapPopup,
  MarkerContent,
  MarkerLabel,
} from "@/components/ui/map";

const lanes = [
  {
    id: "shg-lax",
    origin: "Shanghai",
    destination: "Los Angeles",
    from: [121.4737, 31.2304],
    to: [-118.2437, 34.0522],
    volume: "24.8k TEU",
    mode: "sea",
  },
  {
    id: "sin-rtm",
    origin: "Singapore",
    destination: "Rotterdam",
    from: [103.8198, 1.3521],
    to: [4.4777, 51.9244],
    volume: "9.4k TEU",
    mode: "sea",
  },
  {
    id: "san-cpt",
    origin: "Santos",
    destination: "Cape Town",
    from: [-46.3322, -23.9608],
    to: [18.4241, -33.9249],
    volume: "3.2k TEU",
    mode: "sea",
  },
  {
    id: "syd-nrt",
    origin: "Sydney",
    destination: "Tokyo",
    from: [151.2093, -33.8688],
    to: [139.6917, 35.6895],
    volume: "640 tons",
    mode: "air",
  },
  {
    id: "dxb-jfk",
    origin: "Dubai",
    destination: "New York",
    from: [55.2708, 25.2048],
    to: [-74.006, 40.7128],
    volume: "980 tons",
    mode: "air",
  },
  {
    id: "dxb-bom",
    origin: "Dubai",
    destination: "Mumbai",
    from: [55.2708, 25.2048],
    to: [72.8777, 19.076],
    volume: "1.2k tons",
    mode: "sea",
  },
];

const modeColors = {
  air: "#a78bfa",
  sea: "#34d399",
};

const modeColorExpression = [
  "match",
  ["get", "mode"],
  "air",
  modeColors.air,
  "sea",
  modeColors.sea,
  "#888",
];

export function InteractiveArcExample() {
  const [selected, setSelected] = useState(null);
  const [filterMode, setFilterMode] = useState("all"); // "all" | "sea" | "air"

  const filteredLanes = useMemo(() => {
    if (filterMode === "all") return lanes;
    return lanes.filter((lane) => lane.mode === filterMode);
  }, [filterMode]);

  const endpoints = useMemo(() => {
    const points = [];
    const seen = new Set();
    for (const lane of filteredLanes) {
      if (!seen.has(lane.origin)) {
        seen.add(lane.origin);
        points.push({ name: lane.origin, coords: lane.from });
      }
      if (!seen.has(lane.destination)) {
        seen.add(lane.destination);
        points.push({ name: lane.destination, coords: lane.to });
      }
    }
    return points;
  }, [filteredLanes]);

  return (
    <div className="relative h-[500px] sm:h-[560px] md:h-[620px] w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-[#121820] shadow-2xl">
      {/* Route Filter Controls Header (Top Left) */}
      <div className="bg-[#121820]/90 border border-white/15 absolute top-4 left-4 z-[500] flex items-center gap-1 rounded-full p-1 text-xs font-medium text-white shadow-lg backdrop-blur-md">
        <button
          onClick={() => {
            setFilterMode("all");
            setSelected(null);
          }}
          className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
            filterMode === "all"
              ? "bg-white/20 text-white shadow"
              : "text-slate-400 hover:text-white"
          }`}
        >
          All Routes ({lanes.length})
        </button>
        <button
          onClick={() => {
            setFilterMode("sea");
            setSelected(null);
          }}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
            filterMode === "sea"
              ? "bg-[#34d399]/25 text-[#34d399] border border-[#34d399]/40 shadow"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#34d399]" />
          Sea
        </button>
        <button
          onClick={() => {
            setFilterMode("air");
            setSelected(null);
          }}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
            filterMode === "air"
              ? "bg-[#a78bfa]/25 text-[#a78bfa] border border-[#a78bfa]/40 shadow"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#a78bfa]" />
          Air
        </button>
      </div>

      <Map center={[20, 20]} zoom={0.8}>
        <MapArc
          data={filteredLanes}
          paint={{
            "line-color": modeColorExpression,
            "line-width": 1.5,
          }}
          hoverPaint={{
            "line-width": 3,
            "line-opacity": 1,
          }}
          onHover={(event) =>
            setSelected(
              event
                ? {
                    lane: event.arc,
                    popupLngLat: {
                      longitude: event.longitude,
                      latitude: event.latitude,
                    },
                  }
                : null
            )
          }
        />

        {endpoints.map((point) => (
          <MapMarker
            key={point.name}
            longitude={point.coords[0]}
            latitude={point.coords[1]}
          >
            <MarkerContent>
              <div className="bg-white/90 size-2 rounded-full shadow-sm" />
              <MarkerLabel
                position="top"
                className="text-white/90 tracking-tight"
              >
                {point.name}
              </MarkerLabel>
            </MarkerContent>
          </MapMarker>
        ))}

        {selected && (
          <MapPopup
            longitude={selected.popupLngLat.longitude}
            latitude={selected.popupLngLat.latitude}
            offset={12}
            closeOnClick={false}
            className="p-0"
          >
            <div className="flex items-center gap-2 px-3 py-2 text-xs font-poppins">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background:
                    selected.lane.mode === "air"
                      ? modeColors.air
                      : modeColors.sea,
                }}
              />
              <span className="font-semibold text-white">
                {selected.lane.origin} → {selected.lane.destination}
              </span>
              <span className="text-slate-300 border-l border-white/20 pl-2 font-mono">
                {selected.lane.volume}
              </span>
            </div>
          </MapPopup>
        )}
      </Map>

      {/* Interactive Legend Pill at Bottom Left matching image */}
      {/* <div className="bg-[#121820]/90 border border-white/15 absolute bottom-4 left-4 z-[500] flex items-center gap-3 rounded-full px-3.5 py-1.5 text-[11px] font-medium text-white shadow-lg backdrop-blur-md">
        <button
          onClick={() => {
            setFilterMode(filterMode === "air" ? "all" : "air");
            setSelected(null);
          }}
          className={`flex items-center gap-1.5 transition-opacity ${
            filterMode === "all" || filterMode === "air"
              ? "opacity-100"
              : "opacity-40 hover:opacity-80"
          }`}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: modeColors.air }}
          />
          Air
        </button>
        <span className="bg-white/20 h-3 w-px" />
        <button
          onClick={() => {
            setFilterMode(filterMode === "sea" ? "all" : "sea");
            setSelected(null);
          }}
          className={`flex items-center gap-1.5 transition-opacity ${
            filterMode === "all" || filterMode === "sea"
              ? "opacity-100"
              : "opacity-40 hover:opacity-80"
          }`}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: modeColors.sea }}
          />
          Sea
        </button>
      </div> */}

      {/* Attribution at Bottom Right matching image */}
      <div className="bg-[#121820]/90 border border-white/15 absolute bottom-4 right-4 z-[500] flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] text-slate-300 shadow-lg backdrop-blur-md">
        <span>© CARTO, © OpenStreetMap contributors</span>
        <span className="text-[11px] text-slate-400">ⓘ</span>
      </div>
    </div>
  );
}

// Export both names for maximum compatibility
export const InteractiveArcMap = InteractiveArcExample;
export default InteractiveArcExample;
