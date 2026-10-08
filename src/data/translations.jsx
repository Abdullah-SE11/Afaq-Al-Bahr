import React from 'react';
import { Anchor, Plane, Truck, ExternalLink, ShieldCheck, Headphones, Zap, Box, Compass, Ship, Warehouse, Network } from 'lucide-react';

export const translations = {
    en: {
        navbar: {
            home: "Home",
            about: "About Us",
            services: "Services",
            contact: "Contact",
            terms: "Terms & Conditions",
            quote: "Get a Quote",
            rights: "© 2026 AFAQ AL BAHR SHIPPING L.L.C. All rights reserved. • ISO 9001 Certified"
        },
        hero: {
            title_main: "Moving Your",
            title_highlight: "Business",
            title_end: "Forward",
            description: "Accelerating global commerce with smart multimodal logistics, real-time fleet telemetry, and secure international freight forwarding across air, sea, and land.",
            track_placeholder: "Enter Container / B/L / Tracking Number (e.g. FEX-90425)",
            track_button: "Track Cargo",
            popular_searches: "Popular searches: SC-9941-USA (Ocean Freight) | SC-02-B Air (Ultrasonics)",
            btn_quote: "Get a Quote",
            btn_services: "Explore Services",
            radar_title: "Global Telemetry Radar",
            radar_subtitle: "Telemetry Stream & Live Node Status",
            radar_speed: "7.9% SPEED",
            radar_nodes: "98% NODE SENSORS",
            radar_dest: "Est. Destination: Tomorrow at 08:45 UTC",
            radar_temp: "Int. Cargo Temp: 4.2°C (Optimal)",
            stats: [
                { val: "10K+", title: "Deliveries Completed", desc: "Verified real-time telemetry global routes" },
                { val: "50+", title: "Countries Connected", desc: "Access to worldwide & port corridors" },
                { val: "99%", title: "On-Time Rate", desc: "Powered by predictive navigation" },
                { val: "24/7", title: "Global Support", desc: "Multilingual customer assistance" }
            ]
        },
        trust: {
            badge: "ENGINEERED FOR RELIABILITY",
            title: "Why Industry Leaders Entrust Us With Their Supply Chains",
            subtitle: "We synthesize deep maritime heritage with cutting-edge software architecture, assuring total cargo custody and predictable delivery rhythms.",
            cards: [
                {
                    icon: "zap",
                    title: "Fast & Reliable",
                    desc: "Automated routing algorithms analyze port congestion, tidal conditions, and flight corridors to deliver guaranteed delivery windows.",
                    link: "Explore network velocity ->",
                    page: "services"
                },
                {
                    icon: "compass",
                    title: "Global Coverage",
                    desc: "Strategic maritime terminals, chartered air hubs, and continental road networks span 50+ sovereign markets seamlessly.",
                    link: "View hub mappings ->",
                    page: "about"
                },
                {
                    icon: "shield",
                    title: "Secure Cargo",
                    desc: "IoT-environmental sensors, sealed cryptographic tamperproof seals, and 100% comprehensive marine transit insurance.",
                    link: "Security standards ->",
                    page: "about"
                },
                {
                    icon: "headset",
                    title: "24/7 Support",
                    desc: "Dedicated enterprise dispatcher desks backed by round-the-clock multilingual command-center specialists.",
                    link: "Contact desk ->",
                    page: "contact"
                }
            ]
        },
        services: {
            badge: "END-TO-END CAPABILITIES",
            // title: "Multimodal Freight Services",
            subtitle: "Optimized for weight, density, schedule sensitivity, and hazardous compliance.",
            action_link: "Custom service architecture ↗",
            items: [
                {
                    title: 'Road Freight',
                    tag: 'DOMESTIC & REGIONAL',
                    image: '/Assets/road-freight.jpg',
                    desc: 'Reliable full-truckload and less-than-truckload ground transport with GPS monitoring and cross-border road permits.',
                    highlights: [
                        'Cross-docking facilities',
                        'ADR/Hazardous cargo certified',
                        'Scheduled line-hauls',
                    ],
                    footer: 'Route Coverage: Continental',
                    icon: <Truck className="w-4 h-4" />,
                },
                {
                    title: 'Air Freight',
                    tag: 'TIME-SENSITIVE PRIORITY',
                    image: '/Assets/air-freight.jpg',
                    desc: 'Fast international air shipping with priority customs clearance and temperature-controlled cargo solutions.',
                    highlights: [
                        'Next-flight-out dispatch',
                        'Direct airport-to-door',
                        'Dangerous goods compliant',
                    ],
                    footer: 'Speed: 24 - 48 Hours Global',
                    icon: <Plane className="w-4 h-4" />,
                },
                {
                    title: 'Sea Freight',
                    tag: 'HIGH-VOLUME OCEAN',
                    image: '/Assets/sea-freight.jpg',
                    desc: 'Cost-effective global container shipping connecting major ocean trade lanes with FCL and LCL solutions.',
                    highlights: [
                        'Port-to-port and door-to-door',
                        'Reefer refrigerated containers',
                        'Customs brokerage',
                    ],
                    footer: 'Tier: Trans-Pacific & Atlantic',
                    icon: <Ship className="w-4 h-4" />,
                },
                {
                    title: 'Warehousing & Distribution',
                    tag: 'SMART STORAGE',
                    image: '/Assets/warehouse.jpg',
                    desc: 'Secure climate-controlled storage, bonded warehouses, automated fulfillment, and real-time inventory management.',
                    highlights: [
                        'Automated WMS system',
                        'Cross-docking & palletizing',
                        '24/7 CCTV & security',
                    ],
                    footer: 'Scale: 1.2M+ sq. ft. Warehouses',
                    icon: <Warehouse className="w-4 h-4" />,
                },
                {
                    title: 'Express Delivery',
                    tag: 'RAPID DISPATCH',
                    image: '/Assets/express-delivery.jpg',
                    desc: 'Fast courier and parcel delivery solutions for critical documents, spare parts, and time-sensitive shipments.',
                    highlights: [
                        'Guaranteed time windows',
                        'Real-time SMS/Email alerts',
                        'Dedicated courier service',
                    ],
                    footer: 'Priority: Mission Critical',
                    icon: <Zap className="w-4 h-4" />,
                },
                {
                    title: 'Supply Chain Management',
                    tag: 'ENTERPRISE INTEGRATION',
                    image: '/Assets/supply-chain.jpg',
                    desc: 'End-to-end supply chain orchestration, vendor management, predictive demand forecasting, and sustainable routing.',
                    highlights: [
                        'ERP / EDI API integrations',
                        'Reverse logistics management',
                        'Dedicated account team',
                    ],
                    footer: 'Scope: Global Enterprise 4PL',
                    icon: <Network className="w-4 h-4" />,
                },
            ],
            cards: [
                {
                    tag: "FTL • LTL • FLEET",
                    title: "Road Freight",
                    desc: "Full-truckload (FTL) and less-than-truckload (LTL) scheduled network with multi-temperature refrigerated trailers and border-pass clearance.",
                    link: "Ocean routes operational"
                },
                {
                    tag: "FCL • LCL OCEAN",
                    title: "Sea Freight",
                    desc: "Full-container-load (FCL) and consolidation (LCL) global shipping spanning key trans-oceanic lanes with dedicated port terminal berths.",
                    link: "180+ Oceanic Corridors "
                },
                {
                    tag: "CHARTER • CARGO LIFT",
                    title: "Air Freight",
                    desc: "Priority chartered airfreighters and consolidated belly-cargo space for mission-critical industries: aerospace, and high-value shipments.",
                    link: "Direct flight schedulers "
                },
                {
                    tag: "BONDED • ROBOTIC",
                    title: "Smart Warehousing",
                    desc: "Automated pick-and-pack fulfillment, climate-controlled bonded storage facilities, and real-time WMS inventory synchronization.",
                    link: "15M sq. ft. licensed space >"
                },
                {
                    tag: "SAME-DAY • TIME-CRITICAL",
                    title: "Express Delivery",
                    desc: "Time-definite and velocity-optimized delivery corridor with GPS-tracked last-mile fleet routing and electronic POD signoff.",
                    link: "Accelerated SLA conditions "
                },
                {
                    tag: "CUSTOMS • CAPS",
                    title: "Supply Chain Solutions",
                    desc: "Comprehensive international customs clearance, broker compliance, custom supply chain risk modeling, and lean terminal logistics.",
                    link: "Enterprise digital audit "
                }
            ]
        },
        workflow: {
            badge: "OPERATIONAL WORKFLOW",
            title: "How Cargo Flows Through Our Network",
            subtitle: "From single crate dispatch to complex maritime container sailings, four predictable steps govern every voyage.",
            steps: [
                {
                    step: "01",
                    title: "Request a Quote",
                    desc: "Instant algorithmic freight calculation, tariff analysis, and route selection for cost and speed."
                },
                {
                    step: "02",
                    title: "Cargo Pickup",
                    desc: "Scheduled automated terminal collection with encrypted digital bill of lading and tamper-evident smart sealing."
                },
                {
                    step: "03",
                    title: "Safe Transportation",
                    desc: "Satellite telemetry tracking with continuous environmental status metrics and preventive risk avoidance."
                },
                {
                    step: "04",
                    title: "Precision Delivery",
                    desc: "Last-mile handover with biometric and digital proof-of-delivery directly reconciled into your enterprise ledger."
                }
            ]
        },
        estimator: {
            badge: "INSTANT RATE ESTIMATOR",
            title: "Instant Enterprise Freight Quotation",
            subtitle: "Calculate route rates across ocean container, chartered air, or cross-continental ground in under 60 seconds.",
            bullets: [
                "Zero hidden fuel surcharges or bunker fuel adjustment fees",
                "Guaranteed capacity commitments during peak global shipping seasons",
                "Direct API booking connectors for SAP & Oracle SCM"
            ],
            form: {
                origin: "Origin Port / City",
                origin_ph: "e.g. Shanghai | CN-SHA",
                destination: "Destination Port / City",
                dest_ph: "e.g. Hamburg | DE-HAM",
                modality: "Modality",
                modality_opt: "Ocean Freight (FCL/LCL)",
                weight: "Gross Weight (kg)",
                weight_ph: "e.g. 14,500",
                email: "Enterprise Email Address",
                email_ph: "operations@enterprise.com",
                submit: "Calculate Guaranteed Rate "
            }
        },
        cta: {
            badge: "En route logistics operations",
            title: "Ready to Move Your Cargo?",
            subtitle: "Connect with our freight specialists today for competitive rates, dedicated space commitments, and tailor-made logistics architecture.",
            btn_primary: "Get Started Now",
            btn_secondary: "Schedule a Consultation"
        },
        footer: {
            blurb: "Pioneering global supply chain solutions with speed, precision, and state-of-the-art telemetry intelligence across 50+ countries.",
            quick_links_title: "Quick Links",
            services_title: "Services",
            contact_title: "Contact & Global Operations",
            ops_desk: "24/7 Operations Desk",
            ops_email: "support@afaqalbahr.com",
            ops_phone: "+971 56 826 2134",
            ops_address: "Global Logistics Hub: Terminal 4, Dubai Maritime City, UAE",
            terms: "Terms & Conditions",
            privacy: "Privacy Policy",
            security: "Security Disclosures"
        },
        about: {
            certificateItems: [
                {
                    title: 'ISO 9001:2015',
                    subtitle: 'Quality Management',
                    detail: 'Certified for quality assurance and continuous process improvement in international logistics operations.',
                    accent: '#45E7D2',
                    year: '2019'
                },
                {
                    title: 'TAPA TSR Tier 1',
                    subtitle: 'Highest Security Protocol',
                    detail: 'Security accreditation for secure cargo storage, handling, and cross-border logistics chain integrity.',
                    accent: '#7FE8D6',
                    year: '2021'
                },
                {
                    title: 'AEO / C-TPAT',
                    subtitle: 'Intl. Trade Pre-Check',
                    detail: 'Customs and trade security compliance recognized for trusted global supply chain reliability.',
                    accent: '#9ADCF9',
                    year: '2023'
                }
            ],
            heroStats: [
                { num: '142', label: 'ACTIVE VESSELS', sub: 'Ocean & Air Fleet', icon: 'ship' },
                { num: '68', label: 'AIR FREIGHT HUBS', sub: 'Daily Dispatchers', icon: 'plane' },
                { num: '54', label: 'PORT TERMINALS', sub: 'Global Hubs', icon: 'anchor' },
                { num: '99.8%', label: 'ON-TIME RATE', sub: 'Fleet Transit', icon: 'clock' }
            ],
            coreValues: [
                {
                    num: '1.',
                    title: 'Reliability',
                    desc: 'Uncompromising commitment to scheduled vessel departures, guaranteed delivery windows, and zero-damage cargo integrity.',
                    link: 'Explore SLA guarantees'
                },
                {
                    num: '2.',
                    title: 'Speed & Velocity',
                    desc: 'Optimized multimodal dispatches, priority airport airlifts, and direct EDI-backed electronic customs clearances.',
                    link: 'Peak SLA velocity'
                },
                {
                    num: '3.',
                    title: 'Safety & Security',
                    desc: 'Stringent HACCP & C-TPAT safety protocols, tamperproof cryptographic seals, and accredited international cargo security specialists.',
                    link: 'View security standards'
                },
                {
                    num: '4.',
                    title: 'Client Satisfaction',
                    desc: 'Dedicated enterprise account desks, transparent live telemetry dashboards, and proactive exception resolution.',
                    link: 'Get dedicated desk'
                }
            ],
            timelineSteps: [
                { year: '2012', title: 'Founding & Coastal Hub', desc: 'Inaugurated our first premier maritime staging hub with 10 reefer units and deep-berth container landing.', badge: 'Terminal Operational', active: false },
                { year: '2013', title: 'Regional Expansion', desc: 'Expanded regional freight operations and strengthened connections with key coastal and inland trade routes.', badge: 'Regional Network', active: false },
                { year: '2014', title: 'Fleet Development', desc: 'Expanded our logistics fleet and improved road freight capabilities to support growing cargo volumes.', badge: 'Fleet Expansion', active: false },
                { year: '2015', title: 'Integrated Logistics', desc: 'Introduced integrated freight coordination across maritime, road, and warehouse operations.', badge: 'Integrated Operations', active: false },
                { year: '2016', title: 'Multimodal Air & Rail', desc: 'Chartered transcontinental scheduled air freight lanes and cross-border road truck fleets.', badge: 'Tri-Modal Integration', active: false },
                { year: '2017', title: 'Global Trade Connections', desc: 'Strengthened international trade corridors and expanded partnerships across major commercial markets.', badge: 'Global Connectivity', active: false },
                { year: '2018', title: 'Smart Cargo Operations', desc: 'Modernized cargo handling processes with improved tracking, documentation, and operational visibility.', badge: 'Smart Operations', active: false },
                { year: '2019', title: 'Telemetry Platform Launch', desc: 'Rolled out proprietary IoT container tracking, continuous environmental sensors, and predictive ETA algorithms.', badge: 'Digital Telemetry Core', active: false },
                { year: '2020', title: 'Digital Logistics Transformation', desc: 'Accelerated digital logistics operations with connected shipment monitoring and improved remote coordination.', badge: 'Digital Transformation', active: false },
                { year: '2021', title: 'Supply Chain Resilience', desc: 'Expanded operational capabilities and strengthened supply chain continuity across international freight routes.', badge: 'Resilient Supply Chain', active: false },
                { year: '2022', title: '50+ Global Port Hubs', desc: 'Expanded enterprise charter networks into 50+ sovereign markets including Dubai, Karachi, Shanghai, and Hamburg.', badge: 'Global Network Scale', active: false },
                { year: '2023', title: 'Advanced Cargo Visibility', desc: 'Enhanced real-time shipment visibility and connected logistics workflows across global transportation networks.', badge: 'Real-Time Visibility', active: false },
                { year: '2024', title: 'Intelligent Logistics Systems', desc: 'Advanced automation, data-driven planning, and connected logistics systems to improve cargo coordination.', badge: 'Intelligent Logistics', active: false },
                { year: '2025', title: 'Connected Global Operations', desc: 'Expanded connected logistics capabilities with smarter monitoring, automation, and integrated supply chain management.', badge: 'Connected Operations', active: false },
                { year: '2026', title: 'Next-Generation Logistics', desc: 'Advancing intelligent logistics through real-time visibility, smarter automation, and connected global supply chain operations.', badge: 'Future Logistics Network', active: false }
            ]
        },
        contact: {
            directLines: [
                // { label: 'Dispatch Line 1 (Dubai)', num: '+971 56 826 2134', wa: '971568262134' },
                // { label: 'Dispatch Line 2 (Dubai)', num: '+971 55 935 9616', wa: '971559359616' },
                { label: 'Dispatch Line  (Dubai)', num: '+971 55 536 5465', wa: '971555365465' }
            ],
            hubsData: [
                {
                    name: 'New York',
                    title: 'Port of New York',
                    code: 'NYC-01',
                    status: 'OPERATIONAL',
                    coord: '40.7128° N, 74.0060° W',
                    position: [40.7128, -74.0060],
                    desc: 'Major North American maritime gateway supporting global cargo operations.',
                    volume: '8.4M TEU',
                    dwell: '28 Days',
                    manager: 'Michael Carter'
                },
                {
                    name: 'Rotterdam',
                    title: 'Rotterdam Gateway',
                    code: 'RTM-02',
                    status: 'OPERATIONAL',
                    coord: '51.9244° N, 4.4777° E',
                    position: [51.9244, 4.4777],
                    desc: 'European logistics gateway connecting major international trade routes.',
                    volume: '14.5M TEU',
                    dwell: '2.4 Days',
                    manager: 'Thomas Weber'
                },
                {
                    name: 'Singapore',
                    title: 'Singapore Port',
                    code: 'SGP-03',
                    status: 'OPERATIONAL',
                    coord: '1.3521° N, 103.8198° E',
                    position: [1.3521, 103.8198],
                    desc: 'Strategic Asian maritime hub supporting high-volume global shipping.',
                    volume: '37.3M TEU',
                    dwell: '1.9 Days',
                    manager: 'Daniel Tan'
                },
                {
                    name: 'Dubai',
                    title: 'Dubai Jebel Ali',
                    code: 'DXB-04',
                    status: 'OPERATIONAL',
                    coord: '25.0110° N, 55.0610° E',
                    position: [25.0110, 55.0610],
                    desc: 'Key Middle Eastern logistics hub connecting Asia, Europe and Africa.',
                    volume: '14.5M TEU',
                    dwell: '2.1 Days',
                    manager: 'Ahmed Hassan'
                }
            ],
            faqs: [
                {
                    q: 'How can I .track my shipment status in real time?',
                    a: 'Enter your Container or Bill of Lading (B/L) tracking code into our home page tracking portal. Our satellite telemetry system updates cargo location, temperature, and estimated arrival every 15 minutes.'
                },
                {
                    q: 'What documents are required for UAE to Pakistan cargo transit?',
                    a: 'Our customs team will handle your Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, and Customs Export Clearance. Simply provide your shipment details, and our customs brokers will process the paperwork.'
                },
                {
                    q: 'Do you provide temperature-controlled reefer containers?',
                    a: 'Yes! We operate multi-temperature refrigerated trailers and reefers equipped with IoT thermal sensors maintaining precision temperatures from -25°C to +25°C.'
                },
                {
                    q: 'What is your typical transit time for sea freight?',
                    a: 'Ocean container sailings between UAE ports and Karachi average 4 to 6 days. Express air cargo charter takes 24 to 48 hours.'
                }
            ]
        },
        terms: {
            sections: [
                {
                    title: '1. Scope of Services',
                    text: 'Afaq Al Bahr Shipping LLC provides freight forwarding, logistics coordination, customs support, warehousing, and supply chain management services across regional and international trade corridors. Our services are tailored to each client engagement and may include ocean freight, air freight, road transport, warehousing, project cargo handling, and document processing. All services are subject to the specific scope agreed in writing between the Company and the client.'
                },
                {
                    title: '2. Client Responsibilities',
                    text: 'Clients are responsible for providing accurate shipment information, valid commercial documents, customs declarations, product classifications, and timely approvals. The Company may rely on information provided by the client without independent verification, unless explicitly stated otherwise in writing. Delays caused by inaccurate documentation, missing approvals, or late instructions remain the responsibility of the client.'
                },
                {
                    title: '3. Charges and Payment Terms',
                    text: 'All service charges, handling fees, freight rates, surcharges, and customs-related costs are communicated in advance where possible. Payment terms are set in accordance with the agreed commercial terms and may require advance payment, partial deposits, or settlement before final release of cargo. Late or disputed payments may result in temporary suspension of services or withholding of shipment release until full compliance is met.'
                },
                {
                    title: '4. Risk and Liability',
                    text: 'The Company acts as a logistics facilitator and does not assume ownership of cargo unless expressly agreed in writing. Although reasonable care will be exercised in handling, storage, and transport coordination, the Company does not guarantee uninterrupted delivery, exact delivery windows, or zero risk of delay caused by weather, congestion, customs inspections, port disruptions, strikes, political events, or force majeure circumstances.'
                },
                {
                    title: '5. Force Majeure',
                    text: 'The Company shall not be liable for delays or failure to perform services caused by events beyond its reasonable control, including adverse weather, labor dispute, port shutdowns, government intervention, pandemic restrictions, war, civil unrest, terrorism, acts of God, or disruption in transportation infrastructure. In such cases, reasonable efforts will be made to continue operations and provide alternative arrangements where feasible.'
                },
                {
                    title: '6. Documentation and Compliance',
                    text: 'The Company may assist with documentation, clearance procedures, regulatory compliance, export/import paperwork, and operational records. However, the ultimate responsibility for legality, classification, licensing, and compliance of goods remains with the client and the client’s appointed customs and legal representatives. Any penalties, fines, or inspection outcomes arising from non-compliance shall be borne by the client.'
                },
                {
                    title: '7. Cargo Insurance and Claims',
                    text: 'Cargo insurance may be arranged subject to separate terms, coverage limits, and premium approval. Unless specifically arranged and confirmed in writing, the Company does not provide insurance coverage for loss, damage, or delay beyond its standard operational control. Any claims regarding cargo damage, delay, or loss must be raised promptly and supported by relevant evidence, documentation, and contractual terms.'
                },
                {
                    title: '8. Confidentiality and Data Use',
                    text: 'Information shared by clients, including shipment details, commercial documents, and operational data, will be handled with reasonable care and confidentiality. The Company may use internal systems to coordinate operations, communicate with partners, and maintain record retention for business continuity and regulatory purposes. Data may also be used to improve service quality, operational reporting, and business communication in compliance with applicable law.'
                },
                {
                    title: '9. Intellectual Property',
                    text: 'All branding, content, website materials, images, logistics frameworks, and proprietary business information owned or used by Afaq Al Bahr Shipping LLC remain the property of the Company unless otherwise stated. Clients may not copy, redistribute, or reproduce any Company content without express written permission.'
                },
                {
                    title: '10. Governing Law and Resolution',
                    text: 'These Terms and Conditions shall be governed by the applicable laws of the United Arab Emirates, without prejudice to any mandatory provisions of the jurisdiction governing the shipment or commercial relationship. Any dispute arising in connection with these terms shall first be discussed in good faith between the parties, and if unresolved, may be referred to the competent courts of the UAE, as applicable to the business arrangement.'
                }
            ]
        },
        privacy: {
            sections: [
                {
                    title: '1. Overview',
                    text: 'Afaq Al Bahr Shipping LLC respects the privacy of our customers, partners, and stakeholders. This Privacy Policy explains how we collect, use, share, protect, and manage information related to freight quotations, shipment operations, customs documentation, warehousing, and client communications. We process personal and commercial data only in line with relevant legal and operational requirements.'
                },
                {
                    title: '2. Information We Collect',
                    text: 'We may collect personal and commercial information including names, company details, contact numbers, e-mail addresses, addresses, shipment references, container data, customs records, purchase and invoice details, cargo descriptions, and communication correspondence. We may also collect operational data such as route planning information, delivery milestones, tracking references, and service requests relevant to the logistics engagement.'
                },
                {
                    title: '3. How We Use Data',
                    text: 'Information is used to provide freight forwarding, customs support, warehousing, and transport coordination; prepare quotations and service updates; communicate operational milestones; coordinate with carriers, ports, and related service providers; manage invoicing and payment arrangements; and maintain internal records required for compliance, traceability, and client support.'
                },
                {
                    title: '4. Information Sharing',
                    text: 'We may share information with approved third parties that are essential for executing the logistics service, such as freight carriers, customs brokers, port authorities, warehouse operators, insurers, and selected business partners. We limit disclosure to the data necessary for the specific purpose and require reasonable confidentiality safeguards from such parties.'
                },
                {
                    title: '5. Data Security',
                    text: 'We apply reasonable administrative, technical, and operational safeguards to reduce the risk of unauthorized access, disclosure, alteration, or loss of information. Access to sensitive operational data is limited to authorized personnel and is protected by internal controls, role-based access, and secure business processes.'
                },
                {
                    title: '6. Retention and Storage',
                    text: 'We retain data only for as long as needed to fulfill the contract, meet legal or regulatory obligations, support dispute resolution, and maintain accurate operational history. Information may be stored electronically or in physical records and is managed according to approved business and retention procedures.'
                },
                {
                    title: '7. Cookies and Website Data',
                    text: 'Our website may use cookies, analytics tools, or similar technologies to understand how visitors interact with our services, improve experience, and monitor website performance. These technologies may collect information such as browser type, pages visited, session activity, and general usage patterns. Users can manage cookies through their browser settings.'
                },
                {
                    title: '8. Your Rights and Contact',
                    text: 'Clients may request information about the personal or commercial data we hold, request correction of inaccuracies, or ask for further clarification on data handling practices subject to local legal and contractual limitations. Please contact our operations or support team directly if you wish to discuss privacy practices, record access, or service-related concerns.'
                }
            ]
        },
        security: {
            standards: [
                {
                    title: '1. Secure Operational Handling',
                    text: 'All cargo coordination, customs document processing, route planning, and warehouse activity is managed through controlled operational workflows. Access is limited to authorized teams and verified stakeholders involved in the shipment or commercial relationship, helping reduce the risk of unauthorised processing, loss, or disruption.'
                },
                {
                    title: '2. Communication Integrity',
                    text: 'We maintain secure communication practices for client inquiries, shipment updates, customs documentation, and operational requests. Internal and external communication channels are structured to reduce error, duplication, and accidental disclosure while supporting traceability across the supply chain.'
                },
                {
                    title: '3. Information Access and Roles',
                    text: 'Roles and permissions are assigned according to operational responsibility. Different teams may access only the information needed for their tasks, including booking updates, invoice control, customs paperwork, route coordination, or warehousing oversight. This reduces exposure and supports accountability.'
                },
                {
                    title: '4. Risk Management and Monitoring',
                    text: 'Our teams monitor operational risk factors such as cargo handling conditions, customs delays, documentation gaps, route disruptions, port congestion, weather events, and commercial changes. Where risk is identified, response planning is activated to reduce impact and maintain continuity of service.'
                },
                {
                    title: '5. Partner and Carrier Oversight',
                    text: 'Carrier, warehouse, and third-party provider interactions are governed by contractual expectations, service-level commitments, and operational controls. We evaluate external partners where appropriate to ensure alignment with quality, compliance, and security requirements.'
                },
                {
                    title: '6. Compliance and Legal Alignment',
                    text: 'We align our procedures with relevant UAE trade, customs, operating, and information-handling obligations, while supporting clients in meeting their own documentation and compliance obligations. Our goal is to maintain transparent, accountable, and commercially responsible operations.'
                },
                {
                    title: '7. Business Continuity and Recovery',
                    text: 'Our operations are structured to reduce disruption caused by system issues, transport interruptions, or unforeseen events. Backup planning, escalation procedures, and communication protocols help us maintain service continuity and rapid response when operational conditions change.'
                }
            ]
        }
    },
    // ur: {
    //     navbar: {
    //         home: "ہوم",
    //         about: "ہمارے بارے میں",
    //         services: "خدمات",
    //         contact: "رابطہ کریں",
    //         terms: "شرائط و ضوابط",
    //         quote: "کوٹیشن حاصل کریں",
    //         rights: "© 2026 آفاق البحر شپنگ L.L.C. جملہ حقوق محفوظ ہیں۔ • ISO 9001 تصدیق شدہ"
    //     },
    //     hero: {
    //         telemetry: "لائیو فلیٹ ٹیلی میٹری فعال • 2,130 فعال جہاز اور پروازیں",
    //         title_main: "آپ کے",
    //         title_highlight: "کاروبار",
    //         title_end: "کو آگے بڑھانا",
    //         description: "ہوائی، سمندری اور زمینی راستوں پر اسمارٹ ملٹی ماڈل لاجسٹکس، ریئل ٹائم فلیٹ ٹیلی میٹری، اور محفوظ بین الاقوامی فریٹ فارورڈنگ کے ساتھ عالمی تجارت کو تیز تر بنانا۔",
    //         track_placeholder: "کنٹینر / B/L / ٹریکنگ نمبر درج کریں (مثال: FEX-90425)",
    //         track_button: "کارگو ٹریک کریں",
    //         popular_searches: "مقبول تلاش: SC-9941-USA (سمندری فریٹ) | SC-02-B Air (فضائی)",
    //         btn_quote: "کوٹیشن حاصل کریں",
    //         btn_services: "خدمات دیکھیں",
    //         radar_title: "عالمی ٹیلی میٹری ریڈار",
    //         radar_subtitle: "ٹیلی میٹری اسٹریم اور لائیو نوڈ سٹیٹس",
    //         radar_speed: "7.9% اسپیڈ",
    //         radar_nodes: "98% نوڈ سینسرز",
    //         radar_dest: "متوقع آمد: کل صبح 08:45 UTC",
    //         radar_temp: "کارگو درجہ حرارت: 4.2°C (بہترین)",
    //         stats: [
    //             { val: "10K+", title: "مکمل شدہ ترسیلات", desc: "تصدیق شدہ ریئل ٹائم ٹیلی میٹری عالمی راستے" },
    //             { val: "50+", title: "منسلک ممالک", desc: "دنیا بھر کی اور پورٹ کوریڈورز تک رسائی" },
    //             { val: "99%", title: "بروقت ترسیل کی شرح", desc: "پریڈکٹیو نیویگیشن کے ساتھ" },
    //             { val: "24/7", title: "عالمی سپورٹ", desc: "کثیر اللسانی کسٹمر سپورٹ" }
    //         ]
    //     },
    //     trust: {
    //         badge: "قابل اعتماد کے لیے ڈیزائن کردہ",
    //         title: "صنعت کے سرکردہ رہنما اپنی سپلائی چین کے لیے ہم پر اعتماد کیوں کرتے ہیں",
    //         subtitle: "ہم گہری بحری روایت کو جدید ترین سافٹ ویئر فن تعمیر کے ساتھ ملاتے ہیں، جس سے مکمل کارگو تحفظ اور متوقع ترسیل کو یقینی بنایا جاتا ہے۔",
    //         cards: [
    //             {
    //                 icon: "zap",
    //                 title: "تیز اور قابل اعتماد",
    //                 desc: "خودکار روٹنگ الگورتھم پورٹ کے ہجوم، لہروں کے حالات اور فلائٹ کوریڈورز کا تجزیہ کرتے ہیں۔",
    //                 link: "نیٹ ورک اسپیڈ کی تفتیش کریں ->"
    //             },
    //             {
    //                 icon: "compass",
    //                 title: "عالمی رژائی",
    //                 desc: "حکمت عملی بحری ٹرمینلز، چارٹرڈ ایئر ہب، اور زمینی نیٹ ورکس 50+ مارکیٹوں کا احاطہ کرتے ہیں۔",
    //                 link: "ہب کی تفصیلا ت دیکھیں ->"
    //             },
    //             {
    //                 icon: "shield",
    //                 title: "محفوظ کارگو",
    //                 desc: "IoT ماحولیاتی سینسرز، سیل شدہ کرپٹوگرافک ٹیمپروپروف سیلز، اور 100% مکمل مرین انشورنس۔",
    //                 link: "سیکیورٹی معیار ->"
    //             },
    //             {
    //                 icon: "headset",
    //                 title: "24/7 سپورٹ",
    //                 desc: "راؤنڈ دی کلاک کثیر اللسانی کمانڈ سینٹر کے ماہرین پر مشتمل ڈسپیچر ڈیسک۔",
    //                 link: "ڈیسک سے رابطہ کریں ->"
    //             }
    //         ]
    //     },
    //     services: {
    //         badge: "جامع لاجسٹک صلاحیتیں",
    //         title: "ملٹی ماڈل فریٹ سروسز",
    //         subtitle: "وزن، کثافت، وقت اور حساس قوانین کی تعمیل کے مطابق ڈھالی گئیں۔",
    //         action_link: "حسب ضرورت سروس آرکیٹیکچر ↗",
    //         cards: [
    //             {
    //                 tag: "FTL • LTL • FLEET",
    //                 title: "روڈ فریٹ",
    //                 desc: "ملٹی ٹمپریچر ریفریجریٹڈ ٹریلرز اور بارڈر پاس کلیئرنس کے ساتھ فول ٹرک لوڈ اور ایل ٹی ایل شیڈول نیٹ ورک۔",
    //                 link: "سمندری راستے فعال ہیں >"
    //             },
    //             {
    //                 tag: "FCL • LCL OCEAN",
    //                 title: "سی فریٹ",
    //                 desc: "اہم ٹرانس اوشینک لینز اور مخصوص پورٹ ٹرمینل برتھ کے ساتھ مکمل کنٹینر لوڈ اور ایل سی ایل عالمی شپنگ۔",
    //                 link: "180+ سمندری کوریڈورز >"
    //             },
    //             {
    //                 tag: "CHARTER • CARGO LIFT",
    //                 title: "ایئر فریٹ",
    //                 desc: "اہم اور حساس صنعتوں، ایرو اسپیس اور اعلیٰ قیمتی سامان کے لیے ترجیحی چارٹرڈ ایئر فریٹرز۔",
    //                 link: "براہ راست فلائٹ شیڈولرز >"
    //             },
    //             {
    //                 tag: "BONDED • ROBOTIC",
    //                 title: "اسمارٹ ویئر ہاؤسنگ",
    //                 desc: "خودکار پک اینڈ پیک پلفلمنٹ، کلائمیٹ کنٹرولڈ بانڈڈ اسٹوریج اور ریئل ٹائم WMS انوینٹری سنکرونائزیشن۔",
    //                 link: "15 ملین مربع فٹ لائسنس یافتہ جگہ >"
    //             },
    //             {
    //                 tag: "SAME-DAY • TIME-CRITICAL",
    //                 title: "ایکسپریس ڈیلیوری",
    //                 desc: "جی پی ایس ٹریک شدہ لاسٹ مائل فلیٹ روٹنگ اور الیکٹرانک POD سائین آف کے ساتھ تیز رفتار ڈیلیوری کوریڈور۔",
    //                 link: "تیز ترین SLA شرائط >"
    //             },
    //             {
    //                 tag: "CUSTOMS • CAPS",
    //                 title: "سپلائی چین حل",
    //                 desc: "جامع بین الاقوامی کسٹمز کلیئرنس، بروکر تعمیل، اور سپلائی چین رسک ماڈلنگ۔",
    //                 link: "انٹرپرائز ڈیجیٹل آڈٹ >"
    //             }
    //         ]
    //     },
    //     workflow: {
    //         badge: "آپریشنل ورک فلو",
    //         title: "ہمارے نیٹ ورک کے ذریعے کارگو کی ترسیل کا طریقہ",
    //         subtitle: "سنگل کریٹ ڈسپیچ سے لے کر پیچیدہ کنٹینر سیئلنگ تک، چار آسان مرحلے ہر سفر کو منظم کرتے ہیں۔",
    //         steps: [
    //             {
    //                 step: "01",
    //                 title: "کوٹیشن کی درخواست",
    //                 desc: "قیمت اور رفتار کے لیے فوری الگورتھمک فریٹ کا حساب، ٹیرف کا تجزیہ اور راستے کا انتخاب۔"
    //             },
    //             {
    //                 step: "02",
    //                 title: "کارگو پک اپ",
    //                 desc: "انکرپٹڈ ڈیجیٹل بل آف لیڈنگ اور سمارٹ سیلنگ کے ساتھ شیڈول ہینڈ اوور۔"
    //             },
    //             {
    //                 step: "03",
    //                 title: "محفوظ ترسیل",
    //                 desc: "سیٹلائٹ ٹیلی میٹری ٹریکنگ اور مسلسل ماحولیاتی صورتحال کے سینسرز۔"
    //             },
    //             {
    //                 step: "04",
    //                 title: "کامل ترسیل",
    //                 desc: "بائیو میٹرک اور ڈیجیٹل پروف آف ڈیلیوری کے ساتھ لاسٹ مائل ہینڈ اوور۔"
    //             }
    //         ]
    //     },
    //     estimator: {
    //         badge: "فوری ریٹ کیلکولیٹر",
    //         title: "فوری انٹرپرائز فریٹ کوٹیشن",
    //         subtitle: "سمندری، فضائی یا زمینی راستوں کے لیے 60 سیکنڈ سے کم میں ریٹ معلوم کریں۔",
    //         bullets: [
    //             "صفر پوشیدہ ایندھن کے اضافی اخراجات",
    //             "شپنگ کے چوٹی کے سیزن کے دوران صلاحیت کی ضمانت",
    //             "SAP اور Oracle SCM کے لیے براہ راست API کنیکٹرز"
    //         ],
    //         form: {
    //             origin: "اصل پورٹ / شہر",
    //             origin_ph: "مثال: Shanghai | CN-SHA",
    //             destination: "منزل کا پورٹ / شہر",
    //             dest_ph: "مثال: Hamburg | DE-HAM",
    //             modality: "طریقہ کار",
    //             modality_opt: "سمندری فریٹ (FCL/LCL)",
    //             weight: "کل وزن (kg)",
    //             weight_ph: "مثال: 14,500",
    //             email: "انٹرپرائز ای میل ایڈریس",
    //             email_ph: "operations@enterprise.com",
    //             submit: "گارنٹی شدہ ریٹ کا حساب لگائیں 📊"
    //         }
    //     },
    //     cta: {
    //         badge: "ان روٹ لاجسٹکس آپریشنز",
    //         title: "کیا آپ اپنا کارگو منتقل کرنے کے لیے تیار ہیں؟",
    //         subtitle: "مسابقتی نرخوں، مخصوص گنجائش اور حسب ضرورت لاجسٹکس حل کے لیے ہمارے ماہرین سے رابطہ کریں۔",
    //         btn_primary: "ابھی شروع کریں",
    //         btn_secondary: "مشاورت کا وقت طے کریں"
    //     },
    //     footer: {
    //         blurb: "50+ سے زیادہ ممالک میں رفتار، درستگی اور جدید ترین ٹیلی میٹری کے ساتھ عالمی سپلائی چین حل پیش کرنا۔",
    //         quick_links_title: "کوئیک لنکس",
    //         services_title: "خدمات",
    //         contact_title: "رابطہ اور عالمی آپریشنز",
    //         ops_desk: "24/7 آپریشنز ڈیسک",
    //         ops_email: "support@afaqalbahr.com",
    //         ops_phone: "+971 56 826 2134",
    //         ops_address: "گلوبل لاجسٹکس ہب: ٹرمینل 4، دبئی میٹروپولیٹن سیٹی، یو اے ای",
    //         terms: "شرائط و ضوابط",
    //         privacy: "پرائیویسی پالیسی",
    //         security: "سیکیورٹی ڈسکلوزرز"
    //     }
    // }
};
