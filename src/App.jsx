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

function PlaneModel() {
    const planeRef = useRef()
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        planeRef.current.position.x = Math.sin(t * 0.2) * 15
        planeRef.current.position.y = 4 + Math.sin(t * 0.5) * 0.5
        planeRef.current.position.z = Math.cos(t * 0.2) * 15
        planeRef.current.rotation.y = -t * 0.2 + Math.PI / 2
    })

    return (
        <group ref={planeRef}>
            {/* Fuselage */}
            <mesh>
                <capsuleGeometry args={[0.3, 2, 4, 8]} />
                <meshStandardMaterial color="#f8fafc" />
            </mesh>
            {/* Wings */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <boxGeometry args={[3, 0.1, 0.5]} />
                <meshStandardMaterial color="#f8fafc" />
            </mesh>
            {/* Tail */}
            <mesh position={[0, 0.3, -1]} rotation={[Math.PI / 4, 0, 0]}>
                <boxGeometry args={[0.8, 0.1, 0.4]} />
                <meshStandardMaterial color="#f8fafc" />
            </mesh>
        </group>
    )
}

function TruckModel({ position, delay = 0 }) {
    const truckRef = useRef()
    useFrame((state) => {
        const t = (state.clock.getElapsedTime() + delay) % 10
        truckRef.current.position.z = -10 + t * 2
    })

    return (
        <group ref={truckRef} position={position}>
            {/* Cab */}
            <mesh position={[0, 0.3, 0.8]}>
                <boxGeometry args={[0.6, 0.6, 0.4]} />
                <meshStandardMaterial color="#1e293b" />
            </mesh>
            {/* Trailer */}
            <mesh position={[0, 0.4, -0.2]}>
                <boxGeometry args={[0.6, 0.8, 1.6]} />
                <meshStandardMaterial color="#3b82f6" />
            </mesh>
            {/* Wheels */}
            {[[-0.3, 0.1, 0.6], [0.3, 0.1, 0.6], [-0.3, 0.1, -0.6], [0.3, 0.1, -0.6]].map((pos, i) => (
                <mesh key={i} position={pos} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
                    <meshStandardMaterial color="#000" />
                </mesh>
            ))}
        </group>
    )
}

function PortInfrastructure() {
    return (
        <group position={[5, -1, 0]}>
            {/* Port Ground */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
                <planeGeometry args={[10, 20]} />
                <meshStandardMaterial color="#334155" />
            </mesh>
            {/* Runway */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[5, 0.02, 0]}>
                <planeGeometry args={[4, 20]} />
                <meshStandardMaterial color="#1e293b" />
            </mesh>
            {/* Runway Markings */}
            {Array.from({ length: 10 }).map((_, i) => (
                <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[5, 0.03, -9 + i * 2]}>
                    <planeGeometry args={[0.2, 1]} />
                    <meshStandardMaterial color="#fff" />
                </mesh>
            ))}
            {/* Containers Stacks */}
            {Array.from({ length: 6 }).map((_, i) => (
                <Container
                    key={i}
                    position={[-3, 0.4 + (i % 3) * 0.4, -2 + Math.floor(i / 3) * 0.5]}
                    color={['#ef4444', '#3b82f6', '#10b981', '#f59e0b'][i % 4]}
                />
            ))}
        </group>
    )
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <pointLight position={[-10, 5, -10]} intensity={0.5} />

            <PlaneModel />

            <DreiFloat speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <CargoShip />
            </DreiFloat>

            <PortInfrastructure />

            <TruckModel position={[4, -1, 0]} />
            <TruckModel position={[3, -1, 0]} delay={5} />

            <Ocean />

            <OrbitControls
                enableZoom={true}
                enablePan={false}
                maxPolarAngle={Math.PI / 2.1}
                minPolarAngle={Math.PI / 6}
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
