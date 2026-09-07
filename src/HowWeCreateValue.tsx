import React, { useState, useEffect, useRef } from 'react';

interface HowWeCreateValuePageProps {
  onNavigate?: (anchor: string) => void;
}

export const HowWeCreateValuePage: React.FC<HowWeCreateValuePageProps> = ({ onNavigate }) => {
  const [hoveredPhaseCard, setHoveredPhaseCard] = useState<number | null>(null);
  const [hoveredMatrixCard, setHoveredMatrixCard] = useState<number | null>(null);
  const [hoveredWalkBtn, setHoveredWalkBtn] = useState<boolean>(false);
  const [hoveredTalkBtn, setHoveredTalkBtn] = useState<boolean>(false);
  const [hoveredContactBtn, setHoveredContactBtn] = useState<boolean>(false);
  const [hoveredWhyStartBtn, setHoveredWhyStartBtn] = useState<boolean>(false);
  const [hoveredWhyPill, setHoveredWhyPill] = useState<string | null>(null);
  const [activeFilterTab, setActiveFilterTab] = useState<string>('All');

  // Hero Section 2-Step Funnel Matrix Sequence:
  const [heroSeqStep, setHeroSeqStep] = useState<number>(0);
  const matrixSectionRef = useRef<HTMLDivElement | null>(null);

  // Section 3 ("Why It Matters / How We Create Value") Sequential Loop:
  const [whySeqStep, setWhySeqStep] = useState<number>(0);
  const whySectionRef = useRef<HTMLDivElement | null>(null);

  // Dynamic Percentage Counter state for Hero Progress Bars:
  const [animatedPcts, setAnimatedPcts] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    if (heroSeqStep === 1) {
      let frame = 0;
      const totalFrames = 36;
      const targets = [17, 33, 50, 67, 83, 100];

      const animInterval = setInterval(() => {
        frame++;
        const progress = Math.min(frame / totalFrames, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setAnimatedPcts(targets.map((target) => Math.round(target * ease)));

        if (frame >= totalFrames) {
          clearInterval(animInterval);
        }
      }, 30);

      return () => clearInterval(animInterval);
    } else if (heroSeqStep === 0) {
      setAnimatedPcts([0, 0, 0, 0, 0, 0]);
    }
  }, [heroSeqStep]);

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
          step = 0; // Reset loop continuously
        }
        setHeroSeqStep(step > 2 ? 2 : step);
      }, 1400); // 1400ms timing per step
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
      }, 1000); // 1000ms timing per step reveal
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

  const phasesData = [
    {
      id: 'discover',
      num: '01',
      title: 'DISCOVER',
      subTitle: 'Discover',
      desc: 'Understand the organization, business objectives, technology landscape, challenges and opportunities.',
      fillPct: '17%',
      pctText: '17%',
      dotColor: '#CBD5E1',
      numStroke: '2px #CBD5E1',
      numStrokeColor: '#CBD5E1',
      cardBg: '#F4F7FC',
      cardTextColor: '#475569',
      pillBg: '#EBF0F9',
      pillNumBg: '#FFFFFF',
      pillNumColor: '#1B58F4',
      pillTitleColor: '#0A1128',
      headerBg: '#F1F5F9',
      headerTextColor: '#0A1128',
      numBg: '#0A1128',
      numColor: '#FFFFFF',
      countColor: '#0A1128',
    },
    {
      id: 'define',
      num: '02',
      title: 'DEFINE',
      subTitle: 'Define',
      desc: 'Establish transformation priorities, business cases, success measures and the roadmap forward.',
      fillPct: '33%',
      pctText: '33%',
      dotColor: '#CBD5E1',
      numStroke: '2px #CBD5E1',
      numStrokeColor: '#CBD5E1',
      cardBg: '#F4F7FC',
      cardTextColor: '#475569',
      pillBg: '#EBF0F9',
      pillNumBg: '#FFFFFF',
      pillNumColor: '#1B58F4',
      pillTitleColor: '#0A1128',
      headerBg: '#F1F5F9',
      headerTextColor: '#0A1128',
      numBg: '#0A1128',
      numColor: '#FFFFFF',
      countColor: '#0A1128',
    },
    {
      id: 'architect',
      num: '03',
      title: 'ARCHITECT',
      subTitle: 'Architect',
      desc: 'Design the target environment across applications, data, AI, cloud, integration, security and infrastructure.',
      fillPct: '50%',
      pctText: '50%',
      dotColor: '#1B58F4',
      numStroke: '2px #1B58F4',
      numStrokeColor: '#1B58F4',
      cardBg: '#1B58F4',
      cardTextColor: 'rgba(255, 255, 255, 0.92)',
      pillBg: 'rgba(255, 255, 255, 0.2)',
      pillNumBg: '#FFFFFF',
      pillNumColor: '#1B58F4',
      pillTitleColor: '#FFFFFF',
      headerBg: '#1B58F4',
      headerTextColor: '#FFFFFF',
      numBg: 'rgba(255, 255, 255, 0.2)',
      numColor: '#FFFFFF',
      countColor: '#FFFFFF',
    },
    {
      id: 'engineer',
      num: '04',
      title: 'ENGINEER',
      subTitle: 'Engineer',
      desc: 'Build, configure, integrate, migrate, automate and deploy.',
      fillPct: '67%',
      pctText: '67%',
      dotColor: '#CBD5E1',
      numStroke: '2px #CBD5E1',
      numStrokeColor: '#CBD5E1',
      cardBg: '#F4F7FC',
      cardTextColor: '#475569',
      pillBg: '#EBF0F9',
      pillNumBg: '#FFFFFF',
      pillNumColor: '#1B58F4',
      pillTitleColor: '#0A1128',
      headerBg: '#F1F5F9',
      headerTextColor: '#0A1128',
      numBg: '#0A1128',
      numColor: '#FFFFFF',
      countColor: '#0A1128',
    },
    {
      id: 'transform',
      num: '05',
      title: 'TRANSFORM',
      subTitle: 'Transform',
      desc: 'Drive process change, adoption, operational readiness and business outcomes.',
      fillPct: '83%',
      pctText: '83%',
      dotColor: '#52E0CB',
      numStroke: '2px #52E0CB',
      numStrokeColor: '#52E0CB',
      cardBg: '#52E0CB',
      cardTextColor: '#0A1128',
      pillBg: 'rgba(10, 17, 40, 0.1)',
      pillNumBg: '#0A1128',
      pillNumColor: '#FFFFFF',
      pillTitleColor: '#0A1128',
      headerBg: '#52E0CB',
      headerTextColor: '#0A1128',
      numBg: '#0A1128',
      numColor: '#FFFFFF',
      countColor: '#0A1128',
    },
    {
      id: 'evolve',
      num: '06',
      title: 'EVOLVE',
      subTitle: 'Evolve',
      desc: 'Continually improve through analytics, AI, automation, modernization and innovation.',
      fillPct: '100%',
      pctText: '100%',
      dotColor: '#0A1128',
      numStroke: '2px #1B58F4',
      numStrokeColor: '#1B58F4',
      cardBg: '#0A1128',
      cardTextColor: 'rgba(255, 255, 255, 0.88)',
      pillBg: 'rgba(255, 255, 255, 0.15)',
      pillNumBg: 'rgba(255, 255, 255, 0.2)',
      pillNumColor: '#FFFFFF',
      pillTitleColor: '#FFFFFF',
      headerBg: '#0A1128',
      headerTextColor: '#FFFFFF',
      numBg: 'rgba(255, 255, 255, 0.16)',
      numColor: '#FFFFFF',
      countColor: '#FFFFFF',
    },
  ];

  const scrollToPhase = (id: string) => {
    const element = document.getElementById(`phase-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#FFFFFF', color: '#0A1128' }}>
      
      {/* 1. HERO SECTION (EXACT FIGMA GRADIENT: #08194A -> #0D2A75 -> #1B4AC7) */}
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

        {/* Figma Glow Ellipse 1: #1FA5FF 40% blur 200 */}
        <div
          style={{
            position: 'absolute',
            width: '480px',
            height: '480px',
            top: '20px',
            left: '1010px',
            background: 'rgba(31, 165, 255, 0.40)',
            filter: 'blur(200px)',
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
            top: '240px',
            left: '850px',
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
            <span style={{ color: '#52E0CB', fontWeight: 600 }}>How we create value</span>
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
                  HOW WE CREATE VALUE
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(38px, 4.8vw, 60px)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                }}
              >
                From ambition<br />
                to impact.
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
                Six phases that take a transformation from a first conversation to something the business can actually feel — and keep improving after go-live.
              </p>

              {/* Action Buttons (Colorless statically, fill on hover) */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <a
                  href="#phases"
                  onMouseEnter={() => setHoveredWalkBtn(true)}
                  onMouseLeave={() => setHoveredWalkBtn(false)}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('phases')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    background: hoveredWalkBtn ? '#FFFFFF' : 'transparent',
                    color: hoveredWalkBtn ? '#08194A' : '#FFFFFF',
                    border: '1.5px solid #FFFFFF',
                    padding: '14px 34px',
                    borderRadius: '9999px',
                    fontWeight: 800,
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    transform: hoveredWalkBtn ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
                    boxShadow: hoveredWalkBtn ? '0 12px 28px rgba(255, 255, 255, 0.35)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  Walk the six phases
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
                    borderRadius: '9999px',
                    fontWeight: 800,
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    transform: hoveredTalkBtn ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
                    boxShadow: hoveredTalkBtn ? '0 10px 24px rgba(103, 223, 203, 0.4)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  Talk to Ajiledone
                </a>
              </div>

              {/* Sub filter tabs bar */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontSize: '12px', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 700, letterSpacing: '0.08em' }}>
                {phasesData.map((p, idx) => (
                  <React.Fragment key={p.id}>
                    {idx > 0 && <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>·</span>}
                    <span
                      onClick={() => scrollToPhase(p.id)}
                      style={{ cursor: 'pointer', transition: 'color 0.2s ease' }}
                    >
                      {p.title}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Matrix Stack Artwork Grid with Exact Progress Fills */}
            <div ref={matrixSectionRef} style={{ position: 'relative' }}>
              
              {/* Header labels: AMBITION & IMPACT */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px',
                  padding: '0 4px',
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.65)', letterSpacing: '0.14em' }}>
                  AMBITION
                </span>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#52E0CB', letterSpacing: '0.14em' }}>
                  IMPACT
                </span>
              </div>

              {/* 6 Animated Progress Bar Container Cards */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {phasesData.map((phase, pIdx) => {
                  const isHovered = hoveredMatrixCard === pIdx;

                  return (
                    <div
                      key={phase.id}
                      onMouseEnter={() => setHoveredMatrixCard(pIdx)}
                      onMouseLeave={() => setHoveredMatrixCard(null)}
                      onClick={() => scrollToPhase(phase.id)}
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '56px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        backdropFilter: 'blur(10px)',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transform: isHovered ? 'scale(1.03) translateX(4px)' : 'scale(1)',
                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: isHovered ? '0 12px 28px rgba(103, 223, 203, 0.25)' : 'none',
                      }}
                    >
                      {/* Animated Gradient Fill Bar (Image 3: #67DFCB 83% to #1FA5FF 83%) */}
                      <div
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: heroSeqStep >= 1 ? phase.fillPct : '0%',
                          background: 'linear-gradient(90deg, #67DFCB 0%, #1FA5FF 100%)',
                          borderRadius: '12px',
                          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />

                      {/* Content Overlay */}
                      <div
                        style={{
                          position: 'relative',
                          zIndex: 2,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          height: '100%',
                          padding: '0 20px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ fontSize: '12px', fontWeight: 900, color: '#08194A', opacity: 0.95 }}>{phase.num}</span>
                          <span style={{ fontSize: '14px', fontWeight: 900, color: '#08194A', letterSpacing: '0.04em' }}>{phase.title}</span>
                        </div>
                        <span
                          style={{
                            fontSize: '13px',
                            fontWeight: 800,
                            color: 'rgba(255, 255, 255, 0.95)',
                            opacity: heroSeqStep >= 1 ? 1 : 0,
                            transform: heroSeqStep >= 1 ? 'scale(1)' : 'scale(0.8)',
                            transition: 'opacity 0.4s ease, transform 0.4s ease',
                          }}
                        >
                          {animatedPcts[pIdx]}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE SIX PHASES BREAKDOWN SECTION */}
      {/* 2. SECTION: THE SIX PHASES */}
      <section
        id="phases"
        style={{
          backgroundColor: '#FFFFFF',
          padding: '110px 0 120px',
        }}
      >
        <div className="section-container">
          
          {/* Header Row */}
          <div style={{ marginBottom: '64px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '14px',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '3px',
                  backgroundColor: '#1B58F4',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#1B58F4',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                THE SIX PHASES
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 900,
                color: '#0A1128',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              From ambition to impact,<br />
              phase by phase.
            </h2>
          </div>

          {/* 6 Phases Timeline Container with Left Vertical Line & Connectors */}
          <div
            style={{
              position: 'relative',
              maxWidth: '1050px',
              margin: '0 auto',
            }}
          >
            {/* Left Vertical Timeline Continuous Line */}
            <div
              style={{
                position: 'absolute',
                left: '11px',
                top: '40px',
                bottom: '40px',
                width: '1px',
                backgroundColor: '#CBD5E1',
                zIndex: 1,
              }}
            />

            {/* Phases Rows */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '36px',
              }}
            >
              {phasesData.map((phase, pIdx) => {
                const isHovered = hoveredPhaseCard === pIdx;

                return (
                  <div
                    key={phase.id}
                    id={`phase-${phase.id}`}
                    onMouseEnter={() => setHoveredPhaseCard(pIdx)}
                    onMouseLeave={() => setHoveredPhaseCard(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    {/* Timeline Dot */}
                    <div
                      style={{
                        width: '24px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: phase.dotColor,
                          boxShadow: isHovered ? `0 0 0 5px ${phase.dotColor}33` : 'none',
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </div>

                    {/* Horizontal Connector Line 1 (Dot to Outline Number) */}
                    <div
                      style={{
                        width: '40px',
                        height: '1px',
                        backgroundColor: '#CBD5E1',
                        flexShrink: 0,
                      }}
                    />

                    {/* Giant Outline Number (SVG text with paintOrder="stroke fill" and solid white fill to hide internal cross lines inside numbers like "04") */}
                    <div
                      style={{
                        width: '110px',
                        height: '76px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        userSelect: 'none',
                      }}
                    >
                      <svg width="110" height="76" viewBox="0 0 110 76" style={{ overflow: 'visible' }}>
                        <text
                          x="55"
                          y="58"
                          textAnchor="middle"
                          fontSize="64"
                          fontWeight="900"
                          fontFamily="'Inter', sans-serif"
                          fill="#FFFFFF"
                          stroke={phase.numStrokeColor}
                          strokeWidth="2.5"
                          strokeLinejoin="round"
                          paintOrder="stroke fill"
                        >
                          {phase.num}
                        </text>
                      </svg>
                    </div>

                    {/* Horizontal Connector Line 2 (Outline Number to Card) */}
                    <div
                      style={{
                        width: '40px',
                        height: '1px',
                        backgroundColor: '#CBD5E1',
                        flexShrink: 0,
                      }}
                    />

                    {/* Phase Detailed Card */}
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: phase.cardBg,
                        borderRadius: '20px',
                        padding: '28px 36px',
                        boxShadow: isHovered
                          ? '0 24px 55px rgba(10, 17, 40, 0.15)'
                          : '0 2px 12px rgba(0, 0, 0, 0.03)',
                        transform: isHovered ? 'scale(1.025) translateY(-4px)' : 'scale(1) translateY(0)',
                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                      }}
                    >
                      {/* Pill Header Badge Inside Card */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          backgroundColor: phase.pillBg,
                          marginBottom: '16px',
                        }}
                      >
                        {/* Number tag inside pill */}
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 900,
                            backgroundColor: phase.pillNumBg,
                            color: phase.pillNumColor,
                            padding: '3px 8px',
                            borderRadius: '5px',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {phase.num}
                        </span>
                        {/* Title inside pill */}
                        <span
                          style={{
                            fontSize: '15px',
                            fontWeight: 900,
                            color: phase.pillTitleColor,
                            letterSpacing: '0.08em',
                          }}
                        >
                          {phase.title}
                        </span>
                      </div>

                      {/* Card Body Paragraph Description */}
                      <p
                        style={{
                          fontSize: '15px',
                          color: phase.cardTextColor,
                          lineHeight: 1.6,
                          margin: 0,
                          fontWeight: 500,
                        }}
                      >
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Text Aligned to Cards */}
            <div
              style={{
                marginTop: '56px',
                fontSize: '14px',
                fontWeight: 700,
                color: '#475569',
                paddingLeft: '214px',
              }}
            >
              Phase six never really ends &mdash; that is the point.
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION: WHY IT MATTERS / CONVERGENCE */}
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
          
          {/* Step 1: HOW WE CREATE VALUE Header Tag */}
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
            &mdash; HOW WE CREATE VALUE &mdash;
          </div>

          {/* Step 2: Main Heading */}
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
            From ambition to impact.
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

          {/* Step 4: 6 Phase Pill Badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              maxWidth: '900px',
              margin: '0 auto 48px',
              opacity: whySeqStep >= 4 ? 1 : 0,
              transform: whySeqStep >= 4 ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {phasesData.map((phase) => {
              const isHovered = hoveredWhyPill === phase.id;
              return (
                <div
                  key={phase.id}
                  onMouseEnter={() => setHoveredWhyPill(phase.id)}
                  onMouseLeave={() => setHoveredWhyPill(null)}
                  onClick={() => scrollToPhase(phase.id)}
                  style={{
                    background: isHovered ? 'rgba(255, 255, 255, 0.22)' : 'rgba(255, 255, 255, 0.08)',
                    border: isHovered ? '1px solid rgba(103, 223, 203, 0.8)' : '1px solid rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(10px)',
                    color: '#FFFFFF',
                    padding: '8.5px 22px',
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
                  <span>{phase.subTitle}</span>
                </div>
              );
            })}
          </div>

          {/* Button: ALWAYS APPEARS and ENLARGES ON HOVER ONLY */}
          <div>
            <a
              href="#phases"
              onMouseEnter={() => setHoveredWhyStartBtn(true)}
              onMouseLeave={() => setHoveredWhyStartBtn(false)}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('phases')?.scrollIntoView({ behavior: 'smooth' });
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
                boxShadow: hoveredWhyStartBtn
                  ? '0 16px 40px rgba(0, 0, 0, 0.35), 0 0 25px rgba(255, 255, 255, 0.4)'
                  : '0 8px 24px rgba(0, 0, 0, 0.25)',
                transform: hoveredWhyStartBtn ? 'scale(1.08)' : 'scale(1)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
              }}
            >
              Start at phase one
            </a>
          </div>

        </div>
      </section>

      {/* 4. CALLOUT RIBBON SECTION */}
      <section
        style={{
          background: 'linear-gradient(90deg, #265CF4 0%, #1FA5FF 100%)',
          color: '#FFFFFF',
          padding: '70px 0',
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
