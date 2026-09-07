import React, { useState, useEffect, useRef } from 'react';

interface BusinessFunctionsPageProps {
  onNavigate?: (anchor: string) => void;
}

export const BusinessFunctionsPage: React.FC<BusinessFunctionsPageProps> = ({ onNavigate }) => {
  const [hoveredFunctionCard, setHoveredFunctionCard] = useState<number | null>(null);
  const [hoveredMatrixCard, setHoveredMatrixCard] = useState<number | null>(null);
  const [hoveredExploreBtn, setHoveredExploreBtn] = useState<boolean>(false);
  const [hoveredTalkBtn, setHoveredTalkBtn] = useState<boolean>(false);
  const [hoveredContactBtn, setHoveredContactBtn] = useState<boolean>(false);
  const [activeFilterTab, setActiveFilterTab] = useState<string>('All');

  // Hero Section 2-Step Matrix Sequence:
  const [heroSeqStep, setHeroSeqStep] = useState<number>(0);
  const matrixSectionRef = useRef<HTMLDivElement | null>(null);

  // Section 3 ("Why It Matters") Sequential Loop:
  // Step 0: Reset
  // Step 1: "WHY IT MATTERS" tag appears first
  // Step 2: Main title heading appears second
  // Step 3: Mint accent line appears third
  // Step 4: All 8 pill tags appear fourth
  // Step 5+: Pause on full view, then repeat loop continuously!
  const [whySeqStep, setWhySeqStep] = useState<number>(0);
  const whySectionRef = useRef<HTMLDivElement | null>(null);
  const [hoveredWhyTalkBtn, setHoveredWhyTalkBtn] = useState<boolean>(false);
  const [hoveredWhyPill, setHoveredWhyPill] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const matrixElement = matrixSectionRef.current;
    if (!matrixElement) return;

    let timer: any = null;

    const startMatrixLoop = () => {
      if (timer) clearInterval(timer);
      let step = 0;
      setHeroSeqStep(0);

      timer = setInterval(() => {
        step++;
        if (step > 6) {
          step = 0; // Reset to 0 to restart matrix loop continuously
        }
        setHeroSeqStep(step > 2 ? 2 : step);
      }, 1400); // Slower, smoother 1400ms timing per step; matrix stays visible for 5.6s
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startMatrixLoop();
          } else {
            if (timer) clearInterval(timer);
            setHeroSeqStep(0);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(matrixElement);

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const whyElement = whySectionRef.current;
    if (!whyElement) return;

    let whyTimer: any = null;

    const startWhyLoop = () => {
      if (whyTimer) clearInterval(whyTimer);
      let step = 0;
      setWhySeqStep(0);

      whyTimer = setInterval(() => {
        step++;
        if (step > 8) {
          step = 0; // Loop back continuously
        }
        setWhySeqStep(step > 4 ? 4 : step);
      }, 1000); // 1000ms timing per step; stays fully visible for 4s before loop
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startWhyLoop();
          } else {
            if (whyTimer) clearInterval(whyTimer);
            setWhySeqStep(0);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(whyElement);

    return () => {
      if (whyTimer) clearInterval(whyTimer);
      observer.disconnect();
    };
  }, []);

  const businessFunctionsData = [
    {
      id: 'finance',
      num: '01',
      title: 'Finance',
      count: '8',
      desc: 'How the business closes, plans and reports.',
      headerBg: '#08194A',
      headerTextColor: '#FFFFFF',
      numBg: 'rgba(255, 255, 255, 0.16)',
      numColor: '#FFFFFF',
      countColor: 'rgba(255, 255, 255, 0.45)',
      capabilities: [
        'Finance Transformation',
        'Financial Reporting',
        'Record to Report',
        'Working Capital',
        'Planning',
        'AI for Finance',
        'Treasury',
        'CFO Analytics',
      ],
    },
    {
      id: 'supply-chain',
      num: '02',
      title: 'Supply Chain',
      count: '8',
      desc: 'How the business plans, sources, makes and moves.',
      headerBg: '#F1F5F9',
      headerTextColor: '#0A1128',
      numBg: '#FFFFFF',
      numColor: '#1B58F4',
      countColor: '#CBD5E1',
      capabilities: [
        'Planning',
        'Transportation',
        'Procurement',
        'Inventory',
        'Manufacturing',
        'Supply Chain Analytics',
        'Warehousing',
        'Supply Chain AI',
      ],
    },
    {
      id: 'procurement',
      num: '03',
      title: 'Procurement',
      count: '5',
      desc: 'How the business buys — and what it can see about spend.',
      headerBg: '#F1F5F9',
      headerTextColor: '#0A1128',
      numBg: '#FFFFFF',
      numColor: '#1B58F4',
      countColor: '#CBD5E1',
      capabilities: [
        'Source-to-Pay',
        'Procurement Automation',
        'Supplier Management',
        'Ariba',
        'Spend Analytics',
      ],
    },
    {
      id: 'manufacturing',
      num: '04',
      title: 'Manufacturing',
      count: '7',
      desc: 'How production, quality and maintenance actually run.',
      headerBg: '#1B58F4',
      headerTextColor: '#FFFFFF',
      numBg: 'rgba(255, 255, 255, 0.2)',
      numColor: '#FFFFFF',
      countColor: 'rgba(255, 255, 255, 0.55)',
      capabilities: [
        'Production',
        'Digital Manufacturing',
        'Quality',
        'IoT',
        'Maintenance',
        'Predictive Maintenance',
        'Planning',
      ],
    },
    {
      id: 'projects-assets',
      num: '05',
      title: 'Projects & Assets',
      count: '7',
      desc: 'How capital work and physical assets are controlled.',
      headerBg: '#F1F5F9',
      headerTextColor: '#0A1128',
      numBg: '#FFFFFF',
      numColor: '#1B58F4',
      countColor: '#CBD5E1',
      capabilities: [
        'Project Management',
        'Capital Projects',
        'Portfolio Management',
        'Primavera',
        'Asset Management',
        'Unifier',
        'Maintenance',
      ],
    },
    {
      id: 'people',
      num: '06',
      title: 'People',
      count: '5',
      desc: 'How the workforce is paid, supported and understood.',
      headerBg: '#F1F5F9',
      headerTextColor: '#0A1128',
      numBg: '#FFFFFF',
      numColor: '#1B58F4',
      countColor: '#CBD5E1',
      capabilities: [
        'HCM',
        'Employee Experience',
        'Payroll',
        'Automation',
        'Workforce Analytics',
      ],
    },
    {
      id: 'customer',
      num: '07',
      title: 'Customer',
      count: '6',
      desc: 'How the business sells, serves and personalizes.',
      headerBg: '#52E0CB',
      headerTextColor: '#08194A',
      numBg: '#FFFFFF',
      numColor: '#08194A',
      countColor: 'rgba(8, 25, 74, 0.45)',
      capabilities: [
        'Customer Experience',
        'Personalization',
        'Digital Commerce',
        'Customer Analytics',
        'CRM',
        'AI',
      ],
    },
    {
      id: 'risk-governance',
      num: '08',
      title: 'Risk & Governance',
      count: '6',
      desc: 'How the business stays controlled, compliant and secure.',
      headerBg: '#F1F5F9',
      headerTextColor: '#0A1128',
      numBg: '#FFFFFF',
      numColor: '#1B58F4',
      countColor: '#CBD5E1',
      capabilities: [
        'GRC',
        'Compliance',
        'Data Governance',
        'Security',
        'AI Governance',
        'Enterprise Risk',
      ],
    },
  ];

  const matrixItems = [
    { title: 'Finance', id: 'finance' },
    { title: 'Supply Chain', id: 'supply-chain' },
    { title: 'Procurement', id: 'procurement' },
    { title: 'Manufacturing', id: 'manufacturing' },
    { title: 'THE INTELLIGENT ENTERPRISE', id: 'core', isCore: true },
    { title: 'Projects & Assets', id: 'projects-assets' },
    { title: 'People', id: 'people' },
    { title: 'Customer', id: 'customer' },
    { title: 'Risk & Governance', id: 'risk-governance' },
  ];

  const scrollToFunction = (funcId: string) => {
    const el = document.getElementById(`func-${funcId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#FFFFFF', color: '#0A1128' }}>
      
      {/* 1. HERO SECTION (EXACT FIGMA COLORS: #08194A -> #0D2A75 -> #1B4AC7) */}
      <section
        style={{
          background: 'linear-gradient(135deg, #08194A 0%, #0D2A75 48%, #1B4AC7 100%)',
          color: '#FFFFFF',
          padding: '120px 0 110px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Vertical Background Grid Lines Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            pointerEvents: 'none',
            opacity: 0.08,
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={{ borderRight: '1px solid #FFFFFF', height: '100%' }} />
          ))}
        </div>

        {/* Figma Glow Ellipse 1: #1FA5FF 40% blur 210 */}
        <div
          style={{
            position: 'absolute',
            width: '480px',
            height: '480px',
            top: '20px',
            right: '80px',
            background: 'rgba(31, 165, 255, 0.40)',
            filter: 'blur(210px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Figma Glow Ellipse 2: #67DFCB 22% blur 230 */}
        <div
          style={{
            position: 'absolute',
            width: '620px',
            height: '620px',
            top: '160px',
            right: '220px',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '32px' }}>
            <span
              style={{ cursor: 'pointer', transition: 'color 0.2s ease' }}
              onClick={() => onNavigate && onNavigate('#home')}
            >
              Home
            </span>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{ color: '#52E0CB', fontWeight: 600 }}>Business Functions</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            {/* Left Hero Column */}
            <div>
              {/* Tag Ribbon */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '24px',
                }}
              >
                <div style={{ width: '28px', height: '2px', backgroundColor: '#52E0CB' }} />
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    color: '#52E0CB',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  BUSINESS FUNCTIONS
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 56px)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                }}
              >
                Transformation<br />
                across the enterprise.
              </h1>

              <p
                style={{
                  fontSize: '16.5px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.65,
                  maxWidth: '520px',
                  marginBottom: '40px',
                  fontWeight: 400,
                }}
              >
                Technology transformation ultimately changes how business functions operate — how finance closes, how supply chains plan, how people are hired and how risk is governed.
              </p>

              {/* Stats Counters */}
              <div
                style={{
                  display: 'flex',
                  gap: '48px',
                  marginBottom: '44px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '44px',
                      fontWeight: 900,
                      color: '#52E0CB',
                      lineHeight: 1,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    8
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 600, marginTop: '6px' }}>
                    Business functions
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '44px',
                      fontWeight: 900,
                      color: '#52E0CB',
                      lineHeight: 1,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    52
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 600, marginTop: '6px' }}>
                    Capability areas
                  </div>
                </div>
              </div>

              {/* Action Buttons (Colorless statically, fill on hover) */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href="#landscape"
                  onMouseEnter={() => setHoveredExploreBtn(true)}
                  onMouseLeave={() => setHoveredExploreBtn(false)}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('landscape')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    background: hoveredExploreBtn ? '#FFFFFF' : 'transparent',
                    color: hoveredExploreBtn ? '#08194A' : '#FFFFFF',
                    border: '1.5px solid #FFFFFF',
                    padding: '14px 34px',
                    borderRadius: '30px',
                    fontWeight: 800,
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: hoveredExploreBtn ? '0 10px 24px rgba(255, 255, 255, 0.25)' : 'none',
                  }}
                >
                  Explore the functions
                </a>

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
                    borderRadius: '30px',
                    fontWeight: 800,
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: hoveredTalkBtn ? '0 10px 24px rgba(103, 223, 203, 0.4)' : 'none',
                  }}
                >
                  Talk to Ajiledone
                </a>
              </div>
            </div>

            {/* Right Matrix Artwork Grid */}
            <div ref={matrixSectionRef} style={{ position: 'relative' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '14px',
                }}
              >
                {matrixItems.map((item, mIdx) => {
                  // Sequence logic:
                  // Outer 8 blocks appear ALL TOGETHER at Step 1 (heroSeqStep >= 1)
                  // Central THE ENTERPRISE card appears AT LAST glowing at Step 2 (heroSeqStep >= 2)
                  const isVisible = item.isCore ? heroSeqStep >= 2 : heroSeqStep >= 1;

                  return (
                    <div
                      key={mIdx}
                      onMouseEnter={() => setHoveredMatrixCard(mIdx)}
                      onMouseLeave={() => setHoveredMatrixCard(null)}
                      onClick={() => {
                        if (item.isCore && onNavigate) {
                          onNavigate('#ajiledone-intelligent-enterprise');
                        } else {
                          scrollToFunction(item.id);
                        }
                      }}
                      style={{
                        background: item.isCore
                          ? 'linear-gradient(135deg, #67DFCB 0%, #1FA5FF 100%)'
                          : hoveredMatrixCard === mIdx
                          ? 'rgba(255, 255, 255, 0.22)'
                          : 'rgba(255, 255, 255, 0.08)',
                        color: item.isCore ? '#08194A' : '#FFFFFF',
                        borderRadius: '16px',
                        padding: item.isCore ? '22px 14px' : '24px 14px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        border: item.isCore ? 'none' : '1px solid rgba(255, 255, 255, 0.22)',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? (hoveredMatrixCard === mIdx ? 'scale(1.06) translateY(-4px)' : 'scale(1)')
                          : item.isCore
                          ? 'scale(0.85)'
                          : 'scale(0.92) translateY(18px)',
                        transition: item.isCore
                          ? 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
                          : 'all 1.0s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: item.isCore
                          ? (heroSeqStep >= 2 ? '0 0 45px rgba(103, 223, 203, 0.75)' : 'none')
                          : hoveredMatrixCard === mIdx
                          ? '0 12px 28px rgba(255, 255, 255, 0.18)'
                          : 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        minHeight: '100px',
                        pointerEvents: isVisible ? 'auto' : 'none',
                      }}
                    >
                      {item.isCore ? (
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '0.12em', color: '#08194A', marginBottom: '2px' }}>
                            THE
                          </div>
                          <div style={{ fontSize: '14px', fontWeight: 900, color: '#08194A', lineHeight: 1.2 }}>
                            ENTERPRISE
                          </div>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '6px', height: '6px', backgroundColor: '#67DFCB', borderRadius: '50%', flexShrink: 0 }} />
                          <span style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.3 }}>
                            {item.title}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div
                style={{
                  textAlign: 'center',
                  marginTop: '18px',
                  fontSize: '11px',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.65)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                EVERY FUNCTION TOUCHES THE CORE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EIGHT BUSINESS FUNCTIONS GRID SECTION */}
      <section
        id="landscape"
        style={{
          backgroundColor: '#F8FAFC',
          padding: '110px 0 120px',
        }}
      >
        <div className="section-container">
          
          {/* Header Row with Filter Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '56px',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#1B58F4',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                &mdash; WHERE TRANSFORMATION LANDS &mdash;
              </div>

              <h2
                style={{
                  fontSize: 'clamp(30px, 3.6vw, 46px)',
                  fontWeight: 900,
                  color: '#0A1128',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  margin: 0,
                }}
              >
                Eight business functions.
              </h2>
            </div>

            {/* Function Filter Tabs Bar separated by dots */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                alignItems: 'center',
                fontSize: '13px',
                color: '#64748B',
                fontWeight: 600,
              }}
            >
              {businessFunctionsData.map((f, idx) => {
                const isActive = activeFilterTab === f.title;
                return (
                  <React.Fragment key={f.id}>
                    {idx > 0 && <span style={{ color: '#CBD5E1' }}>·</span>}
                    <span
                      onClick={() => setActiveFilterTab(activeFilterTab === f.title ? 'All' : f.title)}
                      style={{
                        color: isActive ? '#1B58F4' : '#64748B',
                        fontWeight: isActive ? 800 : 600,
                        cursor: 'pointer',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {f.title}
                    </span>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* 8 Detailed Cards Grid with Dynamic Hover Enlargement */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(520px, 1fr))',
              gap: '32px',
            }}
          >
            {businessFunctionsData
              .filter((func) => activeFilterTab === 'All' || activeFilterTab === func.title)
              .map((func, fIdx) => (
                <div
                  key={func.id}
                  id={`func-${func.id}`}
                  onMouseEnter={() => setHoveredFunctionCard(fIdx)}
                  onMouseLeave={() => setHoveredFunctionCard(null)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: hoveredFunctionCard === fIdx
                      ? '0 24px 55px rgba(10, 17, 40, 0.15)'
                      : '0 4px 20px rgba(0, 0, 0, 0.04)',
                    border: '1px solid #E2E8F0',
                    transform: hoveredFunctionCard === fIdx ? 'scale(1.03) translateY(-6px)' : 'scale(1) translateY(0)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {/* Card Header Header Block */}
                  <div
                    style={{
                      background: func.headerBg,
                      color: func.headerTextColor,
                      padding: '28px 32px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          marginBottom: '8px',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 800,
                            background: func.numBg,
                            color: func.numColor,
                            padding: '4px 10px',
                            borderRadius: '12px',
                            letterSpacing: '0.06em',
                          }}
                        >
                          {func.num}
                        </span>
                        <h3 style={{ fontSize: '24px', fontWeight: 900, margin: 0, letterSpacing: '-0.02em', color: func.headerTextColor }}>
                          {func.title}
                        </h3>
                      </div>
                      <p style={{ fontSize: '13.5px', color: func.headerTextColor, opacity: 0.85, margin: 0, fontWeight: 450 }}>
                        {func.desc}
                      </p>
                    </div>

                    <div
                      style={{
                        fontSize: '32px',
                        fontWeight: 900,
                        color: func.countColor,
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: 1,
                        flexShrink: 0,
                      }}
                    >
                      {func.count}
                    </div>
                  </div>

                  {/* Capabilities List Grid inside Card */}
                  <div style={{ padding: '28px 32px 32px' }}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '0 24px',
                      }}
                    >
                      {func.capabilities.map((cap, capIdx) => (
                        <div
                          key={capIdx}
                          onClick={() => {
                            if (onNavigate) {
                              if (cap.toLowerCase().includes('sap')) onNavigate('#sap-transformation');
                              else if (cap.toLowerCase().includes('ai')) onNavigate('#ai-intelligent-enterprise');
                              else if (cap.toLowerCase().includes('data')) onNavigate('#data-intelligence');
                              else if (cap.toLowerCase().includes('engineering')) onNavigate('#digital-engineering');
                              else if (cap.toLowerCase().includes('cloud')) onNavigate('#cloud-technology-modernization');
                              else onNavigate('#capabilities');
                            }
                          }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '13.5px',
                            fontWeight: 700,
                            color: '#1E293B',
                            cursor: 'pointer',
                            padding: '12px 0',
                            borderBottom: '1px solid #F1F5F9',
                            transition: 'color 0.2s ease',
                          }}
                        >
                          <span style={{ width: '6px', height: '6px', backgroundColor: '#52E0CB', borderRadius: '50%', flexShrink: 0 }} />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* 3. SECTION: WHY IT MATTERS (FUNNEL CONVERGENCE) */}
      <section
        ref={whySectionRef}
        style={{
          background: 'linear-gradient(135deg, #0A1230 0%, #0D2A75 50%, #1942B2 100%)',
          color: '#FFFFFF',
          padding: '110px 0 120px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Layer Blur from Figma specs: #67DFCB 22%, Blur 230px */}
        <div
          style={{
            position: 'absolute',
            width: '640px',
            height: '640px',
            top: '-30px',
            left: 'calc(50% - 320px)',
            background: '#67DFCB',
            opacity: 0.22,
            filter: 'blur(230px)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Step 1: WHY IT MATTERS Header Tag */}
          <div
            style={{
              fontSize: '12.5px',
              fontWeight: 800,
              color: '#67DFCB',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              opacity: whySeqStep >= 1 ? 1 : 0,
              transform: whySeqStep >= 1 ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            &mdash; WHY IT MATTERS &mdash;
          </div>

          {/* Step 2: Main Paragraph Line */}
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 48px)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.22,
              letterSpacing: '-0.025em',
              maxWidth: '860px',
              margin: '0 auto',
              opacity: whySeqStep >= 2 ? 1 : 0,
              transform: whySeqStep >= 2 ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Technology transformation ultimately changes how business functions operate.
          </h2>

          {/* Step 3: Mint Horizontal Accent Line */}
          <div
            style={{
              width: whySeqStep >= 3 ? '180px' : '0px',
              height: '4px',
              background: '#67DFCB',
              borderRadius: '9999px',
              margin: '28px auto 44px',
              boxShadow: '0 0 16px rgba(103, 223, 203, 0.6)',
              opacity: whySeqStep >= 3 ? 1 : 0,
              transition: 'all 0.6s ease-out',
            }}
          />

          {/* Step 4: 8 Pill Tabs (Row 1: 7 pills, Row 2: Risk & Governance centered) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
              maxWidth: '1200px',
              width: '100%',
              margin: '0 auto 48px',
              opacity: whySeqStep >= 4 ? 1 : 0,
              transform: whySeqStep >= 4 ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Row 1: 7 Pill Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 12px', width: '100%' }}>
              {[
                { name: 'Finance', id: 'finance' },
                { name: 'Supply Chain', id: 'supply-chain' },
                { name: 'Procurement', id: 'procurement' },
                { name: 'Manufacturing', id: 'manufacturing' },
                { name: 'Projects & Assets', id: 'projects-assets' },
                { name: 'People', id: 'people' },
                { name: 'Customer', id: 'customer' },
              ].map((pill) => {
                const isHovered = hoveredWhyPill === pill.id;
                return (
                  <div
                    key={pill.id}
                    onMouseEnter={() => setHoveredWhyPill(pill.id)}
                    onMouseLeave={() => setHoveredWhyPill(null)}
                    onClick={() => scrollToFunction(pill.id)}
                    style={{
                      background: isHovered ? 'rgba(255, 255, 255, 0.22)' : 'rgba(255, 255, 255, 0.08)',
                      border: isHovered ? '1px solid rgba(103, 223, 203, 0.8)' : '1px solid rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(10px)',
                      color: '#FFFFFF',
                      padding: '8.5px 18px',
                      borderRadius: '24px',
                      fontSize: '13.5px',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transform: isHovered ? 'scale(1.08) translateY(-2px)' : 'scale(1) translateY(0)',
                      boxShadow: isHovered ? '0 8px 22px rgba(103, 223, 203, 0.35)' : 'none',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', backgroundColor: '#67DFCB', borderRadius: '50%', flexShrink: 0 }} />
                    <span>{pill.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Row 2: Risk & Governance Pill Centered */}
            <div
              onMouseEnter={() => setHoveredWhyPill('risk-governance')}
              onMouseLeave={() => setHoveredWhyPill(null)}
              onClick={() => scrollToFunction('risk-governance')}
              style={{
                background: hoveredWhyPill === 'risk-governance' ? 'rgba(255, 255, 255, 0.22)' : 'rgba(255, 255, 255, 0.08)',
                border: hoveredWhyPill === 'risk-governance' ? '1px solid rgba(103, 223, 203, 0.8)' : '1px solid rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
                padding: '8.5px 18px',
                borderRadius: '24px',
                fontSize: '13.5px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transform: hoveredWhyPill === 'risk-governance' ? 'scale(1.08) translateY(-2px)' : 'scale(1) translateY(0)',
                boxShadow: hoveredWhyPill === 'risk-governance' ? '0 8px 22px rgba(103, 223, 203, 0.35)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span style={{ width: '6px', height: '6px', backgroundColor: '#67DFCB', borderRadius: '50%', flexShrink: 0 }} />
              <span>Risk &amp; Governance</span>
            </div>
          </div>

          {/* Talk to Ajiledone Button: ALWAYS APPEARS and ENLARGES ON HOVER ONLY */}
          <div>
            <a
              href="#contact"
              onMouseEnter={() => setHoveredWhyTalkBtn(true)}
              onMouseLeave={() => setHoveredWhyTalkBtn(false)}
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('#contact');
              }}
              style={{
                background: '#FFFFFF',
                color: '#1942B2',
                padding: '16px 44px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '16px',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: hoveredWhyTalkBtn
                  ? '0 16px 40px rgba(0, 0, 0, 0.35), 0 0 25px rgba(255, 255, 255, 0.4)'
                  : '0 8px 24px rgba(0, 0, 0, 0.25)',
                transform: hoveredWhyTalkBtn ? 'scale(1.08)' : 'scale(1)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
              }}
            >
              Talk to Ajiledone
            </a>
          </div>

        </div>
      </section>

      {/* 4. SECTION: CALLOUT RIBBON (DON'T BE WEIRD) */}
      <section
        style={{
          background: 'linear-gradient(90deg, #265CF4 0%, #1FA5FF 100%)',
          color: '#FFFFFF',
          padding: '70px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            className="callout-container"
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
                  fontSize: '12px',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.85)',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                DON'T BE WEIRD
              </div>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.4vw, 42px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.18,
                  margin: 0,
                  letterSpacing: '-0.025em',
                }}
              >
                Would you like more information, or<br />
                do you have a question?
              </h2>
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
                padding: '16px 38px',
                borderRadius: '30px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-block',
                transform: hoveredContactBtn ? 'scale(1.08) translateY(-3px)' : 'scale(1)',
                boxShadow: hoveredContactBtn
                  ? '0 16px 36px rgba(0, 0, 0, 0.25)'
                  : '0 8px 24px rgba(0, 0, 0, 0.12)',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
