import { LazyImage } from '../components/LazyImage'
import { CheckCircle2, Award, Factory, Globe2, ShieldCheck, ArrowUpRight } from 'lucide-react'
import aboutImage from '../assets/about.png'

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

const profileHighlights = [
  { icon: Factory, title: 'Government Recognized Export House', desc: 'Well-established export house manufacturing in-house under a distinct brand identity.' },
  { icon: ShieldCheck, title: 'ISO 9001:2000 Certified', desc: 'Management and manufacturing activities certified for stringent quality control at every stage.' },
  { icon: Globe2, title: 'Exclusive Overseas Markets', desc: 'Sold exclusively overseas ensuring complete adherence to international quality standards.' },
  { icon: Award, title: 'Quality & Economy Driven', desc: 'Core objectives of quality and economy with timely technology upgrades and industry trends.' }
]

export function AboutPage() {
  return (
    <div style={{ position: 'relative' }}>

      {/* ── SPLIT HERO: Company Profile ─────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1A2438 100%)',
        color: '#FFFFFF',
        padding: '80px 5vw',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative copper glow */}
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,115,51,0.2) 0%, transparent 70%)', right: '-100px', top: '-100px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,115,51,0.12) 0%, transparent 70%)', left: '-80px', bottom: '-120px', pointerEvents: 'none' }} />

        <div className="about-page-grid" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          {/* Left: headline + intro, left-aligned */}
          <div style={{ textAlign: 'left' }}>
            <span className="eyebrow-badge" style={{ background: 'rgba(184,115,51,0.2)', borderColor: 'rgba(184,115,51,0.4)', color: 'var(--copper-light)' }}>
              COMPANY PROFILE
            </span>
            <h1 style={{
              fontSize: 'clamp(38px, 5vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              marginTop: '18px',
              color: '#FFFFFF',
              textShadow: '0 4px 40px rgba(0,0,0,0.3)'
            }}>
              Focused on the art of <em style={{ color: 'var(--copper-light)', fontStyle: 'normal' }}>connection.</em>
            </h1>
            <p style={{ color: '#CBD5E1', fontSize: '17px', lineHeight: 1.75, marginTop: '24px', maxWidth: '560px' }}>
              CABLOND is a brand conceptualized by FNT, a well-established and Government recognized
              export house. This brand was established in order to market the company's in-house
              manufactured products under a distinct identity from India — Copper Cable Terminal Lugs
              and Cable Glands — engineered to the highest international standards.
            </p>
            <div style={{ display: 'flex', gap: '14px', marginTop: '36px', flexWrap: 'wrap' }}>
              <a href="#/products" className="btn btn-accent btn-lg">
                <span>Explore Our Products</span>
                <ArrowUpRight size={18} />
              </a>
              <a href="#/certifications" className="btn btn-lg" style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#FFFFFF'
              }}>
                <ShieldCheck size={18} />
                <span>View Certifications</span>
              </a>
            </div>
          </div>

          {/* Right: image card */}
          <div style={{ position: 'relative' }}>
            <div className="about-section-image" style={{ borderRadius: '24px', overflow: 'hidden', height: '420px', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <LazyImage
                src={aboutImage}
                alt="Cablond precision manufacturing"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.9) 100%)' }} />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--copper-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>ISO 9001:2000 Certified Facility</div>
                <div style={{ fontSize: '22px', fontWeight: 800, marginTop: '6px', color: '#FFFFFF' }}>Precision Copper Terminations</div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="about-hero-badge" style={{
              position: 'absolute',
              top: '-18px',
              right: '-18px',
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(16px)',
              borderRadius: '18px',
              padding: '16px 20px',
              boxShadow: '0 20px 45px rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <Award size={28} color="var(--copper)" />
              <div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--secondary)' }}>Govt. Recognized</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Export House</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY HIGHLIGHTS GRID ─────────────────────────────────────── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 80px', padding: '80px 5vw 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {profileHighlights.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div key={idx} className="card-clean" style={{ padding: '28px', background: '#FFFFFF', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(15,23,42,0.06)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(184,115,51,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <IconComp size={22} color="var(--copper)" />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--secondary)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Company Story Section ───────────────────────────────────────── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 100px', padding: '0 5vw' }}>
        <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="eyebrow-badge-gold">WHY CABLOND</span>
            <h2 className="section-title" style={{ marginTop: '14px' }}>
              Quality & Economy — <em>our core commitment.</em>
            </h2>
            <p className="body-text" style={{ marginTop: '18px', marginBottom: '24px' }}>
              The constant effort to fulfill these objectives ensures timely up-gradation of technology
              and keeping abreast with the developments and trends in the industry. The customer base
              ranges over a large variety of industries, which has resulted in a manufacturing facility
              with the capacity and capability to customize as per the client's requirements.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'State-of-the-art machinery with the most efficient manpower',
                'Best quality raw material for consistent metallurgical density',
                'Quality Control as one of the most important company departments',
                'Timely delivery to meet customer and market demands',
                'Good reputation in overseas markets built over decades'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: 600, color: 'var(--secondary)' }}>
                  <CheckCircle2 size={18} color="var(--copper)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-story-image" style={{ borderRadius: '24px', overflow: 'hidden', height: '400px', boxShadow: '0 15px 35px rgba(15,23,42,0.1)' }}>
            <LazyImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80" alt="Cablond quality laboratory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ── Heritage Stats Banner ───────────────────────────────────────── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 80px', padding: '0 5vw' }}>
        <div className="card-clean about-stats-banner" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', padding: '36px 40px', background: 'var(--secondary)', color: '#FFFFFF', borderRadius: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '36px', fontWeight: 800, color: 'var(--copper-light)' }}>30+</span>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>Years Engineering Heritage</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '36px', fontWeight: 800, color: 'var(--copper-light)' }}>50,000</span>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>Sq. Ft. Manufacturing Plant</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '36px', fontWeight: 800, color: 'var(--copper-light)' }}>100%</span>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>E-Copper Certified Raw Material</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '36px', fontWeight: 800, color: 'var(--copper-light)' }}>19+</span>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>Global Export Destinations</p>
          </div>
        </div>
      </section>

      {/* ── Alternating Image/Content Sections ──────────────────────────── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 100px', padding: '0 5vw' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {aboutSections.map((sec, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div
                key={sec.tag}
                className="about-alternating-grid"
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
                  className="about-alternating-image"
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
                        <CheckCircle2 size={18} color="var(--copper)" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}