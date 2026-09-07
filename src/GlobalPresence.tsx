import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Globe, Shield, Cpu, MapPin, CheckCircle2 } from 'lucide-react';

/* -----------------------------------------------------------------
   GEOGRAPHIC POLYGONS FOR CARTOGRAPHICALLY ACCURATE WORLD MAP
   Equirectangular projection mapped to standard 1200 x 520 view.
   ----------------------------------------------------------------- */
const GEOGRAPHIC_POLYGONS: number[][][] = [
  // 1. Alaska & North America Main
  [
    [50, 48], [90, 52], [140, 50], [180, 56], [220, 62], [260, 56], [290, 60],
    [325, 78], [345, 105], [330, 125], [305, 120], [335, 155], [300, 185],
    [270, 215], [245, 235], [235, 255], [220, 240], [205, 220], [175, 180],
    [155, 160], [130, 140], [95, 115], [60, 95], [45, 70]
  ],
  // 2. Greenland
  [
    [350, 28], [405, 25], [430, 40], [420, 75], [380, 85], [355, 68]
  ],
  // 3. Central America & Mexico Isthmus
  [
    [220, 240], [245, 235], [265, 255], [285, 275], [270, 285], [245, 268]
  ],
  // 4. South America
  [
    [270, 285], [315, 280], [360, 305], [390, 335], [375, 380], [350, 420],
    [325, 465], [310, 485], [295, 480], [290, 440], [280, 390], [265, 340],
    [255, 305]
  ],
  // 5. Europe & British Isles / Scandinavia
  [
    [595, 40], [625, 38], [655, 50], [640, 95], [605, 100], [585, 70],
    [540, 100], [560, 95], [580, 115], [610, 110], [665, 115], [670, 140],
    [630, 155], [595, 165], [560, 160], [530, 155], [525, 125]
  ],
  // British Isles (UK & Ireland)
  [
    [525, 90], [545, 85], [540, 115], [520, 110]
  ],
  // 6. Africa
  [
    [525, 175], [575, 170], [630, 175], [675, 185], [710, 215], [730, 260],
    [680, 290], [655, 340], [630, 395], [605, 435], [585, 430], [565, 380],
    [550, 320], [515, 275], [505, 230], [505, 195]
  ],
  // Madagascar
  [
    [715, 355], [735, 360], [725, 410], [705, 405]
  ],
  // 7. Middle East / Arabian Peninsula
  [
    [685, 175], [735, 175], [765, 205], [755, 255], [715, 260], [695, 220]
  ],
  // 8. India & South Asia Subcontinent
  [
    [775, 175], [830, 175], [845, 215], [830, 265], [810, 305], [785, 260],
    [765, 225]
  ],
  // Sri Lanka
  [
    [815, 315], [825, 315], [825, 335], [815, 335]
  ],
  // 9. North Asia / Russia / Siberia
  [
    [675, 50], [745, 45], [840, 42], [940, 45], [1040, 50], [1125, 55],
    [1140, 90], [1085, 110], [1010, 125], [920, 120], [825, 125], [730, 120],
    [675, 95]
  ],
  // 10. East Asia / China / Korea / Japan
  [
    [835, 140], [920, 135], [1010, 145], [1040, 190], [990, 235], [930, 245],
    [865, 235], [835, 195]
  ],
  // Japan Islands
  [
    [1055, 140], [1080, 150], [1065, 195], [1045, 185]
  ],
  // 11. Southeast Asia (Indochina Peninsula)
  [
    [870, 235], [925, 240], [930, 290], [905, 315], [890, 280]
  ],
  // 12. Maritime Southeast Asia / Indonesia / Philippines archipelago
  [
    [890, 325], [945, 330], [935, 350], [885, 345]
  ],
  [
    [955, 305], [1005, 310], [990, 345], [950, 340]
  ],
  [
    [985, 245], [1010, 255], [1000, 295], [975, 285]
  ],
  [
    [1010, 325], [1075, 330], [1060, 360], [1005, 350]
  ],
  // 13. Australia & New Zealand
  [
    [965, 365], [1025, 355], [1080, 385], [1075, 445], [1030, 465], [970, 450],
    [940, 405]
  ],
  [
    [1105, 445], [1125, 450], [1105, 490], [1090, 480]
  ]
];

function isInsideLandmass(px: number, py: number): boolean {
  for (let i = 0; i < GEOGRAPHIC_POLYGONS.length; i++) {
    const poly = GEOGRAPHIC_POLYGONS[i];
    let inside = false;
    for (let j = 0, k = poly.length - 1; j < poly.length; k = j++) {
      const xi = poly[j][0], yi = poly[j][1];
      const xk = poly[k][0], yk = poly[k][1];

      const intersect = ((yi > py) !== (yk > py)) &&
        (px < (xk - xi) * (py - yi) / (yk - yi) + xi);
      if (intersect) inside = !inside;
    }
    if (inside) return true;
  }
  return false;
}

interface GlobalPresencePageProps {
  onNavigate?: (anchor: string) => void;
}

export const GlobalPresencePage: React.FC<GlobalPresencePageProps> = ({ onNavigate }) => {
  const [activeRegionIdx, setActiveRegionIdx] = useState<number>(3); // Default India (04) active as shown in image
  const [hoveredRegionIdx, setHoveredRegionIdx] = useState<number | null>(null);
  const [hoveredModelCard, setHoveredModelCard] = useState<number | null>(null);
  const [hoveredCtaPill, setHoveredCtaPill] = useState<number | null>(null);
  const [hoveredCtaBtn, setHoveredCtaBtn] = useState(false);
  const [hoveredTalkBtn, setHoveredTalkBtn] = useState(false);
  const [hoveredOperateBtn, setHoveredOperateBtn] = useState(false);
  const [hoveredContactBtn, setHoveredContactBtn] = useState(false);

  const mapSectionRef = useRef<HTMLElement>(null);
  const [mapAnimKey, setMapAnimKey] = useState<number>(0);

  useEffect(() => {
    const el = mapSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMapAnimKey((prev) => prev + 1);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const regions = [
    { id: '01', name: 'North America', desc: 'Enterprise transformation & strategic client engagement across US & Canada.' },
    { id: '02', name: 'Europe', desc: 'Specialist consulting, regulatory alignment & engineering hubs.' },
    { id: '03', name: 'Middle East', desc: 'Digital transformation, energy & mega-project execution.' },
    { id: '04', name: 'India', desc: 'Global innovation center, core engineering & distributed delivery excellence.' },
    { id: '05', name: 'Asia-Pacific', desc: 'Regional growth, cloud modernizations & supply chain solutions.' },
  ];

  const modelCards = [
    {
      num: '01',
      title: 'Local business engagement',
      text: 'The conversation happens in the room, in the market, in the language of the customer.',
      bg: '#0B1226',
      textColor: '#FFFFFF',
      numColor: '#52E0CB',
      descColor: 'rgba(255, 255, 255, 0.85)',
    },
    {
      num: '02',
      title: 'Specialist consulting',
      text: 'Deep expertise brought in where the problem actually needs it.',
      bg: '#F4F7FC',
      textColor: '#0A1128',
      numColor: '#265CF4',
      descColor: '#52607B',
    },
    {
      num: '03',
      title: 'Engineering capabilities',
      text: 'People who build, integrate and operate — not sit in service.',
      bg: '#265CF4',
      textColor: '#FFFFFF',
      numColor: '#52E0CB',
      descColor: 'rgba(255, 255, 255, 0.9)',
    },
    {
      num: '04',
      title: 'Distributed delivery',
      text: 'Capacity across geographies and time zones, working to one standard.',
      bg: '#52E0CB',
      textColor: '#0A1128',
      numColor: '#08194A',
      descColor: '#08194A',
    },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#0A1128', fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* 1. HERO SECTION (DARK BLUE GRAPHIC BANNER matching Figma Specs) */}
      <section
        style={{
          position: 'relative',
          background: 'radial-gradient(circle at 75% 30%, #1A54E8 0%, #0E3BAF 35%, #072474 70%, #031242 100%)',
          color: '#FFFFFF',
          padding: '120px 0 110px',
          overflow: 'hidden',
        }}
      >
        {/* Background Grid Pattern Lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '160px 160px',
            pointerEvents: 'none',
          }}
        />

        {/* Figma Exact Ambient Spotlight Glow Ellipses */}
        {/* Ellipse 1: #1FA5FF 40% Opacity per Figma inspect image 2 */}
        <div
          style={{
            position: 'absolute',
            width: '460px',
            height: '460px',
            top: '20px',
            right: '5%',
            background: 'rgba(31, 165, 255, 0.40)',
            filter: 'blur(200px)',
            WebkitFilter: 'blur(200px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        {/* Ellipse 2: #67DFCB 22% Opacity Layer Blur 230px per Figma inspect image 3 */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            top: '150px',
            right: '12%',
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
              {/* Breadcrumb matching Figma image */}
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
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Global Ajiledone</span>
              </div>

              {/* Tag / Badge matching Figma image */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '24px', height: '2.5px', backgroundColor: '#67DFCB' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  GLOBAL AJILEDONE
                </span>
              </div>

              {/* Headline matching Figma image */}
              <h1
                style={{
                  fontSize: 'clamp(40px, 4.6vw, 58px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  margin: '0 0 28px 0',
                }}
              >
                Global perspective.<br />
                Connected execution.
              </h1>

              {/* Description Paragraph */}
              <p
                style={{
                  fontSize: '16.5px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.75)',
                  lineHeight: 1.6,
                  margin: '0 0 40px 0',
                  maxWidth: '520px',
                }}
              >
                Ajiledone operates through a connected delivery model supporting organizations across five regions.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <button
                  onMouseEnter={() => setHoveredOperateBtn(true)}
                  onMouseLeave={() => setHoveredOperateBtn(false)}
                  onClick={() => scrollToSection('where-we-operate')}
                  style={{
                    backgroundColor: hoveredOperateBtn ? '#FFFFFF' : 'transparent',
                    color: hoveredOperateBtn ? '#08194A' : '#FFFFFF',
                    border: hoveredOperateBtn ? '1.5px solid #FFFFFF' : '1.5px solid rgba(255, 255, 255, 0.45)',
                    padding: '14px 30px',
                    borderRadius: '50px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: hoveredOperateBtn ? '0 12px 28px rgba(255, 255, 255, 0.35)' : 'none',
                    transform: hoveredOperateBtn ? 'translateY(-2px) scale(1.03)' : 'translateY(0) scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  See where we operate
                </button>

                <button
                  onMouseEnter={() => setHoveredTalkBtn(true)}
                  onMouseLeave={() => setHoveredTalkBtn(false)}
                  onClick={() => onNavigate && onNavigate('#contact')}
                  style={{
                    backgroundColor: hoveredTalkBtn ? '#67DFCB' : 'transparent',
                    color: hoveredTalkBtn ? '#08194A' : '#FFFFFF',
                    border: hoveredTalkBtn ? '1.5px solid #67DFCB' : '1.5px solid rgba(255, 255, 255, 0.45)',
                    padding: '14px 30px',
                    borderRadius: '50px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: hoveredTalkBtn ? '0 12px 28px rgba(103, 223, 203, 0.4)' : 'none',
                    transform: hoveredTalkBtn ? 'translateY(-2px) scale(1.03)' : 'translateY(0) scale(1)',
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
                ONE ORGANIZATION &nbsp;·&nbsp; ONE STANDARD &nbsp;·&nbsp; GLOBAL EXECUTION
              </div>
            </div>

            {/* Right Column: 5 Region Cards Stack matching Uploaded Figma Mockup */}
            <div className="lsfs-hero-cards-container" style={{ position: 'relative', width: '100%', maxWidth: '480px', justifySelf: 'end' }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.6)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '16px' }}>
                FIVE REGIONS
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {regions.map((reg, idx) => {
                  const isHovered = hoveredRegionIdx === idx;
                  const isActive = activeRegionIdx === idx;

                  return (
                    <div
                      key={reg.id}
                      onMouseEnter={() => setHoveredRegionIdx(idx)}
                      onMouseLeave={() => setHoveredRegionIdx(null)}
                      onClick={() => setActiveRegionIdx(idx)}
                      style={{
                        backgroundColor: isActive ? '#67DFCB' : (isHovered ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.10)'),
                        color: isActive ? '#08194A' : '#FFFFFF',
                        borderRadius: '16px',
                        padding: '16px 22px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: isActive ? '1px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.18)',
                        boxShadow: isActive
                          ? '0 12px 28px rgba(8, 25, 74, 0.3), 0 0 20px rgba(103, 223, 203, 0.35)'
                          : (isHovered ? '0 8px 20px rgba(0, 0, 0, 0.2)' : '0 2px 8px rgba(0, 0, 0, 0.1)'),
                        transform: isHovered ? 'scale(1.04) translateY(-2px)' : (isActive ? 'scale(1.02)' : 'scale(1)'),
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        cursor: 'pointer',
                        userSelect: 'none',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: 800,
                            color: isActive ? '#08194A' : '#67DFCB',
                            letterSpacing: '0.04em',
                          }}
                        >
                          {reg.id}
                        </span>
                        <span style={{ fontSize: '18px', fontWeight: 800, fontFamily: "'Inter', sans-serif" }}>
                          {reg.name}
                        </span>
                      </div>

                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          backgroundColor: isActive ? '#08194A' : '#67DFCB',
                          display: 'inline-block',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION 2: WHERE WE OPERATE (Accurate Cartographic World Map Section) */}
      <section
        id="where-we-operate"
        ref={mapSectionRef}
        style={{
          padding: '100px 0 90px',
          background: 'radial-gradient(circle at 48% 34%, #0f4ea4 0%, #0a3378 40%, #061c4d 75%, #030f2c 100%)',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Inline Style for Smooth Step-and-Pause Traveling Dotted Line & Synchronized Node/Pill Reveals */}
        <style>{`
          @keyframes dashTravel {
            to {
              stroke-dashoffset: -36;
            }
          }
          .animated-flight-line {
            stroke-dasharray: 5 7;
            animation: dashTravel 3.6s linear infinite;
          }

          @keyframes lineStepPauseMask {
            0%, 12% {
              stroke-dashoffset: 1000;
            }
            25%, 38% {
              stroke-dashoffset: 665;
            }
            50%, 63% {
              stroke-dashoffset: 505;
            }
            75%, 88% {
              stroke-dashoffset: 415;
            }
            95%, 100% {
              stroke-dashoffset: 260;
            }
          }
          .trajectory-mask-path {
            stroke-dasharray: 1000;
            animation: lineStepPauseMask 12s ease-in-out forwards;
          }

          @keyframes seqNodePop {
            0% {
              opacity: 0;
              transform: scale(0.2);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .seq-node-reveal {
            opacity: 0;
            animation: seqNodePop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            transform-box: fill-box;
            transform-origin: center;
          }

          @keyframes seqPillPop {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.6) translateY(14px);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1) translateY(0);
            }
          }
          .seq-pill-reveal {
            opacity: 0;
            animation: seqPillPop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          @keyframes glowPulseBreathe {
            0%, 100% {
              transform: scale(1);
              opacity: 0.85;
              filter: drop-shadow(0 0 8px rgba(103, 223, 203, 0.8));
            }
            50% {
              transform: scale(1.18);
              opacity: 1;
              filter: drop-shadow(0 0 20px rgba(103, 223, 203, 1));
            }
          }

          .pulsing-glow-core {
            animation: glowPulseBreathe 2.4s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }

          /* Responsive Pill Tab Styling & Anchor Positioning right next to Reticle Ellipses */
          @media (max-width: 992px) {
            .seq-pill-reveal {
              font-size: 11px !important;
              padding: 4px 11px !important;
            }
          }

          @media (max-width: 768px) {
            .seq-pill-reveal {
              font-size: 9.5px !important;
              padding: 3px 8px !important;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4) !important;
            }
            .seq-pill-north-america {
              top: 20% !important;
              left: 22.6% !important;
            }
            .seq-pill-europe {
              top: 13.5% !important;
              left: 50.1% !important;
            }
            .seq-pill-middle-east {
              top: 30% !important;
              left: 61.0% !important;
            }
            .seq-pill-india {
              top: 39% !important;
              left: 72.0% !important;
            }
            .seq-pill-asia-pacific {
              top: 51.5% !important;
              left: 80.5% !important;
            }
          }

          @media (max-width: 480px) {
            .seq-pill-reveal {
              font-size: 8.5px !important;
              padding: 2.5px 6.5px !important;
            }
            .seq-pill-north-america {
              top: 20% !important;
              left: 22.6% !important;
            }
            .seq-pill-europe {
              top: 13.5% !important;
              left: 50.1% !important;
            }
            .seq-pill-middle-east {
              top: 30% !important;
              left: 61.0% !important;
            }
            .seq-pill-india {
              top: 39% !important;
              left: 72.0% !important;
            }
            .seq-pill-asia-pacific {
              top: 51.5% !important;
              left: 80.5% !important;
            }
          }
        `}</style>

        {/* Ambient Map Background Glow Spotlight */}
        <div
          style={{
            position: 'absolute',
            width: '900px',
            height: '900px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(103, 223, 203, 0.15) 0%, rgba(15, 78, 164, 0.05) 75%, transparent 100%)',
            filter: 'blur(160px)',
            WebkitFilter: 'blur(160px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Header Tag & Title */}
          <div style={{ maxWidth: '680px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '2.5px', backgroundColor: '#67DFCB', borderRadius: '2px' }} />
              <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                WHERE WE OPERATE
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(34px, 4vw, 50px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.12, margin: '0 0 20px 0', letterSpacing: '-0.03em' }}>
              A connected delivery model.
            </h2>

            <p style={{ fontSize: '16px', color: '#8DA4C4', lineHeight: 1.6, margin: 0 }}>
              Local business engagement, specialist consulting and engineering capabilities — distributed across five regions and every major time zone.
            </p>
          </div>

          {/* Seamless World Map Container without Back Frame */}
          <div
            key={`map-anim-${mapAnimKey}`}
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '400px',
              overflowX: 'hidden',
            }}
          >
            {/* SVG Vector Map Layer */}
            <svg viewBox="0 0 1200 520" width="100%" height="100%" style={{ display: 'block' }} preserveAspectRatio="xMidYMid meet">
              <defs>
                {/* Unified Mint Cyan Glow (#67DFCB 32% Opacity Layer Blur 30 per Figma) */}
                <radialGradient id="hubMintGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#67DFCB" stopOpacity="0.55" />
                  <stop offset="50%" stopColor="#67DFCB" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#67DFCB" stopOpacity="0" />
                </radialGradient>

                {/* Soft Glow Filter for Arc */}
                <filter id="mint-arc-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                </filter>

                {/* Node Radiating Glow Blur Filter */}
                <filter id="nodeGlowFilter" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Trajectory Sequential Traveling Mask */}
                <mask id="trajectoryMask" maskUnits="userSpaceOnUse">
                  <path
                    d="M 272 148 C 380 148, 490 110, 602 110 C 655 110, 695 175, 732 195 C 765 208, 785 222, 812 238 C 860 265, 905 292, 952 302"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="40"
                    strokeLinecap="round"
                    className="trajectory-mask-path"
                  />
                </mask>
              </defs>

              {/* Layer 1: Ambient Node Glows (#67DFCB) with Sequential Reveal */}
              <g id="hub-ambient-glows">
                {[
                  { x: 272, y: 148, delay: 0.10 },
                  { x: 602, y: 110, delay: 3.00 },
                  { x: 732, y: 195, delay: 6.00 },
                  { x: 812, y: 238, delay: 9.00 },
                  { x: 952, y: 302, delay: 11.40 },
                ].map((node, i) => (
                  <g key={`ambient-glow-group-${i}`} transform={`translate(${node.x}, ${node.y})`}>
                    <circle
                      r="54"
                      fill="url(#hubMintGlow)"
                      className="seq-node-reveal pulsing-glow-core"
                      style={{ animationDelay: `${node.delay}s` }}
                    />
                  </g>
                ))}
              </g>

              {/* Layer 2: Cartographically Accurate Dot Matrix World (All #67DFCB) */}
              <g id="world-dots-layer">
                {(() => {
                  const hubs = [
                    { x: 272, y: 148 },
                    { x: 602, y: 110 },
                    { x: 732, y: 195 },
                    { x: 812, y: 238 },
                    { x: 952, y: 302 },
                  ];

                  const dots = [];
                  for (let x = 35; x < 1165; x += 14) {
                    for (let y = 30; y < 495; y += 14) {
                      if (isInsideLandmass(x, y)) {
                        let minDistance = 999;
                        for (const h of hubs) {
                          const d = Math.hypot(h.x - x, h.y - y);
                          if (d < minDistance) minDistance = d;
                        }

                        let r = 1.7;
                        let opacity = 0.32;

                        if (minDistance < 50) {
                          r = 2.2;
                          opacity = 0.9;
                        } else if (minDistance < 90) {
                          r = 1.9;
                          opacity = 0.65;
                        }

                        dots.push(
                          <circle
                            key={`dot-${x}-${y}`}
                            cx={x}
                            cy={y}
                            r={r}
                            fill="#67DFCB"
                            opacity={opacity}
                          />
                        );
                      }
                    }
                  }
                  return dots;
                })()}
              </g>

              {/* Layer 3: Connection Trajectory Arc matching Figma Vector specs with Traveling Mask Reveal */}
              <g id="flight-trajectories" mask="url(#trajectoryMask)">
                <path
                  d="M 272 148 C 380 148, 490 110, 602 110 C 655 110, 695 175, 732 195 C 765 208, 785 222, 812 238 C 860 265, 905 292, 952 302"
                  fill="none"
                  stroke="#67DFCB"
                  strokeWidth="1.3"
                  strokeDasharray="5 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animated-flight-line"
                  opacity="0.45"
                />
              </g>

              {/* Layer 4: Figma Exact Reticle Target Nodes with Sequential Reveal */}
              <g id="reticle-nodes">
                {[
                  { x: 272, y: 148, delay: 0.10 },
                  { x: 602, y: 110, delay: 3.00 },
                  { x: 732, y: 195, delay: 6.00 },
                  { x: 812, y: 238, delay: 9.00 },
                  { x: 952, y: 302, delay: 11.40 },
                ].map((node, i) => (
                  <g key={`node-outer-${i}`} transform={`translate(${node.x}, ${node.y})`}>
                    <g
                      key={`node-inner-${i}`}
                      className="seq-node-reveal"
                      style={{ animationDelay: `${node.delay}s` }}
                    >
                      {/* 46x46 Target Ring (1.4px Border #67DFCB 50% opacity) */}
                      <circle
                        r="23"
                        fill="none"
                        stroke="#67DFCB"
                        strokeWidth="1.4"
                        opacity="0.5"
                      />

                      {/* 4 Satellite Crosshair Dots on Ring Perimeter */}
                      <circle cx="-23" cy="0" r="2" fill="#67DFCB" />
                      <circle cx="23" cy="0" r="2" fill="#67DFCB" />
                      <circle cx="0" cy="-23" r="2" fill="#67DFCB" />
                      <circle cx="0" cy="23" r="2" fill="#67DFCB" />

                      {/* 16x16 Solid Core Node (#67DFCB) with ambient glow aura */}
                      <circle
                        r="8"
                        fill="#67DFCB"
                        className="pulsing-glow-core"
                      />
                    </g>
                  </g>
                ))}
              </g>
            </svg>

            {/* Layer 5: HTML Location Pill Labels Anchored Directly Next to Reticle Nodes */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              {/* North America */}
              <div
                className="seq-pill-reveal seq-pill-north-america"
                style={{
                  position: 'absolute',
                  top: '21.5%',
                  left: '22.6%',
                  transform: 'translate(-50%, -50%)',
                  animationDelay: '0.10s',
                  backgroundColor: '#FFFFFF',
                  color: '#08194A',
                  fontWeight: 800,
                  fontSize: '13px',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  boxShadow: '0 8px 22px rgba(0, 0, 0, 0.35)',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'auto',
                  cursor: 'pointer',
                  transition: 'boxShadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.45), 0 0 16px rgba(103, 223, 203, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 22px rgba(0, 0, 0, 0.35)';
                }}
              >
                North America
              </div>

              {/* Europe */}
              <div
                className="seq-pill-reveal seq-pill-europe"
                style={{
                  position: 'absolute',
                  top: '14.0%',
                  left: '50.1%',
                  transform: 'translate(-50%, -50%)',
                  animationDelay: '3.00s',
                  backgroundColor: '#FFFFFF',
                  color: '#08194A',
                  fontWeight: 800,
                  fontSize: '13px',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  boxShadow: '0 8px 22px rgba(0, 0, 0, 0.35)',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'auto',
                  cursor: 'pointer',
                  transition: 'boxShadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.45), 0 0 16px rgba(103, 223, 203, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 22px rgba(0, 0, 0, 0.35)';
                }}
              >
                Europe
              </div>

              {/* Middle East */}
              <div
                className="seq-pill-reveal seq-pill-middle-east"
                style={{
                  position: 'absolute',
                  top: '30.5%',
                  left: '61.0%',
                  transform: 'translate(-50%, -50%)',
                  animationDelay: '6.00s',
                  backgroundColor: '#FFFFFF',
                  color: '#08194A',
                  fontWeight: 800,
                  fontSize: '13px',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  boxShadow: '0 8px 22px rgba(0, 0, 0, 0.35)',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'auto',
                  cursor: 'pointer',
                  transition: 'boxShadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.45), 0 0 16px rgba(103, 223, 203, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 22px rgba(0, 0, 0, 0.35)';
                }}
              >
                Middle East
              </div>

              {/* India */}
              <div
                className="seq-pill-reveal seq-pill-india"
                style={{
                  position: 'absolute',
                  top: '39.0%',
                  left: '72.0%',
                  transform: 'translate(-50%, -50%)',
                  animationDelay: '9.00s',
                  backgroundColor: '#FFFFFF',
                  color: '#08194A',
                  fontWeight: 800,
                  fontSize: '13px',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  boxShadow: '0 8px 22px rgba(0, 0, 0, 0.35)',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'auto',
                  cursor: 'pointer',
                  transition: 'boxShadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.45), 0 0 16px rgba(103, 223, 203, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 22px rgba(0, 0, 0, 0.35)';
                }}
              >
                India
              </div>

              {/* Asia-Pacific */}
              <div
                className="seq-pill-reveal seq-pill-asia-pacific"
                style={{
                  position: 'absolute',
                  top: '51.5%',
                  left: '80.5%',
                  transform: 'translate(-50%, -50%)',
                  animationDelay: '11.40s',
                  backgroundColor: '#FFFFFF',
                  color: '#08194A',
                  fontWeight: 800,
                  fontSize: '13px',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  boxShadow: '0 8px 22px rgba(0, 0, 0, 0.35)',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'auto',
                  cursor: 'pointer',
                  transition: 'boxShadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.45), 0 0 16px rgba(103, 223, 203, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 22px rgba(0, 0, 0, 0.35)';
                }}
              >
                Asia-Pacific
              </div>
            </div>
          </div>

          {/* Map Footer Bar matching Figma image */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '36px' }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#67DFCB', letterSpacing: '-0.01em' }}>
              One organization. One standard. Global execution.
            </div>
            <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              NORTH AMERICA &nbsp;·&nbsp; EUROPE &nbsp;·&nbsp; MIDDLE EAST &nbsp;·&nbsp; INDIA &nbsp;·&nbsp; ASIA-PACIFIC
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 3: THE MODEL ("Four things that travel together.") */}
      <section id="the-model" style={{ padding: '100px 0 90px', backgroundColor: '#FFFFFF' }}>
        <div className="section-container">
          {/* Header */}
          <div style={{ maxWidth: '640px', marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '2.5px', backgroundColor: '#1B58F4', borderRadius: '2px' }} />
              <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#1B58F4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                THE MODEL
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', fontWeight: 800, color: '#0A1128', lineHeight: 1.12, margin: '0 0 20px 0', letterSpacing: '-0.03em' }}>
              Four things that travel together.
            </h2>

            <p style={{ fontSize: '16px', color: '#52607B', lineHeight: 1.6, margin: 0 }}>
              Our model brings together local business engagement, specialist consulting, engineering capabilities and distributed delivery.
            </p>
          </div>

          {/* 4 Model Cards Grid */}
          <div className="lsfs-capabilities-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {modelCards.map((card, idx) => {
              const isHovered = hoveredModelCard === idx;
              return (
                <div
                  key={card.num}
                  onMouseEnter={() => setHoveredModelCard(idx)}
                  onMouseLeave={() => setHoveredModelCard(null)}
                  style={{
                    backgroundColor: card.bg,
                    color: card.textColor,
                    borderRadius: '24px',
                    padding: '32px 26px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '260px',
                    boxShadow: isHovered ? '0 16px 36px rgba(10, 17, 40, 0.15)' : '0 4px 14px rgba(0, 0, 0, 0.03)',
                    transform: isHovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '12.5px', fontWeight: 800, color: card.numColor, letterSpacing: '0.04em', marginBottom: '16px' }}>
                      {card.num}
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, lineHeight: 1.2, margin: '0 0 14px 0', fontFamily: "'Inter', sans-serif" }}>
                      {card.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: '14.5px', lineHeight: 1.5, color: card.descColor, margin: 0, fontWeight: 500 }}>
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SECTION 4: GLOBAL EXECUTION CTA BANNER */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #0A1230 0%, #0D2A75 45%, #1942B2 100%)', color: '#FFFFFF', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: '-40px',
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
            <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              GLOBAL EXECUTION
            </span>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
          </div>

          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, color: '#FFFFFF', maxWidth: '1080px', margin: '0 auto 28px auto', lineHeight: 1.2, letterSpacing: '-0.03em' }}>
            <span style={{ display: 'block' }}>One organization. One standard.</span>
            <span style={{ display: 'block' }}>Global execution.</span>
          </h2>

          {/* 5 Region Pills Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {regions.map((reg, idx) => {
              const isHovered = hoveredCtaPill === idx;
              return (
                <div
                  key={reg.name}
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
                    fontSize: '14px',
                    fontWeight: 700,
                    boxShadow: isHovered
                      ? '0 12px 28px rgba(103, 223, 203, 0.4), 0 0 20px rgba(255, 255, 255, 0.3)'
                      : '0 4px 16px rgba(0, 0, 0, 0.1)',
                    transform: isHovered ? 'scale(1.12) translateY(-3px)' : 'scale(1)',
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
                    }}
                  />
                  <span>{reg.name}</span>
                </div>
              );
            })}
          </div>

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
            Find your nearest team
          </button>
        </div>
      </section>

      {/* 5. CONTACT BANNER (Exact Figma Uploaded Design Specs) */}
      <section style={{ background: 'linear-gradient(90deg, #265CF4 0%, #1FA5FF 100%)', padding: '76px 0', color: '#FFFFFF' }}>
        <div className="section-container lsfs-contact-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '12px' }}>
              DON'T BE WEIRD
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: 800, margin: 0, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Would you like more information, or<br />do you have a question?
            </h2>
          </div>
          <button
            onMouseEnter={() => setHoveredContactBtn(true)}
            onMouseLeave={() => setHoveredContactBtn(false)}
            onClick={() => onNavigate && onNavigate('#contact')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#265CF4',
              padding: '14px 32px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1,
              letterSpacing: '0',
              cursor: 'pointer',
              border: 'none',
              boxShadow: hoveredContactBtn ? '0 8px 24px rgba(0, 0, 0, 0.2)' : '0 4px 16px rgba(0, 0, 0, 0.12)',
              transform: hoveredContactBtn ? 'translateY(-2px) scale(1.04)' : 'translateY(0) scale(1)',
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
            gap: 40px !important;
          }
          .lsfs-hero-cards-container {
            justify-self: center !important;
            max-width: 100% !important;
          }
          .lsfs-capabilities-2col {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .lsfs-capabilities-2col {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .lsfs-contact-flex {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 24px !important;
          }
        }
      `}</style>

    </div>
  );
};
