export interface Industry {
  id: string;
  rank: number;
  name: string;
  tier: "Foundations" | "Accelerators" | "Enablers";
  score: {
    ec: number;
    vr: number;
    du: number;
    total: number;
  };
  description: string;
  ventureCase: string;
  dualUseCase: string;
  companies: Array<{ name: string; url: string; location?: string }>;
}

export const industries: Industry[] = [
  // Tier 1
  {
    id: "specialty-materials",
    rank: 1,
    name: "Specialty Materials, Advanced Composites & Material Refining",
    tier: "Foundations",
    score: { ec: 5, vr: 4, du: 4, total: 13 },
    description: "Carbon fiber, specialty polymers, engineered proteins, advanced ceramics -- and upstream of all of them, the refining and processing of raw materials into usable feedstock. The U.S. is critically dependent on foreign sources for many advanced materials.",
    ventureCase: "Materials companies that achieve process breakthroughs have some of the deepest moats in manufacturing. The learning curves are steep, the capital requirements create barriers, and the qualification timelines (especially in aerospace) create multi-year lock-in.",
    dualUseCase: "Lightweight composites for commercial aircraft (commercial) and hypersonic vehicles (defense). Specialty polymers for EV battery separators (commercial) and satellite structures (defense).",
    companies: [
      { name: "Axial Composites", url: "https://axialcomposite.com/" },
      { name: "Layup Parts", url: "https://layupparts.com/" },
      { name: "Fiber Dynamics", url: "https://fiberdynamics.net/" },
      { name: "Boston Metal", url: "https://bostonmetal.com/" },
      { name: "Bethlehem Steel Corp", url: "https://x.com/@BethSteelCorp" },
      { name: "Nox Metals", url: "https://noxmetals.co/" },
      { name: "Duranium", url: "https://duranium.co/" }
    ]
  },
  {
    id: "advanced-electronics",
    rank: 2,
    name: "Advanced Electronics Manufacturing (PCB/PCBA + Semiconductor Packaging)",
    tier: "Foundations",
    score: { ec: 5, vr: 5, du: 5, total: 15 },
    description: "This is the single most critical category. Shenzhen's Huaqiangbei district -- 38,000+ businesses across 40+ market buildings -- is the beating heart of the ecosystem. Without domestic electronics manufacturing, every other category on this list is assembling imported subsystems.",
    ventureCase: "The learning curves in electronics manufacturing are steep (15-20% cost reduction per doubling). Companies like MacroFab are building software-defined PCBA platforms.",
    dualUseCase: "Every drone, satellite, missile, and autonomous vehicle needs PCBAs. But so does every smartphone, EV, data center, and medical device.",
    companies: [
      { name: "MacroFab", url: "https://macrofab.com/" },
      { name: "Finwave Semiconductor", url: "https://finwavesemi.com/" },
      { name: "Sphere Semi", url: "https://spheresemi.com/" }
    ]
  },
  {
    id: "precision-parts",
    rank: 3,
    name: "Precision Parts / Advanced Machining",
    tier: "Foundations",
    score: { ec: 5, vr: 5, du: 5, total: 15 },
    description: "The U.S. precision machining supply chain has been hollowing out for decades. Nearly 40% of skilled CNC machinists are over 55. Lead times for aerospace-grade precision parts routinely stretch to 12-18 months.",
    ventureCase: "Hadrian is the archetype. Software-controlled CNC factories with AI-driven process optimization. Going from 70% to 90% overall yield creates a $25/unit cost advantage that compounds with volume.",
    dualUseCase: "SpaceX, Rocket Lab, Relativity, and every launch provider need precision machined parts. So does Boeing's commercial aviation division and the entire medical device industry.",
    companies: [
      { name: "Hadrian", url: "https://hadrian.co/" },
      { name: "SendCutSend", url: "https://sendcutsend.com/" },
      { name: "OSH Cut", url: "https://oshcut.com/" },
      { name: "RMFG", url: "https://rmfg.com/" },
      { name: "Forge Automation", url: "https://forgeautomation.com/" },
      { name: "Emelody", url: "https://emelodyworldwide.com/" }
    ]
  },
  {
    id: "robotic-systems",
    rank: 4,
    name: "Robotic Systems / Actuator / Motor Manufacturing",
    tier: "Foundations",
    score: { ec: 4, vr: 5, du: 5, total: 14 },
    description: "Robots are only as good as the actuators and motors inside them. Figure AI ($39B valuation) and the entire humanoid robotics wave are constrained by the same bottleneck: who manufactures the high-performance actuators at volume?",
    ventureCase: "The actuator is the Bill of Materials equivalent of the GPU in AI: the component whose cost, performance, and availability determines the economics of the entire system.",
    dualUseCase: "Humanoid robots for warehouse logistics (commercial) and explosive ordnance disposal (defense). Drone motors for agricultural spraying (commercial) and ISR missions (defense).",
    companies: [
      { name: "HLabs", url: "https://hlaboratories.com/" },
      { name: "RISE Robotics", url: "https://riserobotics.com/" },
      { name: "Artimus Robotics", url: "https://artimusrobotics.com/" },
      { name: "Atomic Machines", url: "https://atomicmachines.com/" },
      { name: "Corvex Systems", url: "https://corvexsystems.com/" }
    ]
  },
  {
    id: "forming-methods",
    rank: 5,
    name: "Forming Methods: Mold & Die, Casting, Molding, Stamping, Forging",
    tier: "Foundations",
    score: { ec: 5, vr: 5, du: 5, total: 15 },
    description: "Without domestic tooling, you do not have domestic manufacturing. You have domestic assembly of imported parts. Tooling is where technology has the most leverage. The months of calendar time come from quoting, design iteration, manual CAM programming.",
    ventureCase: "Firms that have rebuilt the tooling process end to end -- automated mold design, software-driven machining -- will absorb the customer bases of overseas suppliers.",
    dualUseCase: "Plastic enclosures for commercial IoT sensors (commercial) and ruggedized housings for military electronics (defense). Die-cast aluminum components for EV powertrains (commercial).",
    companies: [
      { name: "Atomic Industries", url: "https://atomic.industries/" },
      { name: "Rangeview", url: "https://rangeview.com/" },
      { name: "Machina Labs", url: "https://machinalabs.ai/" },
      { name: "Foundry Lab", url: "https://foundrylab.com/" },
      { name: "Digital Metal", url: "https://digitalmetal.io/" },
      { name: "Aestus Industries", url: "https://aestus.industries/" }
    ]
  },
  {
    id: "battery-cell",
    rank: 6,
    name: "Battery Cell / Energy Storage Manufacturing",
    tier: "Foundations",
    score: { ec: 5, vr: 4, du: 4, total: 13 },
    description: "China controls ~37% global market share. The U.S. has announced over 1 TWh of planned capacity, but execution is key. The successful plays are at the materials/chemistry layer and specialized defense cells.",
    ventureCase: "Battery cell manufacturing has one of the most well-documented learning curves (~18% cost reduction per doubling). The challenge is surviving long enough to get down the curve.",
    dualUseCase: "Every EV, grid storage system, consumer device, and drone needs batteries. Defense demand (soldier power, UAS) is real but small relative to commercial.",
    companies: [
      { name: "Ouros Energy", url: "https://ouros.energy/" },
      { name: "Forge Nano", url: "https://forgenano.com/" },
      { name: "Form Energy", url: "https://formenergy.com/" },
      { name: "Nascent Materials", url: "https://nascentmaterials.com/" },
      { name: "Group1", url: "https://group1.ai/" },
      { name: "Advano", url: "https://advano.io/" }
    ]
  },
  // Tier 2
  {
    id: "metal-additive",
    rank: 7,
    name: "Industrial Metal Additive Manufacturing",
    tier: "Accelerators",
    score: { ec: 4, vr: 4, du: 4, total: 12 },
    description: "Metal additive is a beast. The parts are structural, load-bearing, and flight-critical. The customers are aerospace, defense, energy, and medical -- industries that pay real money for geometries that cannot be made any other way.",
    ventureCase: "Metal additive eliminates tooling entirely for complex geometries. The consolidation opportunity is in becoming the production-scale metal printing service that aerospace and defense primes cannot justify building internally.",
    dualUseCase: "Rocket engine components and satellite structures (dual). Turbine blades and heat exchangers for power generation (commercial). Titanium medical implants (commercial).",
    companies: [
      { name: "Freeform", url: "https://freeform.co/" },
      { name: "Divergent", url: "https://divergent3d.com/" },
      { name: "Vuecason", url: "https://vuecason.com/" },
      { name: "Radian Forge", url: "https://radianforge.com/" },
      { name: "Seurat", url: "https://seurat.com/" },
      { name: "VulcanForms", url: "https://vulcanforms.com/" }
    ]
  },
  {
    id: "sensors-optics",
    rank: 8,
    name: "Sensors / Optics / Photonics Manufacturing",
    tier: "Accelerators",
    score: { ec: 4, vr: 4, du: 4, total: 12 },
    description: "LiDAR, infrared sensors, optical systems, photonic integrated circuits. This category is the 'eyes' of both autonomous systems and precision-guided munitions.",
    ventureCase: "The autonomous vehicle and industrial automation markets create massive commercial demand. The manufacturing processes (thin-film deposition, precision optics grinding) are amenable to software-driven optimization.",
    dualUseCase: "Autonomous vehicles (commercial) and targeting systems (defense). Industrial machine vision (commercial) and ISR payloads (defense).",
    companies: [
      { name: "Lumotive", url: "https://lumotive.com/" },
      { name: "Ouster", url: "https://ouster.com/" },
      { name: "Aeva", url: "https://aeva.com/" },
      { name: "Voyant Photonics", url: "https://voyantphotonics.com/" }
    ]
  },
  {
    id: "industrial-robots",
    rank: 9,
    name: "Industrial Robots & Automation Cells",
    tier: "Accelerators",
    score: { ec: 4, vr: 4, du: 4, total: 12 },
    description: "Every factory on this list needs robots. The U.S. has no top-10 industrial robot OEM. The opportunity is to collapse the integration cost -- selling complete automation cells, not components.",
    ventureCase: "Robot-as-a-service models eliminate the $200K+ upfront capital expenditure. AI-native programming replaces six months of systems integration with a weekend of teach-and-repeat.",
    dualUseCase: "The DoD needs flexible automation more than anyone. Arsenal and depot maintenance facilities are running 1980s-era equipment.",
    companies: [
      { name: "Standard Bots", url: "https://standardbots.com/" },
      { name: "Path Robotics", url: "https://path-robotics.com/" },
      { name: "Formic", url: "https://formic.co/" },
      { name: "Forge Robotics", url: "https://forge-robotics.com/" },
      { name: "GrayMatter Robotics", url: "https://graymatter-robotics.com/" },
      { name: "Cohesive Robotics", url: "https://cohesiverobotics.com/" },
      { name: "Dexterity", url: "https://dexterity.ai/" },
      { name: "Ultra", url: "https://x.com/@Ultraroboticsco" }
    ]
  },
  // Tier 3
  {
    id: "power-electronics",
    rank: 10,
    name: "Power Electronics / GaN-SiC Device Manufacturing",
    tier: "Enablers",
    score: { ec: 4, vr: 3, du: 3, total: 10 },
    description: "Wide-bandgap semiconductors (GaN, SiC) are the enabling technology for efficient power conversion in EVs, renewable energy, data centers, and directed energy weapons.",
    ventureCase: "Strong learning curves, growing demand, limited domestic capacity. But the capital requirements are high and the timeline to profitability is long.",
    dualUseCase: "EV drivetrains and chargers (commercial). Directed energy weapons and radar systems (defense).",
    companies: [
      { name: "Gallox Semiconductors", url: "https://galloxsemi.com/" },
      { name: "Vertical Semiconductor", url: "https://verticalsemi.com/" }
    ]
  },
  {
    id: "industrial-chemicals",
    rank: 11,
    name: "Industrial Chemicals and Precursors",
    tier: "Enablers",
    score: { ec: 4, vr: 3, du: 3, total: 10 },
    description: "Every manufacturing process consumes chemicals. Without domestic supply, every factory is importing consumables on 6-8 week lead times. Solugen is the proof that this category can be venture-backable.",
    ventureCase: "The venture angle is in process innovation -- producing chemicals through novel processes (bio-based, electrochemical) at lower cost and lower environmental burden.",
    dualUseCase: "Plating chemistries for electronics and aerospace (dual). Specialty resins for composite structures in commercial aviation (commercial) and missile bodies (defense).",
    companies: [
      { name: "Solugen", url: "https://solugen.com/" },
      { name: "MaverickX", url: "https://maverickx.com/" }
    ]
  },
  {
    id: "machine-tools",
    rank: 12,
    name: "Machine Tool Manufacturing",
    tier: "Enablers",
    score: { ec: 4, vr: 3, du: 3, total: 10 },
    description: "The U.S. barely makes the machines its factories run on. CNC mills, lathes, grinders come from Japan, Germany, Taiwan. If the American Shenzhen requires hundreds of new factories, that is billions of dollars flowing to foreign manufacturers.",
    ventureCase: "The machine tool of the future is software-defined, sensor-dense, and self-optimizing. New entrants must build from scratch around closed-loop process control.",
    dualUseCase: "Every factory on this list -- commercial or defense -- needs machine tools. The dual-use case is inherent.",
    companies: [
      { name: "OpenX", url: "https://tryopenx.com/" }
    ]
  }
];
