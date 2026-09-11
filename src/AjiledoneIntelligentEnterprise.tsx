import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface AjiledoneIntelligentEnterpriseProps {
  onNavigate?: (anchor: string) => void;
}

export const AjiledoneIntelligentEnterprisePage: React.FC<AjiledoneIntelligentEnterpriseProps> = ({
  onNavigate,
}) => {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null);
  const [hoveredCtaBtn, setHoveredCtaBtn] = useState<boolean>(false);
  const [hoveredTalkBtn, setHoveredTalkBtn] = useState<boolean>(false);
  const [hoveredContactBtn, setHoveredContactBtn] = useState<boolean>(false);

  // Continuous Sequential Wave State (0..6)
  // 0: blank (no cards visible at first)
  // 1: Card 01 appears at top
  // 2: Line extends to Dot 02, Card 02 appears
  // 3: Line extends to Dot 03, Card 03 appears
  // 4: Line extends to Dot 04, Card 04 appears
  // 5: Line extends to Dot 05, Card 05 appears (all 5 visible)
  // 6: Brief pause displaying all 5 layers, then reset to 0 and repeat wave loop!
  const [layersSeqStep, setLayersSeqStep] = useState<number>(0);
  const layersSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionElement = layersSectionRef.current;
    if (!sectionElement) return;

    let timer: any = null;

    const startLayersSequence = () => {
      if (timer) clearInterval(timer);
      let step = 0;
      setLayersSeqStep(0);

      timer = setInterval(() => {
        step++;
        setLayersSeqStep(step);
        if (step >= 5) {
          clearInterval(timer);
          timer = null;
        }
      }, 700);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            startLayersSequence();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  // Convergence Funnel Scroll-triggered Sequence State (0..3)
  // 0: blank (top cards, lines, lower card hidden)
  // 1: Top 5 Cards appear ALL AT ONCE
  // 2: Connecting SVG lines draw down
  // 3: Central card & 4 badges appear
  const [funnelStep, setFunnelStep] = useState<number>(0);
  const funnelSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionElement = funnelSectionRef.current;
    if (!sectionElement) return;

    let timer: any = null;

    const startFunnelSequence = () => {
      if (timer) clearInterval(timer);
      let step = 0;
      setFunnelStep(0);

      timer = setInterval(() => {
        step++;
        setFunnelStep(step);
        if (step >= 3) {
          clearInterval(timer);
          timer = null;
        }
      }, 700);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            startFunnelSequence();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  const layersList = [
    {
      id: '01',
      title: 'DIGITAL CORE',
      align: 'left',
      bg: '#52E0CB',
      textColor: '#0A1128',
      descColor: '#0A1128',
      pillBg: 'rgba(10, 17, 40, 0.12)',
      pillColor: '#0A1128',
      desc: 'The systems that operate the enterprise.',
      pills: ['SAP', 'Oracle', 'ServiceNow', 'Enterprise applications'],
    },
    {
      id: '02',
      title: 'CONNECTED DATA',
      align: 'right',
      bg: '#FFFFFF',
      textColor: '#0A1128',
      descColor: '#475569',
      pillBg: '#F1F5F9',
      pillColor: '#0A1128',
      desc: 'The information foundation of the enterprise.',
      pills: ['Databricks', 'Snowflake', 'Fabric', 'Datasphere', 'Data Platforms'],
    },
    {
      id: '03',
      title: 'INTELLIGENCE',
      align: 'left',
      bg: '#265CF4',
      textColor: '#FFFFFF',
      descColor: 'rgba(255, 255, 255, 0.9)',
      pillBg: 'rgba(255, 255, 255, 0.18)',
      pillColor: '#FFFFFF',
      desc: 'The intelligence that improves decisions and automates work.',
      pills: ['AI', 'GenAI', 'Agentic AI', 'Decision Analytics', 'Predictive'],
    },
    {
      id: '04',
      title: 'DIGITAL ENGINEERING',
      align: 'right',
      bg: '#FFFFFF',
      textColor: '#0A1128',
      descColor: '#475569',
      pillBg: '#F1F5F9',
      pillColor: '#0A1128',
      desc: 'The engineering layer connecting business capabilities.',
      pills: ['Applications', 'APIs', 'Integrations', 'Digital Products', 'Automation'],
    },
    {
      id: '05',
      title: 'CLOUD FOUNDATION',
      align: 'left',
      bg: '#081742',
      textColor: '#FFFFFF',
      descColor: 'rgba(255, 255, 255, 0.82)',
      pillBg: 'rgba(255, 255, 255, 0.12)',
      pillColor: '#FFFFFF',
      desc: 'The scalable infrastructure supporting continuous transformation.',
      pills: ['Azure', 'AWS', 'Google Cloud', 'OCI', 'Cloud Native'],
    },
  ];

  return (
    <div className="ajiledone-intelligent-enterprise-page" style={{ background: '#FFFFFF', color: '#0A1128', overflowX: 'hidden' }}>
      
      {/* Inline Keyframes for Ultra-Smooth Organic Mid Card Glow */}
      <style>{`
        @keyframes pulseMidCardGlow {
          0% {
            box-shadow: 0 0 28px rgba(103, 223, 203, 0.45), 0 0 50px rgba(31, 165, 255, 0.25), inset 0 0 15px rgba(255, 255, 255, 0.35);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 52px rgba(103, 223, 203, 0.85), 0 0 95px rgba(31, 165, 255, 0.55), inset 0 0 24px rgba(255, 255, 255, 0.65);
            transform: scale(1.018);
          }
          100% {
            box-shadow: 0 0 28px rgba(103, 223, 203, 0.45), 0 0 50px rgba(31, 165, 255, 0.25), inset 0 0 15px rgba(255, 255, 255, 0.35);
            transform: scale(1);
          }
        }
      `}</style>

      {/* 1. HERO SECTION (Exact Figma Spec Gradient: #08194A -> #0D2A75 -> #1B4AC7) */}
      <section
        style={{
          background: 'linear-gradient(135deg, #08194A 0%, #0D2A75 50%, #1B4AC7 100%)',
          color: '#FFFFFF',
          padding: '120px 0 110px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Vertical Background Grid Overlay Lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
            backgroundSize: '100px 100%',
            pointerEvents: 'none',
          }}
        />

        {/* Figma Background Glow 1: #1FA5FF 40% blur 210px */}
        <div
          style={{
            position: 'absolute',
            width: '480px',
            height: '480px',
            top: '420px',
            left: '1050px',
            background: 'rgba(31, 165, 255, 0.40)',
            filter: 'blur(210px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Figma Background Glow 2: #67DFCB 24% blur 230px */}
        <div
          style={{
            position: 'absolute',
            width: '620px',
            height: '620px',
            top: '130px',
            left: '780px',
            background: 'rgba(103, 223, 203, 0.24)',
            filter: 'blur(230px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumbs */}
          <div
            style={{
              fontSize: '13.5px',
              color: 'rgba(255, 255, 255, 0.75)',
              marginBottom: '28px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => onNavigate && onNavigate('#home')}
            >
              Home
            </span>
            <span>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>The Ajiledone Intelligent Enterprise</span>
          </div>

          <div
            className="hero-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            {/* Left Content Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
                <div style={{ width: '24px', height: '2.5px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
                <span
                  style={{
                    color: '#67DFCB',
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  THE AJILEDONE INTELLIGENT ENTERPRISE
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(38px, 4.8vw, 62px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                }}
              >
                Connecting the technology<br />
                that runs the enterprise<br />
                with the intelligence<br />
                that transforms it.
              </h1>

              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6,
                  marginBottom: '38px',
                  maxWidth: '520px',
                  fontWeight: 450,
                }}
              >
                Our view of enterprise transformation consists of five connected layers.
              </p>

              {/* Action Buttons: Colorless by default, change color on hover only */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                {/* Button 1: See the five layers */}
                <a
                  href="#five-layers"
                  onMouseEnter={() => setHoveredCtaBtn(true)}
                  onMouseLeave={() => setHoveredCtaBtn(false)}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('five-layers')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    background: hoveredCtaBtn ? '#FFFFFF' : 'transparent',
                    color: hoveredCtaBtn ? '#1B4AC7' : '#FFFFFF',
                    border: hoveredCtaBtn ? '1.5px solid #FFFFFF' : '1.5px solid rgba(255, 255, 255, 0.5)',
                    padding: '16px 36px',
                    borderRadius: '30px',
                    fontWeight: 800,
                    fontSize: '15px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transform: hoveredCtaBtn ? 'scale(1.05) translateY(-3px)' : 'scale(1)',
                    boxShadow: hoveredCtaBtn
                      ? '0 12px 30px rgba(255, 255, 255, 0.35)'
                      : 'none',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  See the five layers
                </a>

                {/* Button 2: Talk to Ajiledone */}
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
                    border: hoveredTalkBtn ? '1.5px solid #67DFCB' : '1.5px solid rgba(255, 255, 255, 0.5)',
                    padding: '16px 34px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '15px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transform: hoveredTalkBtn ? 'scale(1.05) translateY(-3px)' : 'scale(1)',
                    boxShadow: hoveredTalkBtn ? '0 12px 30px rgba(103, 223, 203, 0.45)' : 'none',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Talk to Ajiledone
                </a>
              </div>

              {/* Ticker Sub-Ribbon with dotted line cutting across */}
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                <div
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 800,
                    color: '#67DFCB',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    opacity: 0.95,
                    position: 'relative',
                    zIndex: 2,
                    display: 'inline-block',
                    background: 'transparent',
                  }}
                >
                  CONNECTED &bull; DATA-DRIVEN &bull; AUTOMATED &bull; AI-ENABLED
                </div>
              </div>
            </div>

            {/* Right Hero Artwork: Interactive 5 Concentric Nested Frames Visualization with Dynamic Glowing Mid Card */}
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '480px',
                  height: '460px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Layer 05 Outer Contour - CLOUD FOUNDATION */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: '1.5px dashed rgba(255, 255, 255, 0.35)',
                    borderRadius: '28px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span style={{ position: 'absolute', top: '14px', left: '18px', fontSize: '11px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.08em' }}>
                    05
                  </span>
                  <span style={{ position: 'absolute', top: '14px', left: 0, right: 0, textAlign: 'center', fontSize: '10.5px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    CLOUD FOUNDATION
                  </span>
                </div>

                {/* Layer 04 Contour - DIGITAL ENGINEERING */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    borderRadius: '24px',
                    background: 'rgba(255, 255, 255, 0.03)',
                  }}
                >
                  <span style={{ position: 'absolute', top: '14px', left: '18px', fontSize: '11px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.08em' }}>
                    04
                  </span>
                  <span style={{ position: 'absolute', top: '14px', left: 0, right: 0, textAlign: 'center', fontSize: '10.5px', fontWeight: 800, color: 'rgba(220, 235, 255, 0.85)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    DIGITAL ENGINEERING
                  </span>
                </div>

                {/* Layer 03 Contour - INTELLIGENCE */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '80px',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '20px',
                    background: 'rgba(38, 92, 244, 0.08)',
                  }}
                >
                  <span style={{ position: 'absolute', top: '14px', left: '18px', fontSize: '11px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.08em' }}>
                    03
                  </span>
                  <span style={{ position: 'absolute', top: '14px', left: 0, right: 0, textAlign: 'center', fontSize: '10.5px', fontWeight: 800, color: 'rgba(200, 225, 255, 0.85)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    INTELLIGENCE
                  </span>
                </div>

                {/* Layer 02 Contour - CONNECTED DATA */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '120px',
                    border: '1px solid rgba(255, 255, 255, 0.45)',
                    borderRadius: '16px',
                    background: 'rgba(103, 223, 203, 0.04)',
                  }}
                >
                  <span style={{ position: 'absolute', top: '14px', left: '18px', fontSize: '11px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.08em' }}>
                    02
                  </span>
                  <span style={{ position: 'absolute', top: '14px', left: 0, right: 0, textAlign: 'center', fontSize: '10.5px', fontWeight: 800, color: 'rgba(180, 220, 255, 0.85)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    CONNECTED DATA
                  </span>
                </div>

                {/* Layer 01 Central Core Card - DIGITAL CORE (Dynamic Pulsating Glow Animation) */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 5,
                    background: 'linear-gradient(135deg, #67DFCB 0%, #1FA5FF 100%)',
                    borderRadius: '20px',
                    padding: '24px 28px',
                    color: '#08194A',
                    textAlign: 'center',
                    animation: 'pulseMidCardGlow 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                    willChange: 'transform, box-shadow',
                    width: '185px',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#08194A', marginBottom: '2px', opacity: 0.85 }}>
                    01
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 900, color: '#08194A', marginBottom: '6px', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                    DIGITAL<br />CORE
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(8, 25, 74, 0.82)' }}>
                    SAP &bull; Oracle &bull; Now
                  </div>
                </div>

                {/* Bottom Label Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-30px',
                    fontSize: '10.5px',
                    fontWeight: 800,
                    color: '#67DFCB',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    zIndex: 6,
                  }}
                >
                  FIVE CONNECTED LAYERS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: THE FIVE LAYERS (DYNAMIC SEQUENTIAL REVEAL & HOVER ENLARGEMENT) */}
      <section
        id="five-layers"
        ref={layersSectionRef}
        style={{
          padding: '110px 0 120px',
          background: '#F4F7FE',
          position: 'relative',
        }}
      >
        <div className="section-container">
          {/* Header */}
          <div style={{ marginBottom: '64px' }}>
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
                THE FIVE LAYERS
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(36px, 4.5vw, 54px)',
                fontWeight: 800,
                color: '#0A1128',
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                marginBottom: '18px',
              }}
            >
              Five connected layers.
            </h2>

            <p
              style={{
                fontSize: '16.5px',
                color: '#64748B',
                lineHeight: 1.6,
                maxWidth: '620px',
                fontWeight: 450,
                margin: 0,
              }}
            >
              Each layer depends on the one beneath it &mdash; and becomes more valuable because of the one above.
            </p>
          </div>

          {/* Staggered Vertical 5-Layer Stack with Center Axis Line */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Center Vertical Axis Line Container (Propagates step-by-step from top to bottom) */}
            <div
              className="intelligent-timeline-axis"
              style={{
                position: 'absolute',
                left: '50%',
                top: '36px',
                bottom: '36px',
                width: '3px',
                background: 'transparent',
                transform: 'translateX(-50%)',
                zIndex: 1,
                overflow: 'hidden',
              }}
            >
              {/* Active Growing Cyan Line Beam */}
              <div
                style={{
                  width: '100%',
                  height: layersSeqStep <= 1 ? '0%' : `${Math.min(100, (layersSeqStep - 1) * 25)}%`,
                  background: 'linear-gradient(180deg, #52E0CB 0%, #265CF4 100%)',
                  transition: layersSeqStep <= 1 ? 'none' : 'height 1.0s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 0 16px rgba(82, 224, 203, 0.95), 0 0 6px #52E0CB',
                  borderRadius: '2px',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', position: 'relative', zIndex: 2 }}>
              {layersList.map((layer, idx) => {
                const isHovered = hoveredLayer === idx;
                const isLeft = layer.align === 'left';
                const isActiveStep = layersSeqStep === idx + 1;
                const isPassedStep = layersSeqStep >= idx + 1;

                return (
                  <div
                    key={layer.id}
                    className="intelligent-layer-item"
                    onMouseEnter={() => isPassedStep && setHoveredLayer(idx)}
                    onMouseLeave={() => setHoveredLayer(null)}
                    style={{
                      display: 'flex',
                      justifyContent: isLeft ? 'flex-start' : 'flex-end',
                      position: 'relative',
                      width: '100%',
                      opacity: isPassedStep ? 1 : 0,
                      transform: isPassedStep
                        ? ((isHovered || isActiveStep) ? 'scale(1.05) translateY(-6px)' : 'scale(1) translateY(0)')
                        : (isLeft ? 'translateX(-40px) scale(0.92)' : 'translateX(40px) scale(0.92)'),
                      transition: 'opacity 1.0s cubic-bezier(0.4, 0, 0.2, 1), transform 1.0s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.6s ease',
                      pointerEvents: isPassedStep ? 'auto' : 'none',
                    }}
                  >
                    {/* Node Dot on Center Axis Line (Appears as wave hits) */}
                    <div
                      className="intelligent-layer-dot"
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '36px',
                        transform: 'translate(-50%, -50%)',
                        width: (isHovered || isActiveStep) ? '18px' : '12px',
                        height: (isHovered || isActiveStep) ? '18px' : '12px',
                        borderRadius: '50%',
                        backgroundColor: (isHovered || isActiveStep) ? '#52E0CB' : (isPassedStep ? '#265CF4' : 'transparent'),
                        boxShadow: (isHovered || isActiveStep)
                          ? '0 0 20px #52E0CB, 0 0 10px #52E0CB'
                          : (isPassedStep ? '0 0 8px rgba(38, 92, 244, 0.6)' : 'none'),
                        border: isPassedStep ? '2.5px solid #FFFFFF' : 'none',
                        zIndex: 5,
                        opacity: isPassedStep ? 1 : 0,
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />

                    {/* Card Content Box */}
                    <div
                      className="intelligent-layer-card"
                      style={{
                        width: '46%',
                        background: layer.bg,
                        color: layer.textColor,
                        borderRadius: '24px',
                        padding: '36px 38px',
                        boxShadow: (isHovered || isActiveStep)
                          ? '0 24px 60px rgba(11, 23, 57, 0.25), 0 0 25px rgba(82, 224, 203, 0.45)'
                          : '0 10px 30px rgba(0, 0, 0, 0.05)',
                        border: (isHovered || isActiveStep)
                          ? '1.5px solid #52E0CB'
                          : (layer.bg === '#FFFFFF' ? '1px solid #E2E8F0' : 'none'),
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                      }}
                    >
                      {/* Layer Header Badge */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <span
                          style={{
                            fontSize: '13px',
                            fontWeight: 800,
                            letterSpacing: '0.08em',
                            color: layer.textColor,
                            opacity: 0.9,
                          }}
                        >
                          {layer.id}
                        </span>
                        <h3
                          style={{
                            fontSize: '20px',
                            fontWeight: 800,
                            margin: 0,
                            color: layer.textColor,
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {layer.title}
                        </h3>
                      </div>

                      {/* Tag Pills */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                        {layer.pills.map((pill, pIdx) => (
                          <span
                            key={pIdx}
                            style={{
                              background: layer.pillBg,
                              color: layer.pillColor,
                              fontSize: '12px',
                              fontWeight: 700,
                              padding: '5px 14px',
                              borderRadius: '16px',
                            }}
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: '15px',
                          color: layer.descColor,
                          lineHeight: 1.55,
                          margin: 0,
                          fontWeight: 500,
                        }}
                      >
                        {layer.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Summary Ribbon */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '70px',
              fontSize: '15px',
              fontWeight: 700,
              color: '#0A1128',
              letterSpacing: '-0.01em',
              opacity: layersSeqStep >= 5 ? 1 : 0,
              transform: layersSeqStep >= 5 ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Together, these capabilities create the intelligent enterprise.
          </div>
        </div>
      </section>

      {/* 3. SECTION: TOGETHER, THESE CAPABILITIES CREATE (EXACT FIGMA COLORS: #0A1230 -> #0D2A75 -> #1942B2) */}
      <section
        id="convergence-funnel"
        ref={funnelSectionRef}
        style={{
          background: 'linear-gradient(135deg, #0A1230 0%, #0D2A75 50%, #1942B2 100%)',
          color: '#FFFFFF',
          padding: '110px 0 120px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Figma Background Glow Ellipse: #67DFCB 20% blur 220px */}
        <div
          style={{
            position: 'absolute',
            width: '720px',
            height: '720px',
            top: '180px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(103, 223, 203, 0.20)',
            filter: 'blur(220px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            
            {/* Header Ribbon with cyan side lines */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                marginBottom: '32px',
                opacity: funnelStep >= 1 ? 1 : 0,
                transform: funnelStep >= 1 ? 'translateY(0)' : 'translateY(-15px)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div style={{ width: '32px', height: '2px', backgroundColor: '#52E0CB', borderRadius: '1px' }} />
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#52E0CB',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                TOGETHER, THESE CAPABILITIES CREATE
              </span>
              <div style={{ width: '32px', height: '2px', backgroundColor: '#52E0CB', borderRadius: '1px' }} />
            </div>

            {/* STEP 1: Top 5 Category Cards (Appear ALL AT ONCE at Step 1) */}
            <div
              className="intelligent-badges-row"
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                maxWidth: '980px',
                margin: '0 auto 40px',
                opacity: funnelStep >= 1 ? 1 : 0,
                transform: funnelStep >= 1 ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: funnelStep >= 1 ? 'auto' : 'none',
              }}
            >
              {[
                'DIGITAL CORE',
                'CONNECTED DATA',
                'INTELLIGENCE',
                'DIGITAL ENGINEERING',
                'CLOUD FOUNDATION',
              ].map((badgeTitle, bIdx) => (
                <div
                  key={bIdx}
                  onMouseEnter={() => setHoveredBadge(bIdx)}
                  onMouseLeave={() => setHoveredBadge(null)}
                  style={{
                    background: hoveredBadge === bIdx ? '#52E0CB' : 'rgba(255, 255, 255, 0.08)',
                    color: hoveredBadge === bIdx ? '#08194A' : '#FFFFFF',
                    border: hoveredBadge === bIdx ? '1.5px solid #52E0CB' : '1.5px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '16px',
                    padding: '16px 24px',
                    fontSize: '13px',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    cursor: 'pointer',
                    transform: hoveredBadge === bIdx ? 'scale(1.06) translateY(-4px)' : 'scale(1)',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: hoveredBadge === bIdx ? '0 12px 30px rgba(82, 224, 203, 0.45)' : 'none',
                  }}
                >
                  {badgeTitle}
                </div>
              ))}
            </div>

            {/* STEP 2: SVG Convergence Funnel Lines (Draw down at Step 2) */}
            <svg
              viewBox="0 0 1000 120"
              style={{
                width: '100%',
                maxWidth: '820px',
                height: '90px',
                margin: '0 auto',
                display: 'block',
                pointerEvents: 'none',
                opacity: funnelStep >= 2 ? 0.95 : 0,
                transition: 'opacity 0.6s ease',
              }}
            >
              {[100, 300, 500, 700, 900].map((startX, idx) => (
                <path
                  key={idx}
                  d={`M ${startX} 0 C ${startX} 60, 500 60, 500 120`}
                  fill="none"
                  stroke="#52E0CB"
                  strokeWidth="2.2"
                  strokeDasharray="400"
                  strokeDashoffset={funnelStep >= 2 ? 0 : 400}
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(82, 224, 203, 0.8))',
                    transition: 'stroke-dashoffset 1.0s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              ))}
            </svg>

            {/* STEP 3: Central Hero Card & 4 Badges (Appear at Step 3) */}
            <div
              style={{
                opacity: funnelStep >= 3 ? 1 : 0,
                transform: funnelStep >= 3 ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(24px)',
                transition: 'all 0.95s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Central Hero Card: THE INTELLIGENT ENTERPRISE */}
              <div
                style={{
                  maxWidth: '720px',
                  margin: '30px auto 44px',
                  background: 'linear-gradient(135deg, #52E0CB 0%, #1FA5FF 100%)',
                  borderRadius: '28px',
                  padding: '46px 38px',
                  color: '#08194A',
                  boxShadow: '0 24px 65px rgba(82, 224, 203, 0.5), 0 0 30px rgba(31, 165, 255, 0.3)',
                  transition: 'all 0.4s ease',
                }}
              >
                <h3
                  style={{
                    fontSize: 'clamp(28px, 3.8vw, 44px)',
                    fontWeight: 900,
                    color: '#08194A',
                    lineHeight: 1.1,
                    letterSpacing: '-0.025em',
                    marginBottom: '12px',
                  }}
                >
                  THE INTELLIGENT ENTERPRISE
                </h3>
                <p
                  style={{
                    fontSize: '15.5px',
                    fontWeight: 700,
                    color: 'rgba(8, 25, 74, 0.85)',
                    margin: 0,
                  }}
                >
                  Connected &bull; Data-driven &bull; Automated &bull; AI-enabled
                </p>
              </div>

              {/* 4 Outer Pill Badges */}
              <div
                className="intelligent-pills-row"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '14px',
                  flexWrap: 'wrap',
                  marginBottom: '36px',
                }}
              >
                {['Connected', 'Data-driven', 'Automated', 'AI-enabled'].map((pillText, pIdx) => (
                  <span
                    key={pIdx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '24px',
                      padding: '8px 24px',
                      fontSize: '13px',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', backgroundColor: '#52E0CB', borderRadius: '50%' }} />
                    {pillText}
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontSize: '16.5px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6,
                  maxWidth: '580px',
                  margin: '0 auto 40px',
                  fontWeight: 450,
                }}
              >
                Connecting the technology that runs the enterprise with the intelligence that transforms it.
              </p>
            </div>

            {/* Talk to Ajiledone CTA Button (ALWAYS APPEARING AT ALL TIMES) */}
            <div style={{ marginTop: '36px' }}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('#contact');
                }}
                style={{
                  background: '#FFFFFF',
                  color: '#08194A',
                  padding: '16px 42px',
                  borderRadius: '30px',
                  fontWeight: 800,
                  fontSize: '15.5px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.28)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: 1,
                }}
              >
                Talk to Ajiledone
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: QUESTION / CALLOUT RIBBON (EXACT FIGMA COLORS: #265CF4 -> #1FA5FF) */}
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
