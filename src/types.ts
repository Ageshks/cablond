// Shared types for Cablond product catalog

export type MainCategory =
  | 'Cable Lugs'
  | 'Connectors'
  | 'Cable Glands'
  | 'Flexible Conduits'

export type Product = {
  slug: string
  name: string
  category: MainCategory
  subcategory: string
  description: string
  applications: string
  material?: string
  finish?: string
  standard?: string
  voltage?: string
  tempRange?: string
  image: string
}

export type RegionalMarket = {
  id: string
  name: string
  countries: string[]
  certifications: string[]
  accentColor: string
}
