import { useState } from 'react'
import { Search, ArrowUpRight, ChevronDown, ChevronRight, SlidersHorizontal } from 'lucide-react'
import { navigationTree, products } from '../data/catalog'
import type { Product } from '../types'

interface ProductsPageProps {
  selectedMainCat: string
  setSelectedMainCat: (cat: string) => void
  selectedSubCat: string
  setSelectedSubCat: (sub: string) => void
  searchQuery: string
  setSearchQuery: (q: string) => void
  filteredProducts: Product[]
  onOpenProduct: (p: Product) => void
}

export function ProductsPage({
  selectedMainCat,
  setSelectedMainCat,
  selectedSubCat,
  setSelectedSubCat,
  searchQuery,
  setSearchQuery,
  filteredProducts,
  onOpenProduct
}: ProductsPageProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  return (
    <section className="catalog-section">
      <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 40px' }}>
        <span className="eyebrow-badge">PRODUCT CATALOG NAVIGATION</span>
        <h1 className="section-title" style={{ marginTop: '12px' }}>
          Explore Cablond <em>product tree.</em>
        </h1>
        <p className="body-text" style={{ marginTop: '14px' }}>
          Select a main category or subcategory from the hierarchy below to inspect technical specifications and cable termination hardware.
        </p>
      </div>

      <div className="catalog-layout">
        {/* ── GLASS FROST TREE SIDEBAR ──────────────── */}
        <aside className="nav-tree-sidebar">
          <div className="sidebar-title">
            <span>PRODUCTS TREE</span>
            <SlidersHorizontal size={16} color="var(--primary)" />
          </div>

          <button
            className={`tree-main-btn ${selectedMainCat === 'All' ? 'active' : ''}`}
            onClick={() => { setSelectedMainCat('All'); setSelectedSubCat('All') }}
            style={{ marginBottom: '12px' }}
          >
            <span>All Products ({products.length})</span>
            <ChevronRight size={14} />
          </button>

          {navigationTree.map(catItem => {
            const IconComponent = catItem.icon
            const isMainActive = selectedMainCat === catItem.category
            const isExpanded = expandedCategory === catItem.category
            return (
              <div className="tree-group" key={catItem.category}>
                <button
                  className={`tree-main-btn ${isMainActive ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedMainCat(catItem.category)
                    setSelectedSubCat('All')
                    setExpandedCategory(isExpanded ? null : catItem.category)
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <IconComponent size={15} color="var(--primary)" />
                    {catItem.category}
                  </span>
                  <ChevronDown
                    size={14}
                    style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                  />
                </button>

                {isExpanded && (
                  <ul className="tree-sub-list">
                    {catItem.subcategories.map(sub => {
                      const isSubActive = selectedMainCat === catItem.category && selectedSubCat === sub
                      return (
                        <li key={sub}>
                          <button
                            className={`tree-sub-btn ${isSubActive ? 'active' : ''}`}
                            onClick={() => { setSelectedMainCat(catItem.category); setSelectedSubCat(sub) }}
                          >
                            {sub}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )
          })}
        </aside>

        {/* ── PRODUCT GRID ──────────────────────────── */}
        <div>
          {/* Filter breadcrumb + search row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="eyebrow-badge-gold">{selectedMainCat}</span>
              {selectedSubCat !== 'All' && (
                <>
                  <span style={{ color: 'var(--text-secondary)' }}>/</span>
                  <span className="eyebrow-badge">{selectedSubCat}</span>
                </>
              )}
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                ({filteredProducts.length} Results)
              </span>
            </div>
            <div className="catalog-search-box">
              <Search className="catalog-search-icon" size={16} />
              <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search specs or standard..."
              />
            </div>
          </div>

          {/* Cards */}
          <div className="products-grid">
            {filteredProducts.map(p => (
              <div className="card-clean product-card" key={p.slug}>
                <div className="product-card-media">
                  <img src={p.image} alt={`${p.name} product illustration and dimensions`} style={{ objectFit: 'contain', padding: '12px', background: '#fff' }} />
                  <span className="product-category-tag">{p.category}</span>
                  <span className="product-sub-tag">{p.subcategory}</span>
                </div>
                <div className="product-card-body">
                  <h3 className="product-title">{p.name}</h3>
                  <p className="product-description">{p.description}</p>
                  <div className="product-specs-pills">
                    {p.standard && <span className="spec-pill">{p.standard}</span>}
                    {p.material && <span className="spec-pill">{p.material.slice(0, 20)}...</span>}
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

            {filteredProducts.length === 0 && (
              <div style={{ gridColumn: '1 / -1', padding: '60px 20px', background: 'var(--surface)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                <p className="body-text" style={{ textAlign: 'center' }}>
                  No product entries found matching your selected filters.
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  style={{ margin: '20px auto 0', display: 'block' }}
                  onClick={() => { setSelectedMainCat('All'); setSelectedSubCat('All'); setSearchQuery('') }}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
