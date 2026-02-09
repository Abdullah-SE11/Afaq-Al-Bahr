import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, MeshWobbleMaterial, Text, Float as DreiFloat } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { Ship, Plane, Globe, Package, Truck, Anchor, Menu } from 'lucide-react'
import './App.css'

function Container({ position, color }) {
    return (
        <mesh position={position}>
            <boxGeometry args={[0.8, 0.4, 0.4]} />
            <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
        </mesh>
    )
}

function CargoShip() {
    const shipRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        shipRef.current.position.y = Math.sin(t * 0.5) * 0.1
        shipRef.current.rotation.z = Math.sin(t * 0.5) * 0.02
    })

    return (
        <group ref={shipRef} position={[0, -0.5, 0]}>
            {/* Hull */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[6, 0.8, 2]} />
                <meshStandardMaterial color="#1e293b" />
            </mesh>
            <mesh position={[3, 0.1, 0]} rotation={[0, 0, -Math.PI / 8]}>
                <boxGeometry args={[1, 0.8, 2]} />
                <meshStandardMaterial color="#1e293b" />
            </mesh>

            {/* Bridge */}
            <mesh position={[-2, 0.8, 0]}>
                <boxGeometry args={[1.5, 1, 1.5]} />
                <meshStandardMaterial color="#f1f5f9" />
            </mesh>

            {/* Containers */}
            <Container position={[0, 0.6, 0.5]} color="#ef4444" />
            <Container position={[0, 0.6, -0.5]} color="#3b82f6" />
            <Container position={[1, 0.6, 0.5]} color="#10b981" />
            <Container position={[1, 0.6, -0.5]} color="#f59e0b" />
            <Container position={[0, 1, 0.5]} color="#3b82f6" />
            <Container position={[1, 1, -0.5]} color="#ef4444" />
        </group>
    )
}

function Ocean() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[100, 100, 32, 32]} />
            <MeshDistortMaterial
                color="#083344"
                speed={1}
                distort={0.2}
                radius={1}
            />
        </mesh>
    )
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            <DreiFloat speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <CargoShip />
            </DreiFloat>

            <Ocean />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2.1}
                minPolarAngle={Math.PI / 3}
            />
        </>
    )
}

function App() {
    return (
        <div className="app-container">
            <nav>
                <div className="logo">AFAQ AL BAHR</div>
                <div className="nav-links">
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
            </nav>

            <div className="canvas-container">
                <Canvas shadows>
                    <PerspectiveCamera makeDefault position={[8, 3, 8]} fov={40} />
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                    <fog attach="fog" args={['#020617', 10, 30]} />
                </Canvas>
            </div>

            <main className="overlay">
                <section className="hero">
                    <motion.h1
                        className="title"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        GLOBAL<br />LOGISTICS<br />REDEFINED
                    </motion.h1>
                    <motion.p
                        className="subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        Afaq Al Bahr Shipping L.L.C. delivers excellence across air, sea, and land.
                        Navigating the future of global trade from the heart of Dubai.
                    </motion.p>
                    <motion.button
                        className="cta-button"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Track Shipment
                    </motion.button>
                </section>

                <section id="services" className="services-grid">
                    {[
                        { title: "Sea Freight", icon: <Anchor size={32} />, desc: "Global container shipping and port-to-port logistics." },
                        { title: "Air Freight", icon: <Plane size={32} />, desc: "Urgent cargo solutions with worldwide express delivery." },
                        { title: "Land Transport", icon: <Truck size={32} />, desc: "Regional trucking and distribution across the UAE." },
                        { title: "Door-to-Door", icon: <Package size={32} />, desc: "Comprehensive packing and end-to-end delivery services." }
                    ].map((service, i) => (
                        <motion.div
                            key={i}
                            className="glass-card service-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </section>

                <section style={{ padding: '10%', textAlign: 'center' }}>
                    <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2>Ready to Move?</h2>
                        <p>Connect with our logistics experts in Dubai for a customized quote.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="glass-card"
                                style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem 1.5rem', outline: 'none' }}
                            />
                            <button className="cta-button" style={{ marginTop: 0 }}>Get Quote</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default App
