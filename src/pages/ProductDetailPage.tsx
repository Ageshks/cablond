import { useState, useRef } from 'react'
import { ArrowUpRight, FileText, ShieldCheck, Zap, Award, CheckCircle2, ZoomIn, X } from 'lucide-react'
import { products } from '../data/catalog'
import { LazyImage } from '../components/LazyImage'

interface ProductDetailPageProps {
  slug: string
  onOpenQuote: () => void
}

export function ProductDetailPage({ slug, onOpenQuote }: ProductDetailPageProps) {
  const product = products.find(p => p.slug === slug) ?? products[0]

  const galleryViews = [
    { id: 'main', label: 'Product & Drawing', src: product.image },
    ...(product.dimensionCharts ?? []).map((chart, index) => ({
      id: `dimensions-${index}`,
      label: chart.label,
      src: chart.image
    }))
  ]

  const [activeView, setActiveView] = useState(galleryViews[0])
  const [isChartZoomed, setIsChartZoomed] = useState(false)
  const isDimensionChart = activeView.id.startsWith('dimensions-')

  // Amazon / Flipkart style zoom: image magnifies and pans to follow the cursor.
  const galleryRef = useRef<HTMLDivElement>(null)
  const [zoomOrigin, setZoomOrigin] = useState<{ x: number; y: number } | null>(null)

  const handleGalleryMouseMove = (e: React.MouseEvent) => {
    const el = galleryRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoomOrigin({ x, y })
  }

  return (
    <div style={{ maxWidth: '1280px', margin: '40px auto 100px', padding: '0 5vw' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
        <a href="#/products" style={{ color: 'var(--primary)', fontWeight: '600' }}>Products</a>
        <span>/</span><span>{product.category}</span>
        <span>/</span><span>{product.subcategory}</span>
        <span>/</span>
        <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{product.name}</span>
      </div>

      <div className="product-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '48px', alignItems: 'start' }}>
        {/* Product Gallery Container */}
        <div>
          <div
            className="card-clean product-gallery"
            style={{
              position: 'relative',
              overflow: 'hidden',
              height: '460px',
              borderRadius: '24px',
              cursor: 'zoom-in',
              background: '#FFFFFF',
              border: '1px solid var(--border)'
            }}
            ref={galleryRef}
            onMouseMove={handleGalleryMouseMove}
            onMouseLeave={() => setZoomOrigin(null)}
            onClick={() => isDimensionChart && setIsChartZoomed(true)}
          >
            <LazyImage
              src={activeView.src}
              alt={product.name}
              objectFit="contain"
              style={{
                width: '100%',
                height: '100%',
                transform: zoomOrigin ? 'scale(2.4)' : 'scale(1)',
                transformOrigin: zoomOrigin ? `${zoomOrigin.x}% ${zoomOrigin.y}%` : 'center',
                transition: 'transform 0.15s ease-out, transform-origin 0.05s linear'
              }}
            />
            <div style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)', color: '#FFF', padding: '6px 12px', borderRadius: '9999px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ZoomIn size={14} />
              <span>{isDimensionChart ? 'Hover to Zoom · Click to enlarge' : 'Hover to Zoom'}</span>
            </div>
          </div>

          {/* Gallery view selector thumbnails */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            {galleryViews.map(view => (
              <button
                key={view.id}
                onClick={() => setActiveView(view)}
                style={{
                  flex: 1,
                  padding: '10px 8px',
                  borderRadius: '12px',
                  border: activeView.id === view.id ? '2px solid var(--primary)' : '1px solid var(--border)',
                  background: activeView.id === view.id ? 'rgba(30, 58, 138, 0.04)' : '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: activeView.id === view.id ? 'var(--primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {view.label}
              </button>
            ))}
          </div>

          {/* Feature Icons Row */}
          <div className="product-feature-icons" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginTop: '24px' }}>
            <div style={{ textAlign: 'center', padding: '16px 8px', background: 'var(--surface-alt)', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <Zap size={20} color="var(--primary)" style={{ margin: '0 auto 6px' }} />
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--secondary)' }}>99.9% Pure</div>
              <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>E-Copper</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px 8px', background: 'var(--surface-alt)', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <ShieldCheck size={20} color="var(--primary)" style={{ margin: '0 auto 6px' }} />
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--secondary)' }}>DIN / BS</div>
              <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Compliant</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px 8px', background: 'var(--surface-alt)', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <Award size={20} color="var(--primary)" style={{ margin: '0 auto 6px' }} />
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--secondary)' }}>33 kV Rating</div>
              <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>High Voltage</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px 8px', background: 'var(--surface-alt)', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <CheckCircle2 size={20} color="var(--primary)" style={{ margin: '0 auto 6px' }} />
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--secondary)' }}>Tin Plated</div>
              <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Electro-Coated</div>
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <span className="eyebrow-badge">{product.category}</span>
            <span className="eyebrow-badge-gold">{product.subcategory}</span>
          </div>

          <h1 className="hero-title" style={{ fontSize: '40px', lineHeight: 1.1 }}>
            {product.name}
          </h1>
          <p className="body-text" style={{ margin: '16px 0 28px' }}>{product.description}</p>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '36px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={onOpenQuote}>
              <span>Request Quote / RFQ</span>
              <ArrowUpRight size={18} />
            </button>
            <a href="#/catalogue" className="btn btn-secondary btn-lg">
              <FileText size={18} />
              <span>Download Spec Sheet</span>
            </a>
          </div>

          <h3 className="sub-title" style={{ marginBottom: '16px', fontSize: '22px' }}>Technical Parameters</h3>
          <table className="spec-table">
            <tbody>
              <tr><th>Category</th><td>{product.category}</td></tr>
              <tr><th>Subcategory</th><td>{product.subcategory}</td></tr>
              {product.material && <tr><th>Raw Material</th><td>{product.material}</td></tr>}
              {product.finish && <tr><th>Plating Finish</th><td>{product.finish}</td></tr>}
              {product.standard && <tr><th>Applicable Standard</th><td>{product.standard}</td></tr>}
              {product.voltage && <tr><th>Voltage Rating</th><td>{product.voltage}</td></tr>}
              {product.tempRange && <tr><th>Operating Temp</th><td>{product.tempRange}</td></tr>}
              {product.measurements && <tr><th>Catalogue Measurements</th><td>{product.measurements}</td></tr>}
              <tr><th>Recommended Application</th><td>{product.applications}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      {isChartZoomed && isDimensionChart && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged dimension chart"
          onClick={() => setIsChartZoomed(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 500, background: 'rgba(15, 23, 42, 0.88)', padding: '4vh 4vw', display: 'grid', placeItems: 'center', cursor: 'zoom-out' }}
        >
          <img
            src={activeView.src}
            alt={`${product.name} enlarged dimension chart`}
            onClick={event => event.stopPropagation()}
            style={{ maxWidth: '92vw', maxHeight: '88vh', objectFit: 'contain', background: '#fff', borderRadius: '12px', cursor: 'default' }}
          />
          <button
            type="button"
            aria-label="Close enlarged dimension chart"
            onClick={() => setIsChartZoomed(false)}
            style={{ position: 'fixed', top: '20px', right: '20px', border: 0, borderRadius: '999px', padding: '10px', color: '#fff', background: 'rgba(255, 255, 255, 0.16)', cursor: 'pointer' }}
          >
            <X size={22} />
          </button>
        </div>
      )}
    </div>
  )
}
