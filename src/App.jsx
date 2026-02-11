import React, { Suspense, useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars, Sky, useGLTF, Environment, ContactShadows, Html, Float as DreiFloat } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { Ship, Plane, Globe, Package, Truck, Anchor, Menu, Facebook, Linkedin, Instagram, ArrowRight, ExternalLink } from 'lucide-react'
import { SocialLinks } from './components/SocialLinks'

// Professional 3D Assets (Verified URLs)
const MODELS = {
    PLANE: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/airplane/model.gltf',
    TRUCK: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/truck/model.gltf',
    SHIP: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cargo-ship/model.gltf'
}

const CONTAINER_COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#6366f1']

class SafeComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
        console.warn("3D Component Error caught:", error)
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback || null
        }
        return this.props.children
    }
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

function ModelFallback({ type }) {
    const color = type === 'ship' ? '#0ea5e9' : type === 'plane' ? '#38bdf8' : '#7dd3fc'
    return (
        <group>
            <mesh>
                <boxGeometry args={type === 'ship' ? [3, 0.5, 1] : type === 'plane' ? [1, 0.2, 1.5] : [1, 0.6, 2]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.6}
                    roughness={0}
                    metalness={1}
                />
            </mesh>
            <pointLight color={color} intensity={2} distance={5} />
        </group>
    )
}

function CargoShip() {
    const { scene } = useGLTF(MODELS.SHIP)
    const shipRef = useRef()
    const clonedScene = useMemo(() => scene.clone(), [scene])

    useFrame((state) => {
        if (!shipRef.current) return
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
        if (!planeRef.current) return
        const t = state.clock.getElapsedTime() * 0.15
        planeRef.current.position.x = Math.sin(t) * 80
        planeRef.current.position.y = 25 + Math.sin(t * 2) * 5
        planeRef.current.position.z = Math.cos(t) * 80
        planeRef.current.rotation.y = -t + Math.PI / 2
        planeRef.current.lookAt(0, 25, 0)
    })

    return (
        <group ref={planeRef} scale={1.5}>
            <primitive object={clonedScene} />
            <pointLight intensity={2} color="#fca5a1" distance={10} />
        </group>
    )
}

function TruckModel({ position, delay = 0 }) {
    const { scene } = useGLTF(MODELS.TRUCK)
    const truckRef = useRef()
    const clonedScene = useMemo(() => scene.clone(), [scene])

    useFrame((state) => {
        if (!truckRef.current) return
        const t = (state.clock.getElapsedTime() * 0.3 + delay) % 1
        truckRef.current.position.x = 120 - t * 240
    })

    return (
        <group ref={truckRef} position={position} scale={0.7} rotation={[0, -Math.PI / 2, 0]}>
            <primitive object={clonedScene} />
            {/* Headlights */}
            <mesh position={[2, 1, 0]}>
                <sphereGeometry args={[0.1]} />
                <meshStandardMaterial emissive="#fff" emissiveIntensity={5} />
            </mesh>
            <pointLight position={[3, 1, 0]} intensity={1} distance={5} color="#fff" />
        </group>
    )
}

function GantryCrane({ position }) {
    return (
        <group position={position}>
            {/* Base legs */}
            <mesh position={[-2, 5, 0]}>
                <boxGeometry args={[0.5, 10, 0.5]} />
                <meshStandardMaterial color="#ea580c" metalness={0.7} />
            </mesh>
            <mesh position={[2, 5, 0]}>
                <boxGeometry args={[0.5, 10, 0.5]} />
                <meshStandardMaterial color="#ea580c" metalness={0.7} />
            </mesh>
            {/* Top horizontal */}
            <mesh position={[2, 10, 0]}>
                <boxGeometry args={[12, 1, 1.5]} />
                <meshStandardMaterial color="#ea580c" metalness={0.7} />
            </mesh>
            {/* Control cabin */}
            <mesh position={[-1, 9, 0]}>
                <boxGeometry args={[1.5, 1.5, 2]} />
                <meshStandardMaterial color="#334155" />
            </mesh>
            {/* Support cables/structure */}
            <mesh position={[5, 12, 0]} rotation={[0, 0, Math.PI / 4]}>
                <boxGeometry args={[0.1, 8, 0.1]} />
                <meshStandardMaterial color="#fca5a1" />
            </mesh>
            {/* Lights */}
            <mesh position={[0, 10, 1]}>
                <sphereGeometry args={[0.2]} />
                <meshStandardMaterial emissive="#fde047" emissiveIntensity={5} />
            </mesh>
        </group>
    )
}

function ContainerStack({ position, rows = 3, levels = 4 }) {
    return (
        <group position={position}>
            {Array.from({ length: rows }).map((_, r) => (
                Array.from({ length: levels }).map((_, l) => (
                    <mesh key={`${r}-${l}`} position={[r * 2.2, l * 1.1, 0]}>
                        <boxGeometry args={[2, 1, 5]} />
                        <meshStandardMaterial color={CONTAINER_COLORS[(r + l) % CONTAINER_COLORS.length]} roughness={0.5} />
                    </mesh>
                ))
            ))}
        </group>
    )
}

function PortInfrastructure() {
    return (
        <group position={[0, -1, -35]}>
            {/* Main Pier Deck */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[250, 1, 25]} />
                <meshStandardMaterial color="#1e293b" metalness={0.2} roughness={0.8} />
            </mesh>

            {/* Moored Ships (Large hulls) */}
            <group position={[-60, 1, 15]}>
                <mesh rotation={[0, 0, 0]}>
                    <boxGeometry args={[50, 6, 12]} />
                    <meshStandardMaterial color="#0f172a" />
                </mesh>
                <ContainerStack position={[-10, 4, 0]} rows={8} levels={5} />
                {/* Ship Lights */}
                <pointLight position={[0, 8, 0]} intensity={2} color="#fff" distance={20} />
            </group>

            <group position={[60, 1, 15]}>
                <mesh>
                    <boxGeometry args={[45, 5, 10]} />
                    <meshStandardMaterial color="#1e3a8a" />
                </mesh>
                <ContainerStack position={[-10, 3.5, 0]} rows={6} levels={4} />
            </group>

            {/* Gantry Cranes */}
            {[-80, -40, 0, 40, 80].map((x, i) => (
                <GantryCrane key={i} position={[x, 0.5, 0]} />
            ))}

            {/* Container Terminal Area */}
            {[-100, -70, -10, 30, 70, 100].map((x, i) => (
                <ContainerStack key={i} position={[x, 1, -8]} rows={2} levels={6} />
            ))}

            {/* Port Lighting (Floodlights) */}
            {[-110, -55, 0, 55, 110].map((x, i) => (
                <group key={i} position={[x, 15, -12]}>
                    <mesh>
                        <boxGeometry args={[0.5, 15, 0.5]} />
                        <meshStandardMaterial color="#334155" />
                    </mesh>
                    <mesh position={[0, 7.5, 0]}>
                        <sphereGeometry args={[0.8]} />
                        <meshStandardMaterial emissive="#fff" emissiveIntensity={10} />
                    </mesh>
                    <pointLight intensity={15} distance={50} color="#fef9c3" />
                </group>
            ))}

            {/* Runway */}
            <mesh position={[0, 0.55, 35]}>
                <boxGeometry args={[300, 0.05, 15]} />
                <meshStandardMaterial color="#020617" roughness={1} />
                <gridHelper args={[300, 20, "#fbbf24", "#334155"]} rotation={[0, 0, 0]} position={[0, 0.06, 0]} />
            </mesh>
        </group>
    )
}

function Ocean() {
    return (
        <group>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
                <planeGeometry args={[2000, 2000]} />
                <meshStandardMaterial
                    color="#0c1a30"
                    roughness={0.05}
                    metalness={0.9}
                    envMapIntensity={1}
                />
            </mesh>
            {/* Horizon Haze */}
            <mesh position={[0, 5, -500]} rotation={[0, 0, 0]}>
                <planeGeometry args={[2000, 100]} />
                <meshBasicMaterial color="#1e293b" transparent opacity={0.5} />
            </mesh>
        </group>
    )
}

function Scene() {
    return (
        <group>
            {/* Ambient Planes */}
            <Suspense fallback={null}>
                <SafeComponent fallback={null}>
                    <LandingPlane delay={0} />
                    <LandingPlane delay={0.5} />
                </SafeComponent>
            </Suspense>

            {/* Static Port Logistics */}
            <PortInfrastructure />

            {/* Original Interactive Models */}
            <Suspense fallback={null}>
                <SafeComponent fallback={<ModelFallback type="plane" />}>
                    <PlaneModel />
                </SafeComponent>
            </Suspense>

            <DreiFloat speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Suspense fallback={null}>
                    <SafeComponent fallback={<ModelFallback type="ship" />}>
                        <CargoShip />
                    </SafeComponent>
                </Suspense>
            </DreiFloat>

            <Suspense fallback={null}>
                <SafeComponent fallback={<ModelFallback type="truck" />}>
                    <TruckModel position={[0, -0.4, 32]} delay={0} />
                    <TruckModel position={[0, -0.4, 38]} delay={0.5} />
                </SafeComponent>
            </Suspense>

            <Ocean />
            <ContactShadows position={[0, -0.99, 0]} opacity={0.5} scale={50} blur={2} />
        </group>
    )
}

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="bg-afaq-blue p-2 rounded-lg shadow-lg">
                        <Anchor className="text-white" size={24} />
                    </div>
                    <span className={`font-poppins font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-afaq-blue' : 'text-white'}`}>AFAQ AL BAHR</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {['Solutions', 'About', 'Network', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`font-medium transition-colors hover:text-afaq-light ${scrolled ? 'text-gray-600' : 'text-white/90'}`}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="bg-afaq-green hover:bg-opacity-90 text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
                        Get a Quote
                    </button>
                </nav>

                <button className={`md:hidden ${scrolled ? 'text-afaq-blue' : 'text-white'}`}>
                    <Menu size={28} />
                </button>
            </div>
        </header>
    )
}

function App() {
    return (
        <div className="relative min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            {/* 3D Background Container */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-50 overflow-hidden">
                <Canvas shadows camera={{ position: [25, 15, 60], fov: 35 }}>
                    <color attach="background" args={['#f1f5f9']} />
                    <ambientLight intensity={0.6} />
                    <hemisphereLight intensity={0.8} groundColor="#f1f5f9" color="#1CA7EC" />
                    <directionalLight position={[50, 30, 20]} intensity={1} color="#ffffff" castShadow />
                    <Sky sunPosition={[100, 10, 100]} turbidity={0.1} rayleigh={0.5} />
                    <fog attach="fog" args={['#f1f5f9', 50, 180]} />

                    <Scene />

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        maxPolarAngle={Math.PI / 2.2}
                        autoRotate
                        autoRotateSpeed={0.5}
                    />
                    <Environment preset="city" />
                </Canvas>
            </div>

            <Navbar />

            <main className="relative z-10 pt-20">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
                    {/* World Map Overlay */}
                    <div className="absolute inset-0 bg-world-map z-0 pointer-events-none"></div>

                    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        {/* Left Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-2xl"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="inline-flex items-center gap-2 bg-afaq-light/10 text-afaq-light px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] mb-8 uppercase border border-afaq-light/20"
                            >
                                <Globe size={14} /> Global Logistics Mastery
                            </motion.div>

                            <h1 className="text-5xl lg:text-8xl font-black text-white leading-[1.05] mb-8 font-poppins italic tracking-tight">
                                Global Cargo <br />
                                <span className="text-afaq-light">&</span> Freight <br />
                                <span className="text-afaq-green">Solutions</span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-12 max-w-lg leading-relaxed font-light">
                                Reliable road and air freight services delivering across borders with <span className="text-white font-semibold underline decoration-afaq-green underline-offset-8">speed, security, and precision</span>.
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-afaq-green text-white px-10 py-5 rounded-xl font-extrabold text-sm tracking-widest uppercase shadow-[0_10px_40px_-10px_rgba(14,143,106,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(14,143,106,0.6)] transition-all"
                                >
                                    Get a Quote
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(10, 61, 98, 0.1)' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-transparent text-white border-2 border-afaq-blue px-10 py-5 rounded-xl font-extrabold text-sm tracking-widest uppercase hover:text-afaq-light transition-all"
                                >
                                    Track Shipment
                                </motion.button>
                            </div>

                            <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-10">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-afaq-blue bg-slate-800 flex items-center justify-center overflow-hidden">
                                            <img src={`https://i.pravatar.cc/40?u=${i}`} alt="user" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-slate-400 font-medium">Trusted by <span className="text-white">5,000+</span> global enterprises</p>
                            </div>
                        </motion.div>

                        {/* Right Column: Imagery */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative lg:h-[700px] flex items-center justify-center"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-afaq-blue/20 rounded-full blur-[120px] -z-10"></div>

                            <div className="relative z-10 w-full">
                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=1932&auto=format&fit=crop"
                                        alt="Global Logistics"
                                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                    />

                                    {/* Glass Metrics on Image */}
                                    <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                                        <div className="glass-panel p-4 rounded-2xl flex items-center gap-4 bg-white/10 border-white/20 backdrop-blur-xl">
                                            <div className="p-2 bg-afaq-green/20 text-afaq-green rounded-lg">
                                                <Plane size={24} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Air Cargo</p>
                                                <p className="text-lg font-bold text-white tracking-tight">Express</p>
                                            </div>
                                        </div>
                                        <div className="glass-panel p-4 rounded-2xl flex items-center gap-4 bg-white/10 border-white/20 backdrop-blur-xl">
                                            <div className="p-2 bg-afaq-blue/20 text-afaq-blue rounded-lg">
                                                <Truck size={24} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Ground</p>
                                                <p className="text-lg font-bold text-white tracking-tight">Heavy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-10 -right-10 glass-panel p-6 rounded-3xl shadow-2xl border border-white/20 hidden xl:block"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-afaq-green rounded-full flex items-center justify-center text-white font-black text-xl italic shadow-lg">99%</div>
                                        <div>
                                            <p className="text-xs text-slate-400 font-bold uppercase">Success Rate</p>
                                            <p className="text-sm font-black text-afaq-blue">On-Time Delivery</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Counter Section */}
                <div className="bg-afaq-blue py-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                        <Globe size={400} className="absolute -right-20 -top-20 text-white" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { val: '150+', lab: 'Strategic Partners' },
                                { val: '24/7', lab: 'Real-time Support' },
                                { val: '12K', lab: 'Annual Shipments' },
                                { val: 'Global', lab: 'Reach & Network' }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-white text-3xl font-bold font-poppins mb-1">{stat.val}</div>
                                    <div className="text-white/60 text-[10px] uppercase font-bold tracking-tighter">{stat.lab}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Solutions Grid */}
                <section id="solutions" className="py-24 lg:py-32 bg-slate-50/50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mb-20">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-afaq-blue mb-6 font-poppins">End-to-End Solutions</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">Integrated supply chain management tailored to your enterprise requirements.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Ocean Freight", icon: <Anchor />, desc: "Global maritime solutions with prioritized space protection.", color: 'bg-blue-50' },
                                { title: "Air Logistics", icon: <Plane />, desc: "High-velocity air freight for critical global trade.", color: 'bg-cyan-50' },
                                { title: "Land Transport", icon: <Truck />, desc: "Regional distribution with full-fleet visibility.", color: 'bg-green-50' },
                                { title: "Customs", icon: <ExternalLink />, desc: "Complex regulatory clearance and compliance mastery.", color: 'bg-slate-100' }
                            ].map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="bg-white p-10 rounded-[12px] shadow-sm hover:shadow-2xl transition-all border border-slate-100 group"
                                >
                                    <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center text-afaq-blue mb-8 group-hover:bg-afaq-blue group-hover:text-white transition-all`}>
                                        {React.cloneElement(service.icon, { size: 28 })}
                                    </div>
                                    <h3 className="text-xl font-bold text-afaq-blue mb-4 font-poppins">{service.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                        {service.desc}
                                    </p>
                                    <span className="text-afaq-light font-bold text-sm tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                                        PROCEED <ArrowRight size={14} />
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-24 lg:py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="relative group">
                                <div className="aspect-[4/5] bg-slate-200 rounded-[12px] overflow-hidden shadow-2xl relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-afaq-blue/40 to-transparent"></div>
                                    <div className="flex items-center justify-center h-full">
                                        <Globe size={240} className="text-afaq-blue/20 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                                    </div>
                                </div>
                                <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[12px] shadow-2xl border border-slate-200 max-w-xs hidden md:block">
                                    <div className="text-afaq-green mb-4"><Package size={40} /></div>
                                    <p className="text-slate-700 font-medium mb-0">Established in the heart of maritime trade — Dubai, UAE.</p>
                                </div>
                            </div>

                            <div className="lg:pl-10">
                                <h2 className="text-3xl md:text-5xl font-extrabold text-afaq-blue mb-8 font-poppins leading-tight">Mastering The <br />Flow Of Industry</h2>
                                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-normal">
                                    AFAQ AL BAHR SHIPPING L.L.C. is more than a logistics provider; we are architects of global connectivity. By combining local operational depth with international reach, we ensure your assets move with unparalleled velocity and safety.
                                </p>
                                <div className="space-y-6 mb-12">
                                    {[
                                        "Multi-modal Transportation Excellence",
                                        "Strategic Warehousing & Distribution",
                                        "Innovative Supply Chain Optimization",
                                        "Dedicated Key Account Management"
                                    ].map((list, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full bg-afaq-green/10 flex items-center justify-center text-afaq-green">
                                                <ExternalLink size={12} />
                                            </div>
                                            <span className="font-bold text-slate-700">{list}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="bg-afaq-blue text-white px-12 py-5 rounded-xl font-bold shadow-xl hover:bg-slate-800 transition-all text-sm tracking-widest uppercase">
                                    Learn Our Story
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="bg-slate-900 pt-24 pb-12 text-white">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-4 gap-16 mb-24">
                            <div className="col-span-1 lg:col-span-2">
                                <div className="flex items-center gap-3 mb-10">
                                    <Anchor className="text-afaq-light" size={40} />
                                    <span className="font-poppins font-bold text-3xl tracking-tighter">AFAQ AL BAHR</span>
                                </div>
                                <p className="text-slate-400 leading-relaxed mb-10 max-w-md text-lg">
                                    Premium logistics, freight forwarding, and integrated supply chain management solutions since 2026.
                                </p>
                                <SocialLinks facebookUrl="https://www.facebook.com/afaqalbahr" linkedinUrl="https://www.linkedin.com/company/afaq-al-bahr-shipping-llc" instagramUrl="https://www.instagram.com/afaqalbahr" />
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-8 font-poppins underline underline-offset-8 decoration-afaq-green decoration-4">Navigation</h4>
                                <ul className="space-y-4 text-slate-400 font-medium">
                                    <li><a href="#" className="hover:text-afaq-light transition-colors">Solutions</a></li>
                                    <li><a href="#" className="hover:text-afaq-light transition-colors">Our Network</a></li>
                                    <li><a href="#" className="hover:text-afaq-light transition-colors">About Company</a></li>
                                    <li><a href="#" className="hover:text-afaq-light transition-colors">Track Portal</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-8 font-poppins underline underline-offset-8 decoration-afaq-light decoration-4">Connect</h4>
                                <div className="space-y-6 text-slate-400">
                                    <div className="flex gap-4">
                                        <Globe size={20} className="text-afaq-light shrink-0" />
                                        <p className="text-sm">Dubai, United Arab Emirates <br /> Business Bay, Prime Tower</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <ExternalLink size={20} className="text-afaq-light shrink-0" />
                                        <p className="text-sm">info@afaqalbahr.com <br /> +971 4 000 0000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">© 2026 AFAQ AL BAHR SHIPPING L.L.C. | GLOBAL TRADE CONNECTIVITY</p>
                            <div className="flex gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                                <a href="#" className="hover:text-white transition-colors">Legal</a>
                                <a href="#" className="hover:text-white transition-colors">Cookies</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}

export default App
