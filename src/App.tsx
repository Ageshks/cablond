/**
 * App.tsx – Lean application shell.
 *
 * Responsibilities:
 *  - Hash-based routing
 *  - Sticky frosted-glass navbar + mega-menu
 *  - Global search modal (Cmd+K)
 *  - Product quick-spec modal
 *  - Toast notifications
 *  - Corporate footer
 *
 * All page content lives in src/pages/*.tsx
 * All data lives in src/data/catalog.ts
 */

import { useEffect, useMemo, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  Search,
  X,
  ChevronDown,

  SlidersHorizontal,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Globe,
  Mail,
  Phone
} from 'lucide-react'

import { navigationTree, products } from './data/catalog'
import type { Product } from './types'

// Pages
import { HomePage }         from './pages/HomePage'
import { ProductsPage }     from './pages/ProductsPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { AboutPage }        from './pages/AboutPage'
import { CataloguePage }    from './pages/CataloguePage'
import { ContactPage }      from './pages/ContactPage'

import './App.css'

export function App() {
  const [currentPath, setCurrentPath]         = useState(location.hash.slice(1) || '/')
  const [selectedMainCat, setSelectedMainCat] = useState<string>('All')
  const [selectedSubCat, setSelectedSubCat]   = useState<string>('All')
  const [searchQuery, setSearchQuery]         = useState('')
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [activeRegion, setActiveRegion]       = useState('Gulf')
  const [toastMessage, setToastMessage]       = useState<string | null>(null)
  const [isScrolled, setIsScrolled]           = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen]   = useState(false)
  const [megaMenuOpen, setMegaMenuOpen]       = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  // ── Routing & scroll listener ────────────────────────
  useEffect(() => {
    const onHashChange = () => {
      setCurrentPath(location.hash.slice(1) || '/')
      setMobileMenuOpen(false)
      setMegaMenuOpen(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const onScroll = () => setIsScrolled(window.scrollY > 40)

    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // ── Keyboard shortcuts ───────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchModalOpen(prev => !prev)
      }
      if (e.key === 'Escape') {
        setSearchModalOpen(false)
        setSelectedProduct(null)
        setMegaMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // ── Helpers ──────────────────────────────────────────
  const triggerToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 4000)
  }

  const navigateTo = (path: string) => { window.location.hash = path }

  const filterBySubcategory = (mainCat: string, subCat: string) => {
    setSelectedMainCat(mainCat)
    setSelectedSubCat(subCat)
    setMegaMenuOpen(false)
    navigateTo('/products')
  }

  // ── Filtered products (shared across search + products page) ──
  const filteredProducts = useMemo(() => products.filter(p => {
    const matchesMain  = selectedMainCat === 'All' || p.category    === selectedMainCat
    const matchesSub   = selectedSubCat  === 'All' || p.subcategory === selectedSubCat
    const q = searchQuery.toLowerCase()
    const matchesQuery = !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q) ||
      (p.standard?.toLowerCase().includes(q) ?? false)
    return matchesMain && matchesSub && matchesQuery
  }), [selectedMainCat, selectedSubCat, searchQuery])

  return (
    <div className="app-container">
      {/* Background ambient layers */}
      <div className="ambient-bg" />
      <div className="subtle-grid" />

      {/* ── Sticky frosted-glass navbar ──────────────────── */}
      <header className="navbar-wrapper">
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <a href="#/" className="brand">
            <img src="/logo.png" alt="Cablond Brand Logo" />
            <div className="brand-text">
              <span className="brand-title">CABLOND</span>
              <span className="brand-subtitle">BY GROUP FNT</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="nav-menu">
            <a href="#/"       className={`nav-link ${currentPath === '/'       ? 'active' : ''}`}>Home</a>
            <a href="#/about"  className={`nav-link ${currentPath === '/about'  ? 'active' : ''}`}>About</a>

            {/* Products with mega-menu */}
            <div
              className="nav-item-wrapper"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <a
                href="#/products"
                className={`nav-link ${currentPath.startsWith('/products') ? 'active' : ''}`}
              >
                <span>Products</span>
                <ChevronDown
                  size={14}
                  style={{ transform: megaMenuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                />
              </a>

              {/* Frosted glass mega-menu — Amazon style */}
              <AnimatePresence>
                {megaMenuOpen && (
                  <motion.div
                    className="mega-menu"
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {/* Left column — category list */}
                    <div className="mega-cat-list">
                      {navigationTree.map(catItem => {
                        const IconComp = catItem.icon
                        const isHovered = hoveredCategory === catItem.category
                        return (
                          <a
                            key={catItem.category}
                            href="#/products"
                            className={`mega-cat-item ${isHovered ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredCategory(catItem.category)}
                            onClick={e => { e.preventDefault(); setSelectedMainCat(catItem.category); setSelectedSubCat('All'); setMegaMenuOpen(false); navigateTo('/products') }}
                          >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <IconComp size={16} color="var(--primary)" />
                              <span>{catItem.category}</span>
                            </span>
                            <ChevronRight size={14} className="mega-cat-arrow" />
                          </a>
                        )
                      })}
                    </div>

                    {/* Right panel — subcategories for hovered category */}
                    <div className="mega-sub-panel">
                      {navigationTree.map(catItem => {
                        const isHovered = hoveredCategory === catItem.category
                        if (!isHovered) return null
                        return (
                          <div key={catItem.category} className="mega-sub-content">
                            <div className="mega-sub-header">
                              <span>All {catItem.category}</span>
                              <a
                                href="#/products"
                                className="mega-view-all"
                                onClick={e => { e.preventDefault(); setSelectedMainCat(catItem.category); setSelectedSubCat('All'); setMegaMenuOpen(false); navigateTo('/products') }}
                              >
                                View All →
                              </a>
                            </div>
                            <div className="mega-sub-grid">
                              {catItem.subcategories.map(sub => (
                                <a
                                  key={sub}
                                  href="#/products"
                                  className="mega-sub-link"
                                  onClick={e => { e.preventDefault(); filterBySubcategory(catItem.category, sub) }}
                                >
                                  {sub}
                                  <ArrowUpRight size={11} opacity={0.5} />
                                </a>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                      {!hoveredCategory && (
                        <div className="mega-sub-placeholder">
                          <p>Hover over a category to browse subcategories</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#/catalogue" className={`nav-link ${currentPath === '/catalogue' ? 'active' : ''}`}>Catalogue</a>
            <a href="#/contact"   className={`nav-link ${currentPath === '/contact'   ? 'active' : ''}`}>Contact</a>
          </div>

          <div className="nav-actions">
            <button className="search-trigger-btn" onClick={() => setSearchModalOpen(true)} aria-label="Search Products">
              <Search size={15} />
              <span>Search</span>
              <span className="search-key">⌘K</span>
            </button>
            <button
              className="menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <SlidersHorizontal size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay">
            {[['#/', 'Home'], ['#/about', 'About'], ['#/products', 'Products Catalog'], ['#/catalogue', 'Catalogue'], ['#/contact', 'Contact & RFQ']].map(([href, label]) => (
              <a key={href} href={href} className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── Page router ──────────────────────────────────── */}
      <main>
        {currentPath === '/' && (
          <HomePage
            onOpenProduct={setSelectedProduct}
            activeRegion={activeRegion}
            setActiveRegion={setActiveRegion}
          />
        )}

        {currentPath === '/about' && <AboutPage />}

        {currentPath === '/products' && (
          <ProductsPage
            selectedMainCat={selectedMainCat}
            setSelectedMainCat={setSelectedMainCat}
            selectedSubCat={selectedSubCat}
            setSelectedSubCat={setSelectedSubCat}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredProducts={filteredProducts}
            onOpenProduct={setSelectedProduct}
          />
        )}

        {currentPath.startsWith('/products/') && (
          <ProductDetailPage
            slug={currentPath.split('/')[2]}
            onOpenQuote={() => navigateTo('/contact')}
          />
        )}

        {currentPath === '/catalogue' && <CataloguePage onTriggerToast={triggerToast} />}
        {currentPath === '/contact'   && <ContactPage   onTriggerToast={triggerToast} />}
      </main>

      {/* ── Global search modal (Cmd+K) ──────────────────── */}
      <AnimatePresence>
        {searchModalOpen && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSearchModalOpen(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.95, y: -20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: -20 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="modal-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexGrow: 1 }}>
                  <Search size={20} color="#1E3A8A" />
                  <input
                    autoFocus
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Type product name, subcategory (e.g. DIN Series, BW, Ferrules)..."
                    style={{ width: '100%', border: 'none', outline: 'none', fontSize: '18px', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', background: 'transparent' }}
                  />
                </div>
                <button className="modal-close-btn" onClick={() => setSearchModalOpen(false)}>
                  <X size={18} />
                </button>
              </div>

              <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                <p className="eyebrow-badge" style={{ marginBottom: '16px' }}>
                  SEARCH RESULTS ({filteredProducts.length})
                </p>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {filteredProducts.map(p => (
                    <div
                      key={p.slug}
                      style={{ padding: '16px 20px', borderRadius: '16px', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', transition: 'all 0.2s' }}
                      onClick={() => { setSearchModalOpen(false); setSelectedProduct(p) }}
                    >
                      <div>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <span style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase' }}>{p.category}</span>
                          <span style={{ fontSize: '10px', color: '#B45309', background: 'rgba(245,158,11,0.15)', padding: '1px 6px', borderRadius: '4px', fontWeight: '700' }}>{p.subcategory}</span>
                        </div>
                        <h4 style={{ fontSize: '17px', color: 'var(--secondary)', margin: '4px 0 2px' }}>{p.name}</h4>
                        <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{p.material ?? p.standard}</p>
                      </div>
                      <ChevronRight size={18} color="var(--primary)" />
                    </div>
                  ))}
                  {filteredProducts.length === 0 && (
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>
                      No matching products found for "{searchQuery}".
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Product quick-spec modal ─────────────────────── */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.94, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span className="eyebrow-badge">{selectedProduct.category}</span>
                    <span className="eyebrow-badge-gold">{selectedProduct.subcategory}</span>
                  </div>
                  <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary)', marginTop: '8px' }}>
                    {selectedProduct.name}
                  </h2>
                </div>
                <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '28px', marginBottom: '28px' }}>
                  <div style={{ borderRadius: '20px', overflow: 'hidden', height: '230px', border: '1px solid var(--border)' }}>
                    <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--secondary)', marginBottom: '8px' }}>
                      Overview &amp; Application
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                      {selectedProduct.description}
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--text-primary)', background: 'var(--bg-alt)', padding: '12px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                      <strong>Target Application:</strong> {selectedProduct.applications}
                    </p>
                  </div>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--secondary)', marginBottom: '12px' }}>
                  Technical Specifications
                </h3>
                <table className="spec-table">
                  <tbody>
                    <tr><th>Category / Subcategory</th><td>{selectedProduct.category} → {selectedProduct.subcategory}</td></tr>
                    {selectedProduct.material  && <tr><th>Material Construction</th><td>{selectedProduct.material}</td></tr>}
                    {selectedProduct.finish    && <tr><th>Plating &amp; Finish</th><td>{selectedProduct.finish}</td></tr>}
                    {selectedProduct.standard  && <tr><th>Applicable Standard</th><td>{selectedProduct.standard}</td></tr>}
                    {selectedProduct.voltage   && <tr><th>Voltage Rating</th><td>{selectedProduct.voltage}</td></tr>}
                    {selectedProduct.tempRange && <tr><th>Operating Temp</th><td>{selectedProduct.tempRange}</td></tr>}
                  </tbody>
                </table>

                <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => { setSelectedProduct(null); navigateTo(`/products/${selectedProduct.slug}`) }}
                  >
                    <span>Full Specification Page</span>
                    <ExternalLink size={14} />
                  </button>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => { setSelectedProduct(null); navigateTo('/contact') }}
                  >
                    <span>Request Spec Quote</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toast notification ───────────────────────────── */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="toast-notification"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }}
          >
            <CheckCircle2 size={20} color="#10B981" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Corporate footer ─────────────────────────────── */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <img src="/logo.png" alt="Cablond Logo" />
              <div className="brand-text">
                <span className="brand-title">CABLOND</span>
                <span className="brand-subtitle">BY GROUP FNT</span>
              </div>
            </div>
            <p>
              Cablond is a premier industrial brand by Group FNT, manufacturing precision cable lugs, cable glands,
              connectors, and flexible conduits for global export.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Navigation Index</h4>
            <ul className="footer-links">
              <li><a href="#/products">Cable Lugs</a></li>
              <li><a href="#/products">Connectors &amp; Ferrules</a></li>
              <li><a href="#/products">BW &amp; CW Cable Glands</a></li>
              <li><a href="#/products">E1W Double Compression</a></li>
              <li><a href="#/products">Flexible Conduits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Standards &amp; Quality</h4>
            <ul className="footer-links">
              <li><a href="#/about">BS 1977 (Copper Terminals)</a></li>
              <li><a href="#/about">DIN 46235 (Compression)</a></li>
              <li><a href="#/about">BS 6121 (Gland Armor)</a></li>
              <li><a href="#/about">BS EN 61386 (Conduits)</a></li>
              <li><a href="#/contact">ISO 9001:2015 Facility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Global Contact</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><Mail size={14} color="#F59E0B" /> export@cablond.com</li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><Phone size={14} color="#F59E0B" /> +91 (Group FNT Direct)</li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><Globe size={14} color="#F59E0B" /> Exporting to 19+ Countries</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Cablond (Group FNT). All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#/">Privacy Policy</a>
            <a href="#/">Terms of Supply</a>
            <a href="#/">ISO 9001 Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
