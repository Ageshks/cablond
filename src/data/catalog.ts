import { Layers, Box, Link as LinkIcon, Disc } from 'lucide-react'
import type { MainCategory, Product, RegionalMarket } from '../types'

// -------------------------------------------------------
// NAVIGATION TREE  (matches user-specified hierarchy)
// -------------------------------------------------------
export const navigationTree = [
  {
    category: 'Cable Lugs' as MainCategory,
    icon: Layers,
    subcategories: [
      'Copper Cable Lugs',
      'N Series',
      'DIN Series',
      'Long Barrel',
      'Wire Pin',
      'Bi-Metallic',
      'Aluminium',
      'Mechanical',
      'Pre-Insulated',
      'Split Bolt',
      'C-Type Connectors'
    ]
  },
  {
    category: 'Connectors' as MainCategory,
    icon: LinkIcon,
    subcategories: ['Ferrules', 'Screw Connectors']
  },
  {
    category: 'Cable Glands' as MainCategory,
    icon: Box,
    subcategories: [
      'BW',
      'CW',
      'A1/A2',
      'Single Compression',
      'Double Compression',
      'ALCO',
      'Gland Kits'
    ]
  },
  {
    category: 'Flexible Conduits' as MainCategory,
    icon: Disc,
    subcategories: ['Galvanised Conduits', 'Accessories']
  }
]

// -------------------------------------------------------
// PRODUCTS DATA
// -------------------------------------------------------
export const products: Product[] = [
  // CABLE LUGS
  {
    slug: 'copper-cable-lugs',
    name: 'Copper Cable Lugs',
    category: 'Cable Lugs',
    subcategory: 'Copper Cable Lugs',
    description:
      'High-conductivity E-Copper crimping terminals designed for heavy-duty electrical connections.',
    applications:
      'Low to medium voltage electrical power distribution panels, transformers, and industrial switchgears.',
    material: '99.9% Electrolytic Grade Copper (E-Copper)',
    finish: 'Electro-Tin Plated (with/without inspection hole)',
    standard: 'BS 1977 / IEC 61238',
    voltage: 'Up to 33 kV',
    tempRange: '-55°C to +155°C',
    image:
      'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'n-series-terminals',
    name: 'Copper Compression Terminals — N Series',
    category: 'Cable Lugs',
    subcategory: 'N Series',
    description:
      'Heavy-duty N Series compression terminals engineered for standard metric conductor sizes.',
    applications:
      'Substation cabling, marine electrical installations, and heavy machinery power feeds.',
    material: 'E-Copper High Thermal Conductivity',
    finish: 'Tin Plated with Inspection Dimple',
    standard: 'BS 1977 Spec',
    voltage: 'Up to 33 kV',
    tempRange: '-50°C to +150°C',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'din-series-terminals',
    name: 'Copper Compression Terminals — DIN Series',
    category: 'Cable Lugs',
    subcategory: 'DIN Series',
    description:
      'DIN 46235 standardized compression terminals with precise crimp mark rings.',
    applications:
      'European standard switchboards, utility sub-stations, and railway electrification.',
    material: 'Electrolytic Copper Tube',
    finish: 'Heavy Duty Electro-Tin Plated',
    standard: 'DIN 46235 Certified',
    voltage: 'Up to 36 kV',
    tempRange: '-55°C to +155°C',
    image:
      'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'long-barrel-terminals',
    name: 'Long Barrel Copper Lugs',
    category: 'Cable Lugs',
    subcategory: 'Long Barrel',
    description:
      'Extended barrel design allowing double crimping for high-vibration applications.',
    applications:
      'Mining operations, renewable energy farms, and heavy industrial plant motors.',
    material: '99.9% Pure E-Copper Tube',
    finish: 'Corrosion Resistant Tin Plated',
    standard: 'BS 1977 / ANSI/UL',
    voltage: 'Up to 35 kV',
    tempRange: '-50°C to +160°C',
    image:
      'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'wire-pin-terminals',
    name: 'Wire Pin Terminals',
    category: 'Cable Lugs',
    subcategory: 'Wire Pin',
    description:
      'Precision solid wire pin terminals engineered for narrow terminal block entries.',
    applications:
      'Control panel wiring, circuit breaker connections, and instrumentation relays.',
    material: 'E-Copper',
    finish: 'Bright Electro-Tin Plated',
    standard: 'BS 1977',
    voltage: 'Up to 1 kV',
    tempRange: '-40°C to +120°C',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'bi-metallic-lugs',
    name: 'Bi-Metallic Compression Lugs',
    category: 'Cable Lugs',
    subcategory: 'Bi-Metallic',
    description:
      'Friction-welded aluminum barrel to copper palm lugs preventing galvanic corrosion.',
    applications:
      'Connecting aluminum cable conductors to copper busbars in switchgear.',
    material: '99.5% Pure Aluminum (Barrel) + E-Copper (Palm)',
    finish: 'Friction Welded & Capped Compound Filled',
    standard: 'IEC 61238-1-3',
    voltage: 'Up to 36 kV',
    tempRange: '-40°C to +130°C',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'aluminium-cable-terminals',
    name: 'Aluminium Cable Terminals',
    category: 'Cable Lugs',
    subcategory: 'Aluminium',
    description:
      'Electrolytic aluminum cable terminals supplied with oxide-inhibiting barrel compound.',
    applications:
      'Aluminum power feeder cable terminations in overhead lines and distribution sub-stations.',
    material: 'Electrolytic Grade Aluminum 99.5%',
    finish: 'Bright or Electro-Tin Plated',
    standard: 'IS 8309 / IEC Standard',
    voltage: 'Up to 36 kV',
    tempRange: '-40°C to +130°C',
    image:
      'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'mechanical-cable-lugs',
    name: 'Mechanical Cable Lugs',
    category: 'Cable Lugs',
    subcategory: 'Mechanical',
    description:
      'Shear-head screw mechanical lugs eliminating the need for specialized crimping tools.',
    applications:
      'Temporary power lines, field repairs, and multi-conductor cable terminations.',
    material: 'High Strength Aluminum Alloy / EC Copper',
    finish: 'Electro-Tin Plated',
    standard: 'IEC 61238-1 Class A',
    voltage: 'Up to 42 kV',
    tempRange: '-30°C to +125°C',
    image:
      'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'pre-insulated-terminals',
    name: 'Pre-Insulated Terminals',
    category: 'Cable Lugs',
    subcategory: 'Pre-Insulated',
    description:
      'Ring, fork, and pin type pre-insulated terminals with color-coded PVC sleeve insulation.',
    applications:
      'Low voltage control panels, automotive wiring, and industrial automation assemblies.',
    material: 'High Conductivity Copper + Rigid PVC Insulation',
    finish: 'Tin Plated with Funnel Entry',
    standard: 'DIN 46237 / UL 486A',
    voltage: 'Up to 600V',
    tempRange: '-20°C to +75°C',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'split-bolt-connectors',
    name: 'Split Bolt Connectors',
    category: 'Cable Lugs',
    subcategory: 'Split Bolt',
    description:
      'High strength split bolt connectors for clamping main conductors and earthing taps.',
    applications:
      'Earthing grids, lightning protection down-conductors, and power cable taps.',
    material: 'Extruded Forged Brass / EC Grade Copper',
    finish: 'Tin Plated or Untinned Natural Brass',
    standard: 'BS 2874',
    voltage: 'Up to 1 kV',
    tempRange: '-40°C to +150°C',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'c-type-connectors',
    name: 'C-Type Connectors',
    category: 'Cable Lugs',
    subcategory: 'C-Type Connectors',
    description:
      'C-shaped copper compression taps for tapping continuous un-cut main power conductors.',
    applications:
      'Grid grounding networks, continuous cable taps, and substation earth mats.',
    material: 'Heavy Section Electrolytic Copper',
    finish: 'Electro-Tin Plated',
    standard: 'BS 2874 / IEEE 837',
    voltage: 'Up to 33 kV',
    tempRange: '-50°C to +150°C',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80'
  },

  // CONNECTORS
  {
    slug: 'ferrules-in-line',
    name: 'In-Line Copper Ferrules',
    category: 'Connectors',
    subcategory: 'Ferrules',
    description:
      'Precision long-barrel copper ferrules for seamless conductor splicing and butt connections.',
    applications:
      'Underground cable jointing, overhead line splicing, and motor terminal wiring.',
    material: 'E-Copper Seamless Tube',
    finish: 'Bright Electro-Tin Plated',
    standard: 'BS 1977 / DIN 46267',
    voltage: 'Up to 36 kV',
    tempRange: '-40°C to +150°C',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'screw-connectors',
    name: 'Heavy Brass Screw Connectors',
    category: 'Connectors',
    subcategory: 'Screw Connectors',
    description:
      'Forged brass screw connectors with zinc-passivated high-tensile steel clamping screws.',
    applications:
      'Distribution boxes, earthing grids, and mechanical cable terminations.',
    material: 'High Tensile Extruded Brass (CuZn39Pb3)',
    finish: 'Electro-Tin Plated or Natural Brass',
    standard: 'BS 2874',
    voltage: 'Up to 1 kV',
    tempRange: '-30°C to +120°C',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80'
  },

  // CABLE GLANDS
  {
    slug: 'bw-brass-glands',
    name: 'BW Brass Cable Glands',
    category: 'Cable Glands',
    subcategory: 'BW',
    description:
      'Two-part armor lock design brass glands for inner cable armor anchoring in dry indoor areas.',
    applications:
      'Steel Wire Armoured (SWA) cable terminations in commercial and factory switchrooms.',
    material: 'High Grade Extruded Brass (CZ121)',
    finish: 'Natural Brass or Electroless Nickel Plated',
    standard: 'BS 6121 Part 1 / EN 62444',
    voltage: 'Up to 1 kV',
    tempRange: '-20°C to +100°C',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'cw-brass-glands',
    name: 'CW Brass Cable Glands',
    category: 'Cable Glands',
    subcategory: 'CW',
    description:
      'Three-part armor lock weather-proof brass glands with outer elastomeric seal.',
    applications:
      'Outdoor steel wire armour (SWA) cable installations exposed to rain and moisture.',
    material: 'Brass CZ121 / Nickel Plated Brass',
    finish: 'Weatherproof Seal (IP66 Rated)',
    standard: 'BS 6121 Part 1',
    voltage: 'Up to 1 kV',
    tempRange: '-30°C to +120°C',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'a1a2-brass-glands',
    name: 'A1/A2 Unarmoured Cable Glands',
    category: 'Cable Glands',
    subcategory: 'A1/A2',
    description:
      'Single displacement seal cable glands designed for unarmoured rubber or PVC flexible cables.',
    applications:
      'Control panel wiring, industrial machinery motor feeds, and generator connections.',
    material: 'Brass CZ121',
    finish: 'Nickel Plated or Plain Brass',
    standard: 'BS 6121 Part 1',
    voltage: 'Up to 1 kV',
    tempRange: '-20°C to +100°C',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'single-compression-glands',
    name: 'Single Compression Cable Glands',
    category: 'Cable Glands',
    subcategory: 'Single Compression',
    description:
      'Weatherproof single displacement compression glands for light armoured and unarmoured cables.',
    applications: 'General industrial plant installations and distribution boxes.',
    material: 'Brass CZ121',
    finish: 'Nickel Plated IP65',
    standard: 'BS 6121 Part 1',
    voltage: 'Up to 1 kV',
    tempRange: '-20°C to +100°C',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'e1w-double-compression-glands',
    name: 'Double Compression Glands (E1W)',
    category: 'Cable Glands',
    subcategory: 'Double Compression',
    description:
      'Flameproof double compression gland securing both inner sheath armor and outer jacket seal.',
    applications:
      'Petrochemical refineries, hazardous industrial plant areas, and offshore oil platforms.',
    material: 'Heavy Brass / Stainless Steel 316',
    finish: 'Nickel Plated IP67 Waterproof',
    standard: 'BS 6121 / IECEx Compatible',
    voltage: 'Up to 11 kV',
    tempRange: '-40°C to +140°C',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'alco-glands',
    name: 'ALCO Brass Cable Glands',
    category: 'Cable Glands',
    subcategory: 'ALCO',
    description:
      'Precision ALCO design brass glands engineered for secure entry of steel wire armoured power cables.',
    applications:
      'Power sub-stations, transformer enclosures, and factory power grids.',
    material: 'High Tensile Brass',
    finish: 'Nickel Plated or Natural Brass',
    standard: 'BS 6121 Standard',
    voltage: 'Up to 3.3 kV',
    tempRange: '-25°C to +110°C',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'cable-gland-kits',
    name: 'Complete Gland Installation Kits',
    category: 'Cable Glands',
    subcategory: 'Gland Kits',
    description:
      'Complete turnkey kit containing brass gland, brass earth tag, PVC shroud, and locknut.',
    applications: 'One-stop installation for electrical contractors.',
    material: 'Brass Gland + High Density PVC Shroud',
    finish: 'Complete Assembly Kit',
    standard: 'BS 6121 Compliance',
    voltage: 'Up to 1 kV',
    tempRange: '-30°C to +110°C',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=80'
  },

  // FLEXIBLE CONDUITS
  {
    slug: 'galvanised-flexible-conduits',
    name: 'Galvanised Flexible Conduits',
    category: 'Flexible Conduits',
    subcategory: 'Galvanised Conduits',
    description:
      'Spiral wound galvanised steel flexible conduit with PVC protective coating for mechanical defense.',
    applications:
      'Protecting wiring on industrial robot arms, machinery conduits, and railway cars.',
    material: 'Hot-Dip Galvanised Steel with Smooth PVC Sheath',
    finish: 'Black or Grey Weatherproof Sheath',
    standard: 'BS EN 61386',
    voltage: 'N/A',
    tempRange: '-25°C to +105°C',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1100&q=80'
  },
  {
    slug: 'conduit-accessories',
    name: 'Flexible Conduit Accessories',
    category: 'Flexible Conduits',
    subcategory: 'Accessories',
    description:
      'Nickel-plated brass and zinc connectors, conduit couplers, locknuts, and mounting clamps.',
    applications:
      'Securing flexible conduits to switchboards, control boxes, and machine enclosures.',
    material: 'Nickel Plated Brass / Die Cast Zinc',
    finish: 'IP66 Weatherproof Seal',
    standard: 'BS EN 61386 Accessories',
    voltage: 'N/A',
    tempRange: '-30°C to +120°C',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1100&q=80'
  }
]

// -------------------------------------------------------
// REGIONAL MARKETS DATA
// -------------------------------------------------------
export const regionalMarkets: RegionalMarket[] = [
  {
    id: 'Gulf',
    name: 'Gulf & Middle East',
    countries: ['Saudi Arabia', 'United Arab Emirates', 'Qatar', 'Oman', 'Bahrain', 'Kuwait', 'Sudan'],
    certifications: ['SASO Approved', 'GCC Electrical Compliance', 'BS 1977'],
    accentColor: '#F59E0B'
  },
  {
    id: 'Africa',
    name: 'African Continent',
    countries: ['South Africa', 'Nigeria', 'Kenya', 'Tanzania', 'Uganda', 'Zambia', 'Botswana', 'Gambia'],
    certifications: ['SABS Standards', 'KBS Certification', 'IEC 61238'],
    accentColor: '#10B981'
  },
  {
    id: 'SEAsia',
    name: 'South East Asia',
    countries: ['Singapore', 'Malaysia', 'Indonesia', 'Thailand', 'Vietnam'],
    certifications: ['SIRIM Approved', 'SS Cable Standards', 'DIN 46235'],
    accentColor: '#3B82F6'
  },
  {
    id: 'Global',
    name: 'Americas & Oceania',
    countries: ['Australia', 'New Zealand', 'United States', 'United Kingdom'],
    certifications: ['UL Listed Specs', 'AS/NZS Standards', 'ISO 9001:2015'],
    accentColor: '#8B5CF6'
  }
]
