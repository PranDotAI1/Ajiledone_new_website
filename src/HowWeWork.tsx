import React, { useState, useEffect, useRef } from 'react';
import {
  Compass,
  RefreshCw,
  Cpu,
  Layers,
  Activity,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface HowWeWorkPageProps {
  onNavigate?: (anchor: string) => void;
}

export const HowWeWorkPage: React.FC<HowWeWorkPageProps> = ({ onNavigate }) => {
  const [hoveredHeroPill, setHoveredHeroPill] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredWalkBtn, setHoveredWalkBtn] = useState<boolean>(false);
  const [hoveredTalkBtn, setHoveredTalkBtn] = useState<boolean>(false);
  const [hoveredEntryBtn, setHoveredEntryBtn] = useState<boolean>(false);
  const [hoveredContactBtn, setHoveredContactBtn] = useState<boolean>(false);
  const [hoveredPillSection3, setHoveredPillSection3] = useState<string | null>(null);
  const [hoveredTagKey, setHoveredTagKey] = useState<string | null>(null);

  // Sequential Animation Loop states
  const [heroSeqStep, setHeroSeqStep] = useState<number>(0);
  const [section3SeqStep, setSection3SeqStep] = useState<number>(0);

  const heroDiagramRef = useRef<HTMLDivElement | null>(null);
  const section3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Hero Diagram Entrance Sequence Animation
    const diagramEl = heroDiagramRef.current;
    if (!diagramEl) return;

    let timer: any = null;
    const startHeroLoop = () => {
      if (timer) clearInterval(timer);
      let step = 1;
      setHeroSeqStep(1);

      timer = setInterval(() => {
        step++;
        if (step > 12) {
          step = 1;
        }
        setHeroSeqStep(step > 4 ? 4 : step);
      }, 1000);
    };

    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startHeroLoop();
          } else {
            if (timer) clearInterval(timer);
            setHeroSeqStep(0);
          }
        });
      },
      { threshold: 0.1 }
    );

    heroObserver.observe(diagramEl);

    return () => {
      heroObserver.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    // Section 3 Sequential Reveal Loop
    const s3El = section3Ref.current;
    if (!s3El) return;

    let timer3: any = null;
    const startS3Loop = () => {
      if (timer3) clearInterval(timer3);
      let step = 0;
      setSection3SeqStep(0);

      timer3 = setInterval(() => {
        step++;
        if (step > 12) {
          step = 0;
        }
        setSection3SeqStep(step > 4 ? 4 : step);
      }, 1000);
    };

    const observer3 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startS3Loop();
          } else {
            if (timer3) clearInterval(timer3);
            setSection3SeqStep(0);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer3.observe(s3El);

    return () => {
      if (timer3) clearInterval(timer3);
      observer3.disconnect();
    };
  }, []);

  const waysToEngage = [
    {
      id: 'advise',
      num: '01',
      title: 'ADVISE',
      desc: 'Where the question is still a business question.',
      icon: Compass,
      tags: ['Strategy', 'Assessment', 'Architecture', 'Roadmaps', 'Transformation Planning'],
      bg: '#52E0CB',
      textColor: '#0A1128',
      numColor: '#1B58F4',
      dotColor: '#52E0CB',
    },
    {
      id: 'transform',
      num: '02',
      title: 'TRANSFORM',
      desc: 'Where the operating model itself has to change.',
      icon: RefreshCw,
      tags: ['ERP Transformation', 'Business Process Transformation', 'Data Transformation', 'Cloud Transformation', 'AI Transformation'],
      bg: '#F4F7FC',
      textColor: '#0A1128',
      numColor: '#1B58F4',
      dotColor: '#52E0CB',
    },
    {
      id: 'engineer',
      num: '03',
      title: 'ENGINEER',
      desc: 'Where something has to be built, not just designed.',
      icon: Cpu,
      tags: ['Applications', 'Platforms', 'Integration', 'Data', 'AI', 'Automation'],
      bg: '#1B58F4',
      textColor: '#FFFFFF',
      numColor: '#52E0CB',
      dotColor: '#1B58F4',
    },
    {
      id: 'implement',
      num: '04',
      title: 'IMPLEMENT',
      desc: 'Where a platform decision is already made.',
      icon: Layers,
      tags: ['SAP', 'Oracle', 'ServiceNow', 'Cloud', 'Data Platforms'],
      bg: '#F4F7FC',
      textColor: '#0A1128',
      numColor: '#1B58F4',
      dotColor: '#52E0CB',
    },
    {
      id: 'operate',
      num: '05',
      title: 'OPERATE',
      desc: 'Where it is live and has to keep running well.',
      icon: Activity,
      tags: ['Application Management', 'Platform Operations', 'Cloud Operations', 'Data Operations', 'Continuous Improvement'],
      bg: '#F4F7FC',
      textColor: '#0A1128',
      numColor: '#1B58F4',
      dotColor: '#52E0CB',
    },
    {
      id: 'innovate',
      num: '06',
      title: 'INNOVATE',
      desc: 'Where the answer does not exist yet.',
      icon: Sparkles,
      tags: ['AI Labs', 'Proofs of Concept', 'Prototypes', 'Emerging Technology', 'Digital Products'],
      bg: '#060B1E',
      textColor: '#FFFFFF',
      numColor: '#52E0CB',
      dotColor: '#060B1E',
    },
  ];

  const scrollToWay = (id: string) => {
    const el = document.getElementById(`way-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
          minHeight: '780px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Subtle 12-Column Grid Lines */}
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

        {/* Glow Ellipse 1 (Figma specs: 480x480, #1FA5FF 40%, Blur 200px, Top 20px) */}
        <div
          style={{
            position: 'absolute',
            width: '480px',
            height: '480px',
            top: '20px',
            right: '40px',
            background: '#1FA5FF',
            opacity: 0.4,
            filter: 'blur(200px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Glow Ellipse 2 (Figma specs: 620x620, #67DFCB 22%, Blur 230px, Top 200px) */}
        <div
          style={{
            position: 'absolute',
            width: '620px',
            height: '620px',
            top: '200px',
            right: '120px',
            background: '#67DFCB',
            opacity: 0.22,
            filter: 'blur(230px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          
          {/* Breadcrumb Navigation */}
          <div
            style={{
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.65)',
              marginBottom: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 500,
            }}
          >
            <span
              onClick={() => {
                if (onNavigate) onNavigate('#home');
              }}
              style={{ cursor: 'pointer', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
            >
              Home
            </span>
            <span>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>How we work</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            {/* Left Column Content */}
            <div>
              {/* Header Label Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '18px',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '3px',
                    backgroundColor: '#67DFCB',
                    borderRadius: '2px',
                  }}
                />
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    color: '#67DFCB',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  HOW WE WORK
                </span>
              </div>

              {/* Main Headline (Finished in two lines) */}
              <h1
                style={{
                  fontSize: 'clamp(34px, 4.2vw, 54px)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                  maxWidth: '720px',
                }}
              >
                One transformation agenda.<br />Multiple ways to engage.
              </h1>

              {/* Subtitle Description */}
              <p
                style={{
                  fontSize: '16.5px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.65,
                  maxWidth: '540px',
                  marginBottom: '40px',
                  fontWeight: 400,
                }}
              >
                Some organizations start with a strategy question. Others start with a platform, a backlog or a lab. The entry point changes &mdash; the agenda behind it does not.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <a
                  href="#ways"
                  onMouseEnter={() => setHoveredWalkBtn(true)}
                  onMouseLeave={() => setHoveredWalkBtn(false)}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('ways')?.scrollIntoView({ behavior: 'smooth' });
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
                  See the six ways in
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

              {/* Hero Sub-nav items */}
              <div
                style={{
                  fontSize: '11.5px',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.65)',
                  letterSpacing: '0.12em',
                }}
              >
                ADVISE &bull; TRANSFORM &bull; ENGINEER &bull; IMPLEMENT &bull; OPERATE &bull; INNOVATE
              </div>

            </div>

            {/* Right Column Diagram Artwork matching Photo 1 exactly */}
            <div ref={heroDiagramRef} style={{ position: 'relative', width: '100%' }}>
              
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.7)',
                  letterSpacing: '0.14em',
                  marginBottom: '14px',
                  paddingLeft: '4px',
                }}
              >
                SIX WAYS IN
              </div>

              {/* Step 1: All 6 Top Cards Grid (NO COLOR CHANGE ON ANIMATION) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: '8px',
                  position: 'relative',
                  zIndex: 2,
                  opacity: heroSeqStep >= 1 ? 1 : 0,
                  transform: heroSeqStep >= 1 ? 'translateY(0)' : 'translateY(-16px)',
                  transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {waysToEngage.map((item, idx) => {
                  const isHovered = hoveredHeroPill === idx;

                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setHoveredHeroPill(idx)}
                      onMouseLeave={() => setHoveredHeroPill(null)}
                      onClick={() => scrollToWay(item.id)}
                      style={{
                        padding: '10px 4px',
                        borderRadius: '12px',
                        backgroundColor: isHovered ? '#67DFCB' : 'rgba(255, 255, 255, 0.12)',
                        border: isHovered ? '1px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.25)',
                        color: isHovered ? '#0A1128' : '#FFFFFF',
                        fontSize: '10.5px',
                        fontWeight: 900,
                        textAlign: 'center',
                        cursor: 'pointer',
                        transform: isHovered ? 'scale(1.06) translateY(-3px)' : 'scale(1)',
                        boxShadow: isHovered ? '0 10px 24px rgba(255, 255, 255, 0.2)' : 'none',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      {item.title}
                    </div>
                  );
                })}
              </div>

              {/* Step 2: 6 Vertical Connecting Lines with Arrowheads dropping to central box */}
              <div
                style={{
                  height: heroSeqStep >= 2 ? '75px' : '0px',
                  opacity: heroSeqStep >= 2 ? 1 : 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: '8px',
                  position: 'relative',
                  zIndex: 1,
                  margin: '-2px 0 -2px 0',
                  overflow: 'hidden',
                  transition: 'height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      height: '75px',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div
                      style={{
                        width: '1.5px',
                        height: '63px',
                        backgroundColor: '#67DFCB',
                        opacity: 0.85,
                      }}
                    />
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 900,
                        color: '#67DFCB',
                        lineHeight: 1,
                        marginTop: '-4px',
                      }}
                    >
                      &darr;
                    </div>
                  </div>
                ))}
              </div>

              {/* Step 3: Central Box "ONE TRANSFORMATION AGENDA" */}
              <div
                style={{
                  background: 'linear-gradient(90deg, #67DFCB 0%, #00A3FF 100%)',
                  borderRadius: '20px',
                  padding: '36px 24px',
                  color: '#0A1128',
                  textAlign: 'center',
                  boxShadow: '0 20px 45px rgba(0, 163, 255, 0.28)',
                  position: 'relative',
                  zIndex: 2,
                  opacity: heroSeqStep >= 3 ? 1 : 0,
                  transform: heroSeqStep >= 3 ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
                  transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '-0.01em', marginBottom: '6px' }}>
                  ONE TRANSFORMATION AGENDA
                </div>
                <div style={{ fontSize: '13px', fontWeight: 600, opacity: 0.9 }}>
                  Business outcome first, every time.
                </div>
              </div>

              {/* Step 4: Next Arrow & Bottom Card "MEASURABLE BUSINESS VALUE" */}
              <div
                style={{
                  opacity: heroSeqStep >= 4 ? 1 : 0,
                  transform: heroSeqStep >= 4 ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  textAlign: 'center',
                }}
              >
                {/* Down Arrow Indicator */}
                <div style={{ color: '#67DFCB', margin: '14px 0 14px' }}>
                  <span style={{ fontSize: '20px', fontWeight: 900 }}>&darr;</span>
                </div>

                {/* Bottom Pill: • MEASURABLE BUSINESS VALUE */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.12)',
                    border: '1.5px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '9999px',
                    padding: '12px 28px',
                    fontSize: '12.5px',
                    fontWeight: 900,
                    letterSpacing: '0.08em',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#67DFCB',
                    }}
                  />
                  <span>MEASURABLE BUSINESS VALUE</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: SIX WAYS TO ENGAGE */}
      <section
        id="ways"
        style={{
          backgroundColor: '#FFFFFF',
          padding: '110px 0 120px',
        }}
      >
        <div className="section-container">
          
          {/* Header */}
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
                SIX WAYS TO ENGAGE
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(34px, 4.2vw, 54px)',
                fontWeight: 900,
                color: '#0A1128',
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                margin: '0 0 16px 0',
                maxWidth: '880px',
              }}
            >
              Start anywhere.<br />It is still the same agenda.
            </h2>
            <p
              style={{
                fontSize: '16.5px',
                color: '#64748B',
                margin: 0,
                fontWeight: 500,
                maxWidth: '480px',
                lineHeight: 1.6,
              }}
            >
              Every engagement model feeds the same transformation agenda &mdash; the difference is where the conversation starts.
            </p>
          </div>

          {/* 6 Rows Container + Right Vertical Timeline Line Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px', gap: '32px', position: 'relative' }}>
            
            {/* Left Column: 6 Rows List */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {waysToEngage.map((way, idx) => {
                const isHovered = hoveredCard === idx;

                return (
                  <div
                    key={way.id}
                    id={`way-${way.id}`}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '270px 1fr',
                      alignItems: 'center',
                      gap: '32px',
                      padding: '24px 0',
                      borderBottom: idx < waysToEngage.length - 1 ? '1px solid #EEF2F6' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {/* Left Box Card Badge (Static Signature Colors!) */}
                    <div
                      style={{
                        backgroundColor: way.bg,
                        color: way.textColor,
                        borderRadius: '16px',
                        padding: '20px 24px',
                        minHeight: '106px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: isHovered ? '0 12px 28px rgba(10, 17, 40, 0.15)' : 'none',
                        transform: isHovered ? 'scale(1.03) translateY(-3px)' : 'scale(1)',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '12px',
                          fontWeight: 900,
                          color: way.numColor,
                          letterSpacing: '0.04em',
                        }}
                      >
                        {way.num}
                      </div>

                      <div>
                        <h3
                          style={{
                            fontSize: '22px',
                            fontWeight: 900,
                            color: way.textColor,
                            lineHeight: 1.15,
                            margin: '0 0 4px 0',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {way.title}
                        </h3>
                        <div
                          style={{
                            fontSize: '11.5px',
                            fontWeight: 600,
                            color: way.textColor === '#FFFFFF' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(10, 17, 40, 0.75)',
                            lineHeight: 1.35,
                          }}
                        >
                          {way.desc}
                        </div>
                      </div>
                    </div>

                    {/* Right Side Tag Pills (Colorless Statically, Change Color on Hover!) */}
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                      {way.tags.map((tag, tIdx) => {
                        const pillKey = `${idx}-${tIdx}`;
                        const isPillHovered = hoveredTagKey === pillKey;

                        return (
                          <span
                            key={tIdx}
                            onMouseEnter={() => setHoveredTagKey(pillKey)}
                            onMouseLeave={() => setHoveredTagKey(null)}
                            style={{
                              backgroundColor: isPillHovered ? '#0A1128' : '#FFFFFF',
                              color: isPillHovered ? '#FFFFFF' : '#475569',
                              border: isPillHovered ? '1px solid #0A1128' : '1px solid #E2E8F0',
                              padding: '8px 18px',
                              borderRadius: '9999px',
                              fontSize: '12.5px',
                              fontWeight: 700,
                              userSelect: 'none',
                              transform: isPillHovered ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)',
                              boxShadow: isPillHovered
                                ? '0 6px 16px rgba(10, 17, 40, 0.22)'
                                : '0 2px 4px rgba(0, 0, 0, 0.02)',
                              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                              cursor: 'pointer',
                            }}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Vertical Cyan Timeline Line with Node Dots */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'stretch',
                padding: '24px 0',
              }}
            >
              {/* Vertical Cyan Timeline Bar */}
              <div
                style={{
                  position: 'absolute',
                  top: '40px',
                  bottom: '40px',
                  left: '50%',
                  width: '3px',
                  backgroundColor: '#52E0CB',
                  borderRadius: '2px',
                  transform: 'translateX(-50%)',
                }}
              />

              {/* Node Dots aligned to each row */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  width: '100%',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {waysToEngage.map((way) => (
                  <div
                    key={way.id}
                    style={{
                      height: '154px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    {/* Horizontal Connector Line */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-28px',
                        width: '28px',
                        height: '1px',
                        backgroundColor: '#E2E8F0',
                      }}
                    />

                    {/* Node Dot */}
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: way.dotColor || '#52E0CB',
                        border: '2px solid #FFFFFF',
                        boxShadow: '0 0 0 2px rgba(82, 224, 203, 0.3)',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Tagline */}
          <div
            style={{
              textAlign: 'left',
              marginTop: '48px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#64748B',
            }}
          >
            Advise, transform, engineer, implement, operate, innovate &mdash; one agenda, six doors.
          </div>

        </div>
      </section>

      {/* 3. SECTION: THE TEST WE APPLY / ENTRY POINTS */}
      <section
        ref={section3Ref}
        style={{
          background: 'linear-gradient(135deg, #0A1230 0%, #0D2A75 50%, #1942B2 100%)',
          color: '#FFFFFF',
          padding: '110px 0 120px',
          position: 'relative',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Glow Aura */}
        <div
          style={{
            position: 'absolute',
            width: '620px',
            height: '620px',
            top: '-20px',
            left: 'calc(50% - 310px)',
            background: '#67DFCB',
            opacity: 0.22,
            filter: 'blur(230px)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Step 1: Tag */}
          <div
            style={{
              fontSize: '12.5px',
              fontWeight: 800,
              color: '#67DFCB',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              opacity: section3SeqStep >= 1 ? 1 : 0,
              transform: section3SeqStep >= 1 ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            &mdash; HOW WE WORK &mdash;
          </div>

          {/* Step 2: Main Heading (Finished in two lines) */}
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 48px)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.22,
              letterSpacing: '-0.025em',
              maxWidth: '960px',
              margin: '0 auto 28px',
              opacity: section3SeqStep >= 2 ? 1 : 0,
              transform: section3SeqStep >= 2 ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            One transformation agenda.<br />Multiple ways to engage.
          </h2>

          {/* Step 3: Mint Cyan Accent Bar Line */}
          <div
            style={{
              width: section3SeqStep >= 3 ? '160px' : '0px',
              height: '4px',
              backgroundColor: '#67DFCB',
              borderRadius: '2px',
              margin: '0 auto 44px',
              opacity: section3SeqStep >= 3 ? 1 : 0,
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />

          {/* Step 4: 6 Entry Point Pills appearing on 1 single line (No Scrollbars!) */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '100%',
              width: '100%',
              margin: '0 auto 48px',
              overflow: 'visible',
              padding: '6px 0',
            }}
          >
            {waysToEngage.map((item, idx) => {
              const isHovered = hoveredPillSection3 === item.id;
              const isPillVisible = section3SeqStep >= 4;

              return (
                <div
                  key={item.id}
                  onClick={() => scrollToWay(item.id)}
                  onMouseEnter={() => setHoveredPillSection3(item.id)}
                  onMouseLeave={() => setHoveredPillSection3(null)}
                  style={{
                    background: isHovered ? '#67DFCB' : 'rgba(255, 255, 255, 0.12)',
                    border: isHovered ? '1px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.25)',
                    color: isHovered ? '#0A1128' : '#FFFFFF',
                    padding: '9px 18px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    opacity: isPillVisible ? 1 : 0,
                    transform: !isPillVisible
                      ? 'translateY(20px) scale(0.95)'
                      : isHovered
                      ? 'scale(1.08) translateY(-3px)'
                      : 'scale(1) translateY(0)',
                    boxShadow: isHovered ? '0 12px 28px rgba(103, 223, 203, 0.35)' : 'none',
                    transition: `opacity 0.5s ease ${idx * 80}ms, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease, border 0.3s ease`,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: isHovered ? '#0A1128' : '#67DFCB',
                      transition: 'background-color 0.3s ease',
                    }}
                  />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>

          {/* Button: ALWAYS VISIBLE (No color change on hover!) */}
          <a
            href="#contact"
            onMouseEnter={() => setHoveredEntryBtn(true)}
            onMouseLeave={() => setHoveredEntryBtn(false)}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('#contact');
            }}
            style={{
              background: '#FFFFFF',
              color: '#08194A',
              border: '1.5px solid #FFFFFF',
              padding: '15px 38px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '15px',
              textDecoration: 'none',
              display: 'inline-block',
              transform: hoveredEntryBtn ? 'scale(1.06) translateY(-3px)' : 'scale(1) translateY(0)',
              boxShadow: hoveredEntryBtn
                ? '0 12px 28px rgba(255, 255, 255, 0.4)'
                : '0 4px 14px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
              opacity: 1,
              visibility: 'visible',
            }}
          >
            Pick your entry point
          </a>

        </div>
      </section>

      {/* 4. CTA BANNER ("DON'T BE WEIRD") */}
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

            {/* White Contact Us Button (No color change on hover!) */}
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
