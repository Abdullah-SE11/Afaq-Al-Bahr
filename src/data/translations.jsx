import React from 'react';
import { Anchor, Plane, Truck, ExternalLink } from 'lucide-react';

export const translations = {
    en: {
        navbar: {
            contact: "Contact Us",
            solutions: "Solutions",
            network: "Our Network",
            about: "About Company",
            track: "Track Portal",
            connect: "Connect",
            privacy: "Privacy",
            legal: "Legal",
            cookies: "Cookies",
            rights: "© 2022 AFAQ AL BAHR SHIPPING L.L.C. | آفاق البحر للشحن ش.ذ.م.م | Muhammad Arif"
        },
        hero: {
            tag: "Horizons of the Sea",
            title_line1: "AFAQ",
            title_line2_1: "AL",
            title_line2_2: "BAHR",
            title_line3: "SHIPPING",
            description: "Navigating global trade routes with excellence. From sea to sky, we deliver your cargo across endless horizons.",
            contact_button: "Contact Us",
            shipping_method: "Select Shipping Method",
            methods: {
                air: { title: "Air", tag: "Fastest" },
                sea: { title: "Sea", tag: "Global" },
                ground: { title: "Ground", tag: "Economic" }
            },
            badge: {
                val: "99%",
                label: "Success Rate",
                sub: "On-Time Delivery"
            }
        },
        stats: [
            { val: '150+', lab: 'Strategic Partners' },
            { val: '24/7', lab: 'Real-time Support' },
            { val: '12K', lab: 'Annual Shipments' },
            { val: 'Global', lab: 'Reach & Network' }
        ],
        solutions: {
            title: "End-to-End Solutions",
            description: "Integrated supply chain management tailored to your enterprise requirements.",
            items: [
                { title: "Ocean Freight", icon: <Anchor />, desc: "Global maritime solutions with prioritized space protection.", color: 'bg-blue-50' },
                { title: "Air Logistics", icon: <Plane />, desc: "High-velocity air freight for critical global trade.", color: 'bg-cyan-50' },
                { title: "Land Transport", icon: <Truck />, desc: "Regional distribution with full-fleet visibility.", color: 'bg-green-50' },
                { title: "Customs", icon: <ExternalLink />, desc: "Complex regulatory clearance and compliance mastery.", color: 'bg-slate-100' }
            ],
            proceed: "PROCEED"
        },
        about: {
            title: "Expert Logistics Solutions",
            description: "AFAQ AL BAHR SHIPPING L.L.C. (آفاق البحر للشحن ش.ذ.م.م), led by Muhammad Arif, is more than a logistics provider; we are architects of global connectivity. By combining local operational depth with international reach, we ensure your assets move with unparalleled velocity and safety.",
            list: [
                "Multi-modal Transportation Excellence",
                "Strategic Warehousing & Distribution",
                "Innovative Supply Chain Optimization",
                "Dedicated Key Account Management"
            ],
            button: "Learn Our Story",
            established: "Established in the heart of maritime trade — Dubai, UAE.",
            leadership: {
                title: "Our Leadership",
                name: "Muhammad Arif",
                role: "Founder & CEO",
                message: "With over two decades of experience in global logistics, I founded AFAQ AL BAHR SHIPPING L.L.C. to bridge the gap between continents. Our commitment is to provide seamless, secure, and efficient shipping solutions that empower businesses to reach their full potential on the global stage."
            }
        },
        contact: {
            title: "Get In Touch",
            description: "Ready to streamline your logistics? Contact us today and let's discuss how we can help your business reach new horizons.",
            form_title: "Send Us a Message",
            labels: {
                name: "Full Name",
                name_placeholder: "John Doe",
                phone: "Phone Number",
                message: "Message",
                msg_placeholder: "Tell us about your shipping needs...",
                submit: "Send Message"
            },
            office_title: "Office Location",
            office_desc: <>Dubai, UAE</>,
            contact_title: "Contact Details",
            contact_desc: <>Phone: 056 826 2134, 055 935 9616, 055 536 5465</>,
            quick_title: "Quick Contact",
            whatsapp: { title: "WhatsApp", sub: "Chat with us" },
            call: { title: "Call Us", sub: "055 536 5465" },
            sms: { title: "Send SMS", sub: "Text message" }
        }
    },
    ur: {
        navbar: {
            contact: "Contact Us",
            solutions: "Solutions",
            network: "Our Network",
            about: "About Company",
            track: "Track Portal",
            connect: "Connect",
            privacy: "Privacy",
            legal: "Legal",
            cookies: "Cookies",
            rights: "© 2022 AFAQ AL BAHR SHIPPING L.L.C. | آفاق البحر للشحن ش.ذ.م.م | Muhammad Arif"
        },
        hero: {
            tag: "دبئی ٹو پاکستان کارگو",
            title_line1: "آفاق",
            title_line2_1: "",
            title_line2_2: "البحر",
            title_line3: "شپنگ",
            description: "دبئی اور متحدہ عرب امارات سے پاکستان بھر میں آپ کے قیمتی سامان کی محفوظ اور تیز رفتار ترسیل۔",
            contact_button: "رابطہ کریں",
            shipping_method: "شپنگ کا طریقہ منتخب کریں",
            methods: {
                air: { title: "ہوائی", tag: "تیز ترین" },
                sea: { title: "بحری", tag: "عالمی" },
                ground: { title: "زمینی", tag: "کفایت شعار" }
            },
            badge: {
                val: "99%",
                label: "کامیابی کی شرح",
                sub: "وقت پر ترسیل"
            }
        },
        stats: [
            { val: '150+', lab: 'قابل اعتماد پارٹنرز' },
            { val: '24/7', lab: 'مکمل سپورٹ' },
            { val: '12K', lab: 'سالانہ ترسیلات' },
            { val: 'عالمی', lab: 'نیٹ ورک' }
        ],
        solutions: {
            title: "مکمل لاجسٹک حل",
            description: "آپ کی کاروباری ضروریات کے عین مطابق سپلائی چین کا بہترین انتظام۔",
            items: [
                { title: "بحری فریٹ", icon: <Anchor />, desc: "سمندری راستوں سے آپ کے سامان کی عالمی اور محفوظ ترسیل۔", color: 'bg-blue-50' },
                { title: "فضائی لاجسٹکس", icon: <Plane />, desc: "اہم اور قیمتی ترسیلات کے لیے دنیا بھر میں تیز ترین ہوائی سروس۔", color: 'bg-cyan-50' },
                { title: "زمینی نقل و حمل", icon: <Truck />, desc: "پاکستان بھر میں زمینی راستوں سے ہر شہر تک بروقت ترسیل۔", color: 'bg-green-50' },
                { title: "کسٹم کلیئرنس", icon: <ExternalLink />, desc: "کسٹم کلیئرنس اور تمام سرکاری کاغذات کی مکمل اور آسان سہولت۔", color: 'bg-slate-100' }
            ],
            proceed: "تفصیلات"
        },
        about: {
            title: "بہترین لاجسٹک حل",
            description: "آفاق البحر شپنگ (آفاق البحر للشحن ش.ذ.م.م)، Muhammad Arif کی قیادت میں، محض ایک لاجسٹک کمپنی نہیں؛ ہم آپ کے کاروبار کو عالمی منڈیوں سے جوڑنے والے معمار ہیں۔ ہم مقامی تجربے اور عالمی معیار کو ملا کر یقینی بناتے ہیں کہ آپ کا سامان مکمل حفاظت کے ساتھ پہنچے۔",
            list: [
                "اعلیٰ درجے کی ملٹی ماڈل ٹرانسپورٹیشن",
                "بہترین ویئر ہاؤسنگ اور ترسیل",
                "جدید سپلائی چین مینجمنٹ",
                "خصوصی کسٹمر سپورٹ"
            ],
            button: "ہماری کہانی",
            established: "دبئی، یو اے ای — بحری تجارت کے مرکز میں قائم۔",
            leadership: {
                title: "Our Leadership",
                name: "Muhammad Arif",
                role: "Founder & CEO",
                message: "عالمی لاجسٹکس میں دو دہائیوں سے زیادہ کے تجربے کے ساتھ، میں نے براعظموں کے درمیان فاصلوں کو ختم کرنے کے لیے آفاق البحر شپنگ کی بنیاد رکھی۔ ہمارا عزم ایسی ہموار، محفوظ اور موثر ترسیل فراہم کرنا ہے جو آپ کے کاروبار کو عالمی سطح پر نئی بلندیوں تک پہنچائے۔"
            }
        },
        contact: {
            title: "Get In Touch",
            description: "Ready to streamline your logistics? Contact us today and let's discuss how we can help your business reach new horizons.",
            form_title: "Send Us a Message",
            labels: {
                name: "Full Name",
                name_placeholder: "John Doe",
                phone: "Phone Number",
                message: "Message",
                msg_placeholder: "Tell us about your shipping needs...",
                submit: "Send Message"
            },
            office_title: "Office Location",
            office_desc: <>Dubai, UAE</>,
            contact_title: "Contact Details",
            contact_desc: <>Phone: 056 826 2134, 055 935 9616, 055 536 5465</>,
            quick_title: "Quick Contact",
            whatsapp: { title: "WhatsApp", sub: "Chat with us" },
            call: { title: "Call Us", sub: "055 536 5465" },
            sms: { title: "Send SMS", sub: "Text message" }
        }
    }
};
