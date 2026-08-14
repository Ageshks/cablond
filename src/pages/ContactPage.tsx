import React, { useState } from 'react'
import { Mail, Phone, CheckCircle2, Send, MapPin, ShieldCheck, Clock } from 'lucide-react'
import { products } from '../data/catalog'
import { LazyImage } from '../components/LazyImage'

interface ContactPageProps {
  onTriggerToast: (msg: string) => void
}

const facilityPhotos = [
  { title: 'Global Corporate Office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { title: 'Executive Meeting Suite', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80' },
  { title: 'Factory Entrance & Logistics Hub', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80' },
  { title: 'Engineering & Reception Suite', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80' }
]

export function ContactPage({ onTriggerToast }: ContactPageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    onTriggerToast('Quote Request Submitted! Our export engineering team will respond within 24 hours.')
  }

  return (
    <div style={{ maxWidth: '1280px', margin: '40px auto 100px', padding: '0 5vw' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
        <span className="eyebrow-badge eyebrow-badge-gold">TALK TO OUR ENGINEERING TEAM</span>
        <h1 className="hero-title" style={{ marginTop: '12px' }}>
          Connect with Cablond <em>Global Export.</em>
        </h1>
        <p className="body-text" style={{ marginTop: '16px' }}>
          Whether you need custom lug dimensions, RFQ pricing for overseas tenders, or technical specification sheets, our team responds within 24 hours.
        </p>
      </div>

      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '48px', alignItems: 'start', marginBottom: '80px' }}>
        {/* Left: Info panel */}
        <div>
          <div className="card-clean" style={{ padding: '36px', background: 'var(--secondary)', color: '#FFFFFF', borderRadius: '24px', marginBottom: '24px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent)', textTransform: 'uppercase' }}>
              HEADQUARTERS &amp; EXPORT DIVISION
            </span>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginTop: '8px', marginBottom: '16px' }}>
              Cablond Terminations
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.6', marginBottom: '28px' }}>
              Precision Non-Ferrous Metallurgical Manufacturing &amp; Industrial Cable Accessories.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '15px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <MapPin size={20} color="var(--accent)" />
                <span>Cablond Industrial Zone, Precision Highway</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={20} color="var(--accent)" />
                <span>export@cablond.com</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={20} color="var(--accent)" />
                <span>+91 (Direct Export Desk)</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Clock size={20} color="var(--accent)" />
                <span>24/7 RFQ Turnaround for Overseas Projects</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {facilityPhotos.slice(0, 2).map((pic, i) => (
              <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', height: '150px', border: '1px solid var(--border)' }}>
                <LazyImage src={pic.image} alt={pic.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="card-clean" style={{ padding: '36px', background: '#FFFFFF', borderRadius: '24px', boxShadow: '0 15px 35px rgba(15,23,42,0.06)', border: '1px solid var(--border)' }}>
          {formSubmitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <CheckCircle2 size={56} color="#10B981" style={{ margin: '0 auto 20px' }} />
              <h2 className="sub-title" style={{ color: 'var(--secondary)' }}>Enquiry Received</h2>
              <p className="body-text" style={{ fontSize: '16px', marginTop: '12px' }}>
                Thank you for contacting Cablond. An export specialist will get back to you shortly.
              </p>
              <button
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '28px' }}
                onClick={() => setFormSubmitted(false)}
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <ShieldCheck size={20} color="var(--primary)" />
                <span className="eyebrow-badge-gold">OFFICIAL RFQ FORM</span>
              </div>
              <h2 className="sub-title" style={{ marginBottom: '24px', fontSize: '28px' }}>Request For Quotation</h2>

              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input required className="form-input" placeholder="e.g. Alexander Vance" />
              </div>
              <div className="form-group">
                <label className="form-label">Company / EPC Contractor Name</label>
                <input className="form-input" placeholder="e.g. Apex Electrical Engineering Ltd." />
              </div>
              <div className="form-group">
                <label className="form-label">Work Email Address *</label>
                <input required type="email" className="form-input" placeholder="name@company.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Product Family of Interest *</label>
                <select required className="form-select" defaultValue="">
                  <option value="" disabled>Select a product category</option>
                  {products.map(p => (
                    <option key={p.slug} value={p.slug}>
                      {p.name} ({p.category} → {p.subcategory})
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Project Details / Sizes / Target Destination</label>
                <textarea
                  className="form-textarea"
                  placeholder="Specify conductor sizes, tin plating requirements, or target delivery destination..."
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '10px' }}>
                <span>Submit RFQ Enquiry</span>
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Facility Visuals & Interactive Map Section */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="eyebrow-badge">CORPORATE INFRASTRUCTURE</span>
          <h2 className="sub-title" style={{ fontSize: '28px', marginTop: '8px' }}>
            Our Offices &amp; Factory Entrance
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {facilityPhotos.map((fac, idx) => (
            <div key={idx} className="card-clean" style={{ borderRadius: '18px', overflow: 'hidden', background: '#FFF' }}>
              <div style={{ height: '180px', overflow: 'hidden' }}>
                <LazyImage src={fac.image} alt={fac.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '16px', fontSize: '14px', fontWeight: 700, color: 'var(--secondary)' }}>
                {fac.title}
              </div>
            </div>
          ))}
        </div>

        {/* Google Map Container */}
        <div style={{ borderRadius: '24px', overflow: 'hidden', height: '360px', boxShadow: '0 15px 35px rgba(15,23,42,0.08)', border: '1px solid var(--border)' }}>
          <iframe
            title="Cablond Headquarters Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7558315181745!2d72.877426!3d19.076090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sIndustrial%20Area!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
            allowFullScreen={false}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
