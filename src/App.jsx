import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, MeshWobbleMaterial, Text, Float as DreiFloat } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { Ship, Plane, Globe, Package, Truck, Anchor, Menu, Facebook, Linkedin, Instagram } from 'lucide-react'
import { SocialLinks } from './components/SocialLinks'
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
    const radarRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        shipRef.current.position.y = Math.sin(t * 0.5) * 0.1
        shipRef.current.rotation.z = Math.sin(t * 0.5) * 0.02
        radarRef.current.rotation.y = t * 2
    })

    return (
        <group ref={shipRef} position={[0, -0.5, 0]}>
            {/* Hull - Multi-part for realism */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[6.5, 0.9, 2.2]} />
                <meshPhysicalMaterial color="#020617" roughness={0.3} metalness={0.9} />
            </mesh>
            <mesh position={[3.3, 0.1, 0]} rotation={[0, 0, -Math.PI / 6]}>
                <boxGeometry args={[1.2, 0.9, 2.2]} />
                <meshPhysicalMaterial color="#020617" roughness={0.3} metalness={0.9} />
            </mesh>

            {/* Bridge - Tiered structure */}
            <group position={[-2.2, 1.1, 0]}>
                {/* Tier 1 */}
                <mesh>
                    <boxGeometry args={[1.8, 0.6, 1.8]} />
                    <meshPhysicalMaterial color="#ffffff" />
                </mesh>
                {/* Tier 2 */}
                <mesh position={[0, 0.6, 0]}>
                    <boxGeometry args={[1.2, 0.5, 1.4]} />
                    <meshPhysicalMaterial color="#ffffff" />
                </mesh>
                {/* Windows - Emissive glass */}
                <mesh position={[0.4, 0.6, 0]}>
                    <boxGeometry args={[0.5, 0.25, 1.41]} />
                    <meshPhysicalMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.8} transparent opacity={0.6} />
                </mesh>
                {/* Railings (Simplified) */}
                <mesh position={[0, 0.3, 0]}>
                    <boxGeometry args={[1.9, 0.05, 1.9]} />
                    <meshPhysicalMaterial color="#94a3b8" />
                </mesh>
                {/* Radar Mast */}
                <mesh position={[-0.2, 1, 0]}>
                    <cylinderGeometry args={[0.05, 0.05, 0.8]} />
                    <meshPhysicalMaterial color="#334155" />
                </mesh>
                <mesh ref={radarRef} position={[-0.2, 1.4, 0]}>
                    <boxGeometry args={[1.2, 0.1, 0.2]} />
                    <meshPhysicalMaterial color="#f1f5f9" />
                </mesh>
            </group>

            {/* Deck Machinery */}
            <mesh position={[2, 0.5, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2]} />
                <meshPhysicalMaterial color="#334155" />
            </mesh>

            {/* Containers - More variety */}
            <Container position={[0, 0.6, 0.6]} color="#ef4444" />
            <Container position={[0, 0.6, -0.6]} color="#3b82f6" />
            <Container position={[1, 0.6, 0.6]} color="#10b981" />
            <Container position={[1, 0.6, -0.6]} color="#f59e0b" />
            <Container position={[-0.8, 0.6, 0.4]} color="#3b82f6" />
            <Container position={[-0.8, 0.6, -0.4]} color="#ef4444" />
            <Container position={[0, 1.05, 0.6]} color="#3b82f6" />
            <Container position={[1, 1.05, -0.6]} color="#ef4444" />
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

function PlaneModel() {
    const planeRef = useRef()
    const fanRef1 = useRef()
    const fanRef2 = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        planeRef.current.position.x = Math.sin(t * 0.1) * 22
        planeRef.current.position.y = 6 + Math.sin(t * 0.3) * 1.2
        planeRef.current.position.z = Math.cos(t * 0.1) * 22
        planeRef.current.rotation.y = -t * 0.1 + Math.PI / 2
        planeRef.current.rotation.z = Math.sin(t * 0.1) * 0.15

        fanRef1.current.rotation.y = t * 10
        fanRef2.current.rotation.y = t * 10
    })

    return (
        <group ref={planeRef}>
            {/* Fuselage - Structured */}
            <group rotation={[0, 0, Math.PI / 2]}>
                <mesh>
                    <cylinderGeometry args={[0.4, 0.4, 3, 16]} />
                    <meshPhysicalMaterial color="#ffffff" metalness={0.2} roughness={0.1} />
                </mesh>
                {/* Nose Cone */}
                <mesh position={[0, 1.8, 0]}>
                    <sphereGeometry args={[0.4, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
                    <meshPhysicalMaterial color="#ffffff" />
                </mesh>
                {/* Tail Taper */}
                <mesh position={[0, -1.8, 0]} rotation={[Math.PI, 0, 0]}>
                    <coneGeometry args={[0.4, 1, 16]} />
                    <meshPhysicalMaterial color="#ffffff" />
                </mesh>
            </group>

            {/* Swept Wings */}
            <group position={[0, 0, 0.2]}>
                <mesh rotation={[0.4, 0, 0]} position={[1.5, 0, -0.3]} scale={[1, 1, 0.5]}>
                    <boxGeometry args={[3, 0.05, 1.2]} />
                    <meshPhysicalMaterial color="#ffffff" />
                </mesh>
                <mesh rotation={[-0.4, 0, 0]} position={[-1.5, 0, -0.3]} scale={[1, 1, 0.5]}>
                    <boxGeometry args={[3, 0.05, 1.2]} />
                    <meshPhysicalMaterial color="#ffffff" />
                </mesh>
            </group>

            {/* Engines with spinning fans */}
            <group position={[1.2, -0.4, 0.2]}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[0.25, 0.25, 0.7, 16]} />
                    <meshPhysicalMaterial color="#94a3b8" metalness={0.8} />
                </mesh>
                <mesh ref={fanRef1} position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[0.4, 0.02, 0.4]} />
                    <meshPhysicalMaterial color="#1e293b" />
                </mesh>
            </group>
            <group position={[-1.2, -0.4, 0.2]}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[0.25, 0.25, 0.7, 16]} />
                    <meshPhysicalMaterial color="#94a3b8" metalness={0.8} />
                </mesh>
                <mesh ref={fanRef2} position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[0.4, 0.02, 0.4]} />
                    <meshPhysicalMaterial color="#1e293b" />
                </mesh>
            </group>

            {/* Tail Stabilizers */}
            <mesh position={[0, 0.6, -1.8]} rotation={[0.3, 0, 0]}>
                <boxGeometry args={[0.05, 1, 0.6]} />
                <meshPhysicalMaterial color="#ffffff" />
            </mesh>
            <mesh position={[0, 0.1, -1.8]} rotation={[0, 0, 0]}>
                <boxGeometry args={[1.5, 0.05, 0.4]} />
                <meshPhysicalMaterial color="#ffffff" />
            </mesh>

            {/* Cockpit - Dark Glass */}
            <mesh position={[0, 0.25, 1.4]} rotation={[0.4, 0, 0]}>
                <boxGeometry args={[0.45, 0.2, 0.4]} />
                <meshPhysicalMaterial color="#020617" roughness={0} />
            </mesh>
        </group>
    )
}

function TruckModel({ position, delay = 0, color = "#2563eb" }) {
    const truckRef = useRef()
    useFrame((state) => {
        const t = (state.clock.getElapsedTime() * 0.4 + delay) % 18
        truckRef.current.position.z = -18 + t * 2
    })

    return (
        <group ref={truckRef} position={position}>
            {/* Cab section */}
            <group position={[0, 0.1, 1]}>
                {/* Main Body */}
                <mesh position={[0, 0.4, 0]}>
                    <boxGeometry args={[0.8, 0.8, 0.6]} />
                    <meshPhysicalMaterial color="#1e293b" metalness={0.5} roughness={0.2} />
                </mesh>
                {/* Grill */}
                <mesh position={[0, 0.3, 0.31]}>
                    <boxGeometry args={[0.6, 0.4, 0.05]} />
                    <meshPhysicalMaterial color="#334155" metalness={1} roughness={0} />
                </mesh>
                {/* Bumper */}
                <mesh position={[0, 0.05, 0.35]}>
                    <boxGeometry args={[0.85, 0.15, 0.1]} />
                    <meshPhysicalMaterial color="#000000" />
                </mesh>
                {/* Headlights */}
                <mesh position={[0.3, 0.1, 0.36]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshPhysicalMaterial color="#fff" emissive="#fff" emissiveIntensity={3} />
                </mesh>
                <mesh position={[-0.3, 0.1, 0.36]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshPhysicalMaterial color="#fff" emissive="#fff" emissiveIntensity={3} />
                </mesh>
                {/* Windows */}
                <mesh position={[0, 0.55, 0.31]}>
                    <boxGeometry args={[0.7, 0.35, 0.01]} />
                    <meshPhysicalMaterial color="#0369a1" transparent opacity={0.7} />
                </mesh>
                {/* Side Mirrors */}
                <mesh position={[0.45, 0.55, 0.1]}>
                    <boxGeometry args={[0.05, 0.3, 0.1]} />
                    <meshPhysicalMaterial color="#1e293b" />
                </mesh>
                <mesh position={[-0.45, 0.55, 0.1]}>
                    <boxGeometry args={[0.05, 0.3, 0.1]} />
                    <meshPhysicalMaterial color="#1e293b" />
                </mesh>
            </group>

            {/* Chassis & Coupler */}
            <mesh position={[0, 0.15, -0.2]}>
                <boxGeometry args={[0.7, 0.15, 2]} />
                <meshPhysicalMaterial color="#111" />
            </mesh>

            {/* Trailer */}
            <mesh position={[0, 0.65, -0.6]}>
                <boxGeometry args={[0.85, 1, 2.4]} />
                <meshPhysicalMaterial color={color} metalness={0.4} />
            </mesh>
            {/* Logos on trailer */}
            <mesh position={[0.43, 0.8, -0.6]}>
                <boxGeometry args={[0.01, 0.2, 0.8]} />
                <meshPhysicalMaterial color="#fff" />
            </mesh>

            {/* Wheels with Hubs */}
            {[[-0.35, 0.1, 0.8], [0.35, 0.1, 0.8], [-0.35, 0.1, -0.4], [0.35, 0.1, -0.4], [-0.35, 0.1, -1.2], [0.35, 0.1, -1.2]].map((pos, i) => (
                <group key={i} position={pos} rotation={[0, 0, Math.PI / 2]}>
                    <mesh>
                        <cylinderGeometry args={[0.18, 0.18, 0.15, 24]} />
                        <meshPhysicalMaterial color="#111" />
                    </mesh>
                    <mesh position={[0, 0.08, 0]}>
                        <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
                        <meshPhysicalMaterial color="#94a3b8" metalness={1} />
                    </mesh>
                </group>
            ))}
        </group>
    )
}

function GantryCrane({ position }) {
    return (
        <group position={position}>
            {/* Legs */}
            <mesh position={[1, 1.5, 0]}>
                <boxGeometry args={[0.2, 3, 0.2]} />
                <meshStandardMaterial color="#334155" />
            </mesh>
            <mesh position={[-1, 1.5, 0]}>
                <boxGeometry args={[0.2, 3, 0.2]} />
                <meshStandardMaterial color="#334155" />
            </mesh>
            {/* Top Beam */}
            <mesh position={[0, 3, 0]}>
                <boxGeometry args={[4, 0.4, 0.4]} />
                <meshStandardMaterial color="#f59e0b" />
            </mesh>
            {/* Trolley */}
            <mesh position={[0.5, 2.7, 0]}>
                <boxGeometry args={[0.6, 0.2, 0.6]} />
                <meshStandardMaterial color="#1e293b" />
            </mesh>
        </group>
    )
}

function PortInfrastructure() {
    return (
        <group position={[7, -1, 0]}>
            {/* Port Ground */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
                <planeGeometry args={[12, 24]} />
                <meshStandardMaterial color="#1e293b" metalness={0.2} roughness={0.8} />
            </mesh>
            {/* Runway */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[6, 0.02, 0]}>
                <planeGeometry args={[5, 24]} />
                <meshStandardMaterial color="#0f172a" />
            </mesh>
            {/* Runway Markings */}
            {Array.from({ length: 12 }).map((_, i) => (
                <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[6, 0.03, -11 + i * 2]}>
                    <planeGeometry args={[0.2, 1.2]} />
                    <meshStandardMaterial color="#fbbf24" />
                </mesh>
            ))}
            <GantryCrane position={[-3, 0, -5]} />
            <GantryCrane position={[-3, 0, 2]} />

            {/* Containers Stacks */}
            {Array.from({ length: 12 }).map((_, i) => (
                <Container
                    key={i}
                    position={[-4.5, 0.4 + (i % 4) * 0.4, -6 + Math.floor(i / 4) * 0.8]}
                    color={['#ef4444', '#3b82f6', '#10b981', '#f59e0b'][i % 4]}
                />
            ))}
        </group>
    )
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.2} />
            <hemisphereLight intensity={0.4} groundColor="#000" color="#fff" />
            <directionalLight
                position={[20, 30, 20]}
                intensity={2}
                castShadow
                shadow-mapSize={[4096, 4096]}
            />
            <pointLight position={[-15, 15, -15]} intensity={1.5} color="#0ea5e9" />
            <spotLight position={[0, 15, 0]} angle={0.8} penumbra={1} intensity={1} color="#fef08a" />

            <PlaneModel />

            <DreiFloat speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <CargoShip />
            </DreiFloat>

            <PortInfrastructure />

            <TruckModel position={[4.5, -1, 0]} color="#ef4444" delay={0} />
            <TruckModel position={[3.5, -1, 4]} delay={6} color="#10b981" />
            <TruckModel position={[5.5, -1, -8]} delay={12} color="#f59e0b" />

            <Ocean />

            <OrbitControls
                enableZoom={true}
                enablePan={false}
                maxPolarAngle={Math.PI / 2.1}
                minPolarAngle={Math.PI / 10}
            />
            <Environment preset="night" />
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
                    <PerspectiveCamera makeDefault position={[12, 6, 12]} fov={45} />
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                    <fog attach="fog" args={['#020617', 5, 40]} />
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
                        EXCELLENCE<br />MEETS THE<br />WAVES
                    </motion.h1>
                    <motion.p
                        className="subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        Afaq Al Bahr Shipping L.L.C. is a leading shipping company dedicated to providing
                        seamless maritime solutions. Whether by air, heavy trucks, or sea, we navigate
                        to connect businesses globally.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-ctas"
                    >
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <button className="cta-button">Connect Globally</button>
                            <SocialLinks facebookUrl="https://www.facebook.com/afaqalbahr" linkedinUrl="https://www.linkedin.com/company/afaq-al-bahr-shipping-llc" instagramUrl="https://www.instagram.com/afaqalbahr" />
                        </div>
                    </motion.div>
                </section>

                <section id="services" className="services-grid">
                    {[
                        {
                            title: "Maritime Solutions",
                            icon: <Anchor size={32} />,
                            desc: "Dedicated to providing seamless maritime solutions with a commitment to reliability and innovation."
                        },
                        {
                            title: "Air Freight",
                            icon: <Plane size={32} />,
                            desc: "Fast and secure air shipping to ensure your business stays connected to the global market."
                        },
                        {
                            title: "Land Transport",
                            icon: <Truck size={32} />,
                            desc: "Leading transport by heavy trucks, ensuring your cargo reaches its destination safely and on time."
                        },
                        {
                            title: "Logistics Innovation",
                            icon: <Package size={32} />,
                            desc: "Embracing cutting-edge technology and industry best practices to enhance service efficiency."
                        }
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

                <section className="about-section" style={{ padding: '5% 10%' }}>
                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Your Satisfaction is Our Priority</h2>
                        <p style={{ fontSize: '1.2rem', color: '#94a3b8', lineHeight: '1.8' }}>
                            Our dedicated team is always ready to listen, adapt, and provide solutions tailored to your unique shipping needs.
                            We understand the importance of timely deliveries and the impact it has on your business.
                            With <strong>Afaq Al Bahr Shipping</strong>, you can trust us to deliver on time, every time.
                        </p>

                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Follow Our Journey</h4>
                            <SocialLinks facebookUrl="https://www.facebook.com/afaqalbahr" linkedinUrl="https://www.linkedin.com/company/afaq-al-bahr-shipping-llc" instagramUrl="https://www.instagram.com/afaqalbahr" />
                        </div>

                        <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
                            <div>
                                <h4 style={{ color: '#fff' }}>Reliability</h4>
                                <p style={{ fontSize: '0.9rem' }}>Consistent & Secure</p>
                            </div>
                            <div>
                                <h4 style={{ color: '#fff' }}>Innovation</h4>
                                <p style={{ fontSize: '0.9rem' }}>Cutting-edge Tech</p>
                            </div>
                            <div>
                                <h4 style={{ color: '#fff' }}>Commitment</h4>
                                <p style={{ fontSize: '0.9rem' }}>24/7 Support</p>
                            </div>
                        </div>
                    </motion.div>
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
