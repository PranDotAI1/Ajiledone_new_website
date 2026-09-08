import { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Zap, ShieldCheck, TrendingUp, Layers, Cpu } from 'lucide-react';

interface TransformationProps {
  onNavigate: (anchor: string) => void;
  onGoHome: () => void;
}

export function TransformationPage({ onNavigate, onGoHome }: TransformationProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeHeroTab, setActiveHeroTab] = useState<number>(4); // Default to "The Impact"
  const [activeMethodologyStep, setActiveMethodologyStep] = useState<number>(0);
  const [seqStep, setSeqStep] = useState<number>(0); // 0: Left Card, 1: Arrow, 2: Right Card

  useEffect(() => {
    const timer = setInterval(() => {
      setSeqStep((prev) => (prev + 1) % 3);
    }, 1600);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: 'All', count: 9 },
    { name: 'AI', count: 3 },
    { name: 'SAP', count: 2 },
    { name: 'Data', count: 2 },
    { name: 'Cloud', count: 1 },
    { name: 'Supply Chain', count: 1 },
  ];

  const heroTabs = [
    { id: 0, label: 'The Challenge', title: 'Legacy silos & 48hr reporting latency', desc: 'Enterprise data locked across 14 ERP instances prevented real-time supply visibility.' },
    { id: 1, label: 'The Opportunity', title: 'Unified cross-entity decision engine', desc: 'Unlocking $14M in working capital by synchronizing global procurement & logistics.' },
    { id: 2, label: 'The Approach', title: 'Clean-core & side-by-side extensions', desc: 'Deploying SAP BTP clean-core architecture without mutating legacy core transaction tables.' },
    { id: 3, label: 'The Technology', title: 'Agentic AI + Snowflake Lakehouse', desc: 'Integrating real-time sensor streams with autonomous AI decision-making agents.' },
    { id: 4, label: 'The Impact', title: 'What changed for the organization', desc: '99.4% automated order matching, 4.2x process velocity, and $18.5M net annual savings.' },
  ];

  const methodologySteps = [
    {
      num: '01',
      tag: 'THE CHALLENGE',
      question: 'What was blocking growth or execution?',
      summary: 'Identifying operational friction, data silos, legacy technical debt, and process latency before designing solutions.',
      details: ['Legacy platform fragmentation', 'Manual spreadsheet hand-offs', 'High maintenance & compliance overhead'],
      color: '#265CF4',
    },
    {
      num: '02',
      tag: 'THE OPPORTUNITY',
      question: 'What was the upside if solved right?',
      summary: 'Quantifying value creation potential across working capital, process velocity, customer experience, and agility.',
      details: ['Multi-million dollar cost reduction', 'Real-time executive visibility', 'Scaled business model flexibility'],
      color: '#67DFCB',
    },
    {
      num: '03',
      tag: 'THE APPROACH',
      question: 'How did we architect the solution?',
      summary: 'Designing modular, clean-core architectures that insulate the digital core while enabling rapid side-by-side innovation.',
      details: ['Clean-core migration methodology', 'Modular microservice orchestrations', 'Agile multi-sprint delivery pods'],
      color: '#1B4AC7',
    },
    {
      num: '04',
      tag: 'THE TECHNOLOGY',
      question: 'What platform and tools powered it?',
      summary: 'Deploying enterprise-grade platforms including SAP BTP, Agentic AI, Snowflake Lakehouses, and Cloud-native engines.',
      details: ['Autonomous AI Agent frameworks', 'Enterprise Lakehouse architecture', 'Zero-trust security & compliance'],
      color: '#38BDF8',
    },
    {
      num: '05',
      tag: 'THE IMPACT',
      question: 'What measured outcome was delivered?',
      summary: 'Establishing rigorous KPIs and baseline metrics to track continuous, verifiable financial and operational returns.',
      details: ['Verifiable ROI within 90 days', 'Continuous automated monitoring', 'End-to-end organizational adoption'],
      color: '#5EEAD4',
    },
  ];

  const caseStudies = [
    {
      id: 1,
      num: '01',
      category: 'SAP',
      industry: 'Consumer & Retail',
      title: 'Connecting 2,000+ store locations into one real-time inventory engine.',
      challenge: 'Fragmented store-level inventory data causing out-of-stock losses.',
      impact: '99.8% real-time inventory accuracy and 18% reduction in safety stock.',
      bg: '#0B132B',
      badgeBg: '#0B132B',
      badgeColor: '#FFFFFF',
      linkText: 'Read full story',
    },
    {
      id: 2,
      num: '02',
      category: 'AI',
      industry: 'Automotive & Manufacturing',
      title: 'From automated factory floor data to predictive supply forecasting.',
      challenge: 'Unplanned machine downtime disrupting global assembly schedules.',
      impact: '72% reduction in breakdown downtime and $14.2M saved in year one.',
      bg: 'linear-gradient(135deg, #265CF4 0%, #1B4AC7 100%)',
      badgeBg: '#265CF4',
      badgeColor: '#FFFFFF',
      linkText: 'Read full story',
    },
    {
      id: 3,
      num: '03',
      category: 'Data',
      industry: 'Life Sciences & Health',
      title: 'Accelerating clinical trial data pipelines with agentic AI models.',
      challenge: 'Manual compliance reviews slowing down trial phase transitions.',
      impact: '4.5x faster regulatory data submission and 100% audit readiness.',
      bg: '#67DFCB',
      badgeBg: '#0B1739',
      badgeColor: '#67DFCB',
      textColor: '#0B1739',
      linkText: 'Read full story',
    },
  ];

  const filteredCaseStudies = selectedCategory === 'All'
    ? caseStudies
    : caseStudies.filter((c) => c.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#FFFFFF', color: '#0B1739' }}>
      <style>{`
        .trans-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .trans-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
          }
        }

        .before-after-grid {
          display: grid;
          grid-template-columns: 1fr 70px 1fr;
          gap: 24px;
          align-items: center;
          position: relative;
        }
        @media (max-width: 992px) {
          .before-after-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }

        /* 3-Step Sequential Color Propagation Loop (4.5s Total) */
        @keyframes seqStep1LeftCard {
          0%, 30% {
            background: linear-gradient(135deg, #0B132B 0%, #1B4AC7 50%, #265CF4 100%) !important;
            border-color: #38BDF8 !important;
            box-shadow: 0 20px 55px rgba(38, 92, 244, 0.65) !important;
            transform: translateY(-6px) scale(1.03) !important;
            color: #FFFFFF !important;
          }
          35%, 100% {
            background: #FFFFFF !important;
            border-color: #E2E8F0 !important;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03) !important;
            transform: translateY(0) scale(1) !important;
            color: #0B1739 !important;
          }
        }

        @keyframes seqStep1LeftText {
          0%, 30% {
            color: #FFFFFF !important;
          }
          35%, 100% {
            color: #0B1739 !important;
          }
        }

        @keyframes seqStep1LeftSubtext {
          0%, 30% {
            color: rgba(255, 255, 255, 0.9) !important;
          }
          35%, 100% {
            color: #475569 !important;
          }
        }

        @keyframes seqStep2Arrow {
          0%, 32% {
            transform: scale(1) rotate(0deg);
            box-shadow: 0 8px 24px rgba(103, 223, 203, 0.3);
            background-color: #67DFCB;
          }
          36%, 63% {
            transform: scale(1.52) rotate(6deg);
            box-shadow: 0 0 50px rgba(103, 223, 203, 1), 0 0 80px rgba(31, 165, 255, 0.85);
            background-color: #5EEAD4;
          }
          67%, 100% {
            transform: scale(1) rotate(0deg);
            box-shadow: 0 8px 24px rgba(103, 223, 203, 0.3);
            background-color: #67DFCB;
          }
        }

        @keyframes seqStep3RightCard {
          0%, 63% {
            box-shadow: 0 10px 30px rgba(11, 19, 43, 0.2);
            transform: translateY(0) scale(1);
            filter: brightness(0.8);
          }
          67%, 96% {
            box-shadow: 0 24px 65px rgba(38, 92, 244, 0.65);
            transform: translateY(-6px) scale(1.03);
            filter: brightness(1.15);
          }
          100% {
            box-shadow: 0 10px 30px rgba(11, 19, 43, 0.2);
            transform: translateY(0) scale(1);
            filter: brightness(0.8);
          }
        }

        .animated-before-card {
          animation: seqStep1LeftCard 4.5s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animated-before-card h3 {
          animation: seqStep1LeftText 4.5s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animated-before-card li {
          animation: seqStep1LeftSubtext 4.5s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animated-arrow-circle {
          animation: seqStep2Arrow 4.5s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animated-after-card {
          animation: seqStep3RightCard 4.5s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        .pill-tab-hover {
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .pill-tab-hover:hover {
          transform: scale(1.12) translateY(-3px) !important;
          background-color: rgba(255, 255, 255, 0.22) !important;
          border-color: #67DFCB !important;
          box-shadow: 0 10px 24px rgba(103, 223, 203, 0.4) !important;
        }

        .anatomy-row-card {
          display: grid;
          grid-template-columns: 240px minmax(260px, 1fr) minmax(280px, 1fr) auto;
          align-items: center;
          gap: 32px;
          padding: 24px 36px;
          border-radius: 18px;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        @media (max-width: 992px) {
          .anatomy-row-card {
            grid-template-columns: 200px 1fr 1fr auto !important;
            gap: 20px !important;
            padding: 20px 24px !important;
          }
        }
        @media (max-width: 768px) {
          .anatomy-row-card {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
            padding: 20px 22px !important;
          }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(90deg, rgba(8, 25, 74, 1) 0%, rgba(13, 42, 117, 1) 45%, rgba(27, 74, 199, 1) 100%)',
          color: '#FFFFFF',
          padding: '110px 0 100px',
          overflow: 'hidden',
          minHeight: '800px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Vertical Grid Lines Overlay (6 Columns) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '16.666% 100%',
            pointerEvents: 'none',
          }}
        />

        {/* Ambient Blur Glow 1 (Blue Ellipse: 480px x 480px, Blur 200) */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '-40px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'rgba(31, 165, 255, 0.4)',
            filter: 'blur(200px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Ambient Blur Glow 2 (Mint Ellipse: 620px x 620px, Blur 230) */}
        <div
          style={{
            position: 'absolute',
            top: '210px',
            right: '120px',
            width: '620px',
            height: '620px',
            borderRadius: '50%',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', marginBottom: '36px', color: 'rgba(255, 255, 255, 0.65)' }}>
            <span
              onClick={onGoHome}
              style={{ cursor: 'pointer', color: 'rgba(255, 255, 255, 0.75)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#67DFCB')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
            >
              Home
            </span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.95)', fontWeight: 500 }}>Transformation stories</span>
          </div>

          <div className="trans-hero-grid">
            {/* Left Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{ width: '28px', height: '2.5px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    color: '#67DFCB',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  TRANSFORMATION STORIES
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(42px, 5.2vw, 68px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: '28px',
                }}
              >
                From challenge to<br />measurable change.
              </h1>

              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6,
                  maxWidth: '540px',
                  marginBottom: '36px',
                }}
              >
                Every transformation begins with a business challenge. Our Transformation Stories explore how organizations move from complexity toward measurable improvement.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '54px' }}>
                <button
                  onClick={() => {
                    const el = document.getElementById('methodology-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#1B4AC7',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    padding: '14px 32px',
                    borderRadius: '28px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  How a story is told
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '14.5px',
                    padding: '14px 30px',
                    borderRadius: '28px',
                    border: '1.5px solid rgba(255, 255, 255, 0.45)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#67DFCB';
                    e.currentTarget.style.color = '#0B1739';
                    e.currentTarget.style.borderColor = '#67DFCB';
                    e.currentTarget.style.transform = 'scale(1.04) translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(103, 223, 203, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Talk to Ajiledone
                </button>
              </div>

              {/* Bottom Categories Row */}
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  color: 'rgba(255, 255, 255, 0.75)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                  textTransform: 'uppercase',
                }}
              >
                <span>CHALLENGE</span>
                <span>·</span>
                <span>OPPORTUNITY</span>
                <span>·</span>
                <span>APPROACH</span>
                <span>·</span>
                <span>TECHNOLOGY</span>
                <span>·</span>
                <span>IMPACT</span>
              </div>
            </div>

            {/* Right Interactive Hero Card Mockup */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '580px', margin: '0 auto' }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.65)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '12px' }}>
                A REPEATABLE STRUCTURE
              </div>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '36px',
                  boxShadow: '0 24px 60px rgba(3, 10, 41, 0.4)',
                  color: '#0B1739',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Card Top Badge */}
                <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#265CF4', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  TRANSFORMATION STORY
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0B1739', lineHeight: 1.3, marginBottom: '20px' }}>
                  How a complex operation became a measurable one.
                </h3>

                {/* Stage Tabs */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {['Challenge', 'Opportunity', 'Approach', 'Technology', 'Impact'].map((label, idx) => {
                    const isActive = activeHeroTab === idx;
                    return (
                      <button
                        key={label}
                        onClick={() => setActiveHeroTab(idx)}
                        className="pill-tab-hover"
                        style={{
                          backgroundColor: isActive ? '#0B1739' : '#F1F5F9',
                          color: isActive ? '#FFFFFF' : '#475569',
                          fontSize: '11.5px',
                          fontWeight: 700,
                          padding: '6px 14px',
                          borderRadius: '16px',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                {/* Skeleton Placeholders */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#F1F5F9', borderRadius: '4px' }} />
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#F1F5F9', borderRadius: '4px' }} />
                  <div style={{ width: '60%', height: '8px', backgroundColor: '#F1F5F9', borderRadius: '4px' }} />
                </div>

                {/* Visualization Impact Box - Statically Colorless, Gradient on Hover */}
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    color: '#0B1739',
                    minHeight: '132px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(103, 223, 203, 1) 0%, rgba(31, 165, 255, 1) 100%)';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(31, 165, 255, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#F8FAFC';
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#1B4AC7', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '6px' }}>
                      THE IMPACT
                    </div>
                    <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0B1739', margin: 0, lineHeight: 1.25 }}>
                      What changed for the organization.
                    </h4>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', margin: '14px 0 10px 0' }}>
                    <div style={{ width: '100px', height: '8px', backgroundColor: 'rgba(11, 23, 57, 0.15)', borderRadius: '4px' }} />
                    <div style={{ width: '90px', height: '8px', backgroundColor: 'rgba(11, 23, 57, 0.15)', borderRadius: '4px' }} />
                    <div style={{ width: '50px', height: '8px', backgroundColor: 'rgba(11, 23, 57, 0.15)', borderRadius: '4px' }} />
                  </div>

                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#265CF4', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Read the story →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BEFORE & AFTER COMPARISON SECTION */}
      <section style={{ padding: '90px 0', backgroundColor: '#F8FAFC' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'left', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '28px', height: '2.5px', backgroundColor: '#265CF4', borderRadius: '1px' }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#265CF4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                BEFORE & AFTER
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', fontWeight: 800, color: '#0B1739', margin: 0, letterSpacing: '-0.025em' }}>
              From complexity toward<br />measurable improvement.
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '640px', marginTop: '12px', lineHeight: 1.6 }}>
              Before transformation, enterprise operations are fragmented, slow, and reactive. After transformation, operations are unified, automated, and predictive.
            </p>
          </div>

          {/* Side-by-side Before / After Cards with Sequential Color Propagation */}
          <div className="before-after-grid">
            {/* Before Card (Vibrant Blue Colorful during Step 0) */}
            <div
              style={{
                background: seqStep === 0
                  ? 'linear-gradient(135deg, #0B132B 0%, #1B4AC7 50%, #265CF4 100%)'
                  : '#FFFFFF',
                color: seqStep === 0 ? '#FFFFFF' : '#0B1739',
                borderRadius: '24px',
                padding: '40px 36px',
                border: seqStep === 0 ? '1.5px solid #38BDF8' : '1.5px solid #E2E8F0',
                boxShadow: seqStep === 0
                  ? '0 24px 60px rgba(38, 92, 244, 0.65)'
                  : '0 4px 16px rgba(0,0,0,0.03)',
                transform: seqStep === 0 ? 'translateY(-6px) scale(1.03)' : 'none',
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: seqStep === 0 ? '#67DFCB' : '#64748B',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  backgroundColor: seqStep === 0 ? 'rgba(255, 255, 255, 0.15)' : '#F1F5F9',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  display: 'inline-block',
                  marginBottom: '16px',
                  transition: 'all 0.45s ease',
                }}
              >
                THE BEFORE
              </span>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: seqStep === 0 ? '#FFFFFF' : '#0B1739', marginBottom: '24px', transition: 'color 0.45s ease' }}>
                Where the story starts.
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Fragmented data silos across legacy ERPs', 'Manual hand-offs & high processing latency', 'Lack of real-time operational visibility', 'Reactive decision-making after issues occur'].map((item) => (
                  <li key={item} style={{ fontSize: '15px', color: seqStep === 0 ? '#FFFFFF' : '#475569', display: 'flex', alignItems: 'center', gap: '12px', transition: 'color 0.45s ease' }}>
                    <span style={{ color: seqStep === 0 ? '#FF6B6B' : '#EF4444', fontWeight: 900 }}>✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Transition Indicator Arrow - Enlarges and Glows during Step 1 */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 2 }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: seqStep === 1 ? '#5EEAD4' : '#67DFCB',
                  color: '#0B1739',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transform: seqStep === 1 ? 'scale(1.55) rotate(6deg)' : 'scale(1)',
                  boxShadow: seqStep === 1
                    ? '0 0 50px rgba(103, 223, 203, 1), 0 0 85px rgba(31, 165, 255, 0.9)'
                    : '0 8px 24px rgba(103, 223, 203, 0.3)',
                  transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <ArrowRight size={28} strokeWidth={2.8} />
              </div>
            </div>

            {/* After Card - Colorless initially, turns Vibrant Blue Gradient during Step 2 */}
            <div
              style={{
                background: seqStep === 2
                  ? 'linear-gradient(135deg, #0B132B 0%, #1B4AC7 50%, #265CF4 100%)'
                  : '#FFFFFF',
                color: seqStep === 2 ? '#FFFFFF' : '#0B1739',
                borderRadius: '24px',
                padding: '40px 36px',
                border: seqStep === 2 ? '1.5px solid #38BDF8' : '1.5px solid #E2E8F0',
                boxShadow: seqStep === 2
                  ? '0 24px 65px rgba(38, 92, 244, 0.75)'
                  : '0 4px 16px rgba(0,0,0,0.03)',
                transform: seqStep === 2 ? 'translateY(-6px) scale(1.03)' : 'scale(1)',
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: seqStep === 2 ? '#67DFCB' : '#265CF4',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  backgroundColor: seqStep === 2 ? 'rgba(255, 255, 255, 0.15)' : '#EFF6FF',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  display: 'inline-block',
                  marginBottom: '16px',
                  transition: 'all 0.45s ease',
                }}
              >
                THE AFTER (MEASURABLE CHANGE)
              </span>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: seqStep === 2 ? '#FFFFFF' : '#0B1739', marginBottom: '24px', transition: 'color 0.45s ease' }}>
                Where the story ends.
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Unified real-time enterprise data layer', 'Autonomous AI workflows & automated processing', 'Predictive forecasting & continuous monitoring', 'Verifiable, measured financial ROI'].map((item) => (
                  <li key={item} style={{ fontSize: '15px', color: seqStep === 2 ? '#FFFFFF' : '#475569', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500, transition: 'color 0.45s ease' }}>
                    <CheckCircle2 size={18} style={{ color: seqStep === 2 ? '#67DFCB' : '#265CF4', transition: 'color 0.45s ease' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR METHODOLOGY SECTION ("HOW EVERY STORY IS TOLD - Five questions, one arc.") */}
      <section
        id="methodology-section"
        style={{
          position: 'relative',
          padding: '120px 0 140px',
          background: 'linear-gradient(135deg, #050B1E 0%, #081535 50%, #060F2B 100%)',
          color: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        {/* Ambient Glow Ellipse 1 (Blue Blur: 700px x 700px, Blur 250) */}
        <div
          style={{
            position: 'absolute',
            top: '220px',
            left: '15%',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'rgba(38, 92, 244, 0.4)',
            filter: 'blur(250px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Ambient Glow Ellipse 2 (Mint Blur: 520px x 520px, Blur 230) */}
        <div
          style={{
            position: 'absolute',
            top: '120px',
            right: '5%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'left', marginBottom: '80px', maxWidth: '720px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '2.5px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                HOW EVERY STORY IS TOLD
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(38px, 4.5vw, 56px)', fontWeight: 800, color: '#FFFFFF', margin: 0, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Five questions, one arc.
            </h2>
            <p style={{ fontSize: '16.5px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '16px', lineHeight: 1.6 }}>
              Every Transformation Story answers the same five questions in the same order — so two stories from different industries can still be compared.
            </p>
          </div>

          {/* 5-Node Arc Visual Layout (Preserving exact 2D graph design on all screen dimensions via horizontal scrolling) */}
          <div
            style={{
              width: '100%',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              paddingTop: '40px',
              paddingBottom: '20px',
              margin: '20px 0',
            }}
            className="no-scrollbar"
          >
            <div
              style={{
                position: 'relative',
                height: '520px',
                minWidth: '1150px',
                width: '100%',
              }}
            >
              {/* SVG Rising Path Line and Vertical Node Connectors */}
              <svg
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                  overflow: 'visible',
                }}
              >
                <defs>
                  <linearGradient id="arcLineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(103, 223, 203, 0.4)" />
                    <stop offset="50%" stopColor="rgba(103, 223, 203, 0.85)" />
                    <stop offset="100%" stopColor="rgba(103, 223, 203, 1)" />
                  </linearGradient>
                </defs>

                {/* Main Rising Trend Line */}
                <line x1="10%" y1="78%" x2="90%" y2="24%" stroke="url(#arcLineGrad)" strokeWidth="2.5" />

                {/* Vertical Connector Stem Lines from Nodes to Cards */}
                <line x1="10%" y1="78%" x2="10%" y2="58%" stroke="rgba(103, 223, 203, 0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="30%" y1="65%" x2="30%" y2="72%" stroke="rgba(103, 223, 203, 0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="50%" y1="50%" x2="50%" y2="34%" stroke="rgba(103, 223, 203, 0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="70%" y1="35%" x2="70%" y2="44%" stroke="rgba(103, 223, 203, 0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="90%" y1="24%" x2="90%" y2="15%" stroke="rgba(103, 223, 203, 0.5)" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Glowing Node Dots */}
                {[
                  { cx: '10%', cy: '78%' },
                  { cx: '30%', cy: '63%' },
                  { cx: '50%', cy: '50%' },
                  { cx: '70%', cy: '35%' },
                  { cx: '90%', cy: '24%' },
                ].map((node, i) => (
                  <g key={i}>
                    <circle cx={node.cx} cy={node.cy} r="18" fill="rgba(103, 223, 203, 0.25)" filter="blur(6px)" />
                    <circle cx={node.cx} cy={node.cy} r="7.5" fill="#67DFCB" />
                  </g>
                ))}
              </svg>

              {/* Axis Text Labels */}
              <div style={{ position: 'absolute', top: '82%', left: '4%', fontSize: '10.5px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.45)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                COMPLEXITY
              </div>
              <div style={{ position: 'absolute', top: '30%', left: '80%', fontSize: '10.5px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                MEASURABLE IMPROVEMENT
              </div>

              {/* 5 Small Cards Positioned Along Node Connectors */}

              {/* Card 01: THE CHALLENGE (Small Box) */}
              <div
                style={{
                  position: 'absolute',
                  left: '2%',
                  top: '32%',
                  width: '210px',
                  backgroundColor: 'rgba(15, 27, 62, 0.7)',
                  border: '1.2px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '16px',
                  padding: '16px 18px',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 10px 28px rgba(0,0,0,0.35)',
                  zIndex: 3,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#67DFCB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 900, color: '#67DFCB', marginBottom: '4px' }}>
                  01
                </div>
                <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.04em', marginBottom: '6px', textTransform: 'uppercase' }}>
                  THE CHALLENGE
                </h3>
                <p style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.45, margin: 0 }}>
                  What business or technology problem needed to change?
                </p>
              </div>

              {/* Card 02: THE OPPORTUNITY (Small Box) */}
              <div
                style={{
                  position: 'absolute',
                  left: '22%',
                  top: '68%',
                  width: '210px',
                  backgroundColor: 'rgba(15, 27, 62, 0.7)',
                  border: '1.2px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '16px',
                  padding: '16px 18px',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 10px 28px rgba(0,0,0,0.35)',
                  zIndex: 3,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#67DFCB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 900, color: '#67DFCB', marginBottom: '4px' }}>
                  02
                </div>
                <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.04em', marginBottom: '6px', textTransform: 'uppercase' }}>
                  THE OPPORTUNITY
                </h3>
                <p style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.45, margin: 0 }}>
                  What value could transformation unlock?
                </p>
              </div>

              {/* Card 03: THE APPROACH (Small Box - Vibrant Royal Blue) */}
              <div
                style={{
                  position: 'absolute',
                  left: '42%',
                  top: '8%',
                  width: '210px',
                  backgroundColor: '#265CF4',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '16px 18px',
                  color: '#FFFFFF',
                  boxShadow: '0 16px 40px rgba(38, 92, 244, 0.45)',
                  zIndex: 3,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(38, 92, 244, 0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(38, 92, 244, 0.45)';
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 900, color: '#BAE6FD', marginBottom: '4px' }}>
                  03
                </div>
                <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.04em', marginBottom: '6px', textTransform: 'uppercase' }}>
                  THE APPROACH
                </h3>
                <p style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.45, margin: 0 }}>
                  How was the transformation designed?
                </p>
              </div>

              {/* Card 04: THE TECHNOLOGY (Small Box) */}
              <div
                style={{
                  position: 'absolute',
                  left: '62%',
                  top: '42%',
                  width: '210px',
                  backgroundColor: 'rgba(15, 27, 62, 0.7)',
                  border: '1.2px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '16px',
                  padding: '16px 18px',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 10px 28px rgba(0,0,0,0.35)',
                  zIndex: 3,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#67DFCB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 900, color: '#67DFCB', marginBottom: '4px' }}>
                  04
                </div>
                <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.04em', marginBottom: '6px', textTransform: 'uppercase' }}>
                  THE TECHNOLOGY
                </h3>
                <p style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.45, margin: 0 }}>
                  What platforms, architecture and engineering enabled it?
                </p>
              </div>

              {/* Card 05: THE IMPACT (Small Box - Vibrant Mint Teal) */}
              <div
                style={{
                  position: 'absolute',
                  left: '81%',
                  top: '2%',
                  width: '210px',
                  backgroundColor: '#67DFCB',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '16px 18px',
                  color: '#0B1739',
                  boxShadow: '0 16px 40px rgba(103, 223, 203, 0.45)',
                  zIndex: 3,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(103, 223, 203, 0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(103, 223, 203, 0.45)';
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 900, color: '#265CF4', marginBottom: '4px' }}>
                  05
                </div>
                <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#0B1739', letterSpacing: '0.04em', marginBottom: '6px', textTransform: 'uppercase' }}>
                  THE IMPACT
                </h3>
                <p style={{ fontSize: '11.5px', color: '#0B1739', lineHeight: 1.45, margin: 0, fontWeight: 600 }}>
                  What changed for the organization?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 5 STAGES SECTION ("What every story contains.") */}
      <section style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          {/* Header */}
          <div style={{ textAlign: 'left', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '28px', height: '2.5px', backgroundColor: '#265CF4', borderRadius: '1px' }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#265CF4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                STORY ANATOMY
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, color: '#0B1739', margin: 0, letterSpacing: '-0.025em' }}>
              What every story contains.
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '680px', marginTop: '12px', lineHeight: 1.6 }}>
              The same five sections, in the same order, on every page — so the reader always knows where the answer lives.
            </p>
          </div>

          {/* 5 Row Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              {
                num: '01',
                tag: 'THE CHALLENGE',
                question: 'What business or technology problem needed to change?',
                explanation: 'Where the story starts — the constraint the business could no longer live with.',
                bg: '#0A1128',
                numColor: '#67DFCB',
                textColor: '#FFFFFF',
                explanationColor: 'rgba(255, 255, 255, 0.55)',
                arrowColor: '#67DFCB',
                boxShadow: '0 12px 32px rgba(10, 17, 40, 0.35)',
              },
              {
                num: '02',
                tag: 'THE OPPORTUNITY',
                question: 'What value could transformation unlock?',
                explanation: 'The size of the prize, named before any platform is chosen.',
                bg: '#F3F5FA',
                numColor: '#265CF4',
                textColor: '#0B1739',
                explanationColor: '#64748B',
                arrowColor: '#265CF4',
                boxShadow: 'none',
              },
              {
                num: '03',
                tag: 'THE APPROACH',
                question: 'How was the transformation designed?',
                explanation: 'Sequence, scope and the decisions that shaped the programme.',
                bg: '#265CF4',
                numColor: '#BAE6FD',
                textColor: '#FFFFFF',
                explanationColor: 'rgba(255, 255, 255, 0.85)',
                arrowColor: '#BAE6FD',
                boxShadow: '0 16px 40px rgba(38, 92, 244, 0.4)',
              },
              {
                num: '04',
                tag: 'THE TECHNOLOGY',
                question: 'What platforms, architecture and engineering enabled it?',
                explanation: 'The stack — and why it was the right one for this problem.',
                bg: '#F3F5FA',
                numColor: '#265CF4',
                textColor: '#0B1739',
                explanationColor: '#64748B',
                arrowColor: '#265CF4',
                boxShadow: 'none',
              },
              {
                num: '05',
                tag: 'THE IMPACT',
                question: 'What changed for the organization?',
                explanation: 'The measurable difference, stated in business terms.',
                bg: '#67DFCB',
                numColor: '#1B4AC7',
                textColor: '#0B1739',
                explanationColor: 'rgba(11, 23, 57, 0.7)',
                arrowColor: '#1B4AC7',
                boxShadow: '0 14px 36px rgba(103, 223, 203, 0.45)',
              },
            ].map((stage) => (
              <div
                key={stage.tag}
                className="anatomy-row-card"
                style={{
                  backgroundColor: stage.bg,
                  color: stage.textColor,
                  boxShadow: stage.boxShadow,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
              >
                {/* Left Column: Number & Title */}
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: stage.numColor, letterSpacing: '0.05em', marginBottom: '4px' }}>
                    {stage.num}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: stage.textColor, margin: 0, letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                    {stage.tag}
                  </h3>
                </div>

                {/* Middle Column: Question */}
                <div>
                  <p style={{ fontSize: '14.5px', fontWeight: 700, margin: 0, lineHeight: 1.45, color: stage.textColor }}>
                    {stage.question}
                  </p>
                </div>

                {/* Right Column: Explanation text */}
                <div>
                  <p style={{ fontSize: '13.5px', fontWeight: 450, margin: 0, lineHeight: 1.5, color: stage.explanationColor }}>
                    {stage.explanation}
                  </p>
                </div>

                {/* Far Right Arrow */}
                <div>
                  <ArrowRight size={18} style={{ color: stage.arrowColor, display: 'block' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Sub-caption Note */}
          <div style={{ marginTop: '36px', fontSize: '14px', fontWeight: 600, color: '#64748B' }}>
            Two stories from different industries can be read side by side, because the structure never moves.
          </div>
        </div>
      </section>

      {/* 5. WHERE STORIES COME FROM SECTION (Exact Uploaded Spec) */}
      <section id="case-studies-section" style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px', marginBottom: '48px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '28px', height: '2.5px', backgroundColor: '#265CF4', borderRadius: '1px' }} />
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#265CF4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  WHERE STORIES COME FROM
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(34px, 4vw, 50px)', fontWeight: 800, color: '#0B1739', margin: 0, letterSpacing: '-0.025em', lineHeight: 1.12 }}>
                The same five questions,<br />asked in every industry.
              </h2>
            </div>

            <div style={{ fontSize: '15px', color: '#64748B', maxWidth: '460px', lineHeight: 1.55, paddingTop: '8px' }}>
              Stories are published as programmes reach measurable outcomes.<br />Each one follows the structure above.
            </div>
          </div>

          {/* 3 Large Industry Feature Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '56px',
            }}
          >
            {/* Card 01: Energy, Resources & Oil and Gas */}
            <div
              style={{
                backgroundColor: '#0A1128',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: '36px 32px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '400px',
                boxShadow: '0 16px 40px rgba(10, 17, 40, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              {/* Outlined Watermark 01 */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '20px',
                  fontSize: '96px',
                  fontWeight: 900,
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.18)',
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}
              >
                01
              </div>

              <div>
                {/* Industry Tag Pill */}
                <div style={{ display: 'inline-block', backgroundColor: 'rgba(255, 255, 255, 0.12)', color: '#FFFFFF', fontSize: '10px', fontWeight: 800, padding: '6px 14px', borderRadius: '20px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '24px' }}>
                  ENERGY, RESOURCES & OIL AND GAS
                </div>

                {/* Main Headline */}
                <h3 style={{ fontSize: '20px', fontWeight: 800, lineHeight: 1.3, marginBottom: '28px', color: '#FFFFFF' }}>
                  Connecting assets, joint ventures and enterprise operations.
                </h3>

                {/* 5 Stages Bullets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                  <div style={{ color: 'rgba(255, 255, 255, 0.65)' }}>• Challenge</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.65)' }}>• Opportunity</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.65)' }}>• Approach</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.65)' }}>• Technology</div>
                  <div style={{ color: '#67DFCB', fontWeight: 700 }}>• Impact</div>
                  <div style={{ color: '#67DFCB', fontSize: '11.5px', fontWeight: 600, paddingLeft: '14px', marginTop: '-2px' }}>
                    Story in preparation
                  </div>
                </div>
              </div>
            </div>

            {/* Card 02: Manufacturing */}
            <div
              style={{
                backgroundColor: '#265CF4',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: '36px 32px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '400px',
                boxShadow: '0 16px 40px rgba(38, 92, 244, 0.35)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              {/* Outlined Watermark 02 */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '20px',
                  fontSize: '96px',
                  fontWeight: 900,
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.28)',
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}
              >
                02
              </div>

              <div>
                {/* Industry Tag Pill */}
                <div style={{ display: 'inline-block', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#FFFFFF', fontSize: '10px', fontWeight: 800, padding: '6px 14px', borderRadius: '20px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '24px' }}>
                  MANUFACTURING
                </div>

                {/* Main Headline */}
                <h3 style={{ fontSize: '20px', fontWeight: 800, lineHeight: 1.3, marginBottom: '28px', color: '#FFFFFF' }}>
                  From connected factories to intelligent operations.
                </h3>

                {/* 5 Stages Bullets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                  <div style={{ color: 'rgba(255, 255, 255, 0.75)' }}>• Challenge</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.75)' }}>• Opportunity</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.75)' }}>• Approach</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.75)' }}>• Technology</div>
                  <div style={{ color: '#BAE6FD', fontWeight: 700 }}>• Impact</div>
                  <div style={{ color: '#BAE6FD', fontSize: '11.5px', fontWeight: 600, paddingLeft: '14px', marginTop: '-2px' }}>
                    Story in preparation
                  </div>
                </div>
              </div>
            </div>

            {/* Card 03: Banking & Financial Services */}
            <div
              style={{
                backgroundColor: '#67DFCB',
                color: '#0B1739',
                borderRadius: '24px',
                padding: '36px 32px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '400px',
                boxShadow: '0 16px 40px rgba(103, 223, 203, 0.4)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              {/* Outlined Watermark 03 */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '20px',
                  fontSize: '96px',
                  fontWeight: 900,
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(11, 23, 57, 0.22)',
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}
              >
                03
              </div>

              <div>
                {/* Industry Tag Pill */}
                <div style={{ display: 'inline-block', backgroundColor: 'rgba(11, 23, 57, 0.12)', color: '#0B1739', fontSize: '10px', fontWeight: 800, padding: '6px 14px', borderRadius: '20px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '24px' }}>
                  BANKING & FINANCIAL SERVICES
                </div>

                {/* Main Headline */}
                <h3 style={{ fontSize: '20px', fontWeight: 800, lineHeight: 1.3, marginBottom: '28px', color: '#0B1739' }}>
                  Data, risk and automation on one intelligent platform.
                </h3>

                {/* 5 Stages Bullets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                  <div style={{ color: 'rgba(11, 23, 57, 0.7)' }}>• Challenge</div>
                  <div style={{ color: 'rgba(11, 23, 57, 0.7)' }}>• Opportunity</div>
                  <div style={{ color: 'rgba(11, 23, 57, 0.7)' }}>• Approach</div>
                  <div style={{ color: 'rgba(11, 23, 57, 0.7)' }}>• Technology</div>
                  <div style={{ color: '#1B4AC7', fontWeight: 700 }}>• Impact</div>
                  <div style={{ color: '#1B4AC7', fontSize: '11.5px', fontWeight: 600, paddingLeft: '14px', marginTop: '-2px' }}>
                    Story in preparation
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stories Will Span Section */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>
              STORIES WILL SPAN
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
              {[
                'Energy & Resources',
                'Manufacturing',
                'Life Sciences & Healthcare',
                'Financial Services',
                'Consumer & Retail',
                'Automotive',
                'Mining & Metals',
                'Utilities',
                'Chemicals',
                'Engineering & Construction',
              ].map((spanItem) => (
                <div
                  key={spanItem}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#475569',
                    border: '1.2px solid #E2E8F0',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    padding: '8px 18px',
                    borderRadius: '24px',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#265CF4';
                    e.currentTarget.style.color = '#265CF4';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  {spanItem}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONVERGENCE BANNER ("From challenge to measurable change." - Exact Uploaded Spec) */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(90deg, rgba(8, 25, 74, 1) 0%, rgba(13, 42, 117, 1) 45%, rgba(27, 74, 199, 1) 100%)',
          color: '#FFFFFF',
          padding: '100px 0 110px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Centered Ambient Layer Blur Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '620px',
            height: '620px',
            borderRadius: '50%',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '28px' }}>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
            <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              TRANSFORMATION STORIES
            </span>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
          </div>

          {/* Heading */}
          <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, marginBottom: 0, letterSpacing: '-0.025em' }}>
            From challenge to<br />measurable change.
          </h2>

          {/* Mint Underline Bar */}
          <div
            style={{
              width: '220px',
              height: '4px',
              backgroundColor: '#67DFCB',
              borderRadius: '2px',
              margin: '22px auto 28px',
            }}
          />

          {/* Subtitle */}
          <p style={{ fontSize: '16.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 32px' }}>
            Every transformation begins with a business challenge.
          </p>

          {/* 5 Stage Bullet Pill Badges Row */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {['Challenge', 'Opportunity', 'Approach', 'Technology', 'Impact'].map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  border: '1.2px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '24px',
                  padding: '8px 22px',
                  color: '#FFFFFF',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  transition: 'all 0.25s ease',
                }}
              >
                <span style={{ color: '#67DFCB', fontSize: '15px' }}>•</span>
                <span>{tag}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onNavigate('contact')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#1B4AC7',
              fontWeight: 800,
              fontSize: '15px',
              padding: '16px 40px',
              borderRadius: '30px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(103, 223, 203, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
            }}
          >
            Start your story
          </button>
        </div>
      </section>

      {/* 7. CONTACT CALLOUT BANNER */}
      <section
        style={{
          background: 'linear-gradient(135deg, #00A3FF 0%, #0066FF 100%)',
          color: '#FFFFFF',
          padding: '80px 0',
        }}
      >
        <div
          className="section-container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '32px',
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 32px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.16em',
                color: 'rgba(255, 255, 255, 0.85)',
                marginBottom: '12px',
                textTransform: 'uppercase',
              }}
            >
              GET IN TOUCH
            </div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 40px)',
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

          <button
            onClick={() => onNavigate('contact')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0066FF',
              fontWeight: 800,
              fontSize: '14px',
              padding: '14px 32px',
              borderRadius: '28px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            }}
          >
            Contact us
          </button>
        </div>
      </section>
    </div>
  );
}
