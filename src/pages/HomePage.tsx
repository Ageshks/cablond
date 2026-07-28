import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Zap,
  Globe,
  FileText,
  Sparkles,
  Award,
  BarChart3,
  Cpu,
  Download,
  Layers,
  Box,
  Link as LinkIcon,
  Disc,
  Factory,
  CheckCircle2,
  Anchor,
  Flame,
  Building2,
  Sun,
  Activity,
  Truck,
  Clapperboard
} from 'lucide-react'
import { AnimatedNumber } from '../components/AnimatedNumber'
import { LazyImage } from '../components/LazyImage'
import { products, regionalMarkets as allRegions } from '../data/catalog'
import type { Product, RegionalMarket } from '../types'

interface HomePageProps {
  onOpenProduct: (p: Product) => void
  activeRegion: string
  setActiveRegion: (id: string) => void
}

const categoryCovers = [
  {
    category: 'Cable Lugs',
    image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=1000&q=80',
    icon: Layers,
    itemCount: '11 Subcategories',
    desc: 'Heavy-duty copper compression terminals, DIN 46235, bi-metallic & long barrel lugs.'
  },
  {
    category: 'Cable Glands',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    icon: Box,
    itemCount: '7 Subcategories',
    desc: 'IP68 weatherproof double compression BW, CW, A1/A2 glands & hazardous area kits.'
  },
  {
    category: 'Connectors',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=1000&q=80',
    icon: LinkIcon,
    itemCount: '4 Subcategories',
    desc: 'Copper ferrules, screw block connectors, split bolts & high-torque C-type taps.'
  },
  {
    category: 'Flexible Conduits',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
    icon: Disc,
    itemCount: '2 Subcategories',
    desc: 'Galvanised steel flexible conduits & PVC coated weatherproof conduit accessories.'
  }
]

const industriesData = [
  {
    title: 'Power Plants',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    desc: 'High-voltage thermal & hydro station cable terminations.'
  },
  {
    title: 'Oil & Gas',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    desc: 'Flameproof IP68 double compression glands for offshore rigs.'
  },
  {
    title: 'Marine & Naval',
    icon: Anchor,
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80',
    desc: 'Corrosion-resistant tinned copper lugs for marine vessels.'
  },
  {
    title: 'Construction & EPC',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
    desc: 'Architectural power risers & commercial switchboard cabling.'
  },
  {
    title: 'Electrical Distribution',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
    desc: 'Heavy-duty busbar terminations and transformer lugs.'
  },
  {
    title: 'Renewable Energy',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
    desc: 'Solar farm inverter connections & wind turbine cabling.'
  },
  {
    title: 'Industrial Automation',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    desc: 'Control panel wiring ferrules & high-density DIN terminals.'
  },
  {
    title: 'Infrastructure & Rail',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    desc: 'Railway traction power cabling & metro station conduits.'
  }
]

export function HomePage({ onOpenProduct, activeRegion, setActiveRegion }: HomePageProps) {
  const activeRegionData: RegionalMarket =
    allRegions.find(r => r.id === activeRegion) ?? allRegions[0]

  return (
    <div style={{ position: 'relative' }}>

      {/* ── FULL-VIEWPORT VIDEO COVER HERO ─────────────────────────────────── */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '640px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'calc(-74px - 12px - 16px)', /* Pull up behind the sticky navbar */
        paddingTop: 'calc(74px + 12px + 16px)'   /* Push content down below navbar */
      }}
      className="hero-video-section"
      >
        {/* Video fill */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/result.mp4"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
        {/* Cinematic dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, rgba(8,12,28,0.72) 0%, rgba(8,12,28,0.48) 55%, rgba(8,12,28,0.68) 100%)',
          zIndex: 1
        }} />
        {/* Bottom fade to page background */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, transparent, var(--bg-primary))',
          zIndex: 2
        }} />

        {/* Hero content — centered on top of video */}
        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 5vw', maxWidth: '920px', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.22)',
              padding: '7px 18px',
              borderRadius: '9999px',
              marginBottom: '28px',
              color: 'rgba(255,255,255,0.90)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em'
            }}>
              <Sparkles size={13} />
              <span>ENGINEERED FOR EXCELLENCE • GROUP FNT</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(44px, 8vw, 96px)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.03,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              textShadow: '0 4px 48px rgba(0,0,0,0.5)'
            }}>
              Precision in every
              <br />
              <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>termination.</em>
            </h1>

            <p style={{
              fontSize: 'clamp(15px, 2vw, 19px)',
              color: 'rgba(255,255,255,0.78)',
              lineHeight: 1.65,
              maxWidth: '660px',
              margin: '0 auto 44px',
              textShadow: '0 1px 16px rgba(0,0,0,0.4)'
            }}>
              Architectural-grade copper cable lugs, weather-proof glands, connectors, and
              flexible conduits engineered to European DIN &amp; British Standards for
              heavy-duty industrial power distribution.
            </p>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#/products" className="btn btn-primary btn-lg">
                <span>Explore Products</span>
                <ArrowUpRight size={18} />
              </a>
              <a href="#/catalogue" className="btn btn-secondary btn-lg" style={{
                background: 'rgba(255,255,255,0.10)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.28)',
                color: '#FFFFFF'
              }}>
                <FileText size={18} />
                <span>View Technical Catalogue</span>
              </a>
            </div>

            {/* Trust row */}
            <div style={{ display: 'flex', gap: '48px', justifyContent: 'center', marginTop: '56px', flexWrap: 'wrap' }}>
              {([['99.9%', 'E-Copper Purity'], ['36 kV', 'Max Voltage Rating'], ['19+', 'Export Markets']] as [string, string][]).map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>{val}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', marginTop: '8px', letterSpacing: '0.07em', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── DEDICATED INDUSTRIAL VIDEO SHOWCASE BANNER ─────────────────────────── */}
      <section style={{ maxWidth: '1280px', margin: '120px auto 100px', padding: '0 5vw' }}>
        <div className="card-clean" style={{ position: 'relative', borderRadius: '28px', overflow: 'hidden', height: '480px', border: '1px solid var(--border)', boxShadow: '0 25px 50px rgba(15,23,42,0.12)' }}>
          <LazyImage
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=85"
            alt="Inside Precision Manufacturing Plant"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.4) 60%, rgba(15,23,42,0.15) 100%)' }} />

          <div style={{ position: 'absolute', inset: 0, padding: '50px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '640px', color: '#FFFFFF', zIndex: 2 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(245, 158, 11, 0.2)', border: '1px solid rgba(245, 158, 11, 0.4)', padding: '6px 14px', borderRadius: '9999px', width: 'fit-content', marginBottom: '20px' }}>
              <Clapperboard size={16} color="var(--accent)" />
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.08em' }}>INDUSTRIAL TECHNOLOGY STREAM</span>
            </div>

            <h2 className="section-title" style={{ color: '#FFFFFF', fontSize: '38px', lineHeight: 1.15 }}>
              Inside our <em>50,000 sq. ft.</em> precision plant.
            </h2>

            <p style={{ color: '#CBD5E1', fontSize: '16px', lineHeight: 1.6, margin: '20px 0 32px' }}>
              Watch automated CNC extrusion, micro-ohmmeter testing, and continuous tin-plating processes engineered to European DIN &amp; British Standards.
            </p>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent)' }}>0.01mm</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>Machining Tolerance</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '24px' }}>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent)' }}>99.9%</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>E-Copper Purity</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '24px' }}>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent)' }}>IP68</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>Ingress Certification</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATISTICS ───────────────────────────────────── */}
      <section className="stats-section">
        <div className="stats-container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            <span className="eyebrow-badge">ENGINEERING NUMBERS</span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              Built to power <em>critical infrastructure.</em>
            </h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon"><Globe size={24} /></div>
              <div className="stat-value"><AnimatedNumber value={19} suffix="+" /></div>
              <div className="stat-label">Export Markets</div>
              <div className="stat-desc">Gulf, SE Asia, Africa, Americas &amp; Oceania</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Award size={24} /></div>
              <div className="stat-value"><AnimatedNumber value={99} suffix=".9%" /></div>
              <div className="stat-label">Pure E-Copper</div>
              <div className="stat-desc">High thermal conductivity grade raw material</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><BarChart3 size={24} /></div>
              <div className="stat-value"><AnimatedNumber value={30} suffix="+" /></div>
              <div className="stat-label">Years Heritage</div>
              <div className="stat-desc">Backing by Group FNT precision engineering</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Cpu size={24} /></div>
              <div className="stat-value">0.01mm</div>
              <div className="stat-label">Machining Precision</div>
              <div className="stat-desc">Seamless barrel alignment for perfect crimps</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES CARDS (WHITE BG, SOFT SHADOW, HOVER ZOOM) ───────── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 100px', padding: '0 5vw' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <span className="eyebrow-badge eyebrow-badge-gold">MAIN PRODUCT CATEGORIES</span>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Engineered electrical <em>hardware lineup.</em>
          </h2>
          <p className="body-text" style={{ marginTop: '16px' }}>
            Explore our main categories with clean industrial product photos, standardized geometries, and full specification sheets.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {categoryCovers.map(cat => {
            const IconC = cat.icon
            return (
              <a
                href="#/products"
                key={cat.category}
                className="card-clean"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
                  border: '1px solid var(--border)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(15, 23, 42, 0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.06)'
                }}
              >
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#FAFAFA' }}>
                  <LazyImage
                    src={cat.image}
                    alt={cat.category}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div style={{ position: 'absolute', top: '14px', right: '14px', background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', color: '#FFF', fontWeight: 600 }}>
                    {cat.itemCount}
                  </div>
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(30, 58, 138, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconC size={18} color="var(--primary)" />
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--secondary)' }}>{cat.category}</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px', flex: 1 }}>
                    {cat.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 700, color: 'var(--primary)' }}>
                    <span>Browse Category</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </section>

      {/* ── FEATURE PILLARS ──────────────────────────────── */}
      <section className="pillars-section">
        <div className="section-header">
          <span className="eyebrow-badge eyebrow-badge-gold">TECHNOLOGY &amp; STANDARDS</span>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Why leading contractors <em>specify Cablond.</em>
          </h2>
          <p className="body-text" style={{ marginTop: '16px' }}>
            Every product is manufactured to exacting tolerances ensuring zero thermal runaway and maximum mechanical strength.
          </p>
        </div>
        <div className="pillars-grid">
          <div className="card-clean pillar-card">
            <div className="pillar-number">01 / CONDUCTIVITY</div>
            <h3>99.9% Electrolytic Copper</h3>
            <p className="body-text" style={{ fontSize: '15px' }}>
              We source only high-purity E-Copper to guarantee superior electrical conductivity, reducing resistance and preventing overheating under surge loads.
            </p>
          </div>
          <div className="card-clean pillar-card">
            <div className="pillar-number">02 / PROTECTION</div>
            <h3>IP68 Weatherproof Sealing</h3>
            <p className="body-text" style={{ fontSize: '15px' }}>
              Cablond cable glands feature heavy-duty elastomeric seals and precision-machined brass threads to prevent moisture ingress in outdoor environments.
            </p>
          </div>
          <div className="card-clean pillar-card">
            <div className="pillar-number">03 / COMPLIANCE</div>
            <h3>DIN &amp; BS Standard Geometry</h3>
            <p className="body-text" style={{ fontSize: '15px' }}>
              Designed to fit standard crimping dies effortlessly. Inspection dimples and flared entries ensure easy wire insertion and verification.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────── */}
      <section className="catalog-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="eyebrow-badge">PRODUCT HIGHLIGHTS</span>
            <h2 className="section-title" style={{ marginTop: '8px' }}>
              Featured <em>Cablond lines.</em>
            </h2>
          </div>
          <a href="#/products" className="btn btn-secondary btn-sm">
            <span>View All Products</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="products-grid">
          {products.slice(0, 3).map(p => (
            <div className="card-clean product-card" key={p.slug}>
              <div className="product-card-media">
                <LazyImage src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="product-category-tag">{p.category}</span>
                <span className="product-sub-tag">{p.subcategory}</span>
              </div>
              <div className="product-card-body">
                <h3 className="product-title">{p.name}</h3>
                <p className="product-description">{p.description}</p>
                <div className="product-specs-pills">
                  {p.standard && <span className="spec-pill">{p.standard}</span>}
                  {p.voltage && <span className="spec-pill">{p.voltage}</span>}
                </div>
                <div className="product-card-footer">
                  <button className="product-link-btn" onClick={() => onOpenProduct(p)}>
                    <span>View Specifications</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE (BACKGROUND IMAGES, GRADIENT OVERLAY, WHITE ICON) ── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 100px', padding: '0 5vw' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <span className="eyebrow-badge">GLOBAL APPLICATION SECTORS</span>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Industries <em>we serve.</em>
          </h2>
          <p className="body-text" style={{ marginTop: '16px' }}>
            Our cable accessories power critical infrastructure across demanding operating environments worldwide.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {industriesData.map(ind => {
            const IconComponent = ind.icon
            return (
              <div
                key={ind.title}
                style={{
                  position: 'relative',
                  height: '240px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(15,23,42,0.1)'
                }}
                className="industry-card-wrapper"
              >
                <LazyImage
                  src={ind.image}
                  alt={ind.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.85) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px',
                    color: '#FFFFFF'
                  }}
                >
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    <IconComponent size={22} color="#FFFFFF" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>{ind.title}</h3>
                  <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: 1.4 }}>{ind.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── QUALITY SECTION ───────────────────────────────── */}
      <section style={{ background: 'var(--surface-alt)', padding: '80px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginBottom: '80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5vw' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow-badge eyebrow-badge-gold">QUALITY ASSURANCE</span>
              <h2 className="section-title" style={{ marginTop: '14px' }}>
                Tested in <em>accredited laboratories.</em>
              </h2>
              <p className="body-text" style={{ marginTop: '18px', marginBottom: '24px' }}>
                From spectroscopic copper purity analysis to salt-spray corrosion resistance tests, Cablond maintains strict zero-defect quality control across all manufacturing batches.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Spectrometric E-Copper Purity Verification (99.9%)', 'Micro-Ohmmeter Contact Resistance Testing', 'IP68 Waterproof Ingress & Tensile Pull-out Tests', 'ISO 9001:2015 & CE Quality Control Standards'].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: 600, color: 'var(--secondary)' }}>
                    <CheckCircle2 size={18} color="var(--success)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}>
                <LazyImage src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80" alt="Quality Inspection" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px', marginTop: '30px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}>
                <LazyImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" alt="Testing Laboratory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GLOBAL PRESENCE ──────────────────────────────── */}
      <section className="presence-section">
        <div className="presence-layout">
          <div>
            <span className="eyebrow-badge eyebrow-badge-gold">GLOBAL DISTRIBUTION</span>
            <h2 className="section-title" style={{ marginTop: '14px' }}>
              Trusted in <em>19+ overseas markets.</em>
            </h2>
            <p className="body-text" style={{ marginTop: '18px' }}>
              Cablond products are supplied exclusively to overseas electrical contractors, power distribution boards, and industrial projects.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '28px', flexWrap: 'wrap' }}>
              {allRegions.map(r => (
                <button
                  key={r.id}
                  className={`btn ${activeRegion === r.id ? 'btn-accent' : 'btn-secondary'}`}
                  style={{ padding: '8px 18px', fontSize: '13px' }}
                  onClick={() => setActiveRegion(r.id)}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="region-card" style={{ borderColor: activeRegionData.accentColor }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span className="region-name">{activeRegionData.name}</span>
                <Globe size={24} color={activeRegionData.accentColor} />
              </div>
              <h4 style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Key Target Markets:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {activeRegionData.countries.map(c => (
                  <span key={c} style={{ background: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '9999px', fontSize: '13px', color: '#FFFFFF' }}>
                    {c}
                  </span>
                ))}
              </div>
              <h4 style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Regional Approvals &amp; Standards:
              </h4>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {activeRegionData.certifications.map(cert => (
                  <span key={cert} style={{ border: '1px solid rgba(245,158,11,0.4)', color: 'var(--accent)', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATALOGUE BANNER ─────────────────────────────── */}
      <section className="catalogue-banner">
        <div className="catalogue-card">
          <div>
            <span className="eyebrow-badge eyebrow-badge-gold">TECHNICAL CATALOGUE</span>
            <h2 className="section-title" style={{ color: '#FFFFFF', marginTop: '12px' }}>
              Everything you need in <em>one reference guide.</em>
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '17px', margin: '20px 0 32px', maxWidth: '480px' }}>
              Download the complete Cablond Technical Catalogue featuring full dimensional tables, crimp die selection guides, and part numbers.
            </p>
            <a href="#/catalogue" className="btn btn-accent btn-lg">
              <Download size={20} />
              <span>Get Digital Catalogue</span>
            </a>
          </div>
          <div className="catalogue-mockup">
            <div>
              <span className="mockup-title">CABLOND GUIDE</span>
              <h3 className="mockup-brand" style={{ marginTop: '12px' }}>CABLE<br />TERMINATIONS</h3>
            </div>
            <div>
              <p style={{ fontSize: '11px', color: '#94A3B8' }}>BY GROUP FNT</p>
              <p style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: '700', marginTop: '4px' }}>PRODUCT CATALOGUE 2026/27</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
