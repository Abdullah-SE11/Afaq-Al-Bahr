import React, { Suspense, useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars, Sky, useGLTF, Environment, ContactShadows, Html, Float as DreiFloat, SoftShadows } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { Ship, Plane, Globe, Package, Truck, Anchor, Menu, Facebook, Linkedin, Instagram, ArrowRight, ExternalLink, AlertTriangle } from 'lucide-react'
import { SocialLinks } from './components/SocialLinks'
import './App.css'

// Robust Model URLs
const MODELS = {
    PLANE: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/airplane/model.gltf',
    TRUCK: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/truck/model.gltf',
    SHIP: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cargo-ship/model.gltf'
}

function Container({ position, color }) {
    return (
        <mesh position={position} castShadow>
            <boxGeometry args={[0.8, 0.4, 0.4]} />
            <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
        </mesh>
    )
}

function CargoShip() {
    const { scene } = useGLTF(MODELS.SHIP)
    const shipRef = useRef()
    const clonedScene = useMemo(() => scene.clone(), [scene])

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        shipRef.current.position.y = Math.sin(t * 0.4) * 0.1
        shipRef.current.rotation.z = Math.sin(t * 0.4) * 0.01
    })

    return (
        <group ref={shipRef} position={[0, -0.8, 0]} scale={2.5}>
            <primitive object={clonedScene} />
        </group>
    )
}

function PlaneModel() {
    const { scene } = useGLTF(MODELS.PLANE)
    const planeRef = useRef()
    const clonedScene = useMemo(() => scene.clone(), [scene])

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        planeRef.current.position.x = Math.sin(t * 0.1) * 30
        planeRef.current.position.y = 12 + Math.sin(t * 0.3) * 2
        planeRef.current.position.z = Math.cos(t * 0.1) * 30
        planeRef.current.rotation.y = -t * 0.1 + Math.PI / 2
        planeRef.current.rotation.z = Math.sin(t * 0.1) * 0.1
    })

    return (
        <group ref={planeRef} scale={1.5}>
            <primitive object={clonedScene} />
            <pointLight position={[0, 0, 1]} color="white" intensity={2} distance={5} />
        </group>
    )
}

function TruckModel({ position, delay = 0 }) {
    const { scene } = useGLTF(MODELS.TRUCK)
    const truckRef = useRef()
    const clonedScene = useMemo(() => scene.clone(), [scene])

    useFrame((state) => {
        const t = (state.clock.getElapsedTime() * 0.5 + delay) % 25
        truckRef.current.position.z = -25 + t * 2
    })

    return (
        <group ref={truckRef} position={position} scale={0.7} rotation={[0, Math.PI, 0]}>
            <primitive object={clonedScene} />
            <pointLight position={[0, 0.5, 1.5]} color="#ffffff" intensity={2} distance={10} />
        </group>
    )
}

function GantryCrane({ position }) {
    return (
        <group position={position}>
            <mesh position={[1, 1.5, 0]} castShadow>
                <boxGeometry args={[0.2, 3, 0.2]} />
                <meshStandardMaterial color="#334155" />
            </mesh>
            <mesh position={[-1, 1.5, 0]} castShadow>
                <boxGeometry args={[0.2, 3, 0.2]} />
                <meshStandardMaterial color="#334155" />
            </mesh>
            <mesh position={[0, 3, 0]} castShadow>
                <boxGeometry args={[4, 0.4, 0.4]} />
                <meshStandardMaterial color="#f59e0b" />
            </mesh>
        </group>
    )
}

function PortInfrastructure() {
    return (
        <group position={[10, -1, 0]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
                <planeGeometry args={[12, 50]} />
                <meshStandardMaterial color="#0f172a" roughness={0.8} />
            </mesh>
            <GantryCrane position={[-3, 0, -8]} />
            <GantryCrane position={[-3, 0, 4]} />
            {Array.from({ length: 16 }).map((_, i) => (
                <Container
                    key={i}
                    position={[-4.5, 0.4 + (i % 4) * 0.4, -8 + Math.floor(i / 4) * 1.5]}
                    color={['#ef4444', '#3b82f6', '#10b981', '#f59e0b'][i % 4]}
                />
            ))}
        </group>
    )
}

function Ocean() {
    return (
        <group>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]} receiveShadow>
                <planeGeometry args={[200, 200]} />
                <meshStandardMaterial color="#020617" roughness={0} metalness={0.9} />
            </mesh>
        </group>
    )
}

function Scene() {
    return (
        <>
            <color attach="background" args={['#020617']} />
            <ambientLight intensity={0.5} />
            <hemisphereLight intensity={1} groundColor="#000" color="#fff" />

            <directionalLight
                position={[30, 40, 30]}
                intensity={2}
                castShadow
                shadow-mapSize={[1024, 1024]}
            />

            <Stars radius={150} depth={50} count={6000} factor={6} saturation={0} fade speed={1.5} />
            <Sky sunPosition={[100, -10, 100]} turbidity={0.1} rayleigh={0.5} />

            <Suspense fallback={null}>
                <PlaneModel />
                <DreiFloat speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
                    <CargoShip />
                </DreiFloat>
                <PortInfrastructure />
                <TruckModel position={[10, -1, 0]} delay={0} />
                <TruckModel position={[10, -1, 12]} delay={10} />
            </Suspense>

            <Ocean />
            <ContactShadows position={[0, -0.99, 0]} opacity={0.6} scale={80} blur={2.5} far={10} />

            <OrbitControls
                enableZoom={true}
                enablePan={false}
                maxPolarAngle={Math.PI / 2.1}
                minPolarAngle={Math.PI / 15}
                autoRotate
            />
            <Environment preset="night" />
        </>
    )
}

function LoaderScreen() {
    return (
        <div className="loader-screen">
            <div className="loader-content">
                <div className="spinner"></div>
                <p>RE-ESTABLISHING LOGISTICS HUB...</p>
            </div>
        </div>
    )
}

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app-container">
            <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="loader-overlay"
                    >
                        <LoaderScreen />
                    </motion.div>
                )}
            </AnimatePresence>

            <nav>
                <div className="logo-section">
                    <Anchor className="logo-icon" size={24} />
                    <div className="logo">AFAQ AL BAHR</div>
                </div>
                <div className="nav-links">
                    <a href="#services" className="nav-link">Solutions</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
            </nav>

            <div className="canvas-container">
                <Canvas shadows camera={{ position: [20, 12, 20], fov: 40 }}>
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                    <fog attach="fog" args={['#020617', 30, 100]} />
                </Canvas>
            </div>

            <main className="overlay">
                <section className="hero">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="badge">PRECISION LOGISTICS</span>
                        <h1 className="title">GLOBAL<br />FREIGHT<br /><span className="accent-text">MASTERY</span></h1>
                    </motion.div>
                    <p className="subtitle">
                        Orchestrating complex maritime, air, and land logistics from the heart of Dubai to every corner of the globe.
                    </p>
                    <div className="hero-ctas">
                        <button className="cta-button primary">Start Shipping <ArrowRight size={18} /></button>
                        <button className="cta-button secondary">Our Network</button>
                    </div>
                </section>

                <section id="services" className="services-grid">
                    {[
                        { title: "Ocean Freight", icon: <Anchor />, desc: "Global maritime solutions with deep-sea operational excellence." },
                        { title: "Air Logistics", icon: <Plane />, desc: "Rapid response air freight for time-critical global trade." },
                        { title: "Land Transport", icon: <Truck />, desc: "Precision heavy-haulage across the continental network." },
                        { title: "Warehousing", icon: <Package />, desc: "Strategic inventory management and high-tech supply chain solutions." }
                    ].map((service, i) => (
                        <motion.div key={i} className="glass-card service-card" whileHover={{ scale: 1.02 }}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </section>

                <section id="about" style={{ padding: '0 10% 10%' }}>
                    <div className="glass-card full-width">
                        <h2 className="section-title">Global Excellence Meeting Every Wave</h2>
                        <p className="section-desc">
                            At Afaq Al Bahr Shipping, we understand that every shipment is a promise.
                            Our team engineers custom-fit logistics architectures to ensure your business never misses a beat.
                        </p>
                    </div>
                </section>

                <footer className="glass-footer">
                    <SocialLinks facebookUrl="https://www.facebook.com/afaqalbahr" linkedinUrl="https://www.linkedin.com/company/afaq-al-bahr-shipping-llc" instagramUrl="https://www.instagram.com/afaqalbahr" />
                    <p style={{ marginTop: '2rem', color: '#4b5563', fontSize: '0.8rem' }}>© 2026 AFAQ AL BAHR SHIPPING L.L.C. ALL RIGHTS RESERVED.</p>
                </footer>
            </main>
        </div>
    )
}

export default App
