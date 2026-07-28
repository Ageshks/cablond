import { useState } from 'react'
import { ArrowUpRight, FileText, ShieldCheck, Zap, Award, CheckCircle2, ZoomIn } from 'lucide-react'
import { products } from '../data/catalog'
import { LazyImage } from '../components/LazyImage'

interface ProductDetailPageProps {
  slug: string
  onOpenQuote: () => void
}

export function ProductDetailPage({ slug, onOpenQuote }: ProductDetailPageProps) {
  const product = products.find(p => p.slug === slug) ?? products[0]

  // Gallery tabs (Main Product photo, Technical drawing, Application photo, Dimensions diagram)
  const galleryViews = [
    { id: 'main', label: 'Product Photo', src: product.image },
    { id: 'drawing', label: 'Technical Drawing', src: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80' },
    { id: 'application', label: 'Industrial Application', src: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80' },
    { id: 'dimensions', label: 'Dimensions & Crimp Die', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80' }
  ]

  const [activeView, setActiveView] = useState(galleryViews[0])
  const [isZoomed, setIsZoomed] = useState(false)

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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '48px', alignItems: 'start' }}>
        {/* Product Gallery Container */}
        <div>
          <div
            className="card-clean"
            style={{
              position: 'relative',
              overflow: 'hidden',
              height: '460px',
              borderRadius: '24px',
              cursor: 'zoom-in',
              background: '#FFFFFF',
              border: '1px solid var(--border)'
            }}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <LazyImage
              src={activeView.src}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isZoomed ? 'scale(1.25)' : 'scale(1)',
                transition: 'transform 0.4s ease'
              }}
            />
            <div style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)', color: '#FFF', padding: '6px 12px', borderRadius: '9999px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ZoomIn size={14} />
              <span>Hover to Zoom</span>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginTop: '24px' }}>
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
              <tr><th>Recommended Application</th><td>{product.applications}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
