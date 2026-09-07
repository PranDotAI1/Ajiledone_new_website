import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface OurVisionProps {
  onNavigate: (anchor: string) => void;
  onGoHome: () => void;
}

export function OurVisionPage({ onNavigate, onGoHome }: OurVisionProps) {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
  const [autoPillarIndex, setAutoPillarIndex] = useState<number>(0);
  const [hoveredStackIndex, setHoveredStackIndex] = useState<number | null>(2);
  const [isCtaHovered, setIsCtaHovered] = useState<boolean>(false);

  const [activeBannerBar, setActiveBannerBar] = useState<number>(1);
  const [hoveredBannerBar, setHoveredBannerBar] = useState<number | null>(null);

  useEffect(() => {
    if (hoveredBannerBar !== null) return;
    const timer = setInterval(() => {
      setActiveBannerBar((prev) => (prev === 0 ? 1 : 0));
    }, 3200);
    return () => clearInterval(timer);
  }, [hoveredBannerBar]);

  const [shiftStep, setShiftStep] = useState<number>(0);
  const [hoveredShiftBox, setHoveredShiftBox] = useState<number | null>(null);

  useEffect(() => {
    if (hoveredShiftBox !== null) return;
    const timer = setInterval(() => {
      setShiftStep((prev) => (prev + 1) % 3);
    }, 1400);
    return () => clearInterval(timer);
  }, [hoveredShiftBox]);

  const [roleStep, setRoleStep] = useState<number>(5); // 5 (bottom) to 0 (top)
  const [hoveredRoleIndex, setHoveredRoleIndex] = useState<number | null>(null);

  useEffect(() => {
    if (hoveredRoleIndex !== null) return;
    const timer = setInterval(() => {
      setRoleStep((prev) => (prev === 0 ? 5 : prev - 1));
    }, 1200);
    return () => clearInterval(timer);
  }, [hoveredRoleIndex]);

  const [glowOffset, setGlowOffset] = useState<number>(0);

  useEffect(() => {
    let animId: number;
    let startTime: number | null = null;
    const duration = 12000; // 12s smooth continuous cycle

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = ((timestamp - startTime) % duration) / duration;
      setGlowOffset(progress);
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    if (hoveredPillar !== null) return;
    const timer = setInterval(() => {
      setAutoPillarIndex((prev) => (prev + 1) % 6);
    }, 3200);
    return () => clearInterval(timer);
  }, [hoveredPillar]);

  const pillarsList = [
    {
      id: '01',
      title: 'Connected by technology.',
      desc: 'Systems, sites and partners on one operating fabric.',
      defaultType: 'white',
      height: '260px',
    },
    {
      id: '02',
      title: 'Powered by data.',
      desc: 'Trusted, governed information available where decisions happen.',
      defaultType: 'mint',
      height: '290px',
    },
    {
      id: '03',
      title: 'Augmented by artificial intelligence.',
      desc: 'Intelligence embedded in the workflow, not bolted beside it.',
      defaultType: 'white',
      height: '320px',
    },
    {
      id: '04',
      title: 'Automated by design.',
      desc: 'Automation designed in from the start, not retrofitted later.',
      defaultType: 'blue',
      height: '350px',
    },
    {
      id: '05',
      title: 'Built on cloud.',
      desc: 'Elastic foundations that change the economics of technology.',
      defaultType: 'white',
      height: '380px',
    },
    {
      id: '06',
      title: 'Engineered for continuous change.',
      desc: 'Built to keep changing — because the market will.',
      defaultType: 'navy',
      height: '410px',
    },
  ];

  const stackLayers = [
    { id: '01', title: 'Connected', isSolid: true, offset: 0 },
    { id: '02', title: 'Data', isSolid: true, offset: 20 },
    { id: '03', title: 'AI', isSolid: true, offset: 40 },
    { id: '04', title: 'Automated', isSolid: false, isBorder: true, offset: 60 },
    { id: '05', title: 'Cloud', isSolid: false, isDashed: true, offset: 80 },
    { id: '06', title: 'Continuous change', isSolid: false, isDashed: true, offset: 100 },
  ];

  return (
    <div className="our-vision-page" style={{ paddingTop: '0px', fontFamily: "'Inter', sans-serif" }}>
      {/* 1. HERO SECTION WITH 3D PERSPECTIVE MESH GRID VECTOR & NODES */}
      <section
        style={{
          background: 'linear-gradient(135deg, #06143E 0%, #0D2A75 45%, #1B4AC7 100%)',
          color: '#FFFFFF',
          padding: '100px 0 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Vertical Background Grid Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: '8% 100%',
            pointerEvents: 'none',
          }}
        />

        {/* Figma Glow Layer 1: EXACT SPEC - Ellipse 600px x 600px, #1FA5FF (35%), Blur 220px */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '-80px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'rgba(31, 165, 255, 0.35)',
            filter: 'blur(220px)',
            WebkitFilter: 'blur(220px)',
            pointerEvents: 'none',
            zIndex: 1,
            transform: `translate(${Math.sin(glowOffset * Math.PI * 2) * 15}px, ${Math.cos(glowOffset * Math.PI * 2) * 10}px)`,
            transition: 'transform 0.1s linear',
          }}
        />

        {/* Figma Glow Layer 2: EXACT SPEC - 1000px x 320px, #67DFCB (40%), Blur 150px */}
        <div
          style={{
            position: 'absolute',
            top: '320px',
            right: '-40px',
            width: '1000px',
            height: '320px',
            borderRadius: '160px',
            background: 'rgba(103, 223, 203, 0.40)',
            filter: 'blur(150px)',
            WebkitFilter: 'blur(150px)',
            pointerEvents: 'none',
            zIndex: 1,
            transform: `translate(${Math.cos(glowOffset * Math.PI * 2) * 18}px, ${Math.sin(glowOffset * Math.PI * 2) * 8}px)`,
            transition: 'transform 0.1s linear',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumbs */}
          <div
            style={{
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '32px',
              fontWeight: 400,
            }}
          >
            <span
              onClick={onGoHome}
              style={{ cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')}
            >
              Home
            </span>{' '}
            / <span style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.95)' }}>Our vision</span>
          </div>

          {/* Tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}
          >
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
              OUR VISION
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(44px, 5.8vw, 68px)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              marginBottom: '24px',
              color: '#FFFFFF',
              maxWidth: '820px',
            }}
          >
            Building the<br />
            intelligent enterprise.
          </h1>

          {/* Subtext Paragraph */}
          <p
            style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.55,
              marginBottom: '32px',
              maxWidth: '480px',
            }}
          >
            The enterprise of tomorrow will be fundamentally different from<br />
            the enterprise of today.
          </p>

          {/* Buttons and Bottom-Right Constellation / Label Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '16px',
              position: 'relative',
            }}
          >
            {/* CTA Buttons (Left) */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {/* Button 1: See the six shifts (Default: Colorless Glass, Hover: Solid White) */}
              <a
                href="#shift"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('shift');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  color: '#FFFFFF',
                  padding: '14px 32px',
                  borderRadius: '30px',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.color = '#1A4ED0';
                  e.currentTarget.style.borderColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                See the six shifts
              </a>

              {/* Button 2: Talk to Ajiledone (Default: Glass Outline, Hover: Pure White) */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('#contact');
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  color: '#FFFFFF',
                  padding: '14px 32px',
                  borderRadius: '30px',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.color = '#0A1128';
                  e.currentTarget.style.borderColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(255, 255, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Talk to Ajiledone
              </a>
            </div>

            {/* Constellation Dots & THE ENTERPRISE OF TOMORROW Label (Right) */}
            <div style={{ position: 'relative', textAlign: 'right' }}>
              {/* Scattered Dynamic Glowing Constellation Dots */}
              <div style={{ position: 'absolute', bottom: '24px', right: 0, left: '-300px', height: '120px', pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '20%', left: '10%', width: '4px', height: '4px', borderRadius: '50%', background: '#FFFFFF', opacity: 0.8, boxShadow: '0 0 8px #FFFFFF', transform: `translateY(${Math.sin(glowOffset * Math.PI * 4) * 6}px)` }} />
                <div style={{ position: 'absolute', top: '55%', left: '35%', width: '6px', height: '6px', borderRadius: '50%', background: '#FFFFFF', opacity: 0.95, boxShadow: '0 0 12px #FFFFFF', transform: `translateY(${Math.cos(glowOffset * Math.PI * 4 + 1) * 8}px)` }} />
                <div style={{ position: 'absolute', top: '15%', left: '58%', width: '4px', height: '4px', borderRadius: '50%', background: '#52E0CB', opacity: 0.85, boxShadow: '0 0 10px #52E0CB', transform: `translateY(${Math.sin(glowOffset * Math.PI * 4 + 2) * 5}px)` }} />
                <div style={{ position: 'absolute', top: '35%', left: '80%', width: '6px', height: '6px', borderRadius: '50%', background: '#52E0CB', opacity: 0.95, boxShadow: '0 0 12px #52E0CB', transform: `translateY(${Math.cos(glowOffset * Math.PI * 4 + 3) * 7}px)` }} />
                <div style={{ position: 'absolute', top: '65%', left: '70%', width: '4px', height: '4px', borderRadius: '50%', background: '#FFFFFF', opacity: 0.8, boxShadow: '0 0 8px #FFFFFF', transform: `translateY(${Math.sin(glowOffset * Math.PI * 4 + 4) * 5}px)` }} />
                <div style={{ position: 'absolute', top: '25%', left: '96%', width: '5px', height: '5px', borderRadius: '50%', background: '#52E0CB', opacity: 0.9, boxShadow: '0 0 10px #52E0CB', transform: `translateY(${Math.cos(glowOffset * Math.PI * 4 + 5) * 6}px)` }} />
              </div>

              <div
                style={{
                  color: 'rgba(255, 255, 255, 0.45)',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  position: 'relative',
                  zIndex: 6,
                }}
              >
                THE ENTERPRISE OF TOMORROW
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Cyan Gradient Line Divider (Crisp & Sharp, No Blur) */}
        <div
          style={{
            width: '100%',
            height: '1.5px',
            background: 'linear-gradient(90deg, #52E0CB 0%, #3B82F6 100%)',
            position: 'relative',
            zIndex: 10,
          }}
        />

        {/* 3D PERSPECTIVE MESH GRID VECTOR SVG (DYNAMIC ANIMATED HORIZON LINES) */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '240px',
            overflow: 'hidden',
            background: 'linear-gradient(180deg, #103B9E 0%, #09236A 100%)',
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 240"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: 'block',
              transform: `translateY(${Math.sin(glowOffset * Math.PI * 2) * 5}px)`,
              transition: 'transform 0.1s linear',
            }}
          >
            <defs>
              <linearGradient id="gridGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#52E0CB" stopOpacity="0.55" />
                <stop offset="45%" stopColor="#3B82F6" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#09236A" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Radial Perspective Mesh Lines */}
            {Array.from({ length: 41 }).map((_, i) => {
              const xStart = (i / 40) * 1600 - 200;
              return (
                <line
                  key={`rad-${i}`}
                  x1="600"
                  y1="-40"
                  x2={xStart}
                  y2="240"
                  stroke="url(#gridGrad)"
                  strokeWidth="0.85"
                  opacity={0.45}
                />
              );
            })}

            {/* Curved Perspective Concentric Grid Horizons */}
            {[14, 30, 50, 74, 102, 134, 170, 208, 240].map((yVal, i) => (
              <path
                key={`hor-${i}`}
                d={`M -100 ${yVal} Q 600 ${yVal - 16} 1300 ${yVal}`}
                stroke="url(#gridGrad)"
                strokeWidth={0.85}
                opacity={0.28 + i * 0.04}
              />
            ))}
          </svg>

          {/* Seamless Dark Gradient Fade */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60px',
              background: 'linear-gradient(180deg, transparent 0%, #FFFFFF 100%)',
              pointerEvents: 'none',
              opacity: 0.15,
            }}
          />
        </div>
      </section>

      {/* IT WILL BE DYNAMIC BANNER SECTION */}
      <section
        style={{
          background: '#050E2D',
          padding: '48px 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div className="section-container">
          {/* Header Tag */}
          <div
            style={{
              color: '#52E0CB',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            IT WILL BE
          </div>

          {/* Stacked Banner Bars Container */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '820px' }}>
            {/* Bar 0: CONNECTED BY TECHNOLOGY • POWERED BY DATA • AUGMENTED BY AI */}
            {(() => {
              const isBarHovered = hoveredBannerBar === 0;
              return (
                <div
                  onMouseEnter={() => setHoveredBannerBar(0)}
                  onMouseLeave={() => setHoveredBannerBar(null)}
                  style={{
                    background: isBarHovered ? '#52E0CB' : 'rgba(255, 255, 255, 0.08)',
                    color: isBarHovered ? '#0A1128' : '#FFFFFF',
                    border: isBarHovered ? '1px solid #52E0CB' : '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    padding: '16px 28px',
                    fontSize: '13.5px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: isBarHovered ? '0 12px 30px rgba(82, 224, 203, 0.45)' : 'none',
                    transform: isBarHovered ? 'translateY(-2px)' : 'none',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <span>CONNECTED BY TECHNOLOGY</span>
                  <span style={{ color: isBarHovered ? '#0A1128' : '#52E0CB', fontSize: '18px' }}>&bull;</span>
                  <span>POWERED BY DATA</span>
                  <span style={{ color: isBarHovered ? '#0A1128' : '#52E0CB', fontSize: '18px' }}>&bull;</span>
                  <span>AUGMENTED BY AI</span>
                </div>
              );
            })()}

            {/* Bar 1: AUTOMATED BY DESIGN • BUILT ON CLOUD • ENGINEERED FOR CONTINUOUS CHANGE */}
            {(() => {
              const isBarHovered = hoveredBannerBar === 1;
              return (
                <div
                  onMouseEnter={() => setHoveredBannerBar(1)}
                  onMouseLeave={() => setHoveredBannerBar(null)}
                  style={{
                    background: isBarHovered ? '#52E0CB' : 'rgba(255, 255, 255, 0.08)',
                    color: isBarHovered ? '#0A1128' : '#FFFFFF',
                    border: isBarHovered ? '1px solid #52E0CB' : '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    padding: '16px 28px',
                    fontSize: '13.5px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: isBarHovered ? '0 12px 30px rgba(82, 224, 203, 0.45)' : 'none',
                    transform: isBarHovered ? 'translateY(-2px)' : 'none',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <span>AUTOMATED BY DESIGN</span>
                  <span style={{ color: isBarHovered ? '#0A1128' : '#52E0CB', fontSize: '18px' }}>&bull;</span>
                  <span>BUILT ON CLOUD</span>
                  <span style={{ color: isBarHovered ? '#0A1128' : '#52E0CB', fontSize: '18px' }}>&bull;</span>
                  <span>ENGINEERED FOR CONTINUOUS CHANGE</span>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 2. THE SHIFT AHEAD SECTION */}
      <section
        id="shift"
        style={{ padding: '100px 0', background: '#FFFFFF' }}
      >
        <div className="section-container">
          <div style={{ marginBottom: '52px' }}>
            {/* Tag */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
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
                THE SHIFT AHEAD
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(32px, 3.8vw, 46px)',
                fontWeight: 800,
                color: '#0A1128',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '16px',
              }}
            >
              Different in kind &mdash; not in degree.
            </h2>
            {/* Subhead Paragraph matching uploaded screenshot */}
            <p
              style={{
                fontSize: '15.5px',
                color: '#64748B',
                maxWidth: '680px',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              The enterprise of tomorrow will be fundamentally different from the enterprise of today.<br />
              Not a faster version of the same operating model &mdash; a different one.
            </p>
          </div>

          {/* FROM / TO Comparison Grid with Hover-Triggered & Automated Dynamic Shift */}
          {(() => {
            const activeStep = hoveredShiftBox !== null ? hoveredShiftBox : shiftStep;
            return (
              <div
                className="shift-diagram-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 60px 1fr',
                  gap: '24px',
                  alignItems: 'center',
                }}
              >
                {/* Left Box (TODAY) */}
                <div
                  onMouseEnter={() => setHoveredShiftBox(0)}
                  onMouseLeave={() => setHoveredShiftBox(null)}
                  style={{
                    background: activeStep === 0
                      ? 'linear-gradient(135deg, #0B33A4 0%, #1FA5FF 100%)'
                      : '#F1F5FD',
                    borderRadius: '24px',
                    padding: '40px 36px',
                    color: activeStep === 0 ? '#FFFFFF' : '#0A1128',
                    border: activeStep === 0
                      ? '1px solid #1FA5FF'
                      : '1px solid rgba(226, 232, 240, 0.8)',
                    boxShadow: activeStep === 0
                      ? '0 20px 48px rgba(31, 165, 255, 0.45), 0 0 30px rgba(82, 224, 203, 0.3)'
                      : 'none',
                    transform: activeStep === 0 ? 'translateY(-4px) scale(1.015)' : 'none',
                    transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      background: activeStep === 0 ? '#52E0CB' : '#FFFFFF',
                      color: activeStep === 0 ? '#0A1128' : '#475569',
                      padding: '4px 14px',
                      borderRadius: '16px',
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      marginBottom: '28px',
                      boxShadow: activeStep === 0 ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    TODAY
                  </span>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {[
                      'Systems that record the work',
                      'Reports about last quarter',
                      'Manual hand-offs between teams',
                      'Fixed capacity, planned yearly',
                      'Change delivered as a project',
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '15px',
                          color: activeStep === 0 ? '#FFFFFF' : '#475569',
                          fontWeight: activeStep === 0 ? 800 : 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          transition: 'color 0.4s ease',
                        }}
                      >
                        <span style={{ color: activeStep === 0 ? '#52E0CB' : '#94A3B8', fontSize: '18px' }}>&bull;</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Middle Dynamic Arrow */}
                <div
                  onMouseEnter={() => setHoveredShiftBox(1)}
                  onMouseLeave={() => setHoveredShiftBox(null)}
                  style={{ display: 'flex', justifyContent: 'center', position: 'relative', cursor: 'pointer' }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#52E0CB',
                      color: '#0A1128',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: activeStep === 1
                        ? '0 0 32px #52E0CB, 0 8px 24px rgba(82, 224, 203, 0.6)'
                        : '0 8px 24px rgba(82, 224, 203, 0.35)',
                      transform: activeStep === 1
                        ? 'translateX(8px) scale(1.12)'
                        : activeStep === 2
                        ? 'translateX(16px)'
                        : 'translateX(0px)',
                      transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <ArrowRight size={22} strokeWidth={2.8} />
                  </div>
                </div>

                {/* Right Box (TOMORROW) */}
                <div
                  onMouseEnter={() => setHoveredShiftBox(2)}
                  onMouseLeave={() => setHoveredShiftBox(null)}
                  style={{
                    background: activeStep === 2
                      ? 'linear-gradient(135deg, #0B33A4 0%, #1FA5FF 100%)'
                      : '#F1F5FD',
                    borderRadius: '24px',
                    padding: '40px 36px',
                    color: activeStep === 2 ? '#FFFFFF' : '#0A1128',
                    border: activeStep === 2
                      ? '1px solid #1FA5FF'
                      : '1px solid rgba(226, 232, 240, 0.8)',
                    boxShadow: activeStep === 2
                      ? '0 20px 48px rgba(31, 165, 255, 0.45), 0 0 30px rgba(82, 224, 203, 0.3)'
                      : 'none',
                    transform: activeStep === 2 ? 'translateY(-4px) scale(1.015)' : 'none',
                    transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      background: activeStep === 2 ? '#52E0CB' : '#FFFFFF',
                      color: activeStep === 2 ? '#0A1128' : '#475569',
                      padding: '4px 14px',
                      borderRadius: '16px',
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      marginBottom: '28px',
                      boxShadow: activeStep === 2 ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    TOMORROW
                  </span>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {[
                      'Systems that do the work',
                      'Decisions in the moment',
                      'Automated flow across the enterprise',
                      'Elastic capacity, provisioned on demand',
                      'Change engineered as a habit',
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '15.5px',
                          color: activeStep === 2 ? '#FFFFFF' : '#475569',
                          fontWeight: activeStep === 2 ? 800 : 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          transition: 'color 0.4s ease',
                        }}
                      >
                        <span style={{ color: activeStep === 2 ? '#52E0CB' : '#94A3B8', fontSize: '18px' }}>&bull;</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 3. SIX PILLARS OF THE INTELLIGENT ENTERPRISE (STAIRCASE CARDS) */}
      <section id="pillars" style={{ padding: '100px 0', background: '#F4F7FC' }}>
        <div className="section-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '16px',
                }}
              >
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
                  IT WILL BE
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(32px, 3.8vw, 44px)',
                  fontWeight: 800,
                  color: '#0A1128',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  margin: 0,
                }}
              >
                Six pillars of the<br />
                intelligent enterprise.
              </h2>
            </div>

            <p
              style={{
                fontSize: '15px',
                color: '#64748B',
                maxWidth: '440px',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Each one depends on the ones beside it. Together they describe an enterprise that senses, decides and acts without waiting for the next release cycle.
            </p>
          </div>

          {/* 6 Staircase Ascending Cards Container */}
          <div style={{ position: 'relative' }}>
            <div
              className="vision-pillars-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '16px',
                alignItems: 'flex-end',
              }}
            >
              {pillarsList.map((pillar, idx) => {
                const isHovered = hoveredPillar === idx;
                const isStepActive = isHovered || (hoveredPillar === null && autoPillarIndex === idx);

                let cardBg = '#FFFFFF';
                let cardBorder = '1px solid rgba(226, 232, 240, 0.8)';
                let badgeBg = 'rgba(38, 92, 244, 0.08)';
                let badgeColor = '#265CF4';
                let titleColor = '#0A1128';
                let descColor = '#64748B';
                let shadow = '0 4px 16px rgba(0, 0, 0, 0.025)';

                if (pillar.defaultType === 'mint') {
                  cardBg = '#52E0CB';
                  badgeBg = 'rgba(10, 18, 48, 0.1)';
                  badgeColor = '#0A1128';
                  titleColor = '#0A1128';
                  descColor = 'rgba(10, 18, 48, 0.85)';
                  shadow = '0 16px 40px rgba(82, 224, 203, 0.35)';
                } else if (pillar.defaultType === 'blue') {
                  cardBg = '#265CF4';
                  badgeBg = 'rgba(255, 255, 255, 0.2)';
                  badgeColor = '#FFFFFF';
                  titleColor = '#FFFFFF';
                  descColor = 'rgba(255, 255, 255, 0.9)';
                  shadow = '0 16px 40px rgba(38, 92, 244, 0.35)';
                } else if (pillar.defaultType === 'navy') {
                  cardBg = '#0A1128';
                  badgeBg = 'rgba(255, 255, 255, 0.15)';
                  badgeColor = '#FFFFFF';
                  titleColor = '#FFFFFF';
                  descColor = 'rgba(255, 255, 255, 0.85)';
                  shadow = '0 16px 40px rgba(10, 17, 40, 0.35)';
                }

                if (isStepActive) {
                  if (pillar.defaultType === 'mint') {
                    shadow = '0 28px 70px rgba(82, 224, 203, 0.75), 0 0 36px rgba(82, 224, 203, 0.5)';
                  } else if (pillar.defaultType === 'blue') {
                    shadow = '0 28px 70px rgba(38, 92, 244, 0.75), 0 0 36px rgba(38, 92, 244, 0.5)';
                  } else if (pillar.defaultType === 'navy') {
                    shadow = '0 28px 70px rgba(10, 17, 40, 0.75), 0 0 36px rgba(82, 224, 203, 0.35)';
                  } else {
                    shadow = '0 28px 64px rgba(38, 92, 244, 0.45), 0 0 32px rgba(82, 224, 203, 0.35)';
                  }
                }

                return (
                  <div
                    key={pillar.id}
                    className="vision-pillar-card"
                    onMouseEnter={() => setHoveredPillar(idx)}
                    onMouseLeave={() => setHoveredPillar(null)}
                    style={{
                      background: cardBg,
                      border: cardBorder,
                      borderRadius: '24px',
                      padding: '24px 18px',
                      height: pillar.height,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: shadow,
                      transform: isStepActive ? 'translateY(-2px)' : 'none',
                      transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                      cursor: 'pointer',
                      zIndex: isStepActive ? 5 : 1,
                    }}
                  >
                    <div>
                      <span
                        className="vision-pillar-badge"
                        style={{
                          display: 'inline-block',
                          fontSize: '11px',
                          fontWeight: 800,
                          background: badgeBg,
                          color: badgeColor,
                          padding: '4px 10px',
                          borderRadius: '8px',
                          marginBottom: '18px',
                        }}
                      >
                        {pillar.id}
                      </span>

                      <h3
                        className="vision-pillar-title"
                        style={{
                          fontSize: '17px',
                          fontWeight: 800,
                          color: titleColor,
                          lineHeight: 1.25,
                          margin: 0,
                        }}
                      >
                        {pillar.title}
                      </h3>
                    </div>

                    <p
                      className="vision-pillar-desc"
                      style={{
                        fontSize: '12.5px',
                        color: descColor,
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Solid Horizontal Baseline Line Joined Flush with Bottom of Tabs */}
            <div
              style={{
                width: '100%',
                height: '3px',
                backgroundColor: '#0A1128',
                marginTop: '0px',
                marginBottom: '12px',
                position: 'relative',
                zIndex: 2,
              }}
            />

            {/* Bottom Timeline Labels matching uploaded screenshot */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#94A3B8',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                TODAY
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#265CF4',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                THE INTELLIGENT ENTERPRISE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR ROLE IN IT SECTION */}
      <section
        style={{
          padding: '100px 0',
          background: 'linear-gradient(135deg, #051446 0%, #0B2C84 50%, #0D3BB3 100%)',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="section-container">
          <div className="our-role-container-grid">
            {/* Left Column: Heading & CTA */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '16px',
                }}
              >
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
                  OUR ROLE IN IT
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(36px, 4.2vw, 54px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.12,
                  letterSpacing: '-0.025em',
                  marginBottom: '20px',
                }}
              >
                Ajiledone helps organizations<br />
                build toward that future.
              </h2>

              <p
                style={{
                  fontSize: '15.5px',
                  color: 'rgba(255, 255, 255, 0.78)',
                  lineHeight: 1.6,
                  marginBottom: '36px',
                  maxWidth: '480px',
                }}
              >
                Not as a destination announced once, but as an architecture assembled deliberately &mdash; one connected layer at a time.
              </p>

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
                  fontWeight: 800,
                  fontSize: '14.5px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#52E0CB';
                  e.currentTarget.style.color = '#0A1128';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.color = '#1852EB';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                Start the conversation
              </a>
            </div>

            {/* Right Group: Line and Cards Side-By-Side */}
            <div className="our-role-interactive-layout">
              {/* Vertical Line Column */}
              <div className="our-role-line-col">
                {(() => {
                  const activeIdx = hoveredRoleIndex !== null ? hoveredRoleIndex : roleStep;
                  const lineHeight = ((5 - activeIdx) / 5) * 310 + 40;

                  return (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        height: '370px',
                        position: 'relative',
                      }}
                    >
                      {/* Rotated UNDER CONSTRUCTION Text along the line */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '16px',
                          left: '-16px',
                          writingMode: 'vertical-rl',
                          transform: 'rotate(180deg)',
                          fontSize: '10.5px',
                          fontWeight: 800,
                          letterSpacing: '0.22em',
                          color: '#52E0CB',
                          textTransform: 'uppercase',
                          whiteSpace: 'nowrap',
                          zIndex: 3,
                        }}
                      >
                        UNDER CONSTRUCTION
                      </div>

                      {/* Dynamic Growing Cyan Line */}
                      <div
                        style={{
                          width: '2px',
                          height: `${lineHeight}px`,
                          background: 'linear-gradient(0deg, #52E0CB 0%, rgba(82, 224, 203, 0.5) 100%)',
                          boxShadow: '0 0 12px #52E0CB, 0 0 24px rgba(82, 224, 203, 0.5)',
                          transition: 'height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: '-4px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '9px',
                            height: '9px',
                            borderRadius: '50%',
                            backgroundColor: '#52E0CB',
                            boxShadow: '0 0 14px #52E0CB, 0 0 24px #52E0CB',
                            zIndex: 2,
                          }}
                        />
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Stack Cards Column */}
              <div
                className="our-role-cards-col"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  position: 'relative',
                  paddingLeft: '20px',
                }}
              >
              {stackLayers.map((layer, idx) => {
                const activeIdx = hoveredRoleIndex !== null ? hoveredRoleIndex : roleStep;
                const isItemActive = idx === activeIdx;

                let cardBg = 'rgba(255, 255, 255, 0.08)';
                let cardBorder = '1px solid rgba(255, 255, 255, 0.25)';
                let textColor = '#FFFFFF';

                if (layer.isSolid) {
                  cardBg = 'linear-gradient(90deg, #1FA5FF 0%, #1852EB 100%)';
                  cardBorder = '1px solid #1FA5FF';
                } else if (layer.isDashed) {
                  cardBg = 'transparent';
                  cardBorder = '1px dashed rgba(255, 255, 255, 0.35)';
                }

                return (
                  <div
                    key={layer.id}
                    className="our-role-stack-card"
                    onMouseEnter={() => setHoveredRoleIndex(idx)}
                    onMouseLeave={() => setHoveredRoleIndex(null)}
                    style={{
                      background: cardBg,
                      border: isItemActive ? '1px solid #52E0CB' : cardBorder,
                      borderRadius: '14px',
                      padding: '14px 28px',
                      fontSize: '15px',
                      fontWeight: 800,
                      color: textColor,
                      width: '260px',
                      marginLeft: `${layer.offset}px`,
                      boxShadow: isItemActive
                        ? '0 0 32px #52E0CB, 0 8px 24px rgba(82, 224, 203, 0.65)'
                        : layer.isSolid
                        ? '0 6px 20px rgba(24, 82, 235, 0.35)'
                        : 'none',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                    }}
                  >
                    {layer.title}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

          {/* Bottom Sub-Ribbon Text */}
          <div
            style={{
              color: 'rgba(255, 255, 255, 0.65)',
              fontSize: '13.5px',
              fontWeight: 600,
              marginTop: '56px',
            }}
          >
            Connected. Powered by data. Augmented by AI. Automated by design. Built on cloud. Engineered for continuous change.
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
              CONNECT WITH US
            </div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Would you like more information,<br />
              or do you have a question?
            </h2>
          </div>

          <a
            href="#contact"
            onMouseEnter={() => setIsCtaHovered(true)}
            onMouseLeave={() => setIsCtaHovered(false)}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('#contact');
            }}
            style={{
              background: isCtaHovered ? '#F0F4FE' : '#FFFFFF',
              color: '#1852EB',
              padding: '14px 32px',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '14.5px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: isCtaHovered
                ? '0 12px 28px rgba(0, 0, 0, 0.2)'
                : '0 6px 20px rgba(0, 0, 0, 0.12)',
              transform: isCtaHovered ? 'translateY(-3px)' : 'translateY(0)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Contact us
            <ArrowRight
              size={16}
              style={{
                transform: isCtaHovered ? 'translateX(5px)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
              }}
            />
          </a>
        </div>
      </section>
    </div>
  );
}
