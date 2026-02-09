import React, { Suspense, useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars, Sky, useGLTF, Environment, ContactShadows, Html, Float as DreiFloat } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { Ship, Plane, Globe, Package, Truck, Anchor, Menu, Facebook, Linkedin, Instagram, ArrowRight, ExternalLink } from 'lucide-react'
import { SocialLinks } from './components/SocialLinks'
import './App.css'

// Professional 3D Assets (Verified URLs)
const MODELS = {
    PLANE: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/airplane/model.gltf',
    TRUCK: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/truck/model.gltf',
    SHIP: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cargo-ship/model.gltf'
}

// Preload to speed up loading
try {
    useGLTF.preload(MODELS.PLANE)
    useGLTF.preload(MODELS.TRUCK)
    useGLTF.preload(MODELS.SHIP)
} catch (e) {
    console.error("Model preloading failed", e)
}

function Loader() {
    return (
        <Html center>
            <div className="loader-3d">
                <div className="spinner"></div>
                <p>INITIALIZING ASSETS...</p>
            </div>
        </Html>
    )
}

function CargoShip() {
    const { scene } = useGLTF(MODELS.SHIP)
    const shipRef = useRef()
    const clonedScene = useMemo(() => scene.clone(), [scene])

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        shipRef.current.position.y = Math.sin(t * 0.4) * 0.1
        shipRef.current.rotation.z = Math.sin(t * 0.4) * 0.015
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
        planeRef.current.position.x = Math.sin(t * 0.1) * 35
        planeRef.current.position.y = 10 + Math.sin(t * 0.25) * 2
        planeRef.current.position.z = Math.cos(t * 0.1) * 35
        planeRef.current.rotation.y = -t * 0.1 + Math.PI / 2
        planeRef.current.rotation.z = Math.sin(t * 0.1) * 0.15
    })

    return (
        <group ref={planeRef} scale={1.5}>
            <primitive object={clonedScene} />
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
        </group>
    )
}

function Ocean() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color="#020617" roughness={0.1} metalness={0.8} />
        </mesh>
    )
}

function Scene() {
    return (
        <>
            <color attach="background" args={['#020617']} />
            <ambientLight intensity={0.5} />
            <hemisphereLight intensity={1} groundColor="#000" color="#fff" />
            <directionalLight position={[20, 30, 20]} intensity={1.5} castShadow />

            <Stars radius={150} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sky sunPosition={[100, -10, 100]} turbidity={0.1} rayleigh={0.5} />

            <Suspense fallback={<Loader />}>
                <PlaneModel />
                <DreiFloat speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <CargoShip />
                </DreiFloat>
                <TruckModel position={[8, -1, 0]} delay={0} />
                <TruckModel position={[8, -1, 10]} delay={5} />
            </Suspense>

            <Ocean />
            <ContactShadows position={[0, -0.99, 0]} opacity={0.5} scale={50} blur={2} />

            <OrbitControls
                enableZoom={true}
                enablePan={false}
                maxPolarAngle={Math.PI / 2.1}
                minPolarAngle={Math.PI / 15}
            />
            <Environment preset="night" />
        </>
    )
}

function App() {
    return (
        <div className="app-container">
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
                <Canvas shadows camera={{ position: [18, 10, 18], fov: 40 }}>
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                    <fog attach="fog" args={['#020617', 20, 80]} />
                </Canvas>
            </div>

            <main className="overlay">
                <section className="hero">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="badge">PRECISION LOGISTICS</span>
                        <h1 className="title">GLOBAL<br />FREIGHT<br /><span className="accent-text">MASTERY</span></h1>
                        <p className="subtitle">
                            Orchestrating complex maritime, air, and land logistics from Dubai to the world.
                        </p>
                        <div className="hero-ctas">
                            <button className="cta-button primary">Start Shipping <ArrowRight size={18} /></button>
                            <button className="cta-button secondary">Network</button>
                        </div>
                    </motion.div>
                </section>

                <section id="services" className="services-grid">
                    {[
                        { title: "Ocean Freight", icon: <Anchor />, desc: "Global maritime solutions with deep-sea operational excellence." },
                        { title: "Air Logistics", icon: <Plane />, desc: "Rapid response air freight for time-critical global trade." },
                        { title: "Land Transport", icon: <Truck />, desc: "Precision heavy-haulage across the continental network." },
                        { title: "Warehousing", icon: <Package />, desc: "Strategic inventory management and supply chain solutions." }
                    ].map((service, i) => (
                        <motion.div key={i} className="glass-card service-card" whileHover={{ scale: 1.02 }}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
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
