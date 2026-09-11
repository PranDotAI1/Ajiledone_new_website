import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ManufacturingPageProps {
  onNavigate?: (anchor: string) => void;
}

export const ManufacturingPage: React.FC<ManufacturingPageProps> = ({ onNavigate }) => {
  const [animStep, setAnimStep] = useState(0);
  const [connectStep, setConnectStep] = useState(0);
  const [hoveredExploreBtn, setHoveredExploreBtn] = useState(false);
  const [hoveredTalkBtn, setHoveredTalkBtn] = useState(false);
  const [hoveredContactBtn, setHoveredContactBtn] = useState(false);
  const [hoveredCtaBtn, setHoveredCtaBtn] = useState(false);
  const [hoveredValueCard, setHoveredValueCard] = useState<number | null>(null);
  const [hoveredPriority, setHoveredPriority] = useState<number | null>(null);
  const [hoveredMaturityBlock, setHoveredMaturityBlock] = useState<number | null>(null);
  const [hoveredCtaTab, setHoveredCtaTab] = useState<number | null>(null);

  const scrollToPriorities = () => {
    const el = document.getElementById('factory-priorities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const diagramRef = useRef<HTMLDivElement>(null);
  const connectSectionRef = useRef<HTMLElement>(null);

  const playSequence = useCallback(() => {
    setAnimStep(0);                                      // Step 0: Blank start (nothing showing)
    const t1 = setTimeout(() => setAnimStep(1), 500);   // Step 1: Both Axes appear
    const t2 = setTimeout(() => setAnimStep(2), 1500);  // Step 2: Card 01 (CONNECTED)
    const t3 = setTimeout(() => setAnimStep(3), 2500);  // Step 3: Card 02 (PREDICTIVE)
    const t4 = setTimeout(() => setAnimStep(4), 3300);  // Step 4: Arrow 1
    const t5 = setTimeout(() => setAnimStep(5), 4100);  // Step 5: Card 03 (AUTOMATED)
    const t6 = setTimeout(() => setAnimStep(6), 4900);  // Step 6: Arrow 2

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      clearTimeout(t4); clearTimeout(t5); clearTimeout(t6);
    };
  }, []);

  // Infinite looping animation sequence for Hero Diagram (9.5s total cycle)
  useEffect(() => {
    let active = true;
    let cleanupCurrent: (() => void) | undefined;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const startLoop = () => {
      if (!active) return;
      cleanupCurrent = playSequence();
    };

    const node = diagramRef.current;
    if (!node) {
      startLoop();
      intervalId = setInterval(startLoop, 9500);
      return () => {
        active = false;
        if (intervalId) clearInterval(intervalId);
        if (cleanupCurrent) cleanupCurrent();
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startLoop();
          if (!intervalId) {
            intervalId = setInterval(startLoop, 9500);
          }
        } else {
          if (intervalId) {
            clearInterval(intervalId);
            intervalId = undefined;
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => {
      active = false;
      observer.disconnect();
      if (intervalId) clearInterval(intervalId);
      if (cleanupCurrent) cleanupCurrent();
    };
  }, [playSequence]);

  // Section 2: Sequenced appearance loop callback (Cards + Line + Stems reveal together 01-09)
  const playConnectSequence = useCallback(() => {
    setConnectStep(0);                                            // Step 0: Blank cards & baseline
    const t1 = setTimeout(() => setConnectStep(1), 400);          // Step 1: Card 01 + Line segment 1 + Stem 1 + Left Label
    const t2 = setTimeout(() => setConnectStep(2), 900);          // Step 2: Card 02 + Line segment 2 + Stem 2
    const t3 = setTimeout(() => setConnectStep(3), 1400);         // Step 3: Card 03 + Line segment 3 + Stem 3
    const t4 = setTimeout(() => setConnectStep(4), 1900);         // Step 4: Card 04 + Line segment 4 + Stem 4
    const t5 = setTimeout(() => setConnectStep(5), 2400);         // Step 5: Card 05 + Line segment 5 + Stem 5
    const t6 = setTimeout(() => setConnectStep(6), 2900);         // Step 6: Card 06 + Line segment 6 + Stem 6
    const t7 = setTimeout(() => setConnectStep(7), 3400);         // Step 7: Card 07 + Line segment 7 + Stem 7
    const t8 = setTimeout(() => setConnectStep(8), 3900);         // Step 8: Card 08 + Line segment 8 + Stem 8
    const t9 = setTimeout(() => setConnectStep(9), 4400);         // Step 9: Card 09 + Line 100% + Stem 9 + Right Label
    const t10 = setTimeout(() => setConnectStep(10), 5100);       // Step 10: Bottom summary text appears

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      clearTimeout(t4); clearTimeout(t5); clearTimeout(t6); clearTimeout(t7);
      clearTimeout(t8); clearTimeout(t9); clearTimeout(t10);
    };
  }, []);

  // Scroll-triggered animation sequence for Section 2 (plays once on scroll)
  useEffect(() => {
    let active = true;
    let cleanupCurrent: (() => void) | undefined;

    const startSequence = () => {
      if (!active) return;
      if (cleanupCurrent) cleanupCurrent();
      cleanupCurrent = playConnectSequence();
    };

    const node = connectSectionRef.current;
    if (!node) {
      startSequence();
      return () => {
        active = false;
        if (cleanupCurrent) cleanupCurrent();
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startSequence();
        } else {
          if (cleanupCurrent) {
            cleanupCurrent();
            cleanupCurrent = undefined;
          }
          setConnectStep(0);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => {
      active = false;
      observer.disconnect();
      if (cleanupCurrent) cleanupCurrent();
    };
  }, [playConnectSequence]);

  // 9 Value Stream Steps ("One value stream, end to end.")
  const valueStreamCards = [
    { num: '01', title: 'Planning', bg: '#1B58F4', textColor: '#FFFFFF', numColor: '#52E0CB', dotColor: '#1B58F4' },
    { num: '02', title: 'Procurement', bg: '#F4F7FC', textColor: '#0A1128', numColor: '#1B58F4', dotColor: '#52E0CB' },
    { num: '03', title: 'Production', bg: '#F4F7FC', textColor: '#0A1128', numColor: '#1B58F4', dotColor: '#52E0CB' },
    { num: '04', title: 'Quality', bg: '#F4F7FC', textColor: '#0A1128', numColor: '#1B58F4', dotColor: '#52E0CB' },
    { num: '05', title: 'Warehousing', bg: '#1B58F4', textColor: '#FFFFFF', numColor: '#52E0CB', dotColor: '#1B58F4' },
    { num: '06', title: 'Logistics', bg: '#F4F7FC', textColor: '#0A1128', numColor: '#1B58F4', dotColor: '#52E0CB' },
    { num: '07', title: 'Assets', bg: '#F4F7FC', textColor: '#0A1128', numColor: '#1B58F4', dotColor: '#52E0CB' },
    { num: '08', title: 'Finance', bg: '#F4F7FC', textColor: '#0A1128', numColor: '#1B58F4', dotColor: '#52E0CB' },
    { num: '09', title: 'Enterprise data', bg: '#060B1E', textColor: '#FFFFFF', numColor: '#52E0CB', dotColor: '#060B1E' },
  ];

  // 10 Factory Agenda Priorities
  const factoryPriorities = [
    { num: '01', title: 'Smart Manufacturing', bg: '#060B1E', textColor: '#FFFFFF', numColor: '#52E0CB', accentLine: '#52E0CB' },
    { num: '02', title: 'Integrated Planning', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#1B58F4', accentLine: '#E2E8F0' },
    { num: '03', title: 'Production Optimization', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#1B58F4', accentLine: '#E2E8F0' },
    { num: '04', title: 'Quality Management', bg: '#1B58F4', textColor: '#FFFFFF', numColor: '#52E0CB', accentLine: '#52E0CB' },
    { num: '05', title: 'Warehouse Transformation', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#1B58F4', accentLine: '#E2E8F0' },
    { num: '06', title: 'Asset Performance', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#1B58F4', accentLine: '#E2E8F0' },
    { num: '07', title: 'Predictive Maintenance', bg: '#52E0CB', textColor: '#0A1128', numColor: '#0A1128', accentLine: '#1B58F4' },
    { num: '08', title: 'Supply Chain Visibility', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#1B58F4', accentLine: '#E2E8F0' },
    { num: '09', title: 'Manufacturing Analytics', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#1B58F4', accentLine: '#E2E8F0' },
    { num: '10', title: 'AI-enabled Operations', bg: '#060B1E', textColor: '#FFFFFF', numColor: '#52E0CB', accentLine: '#52E0CB' },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#FFFFFF', color: '#0A1128' }}>

      {/* 1. HERO SECTION */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A1230 0%, #0D2A75 45%, #1942B2 100%)',
          color: '#FFFFFF',
          padding: '120px 0 110px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '780px',
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

        {/* Radial Glow 1 (Figma Ellipse: 600px, #67DFCB 22%, blur 230px) */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            top: '120px',
            right: '40px',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Radial Glow 2 (Figma Ellipse: 460px, #1FA5FF 40%, top: 380px) */}
        <div
          style={{
            position: 'absolute',
            width: '460px',
            height: '460px',
            top: '380px',
            right: '120px',
            background: 'rgba(31, 165, 255, 0.40)',
            filter: 'blur(220px)',
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
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Manufacturing</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Heading & CTAs */}
            <div style={{ maxWidth: '620px' }}>
              {/* Teal Eyebrow Bar + Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                }}
              >
                <div style={{ width: '32px', height: '2.5px', backgroundColor: '#67DFCB', borderRadius: '2px' }} />
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 800,
                    color: '#67DFCB',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  MANUFACTURING
                </span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 56px)',
                  fontWeight: 800,
                  lineHeight: 1.12,
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  margin: '0 0 24px 0',
                }}
              >
                From connected factories<br />to intelligent operations.
              </h1>

              {/* First Paragraph */}
              <p
                style={{
                  fontSize: '16.5px',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '20px',
                  maxWidth: '540px',
                  fontWeight: 400,
                }}
              >
                Manufacturing organizations are moving toward increasingly connected, predictive and automated operations.
              </p>

              {/* Second Paragraph (Teal Highlighted Text) */}
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#67DFCB',
                  lineHeight: 1.55,
                  marginBottom: '40px',
                  maxWidth: '540px',
                }}
              >
                Ajiledone connects planning, procurement, production, quality, warehousing, logistics, assets, finance and enterprise data.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                {/* Button 1: Colorless Statically -> Solid White on Hover */}
                <button
                  onClick={scrollToPriorities}
                  onMouseEnter={() => setHoveredExploreBtn(true)}
                  onMouseLeave={() => setHoveredExploreBtn(false)}
                  style={{
                    backgroundColor: hoveredExploreBtn ? '#FFFFFF' : 'transparent',
                    color: hoveredExploreBtn ? '#08194A' : '#FFFFFF',
                    border: '1.5px solid #FFFFFF',
                    padding: '14px 34px',
                    borderRadius: '9999px',
                    fontWeight: 800,
                    fontSize: '14.5px',
                    cursor: 'pointer',
                    transform: hoveredExploreBtn ? 'scale(1.04) translateY(-2px)' : 'scale(1)',
                    boxShadow: hoveredExploreBtn ? '0 12px 28px rgba(255, 255, 255, 0.35)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  See industry priorities
                </button>

                {/* Button 2: Colorless Statically -> Teal on Hover */}
                <a
                  href="#contact"
                  onMouseEnter={() => setHoveredTalkBtn(true)}
                  onMouseLeave={() => setHoveredTalkBtn(false)}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('#contact');
                  }}
                  style={{
                    backgroundColor: hoveredTalkBtn ? '#67DFCB' : 'transparent',
                    color: hoveredTalkBtn ? '#08194A' : '#FFFFFF',
                    border: hoveredTalkBtn ? '1.5px solid #67DFCB' : '1.5px solid rgba(255, 255, 255, 0.4)',
                    padding: '14px 34px',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transform: hoveredTalkBtn ? 'scale(1.04) translateY(-2px)' : 'scale(1)',
                    boxShadow: hoveredTalkBtn ? '0 10px 24px rgba(103, 223, 203, 0.4)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  Talk to Ajiledone
                </a>
              </div>
            </div>

            {/* Right Column: Maturity & Direction of Travel Stepped Diagram (Dynamic Sequenced Animation) */}
            <div
              ref={diagramRef}
              style={{ position: 'relative', width: '100%', maxWidth: '520px', margin: '0 auto', paddingLeft: '48px', paddingBottom: '44px' }}
            >
              {/* 1. Vertical Axis Line (Animates first: animStep >= 1) */}
              <div
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '10px',
                  bottom: '24px',
                  width: '1.2px',
                  backgroundColor: 'rgba(255, 255, 255, 0.30)',
                  opacity: animStep >= 1 ? 1 : 0,
                  transform: animStep >= 1 ? 'scaleY(1)' : 'scaleY(0)',
                  transformOrigin: 'top center',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />

              {/* 2. Vertical Axis Label: MATURITY (Animates with axes: animStep >= 1) */}
              <div
                style={{
                  position: 'absolute',
                  left: '-26px',
                  top: '42%',
                  transform: 'translateY(-50%) rotate(-90deg)',
                  transformOrigin: 'center center',
                  fontSize: '10px',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.45)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  opacity: animStep >= 1 ? 1 : 0,
                  transition: 'opacity 0.85s ease',
                }}
              >
                MATURITY
              </div>

              {/* 3. Bottom Horizontal Axis Label: THE DIRECTION OF TRAVEL (Animates with axes: animStep >= 1) */}
              <div
                style={{
                  position: 'absolute',
                  left: '16px',
                  bottom: '0px',
                  fontSize: '10px',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.45)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  opacity: animStep >= 1 ? 1 : 0,
                  transition: 'opacity 0.85s ease',
                }}
              >
                THE DIRECTION OF TRAVEL
              </div>

              {/* 4. Floating Up-Right Arrow 1 (Appears right after Card 02: animStep >= 4) */}
              <div
                className="hero-arrow-1"
                style={{
                  width: '21px',
                  height: '27px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#67DFCB',
                  opacity: animStep >= 4 ? 1 : 0,
                  transform: animStep >= 4 ? 'translate(0, 0) scale(1)' : 'translate(-10px, 10px) scale(0.5)',
                  transition: 'all 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <ArrowUpRight size={22} strokeWidth={2.8} />
              </div>

              {/* 5. Floating Up-Right Arrow 2 (Appears right after Card 03: animStep >= 6) */}
              <div
                className="hero-arrow-2"
                style={{
                  width: '21px',
                  height: '27px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#67DFCB',
                  opacity: animStep >= 6 ? 1 : 0,
                  transform: animStep >= 6 ? 'translate(0, 0) scale(1)' : 'translate(-10px, 10px) scale(0.5)',
                  transition: 'all 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <ArrowUpRight size={22} strokeWidth={2.8} />
              </div>

              {/* Stepped Floating Cards Stack */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0px',
                  width: '100%',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {/* Card 03 Wrapper: AUTOMATED (Animates 3rd: animStep >= 5) */}
                <div
                  className="hero-card-03"
                  style={{
                    marginBottom: '-4px',
                    position: 'relative',
                    zIndex: 3,
                    opacity: animStep >= 5 ? 1 : 0,
                    transform: animStep >= 5 ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.92)',
                    transition: 'all 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    onMouseEnter={() => setHoveredMaturityBlock(2)}
                    onMouseLeave={() => setHoveredMaturityBlock(null)}
                    style={{
                      width: '100%',
                      height: '112px',
                      background: 'linear-gradient(90deg, #67DFCB 0%, #1FA5FF 100%)',
                      color: '#0A1128',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.35)',
                      padding: '22px 26px 24px 26px',
                      boxShadow: hoveredMaturityBlock === 2
                        ? '0 20px 45px rgba(3, 10, 41, 0.5), 0 0 24px rgba(103, 223, 203, 0.6)'
                        : '0 16px 32px rgba(3, 10, 41, 0.35)',
                      transform: hoveredMaturityBlock === 2 ? 'scale(1.04) translateY(-3px)' : 'scale(1)',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 900, color: '#1B58F4' }}>03</span>
                      <span style={{ fontSize: '16px', fontWeight: 900, letterSpacing: '0.04em', color: '#0A1128' }}>AUTOMATED</span>
                    </div>
                    <div style={{ fontSize: '12.5px', fontWeight: 600, color: 'rgba(10, 17, 40, 0.85)', lineHeight: 1.4 }}>
                      The response runs without waiting to be told.
                    </div>
                  </div>
                </div>

                {/* Card 02 Wrapper: PREDICTIVE (Animates 2nd: animStep >= 3) */}
                <div
                  className="hero-card-02"
                  style={{
                    marginBottom: '-4px',
                    position: 'relative',
                    zIndex: 2,
                    opacity: animStep >= 3 ? 1 : 0,
                    transform: animStep >= 3 ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.92)',
                    transition: 'all 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    onMouseEnter={() => setHoveredMaturityBlock(1)}
                    onMouseLeave={() => setHoveredMaturityBlock(null)}
                    style={{
                      width: '100%',
                      height: '112px',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: '1.2px solid rgba(255, 255, 255, 0.30)',
                      color: '#FFFFFF',
                      borderRadius: '16px',
                      padding: '22px 26px 24px 26px',
                      boxShadow: hoveredMaturityBlock === 1
                        ? '0 20px 40px rgba(3, 10, 41, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)'
                        : '0 16px 32px rgba(3, 10, 41, 0.35)',
                      transform: hoveredMaturityBlock === 1 ? 'scale(1.04) translateY(-3px)' : 'scale(1)',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 900, color: '#67DFCB' }}>02</span>
                      <span style={{ fontSize: '16px', fontWeight: 900, letterSpacing: '0.04em', color: '#FFFFFF' }}>PREDICTIVE</span>
                    </div>
                    <div style={{ fontSize: '12.5px', fontWeight: 500, color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.4 }}>
                      The failure and the shortfall seen in advance.
                    </div>
                  </div>
                </div>

                {/* Card 01 Wrapper: CONNECTED (Animates 1st: animStep >= 2) */}
                <div
                  className="hero-card-01"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    opacity: animStep >= 2 ? 1 : 0,
                    transform: animStep >= 2 ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.92)',
                    transition: 'all 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    onMouseEnter={() => setHoveredMaturityBlock(0)}
                    onMouseLeave={() => setHoveredMaturityBlock(null)}
                    style={{
                      width: '100%',
                      height: '112px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255, 255, 255, 0.22)',
                      color: '#FFFFFF',
                      borderRadius: '16px',
                      padding: '22px 26px 24px 26px',
                      boxShadow: hoveredMaturityBlock === 0
                        ? '0 20px 40px rgba(3, 10, 41, 0.5), 0 0 20px rgba(255, 255, 255, 0.15)'
                        : '0 16px 32px rgba(3, 10, 41, 0.35)',
                      transform: hoveredMaturityBlock === 0 ? 'scale(1.04) translateY(-3px)' : 'scale(1)',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 900, color: '#67DFCB' }}>01</span>
                      <span style={{ fontSize: '16px', fontWeight: 900, letterSpacing: '0.04em', color: '#FFFFFF' }}>CONNECTED</span>
                    </div>
                    <div style={{ fontSize: '12.5px', fontWeight: 500, color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.4 }}>
                      Machines, sites and systems on one signal.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 2: WHAT WE CONNECT ("One value stream, end to end.") */}
      <section ref={connectSectionRef} style={{ padding: '96px 0 100px', backgroundColor: '#FFFFFF' }}>
        <div className="section-container">
          
          {/* Section Eyebrow, Title & Subtitle (Always Statically Visible) */}
          <div style={{ marginBottom: '48px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '2.5px',
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
                fontSize: 'clamp(32px, 3.8vw, 44px)',
                fontWeight: 800,
                color: '#0A1128',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                margin: '0 0 16px 0',
              }}
            >
              One value stream, end to end.
            </h2>

            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                color: '#52607B',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '680px',
              }}
            >
              Ajiledone helps connect planning, procurement, production, quality, warehousing, logistics, assets, finance and enterprise data.
            </p>
          </div>

          {/* DESKTOP HORIZONTAL VALUE STREAM VIEW (> 860px) */}
          <div className="value-stream-desktop-view">
            <div
              className="no-scrollbar"
              style={{
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                width: 'calc(100% + 48px)',
                marginLeft: '-24px',
                marginRight: '-24px',
                paddingLeft: '24px',
                paddingRight: '24px',
                paddingTop: '20px',
                paddingBottom: '20px',
                marginBottom: '20px',
                boxSizing: 'border-box',
              }}
            >
              <div className="value-stream-track" style={{ position: 'relative' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(9, minmax(108px, 1fr))',
                    gap: '10px',
                    alignItems: 'stretch',
                  }}
                >
                  {valueStreamCards.map((card, idx) => {
                    const isHovered = hoveredValueCard === idx;
                    const isVisible = connectStep >= idx + 1;

                    return (
                      <div
                        key={card.num}
                        onMouseEnter={() => setHoveredValueCard(idx)}
                        onMouseLeave={() => setHoveredValueCard(null)}
                        style={{
                          backgroundColor: card.bg,
                          color: card.textColor,
                          borderRadius: '16px',
                          padding: '22px 12px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-start',
                          textAlign: 'left',
                          boxShadow: isHovered
                            ? '0 16px 32px rgba(10, 17, 40, 0.16)'
                            : '0 2px 8px rgba(0, 0, 0, 0.02)',
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible
                            ? (isHovered ? 'scale(1.05) translateY(-4px)' : 'scale(1) translateY(0)')
                            : 'scale(0.88) translateY(24px)',
                          transition: 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                          cursor: 'pointer',
                          minHeight: '110px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '12px',
                            fontWeight: 800,
                            color: card.numColor,
                            marginBottom: '8px',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {card.num}
                        </div>

                        <div
                          style={{
                            fontSize: '13px',
                            fontWeight: 800,
                            lineHeight: 1.25,
                            letterSpacing: '-0.01em',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {card.title}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Connecting Baseline & Node Dots */}
                <div style={{ position: 'relative', marginTop: '24px', paddingTop: '20px', paddingBottom: '16px', width: '100%' }}>
                  {/* Horizontal Gray Line */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0px',
                      left: '0px',
                      right: '0px',
                      height: '1.5px',
                      backgroundColor: '#E2E8F0',
                      opacity: connectStep >= 1 ? 1 : 0,
                      transform: `scaleX(${connectStep >= 1 ? Math.min(1, Math.max(0, connectStep / 9)) : 0})`,
                      transformOrigin: 'left center',
                      transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
                    }}
                  />

                  {/* 9 Stem Lines + Node Dots */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(9, 1fr)',
                      gap: '12px',
                      position: 'absolute',
                      top: '-20px',
                      left: '0px',
                      right: '0px',
                      pointerEvents: 'none',
                    }}
                  >
                    {valueStreamCards.map((card, idx) => {
                      const isCardActive = connectStep >= idx + 1;
                      return (
                        <div
                          key={card.num}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            opacity: isCardActive ? 1 : 0,
                            transform: isCardActive ? 'translateY(0) scale(1)' : 'translateY(-12px) scale(0.4)',
                            transition: 'all 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          }}
                        >
                          {/* Vertical stem line */}
                          <div style={{ width: '1.5px', height: '20px', backgroundColor: '#CBD5E1' }} />
                          {/* Node Dot */}
                          <div
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: card.dotColor,
                              marginTop: '-4px',
                              boxShadow: `0 0 0 3px #FFFFFF`,
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Baseline Labels */}
                  <div style={{ position: 'relative', width: '100%', minHeight: '24px', marginTop: '12px' }}>
                    <span
                      style={{
                        position: 'absolute',
                        left: '0px',
                        top: '0px',
                        fontSize: '10.5px',
                        fontWeight: 800,
                        color: '#94A3B8',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                        opacity: connectStep >= 1 ? 1 : 0,
                        transform: connectStep >= 1 ? 'translateY(0)' : 'translateY(6px)',
                        transition: 'all 0.65s ease',
                      }}
                    >
                      MATERIAL & INFORMATION FLOW
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        right: '0px',
                        top: '0px',
                        fontSize: '10.5px',
                        fontWeight: 800,
                        color: '#1B58F4',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                        textAlign: 'right',
                        opacity: connectStep >= 9 ? 1 : 0,
                        transform: connectStep >= 9 ? 'translateY(0)' : 'translateY(6px)',
                        transition: 'all 0.65s ease',
                      }}
                    >
                      ONE CONNECTED PICTURE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE & TABLET VERTICAL VALUE STREAM VIEW (<= 1200px) */}
          <div className="value-stream-mobile-view" style={{ marginBottom: '32px', position: 'relative' }}>
            {/* Top Label */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
                fontSize: '11px',
                fontWeight: 800,
                color: '#94A3B8',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                opacity: connectStep >= 1 ? 1 : 0,
                transition: 'opacity 0.5s ease',
              }}
            >
              <div style={{ width: '20px', height: '2.5px', backgroundColor: '#94A3B8', borderRadius: '2px' }} />
              <span>MATERIAL & INFORMATION FLOW</span>
            </div>

            {/* Vertical Stream Container with Connecting Line */}
            <div style={{ position: 'relative', paddingLeft: '24px' }}>
              {/* Vertical Baseline Track */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  bottom: '12px',
                  left: '6px',
                  width: '2px',
                  backgroundColor: '#E2E8F0',
                  borderRadius: '1px',
                }}
              />

              {/* Animated Vertical Blue Progress Line */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '6px',
                  width: '2px',
                  height: `${connectStep >= 1 ? Math.min(100, Math.max(0, (connectStep / 9) * 100)) : 0}%`,
                  backgroundColor: '#1B58F4',
                  borderRadius: '1px',
                  transition: 'height 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />

              {/* 9 Vertical Card Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {valueStreamCards.map((card, idx) => {
                  const isVisible = connectStep >= idx + 1;
                  const isHovered = hoveredValueCard === idx;

                  return (
                    <div
                      key={card.num}
                      style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                      }}
                    >
                      {/* Node Dot on Baseline */}
                      <div
                        style={{
                          position: 'absolute',
                          left: '-24px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '14px',
                          height: '14px',
                          borderRadius: '50%',
                          backgroundColor: card.dotColor,
                          border: '3px solid #FFFFFF',
                          boxShadow: '0 0 0 1px #CBD5E1',
                          zIndex: 2,
                          opacity: isVisible ? 1 : 0,
                          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      />

                      {/* Stem Line Connecting Dot to Card */}
                      <div
                        style={{
                          position: 'absolute',
                          left: '-12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '12px',
                          height: '1.5px',
                          backgroundColor: isVisible ? '#1B58F4' : '#CBD5E1',
                          zIndex: 1,
                          opacity: isVisible ? 1 : 0,
                          transition: 'all 0.5s ease',
                        }}
                      />

                      {/* Card Box (Exact Original Styling & Proportions) */}
                      <div
                        onMouseEnter={() => setHoveredValueCard(idx)}
                        onMouseLeave={() => setHoveredValueCard(null)}
                        style={{
                          backgroundColor: card.bg,
                          color: card.textColor,
                          borderRadius: '16px',
                          padding: '18px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '16px',
                          width: '100%',
                          boxShadow: isHovered
                            ? '0 16px 32px rgba(10, 17, 40, 0.16)'
                            : '0 2px 8px rgba(0, 0, 0, 0.03)',
                          border: card.bg === '#F4F7FC' ? '1px solid #E2E8F0' : 'none',
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible
                            ? (isHovered ? 'scale(1.02) translateY(-2px)' : 'scale(1) translateY(0)')
                            : 'scale(0.92) translateY(20px)',
                          transition: 'all 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                          cursor: 'pointer',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <span
                            style={{
                              fontSize: '14px',
                              fontWeight: 900,
                              color: card.numColor,
                              letterSpacing: '0.02em',
                            }}
                          >
                            {card.num}
                          </span>
                          <span
                            style={{
                              fontSize: '15px',
                              fontWeight: 800,
                              lineHeight: 1.25,
                              letterSpacing: '-0.01em',
                            }}
                          >
                            {card.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Label */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '10px',
                marginTop: '20px',
                fontSize: '11px',
                fontWeight: 800,
                color: '#1B58F4',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                opacity: connectStep >= 9 ? 1 : 0,
                transition: 'opacity 0.5s ease',
              }}
            >
              <span>ONE CONNECTED PICTURE</span>
              <div style={{ width: '20px', height: '2.5px', backgroundColor: '#1B58F4', borderRadius: '2px' }} />
            </div>
          </div>

          {/* Bottom Value Stream Text */}
          <div
            style={{
              fontSize: '15.5px',
              fontWeight: 700,
              color: '#334155',
              lineHeight: 1.5,
              marginTop: '16px',
              opacity: connectStep >= 10 ? 1 : 0,
              transform: connectStep >= 10 ? 'translateY(0)' : 'translateY(12px)',
              transition: 'all 0.75s ease',
            }}
          >
            When these nine areas share one version of the truth, planning stops guessing and the factory stops reacting.
          </div>
        </div>
      </section>

      {/* 3. SECTION 3: TEN PRIORITIES ON THE FACTORY AGENDA */}
      <section
        id="factory-priorities"
        style={{
          padding: '96px 0 104px',
          backgroundColor: '#F4F7FC',
          position: 'relative',
        }}
      >
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Top Header & Large Faded "10" Watermark */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px', position: 'relative' }}>
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
                    width: '28px',
                    height: '2.5px',
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
                  fontSize: 'clamp(32px, 3.8vw, 44px)',
                  fontWeight: 800,
                  color: '#0A1128',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  margin: '0 0 14px 0',
                }}
              >
                Ten priorities on the factory agenda.
              </h2>

              <p
                style={{
                  fontSize: '15.5px',
                  fontWeight: 400,
                  color: '#52607B',
                  margin: 0,
                  maxWidth: '680px',
                  lineHeight: 1.5,
                }}
              >
                Where technology investment turns into uptime, yield, throughput and control.
              </p>
            </div>

            {/* Faded "10" Watermark Text */}
            <div
              style={{
                fontSize: 'clamp(70px, 8vw, 96px)',
                fontWeight: 900,
                color: '#CBD5E1',
                opacity: 0.55,
                lineHeight: 0.9,
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              10
            </div>
          </div>

          {/* 10 Factory Priority Cards Grid (Responsive grid classes) */}
          <div
            className="factory-priorities-grid no-scrollbar"
            style={{
              padding: '16px 12px',
              margin: '-16px -12px',
            }}
          >
            {factoryPriorities.map((item, idx) => {
              const isHovered = hoveredPriority === idx;

              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setHoveredPriority(idx)}
                  onMouseLeave={() => setHoveredPriority(null)}
                  style={{
                    backgroundColor: item.bg,
                    color: item.textColor,
                    borderRadius: '16px',
                    padding: '24px 20px 22px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '180px',
                    border: item.bg === '#FFFFFF' ? '1px solid #E2E8F0' : 'none',
                    boxShadow: isHovered
                      ? '0 18px 36px rgba(10, 17, 40, 0.14)'
                      : '0 2px 8px rgba(0, 0, 0, 0.02)',
                    transform: isHovered ? 'scale(1.05) translateY(-4px)' : 'scale(1)',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 800,
                        color: item.numColor,
                        marginBottom: '14px',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {item.num}
                    </div>

                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 800,
                        lineHeight: 1.25,
                        margin: 0,
                        letterSpacing: '-0.01em',
                        wordBreak: 'break-word',
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    style={{
                      width: '32px',
                      height: '3px',
                      backgroundColor: item.accentLine,
                      borderRadius: '2px',
                      marginTop: '20px',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SECTION 4: DEEP CTA BANNER */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A1230 0%, #0D2A75 50%, #1942B2 100%)',
          color: '#FFFFFF',
          padding: '110px 0 120px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Figma Blur Layer: #67DFCB 22%, Layer Blur 230 */}
        <div
          style={{
            position: 'absolute',
            width: '640px',
            height: '640px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, maxWidth: '840px', margin: '0 auto' }}>
          {/* Centered Eyebrow Badge with Left & Right Teal Lines */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
            <span
              style={{
                fontSize: '12px',
                fontWeight: 800,
                color: '#67DFCB',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              MANUFACTURING
            </span>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            From connected factories<br />to intelligent operations.
          </h2>

          {/* Teal Horizontal Accent Bar */}
          <div
            style={{
              width: '180px',
              height: '4px',
              backgroundColor: '#67DFCB',
              borderRadius: '9999px',
              margin: '24px auto 36px auto',
              boxShadow: '0 0 16px rgba(103, 223, 203, 0.45)',
            }}
          />

          {/* 3 Pill Badges Row: Connected / Predictive / Automated */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '40px',
            }}
          >
            {['Connected', 'Predictive', 'Automated'].map((tab, idx) => {
              const isHovered = hoveredCtaTab === idx;

              return (
                <div
                  key={tab}
                  onMouseEnter={() => setHoveredCtaTab(idx)}
                  onMouseLeave={() => setHoveredCtaTab(null)}
                  style={{
                    background: isHovered ? 'rgba(255, 255, 255, 0.22)' : 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.28)',
                    color: '#FFFFFF',
                    padding: '10px 24px',
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transform: isHovered ? 'scale(1.06) translateY(-2px)' : 'scale(1)',
                    boxShadow: isHovered ? '0 10px 24px rgba(103, 223, 203, 0.35)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ color: '#67DFCB', fontSize: '16px', lineHeight: 1 }}>•</span>
                  <span>{tab}</span>
                </div>
              );
            })}
          </div>

          {/* Primary Call To Action Button */}
          <div>
            <button
              onMouseEnter={() => setHoveredCtaBtn(true)}
              onMouseLeave={() => setHoveredCtaBtn(false)}
              onClick={() => onNavigate && onNavigate('#contact')}
              style={{
                background: '#FFFFFF',
                color: '#1942B2',
                border: 'none',
                padding: '16px 40px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '15px',
                cursor: 'pointer',
                transform: hoveredCtaBtn ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
                boxShadow: hoveredCtaBtn
                  ? '0 16px 36px rgba(255, 255, 255, 0.4)'
                  : '0 8px 24px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Talk to Ajiledone about manufacturing
            </button>
          </div>
        </div>
      </section>

      {/* 5. CONTACT CTA STRIP */}
      <section
        id="contact-cta-strip"
        style={{
          background: 'linear-gradient(135deg, #265CF4 0%, #1FA5FF 100%)',
          color: '#FFFFFF',
          padding: '64px 0',
        }}
      >
        <div className="section-container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '32px',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.8)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                DON'T BE WEIRD
              </div>

              <h2
                style={{
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  margin: 0,
                  maxWidth: '640px',
                }}
              >
                Would you like more information, or do you have a question?
              </h2>
            </div>

            <button
              onMouseEnter={() => setHoveredContactBtn(true)}
              onMouseLeave={() => setHoveredContactBtn(false)}
              onClick={() => onNavigate && onNavigate('#contact')}
              style={{
                background: '#FFFFFF',
                color: '#1B58F4',
                border: 'none',
                padding: '14px 36px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '14.5px',
                cursor: 'pointer',
                transform: hoveredContactBtn ? 'scale(1.06) translateY(-2px)' : 'scale(1)',
                boxShadow: hoveredContactBtn ? '0 12px 28px rgba(255, 255, 255, 0.4)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                whiteSpace: 'nowrap',
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
