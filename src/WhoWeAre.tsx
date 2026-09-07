import { useState } from 'react';
import { ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

interface WhoWeAreProps {
  onNavigate: (anchor: string) => void;
  onGoHome: () => void;
}

export function WhoWeArePage({ onNavigate, onGoHome }: WhoWeAreProps) {
  const [activeShift, setActiveShift] = useState<number | null>(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeRole, setActiveRole] = useState<'modernize' | 'engineer'>('engineer');
  const [hoveredRole, setHoveredRole] = useState<'modernize' | 'engineer' | null>(null);
  const [activeForce, setActiveForce] = useState<number | null>(null);
  const [hoveredForce, setHoveredForce] = useState<number | null>(null);

  const shifts = [
    {
      id: '01',
      title: 'Architectural complexity is eroding predictability.',
      text: 'Legacy core systems combined with rapid digital additions create friction and unpredictability.',
      highlight: 'blue',
    },
    {
      id: '02',
      title: 'Data is summary, fundamental to enterprise intelligence.',
      text: 'Moving from a passive reporting artifact to the real-time operational backbone.',
      highlight: 'default',
    },
    {
      id: '03',
      title: 'Disruptive changes in technology economics.',
      text: 'Cloud, platform and AI cost management requiring rigorous architectural governance.',
      highlight: 'default',
    },
    {
      id: '04',
      title: 'Customers and workforce continuous flux.',
      text: 'Expectations changing faster than traditional operating models can adapt.',
      highlight: 'dark',
    },
    {
      id: '05',
      title: 'Supply chains remain volatile.',
      text: 'Resilience, transparency and visibility prioritized over cost alone.',
      highlight: 'default',
    },
    {
      id: '06',
      title: 'Legacy systems remain core liability.',
      text: 'Critical business operations tied to platforms designed decades ago.',
      highlight: 'default',
    },
  ];

  const bringTogetherPills = [
    'Business transformation',
    'Industry expertise',
    'Enterprise technology',
    'Data',
    'AI',
    'Cloud',
    'Engineering',
  ];

  const lifecycleSteps = [
    {
      num: '01',
      title: 'Identify the opportunity',
      desc: 'Where is value actually available — and what has to change to reach it?',
    },
    {
      num: '02',
      title: 'Define the architecture',
      desc: 'The target environment across applications, data, AI, cloud, integration and security.',
    },
    {
      num: '03',
      title: 'Engineer',
      desc: 'Build, configure and automate on modern platforms.',
    },
    {
      num: '04',
      title: 'Implement',
      desc: 'Deploy into the real operating environment, not a sandbox.',
    },
    {
      num: '05',
      title: 'Integrate',
      desc: 'Connect the digital core to data, cloud, AI and digital experiences.',
    },
    {
      num: '06',
      title: 'Modernize',
      desc: 'Retire technical debt and simplify what constrains the business.',
    },
    {
      num: '07',
      title: 'Optimize',
      desc: 'Tune performance, cost and adoption once it is live.',
    },
    {
      num: '08',
      title: 'Continuously evolve',
      desc: 'Keep improving through analytics, AI, automation and innovation.',
      highlight: true,
    },
  ];

  return (
    <div className="who-we-are-page" style={{ background: '#FFFFFF', color: '#0F172A' }}>
      {/* 1. HERO SECTION */}
      <section
        className="who-hero"
        style={{
          background: 'linear-gradient(135deg, #08194A 0%, #0D2A75 50%, #1B4AC7 100%)',
          color: '#FFFFFF',
          padding: '40px 0 100px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle grid lines background overlay */}
        <div
          className="who-hero-grid-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '16.666% 100%',
            pointerEvents: 'none',
            opacity: 0.6,
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
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span
              onClick={onGoHome}
              style={{ cursor: 'pointer', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
            >
              Home
            </span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 500 }}>Who we are</span>
          </div>

          <div className="who-hero-grid">
            {/* Left Column Content */}
            <div className="who-hero-left">
              {/* Category tag with horizontal mint line */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '2px',
                    backgroundColor: '#67DFCB',
                    borderRadius: '1px',
                  }}
                />
                <span
                  style={{
                    color: '#67DFCB',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  WHO WE ARE
                </span>
              </div>

              {/* Main Heading */}
              <h1
                style={{
                  fontSize: 'clamp(36px, 4.4vw, 56px)',
                  fontWeight: 800,
                  lineHeight: 1.12,
                  letterSpacing: '-0.025em',
                  marginBottom: '24px',
                  color: '#FFFFFF',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Transformation requires more than technology.
              </h1>

              {/* Subhead Description */}
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.85)',
                  maxWidth: '520px',
                  marginBottom: '28px',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Enterprises today are navigating simultaneous disruption — and leaders are expected to transform while continuing to operate efficiently.
              </p>

              {/* 3-segment color accent bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '40px',
                }}
              >
                <div style={{ width: '84px', height: '4px', backgroundColor: '#2563EB', borderRadius: '2px' }} />
                <div style={{ width: '36px', height: '4px', backgroundColor: '#67DFCB', borderRadius: '2px' }} />
                <div style={{ width: '24px', height: '4px', backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '2px' }} />
              </div>

              {/* Action CTA Buttons */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onNavigate('#capabilities')}
                  style={{
                    background: '#FFFFFF',
                    color: '#1036A4',
                    fontWeight: 700,
                    fontSize: '15px',
                    padding: '14px 34px',
                    borderRadius: '30px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                  }}
                >
                  What we do
                </button>

                <button
                  onClick={() => onNavigate('#contact')}
                  style={{
                    background: 'transparent',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '15px',
                    padding: '14px 34px',
                    borderRadius: '30px',
                    border: '1.5px solid rgba(255, 255, 255, 0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#FFFFFF';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  Talk to Ajiledone
                </button>
              </div>
            </div>

            {/* Right Column Visual Layout */}
            <div className="who-hero-right">
              {/* Mint Background Accent Card */}
              <div className="who-hero-mint-card" />

              {/* Main Image Container */}
              <div className="who-hero-img-box">
                <img
                  src="/images/Whoweare1.png"
                  alt="Transformation Hero"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '24px',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Glass Card Overlay (Matching uploaded design) */}
              <div className="who-hero-glass-card">
                {/* Glass Card Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      width: '9px',
                      height: '9px',
                      borderRadius: '50%',
                      backgroundColor: '#67DFCB',
                      display: 'inline-block',
                      boxShadow: '0 0 10px #67DFCB',
                    }}
                  />
                  <span
                    style={{
                      color: '#67DFCB',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      fontFamily: "'Inter', sans-serif",
                      textTransform: 'uppercase',
                    }}
                  >
                    A CONNECTED VIEW
                  </span>
                </div>

                {/* Glass Card Headline */}
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    lineHeight: 1.35,
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  <span style={{ color: '#FFFFFF' }}>Integrated </span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>transformation,</span>
                  <br />
                  <span style={{ color: '#FFFFFF' }}>not isolated </span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>projects.</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIMULTANEOUS DISRUPTION SECTION */}
      <section
        style={{
          background: '#050B1E',
          padding: '40px 0 48px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="section-container">
          {/* Section Tag */}
          <div
            style={{
              color: '#67DFCB',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            SIMULTANEOUS DISRUPTION
          </div>

          {/* Stacked Disruption Banners */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '10px',
            }}
          >
            {/* Top Row: Dark Translucent Banner */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '13px 24px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 800, letterSpacing: '0.04em' }}>
                ARTIFICIAL INTELLIGENCE
              </span>
              <span style={{ color: '#67DFCB', fontSize: '14px', fontWeight: 800 }}>•</span>
              <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 800, letterSpacing: '0.04em' }}>
                DATA
              </span>
              <span style={{ color: '#67DFCB', fontSize: '14px', fontWeight: 800 }}>•</span>
              <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 800, letterSpacing: '0.04em' }}>
                CLOUD ECONOMICS
              </span>
              <span style={{ color: '#67DFCB', fontSize: '14px', fontWeight: 800 }}>•</span>
              <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 800, letterSpacing: '0.04em' }}>
                CUSTOMER EXPECTATIONS
              </span>
            </div>

            {/* Bottom Row: Solid Mint Banner */}
            <div
              style={{
                background: '#67DFCB',
                borderRadius: '6px',
                padding: '13px 24px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ color: '#050B1E', fontSize: '14px', fontWeight: 800, letterSpacing: '0.04em' }}>
                SUPPLY CHAIN VOLATILITY
              </span>
              <span style={{ color: '#265CF4', fontSize: '14px', fontWeight: 800 }}>•</span>
              <span style={{ color: '#050B1E', fontSize: '14px', fontWeight: 800, letterSpacing: '0.04em' }}>
                LEGACY CONSTRAINTS
              </span>
              <span style={{ color: '#265CF4', fontSize: '14px', fontWeight: 800 }}>•</span>
              <span style={{ color: '#050B1E', fontSize: '14px', fontWeight: 800, letterSpacing: '0.04em' }}>
                CONTINUOUS CHANGE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE FORCES IN PLAY SECTION */}
      <section style={{ padding: '80px 0 90px', background: '#F0F4FA' }}>
        <div className="section-container">
          {/* Tag */}
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
              THE FORCES IN PLAY
            </span>
          </div>

          {/* Section Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '40px',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 800,
                color: '#0A1128',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Six shifts, arriving<br />
              at the same time.
            </h2>
            <p
              style={{
                fontSize: '14px',
                color: '#64748B',
                maxWidth: '280px',
                lineHeight: 1.5,
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Enterprises today are navigating<br />
              simultaneous disruption.
            </p>
          </div>

          {/* 2-Column Cards Grid */}
          <div className="forces-cards-grid" style={{ marginBottom: '24px' }}>
            {[
              {
                id: '01',
                title: 'Artificial intelligence is redefining productivity.',
                desc: 'A new operating layer for how work is designed, decided and done.',
                type: 'blue',
              },
              {
                id: '02',
                title: 'Data is becoming fundamental to competitive advantage.',
                desc: 'Advantage now depends on trusted, connected, accessible information.',
                type: 'navy',
              },
              {
                id: '03',
                title: 'Cloud is changing technology economics.',
                desc: 'Scale, resilience and cost behave differently than they used to.',
                type: 'blue',
              },
              {
                id: '04',
                title: 'Customer expectations continue to rise.',
                desc: 'Intelligent, connected and personalized is the new baseline.',
                type: 'navy',
              },
              {
                id: '05',
                title: 'Supply chains remain volatile.',
                desc: 'Planning, sourcing and logistics need to be predictive, not reactive.',
                type: 'blue',
              },
              {
                id: '06',
                title: 'Legacy platforms constrain agility.',
                desc: 'Technical debt quietly sets the ceiling on how fast a business can move.',
                type: 'navy',
              },
            ].map((card, idx) => {
              const isHovered = hoveredForce === idx;
              const isSelected = activeForce === idx;
              const isActive = isHovered || isSelected;

              const isBlueType = card.type === 'blue';

              const cardBg = isActive
                ? (isBlueType ? '#265CF4' : '#091026')
                : '#FFFFFF';
              const cardBorder = isActive ? '1px solid transparent' : '1px solid #E2E8F0';
              const badgeBg = isActive
                ? (isBlueType ? 'rgba(255, 255, 255, 0.2)' : 'rgba(103, 223, 203, 0.18)')
                : '#EBF2FE';
              const badgeColor = isActive
                ? (isBlueType ? '#FFFFFF' : '#67DFCB')
                : '#265CF4';
              const titleColor = isActive ? '#FFFFFF' : '#0A1128';
              const descColor = isActive
                ? (isBlueType ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.78)')
                : '#64748B';
              const boxShadow = isActive
                ? (isBlueType ? '0 12px 30px rgba(38, 92, 244, 0.32)' : '0 12px 30px rgba(9, 16, 38, 0.35)')
                : '0 4px 18px rgba(0, 0, 0, 0.03)';

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveForce(activeForce === idx ? null : idx)}
                  onMouseEnter={() => setHoveredForce(idx)}
                  onMouseLeave={() => setHoveredForce(null)}
                  className="forces-card"
                  style={{
                    background: cardBg,
                    border: cardBorder,
                    borderRadius: '16px',
                    padding: '32px 36px',
                    boxShadow: boxShadow,
                    transform: isActive ? 'translateY(-3px)' : 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-block',
                      background: badgeBg,
                      color: badgeColor,
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '12px',
                      marginBottom: '16px',
                      fontFamily: "'Inter', sans-serif",
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {card.id}
                  </div>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: titleColor,
                      marginBottom: '12px',
                      lineHeight: 1.3,
                      fontFamily: "'Inter', sans-serif",
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: descColor,
                      lineHeight: 1.55,
                      margin: 0,
                      fontFamily: "'Inter', sans-serif",
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Gradient Banner (Matching uploaded design) */}
          <div
            className="forces-bottom-banner"
            style={{
              background: 'linear-gradient(90deg, #091A68 0%, #153FA8 45%, #265CF4 100%)',
              borderRadius: '20px',
              padding: '20px 32px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              boxShadow: '0 12px 35px rgba(9, 26, 104, 0.25)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                background: '#67DFCB',
                color: '#07153B',
                fontSize: '11px',
                fontWeight: 800,
                padding: '6px 18px',
                borderRadius: '20px',
                letterSpacing: '0.08em',
                fontFamily: "'Inter', sans-serif",
                whiteSpace: 'nowrap',
                boxShadow: '0 0 12px rgba(103, 223, 203, 0.4)',
              }}
            >
              AND
            </span>
            <span
              style={{
                color: '#FFFFFF',
                fontSize: '18px',
                fontWeight: 700,
                lineHeight: 1.35,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Leaders are expected to transform — while continuing to operate efficiently.
            </span>
          </div>
        </div>
      </section>

      {/* 4. THE SHIFT SECTION */}
      <section
        style={{
          padding: '90px 0 100px',
          background: 'linear-gradient(135deg, #051548 0%, #0A2678 50%, #0F3BAA 100%)',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="section-container">
          {/* Section Tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '2px',
                backgroundColor: '#67DFCB',
                borderRadius: '1px',
              }}
            />
            <span
              style={{
                color: '#67DFCB',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              THE SHIFT
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: 'clamp(34px, 4.2vw, 52px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '56px',
              color: '#FFFFFF',
              fontFamily: "'Inter', sans-serif",
              maxWidth: '680px',
            }}
          >
            They require a connected<br />
            view of the enterprise.
          </h2>

          {/* Main Diagram Grid Layout (Left: Fragmented, Center: Arrow, Right: Integrated Connected View) */}
          <div
            className="shift-diagram-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1.2fr',
              gap: '32px',
              alignItems: 'center',
            }}
          >
            {/* Left Box: Fragmented Initiatives */}
            <div style={{ position: 'relative', minHeight: '260px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'rgba(255, 255, 255, 0.45)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                FRAGMENTED INITIATIVES
              </div>

              {/* Scattered Pills Cloud */}
              <div
                className="scattered-pills-container"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                }}
              >
                {[
                  { text: 'Silos', top: '10px', left: '0px' },
                  { text: 'Point tools', top: '50px', left: '100px' },
                  { text: 'Manual steps', top: '10px', left: '200px' },
                  { text: 'Local data', top: '120px', left: '20px' },
                  { text: 'Legacy', top: '160px', left: '120px' },
                  { text: 'One-off projects', top: '120px', left: '230px' },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="floating-badge-1"
                    style={{
                      position: 'absolute',
                      top: item.top,
                      left: item.left,
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                      fontWeight: 600,
                      padding: '8px 18px',
                      borderRadius: '20px',
                      fontFamily: "'Inter', sans-serif",
                      backdropFilter: 'blur(8px)',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#67DFCB';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Center Transition Mint Arrow */}
            <div style={{ padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H68M68 12L58 2M68 12L58 22" stroke="#67DFCB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Right Box: Dynamic Connected View Orbit System */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '340px',
              }}
            >
              {/* Outer Dotted Orbiting Ring (Dynamic Spinning) */}
              <div
                className="orbit-ring-dashed"
                style={{
                  position: 'absolute',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  border: '1.5px dashed rgba(255, 255, 255, 0.25)',
                  pointerEvents: 'none',
                }}
              />

              {/* Middle Glowing Solid Ring */}
              <div
                style={{
                  position: 'absolute',
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(103, 223, 203, 0.45)',
                  boxShadow: '0 0 20px rgba(103, 223, 203, 0.15)',
                  pointerEvents: 'none',
                }}
              />

              {/* Center Breathing Blue Glowing Sphere */}
              <div
                className="connected-center-sphere"
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, #38BDF8 0%, #2563EB 50%, #1D4ED8 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  zIndex: 5,
                  cursor: 'pointer',
                }}
              >
                <span
                  style={{
                    color: '#67DFCB',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  CONNECTED
                </span>
                <span
                  style={{
                    color: '#FFFFFF',
                    fontSize: '26px',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1,
                  }}
                >
                  VIEW
                </span>
              </div>

              {/* Orbiting Satellite Badges */}
              {[
                { name: 'Business', top: '15px', left: '20px', anim: 'floating-badge-1' },
                { name: 'Data & AI', top: '15px', right: '20px', anim: 'floating-badge-2' },
                { name: 'Platforms', top: '150px', left: '-20px', anim: 'floating-badge-2' },
                { name: 'Cloud', top: '150px', right: '-10px', anim: 'floating-badge-1' },
                { name: 'Engineering', bottom: '15px', left: '80px', anim: 'floating-badge-1' },
              ].map((badge) => (
                <div
                  key={badge.name}
                  className={badge.anim}
                  style={{
                    position: 'absolute',
                    top: badge.top,
                    left: badge.left,
                    right: badge.right,
                    bottom: badge.bottom,
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontFamily: "'Inter', sans-serif",
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                    zIndex: 6,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(103, 223, 203, 0.25)';
                    e.currentTarget.style.borderColor = '#67DFCB';
                    e.currentTarget.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {badge.name}
                </div>
              ))}

              {/* Bottom Right Subtitle Tag */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '10px',
                  color: '#67DFCB',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  fontFamily: "'Inter', sans-serif",
                  textTransform: 'uppercase',
                }}
              >
                INTEGRATED TRANSFORMATION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE BRING TOGETHER SECTION */}
      <section style={{ padding: '90px 0', background: '#FFFFFF' }}>
        <div className="section-container">
          {/* Section Tag */}
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
              WHAT WE BRING TOGETHER
            </span>
          </div>

          {/* Section Headline & Description */}
          <div style={{ marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 800,
                color: '#0A1128',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '16px',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Seven capabilities. One agenda.
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: '#64748B',
                maxWidth: '720px',
                lineHeight: 1.65,
                fontFamily: "'Inter', sans-serif",
                margin: 0,
              }}
            >
              Ajiledone brings together business transformation, industry expertise, enterprise technology, data, AI, cloud and engineering to help organizations move from fragmented initiatives toward integrated transformation.
            </p>
          </div>

          {/* 7 Interactive Pill Badges */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '44px' }}>
            {bringTogetherPills.map((pill, idx) => {
              const isDarkStyle = idx === 0 || idx === 3 || idx === 6;
              const isSelected = activeCapability === idx;

              return (
                <button
                  key={pill}
                  onClick={() => setActiveCapability(idx)}
                  style={{
                    background: isSelected || isDarkStyle ? '#0A1128' : '#F0F4FA',
                    color: isSelected || isDarkStyle ? '#FFFFFF' : '#1E293B',
                    border: '1px solid ' + (isSelected ? '#67DFCB' : 'transparent'),
                    padding: '11px 24px',
                    borderRadius: '30px',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'Inter', sans-serif",
                    boxShadow: isSelected || isDarkStyle ? '0 6px 18px rgba(10, 17, 40, 0.2)' : 'none',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    if (!isDarkStyle && !isSelected) {
                      e.currentTarget.style.background = '#E2E8F8';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    if (!isDarkStyle && !isSelected) {
                      e.currentTarget.style.background = '#F0F4FA';
                    }
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: isSelected || isDarkStyle ? '#67DFCB' : '#265CF4',
                      display: 'inline-block',
                    }}
                  />
                  {pill}
                </button>
              );
            })}
          </div>

          {/* FROM / TO Transformation Progress Cards */}
          <div className="bring-together-progress" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1.3fr', gap: '20px', alignItems: 'center' }}>
            {/* Left Card: FROM */}
            <div
              style={{
                background: '#F4F7FD',
                border: '1px solid #E2E8F0',
                padding: '28px 36px',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px', fontFamily: "'Inter', sans-serif" }}>
                FROM
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#1E293B', fontFamily: "'Inter', sans-serif" }}>
                Fragmented initiatives
              </div>
            </div>

            {/* Middle Arrow */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 8px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#265CF4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Right Card: TO */}
            <div
              style={{
                background: 'linear-gradient(90deg, #103CB5 0%, #2563EB 50%, #1FA2FF 100%)',
                color: '#FFFFFF',
                padding: '28px 36px',
                borderRadius: '16px',
                boxShadow: '0 12px 30px rgba(37, 99, 235, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(37, 99, 235, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 99, 235, 0.3)';
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#67DFCB', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px', fontFamily: "'Inter', sans-serif" }}>
                TO
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', fontFamily: "'Inter', sans-serif" }}>
                Integrated transformation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ACROSS THE LIFECYCLE SECTION */}
      <section style={{ padding: '90px 0 100px', background: '#F4F7FD', position: 'relative' }}>
        <div className="section-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '44px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              {/* Tag */}
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
                  ACROSS THE LIFECYCLE
                </span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 800,
                  color: '#0A1128',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  marginBottom: '16px',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                We don't stop at the strategy deck.
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#64748B',
                  maxWidth: '680px',
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                From identifying the opportunity and defining the architecture to engineering, implementation, integration, modernization, optimization and continuous evolution.
              </p>
            </div>

            {/* 08 LIFECYCLE Watermark */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', userSelect: 'none' }}>
              <span
                style={{
                  fontSize: '110px',
                  fontWeight: 900,
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(38, 92, 244, 0.22)',
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                }}
              >
                08
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: 'rgba(38, 92, 244, 0.45)',
                  letterSpacing: '0.18em',
                  fontFamily: "'Inter', sans-serif",
                  writingMode: 'vertical-rl',
                  textTransform: 'uppercase',
                }}
              >
                LIFECYCLE
              </span>
            </div>
          </div>

          {/* Cascading Step Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {lifecycleSteps.map((st, idx) => {
              const isSelected = activeStep === idx;
              const indent = idx * 28;

              return (
                <div
                  key={st.num}
                  onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                  className={`lifecycle-step-item ${isSelected ? 'active' : ''}`}
                  style={{
                    marginLeft: `${indent}px`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                    <span
                      className="lifecycle-step-badge"
                      style={{
                        fontSize: '12px',
                        fontWeight: 800,
                        background: '#EBF2FE',
                        color: '#265CF4',
                        padding: '4px 10px',
                        borderRadius: '10px',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {st.num}
                    </span>
                    <span style={{ fontSize: '17px', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                      {st.title}
                    </span>
                  </div>
                  <span
                    className="lifecycle-step-desc"
                    style={{
                      fontSize: '14px',
                      color: '#64748B',
                      fontFamily: "'Inter', sans-serif",
                      maxWidth: '520px',
                      textAlign: 'right',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {st.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. OUR ROLE SECTION */}
      <section
        style={{
          padding: '90px 0 100px',
          background: 'radial-gradient(ellipse at 50% 35%, #0D266E 0%, #0A1230 75%)',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="section-container">
          {/* Section Tag */}
          <div
            style={{
              textAlign: 'center',
              color: '#67DFCB',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '48px',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            OUR ROLE
          </div>

          {/* Cards Layout with Overlapping Center Badge */}
          <div
            className="our-role-cards-container"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
              alignItems: 'stretch',
              position: 'relative',
              maxWidth: '960px',
              margin: '0 auto 48px',
            }}
          >
            {/* Center Ampersand Badge */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                color: '#0A1230',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '16px',
                zIndex: 10,
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
                pointerEvents: 'none',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              &
            </div>

            {/* Left Card: MODERNIZE */}
            <div
              onClick={() => setActiveRole('modernize')}
              onMouseEnter={() => setHoveredRole('modernize')}
              onMouseLeave={() => setHoveredRole(null)}
              style={{
                background:
                  (hoveredRole === 'modernize' || (hoveredRole === null && activeRole === 'modernize'))
                    ? '#67DFCB'
                    : 'linear-gradient(135deg, rgba(20, 50, 140, 0.45) 0%, rgba(10, 18, 48, 0.75) 100%)',
                border:
                  (hoveredRole === 'modernize' || (hoveredRole === null && activeRole === 'modernize'))
                    ? '1px solid #67DFCB'
                    : '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '24px',
                padding: '44px 38px',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow:
                  (hoveredRole === 'modernize' || (hoveredRole === null && activeRole === 'modernize'))
                    ? '0 18px 45px rgba(103, 223, 203, 0.35)'
                    : '0 8px 30px rgba(0, 0, 0, 0.2)',
                transform:
                  (hoveredRole === 'modernize' || (hoveredRole === null && activeRole === 'modernize'))
                    ? 'translateY(-4px)'
                    : 'translateY(0)',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: (hoveredRole === 'modernize' || (hoveredRole === null && activeRole === 'modernize')) ? '#0A1230' : '#67DFCB',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                MODERNIZE
              </div>
              <h3
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 32px)',
                  fontWeight: 800,
                  color: (hoveredRole === 'modernize' || (hoveredRole === null && activeRole === 'modernize')) ? '#0A1230' : '#FFFFFF',
                  marginBottom: '16px',
                  lineHeight: 1.22,
                  letterSpacing: '-0.02em',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                what runs the business
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: (hoveredRole === 'modernize' || (hoveredRole === null && activeRole === 'modernize')) ? '#0A1230' : 'rgba(255, 255, 255, 0.75)',
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Stabilize, simplify and modernize the platforms the enterprise depends on today.
              </p>
            </div>

            {/* Right Card: ENGINEER */}
            <div
              onClick={() => setActiveRole('engineer')}
              onMouseEnter={() => setHoveredRole('engineer')}
              onMouseLeave={() => setHoveredRole(null)}
              style={{
                background:
                  (hoveredRole === 'engineer' || (hoveredRole === null && activeRole === 'engineer'))
                    ? '#67DFCB'
                    : 'linear-gradient(135deg, rgba(20, 50, 140, 0.45) 0%, rgba(10, 18, 48, 0.75) 100%)',
                border:
                  (hoveredRole === 'engineer' || (hoveredRole === null && activeRole === 'engineer'))
                    ? '1px solid #67DFCB'
                    : '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '24px',
                padding: '44px 38px',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow:
                  (hoveredRole === 'engineer' || (hoveredRole === null && activeRole === 'engineer'))
                    ? '0 18px 45px rgba(103, 223, 203, 0.35)'
                    : '0 8px 30px rgba(0, 0, 0, 0.2)',
                transform:
                  (hoveredRole === 'engineer' || (hoveredRole === null && activeRole === 'engineer'))
                    ? 'translateY(-4px)'
                    : 'translateY(0)',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: (hoveredRole === 'engineer' || (hoveredRole === null && activeRole === 'engineer')) ? '#0A1230' : '#265CF4',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                ENGINEER
              </div>
              <h3
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 32px)',
                  fontWeight: 800,
                  color: (hoveredRole === 'engineer' || (hoveredRole === null && activeRole === 'engineer')) ? '#0A1230' : '#FFFFFF',
                  marginBottom: '16px',
                  lineHeight: 1.22,
                  letterSpacing: '-0.02em',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                what will transform it
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: (hoveredRole === 'engineer' || (hoveredRole === null && activeRole === 'engineer')) ? '#0A1230' : 'rgba(255, 255, 255, 0.75)',
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Build the data, AI and digital capabilities that change what the business can do next.
              </p>
            </div>
          </div>

          {/* Bottom Sentence */}
          <div
            style={{
              textAlign: 'center',
              fontSize: '15px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            We help organizations modernize what runs the business — and engineer what will transform it.
          </div>
        </div>
      </section>

      {/* 8. CTA BRAND BANNER */}
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
                fontFamily: "'Inter', sans-serif",
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
                fontFamily: "'Inter', sans-serif",
                margin: 0,
                maxWidth: '680px',
              }}
            >
              Would you like more information, or do you have a question?
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
              fontFamily: "'Inter', sans-serif",
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
      </section>
    </div>
  );
}
