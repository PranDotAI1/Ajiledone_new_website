import React, { useState, useEffect, useRef } from 'react';
import {
  Target,
  BarChart3,
  RefreshCw,
  Cpu,
  User,
  Users,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface OutcomesWePursuePageProps {
  onNavigate?: (anchor: string) => void;
}

export const OutcomesWePursuePage: React.FC<OutcomesWePursuePageProps> = ({ onNavigate }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredHeroCard, setHoveredHeroCard] = useState<number | null>(null);
  const [hoveredWalkBtn, setHoveredWalkBtn] = useState<boolean>(false);
  const [hoveredTalkBtn, setHoveredTalkBtn] = useState<boolean>(false);
  const [hoveredNameBtn, setHoveredNameBtn] = useState<boolean>(false);
  const [hoveredContactBtn, setHoveredContactBtn] = useState<boolean>(false);
  const [activeFilterPill, setActiveFilterPill] = useState<string>('All');
  const [hoveredFilterPill, setHoveredFilterPill] = useState<string | null>(null);
  const [hoveredPillSection4, setHoveredPillSection4] = useState<string | null>(null);
  const [heroSeqStep, setHeroSeqStep] = useState<number>(0);

  // Section 4 ("THE TEST WE APPLY") Sequential Animation Loop
  const [testSeqStep, setTestSeqStep] = useState<number>(0);
  const testSectionRef = useRef<HTMLDivElement | null>(null);

  const heroMatrixRef = useRef<HTMLDivElement | null>(null);
  const outcomesSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const matrixElement = heroMatrixRef.current;
    if (!matrixElement) return;

    let timer: any = null;
    const startLoop = () => {
      if (timer) clearInterval(timer);
      let step = 1;
      setHeroSeqStep(1); // Start at card 1 immediately

      timer = setInterval(() => {
        step = step >= 8 ? 1 : step + 1; // Travels 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 1 continuously
        setHeroSeqStep(step);
      }, 1200); // 1.2s travel timing per card
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startLoop();
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
    const testElement = testSectionRef.current;
    if (!testElement) return;

    let testTimer: any = null;
    const startTestSequence = () => {
      if (testTimer) clearInterval(testTimer);
      let step = 0;
      setTestSeqStep(0);

      testTimer = setInterval(() => {
        step++;
        setTestSeqStep(step);
        if (step >= 4) {
          clearInterval(testTimer);
          testTimer = null;
        }
      }, 700);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            startTestSequence();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(testElement);

    return () => {
      if (testTimer) clearInterval(testTimer);
      observer.disconnect();
    };
  }, []);

  const outcomesData = [
    {
      id: 'operational-excellence',
      num: '01',
      title: 'Operational Excellence',
      desc: 'Simplify operations, eliminate unnecessary complexity and improve productivity.',
      icon: Target,
      bg: '#060B1E',
      textColor: '#FFFFFF',
      badgeBg: 'rgba(255, 255, 255, 0.1)',
      badgeIconColor: '#52E0CB',
      badgeNumColor: '#52E0CB',
      accentColor: '#52E0CB',
      barColor: '#52E0CB',
    },
    {
      id: 'better-decisions',
      num: '02',
      title: 'Better Decisions',
      desc: 'Turn enterprise information into accessible, trusted and actionable intelligence.',
      icon: BarChart3,
      bg: '#F4F7FC',
      textColor: '#0A1128',
      badgeBg: '#EBF0F9',
      badgeIconColor: '#1B58F4',
      badgeNumColor: '#1B58F4',
      accentColor: '#1B58F4',
      barColor: '#CBD5E1',
    },
    {
      id: 'business-agility',
      num: '03',
      title: 'Business Agility',
      desc: 'Create technology environments capable of responding quickly to change.',
      icon: RefreshCw,
      bg: '#52E0CB',
      textColor: '#0A1128',
      badgeBg: 'rgba(10, 17, 40, 0.12)',
      badgeIconColor: '#0A1128',
      badgeNumColor: '#0A1128',
      accentColor: '#0A1128',
      barColor: '#0A1128',
    },
    {
      id: 'technology-economics',
      num: '04',
      title: 'Technology Economics',
      desc: 'Reduce technical debt, simplify architecture and improve the economics of enterprise technology.',
      icon: Cpu,
      bg: '#1B58F4',
      textColor: '#FFFFFF',
      badgeBg: 'rgba(255, 255, 255, 0.2)',
      badgeIconColor: '#FFFFFF',
      badgeNumColor: '#FFFFFF',
      accentColor: '#FFFFFF',
      barColor: '#52E0CB',
    },
    {
      id: 'customer-experience',
      num: '05',
      title: 'Customer Experience',
      desc: 'Create more connected, intelligent and personalized customer interactions.',
      icon: User,
      bg: '#F4F7FC',
      textColor: '#0A1128',
      badgeBg: '#EBF0F9',
      badgeIconColor: '#1B58F4',
      badgeNumColor: '#1B58F4',
      accentColor: '#1B58F4',
      barColor: '#CBD5E1',
    },
    {
      id: 'workforce-productivity',
      num: '06',
      title: 'Workforce Productivity',
      desc: 'Augment people with automation, analytics and AI.',
      icon: Users,
      bg: '#060B1E',
      textColor: '#FFFFFF',
      badgeBg: 'rgba(255, 255, 255, 0.1)',
      badgeIconColor: '#52E0CB',
      badgeNumColor: '#52E0CB',
      accentColor: '#52E0CB',
      barColor: '#52E0CB',
    },
    {
      id: 'resilience',
      num: '07',
      title: 'Resilience',
      desc: 'Create scalable, governed and resilient enterprise platforms.',
      icon: Shield,
      bg: '#1B58F4',
      textColor: '#FFFFFF',
      badgeBg: 'rgba(255, 255, 255, 0.2)',
      badgeIconColor: '#FFFFFF',
      badgeNumColor: '#FFFFFF',
      accentColor: '#FFFFFF',
      barColor: '#52E0CB',
    },
    {
      id: 'innovation',
      num: '08',
      title: 'Innovation',
      desc: 'Build new digital products, experiences, capabilities and business models.',
      icon: Sparkles,
      bg: '#F4F7FC',
      textColor: '#0A1128',
      badgeBg: '#EBF0F9',
      badgeIconColor: '#1B58F4',
      badgeNumColor: '#1B58F4',
      accentColor: '#1B58F4',
      barColor: '#CBD5E1',
    },
  ];

  const scrollToOutcome = (id: string) => {
    const el = document.getElementById(`outcome-${id}`);
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
        {/* Subtle 12-Column Vertical Line Background Overlay */}
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

        {/* Glow Ellipse 1 (Figma specs: 480x480, #1FA5FF 40%, Blur 200) */}
        <div
          style={{
            position: 'absolute',
            width: '480px',
            height: '480px',
            top: '20px',
            right: '80px',
            background: '#1FA5FF',
            opacity: 0.40,
            filter: 'blur(200px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Glow Ellipse 2 (Figma specs: 620x620, #67DFCB 22%, Blur 230) */}
        <div
          style={{
            position: 'absolute',
            width: '620px',
            height: '620px',
            top: '200px',
            right: '180px',
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
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>The outcomes we pursue</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div>
              {/* Header Label */}
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
                  THE OUTCOMES WE PURSUE
                </span>
              </div>

              {/* Main Headline */}
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
                Technology matters when the business<br />performs better because of it.
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
                Eight outcomes we hold every transformation against &mdash; each one a business result before it is a technology decision.
              </p>

              {/* Action Buttons (Colorless statically, colored on hover only) */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <a
                  href="#outcomes"
                  onMouseEnter={() => setHoveredWalkBtn(true)}
                  onMouseLeave={() => setHoveredWalkBtn(false)}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('outcomes')?.scrollIntoView({ behavior: 'smooth' });
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
                  See the eight outcomes
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
            </div>

            {/* Right Scorecard 4x2 Matrix Artwork Grid with Sequential 1 to 8 Traveling Highlight Animation */}
            <div ref={heroMatrixRef} style={{ position: 'relative' }}>
              
              {/* Header labels */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
                  padding: '0 4px',
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.65)', letterSpacing: '0.14em' }}>
                  THE SCORECARD
                </span>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.14em' }}>
                  8 OUTCOMES
                </span>
              </div>

              {/* 4x2 Grid Container */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '14px',
                }}
              >
                {outcomesData.map((item, idx) => {
                  const Icon = item.icon;
                  const isHovered = hoveredHeroCard === idx;
                  const isSeqActive = heroSeqStep === (idx + 1);
                  const isActive = isHovered || isSeqActive;

                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setHoveredHeroCard(idx)}
                      onMouseLeave={() => setHoveredHeroCard(null)}
                      onClick={() => scrollToOutcome(item.id)}
                      style={{
                        height: '116px',
                        borderRadius: '16px',
                        backgroundColor: isActive ? '#67DFCB' : 'rgba(255, 255, 255, 0.08)',
                        border: isActive ? '1px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.18)',
                        backdropFilter: 'blur(10px)',
                        padding: '14px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transform: isActive ? 'scale(1.08) translateY(-5px)' : 'scale(1) translateY(0)',
                        boxShadow: isActive ? '0 16px 36px rgba(103, 223, 203, 0.45)' : 'none',
                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            backgroundColor: isActive ? '#0A1128' : 'rgba(255, 255, 255, 0.16)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: isActive ? '#67DFCB' : '#FFFFFF',
                            transition: 'all 0.35s ease',
                          }}
                        >
                          <Icon size={14} />
                        </div>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 900,
                            color: isActive ? '#0A1128' : 'rgba(255, 255, 255, 0.75)',
                            transition: 'color 0.35s ease',
                          }}
                        >
                          {item.num}
                        </span>
                      </div>

                      <div
                        style={{
                          fontSize: '12.5px',
                          fontWeight: 800,
                          color: isActive ? '#0A1128' : '#FFFFFF',
                          lineHeight: 1.25,
                          transition: 'color 0.35s ease',
                        }}
                      >
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ textAlign: 'center', marginTop: '18px', fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.65)' }}>
                Every engagement is measured against these.
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* 3. EIGHT OUTCOMES CARDS GRID SECTION */}
      <section
        id="outcomes"
        ref={outcomesSectionRef}
        style={{
          backgroundColor: '#FFFFFF',
          padding: '110px 0 120px',
        }}
      >
        <div className="section-container">
          
          {/* Header Row with Giant Watermark Number 08 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '64px',
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
                  WHAT WE HOLD OURSELVES TO
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 56px)',
                  fontWeight: 900,
                  color: '#0A1128',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  margin: '0 0 12px 0',
                }}
              >
                Eight outcomes.
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  color: '#64748B',
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                Named before the work starts, measured after it ships.
              </p>
            </div>

            {/* Giant Watermark Outline 08 */}
            <div style={{ userSelect: 'none' }}>
              <svg width="120" height="90" viewBox="0 0 120 90" style={{ overflow: 'visible' }}>
                <text
                  x="60"
                  y="70"
                  textAnchor="middle"
                  fontSize="84"
                  fontWeight="900"
                  fontFamily="'Inter', sans-serif"
                  fill="#FFFFFF"
                  stroke="#E2E8F0"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  paintOrder="stroke fill"
                >
                  08
                </text>
              </svg>
            </div>
          </div>

          {/* 8 Outcome Cards Grid (4 Columns x 2 Rows) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {outcomesData.map((outcome, idx) => {
              const Icon = outcome.icon;
              const isHovered = hoveredCard === idx;

              return (
                <div
                  key={outcome.id}
                  id={`outcome-${outcome.id}`}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    backgroundColor: outcome.bg,
                    color: outcome.textColor,
                    borderRadius: '20px',
                    padding: '24px 24px 20px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '240px',
                    boxShadow: isHovered
                      ? '0 24px 55px rgba(10, 17, 40, 0.18)'
                      : '0 4px 20px rgba(0, 0, 0, 0.04)',
                    border: outcome.bg === '#F4F7FC' ? '1px solid #E2E8F0' : 'none',
                    transform: isHovered ? 'scale(1.03) translateY(-6px)' : 'scale(1) translateY(0)',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <div>
                    {/* Top Icon Badge Container */}
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: outcome.badgeBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: outcome.badgeIconColor,
                        marginBottom: '16px',
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    {/* Number Tag Prefix Above Title */}
                    <div
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 900,
                        color: outcome.badgeNumColor,
                        marginBottom: '6px',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {outcome.num}
                    </div>

                    {/* Outcome Title */}
                    <h3
                      style={{
                        fontSize: '19px',
                        fontWeight: 900,
                        color: outcome.textColor,
                        lineHeight: 1.25,
                        margin: 0,
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {outcome.title}
                    </h3>

                    {/* Outcome Description Paragraph */}
                    <p
                      style={{
                        fontSize: '13.5px',
                        color: outcome.bg === '#52E0CB' ? '#0A1128' : outcome.textColor === '#FFFFFF' ? 'rgba(255, 255, 255, 0.75)' : '#475569',
                        lineHeight: 1.5,
                        margin: '12px 0 0 0',
                        fontWeight: 500,
                      }}
                    >
                      {outcome.desc}
                    </p>
                  </div>

                  {/* Bottom Accent Bar Line */}
                  <div
                    style={{
                      width: '40px',
                      height: '3px',
                      borderRadius: '2px',
                      backgroundColor: outcome.barColor,
                      marginTop: '16px',
                    }}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. SECTION: THE TEST WE APPLY (EXACT FIGMA GRADIENT: #0A1230 -> #0D2A75 -> #1942B2) */}
      <section
        ref={testSectionRef}
        style={{
          background: 'linear-gradient(135deg, #0A1230 0%, #0D2A75 50%, #1942B2 100%)',
          color: '#FFFFFF',
          padding: '110px 0 120px',
          position: 'relative',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Figma specs Layer Blur: #67DFCB 22%, Width 620, Height 620, Top -20, Left calc(50% - 310px), Blur 230 */}
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
          
          {/* Step 1: THE TEST WE APPLY Tag Header */}
          <div
            style={{
              fontSize: '12.5px',
              fontWeight: 800,
              color: '#67DFCB',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              opacity: testSeqStep >= 1 ? 1 : 0,
              transform: testSeqStep >= 1 ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            &mdash; THE TEST WE APPLY &mdash;
          </div>

          {/* Step 2: Main Heading */}
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 48px)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.22,
              letterSpacing: '-0.025em',
              maxWidth: '960px',
              margin: '0 auto 28px',
              opacity: testSeqStep >= 2 ? 1 : 0,
              transform: testSeqStep >= 2 ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Technology matters when the business<br />performs better because of it.
          </h2>

          {/* Step 3: Mint Cyan Accent Bar Line */}
          <div
            style={{
              width: testSeqStep >= 3 ? '160px' : '0px',
              height: '4px',
              backgroundColor: '#67DFCB',
              borderRadius: '2px',
              margin: '0 auto 44px',
              opacity: testSeqStep >= 3 ? 1 : 0,
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />

          {/* Step 4: Interactive Outcome Cards / Pills appearing one by one */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: '920px',
              margin: '0 auto 48px',
            }}
          >
            {outcomesData.map((item, idx) => {
              const isHovered = hoveredPillSection4 === item.id;
              const isPillVisible = testSeqStep >= 4;

              return (
                <div
                  key={item.id}
                  onClick={() => scrollToOutcome(item.id)}
                  onMouseEnter={() => setHoveredPillSection4(item.id)}
                  onMouseLeave={() => setHoveredPillSection4(null)}
                  style={{
                    background: isHovered ? '#67DFCB' : 'rgba(255, 255, 255, 0.12)',
                    border: isHovered ? '1px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.25)',
                    color: isHovered ? '#0A1128' : '#FFFFFF',
                    padding: '10px 22px',
                    borderRadius: '9999px',
                    fontSize: '13.5px',
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
                    gap: '8px',
                    userSelect: 'none',
                  }}
                >
                  {/* Mint Green Dot Indicator */}
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

          {/* Button: ALWAYS VISIBLE with Hover Transformation */}
          <a
            href="#contact"
            onMouseEnter={() => setHoveredNameBtn(true)}
            onMouseLeave={() => setHoveredNameBtn(false)}
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
              transform: hoveredNameBtn ? 'scale(1.06) translateY(-3px)' : 'scale(1) translateY(0)',
              boxShadow: hoveredNameBtn
                ? '0 12px 28px rgba(255, 255, 255, 0.4)'
                : '0 4px 14px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
              opacity: 1, // ALWAYS APPEAR VISIBLE
              visibility: 'visible',
            }}
          >
            Talk to Ajiledone
          </a>

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
              {/* Header Label Tag */}
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

              {/* Headline */}
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

            {/* White Contact Us Button */}
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
