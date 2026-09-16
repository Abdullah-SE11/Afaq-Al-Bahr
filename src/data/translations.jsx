import React from 'react';
import { Anchor, Plane, Truck, ExternalLink, ShieldCheck, Headphones, Zap, Box, Compass } from 'lucide-react';

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
            telemetry: "LIVE FLEET TELEMETRY ACTIVE • 2,130 Active Vessels & Flights",
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
                    link: "Explore network velocity ->"
                },
                {
                    icon: "compass",
                    title: "Global Coverage",
                    desc: "Strategic maritime terminals, chartered air hubs, and continental road networks span 50+ sovereign markets seamlessly.",
                    link: "View hub mappings ->"
                },
                {
                    icon: "shield",
                    title: "Secure Cargo",
                    desc: "IoT-environmental sensors, sealed cryptographic tamperproof seals, and 100% comprehensive marine transit insurance.",
                    link: "Security standards ->"
                },
                {
                    icon: "headset",
                    title: "24/7 Support",
                    desc: "Dedicated enterprise dispatcher desks backed by round-the-clock multilingual command-center specialists.",
                    link: "Contact desk ->"
                }
            ]
        },
        services: {
            badge: "END-TO-END CAPABILITIES",
            // title: "Multimodal Freight Services",
            subtitle: "Optimized for weight, density, schedule sensitivity, and hazardous compliance.",
            action_link: "Custom service architecture ↗",
            cards: [
                {
                    tag: "FTL • LTL • FLEET",
                    title: "Road Freight",
                    desc: "Full-truckload (FTL) and less-than-truckload (LTL) scheduled network with multi-temperature refrigerated trailers and border-pass clearance.",
                    link: "Ocean routes operational >"
                },
                {
                    tag: "FCL • LCL OCEAN",
                    title: "Sea Freight",
                    desc: "Full-container-load (FCL) and consolidation (LCL) global shipping spanning key trans-oceanic lanes with dedicated port terminal berths.",
                    link: "180+ Oceanic Corridors >"
                },
                {
                    tag: "CHARTER • CARGO LIFT",
                    title: "Air Freight",
                    desc: "Priority chartered airfreighters and consolidated belly-cargo space for mission-critical industries: aerospace, and high-value shipments.",
                    link: "Direct flight schedulers >"
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
                    link: "Accelerated SLA conditions >"
                },
                {
                    tag: "CUSTOMS • CAPS",
                    title: "Supply Chain Solutions",
                    desc: "Comprehensive international customs clearance, broker compliance, custom supply chain risk modeling, and lean terminal logistics.",
                    link: "Enterprise digital audit >"
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
