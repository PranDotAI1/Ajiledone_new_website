import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface EnterprisePlatformsProps {
  onNavigate: (anchor: string) => void;
}

export const EnterprisePlatformsPage: React.FC<EnterprisePlatformsProps> = ({ onNavigate }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredAgendaPill, setHoveredAgendaPill] = useState<number | null>(null);
  const [activeConnectedPill, setActiveConnectedPill] = useState<number | null>(3);
  const [activeDigitalBlock, setActiveDigitalBlock] = useState<number>(0);
  const [hoveredDigitalBlock, setHoveredDigitalBlock] = useState<number | null>(null);
  const [dashOffset, setDashOffset] = useState<number>(0);
  const [hoveredOracleCap, setHoveredOracleCap] = useState<number | null>(null);

  const connectedAreasList = [
    { id: '01', title: 'Business & Technology Transformation' },
    { id: '02', title: 'AI & Intelligent Enterprise' },
    { id: '03', title: 'Data & Intelligence' },
    { id: '04', title: 'Enterprise Platforms' },
    { id: '05', title: 'Cloud & Modernization' },
    { id: '06', title: 'Digital Engineering' },
  ];

  const activeBoxIndex = 3; // Box 04 Enterprise Platforms (0-indexed: 3)

  const [floatY, setFloatY] = useState<number>(0);

  // Smooth 5px up-and-down floating animation loop for active block
  useEffect(() => {
    let animId: number;
    const start = Date.now();
    const animateFloat = () => {
      const elapsed = (Date.now() - start) / 1000;
      setFloatY(Math.sin(elapsed * 2.5) * 4); // Floating up and down by ~4px
      animId = requestAnimationFrame(animateFloat);
    };
    animId = requestAnimationFrame(animateFloat);
    return () => cancelAnimationFrame(animId);
  }, []);

  // 1. Crawling moving dotted line animation loop
  useEffect(() => {
    let animId: number;
    const step = () => {
      setDashOffset((prev) => (prev - 0.5) % 64);
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  // 2. Top-to-bottom automatic color cycle loop (SAP -> Oracle -> ServiceNow)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDigitalBlock((prev) => (prev + 1) % 3);
    }, 2400);
    return () => clearInterval(interval);
  }, []);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const agendaPills = [
    { num: '01', title: 'Business & Technology Transformation', key: '#bt-transformation' },
    { num: '02', title: 'AI & Intelligent Enterprise', key: '#ai-intelligent-enterprise' },
    { num: '03', title: 'Data & Intelligence', key: '#data-intelligence' },
    { num: '04', title: 'Enterprise Platforms', key: '#enterprise-platforms' },
    { num: '05', title: 'Cloud & Modernization', key: '#cloud-technology-modernization' },
    { num: '06', title: 'Digital Engineering', key: '#digital-engineering' },
  ];

  const pillX = [120, 270, 420, 570, 720, 870];

  const digitalBlocks = [
    { name: 'SAP', subtitle: 'S/4HANA · RISE · BTP' },
    { name: 'Oracle', subtitle: 'Fusion · EBS · OCI' },
    { name: 'ServiceNow', subtitle: 'ITSM · ITOM · CSM' },
  ];

  const platformCards = [
    {
      num: '01',
      title: 'SAP',
      desc: 'From ERP modernization to intelligent enterprise.',
      img: '/images/Ourcapabilities6.png',
      tags: ['S/4HANA', 'RISE', 'BTP', 'Datasphere'],
      linkText: 'See capabilities →',
    },
    {
      num: '02',
      title: 'Oracle',
      desc: 'Transforming enterprise operations through Oracle.',
      img: '/images/Ourcapabilities2.png',
      tags: ['Fusion Cloud', 'EBS', 'EPM', 'OCI'],
      linkText: 'See capabilities →',
    },
    {
      num: '03',
      title: 'ServiceNow',
      desc: 'Connecting workflows across the enterprise.',
      img: '/images/Ourcapabilities3.png',
      tags: ['ITSM', 'ITOM', 'CSM', 'GRC'],
      linkText: 'See capabilities →',
    },
  ];

  const oracleCapabilitiesList = [
    { num: '01', name: 'Oracle Fusion Cloud' },
    { num: '02', name: 'Oracle EBS' },
    { num: '03', name: 'Oracle Financials' },
    { num: '04', name: 'Oracle HCM' },
    { num: '05', name: 'Oracle Payroll' },
    { num: '06', name: 'Oracle EPM' },
    { num: '07', name: 'Oracle Integration Cloud' },
    { num: '08', name: 'OCI' },
    { num: '09', name: 'OTBI' },
    { num: '10', name: 'BI Publisher' },
    { num: '11', name: 'Primavera' },
    { num: '12', name: 'Primavera Cloud' },
    { num: '13', name: 'Unifier' },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#0A1128', backgroundColor: '#FFFFFF' }}>
      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0 110px',
          background: 'linear-gradient(135deg, #06143E 0%, #0D2A75 45%, #1B4AC7 100%)',
          color: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Vertical Background Grid Lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.18,
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                borderRight: i < 7 ? '1px solid rgba(255, 255, 255, 0.25)' : 'none',
              }}
            />
          ))}
        </div>

        {/* Glow Ellipse */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '650px',
            height: '650px',
            background: 'radial-gradient(circle, rgba(82, 224, 203, 0.18) 0%, rgba(82, 224, 203, 0) 70%)',
            filter: 'blur(100px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.65)',
              marginBottom: '32px',
              fontWeight: 500,
            }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#top');
              }}
              style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}
            >
              Home
            </a>
            <ChevronRight size={14} />
            <a
              href="#what-we-do"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#what-we-do');
              }}
              style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}
            >
              What We Do
            </a>
            <ChevronRight size={14} />
            <span style={{ color: '#52E0CB', fontWeight: 600 }}>Enterprise Platforms</span>
          </div>

          <div
            className="hero-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            <div>
              {/* Tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '24px', height: '2px', backgroundColor: '#52E0CB', borderRadius: '1px' }} />
                <span
                  style={{
                    color: '#52E0CB',
                    fontSize: '12.5px',
                    fontWeight: 800,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  04 &bull; ENTERPRISE PLATFORMS
                </span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontSize: 'clamp(38px, 5.2vw, 64px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                }}
              >
                Modernizing the digital core.
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: '17px',
                  lineHeight: 1.65,
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '40px',
                  maxWidth: '620px',
                }}
              >
                Enterprise platforms remain at the center of critical business operations. Ajiledone modernizes these platforms while connecting them with cloud, data, AI, automation and digital experiences.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href="#platforms"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('platforms');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                    padding: '14px 30px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#0A1128';
                    e.currentTarget.style.borderColor = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Explore platforms
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#contact');
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                    padding: '14px 30px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#0A1128';
                    e.currentTarget.style.borderColor = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Talk to Ajiledone
                </a>
              </div>
            </div>

            {/* Right Stacked Core Card Diagram with Crawling Moving Dotted Border */}
            <div
              style={{
                position: 'relative',
                padding: '36px 36px 48px 36px',
              }}
            >
              {/* Animated Moving Dotted Outer SVG Outline (zIndex 1) */}
              <svg
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  overflow: 'visible',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              >
                <rect
                  x="2"
                  y="2"
                  width="calc(100% - 4px)"
                  height="calc(100% - 4px)"
                  rx="32"
                  fill="none"
                  stroke="rgba(82, 224, 203, 0.55)"
                  strokeWidth="1.5"
                  strokeDasharray="8 8"
                  strokeDashoffset={dashOffset}
                />
              </svg>

              {/* Inner Glass Box (zIndex 2) */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.04) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  borderRadius: '24px',
                  padding: '36px 32px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: '#52E0CB',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                  }}
                >
                  DIGITAL CORE
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {digitalBlocks.map((block, idx) => {
                    const isBlockActive =
                      hoveredDigitalBlock !== null
                        ? hoveredDigitalBlock === idx
                        : activeDigitalBlock === idx;

                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredDigitalBlock(idx)}
                        onMouseLeave={() => setHoveredDigitalBlock(null)}
                        onClick={() => {
                          if (idx === 0 && onNavigate) {
                            onNavigate('#sap-transformation');
                          } else if (idx === 1 && onNavigate) {
                            onNavigate('#oracle-section');
                          } else if (idx === 2 && onNavigate) {
                            onNavigate('#servicenow-section');
                          }
                        }}
                        style={{
                          background: isBlockActive
                            ? 'linear-gradient(90deg, #1FA5FF 0%, #52E0CB 100%)'
                            : 'rgba(255, 255, 255, 0.08)',
                          color: isBlockActive ? '#0A1128' : '#FFFFFF',
                          border: isBlockActive
                            ? '1px solid #52E0CB'
                            : '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '16px',
                          padding: '18px 22px',
                          boxShadow: isBlockActive
                            ? '0 12px 28px rgba(82, 224, 203, 0.45)'
                            : 'none',
                          transform: 'none',
                          transition: 'all 0.45s ease',
                          cursor: 'pointer',
                        }}
                      >
                        <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '4px' }}>
                          {block.name}
                        </div>
                        <div
                          style={{
                            fontSize: '12.5px',
                            fontWeight: isBlockActive ? 700 : 500,
                            opacity: isBlockActive ? 0.9 : 0.65,
                          }}
                        >
                          {block.subtitle}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating Bottom Badge Positioned DIRECTLY ON the Bottom Moving Dotted Line (zIndex 5) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0px',
                  left: '50%',
                  transform: `translate(-50%, calc(50% + ${floatY * 0.75}px))`,
                  zIndex: 5,
                  whiteSpace: 'nowrap',
                  transition: 'transform 0.1s linear',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    background: '#67DFCB',
                    color: '#0A1128',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    padding: '9px 26px',
                    borderRadius: '24px',
                    textTransform: 'uppercase',
                    boxShadow: '0 0 20px rgba(103, 223, 203, 0.6), 0 4px 14px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  AT THE CENTER OF OPERATIONS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIX AREAS. ONE CONNECTED AGENDA SECTION (Pre-Selected: 04 Enterprise Platforms) */}
      <section
        style={{
          background: '#070D22',
          padding: '48px 0 40px',
          color: '#FFFFFF',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="section-container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '32px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(26px, 3vw, 36px)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: 0,
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              Six areas. One connected agenda.
            </h2>
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.65)',
                fontSize: '14.5px',
                fontWeight: 500,
              }}
            >
              Every engagement draws on more than one.
            </span>
          </div>

          <div
            style={{ position: 'relative', width: '100%' }}
          >
            <div
              className="connected-pills-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '12px',
                position: 'relative',
                zIndex: 3,
              }}
            >
              {connectedAreasList.map((cap, idx) => {
                const isCurrentActive = activeConnectedPill === idx;

                return (
                  <div
                    key={cap.id}
                    onMouseEnter={() => setActiveConnectedPill(idx)}
                    onTouchStart={() => setActiveConnectedPill(idx)}
                    onClick={() => {
                      const routes = [
                        '#what-we-do',
                        '#ai-intelligent-enterprise',
                        '#data-intelligence',
                        '#enterprise-platforms',
                        '#cloud-technology-modernization',
                        '#digital-engineering',
                      ];
                      if (onNavigate) {
                        onNavigate(routes[idx]);
                      }
                    }}
                    style={{
                      background: isCurrentActive
                        ? '#52E0CB'
                        : 'rgba(255, 255, 255, 0.05)',
                      border: isCurrentActive
                        ? '1px solid #52E0CB'
                        : '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '24px',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: isCurrentActive
                        ? '0 8px 24px rgba(82, 224, 203, 0.4)'
                        : 'none',
                      transform: isCurrentActive ? 'translateY(-4px)' : 'none',
                    }}
                  >
                    <span
                      style={{
                        background: isCurrentActive ? '#070D22' : 'rgba(255, 255, 255, 0.15)',
                        color: isCurrentActive ? '#52E0CB' : '#FFFFFF',
                        fontSize: '11px',
                        fontWeight: 800,
                        padding: '4px 8px',
                        borderRadius: '12px',
                        lineHeight: 1,
                        flexShrink: 0,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {cap.id}
                    </span>
                    <span
                      style={{
                        color: isCurrentActive ? '#070D22' : '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 800,
                        lineHeight: 1.25,
                        whiteSpace: 'normal',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {cap.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <svg
              viewBox="0 0 1200 230"
              style={{
                width: '100%',
                height: '195px',
                overflow: 'visible',
                pointerEvents: 'none',
                marginTop: '8px',
              }}
            >
              {[
                { src: 0, tgt: 1, depth: 60 },
                { src: 0, tgt: 2, depth: 95 },
                { src: 0, tgt: 3, depth: 130 },
                { src: 0, tgt: 4, depth: 165 },
                { src: 0, tgt: 5, depth: 200 },
                { src: 1, tgt: 2, depth: 60 },
                { src: 1, tgt: 3, depth: 95 },
                { src: 1, tgt: 4, depth: 130 },
                { src: 1, tgt: 5, depth: 165 },
                { src: 2, tgt: 3, depth: 60 },
                { src: 2, tgt: 4, depth: 95 },
                { src: 2, tgt: 5, depth: 130 },
                { src: 3, tgt: 4, depth: 60 },
                { src: 3, tgt: 5, depth: 95 },
                { src: 4, tgt: 5, depth: 60 },
              ].map(({ src, tgt, depth }) => {
                const srcX = src * 200 + 100;
                const tgtX = tgt * 200 + 100;
                const isNoActiveTab = activeConnectedPill === null;
                const isConnectedToActive =
                  activeConnectedPill !== null &&
                  (activeConnectedPill === src || activeConnectedPill === tgt);

                return (
                  <path
                    key={`${src}-${tgt}`}
                    d={`M ${srcX} 0 C ${srcX} ${depth}, ${tgtX} ${depth}, ${tgtX} 0`}
                    fill="none"
                    stroke={
                      isNoActiveTab
                        ? 'rgba(82, 224, 203, 0.85)'
                        : isConnectedToActive
                        ? '#52E0CB'
                        : 'rgba(82, 224, 203, 0.35)'
                    }
                    strokeWidth={isNoActiveTab ? '2.2' : isConnectedToActive ? '2.5' : '1.5'}
                    style={{
                      opacity: isNoActiveTab ? 0.95 : isConnectedToActive ? 1 : 0.4,
                      filter: isNoActiveTab
                        ? 'drop-shadow(0 0 8px rgba(82, 224, 203, 0.8))'
                        : isConnectedToActive
                        ? 'drop-shadow(0 0 12px rgba(82, 224, 203, 0.95)) drop-shadow(0 0 4px #52E0CB)'
                        : 'none',
                      transition: 'all 0.45s ease',
                    }}
                  />
                );
              })}

              {/* Glowing Connection Dots under all 6 Pill Boxes */}
              {[0, 1, 2, 3, 4, 5].map((idx) => {
                const nodeX = idx * 200 + 100;
                const currentActivePill = activeConnectedPill ?? 3;
                const isSelectedNode = currentActivePill === idx;

                return (
                  <g key={`node-${idx}`}>
                    <circle
                      cx={nodeX}
                      cy={0}
                      r={isSelectedNode ? 6 : 4}
                      fill="#52E0CB"
                      style={{
                        filter: isSelectedNode
                          ? 'drop-shadow(0 0 10px #52E0CB)'
                          : 'drop-shadow(0 0 5px rgba(82, 224, 203, 0.6))',
                        transition: 'all 0.35s ease',
                      }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </section>

      {/* 3. THE PLATFORMS WE MODERNIZE SECTION */}
      <section id="platforms" style={{ padding: '110px 0', background: '#FFFFFF' }}>
        <div className="section-container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '56px',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '24px', height: '2px', backgroundColor: '#265CF4', borderRadius: '1px' }} />
                <span
                  style={{
                    color: '#265CF4',
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  THE PLATFORMS WE MODERNIZE
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(34px, 4.2vw, 48px)',
                  fontWeight: 800,
                  color: '#0A1128',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  margin: 0,
                }}
              >
                At the center of critical<br />
                business operations.
              </h2>
            </div>

            <a
              href="#technology"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#technology');
              }}
              style={{
                color: '#265CF4',
                fontWeight: 700,
                fontSize: '14.5px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none',
              }}
            >
              Explore technology <ArrowRight size={16} />
            </a>
          </div>

          {/* 3 Platform Capability Cards Grid */}
          <div
            className="responsive-3col-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
            }}
          >
            {platformCards.map((card, idx) => {
              const isHovered = hoveredCard === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid #E2E8F0',
                    boxShadow: isHovered
                      ? '0 24px 48px rgba(10, 17, 40, 0.12)'
                      : '0 8px 24px rgba(10, 17, 40, 0.04)',
                    transform: isHovered ? 'translateY(-6px)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {/* Image Container with Overlay */}
                  <div
                    style={{
                      height: '240px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />

                    {/* Linear Gradient Overlay (#0D2A75 72% -> 5% as per Figma specs) */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(13, 42, 117, 0.72) 0%, rgba(13, 42, 117, 0.05) 100%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Badge */}
                    <span
                      style={{
                        position: 'absolute',
                        top: '18px',
                        left: '18px',
                        background: '#67DFCB',
                        color: '#0A1128',
                        fontSize: '11px',
                        fontWeight: 800,
                        padding: '6px 12px',
                        borderRadius: '16px',
                        zIndex: 2,
                      }}
                    >
                      {card.num}
                    </span>

                    {/* Large Card Title Overlay */}
                    <h3
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '24px',
                        fontSize: '36px',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        margin: 0,
                        zIndex: 2,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '28px' }}>
                    <p
                      style={{
                        fontSize: '15px',
                        color: '#475569',
                        lineHeight: 1.55,
                        marginBottom: '20px',
                        minHeight: '46px',
                        fontWeight: 500,
                      }}
                    >
                      {card.desc}
                    </p>

                    {/* Tag Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                      {card.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            background: '#F1F5F9',
                            color: '#475569',
                            fontSize: '12px',
                            fontWeight: 600,
                            padding: '6px 14px',
                            borderRadius: '16px',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        color: '#265CF4',
                        fontWeight: 700,
                        fontSize: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        if (idx === 0 && onNavigate) {
                          onNavigate('#sap-transformation');
                        } else if (idx === 1 && onNavigate) {
                          onNavigate('#oracle-section');
                        } else if (idx === 2 && onNavigate) {
                          onNavigate('#servicenow-section');
                        }
                      }}
                    >
                      {card.linkText}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ORACLE CAPABILITIES SECTION (EXACT UPLOADED DESIGN) */}
      <section
        id="oracle-capabilities"
        style={{
          background: 'linear-gradient(135deg, #07194D 0%, #0B2875 50%, #0E3188 100%)',
          color: '#FFFFFF',
          padding: '110px 0 120px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Exact Figma Ellipse Glow Effect: #1FA5FF 35% opacity, 680x680px, top 100px, left -160px, blur 250px */}
        <div
          style={{
            position: 'absolute',
            width: '680px',
            height: '680px',
            top: '100px',
            left: '-160px',
            background: 'rgba(31, 165, 255, 0.35)',
            filter: 'blur(250px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            className="hero-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.35fr',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            {/* Left Header & Metric */}
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '24px', height: '2px', backgroundColor: '#52E0CB', borderRadius: '1px' }} />
                <span
                  style={{
                    color: '#52E0CB',
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  ORACLE
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 54px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.025em',
                  marginBottom: '24px',
                }}
              >
                Transforming enterprise<br />
                operations through Oracle.
              </h2>

              <p
                style={{
                  fontSize: '16.5px',
                  color: 'rgba(255, 255, 255, 0.78)',
                  lineHeight: 1.6,
                  marginBottom: '54px',
                  maxWidth: '460px',
                }}
              >
                Our Oracle capabilities span financials, HCM and payroll, planning, integration, infrastructure and project controls.
              </p>

              {/* Large Outlined Number Metric: 13 CAPABILITIES */}
              <div>
                <div
                  style={{
                    fontSize: '96px',
                    fontWeight: 800,
                    color: 'transparent',
                    WebkitTextStroke: '2px rgba(255, 255, 255, 0.35)',
                    lineHeight: 0.9,
                    letterSpacing: '-0.04em',
                  }}
                >
                  13
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: '#52E0CB',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    marginTop: '8px',
                  }}
                >
                  CAPABILITIES
                </div>
              </div>
            </div>

            {/* Right Capability List (2 Columns: 1..7 and 8..13) */}
            <div
              className="oracle-items-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0 40px',
              }}
            >
              {/* Column 1: Items 1..7 */}
              <div>
                {oracleCapabilitiesList.slice(0, 7).map((cap, i) => {
                  const isHovered = hoveredOracleCap === i;
                  return (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredOracleCap(i)}
                      onMouseLeave={() => setHoveredOracleCap(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        padding: '20px 12px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
                        cursor: 'pointer',
                        transform: isHovered ? 'translateX(6px)' : 'none',
                        background: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                        borderRadius: '8px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 800,
                          color: '#52E0CB',
                          letterSpacing: '0.04em',
                          flexShrink: 0,
                        }}
                      >
                        {cap.num}
                      </span>
                      <span
                        style={{
                          fontSize: '16.5px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          lineHeight: 1.3,
                        }}
                      >
                        {cap.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Column 2: Items 8..13 */}
              <div>
                {oracleCapabilitiesList.slice(7, 13).map((cap, i) => {
                  const realIdx = i + 7;
                  const isHovered = hoveredOracleCap === realIdx;
                  return (
                    <div
                      key={realIdx}
                      onMouseEnter={() => setHoveredOracleCap(realIdx)}
                      onMouseLeave={() => setHoveredOracleCap(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        padding: '20px 12px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
                        cursor: 'pointer',
                        transform: isHovered ? 'translateX(6px)' : 'none',
                        background: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                        borderRadius: '8px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 800,
                          color: '#52E0CB',
                          letterSpacing: '0.04em',
                          flexShrink: 0,
                        }}
                      >
                        {cap.num}
                      </span>
                      <span
                        style={{
                          fontSize: '16.5px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          lineHeight: 1.3,
                        }}
                      >
                        {cap.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MODERNIZED AND CONNECTED SECTION */}
      <section
        style={{
          padding: '110px 0 100px',
          background: '#0A1230',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Figma Spec Glow Ellipse: #265CF4 42% opacity with blur(250px) */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '760px',
            height: '760px',
            borderRadius: '50%',
            background: 'rgba(38, 92, 244, 0.42)',
            filter: 'blur(250px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'left', marginBottom: '56px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#67DFCB',
                fontSize: '12.5px',
                fontWeight: 800,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              <div style={{ width: '24px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
              <span>MODERNIZED, AND CONNECTED</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(34px, 4.2vw, 54px)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                marginBottom: '20px',
                maxWidth: '650px',
              }}
            >
              A modern core is only as useful as what it connects to.
            </h2>
            <p
              style={{
                fontSize: '16.5px',
                color: 'rgba(255, 255, 255, 0.78)',
                maxWidth: '600px',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Ajiledone modernizes enterprise platforms while connecting them with cloud, data, AI, automation and digital experiences.
            </p>
          </div>

          {/* Connected Architecture Diagram */}
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            {/* Top 5 Connected Badges */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '20px',
              }}
            >
              {['Cloud', 'Data', 'AI', 'Automation', 'Digital experiences'].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    borderRadius: '24px',
                    padding: '10px 24px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    backdropFilter: 'blur(12px)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#67DFCB',
                      display: 'inline-block',
                      boxShadow: '0 0 8px #67DFCB',
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>

            {/* Connecting SVG Lines Diagram with Mint Node Dots */}
            <svg
              style={{ width: '100%', height: '80px', display: 'block', overflow: 'visible' }}
              viewBox="0 0 960 80"
            >
              {/* Vertical connector lines dropping down from pills */}
              <line x1="72" y1="0" x2="72" y2="35" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
              <line x1="242" y1="0" x2="242" y2="35" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
              <line x1="412" y1="0" x2="412" y2="35" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
              <line x1="638" y1="0" x2="638" y2="35" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
              <line x1="888" y1="0" x2="888" y2="35" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />

              {/* Node Dots on Horizontal Trunk */}
              <circle cx="72" cy="35" r="4" fill="#67DFCB" />
              <circle cx="242" cy="35" r="4" fill="#67DFCB" />
              <circle cx="412" cy="35" r="4" fill="#67DFCB" />
              <circle cx="638" cy="35" r="4" fill="#67DFCB" />
              <circle cx="888" cy="35" r="4" fill="#67DFCB" />

              {/* Main Horizontal Trunk Line */}
              <line x1="72" y1="35" x2="888" y2="35" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />

              {/* Center Vertical Drop Stem Line leading down to Digital Core box */}
              <line x1="480" y1="35" x2="480" y2="80" stroke="#67DFCB" strokeWidth="2.5" />
            </svg>

            {/* Core Box Container */}
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <div
                style={{
                  background: 'linear-gradient(90deg, #1FA5FF 0%, #52E0CB 100%)',
                  borderRadius: '20px',
                  padding: '24px 44px',
                  color: '#0A1230',
                  display: 'inline-block',
                  boxShadow: '0 20px 48px rgba(82, 224, 203, 0.4)',
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: '#0A1230',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                    opacity: 0.85,
                  }}
                >
                  THE DIGITAL CORE
                </div>

                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                  }}
                >
                  SAP &bull; Oracle &bull; ServiceNow
                </div>
              </div>

              <div
                style={{
                  fontSize: '14.5px',
                  color: 'rgba(255, 255, 255, 0.72)',
                  marginTop: '28px',
                  fontWeight: 500,
                }}
              >
                Enterprise platforms remain at the center of critical business operations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT CTA BRAND BANNER */}
      <section
        style={{
          padding: '80px 0',
          background: 'linear-gradient(90deg, #1852EB 0%, #1F7CF7 50%, #22A7FF 100%)',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="section-container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                }}
              >
                DON'T BE WEIRD
              </div>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.2vw, 42px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  margin: 0,
                  maxWidth: '680px',
                }}
              >
                Would you like more information, or<br />
                do you have a question?
              </h2>
            </div>

            <button
              onClick={() => onNavigate('#contact')}
              style={{
                background: '#FFFFFF',
                color: '#1E69F5',
                fontWeight: 700,
                fontSize: '14px',
                padding: '13px 28px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
