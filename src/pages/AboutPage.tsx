import { LazyImage } from '../components/LazyImage'
import { CheckCircle2 } from 'lucide-react'

const aboutSections = [
  {
    tag: 'MANUFACTURING FACILITY',
    title: 'Modern 50,000 Sq. Ft. Electrical Production Plant',
    desc: 'Our state-of-the-art facility integrates automated raw copper drawing, high-speed press lines, and environmental tin-plating baths for consistent metallurgical density and flawless surface finish.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80',
    bullets: ['Automated CNC Tube Cutting', 'High-Purity Electrolytic Tin Plating', 'Continuous Thermal Annealing']
  },
  {
    tag: 'CNC PRECISION MACHINING',
    title: 'Sub-Millimeter Die & Barrel Tolerances',
    desc: 'Using multi-axis CNC swiss machines, Cablond lugs and glands achieve perfect concentricity. This prevents cable strand shearing during high-pressure hexagonal crimping.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80',
    bullets: ['0.01mm Concentricity Control', 'Seamless Tube Extrusion', 'Flared Wire Entry Bellmouths']
  },
  {
    tag: 'QUALITY & LABORATORY',
    title: 'Zero-Defect Inspection & Metallurgical Labs',
    desc: 'Every master batch undergoes strict electrical resistance testing, cross-sectional crimp micro-photography, and salt-spray corrosion tests to ensure 30+ year service life in extreme environments.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    bullets: ['Micro-Ohmmeter Resistance Check', 'IP68 Hydrostatic Ingress Chamber', 'Tensile Pull-out Force Verification']
  },
  {
    tag: 'WAREHOUSE & GLOBAL LOGISTICS',
    title: 'Automated Storage & Export Seaworthy Packaging',
    desc: 'With automated inventory tracking and moisture-barrier vacuum export packaging, Cablond ensures pristine arrival at port terminals across the Middle East, South East Asia, and Africa.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    bullets: ['Heavy-Duty Seaworthy Wooden Pallets', 'Custom Private Label Packaging', 'Rapid Export Documentation']
  }
]

export function AboutPage() {
  return (
    <div style={{ maxWidth: '1280px', margin: '40px auto 100px', padding: '0 5vw' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
        <span className="eyebrow-badge">COMPANY OVERVIEW</span>
        <h1 className="hero-title" style={{ marginTop: '12px' }}>
          Focused on the art of <em>connection.</em>
        </h1>
        <p className="body-text" style={{ marginTop: '18px' }}>
          Cablond is a high-precision cable termination brand by Group FNT. We combine legacy metallurgical expertise with state-of-the-art automated manufacturing to supply Siemens, ABB, and Phoenix Contact grade hardware worldwide.
        </p>
      </div>

      {/* Heritage Stats Banner */}
      <div className="card-clean" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', padding: '36px 40px', background: 'var(--secondary)', color: '#FFFFFF', borderRadius: '24px', marginBottom: '80px' }}>
        <div>
          <span style={{ fontSize: '36px', fontWeight: 800, color: 'var(--accent)' }}>30+</span>
          <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>Years Group FNT Heritage</p>
        </div>
        <div>
          <span style={{ fontSize: '36px', fontWeight: 800, color: 'var(--accent)' }}>50,000</span>
          <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>Sq. Ft. Manufacturing Plant</p>
        </div>
        <div>
          <span style={{ fontSize: '36px', fontWeight: 800, color: 'var(--accent)' }}>100%</span>
          <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>E-Copper Certified Raw Material</p>
        </div>
        <div>
          <span style={{ fontSize: '36px', fontWeight: 800, color: 'var(--accent)' }}>19+</span>
          <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>Global Export Destinations</p>
        </div>
      </div>

      {/* Alternating Image/Content Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {aboutSections.map((sec, idx) => {
          const isEven = idx % 2 === 0
          return (
            <div
              key={sec.tag}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '60px',
                alignItems: 'center',
                direction: isEven ? 'ltr' : 'rtl'
              }}
            >
              {/* Image side */}
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '380px',
                  boxShadow: '0 15px 35px rgba(15,23,42,0.1)',
                  direction: 'ltr'
                }}
              >
                <LazyImage
                  src={sec.image}
                  alt={sec.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Text side */}
              <div style={{ direction: 'ltr' }}>
                <span className="eyebrow-badge-gold">{sec.tag}</span>
                <h2 className="sub-title" style={{ fontSize: '32px', marginTop: '12px', marginBottom: '16px' }}>
                  {sec.title}
                </h2>
                <p className="body-text" style={{ marginBottom: '24px' }}>
                  {sec.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {sec.bullets.map((b, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', fontWeight: 600, color: 'var(--secondary)' }}>
                      <CheckCircle2 size={18} color="var(--primary)" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
