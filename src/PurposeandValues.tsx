import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface PurposeandValuesProps {
  onNavigate: (anchor: string) => void;
  onGoHome: () => void;
}

export function PurposeandValuesPage({ onNavigate, onGoHome }: PurposeandValuesProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const [activeMethodStep, setActiveMethodStep] = useState<number>(0);
  const [hoveredMethodStep, setHoveredMethodStep] = useState<number | null>(null);

  const [hoveredPill, setHoveredPill] = useState<string | null>(null);
  const [activePill, setActivePill] = useState<string | null>(null);

  // Dynamic Moving Nodes Animation State along main ellipse
  const [nodeOffset, setNodeOffset] = useState<number>(0);
  const [autoMethodStep, setAutoMethodStep] = useState<number>(0);

  useEffect(() => {
    if (hoveredMethodStep !== null) return;
    const timer = setInterval(() => {
      setAutoMethodStep((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(timer);
  }, [hoveredMethodStep]);

  useEffect(() => {
    let animId: number;
    let startTime: number | null = null;
    const duration = 24000; // 24s for smooth, elegant, relaxed sweep

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = ((timestamp - startTime) % duration) / duration;
      setNodeOffset(progress);
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  const valueWays = [
    {
      id: '01',
      title: 'Operate more efficiently.',
      desc: 'Simplify the work, remove the friction, take out the steps nobody can justify.',
      type: 'white',
    },
    {
      id: '02',
      title: 'Make better decisions.',
      desc: 'Turn scattered enterprise information into intelligence people actually trust.',
      type: 'blue',
    },
    {
      id: '03',
      title: 'Connect fragmented operations.',
      desc: 'One thread through planning, execution, finance and service.',
      type: 'white',
    },
    {
      id: '04',
      title: 'Create intelligent customer experiences.',
      desc: 'Connected, personalized and informed by what the enterprise already knows.',
      type: 'navy',
    },
    {
      id: '05',
      title: 'Increase workforce productivity.',
      desc: 'Augment people with automation, analytics and AI — not just automate them.',
      type: 'white',
    },
    {
      id: '06',
      title: 'Respond faster to change.',
      desc: 'Build an environment that can move as quickly as the market does.',
      type: 'mint',
    },
    {
      id: '07',
      title: 'Build new products and capabilities.',
      desc: 'Turn platform investment into things the business can actually sell.',
      type: 'white',
    },
    {
      id: '08',
      title: 'Create sustainable competitive advantage.',
      desc: 'Advantage that compounds, because it is built into how the business runs.',
      type: 'white',
    },
  ];

  const methodSequence = [
    {
      step: '04',
      tag: 'THE OUTCOME',
      question: 'What has to be true for the business?',
      hoverBg: '#52E0CB',
      hoverColor: '#0B132B',
      hoverBadgeBg: 'rgba(11, 19, 43, 0.15)',
      hoverBadgeColor: '#0B132B',
      isDashed: false,
    },
    {
      step: '03',
      tag: 'THE CAPABILITY',
      question: 'What must the enterprise be able to do?',
      hoverBg: '#265CF4',
      hoverColor: '#FFFFFF',
      hoverBadgeBg: 'rgba(255, 255, 255, 0.25)',
      hoverBadgeColor: '#FFFFFF',
      isDashed: false,
    },
    {
      step: '02',
      tag: 'THE ARCHITECTURE',
      question: 'How should data, AI, cloud and applications fit together?',
      hoverBg: '#1B4AC7',
      hoverColor: '#FFFFFF',
      hoverBadgeBg: 'rgba(255, 255, 255, 0.25)',
      hoverBadgeColor: '#FFFFFF',
      isDashed: false,
    },
    {
      step: '01',
      tag: 'THE TECHNOLOGY',
      question: 'Only now: which platforms, and how they get engineered.',
      hoverBg: '#0B132B',
      hoverColor: '#FFFFFF',
      hoverBadgeBg: 'rgba(103, 223, 203, 0.2)',
      hoverBadgeColor: '#67DFCB',
      isDashed: true,
    },
  ];

  return (
    <div className="who-we-are-page" style={{ paddingTop: '0px', fontFamily: "'Inter', sans-serif" }}>
      {/* 1. HERO SECTION */}
      <section
        style={{
          background: 'linear-gradient(135deg, #08194A 0%, #0D2A75 45%, #1B4AC7 100%)',
          color: '#FFFFFF',
          padding: '120px 0 0',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Subtle Vertical Grid Lines Overlay Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
            backgroundSize: '10% 100%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumbs Top-Left */}
          <div
            style={{
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.75)',
              marginBottom: '40px',
              fontWeight: 400,
              textAlign: 'left',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span
              onClick={onGoHome}
              style={{ cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
            >
              Home
            </span>{' '}
            / <span style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.85)' }}>Our purpose</span>
          </div>

          {/* Centered Section Tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '28px',
            }}
          >
            <div style={{ width: '20px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
            <span
              style={{
                color: '#67DFCB',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              OUR PURPOSE
            </span>
            <div style={{ width: '20px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
          </div>

          {/* Main Hero Headline */}
          <h1
            style={{
              fontSize: 'clamp(38px, 5.2vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              color: '#FFFFFF',
              maxWidth: '860px',
              margin: '0 auto 20px',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Make technology a catalyst<br />
            for business progress.
          </h1>

          {/* Hero Subhead */}
          <p
            style={{
              fontSize: '17px',
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '620px',
              lineHeight: 1.6,
              margin: '0 auto 36px',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            We believe technology creates the greatest value when it improves the business behind it.
          </p>

          {/* Centered CTA Buttons */}
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px', position: 'relative', zIndex: 10 }}>
            <button
              onClick={() => onNavigate('#approach')}
              style={{
                background: '#FFFFFF',
                color: '#1E69F5',
                fontWeight: 700,
                fontSize: '14px',
                padding: '13px 30px',
                borderRadius: '30px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.28)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.18)';
              }}
            >
              See the outcomes
            </button>

            <button
              onClick={() => onNavigate('#what-we-do')}
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '14px',
                padding: '13px 30px',
                borderRadius: '30px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)';
                e.currentTarget.style.borderColor = '#67DFCB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              What we do
            </button>
          </div>

          {/* Curved Ellipse Arc Graphic Container with Soft Unclipped Pulsing Light */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '280px',
              userSelect: 'none',
              marginTop: '10px',
            }}
          >
            {/* Dynamic Pulsing Shining Light Aura */}
            <div
              className="dynamic-ellipse-shining-light"
              style={{
                position: 'absolute',
                top: '0px',
                left: '50%',
                width: '340px',
                height: '340px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(103, 223, 203, 0.75) 0%, rgba(56, 189, 248, 0.4) 40%, rgba(38, 92, 244, 0.12) 65%, transparent 80%)',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />

            {/* Main Ellipse Arc SVG */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 280"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 3 }}
            >
              {/* Lower Dashed Moving Arc (Dynamic Moving Dotted Stream) */}
              <path
                className="moving-dashed-arc"
                d="M 0 350 Q 500 -180 1000 350"
                stroke="rgba(103, 223, 203, 0.45)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />

              {/* Solid Main Ellipse Line - Anchored to bottom-left corner (0, 280) and bottom-right corner (1000, 280) */}
              <path
                d="M 0 280 Q 500 -240 1000 280"
                stroke="rgba(255, 255, 255, 0.65)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />

              {/* 7 DYNAMIC MOVING NODES ALONG SOLID ELLIPSE (SMOOTH SYNCHRONIZED SHINING LIGHT) */}
              {Array.from({ length: 7 }).map((_, index) => {
                const totalNodes = 7;
                const rawT = (index / totalNodes + nodeOffset) % 1;
                const x = 1000 * rawT;
                const y = 1040 * rawT * rawT - 1040 * rawT + 280;

                // Smooth Gaussian Bell Curve for synchronized shining light as nodes enter/exit center (t = 0.50)
                const distFromCenter = Math.abs(rawT - 0.5);
                const glowFactor = Math.exp(-Math.pow(distFromCenter / 0.075, 2));

                const nodeRadius = 4.5 + 3.0 * glowFactor;
                const nodeColor = glowFactor > 0.2 ? '#67DFCB' : '#FFFFFF';
                const opacity = 0.85 + 0.15 * glowFactor;

                return (
                  <g key={index}>
                    {/* Synchronized Outer Halo Light Aura (expands and fades in sync with node position) */}
                    {glowFactor > 0.05 && (
                      <circle
                        cx={x}
                        cy={y}
                        r={18 * glowFactor}
                        fill={`rgba(103, 223, 203, ${0.5 * glowFactor})`}
                      />
                    )}
                    {/* Node Circle with Smooth Radius and Color Transition */}
                    <circle
                      cx={x}
                      cy={y}
                      r={nodeRadius}
                      fill={nodeColor}
                      opacity={opacity}
                    />
                  </g>
                );
              })}

              {/* Center Node Label: BUSINESS PROGRESS (Fixed Position - Does NOT move with nodes) */}
              <text
                x="500"
                y="60"
                textAnchor="middle"
                fill="#67DFCB"
                fontSize="11"
                fontWeight="800"
                letterSpacing="0.18em"
                fontFamily="'Inter', sans-serif"
              >
                BUSINESS PROGRESS
              </text>

              {/* Left Node Label: TECHNOLOGY (Fixed Position - Does NOT move with nodes) */}
              <text
                x="180"
                y="170"
                textAnchor="middle"
                fill="rgba(255, 255, 255, 0.85)"
                fontSize="11"
                fontWeight="700"
                letterSpacing="0.18em"
                fontFamily="'Inter', sans-serif"
              >
                TECHNOLOGY
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* 2. FORMULA BAR SECTION (AFTER HERO SECTION) */}
      <section
        style={{
          background: '#62E5D0',
          padding: '20px 0',
          color: '#0B132B',
          margin: 0,
          border: 'none',
        }}
      >
        <div
          className="section-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            fontWeight: 800,
            fontSize: '12px',
            letterSpacing: '0.08em',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <span
            onMouseEnter={() => setHoveredPill('tech')}
            onMouseLeave={() => setHoveredPill(null)}
            onClick={() => setActivePill(activePill === 'tech' ? null : 'tech')}
            style={{
              background: (hoveredPill === 'tech' || activePill === 'tech') ? '#0B132B' : '#A8F5E9',
              color: (hoveredPill === 'tech' || activePill === 'tech') ? '#67DFCB' : '#0B132B',
              padding: '9px 22px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              transform: (hoveredPill === 'tech' || activePill === 'tech') ? 'scale(1.05) translateY(-2px)' : 'scale(1) translateY(0)',
              boxShadow: (hoveredPill === 'tech' || activePill === 'tech') ? '0 8px 20px rgba(11, 19, 43, 0.25)' : 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              userSelect: 'none',
            }}
          >
            TECHNOLOGY
          </span>

          <span
            style={{
              fontSize: '16px',
              fontWeight: 900,
              color: '#0B132B',
              transform: (hoveredPill === 'tech' || hoveredPill === 'context') ? 'scale(1.2)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          >
            +
          </span>

          <span
            onMouseEnter={() => setHoveredPill('context')}
            onMouseLeave={() => setHoveredPill(null)}
            onClick={() => setActivePill(activePill === 'context' ? null : 'context')}
            style={{
              background: (hoveredPill === 'context' || activePill === 'context') ? '#0B132B' : '#A8F5E9',
              color: (hoveredPill === 'context' || activePill === 'context') ? '#67DFCB' : '#0B132B',
              padding: '9px 22px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              transform: (hoveredPill === 'context' || activePill === 'context') ? 'scale(1.05) translateY(-2px)' : 'scale(1) translateY(0)',
              boxShadow: (hoveredPill === 'context' || activePill === 'context') ? '0 8px 20px rgba(11, 19, 43, 0.25)' : 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              userSelect: 'none',
            }}
          >
            BUSINESS CONTEXT
          </span>

          <span
            style={{
              fontSize: '16px',
              fontWeight: 900,
              color: '#0B132B',
              transform: (hoveredPill === 'context' || hoveredPill === 'progress') ? 'scale(1.2)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          >
            =
          </span>

          <span
            onMouseEnter={() => setHoveredPill('progress')}
            onMouseLeave={() => setHoveredPill(null)}
            onClick={() => setActivePill(activePill === 'progress' ? null : 'progress')}
            style={{
              background: (hoveredPill === 'progress' || activePill === 'progress') ? '#FFFFFF' : '#0B132B',
              color: (hoveredPill === 'progress' || activePill === 'progress') ? '#0B132B' : '#FFFFFF',
              padding: '9px 26px',
              borderRadius: '20px',
              cursor: 'pointer',
              transform: (hoveredPill === 'progress' || activePill === 'progress') ? 'scale(1.06) translateY(-2px)' : 'scale(1) translateY(0)',
              boxShadow: (hoveredPill === 'progress' || activePill === 'progress') ? '0 10px 24px rgba(0, 0, 0, 0.25)' : 'none',
              border: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              userSelect: 'none',
            }}
          >
            MEASURABLE PROGRESS
          </span>
        </div>
      </section>

      {/* 2. WHAT WE BELIEVE SECTION */}
      <section style={{ padding: '100px 0', background: '#FFFFFF' }}>
        <div className="section-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '60px',
              alignItems: 'center',
            }}
            className="why-we-exist-grid"
          >
            {/* Left Content */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '2px',
                    backgroundColor: '#265CF4',
                    borderRadius: '1px',
                  }}
                />
                <span
                  style={{
                    color: '#265CF4',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  WHAT WE BELIEVE
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(32px, 3.8vw, 44px)',
                  fontWeight: 800,
                  color: '#0A1128',
                  lineHeight: 1.18,
                  letterSpacing: '-0.025em',
                  marginBottom: '36px',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Technology creates the greatest value when it improves the business behind it.
              </h2>

              {/* Subtext with Vertical Mint Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  gap: '16px',
                  maxWidth: '540px',
                }}
              >
                <div
                  style={{
                    width: '3px',
                    background: '#67DFCB',
                    borderRadius: '2px',
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontSize: '15px',
                    color: '#64748B',
                    lineHeight: 1.65,
                    margin: 0,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  That means helping organizations do eight things better — and every one of them is a business outcome before it is a technology decision.
                </p>
              </div>
            </div>

            {/* Right Column: Image Card with Floating Badge */}
            <div style={{ position: 'relative', width: '100%' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '380px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                  background: '#1E293B',
                }}
              >
                <img
                  src="/images/purposeandvalues1.png"
                  alt="Outcome first. Technology second."
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                
                {/* Soft Bottom Shadow Gradient Overlay for crisp text legibility */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(10, 18, 48, 0.75) 100%)',
                  }}
                />

                {/* Overlay Text Inside Image */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '32px',
                    left: '32px',
                    right: '32px',
                    color: '#FFFFFF',
                    zIndex: 3,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'clamp(24px, 2.5vw, 32px)',
                      fontWeight: 800,
                      lineHeight: 1.15,
                      margin: 0,
                      color: '#FFFFFF',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Outcome first.<br />
                    Technology second.
                  </h3>
                </div>
              </div>

              {/* Floating Mint Pill Badge Overlapping Bottom-Left of Card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-16px',
                  left: '-20px',
                  background: '#67DFCB',
                  color: '#0A1230',
                  padding: '10px 22px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  boxShadow: '0 8px 20px rgba(103, 223, 203, 0.4)',
                  zIndex: 5,
                  whiteSpace: 'nowrap',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                8 OUTCOMES WE PURSUE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EIGHT WAYS TECHNOLOGY EARNS ITS PLACE */}
      <section style={{ padding: '90px 0 100px', background: '#F4F7FD' }}>
        <div className="section-container">
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '56px',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <div>
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
                    height: '2px',
                    backgroundColor: '#265CF4',
                    borderRadius: '1px',
                  }}
                />
                <span
                  style={{
                    color: '#265CF4',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  THAT MEANS HELPING ORGANIZATIONS
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(32px, 4vw, 44px)',
                  fontWeight: 800,
                  color: '#0A1128',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Eight ways technology<br />
                earns its place.
              </h2>
            </div>

            <p
              style={{
                fontSize: '15px',
                color: '#64748B',
                maxWidth: '440px',
                lineHeight: 1.6,
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Each one is a business result. The platform, the data model and the architecture follow from it — never the other way round.
            </p>
          </div>

          {/* 4-Column Wave Grid (Each column moves up & down like a wave) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              alignItems: 'start',
            }}
          >
            {[
              [valueWays[0], valueWays[4]], // Column 0 (Cards 01 & 05)
              [valueWays[1], valueWays[5]], // Column 1 (Cards 02 & 06)
              [valueWays[2], valueWays[6]], // Column 2 (Cards 03 & 07)
              [valueWays[3], valueWays[7]], // Column 3 (Cards 04 & 08)
            ].map((colCards, colIdx) => (
              <div
                key={colIdx}
                className={`wave-card-col-${colIdx}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                }}
              >
                {colCards.map((card) => {
                  const originalIdx = valueWays.findIndex((c) => c.id === card.id);
                  const isHovered = hoveredCard === originalIdx;
                  const isSelected = activeCard === originalIdx;
                  const isActive = isHovered || isSelected;

                  // Default color styling matching uploaded image exactly
                  let cardBg = '#FFFFFF';
                  let cardBorder = 'none';
                  let badgeBg = 'rgba(38, 92, 244, 0.08)';
                  let badgeColor = '#265CF4';
                  let titleColor = '#0A1128';
                  let descColor = '#64748B';
                  let shadow = '0 6px 20px rgba(0, 0, 0, 0.03)';

                  if (card.type === 'blue') {
                    cardBg = '#265CF4';
                    badgeBg = 'rgba(255, 255, 255, 0.2)';
                    badgeColor = '#FFFFFF';
                    titleColor = '#FFFFFF';
                    descColor = 'rgba(255, 255, 255, 0.9)';
                    shadow = '0 12px 30px rgba(38, 92, 244, 0.25)';
                  } else if (card.type === 'navy') {
                    cardBg = '#0B132B';
                    badgeBg = 'rgba(255, 255, 255, 0.15)';
                    badgeColor = '#FFFFFF';
                    titleColor = '#FFFFFF';
                    descColor = 'rgba(255, 255, 255, 0.85)';
                    shadow = '0 12px 30px rgba(11, 19, 43, 0.3)';
                  } else if (card.type === 'mint') {
                    cardBg = '#52E0CB';
                    badgeBg = 'rgba(10, 18, 48, 0.1)';
                    badgeColor = '#0B132B';
                    titleColor = '#0B132B';
                    descColor = 'rgba(11, 19, 43, 0.85)';
                    shadow = '0 12px 30px rgba(82, 224, 203, 0.3)';
                  }

                  return (
                    <div
                      key={card.id}
                      onClick={() => setActiveCard(activeCard === originalIdx ? null : originalIdx)}
                      onMouseEnter={() => setHoveredCard(originalIdx)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        background: cardBg,
                        border: cardBorder,
                        borderRadius: '20px',
                        padding: '32px 28px',
                        boxShadow: isActive ? '0 18px 36px rgba(0, 0, 0, 0.12)' : shadow,
                        transform: isActive ? 'scale(1.03) translateY(-6px)' : 'scale(1)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '230px',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            display: 'inline-block',
                            fontSize: '11px',
                            fontWeight: 800,
                            background: badgeBg,
                            color: badgeColor,
                            padding: '4px 10px',
                            borderRadius: '8px',
                            marginBottom: '20px',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {card.id}
                        </span>
                        <h3
                          style={{
                            fontSize: '20px',
                            fontWeight: 800,
                            color: titleColor,
                            marginBottom: '12px',
                            lineHeight: 1.25,
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {card.title}
                        </h3>
                      </div>
                      <p
                        style={{
                          fontSize: '13.5px',
                          color: descColor,
                          lineHeight: 1.6,
                          margin: 0,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {card.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW WE START SECTION */}
      <section
        style={{
          padding: '100px 0',
          background: 'linear-gradient(135deg, #07153B 0%, #0B2265 50%, #081B52 100%)',
          color: '#FFFFFF',
          position: 'relative',
        }}
      >
        <div className="section-container">
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '52px',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <div>
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
                    height: '2px',
                    backgroundColor: '#67DFCB',
                    borderRadius: '1px',
                  }}
                />
                <span
                  style={{
                    color: '#67DFCB',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  HOW WE START
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(32px, 4vw, 44px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  marginBottom: '20px',
                  maxWidth: '780px',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Our work begins with the outcome and works backward to the technology.
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(255, 255, 255, 0.75)',
                  maxWidth: '520px',
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Most technology programs run left to right: pick the platform, then look for the value. We read the sentence the other way.
              </p>
            </div>

            <div
              style={{
                color: 'rgba(255, 255, 255, 0.65)',
                fontWeight: 800,
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                paddingTop: '12px',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              READ RIGHT TO LEFT <ArrowRight size={14} />
            </div>
          </div>

          {/* 4 Step Horizontal Connected Sequence (Cards 04 to 01) */}
          <div style={{ position: 'relative', marginBottom: '24px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
                alignItems: 'stretch',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {methodSequence.map((m, idx) => {
                const isHovered = hoveredMethodStep === idx;
                const isStepActive = isHovered || (hoveredMethodStep === null && autoMethodStep === idx);

                // Default State: Colorless / Translucent Navy Glass
                let cardBg = 'rgba(255, 255, 255, 0.05)';
                let cardBorder = m.isDashed
                  ? '1px dashed rgba(255, 255, 255, 0.35)'
                  : '1px solid rgba(255, 255, 255, 0.15)';
                let badgeBg = 'rgba(255, 255, 255, 0.15)';
                let badgeColor = 'rgba(255, 255, 255, 0.9)';
                let titleColor = '#FFFFFF';
                let descColor = 'rgba(255, 255, 255, 0.7)';
                let shadow = 'none';

                // Hovered / Active State: UNIFORM MINT CYAN (#52E0CB) for all boxes!
                if (isStepActive) {
                  cardBg = '#52E0CB';
                  cardBorder = '1px solid #52E0CB';
                  badgeBg = 'rgba(11, 19, 43, 0.15)';
                  badgeColor = '#0B132B';
                  titleColor = '#0B132B';
                  descColor = 'rgba(11, 19, 43, 0.88)';
                  shadow = '0 14px 36px rgba(82, 224, 203, 0.5)';
                }

                return (
                  <div
                    key={m.step}
                    style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}
                  >
                    <div
                      onClick={() => setActiveMethodStep(idx)}
                      onMouseEnter={() => setHoveredMethodStep(idx)}
                      onMouseLeave={() => setHoveredMethodStep(null)}
                      style={{
                        background: cardBg,
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: cardBorder,
                        borderRadius: '16px',
                        padding: '28px 24px',
                        color: titleColor,
                        cursor: 'pointer',
                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: shadow,
                        transform: isStepActive ? 'scale(1.03) translateY(-6px)' : 'scale(1)',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '190px',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            display: 'inline-block',
                            fontSize: '11px',
                            fontWeight: 800,
                            background: badgeBg,
                            color: badgeColor,
                            padding: '4px 10px',
                            borderRadius: '8px',
                            marginBottom: '16px',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {m.step}
                        </span>
                        <h3
                          style={{
                            fontSize: '17px',
                            fontWeight: 800,
                            letterSpacing: '0.04em',
                            marginBottom: '12px',
                            lineHeight: 1.25,
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {m.tag}
                        </h3>
                      </div>
                      <p
                        style={{
                          fontSize: '13px',
                          color: descColor,
                          lineHeight: 1.5,
                          margin: 0,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {m.question}
                      </p>
                    </div>

                    {/* Connecting Arrow between cards with dynamic step-by-step movement */}
                    {idx < methodSequence.length - 1 && (
                      <div
                        style={{
                          position: 'absolute',
                          right: '-14px',
                          top: '50%',
                          transform: isStepActive
                            ? 'translateY(-50%) translateX(6px) scale(1.3)'
                            : 'translateY(-50%) translateX(0px)',
                          zIndex: 4,
                          color: isStepActive ? '#52E0CB' : 'rgba(255, 255, 255, 0.35)',
                          fontSize: '16px',
                          pointerEvents: 'none',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          filter: isStepActive ? 'drop-shadow(0 0 10px #52E0CB)' : 'none',
                        }}
                      >
                        <ArrowRight size={18} strokeWidth={2.5} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Side Labels */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '56px',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.14em',
              color: 'rgba(255, 255, 255, 0.45)',
              textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <div>BUSINESS QUESTION</div>
            <div>TECHNOLOGY ANSWER</div>
          </div>

          {/* Bottom Tagline Banner Quote */}
          <div
            style={{
              textAlign: 'center',
              fontSize: 'clamp(18px, 2.2vw, 24px)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Technology matters when the business performs better because of it.
          </div>
        </div>
      </section>

      {/* 5. CTA BRAND BANNER */}
      <section
        style={{
          padding: '80px 0',
          background: 'linear-gradient(90deg, #1852EB 0%, #1F7CF7 50%, #22A7FF 100%)',
          color: '#FFFFFF',
        }}
      >
        <div
          className="section-container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
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
              Would you like more information, or do you have a question?
            </h2>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('#contact');
            }}
            style={{
              background: '#FFFFFF',
              color: '#1852EB',
              padding: '14px 32px',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '14.5px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F0F4FE';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.12)';
            }}
          >
            Contact us
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
