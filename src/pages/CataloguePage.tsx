import { Download } from 'lucide-react'

interface CataloguePageProps {
  onTriggerToast: (msg: string) => void
}

export function CataloguePage({ onTriggerToast }: CataloguePageProps) {
  return (
    <div style={{ maxWidth: '1280px', margin: '40px auto 100px', padding: '0 5vw' }}>
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
        <span className="eyebrow-badge eyebrow-badge-gold">CABLOND CATALOGUE</span>
        <h1 className="hero-title" style={{ marginTop: '12px' }}>
          Your complete technical <em>reference.</em>
        </h1>
        <p className="body-text" style={{ marginTop: '16px' }}>
          Access exact dimensional charts, wire cross-sections, metric sizes, and crimp die references for all Cablond product families.
        </p>
      </div>

      <div className="catalogue-card" style={{ marginBottom: '60px' }}>
        <div>
          <span className="eyebrow-badge eyebrow-badge-gold">2026 / 2027 EDITION</span>
          <h2 className="section-title" style={{ color: '#FFFFFF', marginTop: '12px' }}>
            Download PDF <em>Master Catalogue</em>
          </h2>
          <p style={{ color: '#CBD5E1', fontSize: '16px', margin: '16px 0 28px' }}>
            Includes cable lugs, ferrules, BW/CW/E1W glands, flexible conduits, and compliance charts.
          </p>
          <button
            className="btn btn-accent btn-lg"
            onClick={() => onTriggerToast('Cablond PDF Catalogue download initiated.')}
          >
            <Download size={20} />
            <span>Download Catalogue PDF (8.4 MB)</span>
          </button>
        </div>

        <div className="catalogue-mockup">
          <div>
            <span className="mockup-title">CABLOND MASTER</span>
            <h3 className="mockup-brand" style={{ marginTop: '12px' }}>
              TECHNICAL<br />SPECIFICATIONS
            </h3>
          </div>
          <div>
            <p style={{ fontSize: '11px', color: '#94A3B8' }}>CABLOND PRINT</p>
            <p style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: '700', marginTop: '4px' }}>
              ISSUE 4.0
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
