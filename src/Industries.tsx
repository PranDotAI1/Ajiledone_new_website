import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Zap,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Car,
  HardHat,
  Flame,
  FlaskConical,
  Building2,
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate?: (anchor: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  const [hoveredLens, setHoveredLens] = useState<number | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
  const [hoveredExploreBtn, setHoveredExploreBtn] = useState<boolean>(false);
  const [hoveredTalkBtn, setHoveredTalkBtn] = useState<boolean>(false);
  const [hoveredContextBtn, setHoveredContextBtn] = useState<boolean>(false);
  const [hoveredContactBtn, setHoveredContactBtn] = useState<boolean>(false);

  // Sequential animation states for hero Venn diagram:
  // Step 0: hidden -> Step 1: Left circle appears -> Step 2: Right circle appears -> Step 3: VALUE text appears & glows
  const [vennStep, setVennStep] = useState<number>(0);
  const [vennGlowing, setVennGlowing] = useState<boolean>(false);

  // Sequential animation states for Section 4 ("CONTEXT CHANGES EVERYTHING"):
  // Step 0: hidden -> Step 1: Heading appears -> Step 2: Cyan line bar appears -> Step 3: Capability pills appear (Button ALWAYS visible)
  const [ctaStep, setCtaStep] = useState<number>(0);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;
    let tGlow: ReturnType<typeof setTimeout>;

    const startVennSequence = () => {
      setVennStep(0);
      setVennGlowing(false);

      // Step 1: First circle appears slowly (Technology)
      t1 = setTimeout(() => setVennStep(1), 400);
      // Step 2: Next circle appears slowly (Industry)
      t2 = setTimeout(() => setVennStep(2), 1800);
      // Step 3: Central VALUE words appear slowly
      t3 = setTimeout(() => {
        setVennStep(3);
        // Subtle soft glow transition
        tGlow = setTimeout(() => setVennGlowing(true), 600);
      }, 3200);
    };

    startVennSequence();

    // Smooth, relaxed loop replay every 9.5 seconds
    const loopInterval = setInterval(() => {
      startVennSequence();
    }, 9500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tGlow);
      clearInterval(loopInterval);
    };
  }, []);

  useEffect(() => {
    let c1: ReturnType<typeof setTimeout>;
    let c2: ReturnType<typeof setTimeout>;
    let c3: ReturnType<typeof setTimeout>;
    let c4: ReturnType<typeof setTimeout>;
    let c5: ReturnType<typeof setTimeout>;
    let c6: ReturnType<typeof setTimeout>;
    let c7: ReturnType<typeof setTimeout>;

    const startCtaSequence = () => {
      setCtaStep(0);

      // Step 1: Ribbon appears first
      c1 = setTimeout(() => setCtaStep(1), 400);
      // Step 2: Main Heading appears
      c2 = setTimeout(() => setCtaStep(2), 1100);
      // Step 3: Cyan underline bar appears
      c3 = setTimeout(() => setCtaStep(3), 1800);
      // Step 4: Pill 1 (Processes) appears
      c4 = setTimeout(() => setCtaStep(4), 2500);
      // Step 5: Pill 2 (Operating models) appears
      c5 = setTimeout(() => setCtaStep(5), 3100);
      // Step 6: Pill 3 (Regulation) appears
      c6 = setTimeout(() => setCtaStep(6), 3700);
      // Step 7: Pill 4 (Value chains) appears
      c7 = setTimeout(() => setCtaStep(7), 4300);
    };

    startCtaSequence();

    // Extended hold time: stays displayed for 12+ seconds before loop refresh (16.5s total)
    const ctaInterval = setInterval(() => {
      startCtaSequence();
    }, 16500);

    return () => {
      clearTimeout(c1);
      clearTimeout(c2);
      clearTimeout(c3);
      clearTimeout(c4);
      clearTimeout(c5);
      clearTimeout(c6);
      clearTimeout(c7);
      clearInterval(ctaInterval);
    };
  }, []);

  // 10 Industry Row Cards Data matching mockups exactly
  const industries = [
    {
      id: '01',
      title: 'Energy, Resources & Oil and Gas',
      desc: 'Powering the intelligent energy enterprise.',
      tags: ['Assets', 'Joint ventures', 'Operations'],
      icon: Flame,
      bg: '#060B1E', // Dark Navy
      textColor: '#FFFFFF',
      numColor: '#FFFFFF',
      arrowColor: '#52E0CB',
      badgeBg: 'rgba(255, 255, 255, 0.15)',
    },
    {
      id: '02',
      title: 'Manufacturing',
      desc: 'From connected factories to intelligent operations.',
      tags: ['Planning', 'Quality', 'Supply chain'],
      icon: Factory,
      bg: '#FFFFFF',
      textColor: '#0A1128',
      numColor: '#1B58F4',
      arrowColor: '#1B58F4',
      badgeBg: '#EFF4FC',
    },
    {
      id: '03',
      title: 'Life Sciences & Healthcare',
      desc: 'Technology for a more connected healthcare ecosystem.',
      tags: ['Compliance', 'Supply chain', 'Data'],
      icon: HeartPulse,
      bg: '#FFFFFF',
      textColor: '#0A1128',
      numColor: '#1B58F4',
      arrowColor: '#1B58F4',
      badgeBg: '#EFF4FC',
    },
    {
      id: '04',
      title: 'Banking & Financial Services',
      desc: 'Building intelligent financial institutions.',
      tags: ['Risk', 'Customer', 'Automation'],
      icon: Landmark,
      bg: '#1B58F4', // Solid Vibrant Blue
      textColor: '#FFFFFF',
      numColor: '#FFFFFF',
      arrowColor: '#FFFFFF',
      badgeBg: 'rgba(255, 255, 255, 0.2)',
    },
    {
      id: '05',
      title: 'Consumer & Retail',
      desc: 'Connecting customers, products and supply chains.',
      tags: ['Demand', 'Inventory', 'Commerce'],
      icon: ShoppingBag,
      bg: '#FFFFFF',
      textColor: '#0A1128',
      numColor: '#1B58F4',
      arrowColor: '#1B58F4',
      badgeBg: '#EFF4FC',
    },
    {
      id: '06',
      title: 'Automotive',
      desc: 'Engineering the future of mobility.',
      tags: ['Product', 'Manufacturing', 'Supply chain'],
      icon: Car,
      bg: '#FFFFFF',
      textColor: '#0A1128',
      numColor: '#1B58F4',
      arrowColor: '#1B58F4',
      badgeBg: '#EFF4FC',
    },
    {
      id: '07',
      title: 'Mining & Metals',
      desc: 'Intelligence for asset-intensive operations.',
      tags: ['Asset performance', 'Maintenance'],
      icon: HardHat,
      bg: '#FFFFFF',
      textColor: '#0A1128',
      numColor: '#1B58F4',
      arrowColor: '#1B58F4',
      badgeBg: '#EFF4FC',
    },
    {
      id: '08',
      title: 'Utilities',
      desc: 'Building connected and resilient utilities.',
      tags: ['Assets', 'Customers', 'Operations'],
      icon: Zap,
      bg: '#52E0CB', // Mint Teal
      textColor: '#0A1128',
      numColor: '#0A1128',
      arrowColor: '#0A1128',
      badgeBg: 'rgba(10, 17, 40, 0.1)',
    },
    {
      id: '09',
      title: 'Chemicals',
      desc: 'Transforming complex manufacturing ecosystems.',
      tags: ['EHS', 'Lifecycle', 'Compliance'],
      icon: FlaskConical,
      bg: '#FFFFFF',
      textColor: '#0A1128',
      numColor: '#1B58F4',
      arrowColor: '#1B58F4',
      badgeBg: '#EFF4FC',
    },
    {
      id: '10',
      title: 'Engineering & Construction',
      desc: 'Connecting projects, assets and enterprise operations.',
      tags: ['Projects', 'Procurement', 'Finance'],
      icon: Building2,
      bg: '#FFFFFF',
      textColor: '#0A1128',
      numColor: '#1B58F4',
      arrowColor: '#1B58F4',
      badgeBg: '#EFF4FC',
    },
  ];

  // 4 Lenses Data matching Figma mockup exactly
  const lenses = [
    {
      num: '01',
      title: 'Industry processes',
      desc: 'How the work is actually sequenced \u2014 and where the exceptions live.',
      bg: '#F4F7FC',
      textColor: '#0A1128',
      numColor: '#1B58F4',
    },
    {
      num: '02',
      title: 'Operating models',
      desc: 'Who owns what, across sites, entities and geographies.',
      bg: '#1B58F4',
      textColor: '#FFFFFF',
      numColor: '#52E0CB',
    },
    {
      num: '03',
      title: 'Regulatory environments',
      desc: 'What must be evidenced, retained and reported.',
      bg: '#F4F7FC',
      textColor: '#0A1128',
      numColor: '#1B58F4',
    },
    {
      num: '04',
      title: 'Value chains',
      desc: 'Where margin is created, and where it quietly leaks.',
      bg: '#060B1E',
      textColor: '#FFFFFF',
      numColor: '#52E0CB',
    },
  ];

  const scrollToIndustries = () => {
    const el = document.getElementById('industries-list');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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
          minHeight: '760px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Subtle 12-Column Grid Lines Overlay */}
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

        {/* Glow Layer 1: Blue Glow Circle (#1FA5FF 40% Blur 200) */}
        <div
          style={{
            position: 'absolute',
            width: '460px',
            height: '460px',
            top: '120px',
            right: '80px',
            background: 'rgba(31, 165, 255, 0.40)',
            filter: 'blur(200px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Glow Layer 2: Mint Teal Glow Circle (#67DFCB 22% Blur 230) */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            top: '-50px',
            right: '220px',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
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
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Industries</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Column Content */}
            <div style={{ maxWidth: '640px' }}>
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
                &mdash; INDUSTRIES &mdash;
              </div>

              <h1
                style={{
                  fontSize: 'clamp(34px, 4.4vw, 56px)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.12,
                  letterSpacing: '-0.03em',
                  margin: '0 0 24px 0',
                }}
              >
                Industry knowledge<br />changes the transformation<br />conversation.
              </h1>

              <p
                style={{
                  fontSize: '16.5px',
                  color: 'rgba(255, 255, 255, 0.82)',
                  lineHeight: 1.6,
                  marginBottom: '36px',
                  fontWeight: 400,
                }}
              >
                Technology creates value differently across industries. Ajiledone combines technology expertise with an understanding of industry processes, operating models, regulatory environments and value chains.
              </p>

              {/* Big Metric Badge (Exact Figma Copy & Styling) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                <div style={{ fontSize: '48px', fontWeight: 900, color: '#52E0CB', lineHeight: 1 }}>
                  10
                </div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.35, maxWidth: '200px' }}>
                  industries where we bring<br />process and regulatory context
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onMouseEnter={() => setHoveredExploreBtn(true)}
                  onMouseLeave={() => setHoveredExploreBtn(false)}
                  onClick={scrollToIndustries}
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
                  Explore industries
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

            {/* Right Column: Overlapping Dual Venn Diagram Artwork (Pure Responsive Vector Visualization) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '100%', maxWidth: '440px', margin: '0 auto' }}>
              
              <div style={{ width: '100%', position: 'relative' }}>
                <svg
                  viewBox="0 0 420 280"
                  width="100%"
                  height="auto"
                  style={{ display: 'block', width: '100%', height: 'auto', overflow: 'visible' }}
                >
                  <defs>
                    <filter id="whiteCircleGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="cyanCircleGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <radialGradient id="vennCenterGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#67DFCB" stopOpacity="0.75" />
                      <stop offset="50%" stopColor="#67DFCB" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#67DFCB" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Left Circle Glass Fill (Step 1 Animation) */}
                  <circle
                    cx="140"
                    cy="140"
                    r="138"
                    fill="rgba(255, 255, 255, 0.07)"
                    style={{
                      opacity: vennStep >= 1 ? 1 : 0,
                      transform: vennStep >= 1 ? 'scale(1)' : 'scale(0.88)',
                      transformOrigin: '140px 140px',
                      transition: 'opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
                    }}
                  />

                  {/* Right Circle Glass Fill (Step 2 Animation) */}
                  <circle
                    cx="280"
                    cy="140"
                    r="138"
                    fill="rgba(255, 255, 255, 0.07)"
                    style={{
                      opacity: vennStep >= 2 ? 1 : 0,
                      transform: vennStep >= 2 ? 'scale(1)' : 'scale(0.88)',
                      transformOrigin: '280px 140px',
                      transition: 'opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
                    }}
                  />

                  {/* Left Circle Text (Step 1 Animation) */}
                  <g
                    style={{
                      opacity: vennStep >= 1 ? 1 : 0,
                      transform: vennStep >= 1 ? 'scale(1)' : 'scale(0.9)',
                      transformOrigin: '95px 140px',
                      transition: 'opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
                    }}
                  >
                    <text
                      x="95"
                      y="134"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="11.5"
                      fontWeight="800"
                      letterSpacing="1.2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      TECHNOLOGY
                    </text>
                    <text
                      x="95"
                      y="154"
                      textAnchor="middle"
                      fill="rgba(255, 255, 255, 0.75)"
                      fontSize="10.5"
                      fontWeight="400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      expertise
                    </text>
                  </g>

                  {/* Right Circle Text (Step 2 Animation) */}
                  <g
                    style={{
                      opacity: vennStep >= 2 ? 1 : 0,
                      transform: vennStep >= 2 ? 'scale(1)' : 'scale(0.9)',
                      transformOrigin: '325px 140px',
                      transition: 'opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
                    }}
                  >
                    <text
                      x="325"
                      y="134"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="11.5"
                      fontWeight="800"
                      letterSpacing="1.2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      INDUSTRY
                    </text>
                    <text
                      x="325"
                      y="154"
                      textAnchor="middle"
                      fill="rgba(255, 255, 255, 0.75)"
                      fontSize="10.5"
                      fontWeight="400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      understanding
                    </text>
                  </g>

                  {/* Central Intersection Lens Glow (Step 3 & Glow Animation) */}
                  <circle
                    cx="210"
                    cy="140"
                    r="95"
                    fill="url(#vennCenterGlow)"
                    style={{
                      opacity: vennStep >= 3 ? (vennGlowing ? 0.95 : 0.7) : 0,
                      transform: vennStep >= 3 ? (vennGlowing ? 'scale(1.06)' : 'scale(0.95)') : 'scale(0.5)',
                      transformOrigin: '210px 140px',
                      filter: vennStep >= 3 ? (vennGlowing ? 'blur(6px) brightness(1.15)' : 'blur(10px)') : 'blur(16px)',
                      transition: 'all 1.4s cubic-bezier(0.25, 1, 0.5, 1)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Overlap Intersection Label: VALUE in context (Step 3 Animation) */}
                  <g
                    style={{
                      opacity: vennStep >= 3 ? 1 : 0,
                      transform: vennStep >= 3 ? (vennGlowing ? 'scale(1.03)' : 'scale(1)') : 'scale(0.7)',
                      transformOrigin: '210px 140px',
                      transition: 'all 1.4s cubic-bezier(0.25, 1, 0.5, 1)',
                      pointerEvents: 'none',
                    }}
                  >
                    <text
                      x="210"
                      y="134"
                      textAnchor="middle"
                      fill="#67DFCB"
                      fontSize="20"
                      fontWeight="900"
                      letterSpacing="1.5"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        filter: vennGlowing ? 'drop-shadow(0 0 8px rgba(103, 223, 203, 0.6))' : 'drop-shadow(0 0 4px rgba(103, 223, 203, 0.3))',
                        transition: 'filter 1.4s ease',
                      }}
                    >
                      VALUE
                    </text>
                    <text
                      x="210"
                      y="154"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="11.5"
                      fontWeight="700"
                      letterSpacing="0.3"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      in context
                    </text>
                  </g>

                  {/* Left Circle Thin Sleek Outline (White) */}
                  <circle
                    cx="140"
                    cy="140"
                    r="137.5"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                    strokeOpacity={vennStep >= 1 ? 0.65 : 0}
                    filter="url(#whiteCircleGlow)"
                    style={{ transition: 'stroke-opacity 1.2s ease' }}
                  />

                  {/* Right Circle Thin Sleek Outline (Mint Cyan) */}
                  <circle
                    cx="280"
                    cy="140"
                    r="137.5"
                    fill="none"
                    stroke="#67DFCB"
                    strokeWidth="1.2"
                    strokeOpacity={vennStep >= 2 ? 0.75 : 0}
                    filter="url(#cyanCircleGlow)"
                    style={{ transition: 'stroke-opacity 1.2s ease' }}
                  />
                </svg>
              </div>

              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.55)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  marginTop: '20px',
                  textAlign: 'center',
                }}
              >
                WHERE THE CONVERSATION CHANGES
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR LENSES ON EVERY ENGAGEMENT */}
      <section style={{ padding: '96px 0', backgroundColor: '#FFFFFF' }}>
        <div className="section-container">
          <div style={{ marginBottom: '56px' }}>
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
                WHAT WE BRING BEYOND THE TECHNOLOGY
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 50px)',
                fontWeight: 900,
                color: '#0A1128',
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                margin: '0 0 16px 0',
              }}
            >
              Four lenses on every engagement.
            </h2>

            <p
              style={{
                fontSize: '16.5px',
                color: '#64748B',
                margin: 0,
                fontWeight: 500,
                maxWidth: '720px',
                lineHeight: 1.6,
              }}
            >
              Technology creates value differently across industries &mdash; because the processes, the operating model, the regulator and the value chain are different.
            </p>
          </div>

          {/* 4 Cards Horizontal Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {lenses.map((lens, idx) => {
              const isHovered = hoveredLens === idx;

              return (
                <div
                  key={lens.num}
                  onMouseEnter={() => setHoveredLens(idx)}
                  onMouseLeave={() => setHoveredLens(null)}
                  style={{
                    backgroundColor: lens.bg,
                    color: lens.textColor,
                    borderRadius: '20px',
                    padding: '36px 28px',
                    minHeight: '230px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transform: isHovered ? 'scale(1.03) translateY(-4px)' : 'scale(1)',
                    boxShadow: isHovered ? '0 16px 36px rgba(10, 17, 40, 0.15)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 900,
                      color: lens.numColor,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {lens.num}
                  </div>

                  <div>
                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: 900,
                        color: lens.textColor,
                        lineHeight: 1.15,
                        margin: '0 0 10px 0',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {lens.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '13px',
                        fontWeight: 500,
                        color: lens.textColor === '#FFFFFF' ? 'rgba(255, 255, 255, 0.82)' : '#64748B',
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {lens.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. TEN INDUSTRIES (10 ROW CARDS LIST) */}
      <section id="industries-list" style={{ padding: '96px 0', backgroundColor: '#F8FAFC' }}>
        <div className="section-container">
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
                  WHERE WE WORK
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  fontWeight: 900,
                  color: '#0A1128',
                  lineHeight: 1.12,
                  letterSpacing: '-0.03em',
                  margin: 0,
                }}
              >
                Ten industries.
              </h2>
            </div>

            <p
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#64748B',
                margin: 0,
                maxWidth: '380px',
                lineHeight: 1.5,
              }}
            >
              Every one has a different definition of &ldquo;well run&rdquo;.
            </p>
          </div>

          {/* 10 Industry Rows Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {industries.map((ind, idx) => {
              const isHovered = hoveredIndustry === idx;

              return (
                <div
                  key={ind.id}
                  className="industry-row-card"
                  onMouseEnter={() => setHoveredIndustry(idx)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                  onClick={() => {
                    if (ind.id === '01' || ind.title.includes('Energy')) {
                      if (onNavigate) onNavigate('#energy-resources-oil-gas');
                    } else if (ind.id === '02' || ind.title.includes('Manufacturing')) {
                      if (onNavigate) onNavigate('#manufacturing');
                    } else if (ind.id === '03' || ind.title.includes('Life Sciences')) {
                      if (onNavigate) onNavigate('#life-sciences-financial-services');
                    } else if (ind.id === '04' || ind.title.includes('Banking') || ind.title.includes('Financial')) {
                      if (onNavigate) onNavigate('#life-sciences-financial-services');
                    } else if (ind.title.includes('Consumer') || ind.title.includes('Retail')) {
                      if (onNavigate) onNavigate('#consumer-retail');
                    } else if (ind.title.includes('Automotive') || ind.title.includes('Mobility')) {
                      if (onNavigate) onNavigate('#automotive');
                    } else if (ind.id === '07' || ind.title.includes('Mining')) {
                      if (onNavigate) onNavigate('#mining-metals');
                    } else if (ind.id === '08' || ind.title.includes('Utilities')) {
                      if (onNavigate) onNavigate('#utilities');
                    } else if (ind.id === '09' || ind.title.includes('Chemicals')) {
                      if (onNavigate) onNavigate('#chemicals');
                    } else if (ind.id === '10' || ind.title.includes('Engineering') || ind.title.includes('Construction')) {
                      if (onNavigate) onNavigate('#engineering-construction');
                    }
                  }}
                  style={{
                    backgroundColor: ind.bg,
                    color: ind.textColor,
                    borderRadius: '16px',
                    boxShadow: isHovered
                      ? '0 16px 36px rgba(10, 17, 40, 0.14)'
                      : ind.bg === '#FFFFFF'
                      ? '0 2px 8px rgba(0, 0, 0, 0.03)'
                      : 'none',
                    transform: isHovered ? 'scale(1.012) translateY(-2px)' : 'scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                    border: ind.bg === '#FFFFFF' ? '1px solid #EEF2F6' : 'none',
                  }}
                >
                  {/* Title Header Block (Badge + Title) */}
                  <div className="industry-row-title-group">
                    <div
                      style={{
                        backgroundColor: ind.badgeBg,
                        color: ind.numColor,
                        padding: '5px 12px',
                        borderRadius: '8px',
                        fontSize: '12.5px',
                        fontWeight: 800,
                        letterSpacing: '0.04em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {ind.id}
                    </div>

                    <h3 className="industry-title-text" style={{ color: ind.textColor }}>
                      {ind.title}
                    </h3>
                  </div>

                  {/* Center: Subtitle description */}
                  <p
                    className="industry-row-desc"
                    style={{
                      fontSize: '13.5px',
                      fontWeight: 500,
                      color: ind.textColor === '#FFFFFF' ? 'rgba(255, 255, 255, 0.85)' : '#64748B',
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {ind.desc}
                  </p>

                  {/* Right: Dot-Separated Capability Tags */}
                  <div
                    className="industry-row-tags"
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: ind.textColor === '#FFFFFF' ? 'rgba(255, 255, 255, 0.75)' : '#64748B',
                      whiteSpace: 'nowrap',
                      textAlign: 'right',
                    }}
                  >
                    {ind.tags.join(' \u00B7 ')}
                  </div>

                  {/* Right: Desktop Arrow Icon */}
                  <div className="industry-arrow-desktop">
                    <ArrowRight
                      size={18}
                      color={ind.arrowColor}
                      style={{
                        transform: isHovered ? 'translateX(4px)' : 'none',
                        transition: 'transform 0.25s ease',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DEEP INDUSTRY EXPERTISE BANNER (EXACT FIGMA COLORS: #0A1230 -> #0D2A75 -> #1942B2 & #67DFCB GLOW) */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A1230 0%, #0D2A75 48%, #1942B2 100%)',
          color: '#FFFFFF',
          padding: '110px 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow Layer 620px x 620px (#67DFCB 22% blur 230px) */}
        <div
          style={{
            position: 'absolute',
            width: '620px',
            height: '620px',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Step 1 Animation: Ribbon Tagline appears first */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
              opacity: ctaStep >= 1 ? 1 : 0,
              transform: ctaStep >= 1 ? 'translateY(0)' : 'translateY(-14px)',
              transition: 'opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          >
            <div style={{ width: '22px', height: '2px', backgroundColor: '#67DFCB' }} />
            <span
              style={{
                fontSize: '11.5px',
                fontWeight: 800,
                color: '#67DFCB',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              CONTEXT CHANGES EVERYTHING
            </span>
            <div style={{ width: '22px', height: '2px', backgroundColor: '#67DFCB' }} />
          </div>

          {/* Step 2 Animation: Heading appears next */}
          <h2
            style={{
              fontSize: 'clamp(34px, 4.4vw, 56px)',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              maxWidth: '960px',
              margin: '0 auto 24px',
              textAlign: 'center',
              opacity: ctaStep >= 2 ? 1 : 0,
              transform: ctaStep >= 2 ? 'translateY(0)' : 'translateY(-14px)',
              transition: 'opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          >
            Industry knowledge changes<br />the transformation conversation.
          </h2>

          {/* Step 3 Animation: Accent Glowing Mint Cyan Underline Bar appears next */}
          <div
            style={{
              width: '160px',
              height: '4px',
              backgroundColor: '#67DFCB',
              borderRadius: '2px',
              boxShadow: '0 0 16px rgba(103, 223, 203, 0.8)',
              margin: '0 auto 36px',
              opacity: ctaStep >= 3 ? 1 : 0,
              transform: ctaStep >= 3 ? 'scaleX(1)' : 'scaleX(0.1)',
              transition: 'opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          />

          {/* Steps 4 to 7 Animation: 4 Capability Pills appear ONE BY ONE */}
          <div
            style={{
              display: 'flex',
              gap: '14px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: '840px',
              margin: '0 auto 44px',
            }}
          >
            {['Processes', 'Operating models', 'Regulation', 'Value chains'].map((item, idx) => {
              const pillStep = 4 + idx;
              const isVisible = ctaStep >= pillStep;

              return (
                <div
                  key={item}
                  style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    padding: '10px 24px',
                    borderRadius: '9999px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(14px)',
                    transition: 'opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                >
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#67DFCB' }} />
                  <span>{item}</span>
                </div>
              );
            })}
          </div>

          {/* Primary Action Button (ALWAYS VISIBLE STATICALLY) */}
          <button
            onMouseEnter={() => setHoveredContextBtn(true)}
            onMouseLeave={() => setHoveredContextBtn(false)}
            onClick={() => onNavigate && onNavigate('#contact')}
            style={{
              background: '#FFFFFF',
              color: '#0D2A75',
              border: '1.5px solid #FFFFFF',
              padding: '16px 42px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '15px',
              opacity: 1, // Always visible statically
              transform: hoveredContextBtn ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
              boxShadow: hoveredContextBtn ? '0 14px 32px rgba(255, 255, 255, 0.4)' : '0 4px 16px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
            }}
          >
            Bring industry context in
          </button>
        </div>
      </section>

      {/* 5. CTA BANNER ("DON'T BE WEIRD") */}
      <section
        style={{
          background: 'linear-gradient(90deg, #265CF4 0%, #1FA5FF 100%)',
          color: '#FFFFFF',
          padding: '72px 0',
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
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '11.5px',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.85)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                DON'T BE WEIRD
              </div>

              <h3
                style={{
                  fontSize: 'clamp(24px, 3.4vw, 38px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                Would you like more information, or<br />do you have a question?
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
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '14.5px',
                textDecoration: 'none',
                transform: hoveredContactBtn ? 'scale(1.06) translateY(-2px)' : 'scale(1)',
                boxShadow: hoveredContactBtn ? '0 12px 28px rgba(0, 0, 0, 0.2)' : '0 4px 14px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-block',
                cursor: 'pointer',
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
