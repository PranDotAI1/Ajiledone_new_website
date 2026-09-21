import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Sparkles,
  Zap,
  RefreshCw,
  Shield,
  ShieldCheck,
  Search,
  HelpCircle,
  Compass,
  CheckCircle2,
  Users,
  Layers,
  Cpu,
  Brain,
  ChevronRight,
  Code2,
  Building2,
  Database,
  LineChart,
} from 'lucide-react';

interface OurPeopleProps {
  onNavigate: (anchor: string) => void;
  onGoHome?: () => void;
}

export function OurPeoplePage({ onNavigate, onGoHome }: OurPeopleProps) {
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<string>('01');
  const [hoveredDisciplineId, setHoveredDisciplineId] = useState<string | null>(null);
  const [hoveredCultureCard, setHoveredCultureCard] = useState<number | null>(null);
  const [activeConstellationNode, setActiveConstellationNode] = useState<string>('EA');
  const [hoveredPill, setHoveredPill] = useState<string | null>(null);

  // Scroll observer for Nine Disciplines section animation (replays on every scroll into view)
  const spectrumSectionRef = useRef<HTMLElement>(null);
  const [isSpectrumVisible, setIsSpectrumVisible] = useState<boolean>(false);
  const [spectrumAnimKey, setSpectrumAnimKey] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSpectrumVisible(true);
            setSpectrumAnimKey((prev) => prev + 1);
          } else {
            setIsSpectrumVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    if (spectrumSectionRef.current) {
      observer.observe(spectrumSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 9 Core Disciplines (Matching exact Figma spectrum order & descriptions)
  const disciplines = [
    {
      id: '01',
      code: 'ST',
      title: 'Strategists',
      category: 'Business Understanding',
      desc: 'Where the business question is framed.',
      detail: 'Connecting boardroom ambition with technical plausibility, identifying value pools, and defining transformative paths that organizations can actually execute.',
      icon: Compass,
      theme: 'mint',
      position: 'top',
      spectrumPos: '10%',
    },
    {
      id: '02',
      code: 'CO',
      title: 'Consultants',
      category: 'Business Understanding',
      desc: 'Turning intent into a workable programme.',
      detail: 'Bridging organizational silos, orchestrating change management, and converting complex roadmaps into structured, prioritized delivery workstreams.',
      icon: LineChart,
      theme: 'default',
      position: 'bottom',
      spectrumPos: '20%',
    },
    {
      id: '03',
      code: 'IE',
      title: 'Industry Experts',
      category: 'Business Understanding',
      desc: 'The realities of the sector it operates in.',
      detail: 'Bringing deep domain fluency across regulated, industrial, financial, and manufacturing value chains so solutions address sector-specific realities from day one.',
      icon: Building2,
      theme: 'default',
      position: 'top',
      spectrumPos: '30%',
    },
    {
      id: '04',
      code: 'EA',
      title: 'Enterprise Architects',
      category: 'Technical Architecture',
      desc: 'The shape of the whole estate.',
      detail: 'Governing the multi-year technology horizon, balancing legacy modernization against innovation, and preventing architectural divergence across divisions.',
      icon: Cpu,
      theme: 'dark',
      position: 'bottom',
      spectrumPos: '40%',
    },
    {
      id: '05',
      code: 'SA',
      title: 'Solution Architects',
      category: 'Technical Architecture',
      desc: 'How each piece is actually designed.',
      detail: 'Translating strategic imperatives into modular, resilient system designs, ensuring compatibility, high throughput, and seamless integration across components.',
      icon: Layers,
      theme: 'default',
      position: 'top',
      spectrumPos: '50%',
    },
    {
      id: '06',
      code: 'TL',
      title: 'Technology Leaders',
      category: 'Delivery & Leadership',
      desc: 'Holding the standard across delivery.',
      detail: 'Championing cross-functional engineering teams, removing bottlenecks, establishing rigorous quality gates, and safeguarding on-time business outcomes.',
      icon: Users,
      theme: 'default',
      position: 'bottom',
      spectrumPos: '60%',
    },
    {
      id: '07',
      code: 'DS',
      title: 'Data Specialists',
      category: 'Technical Architecture',
      desc: 'The foundation everything intelligent rests on.',
      detail: 'Constructing unified data fabrics, modern pipelines, and governance frameworks that turn disparate transactional records into reliable real-time intelligence.',
      icon: Database,
      theme: 'default',
      position: 'top',
      spectrumPos: '70%',
    },
    {
      id: '08',
      code: 'AI',
      title: 'AI Practitioners',
      category: 'Engineering & AI',
      desc: 'Turning models into working capability.',
      detail: 'Deploying generative AI agents, neural pipelines, and predictive algorithms directly into enterprise operational workflows to automate and amplify decisions.',
      icon: Brain,
      theme: 'blue',
      position: 'bottom',
      spectrumPos: '80%',
    },
    {
      id: '09',
      code: 'EN',
      title: 'Engineers',
      category: 'Engineering & AI',
      desc: 'Where it becomes real and stays running.',
      detail: 'Building high-velocity digital products, cloud-native services, and scalable infrastructure with uncompromising craftsmanship and engineering excellence.',
      icon: Code2,
      theme: 'default',
      position: 'top',
      spectrumPos: '90%',
    },
  ];

  // 4 Culture Pillars (Matching exact Figma spec, icons, and texts)
  const culturePillars = [
    {
      id: '01',
      title: 'Curiosity',
      desc: 'Asking what the business is actually trying to solve — before proposing anything.',
      icon: HelpCircle,
      theme: 'default',
    },
    {
      id: '02',
      title: 'Accountability',
      desc: 'Owning the outcome, not just the deliverable that was scoped.',
      icon: ShieldCheck,
      theme: 'default',
    },
    {
      id: '03',
      title: 'Continuous learning',
      desc: 'The stack moves every quarter. So does the expectation on us.',
      icon: RefreshCw,
      theme: 'mint',
    },
    {
      id: '04',
      title: 'The confidence to challenge',
      desc: 'Saying so when the conventional approach is the wrong one here.',
      icon: Zap,
      theme: 'default',
    },
  ];

  const currentSelected = disciplines.find((d) => d.id === selectedDisciplineId) || disciplines[0];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#0F172A', fontFamily: "'Inter', sans-serif" }}>
      
      {/* 1. HERO SECTION (EXACT FIGMA SPECIFICATION) */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(8, 25, 74, 1) 0%, rgba(13, 42, 117, 1) 50%, rgba(27, 74, 199, 1) 100%)',
          color: '#FFFFFF',
          padding: '48px 0 95px',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Vertical Grid Lines matching Figma */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                borderRight: '1px solid rgba(255, 255, 255, 0.04)',
                height: '100%',
              }}
            />
          ))}
        </div>

        {/* Figma Ellipse 1 Glow: 480x480, top: 20px, rgba(31, 165, 255, 0.4), blur: 200px */}
        <div
          style={{
            position: 'absolute',
            width: '480px',
            height: '480px',
            top: '20px',
            right: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(31, 165, 255, 0.4)',
            filter: 'blur(200px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Figma Ellipse 2 Glow: 620x620, top: 200px, rgba(103, 223, 203, 0.22), blur: 230px */}
        <div
          style={{
            position: 'absolute',
            width: '620px',
            height: '620px',
            top: '200px',
            right: '160px',
            borderRadius: '50%',
            backgroundColor: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          
          {/* Breadcrumb Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '13.5px',
              color: 'rgba(255, 255, 255, 0.65)',
              marginBottom: '38px',
            }}
          >
            <span
              onClick={() => {
                if (onGoHome) onGoHome();
                else onNavigate('#home');
              }}
              style={{ cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#67DFCB')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
            >
              Home
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.35)' }}>/</span>
            <span
              onClick={() => onNavigate('#who-we-are')}
              style={{ cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#67DFCB')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
            >
              Who we are
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.35)' }}>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Our people</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.12fr 0.88fr', gap: '48px', alignItems: 'center' }}>
            
            {/* Left Hero Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                  OUR PEOPLE
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(42px, 5.2vw, 68px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  margin: '0 0 24px 0',
                }}
              >
                Technology changes.<br />
                Human ingenuity<br />
                moves it forward.
              </h1>

              <p
                style={{
                  fontSize: '16.5px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6,
                  maxWidth: '540px',
                  margin: '0 0 36px 0',
                  fontWeight: 400,
                }}
              >
                Behind every transformation are people capable of connecting business understanding with technology expertise.
              </p>

              {/* Stat Highlight: 09 disciplines that have to sit at the same table */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '42px' }}>
                <div
                  style={{
                    fontSize: '54px',
                    fontWeight: 900,
                    color: '#67DFCB',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}
                >
                  09
                </div>
                <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.82)', lineHeight: 1.4, maxWidth: '200px', fontWeight: 500 }}>
                  disciplines that have to<br />sit at the same table
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  onClick={() => {
                    const targetEl = document.getElementById('nine-disciplines-section');
                    if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#1B4AC7',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    padding: '14px 34px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 14px 32px rgba(103, 223, 203, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  Meet the disciplines
                </button>

                <button
                  onClick={() => onNavigate('#careers')}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1.5px solid rgba(255, 255, 255, 0.45)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    padding: '14px 34px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#07132B';
                    e.currentTarget.style.borderColor = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
                  }}
                >
                  Careers at Ajiledone
                </button>
              </div>
            </div>

            {/* Right Hero Column: Interactive Constellation Diagram */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  color: 'rgba(255, 255, 255, 0.55)',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  width: '100%',
                  textAlign: 'left',
                  paddingLeft: '16px',
                }}
              >
                NINE DISCIPLINES, ONE TEAM
              </div>

              {/* Constellation SVG Canvas */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '560px',
                  height: '380px',
                  margin: '0 auto',
                }}
              >
                {/* SVG Connecting Lines matching Figma exact connections */}
                <svg
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                  viewBox="0 0 560 380"
                >
                  {/* ST (72, 145) to EA (280, 168) */}
                  <line x1="72" y1="145" x2="280" y2="168" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
                  {/* ST (72, 145) to IE (72, 252) */}
                  <line x1="72" y1="145" x2="72" y2="252" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
                  {/* CO (190, 84) to EA (280, 168) */}
                  <line x1="190" y1="84" x2="280" y2="168" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
                  {/* DS (186, 218) to EA (280, 168) */}
                  <line x1="186" y1="218" x2="280" y2="168" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
                  {/* DS (186, 218) to AI (270, 290) - EXACT FIGMA CONNECTION */}
                  <line x1="186" y1="218" x2="270" y2="290" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
                  {/* EA (280, 168) to AI (270, 290) */}
                  <line x1="280" y1="168" x2="270" y2="290" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
                  {/* EA (280, 168) to EN (415, 218) */}
                  <line x1="280" y1="168" x2="415" y2="218" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
                  {/* SA (425, 96) to EN (415, 218) */}
                  <line x1="425" y1="96" x2="415" y2="218" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
                  {/* EN (415, 218) to TL (440, 310) */}
                  <line x1="415" y1="218" x2="440" y2="310" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
                </svg>

                {/* Floating animations style block */}
                <style>{`
                  @keyframes floatNode1 {
                    0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px); }
                    33% { transform: translate(-50%, -50%) translate(3px, -7px); }
                    66% { transform: translate(-50%, -50%) translate(-3px, -3px); }
                  }
                  @keyframes floatNode2 {
                    0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px); }
                    33% { transform: translate(-50%, -50%) translate(-5px, 6px); }
                    66% { transform: translate(-50%, -50%) translate(4px, 2px); }
                  }
                  @keyframes floatNode3 {
                    0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px); }
                    33% { transform: translate(-50%, -50%) translate(4px, -6px); }
                    66% { transform: translate(-50%, -50%) translate(-3px, 4px); }
                  }
                  @keyframes floatNode4 {
                    0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px); }
                    33% { transform: translate(-50%, -50%) translate(-4px, 7px); }
                    66% { transform: translate(-50%, -50%) translate(5px, -3px); }
                  }
                  @keyframes floatNode5 {
                    0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px); }
                    33% { transform: translate(-50%, -50%) translate(5px, -5px); }
                    66% { transform: translate(-50%, -50%) translate(-2px, 5px); }
                  }
                  @keyframes floatNode6 {
                    0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px); }
                    33% { transform: translate(-50%, -50%) translate(-4px, -5px); }
                    66% { transform: translate(-50%, -50%) translate(3px, 6px); }
                  }
                  @keyframes floatNode7 {
                    0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px); }
                    33% { transform: translate(-50%, -50%) translate(-5px, 4px); }
                    66% { transform: translate(-50%, -50%) translate(4px, -5px); }
                  }
                  @keyframes floatNode8 {
                    0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px); }
                    33% { transform: translate(-50%, -50%) translate(4px, 6px); }
                    66% { transform: translate(-50%, -50%) translate(-4px, -4px); }
                  }
                  @keyframes floatNode9 {
                    0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px); }
                    33% { transform: translate(-50%, -50%) translate(5px, -4px); }
                    66% { transform: translate(-50%, -50%) translate(-4px, 5px); }
                  }
                  .node-hover-target {
                    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, filter 0.3s ease;
                  }
                  .node-hover-target:hover {
                    transform: scale(1.12);
                  }
                `}</style>

                {/* 1. EA - Enterprise Architects (Center - Royal Blue) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '280px',
                    top: '168px',
                    zIndex: 10,
                    animation: 'floatNode1 5.4s ease-in-out infinite',
                  }}
                >
                  <div
                    onClick={() => {
                      setActiveConstellationNode('EA');
                      setSelectedDisciplineId('04');
                    }}
                    className="node-hover-target"
                    style={{
                      width: '104px',
                      height: '104px',
                      borderRadius: '50%',
                      backgroundColor: '#265CF4',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '23px',
                      letterSpacing: '-0.02em',
                      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3), 0 0 24px rgba(38, 92, 244, 0.5)',
                      cursor: 'pointer',
                    }}
                    title="Enterprise Architects"
                  >
                    EA
                  </div>
                </div>

                {/* 2. ST - Strategists (Left - Mint Cyan) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '72px',
                    top: '145px',
                    zIndex: 9,
                    animation: 'floatNode2 6.2s ease-in-out infinite 0.3s',
                  }}
                >
                  <div
                    onClick={() => {
                      setActiveConstellationNode('ST');
                      setSelectedDisciplineId('01');
                    }}
                    className="node-hover-target"
                    style={{
                      width: '98px',
                      height: '98px',
                      borderRadius: '50%',
                      backgroundColor: '#67DFCB',
                      color: '#07132B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '22px',
                      boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25), 0 0 26px rgba(103, 223, 203, 0.5)',
                      cursor: 'pointer',
                    }}
                    title="Strategists"
                  >
                    ST
                  </div>
                </div>

                {/* 3. EN - Engineers (Right - Mint Cyan) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '415px',
                    top: '218px',
                    zIndex: 9,
                    animation: 'floatNode3 5.8s ease-in-out infinite 0.7s',
                  }}
                >
                  <div
                    onClick={() => {
                      setActiveConstellationNode('EN');
                      setSelectedDisciplineId('09');
                    }}
                    className="node-hover-target"
                    style={{
                      width: '92px',
                      height: '92px',
                      borderRadius: '50%',
                      backgroundColor: '#67DFCB',
                      color: '#07132B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '21px',
                      boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25), 0 0 26px rgba(103, 223, 203, 0.5)',
                      cursor: 'pointer',
                    }}
                    title="Engineers"
                  >
                    EN
                  </div>
                </div>

                {/* 4. AI - AI Practitioners (Bottom Center - White) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '270px',
                    top: '290px',
                    zIndex: 9,
                    animation: 'floatNode4 4.9s ease-in-out infinite 0.2s',
                  }}
                >
                  <div
                    onClick={() => {
                      setActiveConstellationNode('AI');
                      setSelectedDisciplineId('08');
                    }}
                    className="node-hover-target"
                    style={{
                      width: '82px',
                      height: '82px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      color: '#07132B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '20px',
                      boxShadow: '0 14px 35px rgba(0, 0, 0, 0.35), 0 0 24px rgba(255, 255, 255, 0.4)',
                      cursor: 'pointer',
                    }}
                    title="AI Practitioners"
                  >
                    AI
                  </div>
                </div>

                {/* 5. CO - Consultants (Top Left - Translucent) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '190px',
                    top: '84px',
                    zIndex: 8,
                    animation: 'floatNode5 6.4s ease-in-out infinite 1.1s',
                  }}
                >
                  <div
                    onClick={() => {
                      setActiveConstellationNode('CO');
                      setSelectedDisciplineId('02');
                    }}
                    className="node-hover-target"
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.16)',
                      border: '1.2px solid rgba(255, 255, 255, 0.38)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '16px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                      cursor: 'pointer',
                    }}
                    title="Consultants"
                  >
                    CO
                  </div>
                </div>

                {/* 6. SA - Solution Architects (Top Right - Translucent) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '425px',
                    top: '96px',
                    zIndex: 8,
                    animation: 'floatNode6 5.6s ease-in-out infinite 0.5s',
                  }}
                >
                  <div
                    onClick={() => {
                      setActiveConstellationNode('SA');
                      setSelectedDisciplineId('05');
                    }}
                    className="node-hover-target"
                    style={{
                      width: '66px',
                      height: '66px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.16)',
                      border: '1.2px solid rgba(255, 255, 255, 0.38)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '16px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                      cursor: 'pointer',
                    }}
                    title="Solution Architects"
                  >
                    SA
                  </div>
                </div>

                {/* 7. DS - Data Specialists (Mid Left - Translucent) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '186px',
                    top: '218px',
                    zIndex: 8,
                    animation: 'floatNode7 6.1s ease-in-out infinite 1.3s',
                  }}
                >
                  <div
                    onClick={() => {
                      setActiveConstellationNode('DS');
                      setSelectedDisciplineId('07');
                    }}
                    className="node-hover-target"
                    style={{
                      width: '62px',
                      height: '62px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.16)',
                      border: '1.2px solid rgba(255, 255, 255, 0.38)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '15px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                      cursor: 'pointer',
                    }}
                    title="Data Specialists"
                  >
                    DS
                  </div>
                </div>

                {/* 8. IE - Industry Experts (Bottom Left - Translucent) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '72px',
                    top: '252px',
                    zIndex: 8,
                    animation: 'floatNode8 5.1s ease-in-out infinite 0.8s',
                  }}
                >
                  <div
                    onClick={() => {
                      setActiveConstellationNode('IE');
                      setSelectedDisciplineId('03');
                    }}
                    className="node-hover-target"
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.16)',
                      border: '1.2px solid rgba(255, 255, 255, 0.38)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '14.5px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                      cursor: 'pointer',
                    }}
                    title="Industry Experts"
                  >
                    IE
                  </div>
                </div>

                {/* 9. TL - Technology Leaders (Bottom Right - Translucent) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '440px',
                    top: '310px',
                    zIndex: 8,
                    animation: 'floatNode9 5.7s ease-in-out infinite 1.2s',
                  }}
                >
                  <div
                    onClick={() => {
                      setActiveConstellationNode('TL');
                      setSelectedDisciplineId('06');
                    }}
                    className="node-hover-target"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.16)',
                      border: '1.2px solid rgba(255, 255, 255, 0.38)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '15px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                      cursor: 'pointer',
                    }}
                    title="Technology Leaders"
                  >
                    TL
                  </div>
                </div>
              </div>

              {/* Sub-caption legend exactly matching Figma */}
              <div
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.65)',
                  lineHeight: 1.6,
                  textAlign: 'center',
                  marginTop: '8px',
                  maxWidth: '520px',
                }}
              >
                Strategists &bull; Consultants &bull; Enterprise Architects &bull; Solution Architects &bull; Engineers<br />
                Data Specialists &bull; AI Practitioners &bull; Industry Experts &bull; Technology Leaders
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. NINE DISCIPLINES, ONE CONVERSATION SECTION (EXACT FIGMA LAYOUT + SCROLL ANIMATION) */}
      <section
        id="nine-disciplines-section"
        ref={spectrumSectionRef}
        style={{
          padding: '88px 0 96px',
          backgroundColor: '#F4F7FB',
          borderBottom: '1px solid #E2E8F0',
          overflow: 'hidden',
        }}
      >
        {/* CSS Keyframes for sequential scroll reveal */}
        <style>{`
          @keyframes spectrumHeaderFade {
            0% { opacity: 0; transform: translateY(28px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes spectrumLineSweep {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
          @keyframes spectrumCardDrop {
            0% {
              opacity: 0;
              transform: translateY(-40px) scale(0.88);
            }
            65% {
              transform: translateY(4px) scale(1.02);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          @keyframes spectrumCardRise {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.88);
            }
            65% {
              transform: translateY(-4px) scale(1.02);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          @keyframes spectrumStemGrow {
            0% {
              height: 0px;
              opacity: 0;
            }
            100% {
              height: 30px;
              opacity: 1;
            }
          }
          @keyframes spectrumDotPop {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0);
            }
            65% {
              transform: translate(-50%, -50%) scale(1.45);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }
          @keyframes spectrumLabelLeft {
            0% { opacity: 0; transform: translateX(-18px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes spectrumLabelRight {
            0% { opacity: 0; transform: translateX(18px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes spectrumQuoteFade {
            0% { opacity: 0; transform: translateY(16px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .spectrum-card-box {
            transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
          }
          .spectrum-card-box:hover {
            transform: translateY(-5px) scale(1.02) !important;
          }
        `}</style>

        <div
          key={isSpectrumVisible ? `spectrum-anim-${spectrumAnimKey}` : 'spectrum-hidden'}
          className="section-container"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 32px',
            opacity: isSpectrumVisible ? 1 : 0,
            transition: isSpectrumVisible ? 'none' : 'opacity 0.3s ease',
          }}
        >
          {/* Section Header */}
          <div
            style={{
              marginBottom: '52px',
              animation: isSpectrumVisible ? 'spectrumHeaderFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both' : 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '22px',
                  height: '2px',
                  backgroundColor: '#265CF4',
                }}
              />
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#265CF4', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                AJILEDONE BRINGS TOGETHER
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 3.8vw, 44px)',
                fontWeight: 900,
                color: '#081430',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                margin: '0 0 16px 0',
              }}
            >
              Nine disciplines, one conversation.
            </h2>

            <p
              style={{
                fontSize: '15.5px',
                color: '#475569',
                lineHeight: 1.6,
                maxWidth: '660px',
                margin: 0,
                fontWeight: 400,
              }}
            >
              Transformation stalls where business understanding and technology expertise stop talking. These are the people who hold both ends of that line.
            </p>
          </div>

          {/* Alternating Spectrum Bridge Layout */}
          <div style={{ position: 'relative', width: '100%', marginBottom: '40px' }}>
            
            {/* Top Row: 5 Cards (01, 03, 05, 07, 09) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '16px',
                alignItems: 'end',
              }}
            >
              {[
                {
                  id: '01',
                  code: 'ST',
                  title: 'Strategists',
                  desc: 'Where the business question is framed.',
                  bg: '#5CE1C6',
                  border: 'none',
                  numColor: '#081430',
                  titleColor: '#081430',
                  descColor: 'rgba(8, 20, 48, 0.85)',
                  shadow: '0 8px 24px rgba(92, 225, 198, 0.25)',
                  delay: 0.25,
                },
                {
                  id: '03',
                  code: 'IE',
                  title: 'Industry Experts',
                  desc: 'The realities of the sector it operates in.',
                  bg: '#FFFFFF',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  numColor: '#265CF4',
                  titleColor: '#081430',
                  descColor: '#64748B',
                  shadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  delay: 0.67,
                },
                {
                  id: '05',
                  code: 'SA',
                  title: 'Solution Architects',
                  desc: 'How each piece is actually designed.',
                  bg: '#FFFFFF',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  numColor: '#265CF4',
                  titleColor: '#081430',
                  descColor: '#64748B',
                  shadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  delay: 1.09,
                },
                {
                  id: '07',
                  code: 'DS',
                  title: 'Data Specialists',
                  desc: 'The foundation everything intelligent rests on.',
                  bg: '#FFFFFF',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  numColor: '#265CF4',
                  titleColor: '#081430',
                  descColor: '#64748B',
                  shadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  delay: 1.51,
                },
                {
                  id: '09',
                  code: 'EN',
                  title: 'Engineers',
                  desc: 'Where it becomes real and stays running.',
                  bg: '#FFFFFF',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  numColor: '#265CF4',
                  titleColor: '#081430',
                  descColor: '#64748B',
                  shadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  delay: 1.93,
                },
              ].map((card) => (
                <div
                  key={card.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    animation: isSpectrumVisible
                      ? `spectrumCardDrop 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) ${card.delay}s both`
                      : 'none',
                  }}
                >
                  {/* Card Body */}
                  <div
                    onClick={() => {
                      setSelectedDisciplineId(card.id);
                      setActiveConstellationNode(card.code);
                    }}
                    className="spectrum-card-box"
                    style={{
                      backgroundColor: card.bg,
                      border: card.border,
                      borderRadius: '16px',
                      padding: '22px 18px',
                      width: '100%',
                      minHeight: '148px',
                      boxShadow: card.shadow,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        color: card.numColor,
                        letterSpacing: '0.04em',
                        marginBottom: '8px',
                      }}
                    >
                      {card.id}
                    </div>

                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 800,
                        color: card.titleColor,
                        margin: '0 0 10px 0',
                        lineHeight: 1.25,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {card.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '12.5px',
                        color: card.descColor,
                        lineHeight: 1.45,
                        margin: 0,
                        fontWeight: 450,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  {/* Stem Line Down to Spectrum Axis with grow keyframe */}
                  <div
                    style={{
                      width: '1.5px',
                      backgroundColor: '#CBD5E1',
                      animation: isSpectrumVisible
                        ? `spectrumStemGrow 0.35s ease ${card.delay + 0.08}s both`
                        : 'none',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Continuous Spectrum Axis Bar & 9 Connection Dots (Ellipses) */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '2.5px',
                background: 'linear-gradient(90deg, #5CE1C6 0%, #5CE1C6 35%, #265CF4 70%, #265CF4 100%)',
                margin: 0,
                transformOrigin: 'left',
                animation: isSpectrumVisible
                  ? 'spectrumLineSweep 1.35s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both'
                  : 'none',
              }}
            >
              {[
                { color: '#5CE1C6', glow: true, delay: 0.25 }, // 01 (mint)
                { color: '#CBD5E1', glow: false, delay: 0.46 }, // 02 (grey)
                { color: '#CBD5E1', glow: false, delay: 0.67 }, // 03 (grey)
                { color: '#081430', glow: false, delay: 0.88 }, // 04 (navy)
                { color: '#CBD5E1', glow: false, delay: 1.09 }, // 05 (grey)
                { color: '#CBD5E1', glow: false, delay: 1.30 }, // 06 (grey)
                { color: '#CBD5E1', glow: false, delay: 1.51 }, // 07 (grey)
                { color: '#265CF4', glow: true, delay: 1.72 }, // 08 (royal blue)
                { color: '#CBD5E1', glow: false, delay: 1.93 }, // 09 (grey)
              ].map((dot, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    left: `calc((100% - 4 * 16px) / 10 + ${idx} * ((100% - 4 * 16px) / 10 + 8px))`,
                    top: '50%',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: dot.color,
                    boxShadow: dot.glow ? `0 0 10px ${dot.color}` : 'none',
                    border: '1.5px solid #FFFFFF',
                    boxSizing: 'content-box',
                    zIndex: 2,
                    animation: isSpectrumVisible
                      ? `spectrumDotPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${dot.delay}s both`
                      : 'none',
                  }}
                />
              ))}
            </div>

            {/* Spectrum Left & Right Labels */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0 0',
                width: '100%',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#081430',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  paddingLeft: 'calc((100% - 4 * 16px) / 10 - 24px)',
                  animation: isSpectrumVisible
                    ? 'spectrumLabelLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both'
                    : 'none',
                }}
              >
                BUSINESS UNDERSTANDING
              </div>

              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#265CF4',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  paddingRight: 'calc((100% - 4 * 16px) / 10 - 24px)',
                  animation: isSpectrumVisible
                    ? 'spectrumLabelRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.85s both'
                    : 'none',
                }}
              >
                TECHNOLOGY EXPERTISE
              </div>
            </div>

            {/* Bottom Row: 4 Cards (02, 04, 06, 08) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px',
                padding: '0 calc((100% - 4 * 16px) / 10 + 8px)',
                marginTop: '6px',
                alignItems: 'start',
              }}
            >
              {[
                {
                  id: '02',
                  code: 'CO',
                  title: 'Consultants',
                  desc: 'Turning intent into a workable programme.',
                  bg: '#FFFFFF',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  numColor: '#265CF4',
                  titleColor: '#081430',
                  descColor: '#64748B',
                  shadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  delay: 0.46,
                },
                {
                  id: '04',
                  code: 'EA',
                  title: 'Enterprise Architects',
                  desc: 'The shape of the whole estate.',
                  bg: '#081430',
                  border: '1px solid #081430',
                  numColor: '#5CE1C6',
                  titleColor: '#FFFFFF',
                  descColor: 'rgba(255, 255, 255, 0.75)',
                  shadow: '0 10px 24px rgba(8, 20, 48, 0.3)',
                  delay: 0.88,
                },
                {
                  id: '06',
                  code: 'TL',
                  title: 'Technology Leaders',
                  desc: 'Holding the standard across delivery.',
                  bg: '#FFFFFF',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  numColor: '#265CF4',
                  titleColor: '#081430',
                  descColor: '#64748B',
                  shadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  delay: 1.30,
                },
                {
                  id: '08',
                  code: 'AI',
                  title: 'AI Practitioners',
                  desc: 'Turning models into working capability.',
                  bg: '#265CF4',
                  border: '1px solid #265CF4',
                  numColor: 'rgba(255, 255, 255, 0.9)',
                  titleColor: '#FFFFFF',
                  descColor: 'rgba(255, 255, 255, 0.88)',
                  shadow: '0 10px 24px rgba(38, 92, 244, 0.35)',
                  delay: 1.72,
                },
              ].map((card) => (
                <div
                  key={card.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    animation: isSpectrumVisible
                      ? `spectrumCardRise 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) ${card.delay}s both`
                      : 'none',
                  }}
                >
                  {/* Stem Line Up to Spectrum Axis with grow keyframe */}
                  <div
                    style={{
                      width: '1.5px',
                      backgroundColor: '#CBD5E1',
                      animation: isSpectrumVisible
                        ? `spectrumStemGrow 0.35s ease ${card.delay + 0.08}s both`
                        : 'none',
                    }}
                  />

                  {/* Card Body */}
                  <div
                    onClick={() => {
                      setSelectedDisciplineId(card.id);
                      setActiveConstellationNode(card.code);
                    }}
                    className="spectrum-card-box"
                    style={{
                      backgroundColor: card.bg,
                      border: card.border,
                      borderRadius: '16px',
                      padding: '22px 18px',
                      width: '100%',
                      minHeight: '148px',
                      boxShadow: card.shadow,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        color: card.numColor,
                        letterSpacing: '0.04em',
                        marginBottom: '8px',
                      }}
                    >
                      {card.id}
                    </div>

                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 800,
                        color: card.titleColor,
                        margin: '0 0 10px 0',
                        lineHeight: 1.25,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {card.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '12.5px',
                        color: card.descColor,
                        lineHeight: 1.45,
                        margin: 0,
                        fontWeight: 450,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Section Bottom Note */}
          <div
            style={{
              textAlign: 'left',
              fontSize: '15px',
              fontWeight: 700,
              color: '#334155',
              marginTop: '44px',
              animation: isSpectrumVisible
                ? 'spectrumQuoteFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 2.15s both'
                : 'none',
            }}
          >
            No single discipline gets a transformation over the line. The overlap is the point.
          </div>

        </div>
      </section>

      {/* 3. OUR CULTURE (Four things we hire for.) EXACT FIGMA SPECIFICATION */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0 110px',
          backgroundColor: 'rgba(10, 18, 48, 1)',
          color: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        {/* Figma Ellipse 1 Glow: 700x700, top: 120px, left: 300px, rgba(38, 92, 244, 0.4), blur: 250px */}
        <div
          style={{
            position: 'absolute',
            width: '700px',
            height: '700px',
            top: '120px',
            left: 'calc(50% - 420px)',
            borderRadius: '50%',
            backgroundColor: 'rgba(38, 92, 244, 0.4)',
            filter: 'blur(250px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Figma Ellipse 2 Glow: 520x520, top: 60px, left: 980px (calc(50% + 260px)), rgba(103, 223, 203, 0.2), blur: 230px */}
        <div
          style={{
            position: 'absolute',
            width: '520px',
            height: '520px',
            top: '60px',
            left: 'calc(50% + 260px)',
            borderRadius: '50%',
            backgroundColor: 'rgba(103, 223, 203, 0.2)',
            filter: 'blur(230px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, maxWidth: '1400px', margin: '0 auto', padding: '0 32px' }}>
          
          {/* Header */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div style={{ width: '22px', height: '2px', backgroundColor: '#67DFCB' }} />
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                OUR CULTURE
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 3.8vw, 44px)',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                margin: '0 0 16px 0',
              }}
            >
              Four things we hire for.
            </h2>

            <p
              style={{
                fontSize: '15.5px',
                color: 'rgba(255, 255, 255, 0.78)',
                lineHeight: 1.6,
                maxWidth: '640px',
                margin: 0,
                fontWeight: 400,
              }}
            >
              Our culture encourages curiosity, accountability, continuous learning and the confidence to challenge conventional approaches.
            </p>
          </div>

          {/* 4 Culture Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginBottom: '48px',
            }}
          >
            {culturePillars.map((pillar) => {
              const isMint = pillar.theme === 'mint';
              const IconComp = pillar.icon;

              return (
                <div
                  key={pillar.id}
                  style={{
                    backgroundColor: isMint
                      ? '#67DFCB'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: isMint
                      ? 'none'
                      : '1px solid rgba(255, 255, 255, 0.12)',
                    backdropFilter: isMint ? 'none' : 'blur(16px)',
                    borderRadius: '20px',
                    padding: '32px 26px',
                    cursor: 'pointer',
                    transition: 'transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease',
                    boxShadow: isMint
                      ? '0 16px 36px rgba(103, 223, 203, 0.35)'
                      : '0 8px 24px rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    minHeight: '260px',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    if (!isMint) {
                      e.currentTarget.style.borderColor = 'rgba(103, 223, 203, 0.5)';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.35), 0 0 20px rgba(103, 223, 203, 0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    if (!isMint) {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
                    }
                  }}
                >
                  {/* Icon container */}
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: isMint ? '#FFFFFF' : 'rgba(255, 255, 255, 0.08)',
                      color: isMint ? '#265CF4' : '#67DFCB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '26px',
                    }}
                  >
                    <IconComp size={22} strokeWidth={2.2} />
                  </div>

                  <div
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 800,
                      color: isMint ? '#265CF4' : '#67DFCB',
                      letterSpacing: '0.06em',
                      marginBottom: '8px',
                    }}
                  >
                    {pillar.id}
                  </div>

                  <h3
                    style={{
                      fontSize: '18.5px',
                      fontWeight: 800,
                      color: isMint ? '#081430' : '#FFFFFF',
                      margin: '0 0 12px 0',
                      lineHeight: 1.25,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '13.5px',
                      color: isMint ? 'rgba(8, 20, 48, 0.88)' : 'rgba(255, 255, 255, 0.72)',
                      lineHeight: 1.55,
                      margin: 0,
                      fontWeight: 400,
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Culture Section Footer Caption */}
          <div
            style={{
              fontSize: '15px',
              color: 'rgba(255, 255, 255, 0.88)',
              fontWeight: 600,
              marginTop: '48px',
            }}
          >
            Behind every transformation are people capable of connecting business understanding with technology expertise.
          </div>

        </div>
      </section>

      {/* 4. MID-BOTTOM BLUE BANNER ("Technology changes. Human ingenuity moves it forward.") */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #07102A 0%, #0D2D7D 50%, #154BC7 100%)',
          color: '#FFFFFF',
          padding: '100px 0 110px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Glow backdrop */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '640px',
            height: '640px',
            borderRadius: '50%',
            backgroundColor: 'rgba(103, 223, 203, 0.2)',
            filter: 'blur(220px)',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#52E0CB', borderRadius: '1px' }} />
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#52E0CB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              OUR PEOPLE
            </span>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#52E0CB', borderRadius: '1px' }} />
          </div>

          <h2
            style={{
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              margin: '0 0 36px 0',
            }}
          >
            Technology changes.<br />
            Human ingenuity moves it forward.
          </h2>

          {/* 9 Discipline Tag Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              maxWidth: '960px',
              margin: '0 auto 48px',
            }}
          >
            {[
              'Strategists',
              'Consultants',
              'Enterprise Architects',
              'Solution Architects',
              'Engineers',
              'Data Specialists',
              'AI Practitioners',
              'Industry Experts',
              'Technology Leaders',
            ].map((name) => {
              const isPillHovered = hoveredPill === name;
              return (
                <div
                  key={name}
                  onMouseEnter={() => setHoveredPill(name)}
                  onMouseLeave={() => setHoveredPill(null)}
                  onClick={() => {
                    const match = disciplines.find((d) => d.title === name);
                    if (match) {
                      setSelectedDisciplineId(match.id);
                      document.getElementById('nine-disciplines-section')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  style={{
                    backgroundColor: isPillHovered ? 'rgba(82, 224, 203, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                    border: isPillHovered ? '1.2px solid #52E0CB' : '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '9999px',
                    padding: '8px 20px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    transform: isPillHovered ? 'translateY(-2px)' : 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ color: '#52E0CB' }}>&bull;</span>
                  <span>{name}</span>
                </div>
              );
            })}
          </div>

          {/* White Action Button */}
          <button
            onClick={() => onNavigate('#open-roles')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#2563EB',
              fontWeight: 700,
              fontSize: '15px',
              padding: '14px 38px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 12px 28px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.2)';
            }}
          >
            Explore open roles with us
          </button>

        </div>
      </section>

      {/* 5. BOTTOM QUESTION BANNER ("Would you like more information, or do you have a question?") */}
      <section
        style={{
          backgroundColor: '#0F58EE',
          color: '#FFFFFF',
          padding: '60px 0',
        }}
      >
        <div
          className="section-container"
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '11.5px',
                fontWeight: 800,
                color: 'rgba(255, 255, 255, 0.8)',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              HAVE A QUESTION?
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 36px)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Would you like more information,<br />or do you have a question?
            </h2>
          </div>

          <button
            onClick={() => onNavigate('#contact')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0F58EE',
              fontWeight: 800,
              fontSize: '13.5px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '14px 34px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 24px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 14px 30px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 0, 0, 0.15)';
            }}
          >
            CONTACT US
          </button>
        </div>
      </section>

    </div>
  );
}
