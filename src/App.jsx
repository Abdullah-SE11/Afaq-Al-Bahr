import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, MeshWobbleMaterial, Text, Float as DreiFloat, Environment, ContactShadows, Stars, Sky, useGLTF, Center, Html } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { Ship, Plane, Globe, Package, Truck, Anchor, Menu, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import { SocialLinks } from './components/SocialLinks'
import './App.css'

// Preload models for a smoother experience
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/airplane/model.gltf')
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/truck/model.gltf')
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cargo-ship/model.gltf')

function Container({ position, color }) {
    return (
        <mesh position={position}>
            <boxGeometry args={[0.8, 0.4, 0.4]} />
            <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
        </mesh>
    )
}

function CargoShip() {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cargo-ship/model.gltf')
    const shipRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        shipRef.current.position.y = Math.sin(t * 0.5) * 0.1
        shipRef.current.rotation.z = Math.sin(t * 0.5) * 0.015
    })

    return (
        <group ref={shipRef} position={[0, -0.8, 0]} scale={2.5}>
            <primitive object={scene} />
        </group>
    )
}

function Ocean() {
    return (
        <group>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                <planeGeometry args={[100, 100, 64, 64]} />
                <MeshDistortMaterial
                    color="#010409"
                    roughness={0.1}
                    metalness={0.9}
                    distort={0.15}
                    speed={2}
                    transparent
                    opacity={0.95}
                />
            </mesh>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="#000" />
            </mesh>
        </group>
    )
}

function PlaneModel() {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/airplane/model.gltf')
    const planeRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        planeRef.current.position.x = Math.sin(t * 0.1) * 25
        planeRef.current.position.y = 8 + Math.sin(t * 0.3) * 1.5
        planeRef.current.position.z = Math.cos(t * 0.1) * 25
        planeRef.current.rotation.y = -t * 0.1 + Math.PI / 2
        planeRef.current.rotation.z = Math.sin(t * 0.1) * 0.15
    })

    return (
        <group ref={planeRef} scale={1.2}>
            <primitive object={scene} />
            <pointLight position={[2, 0, 0]} color="#ff0000" intensity={1} distance={10} />
            <pointLight position={[-2, 0, 0]} color="#00ff00" intensity={1} distance={10} />
        </group>
    )
}

function TruckModel({ position, delay = 0 }) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/truck/model.gltf')
    const truckRef = useRef()
    const clonedScene = scene.clone()

    useFrame((state) => {
        const t = (state.clock.getElapsedTime() * 0.5 + delay) % 20
        truckRef.current.position.z = -20 + t * 2
    })

    return (
        <group ref={truckRef} position={position} scale={0.7} rotation={[0, Math.PI, 0]}>
            <primitive object={clonedScene} />
            <pointLight position={[0.5, 0.5, 1.5]} color="#ffffff" intensity={2} distance={5} />
            <pointLight position={[-0.5, 0.5, 1.5]} color="#ffffff" intensity={2} distance={5} />
        </group>
    )
}

function GantryCrane({ position }) {
    return (
        <group position={position}>
            <mesh position={[1, 1.5, 0]}>
                <boxGeometry args={[0.2, 3, 0.2]} />
                <meshStandardMaterial color="#334155" />
            </mesh>
            <mesh position={[-1, 1.5, 0]}>
                <boxGeometry args={[0.2, 3, 0.2]} />
                <meshStandardMaterial color="#334155" />
            </mesh>
            <mesh position={[0, 3, 0]}>
                <boxGeometry args={[4, 0.4, 0.4]} />
                <meshStandardMaterial color="#f59e0b" />
            </mesh>
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
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
                <planeGeometry args={[12, 24]} />
                <meshStandardMaterial color="#1e293b" metalness={0.2} roughness={0.8} />
            </mesh>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[6, 0.02, 0]}>
                <planeGeometry args={[5, 24]} />
                <meshStandardMaterial color="#0f172a" />
            </mesh>
            {Array.from({ length: 12 }).map((_, i) => (
                <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[6, 0.03, -11 + i * 2]}>
                    <planeGeometry args={[0.2, 1.2]} />
                    <meshStandardMaterial color="#fbbf24" />
                </mesh>
            ))}
            <GantryCrane position={[-3, 0, -5]} />
            <GantryCrane position={[-3, 0, 2]} />
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
            <color attach="background" args={['#020617']} />
            <ambientLight intensity={0.5} />
            <hemisphereLight intensity={1} groundColor="#000" color="#fff" />
            <directionalLight position={[20, 30, 20]} intensity={2.5} castShadow shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} />
            <pointLight position={[-15, 15, -15]} intensity={2} color="#0ea5e9" />
            <spotLight position={[0, 15, 0]} angle={0.4} penumbra={1} intensity={2} color="#fef08a" />
            <Stars radius={100} depth={50} count={7000} factor={6} saturation={0} fade speed={1.5} />
            <Sky sunPosition={[100, -10, 100]} turbidity={0.05} rayleigh={0.2} />
            <ContactShadows position={[0, -0.99, 0]} opacity={0.6} scale={60} blur={2.5} far={10} resolution={512} color="#000" />

            <Suspense fallback={<Loader />}>
                <PlaneModel />
                <DreiFloat speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <CargoShip />
                </DreiFloat>
                <PortInfrastructure />
                <TruckModel position={[6, -1, 0]} delay={0} />
                <TruckModel position={[4, -1, 5]} delay={8} />
                <TruckModel position={[8, -1, -10]} delay={15} />
            </Suspense>

            <Ocean />

            <OrbitControls enableZoom={true} enablePan={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 15} autoRotate autoRotateSpeed={0.5} />
            <Environment preset="city" />
        </>
    )
}

function Loader() {
    return (
        <Html center>
            <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600, whiteSpace: 'nowrap' }}>Loading Realistic Assets...</div>
        </Html>
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
                    <fog attach="fog" args={['#020617', 15, 60]} />
                </Canvas>
            </div>

            <main className="overlay">
                <section className="hero">
                    <motion.h1 className="title" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        EXCELLENCE<br />MEETS THE<br />WAVES
                    </motion.h1>
                    <motion.p className="subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
                        Afaq Al Bahr Shipping L.L.C. is a leading shipping company dedicated to providing seamless maritime solutions.
                        Whether by air, heavy trucks, or sea, we navigate to connect businesses globally.
                    </motion.p>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="hero-ctas">
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <button className="cta-button">Connect Globally</button>
                            <SocialLinks facebookUrl="https://www.facebook.com/afaqalbahr" linkedinUrl="https://www.linkedin.com/company/afaq-al-bahr-shipping-llc" instagramUrl="https://www.instagram.com/afaqalbahr" />
                        </div>
                    </motion.div>
                </section>

                <section id="services" className="services-grid">
                    {[
                        { title: "Maritime Solutions", icon: <Anchor size={32} />, desc: "Dedicated to providing seamless maritime solutions with a commitment to reliability and innovation." },
                        { title: "Air Freight", icon: <Plane size={32} />, desc: "Fast and secure air shipping to ensure your business stays connected to the global market." },
                        { title: "Land Transport", icon: <Truck size={32} />, desc: "Leading transport by heavy trucks, ensuring your cargo reaches its destination safely and on time." },
                        { title: "Logistics Innovation", icon: <Package size={32} />, desc: "Embracing cutting-edge technology and industry best practices to enhance service efficiency." }
                    ].map((service, i) => (
                        <motion.div key={i} className="glass-card service-card" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </section>

                <section className="about-section" style={{ padding: '5% 10%' }}>
                    <motion.div className="glass-card" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
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
                    </motion.div>
                </section>

                <section style={{ padding: '10%', textAlign: 'center' }}>
                    <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2>Ready to Move?</h2>
                        <p>Connect with our logistics experts in Dubai for a customized quote.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                            <input type="email" placeholder="Enter your email" className="glass-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem 1.5rem', outline: 'none' }} />
                            <button className="cta-button" style={{ marginTop: 0 }}>Get Quote</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default App
