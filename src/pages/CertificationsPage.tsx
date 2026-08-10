import { ShieldCheck, Award, BadgeCheck, FileCheck2, Globe2, Factory, FlaskConical, CheckCircle2 } from 'lucide-react'

const certifications = [
  {
    code: 'ISO 9001:2015',
    title: 'Quality Management System',
    desc: 'Certified quality management covering design, manufacturing, and export of cable termination hardware with zero-defect batch control.',
    icon: ShieldCheck,
    scope: 'Facility-wide Quality Assurance'
  },
  {
    code: 'CE',
    title: 'European Conformity',
    desc: 'Products comply with applicable European Union directives for low-voltage electrical equipment and electromagnetic compatibility.',
    icon: BadgeCheck,
    scope: 'Low Voltage Directive (LVD) & EMC'
  },
  {
    code: 'DIN 46235',
    title: 'Compression Cable Lugs',
    desc: 'Manufactured to German Institute for Standardization geometry for seamless compatibility with standard crimping dies.',
    icon: Award,
    scope: 'Copper Compression Terminals'
  },
  {
    code: 'BS 1977',
    title: 'Copper Terminals Standard',
    desc: 'British Standard for copper compression terminals ensuring consistent electrical and mechanical performance.',
    icon: FileCheck2,
    scope: 'Copper Terminals & Lugs'
  },
  {
    code: 'BS 6121',
    title: 'Cable Gland Armor',
    desc: 'British Standard governing mechanical cable glands for armored and non-armored cables in industrial installations.',
    icon: Factory,
    scope: 'BW / CW / E1W Cable Glands'
  },
  {
    code: 'BS EN 61386',
    title: 'Conduit Systems',
    desc: 'European harmonized standard for flexible conduit systems and their accessories for cable management.',
    icon: Globe2,
    scope: 'Flexible Conduits & Accessories'
  },
  {
    code: 'IP68',
    title: 'Ingress Protection Rating',
    desc: 'Highest dust-tight and continuous water immersion protection rating verified through hydrostatic testing.',
    icon: FlaskConical,
    scope: 'Weatherproof Gland Sealing'
  },
  {
    code: 'RoHS',
    title: 'Restriction of Hazardous Substances',
    desc: 'Compliance with hazardous substance restrictions ensuring environmentally safe materials in all product lines.',
    icon: CheckCircle2,
    scope: 'Environmental Compliance'
  }
]

const qualityChecks = [
  'Spectrometric E-Copper Purity Verification (99.9%)',
  'Micro-Ohmmeter Contact Resistance Testing',
  'IP68 Hydrostatic Ingress Chamber Testing',
  'Tensile Pull-out Force Verification',
  'Salt-Spray Corrosion Resistance Testing',
  'Cross-Sectional Crimp Micro-Photography'
]

export function CertificationsPage() {
  return (
    <div style={{ maxWidth: '1280px', margin: '40px auto 100px', padding: '0 5vw' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
        <span className="eyebrow-badge eyebrow-badge-gold">CERTIFICATIONS & COMPLIANCE</span>
        <h1 className="hero-title" style={{ marginTop: '12px' }}>
          Certified to <em>global standards.</em>
        </h1>
        <p className="body-text" style={{ marginTop: '18px' }}>
          Cablond products are manufactured and tested against the world's most demanding electrical and industrial standards, ensuring reliable performance in critical infrastructure.
        </p>
      </div>

      {/* Certifications Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '80px' }}>
        {certifications.map(cert => {
          const IconComp = cert.icon
          return (
            <div key={cert.code} className="card-clean" style={{ padding: '32px', background: '#FFFFFF', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(15,23,42,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(30, 58, 138, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IconComp size={24} color="var(--primary)" />
                </div>
                <div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--secondary)', fontFamily: 'var(--font-heading)' }}>{cert.code}</div>
                  <div style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{cert.scope}</div>
                </div>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--secondary)', marginBottom: '8px' }}>{cert.title}</h3>
              <p className="body-text" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{cert.desc}</p>
            </div>
          )
        })}
      </div>

      {/* Quality Assurance Banner */}
      <div className="card-clean" style={{ background: 'var(--secondary)', color: '#FFFFFF', borderRadius: '28px', padding: '56px 8%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,115,51,0.15) 0%, transparent 70%)', right: '-80px', top: '-80px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow-badge eyebrow-badge-gold">ZERO-DEFECT QUALITY CONTROL</span>
          <h2 className="section-title" style={{ color: '#FFFFFF', marginTop: '14px' }}>
            Every batch tested in <em>accredited laboratories.</em>
          </h2>
          <p style={{ color: '#CBD5E1', fontSize: '16px', margin: '18px 0 32px', maxWidth: '560px' }}>
            From raw copper purity analysis to final crimp verification, each production batch undergoes rigorous multi-stage inspection.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
            {qualityChecks.map((check, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600, color: '#E2E8F0' }}>
                <CheckCircle2 size={18} color="var(--accent)" />
                <span>{check}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}