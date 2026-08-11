import { Layers, Box, Link as LinkIcon, Disc } from 'lucide-react'
import type { MainCategory, Product, RegionalMarket } from '../types'
import copperCableLugs from '../assets/products/copper-cable-lugs.png'
import nSeriesTerminals from '../assets/products/n-series-terminals.png'
import dinSeriesTerminals from '../assets/products/din-series-terminals.png'
import longBarrelTerminals from '../assets/products/long-barrel-terminals.png'
import wirePinTerminals from '../assets/products/wire-pin-terminals.png'
import biMetallicLugs from '../assets/products/bi-metallic-lugs.png'
import preInsulatedTerminals from '../assets/products/pre-insulated-terminals.png'
import splitBoltConnectors from '../assets/products/split-bolt-connectors.png'
import cTypeConnectors from '../assets/products/c-type-connectors.png'
import aluminiumCableTerminals from '../assets/products/aluminium-cable-terminals.png'
import mechanicalCableLugs from '../assets/products/mechanical-cable-lugs.png'
import ferrulesInLine from '../assets/products/ferrules-in-line.png'
import screwConnectors from '../assets/products/screw-connectors.png'
import bwBrassGlands from '../assets/products/bw-brass-glands.png'
import cwBrassGlands from '../assets/products/cw-brass-glands.png'
import a1a2BrassGlands from '../assets/products/a1a2-brass-glands.png'
import e1wDoubleCompressionGlands from '../assets/products/e1w-double-compression-glands.png'
import singleCompressionGlands from '../assets/products/single-compression-glands.png'
import alcoGlands from '../assets/products/alco-glands.png'
import cableGlandKits from '../assets/products/cable-gland-kits.png'
import chart06 from '../assets/charts/page-06.png'
import chart07 from '../assets/charts/page-07.png'
import chart09 from '../assets/charts/page-09.png'
import chart10 from '../assets/charts/page-10.png'
import chart12 from '../assets/charts/page-12.png'
import chart13 from '../assets/charts/page-13.png'
import chart14 from '../assets/charts/page-14.png'
import chart16 from '../assets/charts/page-16.png'
import chart18 from '../assets/charts/page-18.png'
import chart19 from '../assets/charts/page-19.png'
import chart20 from '../assets/charts/page-20.png'
import chart21 from '../assets/charts/page-21.png'
import chart22 from '../assets/charts/page-22.png'
import chart23 from '../assets/charts/page-23.png'
import chart24 from '../assets/charts/page-24.png'
import chart25 from '../assets/charts/page-25.png'
import ferrulesChart from '../assets/charts/ferrules.png'
import screwConnectorsChart from '../assets/charts/screw-connectors.png'
import dinSeriesChart2 from '../assets/charts/din-series-2.png'
import longBarrelChart from '../assets/charts/long-barrel.png'
import splitBoltChart from '../assets/charts/split-bolt.png'
import cTypeChart from '../assets/charts/c-type.png'

const dimensionCharts = {
  copper: [{ label: 'Dimensions 1', image: chart06 }, { label: 'Dimensions 2', image: chart07 }],
  ferrules: [{ label: 'Dimensions', image: ferrulesChart }],
  screwConnectors: [{ label: 'Dimensions', image: screwConnectorsChart }],
  nSeries: [{ label: 'Dimensions', image: chart09 }],
  din: [{ label: 'Dimensions 1', image: chart10 }, { label: 'Dimensions 2', image: dinSeriesChart2 }],
  longBarrel: [{ label: 'Dimensions', image: longBarrelChart }],
  wirePin: [{ label: 'Dimensions', image: chart12 }],
  biMetallic: [{ label: 'Dimensions', image: chart13 }],
  preInsulated: [{ label: 'Dimensions', image: chart14 }],
  splitBolt: [{ label: 'Dimensions', image: splitBoltChart }],
  cType: [{ label: 'Dimensions', image: cTypeChart }],
  aluminium: [{ label: 'Dimensions', image: chart16 }],
  mechanical: [{ label: 'Dimensions', image: chart18 }],
  bw: [{ label: 'Dimensions', image: chart19 }],
  cw: [{ label: 'Dimensions', image: chart20 }],
  a1a2: [{ label: 'Dimensions', image: chart21 }],
  e1w: [{ label: 'Dimensions', image: chart22 }],
  single: [{ label: 'Dimensions', image: chart23 }],
  alco: [{ label: 'Dimensions', image: chart24 }],
  kits: [{ label: 'Kit dimensions', image: chart25 }]
}

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
    measurements: 'Cable size 1.5–1000 mm²; stud hole Ø4.2–21 mm; overall length (J) 16–200 mm.',
    dimensionCharts: dimensionCharts.copper,
    image: copperCableLugs
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
    measurements: 'Cable size 6–630 mm²; stud hole Ø5.2–21 mm; overall length (L) 25–148 mm.',
    dimensionCharts: dimensionCharts.nSeries,
    image: nSeriesTerminals
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
    measurements: 'Cable size 6–1000 mm²; M5–M20 stud holes; overall length (J) 30.5–195 mm.',
    dimensionCharts: dimensionCharts.din,
    image: dinSeriesTerminals
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
    measurements: 'Cable size 50–630 mm²; barrel Ø9.5–35 mm; overall length (J) 64–208 mm.',
    dimensionCharts: dimensionCharts.longBarrel,
    image: longBarrelTerminals
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
    measurements: 'Cable size 2.5–400 mm²; barrel Ø2.5–27 mm; overall length (J) 20–92 mm.',
    dimensionCharts: dimensionCharts.wirePin,
    image: wirePinTerminals
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
    measurements: 'Cable size 25–1300 mm²; palm hole Ø10.5–17 mm; overall length (L) 70–267 mm.',
    dimensionCharts: dimensionCharts.biMetallic,
    image: biMetallicLugs
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
    measurements: 'Cable size 10–1000 mm²; barrel Ø4.4–43.5 mm; overall length (J) 28–190 mm.',
    dimensionCharts: dimensionCharts.aluminium,
    image: aluminiumCableTerminals
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
    measurements: 'Cable size 25–500 mm²; shear bolt configurations and dimensions as illustrated in the catalogue.',
    dimensionCharts: dimensionCharts.mechanical,
    image: mechanicalCableLugs
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
    measurements: 'Cable size 1.5–16 mm²; ring/fork/pin styles; overall length (J) 18–45 mm.',
    dimensionCharts: dimensionCharts.preInsulated,
    image: preInsulatedTerminals
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
    measurements: 'Conductor range 1.5–240 mm²; split bolt profiles and dimensions as illustrated in the catalogue.',
    dimensionCharts: dimensionCharts.splitBolt,
    image: splitBoltConnectors
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
    measurements: 'C-type connector range and dimensional drawing are shown in the supplied Cablond catalogue.',
    dimensionCharts: dimensionCharts.cType,
    image: cTypeConnectors
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
    measurements: 'Cable size 1.5–1000 mm²; standard length 12–170 mm; long length 22–230 mm.',
    dimensionCharts: dimensionCharts.ferrules,
    image: ferrulesInLine
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
    measurements: 'Cable size 10–300 mm²; barrel Ø4.4–23.5 mm; length (L) 30–65 mm; 2 or 4 screws.',
    dimensionCharts: dimensionCharts.screwConnectors,
    image: screwConnectors
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
    measurements: 'Cable OD 8–93 mm; ISO entry thread 20–90 mm; gland length 28.5–112 mm.',
    dimensionCharts: dimensionCharts.bw,
    image: bwBrassGlands
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
    measurements: 'Overall cable OD 17–90 mm; ISO entry thread 20–90 mm; gland length 47–90 mm.',
    dimensionCharts: dimensionCharts.cw,
    image: cwBrassGlands
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
    measurements: 'Overall cable OD 8–78 mm; ISO entry thread 20–90 mm; gland length 22–45 mm.',
    dimensionCharts: dimensionCharts.a1a2,
    image: a1a2BrassGlands
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
    measurements: 'Single-compression dimensional range is provided in the catalogue drawing; cable ODs span 12–51 mm.',
    dimensionCharts: dimensionCharts.single,
    image: singleCompressionGlands
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
    measurements: 'Maximum accepted cable OD 8–102 mm; BSC nipple sizes 5/8–4½ in; body sizes 13–103 mm.',
    dimensionCharts: dimensionCharts.e1w,
    image: e1wDoubleCompressionGlands
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
    measurements: 'Cable OD 15.8–78 mm; ISO entry thread 20–75 mm; gland length 24–40 mm.',
    dimensionCharts: dimensionCharts.alco,
    image: alcoGlands
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
    measurements: 'Locknuts are available in 16–75 mm sizes; kits include an earth tag, PVC shroud and locknut.',
    dimensionCharts: dimensionCharts.kits,
    image: cableGlandKits
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
