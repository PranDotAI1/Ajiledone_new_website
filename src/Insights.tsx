import { useState } from 'react';
import { ArrowRight, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

interface InsightsProps {
  onNavigate: (anchor: string) => void;
  onGoHome: () => void;
}

export function InsightsPage({ onNavigate, onGoHome }: InsightsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories = [
    { name: 'All', count: 12 },
    { name: 'AI', count: 3 },
    { name: 'SAP', count: 3 },
    { name: 'Data', count: 2 },
    { name: 'Cloud', count: 1 },
    { name: 'Supply Chain', count: 1 },
    { name: 'Manufacturing', count: 1 },
    { name: 'Energy', count: 1 },
  ];

  const featuredArticles = [
    {
      id: 1,
      num: '01',
      tag: 'AI',
      title: 'The Agentic Enterprise: What Comes After Generative AI?',
      excerpt: 'What changes when systems stop answering and start acting.',
      bg: 'linear-gradient(135deg, #265CF4 0%, #1B4AC7 100%)',
      tagBg: 'rgba(255, 255, 255, 0.2)',
      tagColor: '#FFFFFF',
      textColor: '#FFFFFF',
      excerptColor: 'rgba(255, 255, 255, 0.85)',
      btnColor: 'rgba(255, 255, 255, 0.95)',
      numStroke: '1.5px rgba(255, 255, 255, 0.4)',
    },
    {
      id: 2,
      num: '02',
      tag: 'SAP',
      title: 'Beyond ERP: Building the Intelligent Enterprise',
      excerpt: 'Why the S/4HANA decision is really an operating-model decision.',
      bg: '#0B132B',
      tagBg: 'rgba(255, 255, 255, 0.15)',
      tagColor: '#FFFFFF',
      textColor: '#FFFFFF',
      excerptColor: 'rgba(255, 255, 255, 0.75)',
      btnColor: '#67DFCB',
      numStroke: '1.5px rgba(255, 255, 255, 0.3)',
    },
    {
      id: 3,
      num: '03',
      tag: 'DATA',
      title: 'Why Your Data Architecture Will Determine Your AI Strategy',
      excerpt: 'The ceiling on your AI ambition was set by a data decision years ago.',
      bg: '#67DFCB',
      tagBg: '#0B1739',
      tagColor: '#67DFCB',
      textColor: '#0B1739',
      excerptColor: 'rgba(11, 23, 57, 0.8)',
      btnColor: '#265CF4',
      numStroke: '1.5px rgba(11, 23, 57, 0.3)',
    },
  ];

  const allPerspectives = [
    {
      num: '01',
      category: 'AI',
      title: 'The Agentic Enterprise: What Comes After Generative AI?',
      description: 'Copilots assist humans, but autonomous agents will execute complex end-to-end business workflows. Explore how agentic architecture transforms enterprise operations.',
      readTime: '6 min read',
    },
    {
      num: '02',
      category: 'AI',
      title: 'From AI Pilots to Enterprise AI',
      description: 'Moving beyond proof-of-concept projects to operationalize AI models securely at scale across legacy and modern platforms.',
      readTime: '5 min read',
    },
    {
      num: '03',
      category: 'AI',
      title: 'What CEOs Need to Know About Agentic AI',
      description: 'A strategic framework for executive leaders evaluating ROI, governance, risk, and organizational readiness for autonomous workflows.',
      readTime: '7 min read',
    },
    {
      num: '04',
      category: 'SAP',
      title: 'Beyond ERP: Building the Intelligent Enterprise',
      description: 'Why modernizing legacy ERP core is no longer just an IT upgrade, but the foundation for real-time agility and predictive operations.',
      readTime: '8 min read',
    },
    {
      num: '05',
      category: 'SAP',
      title: 'SAP BTP and the Future of Enterprise Extension',
      description: 'How Business Technology Platform empowers clean-core strategy, seamless SAP extensions, and rapid side-by-side innovation.',
      readTime: '6 min read',
    },
    {
      num: '06',
      category: 'SAP',
      title: 'Reimagining the SAP Digital Core',
      description: 'Strategies for migrating complex SAP ECC landscapes to S/4HANA Cloud with zero business disruption and measurable value.',
      readTime: '7 min read',
    },
    {
      num: '07',
      category: 'Data',
      title: 'Why Your Data Architecture Will Determine Your AI Strategy',
      description: 'Connecting fragmented enterprise data silos to fuel high-precision machine learning and real-time decision intelligence.',
      readTime: '5 min read',
    },
    {
      num: '08',
      category: 'Data',
      title: 'Building the Modern Enterprise Lakehouse',
      description: 'Unified data platforms combining the flexibility of data lakes with the reliability of data warehouses for modern analytics.',
      readTime: '6 min read',
    },
    {
      num: '09',
      category: 'Cloud',
      title: 'Beyond Migration: The Next Phase of Cloud Transformation',
      description: 'Shifting from lift-and-shift cloud adoption to cloud-native application engineering, FinOps optimization, and multi-cloud agility.',
      readTime: '6 min read',
    },
    {
      num: '10',
      category: 'Supply Chain',
      title: 'From Connected to Predictive: The Future of Supply Chain',
      description: 'Integrating real-time sensor data, AI supply forecasting, and automated procurement to insulate against market disruptions.',
      readTime: '7 min read',
    },
    {
      num: '11',
      category: 'Manufacturing',
      title: 'The AI-Powered Factory',
      description: 'Computer vision, predictive equipment maintenance, and digital twins redefining efficiency on modern manufacturing plant floors.',
      readTime: '6 min read',
    },
    {
      num: '12',
      category: 'Energy',
      title: 'Building the Intelligent Energy Enterprise',
      description: 'Decarbonization, smart grid optimization, and digital asset management driving the future of energy and resources.',
      readTime: '8 min read',
    },
  ];

  const indexGroups = [
    {
      category: 'AI',
      badgeBg: '#265CF4',
      badgeColor: '#FFFFFF',
      items: [
        { num: '01', title: 'The Agentic Enterprise: What Comes After Generative AI?' },
        { num: '02', title: 'From AI Pilots to Enterprise AI' },
        { num: '03', title: 'What CEOs Need to Know About Agentic AI' },
      ],
    },
    {
      category: 'SAP',
      badgeBg: '#0B132B',
      badgeColor: '#FFFFFF',
      items: [
        { num: '04', title: 'Beyond ERP: Building the Intelligent Enterprise' },
        { num: '05', title: 'SAP BTP and the Future of Enterprise Extension' },
        { num: '06', title: 'Reimagining the SAP Digital Core' },
      ],
    },
    {
      category: 'DATA',
      badgeBg: '#67DFCB',
      badgeColor: '#0B1739',
      items: [
        { num: '07', title: 'Why Your Data Architecture Will Determine Your AI Strategy' },
        { num: '08', title: 'Building the Modern Enterprise Lakehouse' },
      ],
    },
    {
      category: 'CLOUD',
      badgeBg: '#FFFFFF',
      badgeColor: '#0B1739',
      badgeBorder: '1px solid #CBD5E1',
      items: [
        { num: '09', title: 'Beyond Migration: The Next Phase of Cloud Transformation' },
      ],
    },
    {
      category: 'SUPPLY CHAIN',
      badgeBg: '#FFFFFF',
      badgeColor: '#0B1739',
      badgeBorder: '1px solid #CBD5E1',
      items: [
        { num: '10', title: 'From Connected to Predictive: The Future of Supply Chain' },
      ],
    },
    {
      category: 'MANUFACTURING',
      badgeBg: '#FFFFFF',
      badgeColor: '#0B1739',
      badgeBorder: '1px solid #CBD5E1',
      items: [
        { num: '11', title: 'The AI-Powered Factory' },
      ],
    },
    {
      category: 'ENERGY',
      badgeBg: '#FFFFFF',
      badgeColor: '#0B1739',
      badgeBorder: '1px solid #CBD5E1',
      items: [
        { num: '12', title: 'Building the Intelligent Energy Enterprise' },
      ],
    },
  ];

  const filteredGroups = selectedCategory === 'All'
    ? indexGroups
    : indexGroups.filter((g) => g.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#FFFFFF', color: '#0B1739' }}>
      <style>{`
        .insights-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .insights-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        .featured-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 992px) {
          .featured-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }

        .index-row-item {
          display: grid;
          grid-template-columns: 100px 1fr 30px;
          gap: 24px;
          align-items: center;
          padding: 24px 28px;
          border-radius: 16px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        @media (max-width: 768px) {
          .index-row-item {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
            padding: 20px 20px !important;
          }
          .cards-stack-wrapper {
            min-height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 16px !important;
          }
          .hero-stack-card {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            max-width: 100% !important;
            transform: none !important;
            height: auto !important;
            min-height: 140px !important;
          }
          .index-group-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
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
        {/* Subtle Vertical Grid Overlay lines matching Figma mockup */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '140px 100%',
            pointerEvents: 'none',
          }}
        />

        {/* Ambient Layer Blur Glow matching Figma Inspect (620px x 620px, blur 230px) */}
        <div
          style={{
            position: 'absolute',
            top: '120px',
            right: '5%',
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
            <span style={{ color: 'rgba(255, 255, 255, 0.95)', fontWeight: 500 }}>Insights</span>
          </div>

          <div className="insights-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '56px', alignItems: 'flex-start' }}>
            {/* Left Content */}
            <div>
              {/* Eyebrow */}
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
                  AJILEDONE INSIGHTS
                </span>
              </div>

              {/* Title */}
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
                Ideas for<br />what's next.
              </h1>

              {/* Body 1 */}
              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6,
                  maxWidth: '520px',
                  marginBottom: '24px',
                }}
              >
                Technology is moving quickly. Leadership requires understanding not only what is changing, but what those changes mean for the enterprise.
              </p>

              {/* Body 2 (Mint Highlighted) */}
              <p
                style={{
                  fontSize: '17px',
                  color: '#67DFCB',
                  fontWeight: 600,
                  lineHeight: 1.55,
                  maxWidth: '520px',
                  marginBottom: '36px',
                }}
              >
                Ajiledone Insights brings together perspectives across technology, industries and business transformation.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '54px' }}>
                <button
                  onClick={() => {
                    const el = document.getElementById('featured-insights');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    padding: '14px 32px',
                    borderRadius: '28px',
                    border: '1.5px solid rgba(255, 255, 255, 0.65)',
                    cursor: 'pointer',
                    boxShadow: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#0B1739';
                    e.currentTarget.style.borderColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.65)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Browse all perspectives
                </button>

                <button
                  onClick={() => {
                    onNavigate('contact');
                  }}
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
                    e.currentTarget.style.transform = 'translateY(-2px)';
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
                  fontSize: '11.5px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: 'rgba(255, 255, 255, 0.75)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                  textTransform: 'uppercase',
                }}
              >
                <span>AI</span>
                <span>·</span>
                <span>SAP</span>
                <span>·</span>
                <span>DATA</span>
                <span>·</span>
                <span>CLOUD</span>
                <span>·</span>
                <span>SUPPLY CHAIN</span>
                <span>·</span>
                <span>MANUFACTURING</span>
                <span>·</span>
                <span>ENERGY</span>
              </div>
            </div>

            {/* Right Hero Artwork Stack Cards */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '10px' }}>
              <div
                style={{
                  fontSize: '11.5px',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.65)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                LATEST PERSPECTIVES
              </div>

              {/* Stack Container */}
              <div className="cards-stack-wrapper" style={{ position: 'relative', minHeight: '430px', width: '100%', maxWidth: '490px' }}>

                {/* CARD 1 (Top / AI - Featured) */}
                <div
                  className="hero-stack-card"
                  style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: '100%',
                    maxWidth: '470px',
                    height: '200px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(103, 223, 203, 1)',
                    boxShadow: '0px 16px 40px rgba(3, 10, 41, 0.4)',
                    transform: 'rotate(-1.5deg)',
                    transformOrigin: 'top left',
                    zIndex: 3,
                    padding: '24px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(-1.5deg)')}
                >
                  <div>
                    {/* Badge */}
                    <div style={{ display: 'inline-block', backgroundColor: '#0B1739', color: '#67DFCB', fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '12px', letterSpacing: '0.08em', marginBottom: '14px' }}>
                      AI
                    </div>
                    {/* Title */}
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0B1739', lineHeight: 1.3, margin: 0, letterSpacing: '-0.01em' }}>
                      The Agentic Enterprise: What Comes After Generative AI?
                    </h3>
                  </div>
                  {/* Footer */}
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: 'rgba(11, 23, 57, 0.75)' }}>
                    8 min read · Featured
                  </div>
                </div>

                {/* CARD 2 (Middle / SAP) */}
                <div
                  className="hero-stack-card"
                  style={{
                    position: 'absolute',
                    top: '181px',
                    left: '14px',
                    width: '100%',
                    maxWidth: '440px',
                    height: '150px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    border: '1.2px solid rgba(255, 255, 255, 0.28)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0px 16px 40px rgba(3, 10, 41, 0.4)',
                    transform: 'rotate(-5deg)',
                    transformOrigin: 'top left',
                    zIndex: 2,
                    padding: '20px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(2deg)')}
                >
                  <div>
                    {/* Badge */}
                    <div style={{ display: 'inline-block', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#FFFFFF', fontSize: '11px', fontWeight: 800, padding: '3px 12px', borderRadius: '12px', letterSpacing: '0.08em', marginBottom: '10px' }}>
                      SAP
                    </div>
                    {/* Title */}
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.3, margin: 0 }}>
                      Beyond ERP: Building the Intelligent Enterprise
                    </h3>
                  </div>
                  {/* Footer */}
                  <div style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255, 255, 255, 0.7)' }}>
                    5 min read
                  </div>
                </div>

                {/* CARD 3 (Bottom / DATA) */}
                <div
                  className="hero-stack-card"
                  style={{
                    position: 'absolute',
                    top: '314px',
                    left: '28px',
                    width: '100%',
                    maxWidth: '420px',
                    height: '150px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    border: '1.2px solid rgba(255, 255, 255, 0.28)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0px 16px 40px rgba(3, 10, 41, 0.4)',
                    transform: 'rotate(-3deg)',
                    transformOrigin: 'top left',
                    zIndex: 1,
                    padding: '20px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(-3deg)')}
                >
                  <div>
                    {/* Badge */}
                    <div style={{ display: 'inline-block', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#FFFFFF', fontSize: '11px', fontWeight: 800, padding: '3px 12px', borderRadius: '12px', letterSpacing: '0.08em', marginBottom: '10px' }}>
                      DATA
                    </div>
                    {/* Title */}
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.3, margin: 0 }}>
                      Why Your Data Architecture Will Determine Your AI Strategy
                    </h3>
                  </div>
                  {/* Footer */}
                  <div style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255, 255, 255, 0.7)' }}>
                    6 min read
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTERABLE TOPIC PILLS BAR */}
      <section style={{ backgroundColor: '#070F24', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '50px 0 54px' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
            <div>
              <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '10px' }}>
                BROWSE BY TOPIC
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 36px)', fontWeight: 800, color: '#FFFFFF', margin: 0, letterSpacing: '-0.02em' }}>
                Twelve perspectives. Seven topics.
              </h2>
            </div>
            <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.55)', maxWidth: '440px', lineHeight: 1.5, textAlign: 'right' }}>
              Perspectives across technology, industries and business transformation.
            </div>
          </div>

          {/* Topic Pills Row */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            {categories.filter(c => c.name !== 'All').map((cat) => {
              const isSelected = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(isSelected ? 'All' : cat.name)}
                  style={{
                    backgroundColor: isSelected ? '#67DFCB' : 'rgba(255, 255, 255, 0.06)',
                    color: isSelected ? '#0B1739' : '#FFFFFF',
                    border: `1.2px solid ${isSelected ? '#67DFCB' : 'rgba(255, 255, 255, 0.16)'}`,
                    fontSize: '13.5px',
                    fontWeight: 700,
                    padding: '8px 16px 8px 20px',
                    borderRadius: '28px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? '0 6px 20px rgba(103, 223, 203, 0.35)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#67DFCB';
                      e.currentTarget.style.borderColor = '#67DFCB';
                      e.currentTarget.style.color = '#0B1739';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(103, 223, 203, 0.35)';
                      const badge = e.currentTarget.querySelector('.count-badge') as HTMLElement;
                      if (badge) {
                        badge.style.backgroundColor = '#0B1739';
                        badge.style.color = '#67DFCB';
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.boxShadow = 'none';
                      const badge = e.currentTarget.querySelector('.count-badge') as HTMLElement;
                      if (badge) {
                        badge.style.backgroundColor = 'rgba(0, 0, 0, 0.35)';
                        badge.style.color = '#FFFFFF';
                      }
                    }
                  }}
                >
                  <span>{cat.name}</span>
                  <span
                    className="count-badge"
                    style={{
                      backgroundColor: isSelected ? '#0B1739' : 'rgba(0, 0, 0, 0.35)',
                      color: isSelected ? '#67DFCB' : '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '12px',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED READS SECTION */}
      <section id="featured-insights" style={{ padding: '90px 0 100px', backgroundColor: '#FFFFFF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '28px', height: '2.5px', backgroundColor: '#265CF4', borderRadius: '1px' }} />
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#265CF4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  EDITOR'S PICKS
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', fontWeight: 800, color: '#0B1739', margin: 0, letterSpacing: '-0.025em' }}>
                Three worth your morning.
              </h2>
            </div>
            <a
              href="#full-index"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('full-index');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                color: '#265CF4',
                fontWeight: 700,
                fontSize: '15px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                transition: 'gap 0.2s ease',
              }}
            >
              View all insights <ArrowRight size={16} />
            </a>
          </div>

          {/* 3 Featured Cards Grid */}
          <div className="featured-cards-grid">
            {featuredArticles.map((card) => (
              <div
                key={card.id}
                style={{
                  background: card.bg,
                  borderRadius: '24px',
                  padding: '44px 36px 36px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '360px',
                  boxShadow: '0 12px 32px rgba(11, 23, 57, 0.08)',
                  transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(11, 23, 57, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(11, 23, 57, 0.08)';
                }}
              >
                {/* Outlined Watermark Numeral matching screenshot */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '15px',
                    fontSize: '110px',
                    fontWeight: 900,
                    color: 'transparent',
                    WebkitTextStroke: card.numStroke,
                    lineHeight: 1,
                    pointerEvents: 'none',
                    fontFamily: "'Inter', sans-serif",
                    userSelect: 'none',
                  }}
                >
                  {card.num}
                </div>

                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: card.tagBg,
                      color: card.tagColor,
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      padding: '5px 14px',
                      borderRadius: '16px',
                      textTransform: 'uppercase',
                      marginBottom: '24px',
                    }}
                  >
                    {card.tag}
                  </span>

                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 800,
                      color: card.textColor,
                      lineHeight: 1.3,
                      marginBottom: '16px',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14.5px',
                      color: card.excerptColor,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {card.excerpt}
                  </p>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: card.btnColor,
                    fontSize: '14px',
                    fontWeight: 800,
                    marginTop: '32px',
                  }}
                >
                  Read the perspective <ArrowRight size={15} />
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: '15px', color: '#475569', marginTop: '48px', fontWeight: 600 }}>
            Ajiledone Insights brings together perspectives across technology, industries and business transformation.
          </p>
        </div>
      </section>

      {/* 4. THE FULL INDEX SECTION */}
      <section id="full-index" style={{ padding: '100px 0 110px', backgroundColor: '#F3F6FA' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '56px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '28px', height: '2.5px', backgroundColor: '#265CF4', borderRadius: '1px' }} />
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#265CF4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  ALL PERSPECTIVES
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, color: '#0B1739', margin: 0, letterSpacing: '-0.025em' }}>
                The full index.
              </h2>
              <div style={{ fontSize: '15px', color: '#64748B', marginTop: '8px', fontWeight: 500 }}>
                Grouped by topic. Newest thinking first within each.
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '64px', fontWeight: 900, color: '#CBD5E1', lineHeight: 1, letterSpacing: '-0.04em' }}>
                12
              </span>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '2px' }}>
                PERSPECTIVES
              </div>
            </div>
          </div>

          {/* Grouped Perspective Index List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {filteredGroups.map((group) => (
              <div key={group.category} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '32px', alignItems: 'flex-start' }} className="index-group-grid">
                {/* Left Category Header */}
                <div style={{ paddingTop: '8px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: group.badgeBg,
                      color: group.badgeColor,
                      border: group.badgeBorder || 'none',
                      fontSize: '11.5px',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      padding: '6px 16px',
                      borderRadius: '16px',
                      textTransform: 'uppercase',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    }}
                  >
                    {group.category}
                  </span>
                  <div style={{ fontSize: '12.5px', color: '#64748B', marginTop: '8px', fontWeight: 500 }}>
                    {group.items.length} {group.items.length === 1 ? 'perspective' : 'perspectives'}
                  </div>
                </div>

                {/* Right Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {group.items.map((item) => {
                    return (
                      <div
                        key={item.num + item.title}
                        onClick={() => {
                          onNavigate('contact');
                        }}
                        style={{
                          backgroundColor: '#FFFFFF',
                          borderRadius: '12px',
                          border: '1px solid #E2E8F0',
                          padding: '20px 28px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '24px',
                          cursor: 'pointer',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                          transition: 'all 0.25s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#265CF4';
                          e.currentTarget.style.transform = 'translateX(4px)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(38, 92, 244, 0.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#E2E8F0';
                          e.currentTarget.style.transform = 'none';
                          e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)';
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                          <span style={{ fontSize: '14.5px', fontWeight: 800, color: '#265CF4', minWidth: '28px' }}>
                            {item.num}
                          </span>
                          <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0B1739', margin: 0, lineHeight: 1.35 }}>
                            {item.title}
                          </h3>
                        </div>

                        <div style={{ color: '#265CF4', display: 'flex', alignItems: 'center' }}>
                          <ArrowRight size={17} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '54px', textAlign: 'left', fontSize: '14px', color: '#64748B', fontWeight: 500 }}>
            New perspectives published across technology, industry and transformation.
          </div>
        </div>
      </section>

      {/* 5. CONVERGENCE BANNER */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(90deg, rgba(10, 18, 48, 1) 0%, rgba(13, 42, 117, 1) 50%, rgba(25, 66, 178, 1) 100%)',
          color: '#FFFFFF',
          padding: '100px 0 110px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Centered Ambient Layer Blur Glow matching Figma Inspect (Top -20px, Blur 230) */}
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
          {/* Top Eyebrow with mint bars */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '28px' }}>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
            <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              AJILEDONE INSIGHTS
            </span>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
          </div>

          {/* Title */}
          <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '0', letterSpacing: '-0.025em' }}>
            Ideas for what's next.
          </h2>

          {/* Mint Accent Line below headline */}
          <div
            style={{
              width: '220px',
              height: '4px',
              backgroundColor: '#67DFCB',
              borderRadius: '2px',
              margin: '22px auto 28px',
            }}
          />

          {/* Paragraph */}
          <p style={{ fontSize: '16.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 36px', fontWeight: 400 }}>
            Understanding not only what is changing, but what those changes mean for the enterprise.
          </p>

          {/* Row of Topic Tag Pills with Dot Indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '44px' }}>
            {['AI', 'SAP', 'Data', 'Cloud', 'Supply Chain', 'Manufacturing', 'Energy'].map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedCategory(tag);
                  const el = document.getElementById('featured-insights');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  border: '1.2px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '26px',
                  padding: '8px 22px',
                  color: '#FFFFFF',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.12) translateY(-3px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.22)';
                  e.currentTarget.style.borderColor = '#67DFCB';
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(103, 223, 203, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{ color: '#67DFCB', fontSize: '15px' }}>•</span>
                <span>{tag}</span>
              </button>
            ))}
          </div>

          {/* Call-to-action button */}
          <button
            onClick={() => onNavigate('contact')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#1B4AC7',
              fontWeight: 700,
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
            Subscribe to Ajiledone Insights
          </button>
        </div>
      </section>

      {/* 6. CONTACT CALLOUT BANNER */}
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
            onClick={() => onNavigate('#contact')}
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
