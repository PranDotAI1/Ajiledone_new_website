import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Truck, Zap, Cpu, Car, Layers, RefreshCw, BarChart2, Shield, Globe, Radio, Database, Cloud } from 'lucide-react';

// Custom SVG Vectors matching uploaded Figma design
const BarChartVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const InventoryBoxVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const ProcurementTargetVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const LogisticsTruckVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const UserProfileVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const FinancialDollarVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12M15 9.5c0-1.38-1.34-2.5-3-2.5s-3 1.12-3 2.5 1.34 2.5 3 2.5 3 1.12 3 2.5-1.34 2.5-3 2.5-3-1.12-3-2.5" />
  </svg>
);

const ShoppingCartVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const WarehouseHouseVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const AiSparkleVector = ({ color = '#52E0CB', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
);

const ConnectedNodesVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2.5" />
    <circle cx="5" cy="18" r="2.5" />
    <circle cx="19" cy="18" r="2.5" />
    <line x1="10.2" y1="6.8" x2="6.8" y2="16.2" />
    <line x1="13.8" y1="6.8" x2="17.2" y2="16.2" />
    <line x1="7.5" y1="18" x2="16.5" y2="18" />
  </svg>
);

const LightningBoltVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const FactoryManufacturingVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20M4 20V10l4 4V10l4 4V6l8 4v10" />
  </svg>
);

const GlobeGridVector = ({ color = '#52E0CB', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const LayersVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
);

const CloudVector = ({ color = '#52E0CB', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const CpuVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

interface ConsumerRetailAutomotivePageProps {
  onNavigate?: (anchor: string) => void;
}

export const ConsumerRetailAutomotivePage: React.FC<ConsumerRetailAutomotivePageProps> = ({ onNavigate }) => {
  const [activeCard, setActiveCard] = useState<'consumer-retail' | 'automotive'>('consumer-retail');
  const [hoveredMaturityBlock, setHoveredMaturityBlock] = useState<number | null>(null);
  const [hoveredRetailCap, setHoveredRetailCap] = useState<number | null>(null);
  const [hoveredRetailPriority, setHoveredRetailPriority] = useState<number | null>(null);
  const [hoveredAutoCap, setHoveredAutoCap] = useState<number | null>(null);
  const [hoveredAutoPriority, setHoveredAutoPriority] = useState<number | null>(null);
  const [hoveredTalkBtn, setHoveredTalkBtn] = useState(false);
  const [hoveredViewBtn, setHoveredViewBtn] = useState(false);
  const [hoveredContactBtn, setHoveredContactBtn] = useState(false);
  const [hoveredCtaBtn, setHoveredCtaBtn] = useState(false);
  const [hoveredRetailTag, setHoveredRetailTag] = useState(false);
  const [hoveredAutoTag, setHoveredAutoTag] = useState(false);
  const [hoveredCtaPill, setHoveredCtaPill] = useState<number | null>(null);

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('auto') || hash.includes('mobility') || hash.includes('vehicle')) {
        setActiveCard('automotive');
        setTimeout(() => {
          const el = document.getElementById('automotive-capabilities');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (hash.includes('consumer') || hash.includes('retail') || hash.includes('commerce')) {
        setActiveCard('consumer-retail');
        setTimeout(() => {
          const el = document.getElementById('retail-capabilities');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        setActiveCard('consumer-retail');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const scrollToCapabilities = () => {
    const el = document.getElementById('retail-capabilities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sub-Sector 01: Consumer & Retail Capabilities Grid (6 Cards from uploaded image)
  const retailCapabilities = [
    { title: 'Demand', icon: BarChartVector, isMint: false },
    { title: 'Inventory', icon: InventoryBoxVector, isMint: false },
    { title: 'Procurement', icon: ProcurementTargetVector, isMint: false },
    { title: 'Logistics', icon: LogisticsTruckVector, isMint: false },
    { title: 'Customer behavior', icon: UserProfileVector, isMint: true },
    { title: 'Financial performance', icon: FinancialDollarVector, isMint: false },
  ];

  // Sub-Sector 01: Consumer & Retail Priorities Grid (8 Cards from uploaded image)
  const retailPriorities = [
    { num: '01', title: 'Customer Intelligence', icon: UserProfileVector, bg: '#0B1226', textColor: '#FFFFFF', numColor: '#52E0CB', isDark: true, isBlue: false },
    { num: '02', title: 'Digital Commerce', icon: ShoppingCartVector, bg: '#F4F7FC', textColor: '#0A1128', numColor: '#265CF4', isDark: false, isBlue: false },
    { num: '03', title: 'Demand Planning', icon: BarChartVector, bg: '#F4F7FC', textColor: '#0A1128', numColor: '#265CF4', isDark: false, isBlue: false },
    { num: '04', title: 'Procurement', icon: ProcurementTargetVector, bg: '#F4F7FC', textColor: '#0A1128', numColor: '#265CF4', isDark: false, isBlue: false },
    { num: '05', title: 'Inventory Optimization', icon: InventoryBoxVector, bg: '#F4F7FC', textColor: '#0A1128', numColor: '#265CF4', isDark: false, isBlue: false },
    { num: '06', title: 'Warehouse Transformation', icon: WarehouseHouseVector, bg: '#F4F7FC', textColor: '#0A1128', numColor: '#265CF4', isDark: false, isBlue: false },
    { num: '07', title: 'Supply Chain Analytics', icon: LogisticsTruckVector, bg: '#F4F7FC', textColor: '#0A1128', numColor: '#265CF4', isDark: false, isBlue: false },
    { num: '08', title: 'AI', icon: AiSparkleVector, bg: '#265CF4', textColor: '#FFFFFF', numColor: '#52E0CB', isDark: false, isBlue: true },
  ];

  // Sub-Sector 02: Automotive Capabilities Grid (5 Cards from uploaded image 1)
  const autoCapabilities = [
    { title: 'Software', icon: CpuVector, isMint: false, isDark: false, isFullWidth: false },
    { title: 'Connected products', icon: ConnectedNodesVector, isMint: false, isDark: false, isFullWidth: false },
    { title: 'Electrification', icon: LightningBoltVector, isMint: true, isDark: false, isFullWidth: false },
    { title: 'Intelligent manufacturing', icon: FactoryManufacturingVector, isMint: false, isDark: false, isFullWidth: false },
    { title: 'Complex global supply chains', icon: GlobeGridVector, isMint: false, isDark: true, isFullWidth: true },
  ];

  // Sub-Sector 02: Automotive Priorities Grid (7 Cards from uploaded images 1, 2 & 3)
  const autoPriorities = [
    { num: '01', title: 'Digital Manufacturing', icon: FactoryManufacturingVector, bg: '#265CF4', textColor: '#FFFFFF', numColor: '#52E0CB', iconBg: 'rgba(255, 255, 255, 0.16)', iconColor: '#52E0CB' },
    { num: '02', title: 'Connected Supply Chain', icon: LogisticsTruckVector, bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4', iconBg: '#F4F7FC', iconColor: '#265CF4' },
    { num: '03', title: 'Product Engineering', icon: CpuVector, bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4', iconBg: '#F4F7FC', iconColor: '#265CF4' },
    { num: '04', title: 'Enterprise Platforms', icon: LayersVector, bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4', iconBg: '#F4F7FC', iconColor: '#265CF4' },
    { num: '05', title: 'Data & AI', icon: AiSparkleVector, bg: '#52E0CB', textColor: '#0A1128', numColor: '#265CF4', iconBg: 'rgba(255, 255, 255, 0.60)', iconColor: '#265CF4' },
    { num: '06', title: 'IoT', icon: ConnectedNodesVector, bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4', iconBg: '#F4F7FC', iconColor: '#265CF4' },
    { num: '07', title: 'Cloud', icon: CloudVector, bg: '#0B1226', textColor: '#FFFFFF', numColor: '#52E0CB', iconBg: 'rgba(255, 255, 255, 0.16)', iconColor: '#52E0CB' },
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#0A1128', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* 1. HERO SECTION (DARK BLUE GRAPHIC BANNER with Figma Specs) */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #08194A 0%, #0D2A75 45%, #1B4AC7 100%)',
          color: '#FFFFFF',
          padding: '120px 0 110px',
          overflow: 'hidden',
        }}
      >
        {/* Vertical Grid Lines Background Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '160px 100%',
            pointerEvents: 'none',
          }}
        />

        {/* Ambient Blur Layer 1 Ellipse (#67DFCB 25%, Layer Blur 180px) */}
        <div
          style={{
            position: 'absolute',
            width: '540px',
            height: '540px',
            top: '-120px',
            left: '-80px',
            background: 'rgba(103, 223, 203, 0.25)',
            filter: 'blur(180px)',
            WebkitFilter: 'blur(180px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Ambient Blur Layer 2 Ellipse (#1FA5FF 40%, Layer Blur 200px - Figma Specs) */}
        <div
          style={{
            position: 'absolute',
            width: '460px',
            height: '460px',
            top: '20px',
            right: '-40px',
            background: 'rgba(31, 165, 255, 0.40)',
            filter: 'blur(200px)',
            WebkitFilter: 'blur(200px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Ambient Blur Layer 3 Ellipse (#67DFCB 22%, Layer Blur 230px - Figma Specs) */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            top: '170px',
            right: '-60px',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            WebkitFilter: 'blur(230px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="lsfs-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', alignItems: 'center' }}>

            {/* Left Content Column */}
            <div>
              {/* Breadcrumb Navigation */}
              <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '32px' }}>
                <span
                  onClick={() => onNavigate && onNavigate('#top')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
                >
                  Home
                </span>
                {' / '}
                <span
                  onClick={() => onNavigate && onNavigate('#industries')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
                >
                  Industries
                </span>
                {' / '}
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Consumer &amp; Retail / Automotive</span>
              </div>

              {/* Tag / Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  PRODUCT-DRIVEN INDUSTRIES
                </span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontSize: 'clamp(40px, 4.6vw, 60px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  margin: '0 0 28px 0',
                }}
              >
                Where the product,<br />the customer and the<br />supply chain meet.
              </h1>

              {/* Description Paragraph */}
              <p
                style={{
                  fontSize: '16.5px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.82)',
                  lineHeight: 1.6,
                  margin: '0 0 40px 0',
                  maxWidth: '540px',
                }}
              >
                Consumer businesses and automotive organizations both live or die on visibility — across demand, inventory, engineering and increasingly complex global supply chains.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <button
                  onMouseEnter={() => setHoveredTalkBtn(true)}
                  onMouseLeave={() => setHoveredTalkBtn(false)}
                  onClick={scrollToCapabilities}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#1B4AC7',
                    border: 'none',
                    padding: '14px 30px',
                    borderRadius: '50px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: hoveredTalkBtn ? '0 12px 28px rgba(255, 255, 255, 0.35)' : '0 4px 14px rgba(0, 0, 0, 0.15)',
                    transform: hoveredTalkBtn ? 'translateY(-2px)' : 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  See industry priorities
                </button>

                <button
                  onMouseEnter={() => setHoveredViewBtn(true)}
                  onMouseLeave={() => setHoveredViewBtn(false)}
                  onClick={() => onNavigate && onNavigate('#contact')}
                  style={{
                    backgroundColor: hoveredViewBtn ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                    color: '#FFFFFF',
                    border: '1.5px solid rgba(255, 255, 255, 0.4)',
                    padding: '14px 30px',
                    borderRadius: '50px',
                    fontSize: '14.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: hoveredViewBtn ? '0 8px 20px rgba(0, 0, 0, 0.2)' : 'none',
                    transform: hoveredViewBtn ? 'translateY(-2px)' : 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  Talk to Ajiledone
                </button>
              </div>

              {/* Bottom Tag Line */}
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#67DFCB',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  opacity: 0.9,
                }}
              >
                TWO INDUSTRIES &nbsp;·&nbsp; FIFTEEN PRIORITIES
              </div>
            </div>

            {/* Right Column: 2 Stacked Sub-Sector Cards */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '460px', justifySelf: 'end' }}>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', zIndex: 1, width: '100%', alignItems: 'stretch' }}>

                {/* Sub-Sector Card 01: Consumer & Retail */}
                <div
                  className="lsfs-card-01"
                  onMouseEnter={() => setHoveredMaturityBlock(0)}
                  onMouseLeave={() => setHoveredMaturityBlock(null)}
                  onClick={() => {
                    setActiveCard('consumer-retail');
                    if (window.location.hash !== '#consumer-retail') {
                      window.history.pushState(null, '', '#consumer-retail');
                    }
                    scrollToCapabilities();
                  }}
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '100%',
                    marginLeft: 0,
                    marginRight: 0,
                    boxSizing: 'border-box',
                    height: '175px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: activeCard === 'consumer-retail' ? '#67DFCB' : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: activeCard === 'consumer-retail' ? 'none' : 'blur(16px)',
                    WebkitBackdropFilter: activeCard === 'consumer-retail' ? 'none' : 'blur(16px)',
                    border: activeCard === 'consumer-retail' ? '2px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.25)',
                    color: activeCard === 'consumer-retail' ? '#08194A' : '#FFFFFF',
                    borderRadius: '24px',
                    padding: '22px 26px',
                    boxShadow: activeCard === 'consumer-retail'
                      ? (hoveredMaturityBlock === 0
                        ? '0 24px 48px rgba(8, 25, 74, 0.4), 0 0 32px rgba(103, 223, 203, 0.7)'
                        : '0 16px 36px rgba(8, 25, 74, 0.3), 0 0 20px rgba(103, 223, 203, 0.4)')
                      : (hoveredMaturityBlock === 0
                        ? '0 16px 32px rgba(0, 0, 0, 0.25)'
                        : '0 8px 24px rgba(0, 0, 0, 0.12)'),
                    transform: activeCard === 'consumer-retail'
                      ? (hoveredMaturityBlock === 0 ? 'scale(1.03) translateY(-3px)' : 'scale(1.01)')
                      : (hoveredMaturityBlock === 0 ? 'scale(1.01) translateY(-2px)' : 'scale(0.98)'),
                    opacity: activeCard === 'consumer-retail' ? 1 : 0.82,
                    transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span
                          style={{
                            fontSize: '11.5px',
                            fontWeight: 800,
                            color: activeCard === 'consumer-retail' ? '#1B4AC7' : '#FFFFFF',
                            backgroundColor: activeCard === 'consumer-retail' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.25)',
                            padding: '3px 10px',
                            borderRadius: '20px',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          01
                        </span>
                        <span
                          style={{
                            fontSize: '11.5px',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            backgroundColor: activeCard === 'consumer-retail' ? '#08194A' : 'rgba(255, 255, 255, 0.18)',
                            padding: '3px 12px',
                            borderRadius: '20px',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          8 priorities
                        </span>
                      </div>
                      {/* Shopping Cart Vector Icon (34px x 29.28px, 1.7px stroke width) */}
                      <svg
                        width="34"
                        height="29.28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={activeCard === 'consumer-retail' ? '#0A1230' : '#67DFCB'}
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ display: 'block', transition: 'stroke 0.3s ease' }}
                      >
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: 800,
                        color: activeCard === 'consumer-retail' ? '#08194A' : '#FFFFFF',
                        margin: 0,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        whiteSpace: 'nowrap',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      Consumer &amp; Retail
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: '13.5px',
                      fontWeight: 500,
                      color: activeCard === 'consumer-retail' ? '#08194A' : 'rgba(255, 255, 255, 0.85)',
                      opacity: activeCard === 'consumer-retail' ? 0.9 : 1,
                      margin: 0,
                      lineHeight: 1.4,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    Connecting customers, products and supply chains.
                  </p>
                </div>

                {/* Vertical Center Connector Line */}
                <div style={{ width: '1.5px', height: '20px', backgroundColor: 'rgba(255, 255, 255, 0.35)', margin: '-6px auto' }} />

                {/* Sub-Sector Card 02: Automotive */}
                <div
                  className="lsfs-card-02"
                  onMouseEnter={() => setHoveredMaturityBlock(1)}
                  onMouseLeave={() => setHoveredMaturityBlock(null)}
                  onClick={() => {
                    setActiveCard('automotive');
                    if (window.location.hash !== '#automotive') {
                      window.history.pushState(null, '', '#automotive');
                    }
                    const el = document.getElementById('automotive-capabilities');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '100%',
                    marginLeft: 0,
                    marginRight: 0,
                    boxSizing: 'border-box',
                    height: '175px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: activeCard === 'automotive' ? '#67DFCB' : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: activeCard === 'automotive' ? 'none' : 'blur(16px)',
                    WebkitBackdropFilter: activeCard === 'automotive' ? 'none' : 'blur(16px)',
                    border: activeCard === 'automotive' ? '2px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.25)',
                    color: activeCard === 'automotive' ? '#08194A' : '#FFFFFF',
                    borderRadius: '24px',
                    padding: '22px 26px',
                    boxShadow: activeCard === 'automotive'
                      ? (hoveredMaturityBlock === 1
                        ? '0 24px 48px rgba(8, 25, 74, 0.4), 0 0 32px rgba(103, 223, 203, 0.7)'
                        : '0 16px 36px rgba(8, 25, 74, 0.3), 0 0 20px rgba(103, 223, 203, 0.4)')
                      : (hoveredMaturityBlock === 1
                        ? '0 16px 32px rgba(0, 0, 0, 0.25)'
                        : '0 8px 24px rgba(0, 0, 0, 0.12)'),
                    transform: activeCard === 'automotive'
                      ? (hoveredMaturityBlock === 1 ? 'scale(1.03) translateY(-3px)' : 'scale(1.01)')
                      : (hoveredMaturityBlock === 1 ? 'scale(1.01) translateY(-2px)' : 'scale(0.98)'),
                    opacity: activeCard === 'automotive' ? 1 : 0.82,
                    transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span
                          style={{
                            fontSize: '11.5px',
                            fontWeight: 800,
                            color: activeCard === 'automotive' ? '#1B4AC7' : '#FFFFFF',
                            backgroundColor: activeCard === 'automotive' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.25)',
                            padding: '3px 10px',
                            borderRadius: '20px',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          02
                        </span>
                        <span
                          style={{
                            fontSize: '11.5px',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            backgroundColor: activeCard === 'automotive' ? '#08194A' : 'rgba(255, 255, 255, 0.18)',
                            padding: '3px 12px',
                            borderRadius: '20px',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          7 priorities
                        </span>
                      </div>
                      {/* CPU/Chip Vector Icon (34px x 34px, 1.7px stroke width) */}
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={activeCard === 'automotive' ? '#0A1230' : '#67DFCB'}
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ display: 'block', transition: 'stroke 0.3s ease' }}
                      >
                        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                        <rect x="9" y="9" width="6" height="6" />
                        <line x1="9" y1="1" x2="9" y2="4" />
                        <line x1="15" y1="1" x2="15" y2="4" />
                        <line x1="9" y1="20" x2="9" y2="23" />
                        <line x1="15" y1="20" x2="15" y2="23" />
                        <line x1="20" y1="9" x2="23" y2="9" />
                        <line x1="20" y1="15" x2="23" y2="15" />
                        <line x1="1" y1="9" x2="4" y2="9" />
                        <line x1="1" y1="15" x2="4" y2="15" />
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: 800,
                        color: activeCard === 'automotive' ? '#08194A' : '#FFFFFF',
                        margin: 0,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        whiteSpace: 'nowrap',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      Automotive
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: '13.5px',
                      fontWeight: 400,
                      color: activeCard === 'automotive' ? '#08194A' : 'rgba(255, 255, 255, 0.85)',
                      margin: 0,
                      lineHeight: 1.4,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    Engineering the future of mobility.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION 2: SUB-SECTOR 1 (CONSUMER & RETAIL) */}
      <section id="retail-capabilities" style={{ padding: '96px 0 70px', backgroundColor: '#FFFFFF' }}>
        <div className="section-container">
          <div className="lsfs-section-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '56px', alignItems: 'center' }}>

            {/* Left Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '28px', height: '2.5px', backgroundColor: '#1B58F4', borderRadius: '2px' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#1B58F4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  01 &nbsp;·&nbsp; CONSUMER &amp; RETAIL
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', fontWeight: 800, color: '#0A1128', lineHeight: 1.12, margin: '0 0 24px 0', letterSpacing: '-0.03em' }}>
                Connecting customers,<br />products and supply chains.
              </h2>

              <p style={{ fontSize: '15.5px', color: '#52607B', lineHeight: 1.6, margin: '0 0 36px 0', maxWidth: '520px' }}>
                Consumer businesses need greater visibility across demand, inventory, procurement, logistics, customer behavior and financial performance.
              </p>

              <div
                onMouseEnter={() => setHoveredRetailTag(true)}
                onMouseLeave={() => setHoveredRetailTag(false)}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#060B1E',
                  color: '#52E0CB',
                  padding: '12px 26px',
                  borderRadius: '50px',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transform: hoveredRetailTag ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
                  boxShadow: hoveredRetailTag ? '0 12px 24px rgba(6, 11, 30, 0.35), 0 0 16px rgba(82, 224, 203, 0.4)' : '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  userSelect: 'none',
                }}
              >
                SIX BLIND SPOTS TO CLOSE
              </div>
            </div>

            {/* Right Column: 2x3 Grid with Left Cyan Line */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#8DA4C4', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>
                WHERE VISIBILITY IS NEEDED
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'stretch' }}>
                {/* Left Cyan Vertical Accent Line */}
                <div style={{ width: '3px', backgroundColor: '#52E0CB', borderRadius: '2px', flexShrink: 0 }} />

                {/* 2x3 Grid of 6 Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', flexGrow: 1 }}>
                  {retailCapabilities.map((item, idx) => {
                    const isHovered = hoveredRetailCap === idx;
                    const IconComp = item.icon;
                    return (
                      <div
                        key={item.title}
                        onMouseEnter={() => setHoveredRetailCap(idx)}
                        onMouseLeave={() => setHoveredRetailCap(null)}
                        style={{
                          backgroundColor: item.isMint ? '#52E0CB' : '#F4F7FC',
                          color: '#0A1128',
                          borderRadius: '16px',
                          padding: '16px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          boxShadow: isHovered ? '0 12px 24px rgba(10, 17, 40, 0.08)' : 'none',
                          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                        }}
                      >
                        {/* Icon Container (44px x 44px, radius: 12px) */}
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            backgroundColor: item.isMint ? 'rgba(255, 255, 255, 0.45)' : '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                          }}
                        >
                          <IconComp color="#265CF4" size={22} />
                        </div>
                        <div style={{ fontSize: '15px', fontWeight: 800, lineHeight: 1.25, color: '#0A1128' }}>
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 3: RETAIL AGENDA (8 Priorities Grid) */}
      <section style={{ padding: '30px 0 100px', backgroundColor: '#FFFFFF' }}>
        <div className="section-container">
          <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#8DA4C4', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '24px' }}>
            INDUSTRY PRIORITIES
          </div>

          {/* 4x2 Grid of 8 Priority Cards matching Figma layout */}
          <div className="lsfs-priorities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px' }}>
            {retailPriorities.map((item, idx) => {
              const isHovered = hoveredRetailPriority === idx;
              const IconComp = item.icon;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setHoveredRetailPriority(idx)}
                  onMouseLeave={() => setHoveredRetailPriority(null)}
                  style={{
                    backgroundColor: item.bg,
                    color: item.textColor,
                    borderRadius: '16px',
                    padding: '20px 22px',
                    minHeight: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    boxShadow: isHovered ? '0 16px 32px rgba(10, 17, 40, 0.14)' : 'none',
                    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                >
                  {/* Icon Container (44px x 44px, radius: 12px, #FFFFFF 16% for dark/blue cards) */}
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: item.isDark || item.isBlue ? 'rgba(255, 255, 255, 0.16)' : '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: item.isDark || item.isBlue ? 'none' : '0 2px 6px rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    <IconComp color={item.isDark || item.isBlue ? '#52E0CB' : '#265CF4'} size={22} />
                  </div>

                  {/* Text Column: Number + Title */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 900, color: item.numColor }}>
                      {item.num}
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 800, lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SECTION 4: SUB-SECTOR 02 (AUTOMOTIVE) */}
      <section id="automotive-capabilities" style={{ padding: '96px 0 70px', backgroundColor: '#F4F7FC' }}>
        <div className="section-container">
          <div className="lsfs-section-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '56px', alignItems: 'center' }}>
            
            {/* Left Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '28px', height: '2.5px', backgroundColor: '#1B58F4', borderRadius: '2px' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#1B58F4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  02 &nbsp;·&nbsp; AUTOMOTIVE
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', fontWeight: 800, color: '#0A1128', lineHeight: 1.12, margin: '0 0 24px 0', letterSpacing: '-0.03em' }}>
                Engineering the<br />future of mobility.
              </h2>

              <p style={{ fontSize: '15.5px', color: '#52607B', lineHeight: 1.6, margin: '0 0 36px 0', maxWidth: '520px' }}>
                Automotive organizations are being transformed by software, connected products, electrification, intelligent manufacturing and increasingly complex global supply chains.
              </p>

              <div
                onMouseEnter={() => setHoveredAutoTag(true)}
                onMouseLeave={() => setHoveredAutoTag(false)}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#265CF4',
                  color: '#FFFFFF',
                  padding: '12px 26px',
                  borderRadius: '50px',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transform: hoveredAutoTag ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
                  boxShadow: hoveredAutoTag ? '0 12px 24px rgba(38, 92, 244, 0.4), 0 0 16px rgba(38, 92, 244, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  userSelect: 'none',
                }}
              >
                FIVE FORCES RESHAPING THE INDUSTRY
              </div>
            </div>

            {/* Right Column: Grid with Left Cyan Line */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#8DA4C4', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>
                WHAT IS TRANSFORMING THE INDUSTRY
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'stretch' }}>
                {/* Left Cyan Vertical Accent Line */}
                <div style={{ width: '3px', backgroundColor: '#52E0CB', borderRadius: '2px', flexShrink: 0 }} />

                {/* 5 Cards Grid (2 cols for first 4 cards, 1 full-width card for 5th card) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', flexGrow: 1 }}>
                  {autoCapabilities.map((item, idx) => {
                    const isHovered = hoveredAutoCap === idx;
                    const IconComp = item.icon;
                    return (
                      <div
                        key={item.title}
                        onMouseEnter={() => setHoveredAutoCap(idx)}
                        onMouseLeave={() => setHoveredAutoCap(null)}
                        style={{
                          gridColumn: item.isFullWidth ? '1 / -1' : 'span 1',
                          backgroundColor: item.isMint ? '#52E0CB' : (item.isDark ? '#091024' : '#FFFFFF'),
                          color: item.isDark ? '#FFFFFF' : '#0A1128',
                          borderRadius: '16px',
                          padding: '16px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          boxShadow: isHovered ? '0 12px 24px rgba(10, 17, 40, 0.08)' : '0 2px 6px rgba(0, 0, 0, 0.02)',
                          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                        }}
                      >
                        {/* Icon Container (44px x 44px, radius: 12px) */}
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            backgroundColor: item.isMint ? 'rgba(255, 255, 255, 0.45)' : (item.isDark ? 'rgba(255, 255, 255, 0.16)' : '#F4F7FC'),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <IconComp color={item.isDark ? '#52E0CB' : '#265CF4'} size={22} />
                        </div>
                        <div style={{ fontSize: '15px', fontWeight: 800, lineHeight: 1.25, color: item.isDark ? '#FFFFFF' : '#0A1128' }}>
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SECTION 5: AUTOMOTIVE AGENDA (7 Priorities Grid) */}
      <section style={{ padding: '30px 0 100px', backgroundColor: '#F4F7FC' }}>
        <div className="section-container">
          <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#8DA4C4', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '24px' }}>
            INDUSTRY PRIORITIES
          </div>

          {/* Grid of 7 Priority Cards (4 cols on row 1, 3 cols on row 2) */}
          <div className="lsfs-priorities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px' }}>
            {autoPriorities.map((item, idx) => {
              const isHovered = hoveredAutoPriority === idx;
              const IconComp = item.icon;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setHoveredAutoPriority(idx)}
                  onMouseLeave={() => setHoveredAutoPriority(null)}
                  style={{
                    backgroundColor: item.bg,
                    color: item.textColor,
                    borderRadius: '16px',
                    padding: '20px 22px',
                    minHeight: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    boxShadow: isHovered ? '0 16px 32px rgba(10, 17, 40, 0.14)' : (item.bg === '#FFFFFF' ? '0 2px 8px rgba(0, 0, 0, 0.02)' : 'none'),
                    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                >
                  {/* Icon Container (44px x 44px, radius: 12px, #FFFFFF 16% for blue/dark cards, #FFFFFF 60% for mint card) */}
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: item.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: item.bg === '#FFFFFF' ? '0 2px 6px rgba(0, 0, 0, 0.04)' : 'none',
                    }}
                  >
                    <IconComp color={item.iconColor} size={22} />
                  </div>

                  {/* Text Column: Number + Title */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 900, color: item.numColor }}>
                      {item.num}
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 800, lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. DEEP CTA BANNER (Figma Specs: 1440x540px linear gradient #0A1230, #0D2A75, #1942B2) */}
      <section style={{ padding: '100px 0 100px', minHeight: '540px', background: 'linear-gradient(135deg, #0A1230 0%, #0D2A75 45%, #1942B2 100%)', color: '#FFFFFF', textAlign: 'center', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Background Glowing Mint Ellipse (Figma Specs: 620x620px, top: -30px, left: 420px, #67DFCB 22% opacity, blur: 230px) */}
        <div
          style={{
            position: 'absolute',
            top: '-30px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '620px',
            height: '620px',
            borderRadius: '50%',
            backgroundColor: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            WebkitFilter: 'blur(230px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          {/* Eyebrow Header with Mint Accent Lines */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
            <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              TWO INDUSTRIES, ONE SUPPLY CHAIN DISCIPLINE
            </span>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
          </div>

          {/* Main Headline (Strictly 2 Lines) */}
          <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 44px)', fontWeight: 800, color: '#FFFFFF', maxWidth: '1140px', margin: '0 auto 28px auto', lineHeight: 1.25, letterSpacing: '-0.03em' }}>
            <span style={{ display: 'block' }}>Connecting customers, products and supply chains.</span>
            <span style={{ display: 'block' }}>Engineering the future of mobility.</span>
          </h2>

          {/* Mint Accent Bar */}
          <div style={{ width: '180px', height: '4px', backgroundColor: '#67DFCB', borderRadius: '2px', margin: '0 auto 36px auto' }} />

          {/* 4 Dynamic Enlarging Feature Tags with Mint Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {[
              'E-commerce',
              'Omni-channel',
              'EV & Mobility',
              'Autonomy'
            ].map((tag, idx) => {
              const isHovered = hoveredCtaPill === idx;
              return (
                <div
                  key={tag}
                  onMouseEnter={() => setHoveredCtaPill(idx)}
                  onMouseLeave={() => setHoveredCtaPill(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.28)' : 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: isHovered ? '1px solid rgba(103, 223, 203, 0.8)' : '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#FFFFFF',
                    padding: '10px 24px',
                    borderRadius: '50px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    boxShadow: isHovered
                      ? '0 12px 28px rgba(103, 223, 203, 0.4), 0 0 20px rgba(255, 255, 255, 0.3)'
                      : '0 4px 16px rgba(0, 0, 0, 0.1)',
                    transform: isHovered ? 'scale(1.14) translateY(-3px)' : 'scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#67DFCB',
                      display: 'inline-block',
                      flexShrink: 0,
                      boxShadow: isHovered ? '0 0 10px #67DFCB' : 'none',
                      transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <span>{tag}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <button
            onMouseEnter={() => setHoveredCtaBtn(true)}
            onMouseLeave={() => setHoveredCtaBtn(false)}
            onClick={() => onNavigate && onNavigate('#contact')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#265CF4',
              padding: '14px 36px',
              borderRadius: '50px',
              fontSize: '15px',
              fontWeight: 800,
              cursor: 'pointer',
              border: 'none',
              boxShadow: hoveredCtaBtn ? '0 16px 36px rgba(255, 255, 255, 0.35), 0 0 24px rgba(103, 223, 203, 0.4)' : '0 6px 20px rgba(0, 0, 0, 0.2)',
              transform: hoveredCtaBtn ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Talk to Ajiledone
          </button>
        </div>
      </section>

      {/* 7. CONTACT BANNER */}
      <section style={{ background: 'linear-gradient(90deg, #265CF4 0%, #1FA5FF 100%)', padding: '76px 0', color: '#FFFFFF' }}>
        <div className="section-container lsfs-contact-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <div style={{ fontSize: '11.5px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '12px' }}>
              DON'T BE WEIRD
            </div>
            <h3 style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: 800, margin: 0, lineHeight: 1.2, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Would you like more information, or<br />
              do you have a question?
            </h3>
          </div>
          <button
            onMouseEnter={() => setHoveredContactBtn(true)}
            onMouseLeave={() => setHoveredContactBtn(false)}
            onClick={() => onNavigate && onNavigate('#contact')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#265CF4',
              padding: '14px 30px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1,
              letterSpacing: '0',
              cursor: 'pointer',
              border: 'none',
              boxShadow: hoveredContactBtn ? '0 12px 28px rgba(0, 0, 0, 0.2)' : '0 4px 14px rgba(0, 0, 0, 0.1)',
              transform: hoveredContactBtn ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              whiteSpace: 'nowrap',
            }}
          >
            Contact us
          </button>
        </div>
      </section>

      {/* Embedded Responsive Media Queries */}
      <style>{`
        @media (max-width: 1024px) {
          .lsfs-hero-grid,
          .lsfs-section-grid {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
          }
          .lsfs-priorities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .lsfs-priorities-grid {
            grid-template-columns: 1fr !important;
          }
          .lsfs-capabilities-2col {
            grid-template-columns: 1fr !important;
          }
          .lsfs-staggered-pill {
            margin-left: 0px !important;
            width: 100% !important;
          }
          .lsfs-contact-flex {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>

    </div>
  );
};

// Helper SVG Icon Components
const SearchIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const GlobeIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ShoppingBagIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const TruckIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const UserHeartIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PackageIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const CpuIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

const RadioIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.83a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
  </svg>
);

const ZapIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const LayersIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const CloudIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);
