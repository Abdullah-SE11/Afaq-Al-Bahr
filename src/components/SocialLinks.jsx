import { Facebook, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react'

export function SocialLinks({ facebookUrl, linkedinUrl }) {
    const socialConfig = [
        {
            name: 'Facebook',
            url: facebookUrl || 'https://www.facebook.com/profile.php?id=61582700610000',
            icon: <Facebook size={20} />,
            color: '#1877F2'
        },
        {
            name: 'LinkedIn',
            url: linkedinUrl || 'https://www.linkedin.com/company/afaq-al-bahr-shipping-l-l-c/about/?viewAsMember=true',
            icon: <Linkedin size={20} />,
            color: '#0A66C2'
        }
    ]

    return (
        <div className="social-links-container" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            {socialConfig.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link glass-card"
                    style={{
                        padding: '0.8rem',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)'
                        e.currentTarget.style.backgroundColor = social.color
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.3)'
                    }}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    )
}
