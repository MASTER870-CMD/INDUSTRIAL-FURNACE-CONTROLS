export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;
  gallery?: string[];
  features?: string[];
  specifications?: Record<string, string>;
  isRepresentativeImage?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: 'cat-furnaces',
    slug: 'furnaces',
    title: 'Furnaces',
    description: 'High-temperature industrial and laboratory furnaces with advanced thermal control.',
    image: '/images/ifc/furnaces/bottomslide.jpg',
    products: [
      {
        id: 'f1',
        slug: 'bottom-loading-furnace',
        name: 'Bottom Loading Furnace',
        description: 'Controlled high-temperature processing with programmable temperature management.',
        image: '/images/ifc/furnaces/bottomslide.jpg',
        specifications: {
          'Maximum Operating Capability': 'up to 1650°C',
          'Heating Element': 'MoSi2',
          'Control': '30-step programmable / PID automatic control',
          'Temperature Accuracy': '±1°C',
          'Heating Rate': '0–10°C/min',
          'Example Chamber': '200 × 200 × 200 mm',
          'Example Volume': '8 litres',
          'Example Power': '9 kW'
        },
        features: [
          'High thermal uniformity',
          'Heavy-duty construction',
          'Advanced insulation',
          'Automated lifting mechanism'
        ]
      },
      {
        id: 'f2',
        slug: 'muffle-furnace',
        name: 'Muffle / Tubular Furnace',
        description: 'Versatile muffle furnaces for diverse laboratory and industrial heating requirements.',
        image: '/images/ifc/furnaces/muffleslide.jpg',
        gallery: ['/images/ifc/furnaces/muffleslide1.jpg', '/images/ifc/furnaces/muffleslide2.jpg', '/images/ifc/furnaces/muffle.png'],
        specifications: {
          'Temperature Range': '950°C–1800°C',
          'Control': 'Digital / microprocessor control',
          'Uniformity': 'As published by IFC'
        }
      },
      {
        id: 'f3',
        slug: 'bogie-hearth-furnace',
        name: 'Bogie Hearth Furnace',
        description: 'Large scale heat-treatment furnaces designed for heavy industrial loads.',
        image: '/images/ifc/furnaces/chamber3.jpg'
      },
      {
        id: 'f4',
        slug: 'chamber-furnace',
        name: 'Chamber Furnace',
        description: 'Robust chamber furnaces for hardening, tempering, and stress relieving.',
        image: '/images/ifc/furnaces/chamberslide.jpg',
        gallery: ['/images/ifc/furnaces/chamberslide1.jpg', '/images/ifc/furnaces/chamberslide2.jpg']
      },
      {
        id: 'f5',
        slug: 'pit-furnace',
        name: 'Pit Furnace',
        description: 'Vertical pit furnaces for specialized thermal processing requirements.',
        image: '/images/ifc/furnaces/pitfurnace.png',
        gallery: ['/images/ifc/furnaces/pit1.png']
      },
      {
        id: 'f6',
        slug: 'high-temperature-plc-furnace',
        name: 'High Temperature / PLC Furnace',
        description: 'Advanced PLC-controlled high-temperature furnaces for ceramic and refractory applications.',
        image: '/images/ifc/furnaces/muffle2.png',
        specifications: {
          'Published Range': '1400°C, 1500°C, 1600°C, 1700°C',
          'Chamber Capacities': '3 L, 8 L, 15 L, 35 L',
          'Control': 'Programmable / PID control',
          'Safety': 'Door safety switch included'
        }
      },
      {
        id: 'f7',
        slug: 'aluminium-melting-furnace',
        name: 'Aluminium Melting Furnace',
        description: 'High-efficiency melting furnaces for non-ferrous metal applications.',
        image: '/images/ifc/furnaces/aluminiumslide.jpg',
        gallery: ['/images/ifc/furnaces/aluminiumslide11.jpg', '/images/ifc/furnaces/aluminiumslide22.jpg']
      },
      {
        id: 'f8',
        slug: 'sealed-quench-furnace',
        name: 'Sealed Quench Furnace',
        description: 'Atmosphere-controlled sealed quench furnaces for critical heat treatments.',
        image: '/images/ifc/furnaces/quench2.jpg',
        gallery: ['/images/ifc/furnaces/quench3.jpg', '/images/ifc/furnaces/quench4.jpg']
      }
    ]
  },
  {
    id: 'cat-ovens',
    slug: 'ovens',
    title: 'Ovens',
    description: 'Industrial and laboratory ovens customized for drying, curing, and baking.',
    image: '/images/ifc/ovens/industrialoven1.jpg',
    products: [
      {
        id: 'o1',
        slug: 'laboratory-oven',
        name: 'Laboratory Oven',
        description: 'Precision thermal control for scientific and material testing applications.',
        image: '/images/ifc/ovens/labovenslide.jpg'
      },
      {
        id: 'o2',
        slug: 'electrical-conveyor-oven',
        name: 'Electrical Conveyor Oven',
        description: 'Continuous processing ovens for high-volume manufacturing lines.',
        image: '/images/ifc/ovens/conveyorslide1.jpg'
      },
      {
        id: 'o3',
        slug: 'electrical-oven',
        name: 'Electrical Oven',
        description: 'Standard electrical ovens engineered for robust industrial use.',
        image: '/images/ifc/ovens/electricalslide1.jpg'
      },
      {
        id: 'o4',
        slug: 'hot-air-oven',
        name: 'Hot Air Oven',
        description: 'Forced convection hot air ovens for uniform temperature distribution.',
        image: '/images/ifc/ovens/slide2.jpg'
      },
      {
        id: 'o5',
        slug: 'aluminium-ageing-oven',
        name: 'Aluminium Ageing Oven',
        description: 'Specialized thermal ageing for aluminium alloys.',
        image: '/images/ifc/ovens/ageingslide.jpg'
      },
      {
        id: 'o6',
        slug: 'industrial-oven',
        name: 'Industrial Oven',
        description: 'Heavy-duty industrial ovens customized to application requirements.',
        image: '/images/ifc/ovens/industrialoven1.jpg'
      },
      {
        id: 'o7',
        slug: 'electrical-heat-chamber',
        name: 'Electrical Heat Chamber & Oven',
        description: 'Controlled heating chambers for diverse process environments.',
        image: '/images/ifc/ovens/industrialslide.jpg'
      }
    ]
  },
  {
    id: 'cat-process-control',
    slug: 'process-control',
    title: 'Process & Control',
    description: 'Advanced PID controllers, control panels, and automation for furnace systems.',
    image: '/images/ifc/controls/controlpanel2.jpg',
    products: [
      {
        id: 'c1',
        slug: 'instrumentation-control-panels',
        name: 'Instrumentation Control Panels',
        description: 'Comprehensive instrumentation panels for precise process monitoring.',
        image: '/images/ifc/controls/instrumentslide1.jpg'
      },
      {
        id: 'c2',
        slug: 'furnace-control-panels',
        name: 'Furnace Control Panels',
        description: 'Dedicated furnace control panels configured for continuous-duty ratings from 5 kW to 500 kW.',
        image: '/images/ifc/controls/furcontrolslide1.jpg'
      },
      {
        id: 'c3',
        slug: 'process-indicators-controllers',
        name: 'Process Indicators / Controllers',
        description: 'High-accuracy digital PID controllers and temperature indicators.',
        image: '/images/ifc/controls/processslide1.jpg'
      },
      {
        id: 'c4',
        slug: 'data-logger',
        name: 'Data Logger',
        description: 'Multi-channel temperature logging and recording systems.',
        image: '/images/ifc/controls/loggerslide2.jpg'
      }
    ]
  },
  {
    id: 'cat-thermocouples',
    slug: 'thermocouples-rtds',
    title: 'Thermocouples / RTDs',
    description: 'Reliable temperature sensing including molten metal sensors and RTDs.',
    image: '/images/ifc/thermocouples/thermoslide1.jpg',
    products: [
      {
        id: 't1',
        slug: 'thermocouples',
        name: 'Thermocouples',
        description: 'Wide range of industrial thermocouples with protective sheaths.',
        image: '/images/ifc/thermocouples/thermoslide1.jpg'
      },
      {
        id: 't2',
        slug: 'molten-aluminium-thermocouple',
        name: 'Molten Aluminium Thermocouple',
        description: 'Specialized sensors for non-ferrous molten metal applications.',
        image: '/images/ifc/thermocouples/moltenslide.jpg'
      },
      {
        id: 't3',
        slug: 'mi-thermocouple',
        name: 'MI Thermocouple',
        description: 'Mineral Insulated thermocouples for fast response and durability.',
        image: '/images/ifc/thermocouples/mi_thermocouple.jpg'
      },
      {
        id: 't4',
        slug: 'rtd-sensors',
        name: 'RTD Sensors',
        description: 'High-precision Resistance Temperature Detectors (Pt-100).',
        image: '/images/ifc/thermocouples/rtdslide1.jpg'
      },
      {
        id: 't5',
        slug: 'thermocouple-cables',
        name: 'Thermocouple Cables',
        description: 'Compensating and extension cables for temperature measurement.',
        image: '/images/ifc/thermocouples/thermoslide2.jpg'
      },
      {
        id: 't6',
        slug: 'thermocouple-connectors',
        name: 'Thermocouple Connectors',
        description: 'Polarized industrial thermocouple connectors for secure coupling.',
        image: '/images/ifc/thermocouples/omega1.jpg'
      }
    ]
  },
  {
    id: 'cat-heating-elements',
    slug: 'heating-elements',
    title: 'Heating Elements',
    description: 'High-performance MoSi2, Silicon Carbide, and Kanthal elements.',
    image: '/images/ifc/accessories/mosislide1.jpg',
    products: [
      {
        id: 'h1',
        slug: 'mosi2-heating-elements',
        name: 'MoSi2 Heating Elements',
        description: 'Molybdenum Disilicide elements for extreme temperature up to 1800°C.',
        image: '/images/ifc/accessories/mosislide1.jpg'
      },
      {
        id: 'h2',
        slug: 'sic-heating-elements',
        name: 'Silicon Carbide Heating Elements',
        description: 'SiC elements designed for high thermal output and longevity.',
        image: '/images/ifc/accessories/sic1.jpg'
      },
      {
        id: 'h3',
        slug: 'kanthal-nichrome',
        name: 'Kanthal / Nichrome Heating Elements',
        description: 'Premium resistance heating elements for various industrial applications.',
        image: '/images/ifc/accessories/kanthalslide2.jpg'
      }
    ]
  },
  {
    id: 'cat-industrial-heaters',
    slug: 'industrial-heaters',
    title: 'Industrial Heaters',
    description: 'Immersion, air, finned, and duct heaters for fluid and air processing.',
    image: '/images/ifc/heaters/finned_heaters.jpg',
    products: [
      {
        id: 'ih1',
        slug: 'immersion-heaters',
        name: 'Immersion Heaters',
        description: 'Direct fluid heating solutions with published ranges from 1 kW to 18 kW.',
        image: '/images/ifc/heaters/immersion1.jpg'
      },
      {
        id: 'ih2',
        slug: 'air-heaters',
        name: 'Air Heaters',
        description: 'Industrial air heaters designed for rapid heat transfer.',
        image: '/images/ifc/heaters/air-heater.jpg'
      },
      {
        id: 'ih3',
        slug: 'finned-heaters',
        name: 'Finned Heaters',
        description: 'Finned tubular heaters for improved heat dissipation in air streams.',
        image: '/images/ifc/heaters/finned_heaters.jpg'
      },
      {
        id: 'ih4',
        slug: 'duct-heaters',
        name: 'Duct Heaters',
        description: 'Custom duct heating systems for HVAC and process air.',
        image: '/images/ifc/heaters/ductslide1.jpg'
      },
      {
        id: 'ih5',
        slug: 'cartridge-heaters',
        name: 'Cartridge Heaters',
        description: 'High-density cartridge heaters for localized part heating.',
        image: '/images/ifc/heaters/cartridge.jpg'
      },
      {
        id: 'ih6',
        slug: 'barrel-heaters',
        name: 'Barrel Heaters',
        description: 'Band and barrel heaters for extrusion and molding machinery.',
        image: '/images/ifc/heaters/FR_200.jpg'
      }
    ]
  },
  {
    id: 'cat-accessories',
    slug: 'furnace-accessories',
    title: 'Furnace Accessories',
    description: 'Ceramic fiber blankets, boards, crucibles, and refractory materials.',
    image: '/images/ifc/accessories/ceramicslide1.jpg',
    products: [
      {
        id: 'a1',
        slug: 'ceramic-fiber-blanket',
        name: 'Ceramic Fiber Blanket',
        description: 'High-grade insulation blankets for minimal thermal loss.',
        image: '/images/ifc/accessories/blanketslide1.jpg'
      },
      {
        id: 'a2',
        slug: 'alumina-crucible',
        name: 'Alumina Crucible',
        description: 'High-purity alumina crucibles for laboratory testing and melting.',
        image: '/images/ifc/accessories/aluminaslide1.jpg'
      },
      {
        id: 'a3',
        slug: 'ceramic-tubes',
        name: 'Ceramic Tubes',
        description: 'Refractory ceramic tubes for heating elements and sensors.',
        image: '/images/ifc/accessories/tubeslide.jpg'
      },
      {
        id: 'a4',
        slug: 'ceramic-fiber-module',
        name: 'Ceramic Fiber Module',
        description: 'Pre-fabricated insulation modules for large furnace linings.',
        image: '/images/ifc/accessories/ceramicslide2.jpg'
      },
      {
        id: 'a5',
        slug: 'ceramic-roller',
        name: 'Ceramic Roller',
        description: 'High-strength rollers for continuous furnace operations.',
        image: '/images/ifc/accessories/ceramicrollerslide.jpg'
      },
      {
        id: 'a6',
        slug: 'ceramic-fiber-board',
        name: 'Ceramic Fiber Board',
        description: 'Rigid insulation boards for structural high-temperature backing.',
        image: '/images/ifc/accessories/ceramicboard.jpg'
      }
    ]
  },
  {
    id: 'cat-wax',
    slug: 'wax-heating-systems',
    title: 'Wax Heating Systems',
    description: 'Specialized tanks and melters for investment casting and wax conditioning.',
    image: '/images/ifc/wax/waxtankslide1.jpg',
    products: [
      {
        id: 'w1',
        slug: '1-mt-electrical-wax-melting-tank',
        name: '1 MT Electrical Wax Melting Tank',
        description: 'Large capacity wax melting tank with PID digital control.',
        image: '/images/ifc/wax/waxtankslide1.jpg',
        specifications: {
          'Inner Chamber': '1.2m × 1.2m × 1.2m',
          'Inner Tank Material': 'SS304 (3 mm thickness stated)',
          'Power': '18 kW / 440V / 3-phase',
          'Heating Element': 'Kanthal A1',
          'Control': 'PID digital temperature controller with thyristor',
          'Insulation': 'Ceramic fibre blanket'
        }
      },
      {
        id: 'w2',
        slug: '200-kg-wax-tank',
        name: '200 KG Wax Tank',
        description: 'Medium capacity electrically heated wax conditioning tank.',
        image: '/images/ifc/wax/200tank.jpg'
      },
      {
        id: 'w3',
        slug: '500-kg-wax-tank',
        name: '500 KG Wax Tank',
        description: 'Industrial 500 KG wax tank engineered for continuous processing.',
        image: '/images/ifc/wax/500kg.jpg'
      },
      {
        id: 'w4',
        slug: 'wax-melting-pre-heater',
        name: 'Wax Melting / Pre-Heater',
        description: 'Pre-heating systems for rapid wax preparation.',
        image: '/images/ifc/wax/preslider1.jpg'
      },
      {
        id: 'w5',
        slug: 'wax-melter-mgs',
        name: 'Wax Melter MGS',
        description: 'Specialized wax melters for precise temperature conditioning.',
        image: '/images/ifc/wax/melterslide.jpg'
      },
      {
        id: 'w6',
        slug: 'wax-pumper',
        name: 'Wax Pumper',
        description: 'Automated wax transfer pumping systems for manufacturing lines.',
        image: '/images/ifc/wax/pumpslide1.jpg'
      }
    ]
  }
];
