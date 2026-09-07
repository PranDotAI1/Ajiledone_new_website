import React, { useState } from 'react';

interface EnergyResourcesOilGasPageProps {
  onNavigate?: (anchor: string) => void;
}

export const EnergyResourcesOilGasPage: React.FC<EnergyResourcesOilGasPageProps> = ({ onNavigate }) => {
  const [hoveredExploreBtn, setHoveredExploreBtn] = useState(false);
  const [hoveredTalkBtn, setHoveredTalkBtn] = useState(false);
  const [hoveredContactBtn, setHoveredContactBtn] = useState(false);
  const [hoveredCtaBtn, setHoveredCtaBtn] = useState(false);
  const [hoveredHex, setHoveredHex] = useState<number | null>(null);
  const [hoveredPriority, setHoveredPriority] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [hoveredCtaTab, setHoveredCtaTab] = useState<number | null>(null);

  const scrollToPriorities = () => {
    const el = document.getElementById('industry-priorities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 4 Core Connection Pillars
  const pillars = [
    {
      num: '01',
      title: 'Enterprise systems',
      desc: 'SAP S/4HANA · IS-Oil · JVA',
      bg: '#060B1E',
      textColor: '#FFFFFF',
      numColor: '#52E0CB',
      subColor: 'rgba(255, 255, 255, 0.65)',
    },
    {
      num: '02',
      title: 'Assets',
      desc: 'EAM · Maintenance · IoT',
      bg: '#F4F7FC',
      textColor: '#0A1128',
      numColor: '#1B58F4',
      subColor: 'rgba(10, 17, 40, 0.45)',
    },
    {
      num: '03',
      title: 'Data',
      desc: 'Energy data platforms',
      bg: '#1B58F4',
      textColor: '#FFFFFF',
      numColor: '#52E0CB',
      subColor: 'rgba(255, 255, 255, 0.85)',
    },
    {
      num: '04',
      title: 'Intelligence',
      desc: 'Enterprise AI · Prediction',
      bg: '#52E0CB',
      textColor: '#0A1128',
      numColor: '#0A1128',
      subColor: 'rgba(10, 17, 40, 0.70)',
    },
  ];

  // 10 Industry Priorities Hex Grid Data
  const priorities = [
    { num: '01', title: 'Operational Excellence', bg: '#060B1E', textColor: '#FFFFFF', numColor: '#52E0CB' },
    { num: '02', title: 'Asset Productivity', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#1B58F4' },
    { num: '03', title: 'Joint Venture Management', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#1B58F4' },
    { num: '04', title: 'Connected Supply Chains', bg: '#1B58F4', textColor: '#FFFFFF', numColor: '#67DFCB' },
    { num: '05', title: 'Finance Transformation', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#1B58F4' },
    { num: '06', title: 'Energy Data Platforms', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#1B58F4' },
    { num: '07', title: 'Predictive Maintenance', bg: '#52E0CB', textColor: '#0A1128', numColor: '#0A1128' },
    { num: '08', title: 'Enterprise AI', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#1B58F4' },
    { num: '09', title: 'Digital Operations', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#1B58F4' },
    { num: '10', title: 'Cloud Modernization', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#1B58F4' },
  ];

  // Tech Stack Items (Exact Figma Specs)
  const techStack = [
    'SAP S/4HANA',
    'IS-Oil',
    'JVA',
    'EAM',
    'BTP',
    'Data',
    'AI',
    'IoT',
    'Cloud',
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#FFFFFF', color: '#0A1128' }}>
      
      {/* 1. HERO SECTION */}
      <section
        style={{
          background: 'linear-gradient(135deg, #07184A 0%, #0D2B78 45%, #1A4ED0 100%)',
          color: '#FFFFFF',
          padding: '120px 0 110px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '740px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Subtle Background Grid Lines Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            pointerEvents: 'none',
            opacity: 0.07,
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={{ borderRight: '1px solid #FFFFFF', height: '100%' }} />
          ))}
        </div>

        {/* Radial Glow 1 */}
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            top: '80px',
            right: '60px',
            background: 'rgba(31, 165, 255, 0.35)',
            filter: 'blur(220px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Radial Glow 2 */}
        <div
          style={{
            position: 'absolute',
            width: '580px',
            height: '580px',
            top: '-60px',
            right: '240px',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(240px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '28px', fontWeight: 500 }}>
            <span
              style={{ cursor: 'pointer', transition: 'color 0.2s ease' }}
              onClick={() => onNavigate && onNavigate('#home')}
            >
              Home
            </span>
            {' '}&nbsp;/&nbsp;{' '}
            <span
              style={{ cursor: 'pointer', transition: 'color 0.2s ease' }}
              onClick={() => onNavigate && onNavigate('#industries')}
            >
              Industries
            </span>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Energy, Resources &amp; Oil and Gas</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            {/* Left Column Content */}
            <div style={{ maxWidth: '620px' }}>
              <div
                style={{
                  fontSize: '11.5px',
                  fontWeight: 800,
                  color: '#67DFCB',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                &mdash; ENERGY, RESOURCES &amp; OIL AND GAS &mdash;
              </div>

              <h1
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 56px)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.12,
                  letterSpacing: '-0.03em',
                  margin: '0 0 24px 0',
                }}
              >
                Powering the intelligent<br />energy enterprise.
              </h1>

              <p
                style={{
                  fontSize: '16.5px',
                  color: 'rgba(255, 255, 255, 0.82)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  fontWeight: 400,
                }}
              >
                Energy organizations are balancing operational efficiency, asset productivity, supply chain complexity, energy transition, regulatory requirements and rapidly evolving technology.
              </p>

              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#67DFCB',
                  lineHeight: 1.55,
                  marginBottom: '40px',
                }}
              >
                Ajiledone connects enterprise systems, assets, data and intelligence across complex energy operations.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onMouseEnter={() => setHoveredExploreBtn(true)}
                  onMouseLeave={() => setHoveredExploreBtn(false)}
                  onClick={scrollToPriorities}
                  style={{
                    background: hoveredExploreBtn ? '#FFFFFF' : 'transparent',
                    color: hoveredExploreBtn ? '#08194A' : '#FFFFFF',
                    border: '1.5px solid #FFFFFF',
                    padding: '14px 34px',
                    borderRadius: '9999px',
                    fontWeight: 800,
                    fontSize: '14.5px',
                    cursor: 'pointer',
                    transform: hoveredExploreBtn ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
                    boxShadow: hoveredExploreBtn ? '0 12px 28px rgba(255, 255, 255, 0.35)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  See industry priorities
                </button>

                <a
                  href="#contact"
                  onMouseEnter={() => setHoveredTalkBtn(true)}
                  onMouseLeave={() => setHoveredTalkBtn(false)}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('#contact');
                  }}
                  style={{
                    background: hoveredTalkBtn ? '#67DFCB' : 'transparent',
                    color: hoveredTalkBtn ? '#08194A' : '#FFFFFF',
                    border: hoveredTalkBtn ? '1.5px solid #67DFCB' : '1.5px solid rgba(255, 255, 255, 0.35)',
                    padding: '14px 34px',
                    borderRadius: '9999px',
                    fontWeight: 800,
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transform: hoveredTalkBtn ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
                    boxShadow: hoveredTalkBtn ? '0 10px 24px rgba(103, 223, 203, 0.4)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                >
                  Talk to Ajiledone
                </a>
              </div>
            </div>

            {/* Right Column: Hexagonal Radar / Spider Chart Visualization (Exact Figma Specs) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '100%', maxWidth: '520px', margin: '0 auto' }}>
              
              <div style={{ width: '100%', position: 'relative' }}>
                <svg
                  viewBox="0 0 520 400"
                  width="100%"
                  height="auto"
                  style={{ display: 'block', width: '100%', height: 'auto', overflow: 'visible' }}
                >
                  <defs>
                    <style>{`
                      @keyframes softGlowRadiate {
                        0% {
                          transform: scale(0.92);
                          opacity: 0.35;
                        }
                        50% {
                          transform: scale(1.15);
                          opacity: 0.70;
                        }
                        100% {
                          transform: scale(0.92);
                          opacity: 0.35;
                        }
                      }

                      .radiate-glow-circle {
                        transform-origin: 260px 190px;
                        animation: softGlowRadiate 4.5s ease-in-out infinite;
                      }
                    `}</style>

                    {/* Center Hub 112x112 Linear Gradient (#67DFCB -> #1FA5FF) */}
                    <linearGradient id="hubLinearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#67DFCB" />
                      <stop offset="100%" stopColor="#1FA5FF" />
                    </linearGradient>

                    {/* 170x170 Blur Filter for #67DFCB 45% Glow Layer */}
                    <filter id="cyanGlowFilter" x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur stdDeviation="16" result="blur" />
                    </filter>

                    {/* Vertex Dot Glow */}
                    <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Outer Hexagon Cube (Exact Figma Specs: 259.81px × 300px) */}
                  <polygon
                    points="260,40 389.9,115 389.9,265 260,340 130.1,265 130.1,115"
                    fill="rgba(255, 255, 255, 0.05)"
                    stroke="rgba(255, 255, 255, 0.28)"
                    strokeWidth="1.2"
                  />

                  {/* Inner Hexagon Cube (Exact 50% Scale: 260,115 325,152.5 325,227.5 260,265 195,227.5 195,152.5) */}
                  <polygon
                    points="260,115 325,152.5 325,227.5 260,265 195,227.5 195,152.5"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.28)"
                    strokeWidth="1.2"
                  />

                  {/* 6 Radial Spoke Lines from Center (260, 190) to 6 Outer Vertices */}
                  <line x1="260" y1="190" x2="260" y2="40" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="1.2" />
                  <line x1="260" y1="190" x2="389.9" y2="115" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="1.2" />
                  <line x1="260" y1="190" x2="389.9" y2="265" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="1.2" />
                  <line x1="260" y1="190" x2="260" y2="340" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="1.2" />
                  <line x1="260" y1="190" x2="130.1" y2="265" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="1.2" />
                  <line x1="260" y1="190" x2="130.1" y2="115" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="1.2" />

                  {/* Central Cyan Soft Pulsing Glow Aura (No Hard Ring Circle Outline) */}
                  <circle
                    cx="260"
                    cy="190"
                    r="72"
                    className="radiate-glow-circle"
                    fill="rgba(103, 223, 203, 0.50)"
                    filter="url(#cyanGlowFilter)"
                  />

                  {/* Center Hub Circle (Reduced radius: r=48) */}
                  <circle
                    cx="260"
                    cy="190"
                    r="48"
                    fill="url(#hubLinearGrad)"
                    stroke="rgba(255, 255, 255, 0.4)"
                    strokeWidth="1.2"
                  />

                  {/* Text inside Center Hub */}
                  <text
                    x="260"
                    y="185"
                    textAnchor="middle"
                    fill="#060B1E"
                    fontSize="10.5"
                    fontWeight="900"
                    letterSpacing="1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    ENERGY
                  </text>
                  <text
                    x="260"
                    y="199"
                    textAnchor="middle"
                    fill="#1B58F4"
                    fontSize="9"
                    fontWeight="800"
                    letterSpacing="0.7"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    OPERATIONS
                  </text>

                  {/* 6 Glowing Mint Cyan Vertex Dots (#67DFCB) */}
                  <circle cx="260" cy="40" r="4.5" fill="#67DFCB" filter="url(#dotGlow)" />
                  <circle cx="389.9" cy="115" r="4.5" fill="#67DFCB" filter="url(#dotGlow)" />
                  <circle cx="389.9" cy="265" r="4.5" fill="#67DFCB" filter="url(#dotGlow)" />
                  <circle cx="260" cy="340" r="4.5" fill="#67DFCB" filter="url(#dotGlow)" />
                  <circle cx="130.1" cy="265" r="4.5" fill="#67DFCB" filter="url(#dotGlow)" />
                  <circle cx="130.1" cy="115" r="4.5" fill="#67DFCB" filter="url(#dotGlow)" />

                  {/* Outer Spoke Text Labels (Exact copy & position from Figma) */}
                  {/* 1. Top Vertex */}
                  <text
                    x="260"
                    y="24"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11.5"
                    fontWeight="700"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Operational efficiency
                  </text>

                  {/* 2. Top Right Vertex */}
                  <text
                    x="404"
                    y="119"
                    textAnchor="start"
                    fill="#FFFFFF"
                    fontSize="11.5"
                    fontWeight="700"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Asset productivity
                  </text>

                  {/* 3. Bottom Right Vertex */}
                  <text
                    x="404"
                    y="269"
                    textAnchor="start"
                    fill="#FFFFFF"
                    fontSize="11.5"
                    fontWeight="700"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Supply chain complexity
                  </text>

                  {/* 4. Bottom Vertex */}
                  <text
                    x="260"
                    y="362"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11.5"
                    fontWeight="700"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Energy transition
                  </text>

                  {/* 5. Bottom Left Vertex */}
                  <text
                    x="116"
                    y="262"
                    textAnchor="end"
                    fill="#FFFFFF"
                    fontSize="11.5"
                    fontWeight="700"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Regulatory
                  </text>
                  <text
                    x="116"
                    y="276"
                    textAnchor="end"
                    fill="#FFFFFF"
                    fontSize="11.5"
                    fontWeight="700"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    requirements
                  </text>

                  {/* 6. Top Left Vertex */}
                  <text
                    x="116"
                    y="112"
                    textAnchor="end"
                    fill="#FFFFFF"
                    fontSize="11.5"
                    fontWeight="700"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Rapidly evolving
                  </text>
                  <text
                    x="116"
                    y="126"
                    textAnchor="end"
                    fill="#FFFFFF"
                    fontSize="11.5"
                    fontWeight="700"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    technology
                  </text>
                </svg>
              </div>

              <div
                style={{
                  fontSize: '9.5px',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.45)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  marginTop: '16px',
                  textAlign: 'center',
                }}
              >
                SIX PRESSURES, AT ONCE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR CORE PILLARS HEXAGON WORKFLOW */}
      <section style={{ padding: '96px 0 100px', backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
        <style>{`
          @keyframes pillarAppear0 {
            0%, 4% { opacity: 0; transform: translateY(32px) scale(0.92); }
            18% { opacity: 1; transform: translateY(0) scale(1); }
            88% { opacity: 1; transform: translateY(0) scale(1); }
            96%, 100% { opacity: 0; transform: translateY(32px) scale(0.92); }
          }
          @keyframes pillarAppear1 {
            0%, 18% { opacity: 0; transform: translateY(32px) scale(0.92); }
            31% { opacity: 1; transform: translateY(0) scale(1); }
            88% { opacity: 1; transform: translateY(0) scale(1); }
            96%, 100% { opacity: 0; transform: translateY(32px) scale(0.92); }
          }
          @keyframes pillarAppear2 {
            0%, 31% { opacity: 0; transform: translateY(32px) scale(0.92); }
            44% { opacity: 1; transform: translateY(0) scale(1); }
            88% { opacity: 1; transform: translateY(0) scale(1); }
            96%, 100% { opacity: 0; transform: translateY(32px) scale(0.92); }
          }
          @keyframes pillarAppear3 {
            0%, 44% { opacity: 0; transform: translateY(32px) scale(0.92); }
            57% { opacity: 1; transform: translateY(0) scale(1); }
            88% { opacity: 1; transform: translateY(0) scale(1); }
            96%, 100% { opacity: 0; transform: translateY(32px) scale(0.92); }
          }

          @keyframes dotAppear0 {
            0%, 24% { opacity: 0; transform: translateY(-50%) scale(0); }
            31%, 88% { opacity: 1; transform: translateY(-50%) scale(1); }
            96%, 100% { opacity: 0; transform: translateY(-50%) scale(0); }
          }
          @keyframes dotAppear1 {
            0%, 37% { opacity: 0; transform: translateY(-50%) scale(0); }
            44%, 88% { opacity: 1; transform: translateY(-50%) scale(1); }
            96%, 100% { opacity: 0; transform: translateY(-50%) scale(0); }
          }
          @keyframes dotAppear2 {
            0%, 50% { opacity: 0; transform: translateY(-50%) scale(0); }
            57%, 88% { opacity: 1; transform: translateY(-50%) scale(1); }
            96%, 100% { opacity: 0; transform: translateY(-50%) scale(0); }
          }

          @keyframes lineGrowAnim {
            0%, 4% {
              opacity: 0;
              transform: translateY(-50%) scaleX(0);
              transform-origin: left center;
            }
            18% {
              opacity: 1;
              transform: translateY(-50%) scaleX(0.25);
              transform-origin: left center;
            }
            31% {
              opacity: 1;
              transform: translateY(-50%) scaleX(0.55);
              transform-origin: left center;
            }
            44% {
              opacity: 1;
              transform: translateY(-50%) scaleX(0.80);
              transform-origin: left center;
            }
            57%, 88% {
              opacity: 1;
              transform: translateY(-50%) scaleX(1);
              transform-origin: left center;
            }
            96%, 100% {
              opacity: 0;
              transform: translateY(-50%) scaleX(0);
              transform-origin: right center;
            }
          }

          @keyframes lineGrowAnimMobile {
            0%, 4% {
              opacity: 0;
              transform: translateX(-50%) scaleY(0);
              transform-origin: top center;
            }
            18% {
              opacity: 1;
              transform: translateX(-50%) scaleY(0.25);
              transform-origin: top center;
            }
            31% {
              opacity: 1;
              transform: translateX(-50%) scaleY(0.55);
              transform-origin: top center;
            }
            44% {
              opacity: 1;
              transform: translateX(-50%) scaleY(0.80);
              transform-origin: top center;
            }
            57%, 88% {
              opacity: 1;
              transform: translateX(-50%) scaleY(1);
              transform-origin: top center;
            }
            96%, 100% {
              opacity: 0;
              transform: translateX(-50%) scaleY(0);
              transform-origin: bottom center;
            }
          }

          @keyframes dotAppear0 {
            0%, 18% { opacity: 0; transform: translateY(-50%) scale(0); }
            31%, 88% { opacity: 1; transform: translateY(-50%) scale(1); }
            96%, 100% { opacity: 0; transform: translateY(-50%) scale(0); }
          }
          @keyframes dotAppear1 {
            0%, 31% { opacity: 0; transform: translateY(-50%) scale(0); }
            44%, 88% { opacity: 1; transform: translateY(-50%) scale(1); }
            96%, 100% { opacity: 0; transform: translateY(-50%) scale(0); }
          }
          @keyframes dotAppear2 {
            0%, 44% { opacity: 0; transform: translateY(-50%) scale(0); }
            57%, 88% { opacity: 1; transform: translateY(-50%) scale(1); }
            96%, 100% { opacity: 0; transform: translateY(-50%) scale(0); }
          }

          @keyframes dotAppearMobile0 {
            0%, 18% { opacity: 0; transform: translateX(-50%) scale(0); }
            31%, 88% { opacity: 1; transform: translateX(-50%) scale(1); }
            96%, 100% { opacity: 0; transform: translateX(-50%) scale(0); }
          }
          @keyframes dotAppearMobile1 {
            0%, 31% { opacity: 0; transform: translateX(-50%) scale(0); }
            44%, 88% { opacity: 1; transform: translateX(-50%) scale(1); }
            96%, 100% { opacity: 0; transform: translateX(-50%) scale(0); }
          }
          @keyframes dotAppearMobile2 {
            0%, 44% { opacity: 0; transform: translateX(-50%) scale(0); }
            57%, 88% { opacity: 1; transform: translateX(-50%) scale(1); }
            96%, 100% { opacity: 0; transform: translateX(-50%) scale(0); }
          }

          .line-anim {
            opacity: 0;
            transform: translateY(-50%) scaleX(0);
            transform-origin: left center;
            animation: lineGrowAnim 10s cubic-bezier(0.16, 1, 0.3, 1) infinite;
          }
          .pillar-anim-0 { animation: pillarAppear0 10s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
          .pillar-anim-1 { animation: pillarAppear1 10s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
          .pillar-anim-2 { animation: pillarAppear2 10s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
          .pillar-anim-3 { animation: pillarAppear3 10s cubic-bezier(0.16, 1, 0.3, 1) infinite; }

          .dot-anim-0 { animation: dotAppear0 10s ease-out infinite; }
          .dot-anim-1 { animation: dotAppear1 10s ease-out infinite; }
          .dot-anim-2 { animation: dotAppear2 10s ease-out infinite; }

          @media (max-width: 991px) {
            .line-anim {
              opacity: 0 !important;
              transform: translateX(-50%) scaleY(0) !important;
              transform-origin: top center !important;
              left: 50% !important;
              right: auto !important;
              top: 60px !important;
              bottom: 60px !important;
              width: 1.5px !important;
              height: auto !important;
              animation: lineGrowAnimMobile 10s cubic-bezier(0.16, 1, 0.3, 1) infinite !important;
            }
            .dot-anim-0 {
              left: 50% !important;
              right: auto !important;
              top: auto !important;
              bottom: -16.5px !important;
              animation: dotAppearMobile0 10s ease-out infinite !important;
            }
            .dot-anim-1 {
              left: 50% !important;
              right: auto !important;
              top: auto !important;
              bottom: -16.5px !important;
              animation: dotAppearMobile1 10s ease-out infinite !important;
            }
            .dot-anim-2 {
              left: 50% !important;
              right: auto !important;
              top: auto !important;
              bottom: -16.5px !important;
              animation: dotAppearMobile2 10s ease-out infinite !important;
            }
          }
        `}</style>

        <div className="section-container">
          <div style={{ marginBottom: '64px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '3px',
                  backgroundColor: '#1B58F4',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: 800,
                  color: '#1B58F4',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                WHAT WE CONNECT
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 42px)',
                fontWeight: 900,
                color: '#060B1E',
                lineHeight: 1.2,
                letterSpacing: '-0.03em',
                margin: 0,
                maxWidth: '100%',
              }}
            >
              <span style={{ display: 'inline-block' }}>Enterprise systems, assets, data and intelligence &mdash;</span>
              <br />
              <span style={{ display: 'inline-block' }}>across complex energy operations.</span>
            </h2>
          </div>

          {/* 4 Connected Pointy Vertical Hexagons Row */}
          <div style={{ position: 'relative', width: '100%' }}>
            {/* Animated Background Connecting Line (Invisible statically, animates in as cards appear) */}
            <div
              className="line-anim"
              style={{
                position: 'absolute',
                top: '50%',
                left: '60px',
                right: '60px',
                height: '1.5px',
                backgroundColor: '#E2E8F0',
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '24px',
                alignItems: 'center',
                justifyItems: 'center',
              }}
            >
              {pillars.map((pillar, idx) => {
                const isHovered = hoveredHex === idx;

                return (
                  <div
                    key={pillar.num}
                    className={`pillar-anim-${idx}`}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      zIndex: isHovered ? 10 : 1,
                      animationPlayState: isHovered ? 'paused' : 'running',
                      opacity: isHovered ? 1 : undefined,
                    }}
                  >
                    <div
                      onMouseEnter={() => setHoveredHex(idx)}
                      onMouseLeave={() => setHoveredHex(null)}
                      style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '230px',
                        height: '260px',
                        backgroundColor: pillar.bg,
                        color: pillar.textColor,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '24px 18px',
                        transform: isHovered ? 'scale(1.08) translateY(-8px)' : 'scale(1)',
                        boxShadow: isHovered
                          ? '0 24px 48px rgba(10, 17, 40, 0.24), 0 0 20px rgba(103, 223, 203, 0.4)'
                          : '0 4px 12px rgba(0, 0, 0, 0.04)',
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                        cursor: 'pointer',
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: 800,
                          color: pillar.numColor,
                          marginBottom: '12px',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {pillar.num}
                      </div>

                      <h3
                        style={{
                          fontSize: '20px',
                          fontWeight: 800,
                          color: pillar.textColor,
                          lineHeight: 1.2,
                          margin: '0 0 12px 0',
                          letterSpacing: '-0.02em',
                          maxWidth: '160px',
                        }}
                      >
                        {pillar.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 500,
                          color: pillar.subColor,
                          lineHeight: 1.45,
                          margin: 0,
                          maxWidth: '170px',
                        }}
                      >
                        {pillar.desc}
                      </p>
                    </div>

                    {/* Connecting Cyan Dot between adjacent cards */}
                    {idx < 3 && (
                      <div
                        className={`dot-anim-${idx}`}
                        style={{
                          position: 'absolute',
                          right: '-16px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '9px',
                          height: '9px',
                          borderRadius: '50%',
                          backgroundColor: '#67DFCB',
                          boxShadow: '0 0 10px rgba(103, 223, 203, 0.9)',
                          zIndex: 2,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <p
            style={{
              fontSize: '15px',
              fontWeight: 600,
              color: '#475569',
              marginTop: '48px',
              textAlign: 'left',
            }}
          >
            One operating picture across upstream, midstream and downstream operations.
          </p>
        </div>
      </section>

      {/* 3. TEN PRIORITIES HEXAGON GRID */}
      <section id="industry-priorities" style={{ padding: '96px 0 110px', backgroundColor: '#F4F7FC', position: 'relative' }}>
        <div className="section-container">
          <div
            style={{
              marginBottom: '56px',
              position: 'relative',
            }}
          >
            {/* Watermark 10 in top right */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                right: '0',
                fontSize: '110px',
                fontWeight: 900,
                color: 'rgba(203, 213, 225, 0.5)',
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              10
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '3px',
                  backgroundColor: '#1B58F4',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: 800,
                  color: '#1B58F4',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                INDUSTRY PRIORITIES
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 3.8vw, 46px)',
                fontWeight: 900,
                color: '#060B1E',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                margin: '0 0 14px 0',
              }}
            >
              Ten priorities on the energy agenda.
            </h2>

            <p
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: '#64748B',
                margin: 0,
                maxWidth: '680px',
                lineHeight: 1.5,
              }}
            >
              Where technology investment turns into uptime, throughput, control and margin.
            </p>
          </div>

          {/* 10 Interlocking Pointy Hexagons Grid (2 Rows of 5) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '16px',
              alignItems: 'center',
              justifyItems: 'center',
            }}
          >
            {priorities.map((item, idx) => {
              const isHovered = hoveredPriority === idx;

              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setHoveredPriority(idx)}
                  onMouseLeave={() => setHoveredPriority(null)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '215px',
                    height: '240px',
                    backgroundColor: item.bg,
                    color: item.textColor,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '24px 16px',
                    transform: isHovered ? 'scale(1.08) translateY(-6px)' : 'scale(1)',
                    boxShadow: isHovered
                      ? '0 20px 40px rgba(10, 17, 40, 0.16)'
                      : item.bg === '#FFFFFF'
                      ? '0 4px 16px rgba(0, 0, 0, 0.04)'
                      : 'none',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    zIndex: isHovered ? 10 : 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: '12.5px',
                      fontWeight: 800,
                      color: item.numColor,
                      marginBottom: '10px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {item.num}
                  </div>

                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 800,
                      color: item.textColor,
                      lineHeight: 1.25,
                      margin: 0,
                      letterSpacing: '-0.02em',
                      maxWidth: '150px',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGY STACK SECTION (Exact Figma Specs: #0D2A75, 620x620 Glow Ellipse #67DFCB 20%) */}
      <section style={{ padding: '84px 0 88px', backgroundColor: '#0D2A75', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        {/* Figma Spec Glow Ellipse (620px x 620px, Top: -140px, Left: 880px, #67DFCB at 20% opacity) */}
        <div
          style={{
            position: 'absolute',
            width: '620px',
            height: '620px',
            top: '-140px',
            right: '-100px',
            background: 'rgba(103, 223, 203, 0.20)',
            filter: 'blur(200px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ marginBottom: '40px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '3px',
                  backgroundColor: '#67DFCB',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: 800,
                  color: '#67DFCB',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                TECHNOLOGY
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 3.8vw, 46px)',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              The stack behind energy operations.
            </h2>
          </div>

          {/* 9 Tech Stack Pills Grid */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              marginBottom: '32px',
            }}
          >
            {techStack.map((tech, idx) => {
              const isHovered = hoveredTech === idx;

              return (
                <div
                  key={tech}
                  onMouseEnter={() => setHoveredTech(idx)}
                  onMouseLeave={() => setHoveredTech(null)}
                  style={{
                    backgroundColor: isHovered ? 'rgba(103, 223, 203, 0.14)' : 'rgba(255, 255, 255, 0.08)',
                    border: isHovered ? '1.5px solid #67DFCB' : '1.2px solid rgba(255, 255, 255, 0.20)',
                    color: '#FFFFFF',
                    padding: '14px 24px',
                    borderRadius: '12px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '9px',
                    transform: isHovered ? 'scale(1.06) translateY(-4px)' : 'scale(1)',
                    boxShadow: isHovered
                      ? '0 12px 28px rgba(10, 17, 40, 0.3), 0 0 18px rgba(103, 223, 203, 0.5)'
                      : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ color: '#67DFCB', fontSize: '15px' }}>•</span>
                  <span>{tech}</span>
                </div>
              );
            })}
          </div>

          {/* Bottom Subtitle Bar Text */}
          <div
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.45)',
              letterSpacing: '0.04em',
            }}
          >
            {techStack.join('  |  ')}
          </div>
        </div>
      </section>

      {/* 5. DEEP CTA BANNER (Exact Figma Specs: Linear Gradient #0A1230 -> #0D2A75 -> #1942B2, 620x620 Ellipse #67DFCB 22%) */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A1230 0%, #0D2A75 50%, #1942B2 100%)',
          color: '#FFFFFF',
          padding: '100px 0 110px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Figma Spec Glow Ellipse (620px x 620px, Top: -20px, Left: 420px, #67DFCB at 22% opacity) */}
        <div
          style={{
            position: 'absolute',
            width: '620px',
            height: '620px',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-10%)',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(200px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Tagline */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            <div style={{ width: '28px', height: '3px', backgroundColor: '#67DFCB', borderRadius: '2px' }} />
            <span
              style={{
                fontSize: '11.5px',
                fontWeight: 800,
                color: '#67DFCB',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              ENERGY, RESOURCES &amp; OIL AND GAS
            </span>
            <div style={{ width: '28px', height: '3px', backgroundColor: '#67DFCB', borderRadius: '2px' }} />
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              margin: '0 auto 24px',
              maxWidth: '840px',
            }}
          >
            Powering the intelligent<br />energy enterprise.
          </h2>

          {/* Cyan Gradient Accent Line */}
          <div
            style={{
              width: '200px',
              height: '4px',
              background: 'linear-gradient(90deg, #67DFCB 0%, #1FA5FF 100%)',
              borderRadius: '9999px',
              margin: '0 auto 36px',
            }}
          />

          {/* 4 Pill Badges */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '44px',
            }}
          >
            {['Enterprise systems', 'Assets', 'Data', 'Intelligence'].map((pill, idx) => {
              const isHovered = hoveredCtaTab === idx;

              return (
                <div
                  key={pill}
                  onMouseEnter={() => setHoveredCtaTab(idx)}
                  onMouseLeave={() => setHoveredCtaTab(null)}
                  style={{
                    backgroundColor: isHovered ? 'rgba(103, 223, 203, 0.16)' : 'rgba(255, 255, 255, 0.08)',
                    border: isHovered ? '1.5px solid #67DFCB' : '1.2px solid rgba(255, 255, 255, 0.22)',
                    color: '#FFFFFF',
                    padding: '10px 24px',
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transform: isHovered ? 'scale(1.10) translateY(-4px)' : 'scale(1)',
                    boxShadow: isHovered
                      ? '0 12px 28px rgba(10, 17, 40, 0.35), 0 0 18px rgba(103, 223, 203, 0.5)'
                      : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ color: '#67DFCB', fontSize: '15px' }}>•</span>
                  <span>{pill}</span>
                </div>
              );
            })}
          </div>

          {/* White CTA Button */}
          <a
            href="#contact"
            onMouseEnter={() => setHoveredCtaBtn(true)}
            onMouseLeave={() => setHoveredCtaBtn(false)}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('#contact');
            }}
            style={{
              background: hoveredCtaBtn ? '#67DFCB' : '#FFFFFF',
              color: '#08194A',
              padding: '16px 40px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '15px',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: hoveredCtaBtn
                ? '0 16px 36px rgba(103, 223, 203, 0.5)'
                : '0 12px 32px rgba(255, 255, 255, 0.25)',
              transform: hoveredCtaBtn ? 'scale(1.05) translateY(-3px)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
            }}
          >
            Talk to Ajiledone about energy
          </a>
        </div>
      </section>

      {/* 6. NEXT STEPS / CONTACT CTA STRIP (Exact Figma Specs: Linear Gradient #265CF4 -> #1FA5FF) */}
      <section
        style={{
          background: 'linear-gradient(90deg, #265CF4 0%, #1FA5FF 100%)',
          color: '#FFFFFF',
          padding: '56px 0',
        }}
      >
        <div
          className="section-container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '28px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 800,
                color: 'rgba(255, 255, 255, 0.75)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              DON'T BE WEIRD
            </div>

            <h3
              style={{
                fontSize: 'clamp(26px, 3.2vw, 38px)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: 0,
                maxWidth: '720px',
                lineHeight: 1.22,
                letterSpacing: '-0.02em',
              }}
            >
              Would you like more information, or<br />
              do you have a question?
            </h3>
          </div>

          <a
            href="#contact"
            onMouseEnter={() => setHoveredContactBtn(true)}
            onMouseLeave={() => setHoveredContactBtn(false)}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('#contact');
            }}
            style={{
              background: '#FFFFFF',
              color: '#265CF4',
              padding: '14px 34px',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '14.5px',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: hoveredContactBtn
                ? '0 16px 36px rgba(0, 0, 0, 0.25)'
                : '0 8px 24px rgba(0, 0, 0, 0.15)',
              transform: hoveredContactBtn ? 'scale(1.08) translateY(-3px)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
            }}
          >
            Contact us
          </a>
        </div>
      </section>
    </div>
  );
};
