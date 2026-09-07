import React, { useState } from 'react';
import { ArrowRight, Activity, ShieldCheck, Database, HeartPulse, Stethoscope, Microscope, Layers, FileText, Landmark, TrendingUp, CreditCard, Wallet, Lock, Building2 } from 'lucide-react';

interface LifeSciencesFinancialServicesPageProps {
  onNavigate?: (anchor: string) => void;
}

export const LifeSciencesFinancialServicesPage: React.FC<LifeSciencesFinancialServicesPageProps> = ({ onNavigate }) => {
  const [activeCard, setActiveCard] = useState<'life-sciences' | 'financial-services'>('life-sciences');
  const [hoveredMaturityBlock, setHoveredMaturityBlock] = useState<number | null>(null);
  const [hoveredHealthCap, setHoveredHealthCap] = useState<number | null>(null);
  const [hoveredHealthPriority, setHoveredHealthPriority] = useState<number | null>(null);
  const [hoveredFinCap, setHoveredFinCap] = useState<number | null>(null);
  const [hoveredFinPriority, setHoveredFinPriority] = useState<number | null>(null);
  const [hoveredTalkBtn, setHoveredTalkBtn] = useState(false);
  const [hoveredViewBtn, setHoveredViewBtn] = useState(false);
  const [hoveredContactBtn, setHoveredContactBtn] = useState(false);
  const [hoveredCtaBtn, setHoveredCtaBtn] = useState(false);
  const [hoveredRegulatedTag, setHoveredRegulatedTag] = useState(false);
  const [hoveredScrutinyTag, setHoveredScrutinyTag] = useState(false);

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('financial') || hash.includes('banking')) {
        setActiveCard('financial-services');
        setTimeout(() => {
          const el = document.getElementById('financial-capabilities');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (hash.includes('life') || hash.includes('health') || hash.includes('sciences')) {
        setActiveCard('life-sciences');
        setTimeout(() => {
          const el = document.getElementById('healthcare-capabilities');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        setActiveCard('life-sciences');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const scrollToCapabilities = () => {
    const el = document.getElementById('healthcare-capabilities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sub-Sector 01: Healthcare & Life Sciences Intersect Pills (5 Pills)
  const healthcarePills = [
    'Data',
    'Supply chains',
    'Customer & patient experiences',
    'Operational efficiency',
    'Innovation',
  ];

  // Sub-Sector 01: Healthcare Agenda Priorities (8 Cards Grid)
  const healthcarePriorities = [
    { num: '01', title: 'Enterprise Transformation', bg: '#060B1E', textColor: '#FFFFFF', numColor: '#52E0CB' },
    { num: '02', title: 'Supply Chain', bg: '#F4F7FC', textColor: '#0A1128', numColor: '#1B58F4' },
    { num: '03', title: 'Data Platforms', bg: '#F4F7FC', textColor: '#0A1128', numColor: '#1B58F4' },
    { num: '04', title: 'AI & Analytics', bg: '#F4F7FC', textColor: '#0A1128', numColor: '#1B58F4' },
    { num: '05', title: 'Automation', bg: '#F4F7FC', textColor: '#0A1128', numColor: '#1B58F4' },
    { num: '06', title: 'Cloud', bg: '#F4F7FC', textColor: '#0A1128', numColor: '#1B58F4' },
    { num: '07', title: 'Enterprise Applications', bg: '#F4F7FC', textColor: '#0A1128', numColor: '#1B58F4' },
    { num: '08', title: 'Digital Experiences', bg: '#060B1E', textColor: '#FFFFFF', numColor: '#52E0CB' },
  ];

  // Sub-Sector 02: Banking & Financial Services Capabilities (6 Cards Grid)
  const financialCapabilities = [
    { num: '01', title: 'Data', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4' },
    { num: '02', title: 'Automation', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4' },
    { num: '03', title: 'AI', bg: '#52E0CB', textColor: '#0A1128', numColor: '#265CF4' },
    { num: '04', title: 'Digital experiences', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4' },
    { num: '05', title: 'Risk', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4' },
    { num: '06', title: 'Changing customer expectations', bg: '#0B1226', textColor: '#FFFFFF', numColor: '#52E0CB' },
  ];

  // Sub-Sector 02: Financial Agenda Priorities (8 Cards Grid)
  const financialPriorities = [
    { num: '01', title: 'Finance Transformation', bg: '#265CF4', textColor: '#FFFFFF', numColor: '#52E0CB' },
    { num: '02', title: 'Enterprise Data', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4' },
    { num: '03', title: 'AI & Automation', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4' },
    { num: '04', title: 'Digital Platforms', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4' },
    { num: '05', title: 'Cloud Modernization', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4' },
    { num: '06', title: 'Risk Analytics', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4' },
    { num: '07', title: 'Customer Intelligence', bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4' },
    { num: '08', title: 'Operational Efficiency', bg: '#265CF4', textColor: '#FFFFFF', numColor: '#52E0CB' },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#FFFFFF', color: '#0A1128' }}>

      {/* 1. HERO SECTION */}
      <section
        style={{
          background: 'linear-gradient(135deg, #08194A 0%, #0D2A75 50%, #1B4AC7 100%)',
          color: '#FFFFFF',
          padding: '100px 0 90px',
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
            opacity: 0.06,
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={{ borderRight: '1px solid #FFFFFF', height: '100%' }} />
          ))}
        </div>

        {/* Ambient Blur Layer 1 (#67DFCB 22%, Layer Blur 230) */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            top: '120px',
            right: '2%',
            background: '#67DFCB',
            opacity: 0.22,
            filter: 'blur(230px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Ambient Blur Layer 2 Ellipse (#1FA5FF 40%, Layer Blur 200) */}
        <div
          style={{
            position: 'absolute',
            width: '460px',
            height: '460px',
            top: '20px',
            right: '-40px',
            background: '#1FA5FF',
            opacity: 0.40,
            filter: 'blur(200px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="lsfs-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', alignItems: 'center' }}>

            {/* Left Content Column */}
            <div>
              {/* Breadcrumb Navigation */}
              <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '32px' }}>
                <span
                  onClick={() => onNavigate && onNavigate('#top')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
                >
                  Home
                </span>
                {' / '}
                <span
                  onClick={() => onNavigate && onNavigate('#industries')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
                >
                  Industries
                </span>
                {' / '}
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Life Sciences &amp; Financial Services</span>
              </div>

              {/* Eyebrow Tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '24px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  HIGHLY REGULATED INDUSTRIES
                </span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontSize: 'clamp(40px, 4.6vw, 60px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  margin: '0 0 28px 0',
                }}
              >
                Where regulation,<br />data and experience<br />intersect.
              </h1>

              {/* Description Paragraph */}
              <p
                style={{
                  fontSize: '16.5px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.82)',
                  lineHeight: 1.6,
                  margin: '0 0 40px 0',
                  maxWidth: '540px',
                }}
              >
                Life sciences, healthcare and financial services all transform under scrutiny — every capability has to be evidenced, governed and auditable as well as fast.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <button
                  onMouseEnter={() => setHoveredTalkBtn(true)}
                  onMouseLeave={() => setHoveredTalkBtn(false)}
                  onClick={scrollToCapabilities}
                  style={{
                    backgroundColor: hoveredTalkBtn ? '#FFFFFF' : 'transparent',
                    color: hoveredTalkBtn ? '#1B4AC7' : '#FFFFFF',
                    border: hoveredTalkBtn ? '1.5px solid #FFFFFF' : '1.5px solid rgba(255, 255, 255, 0.6)',
                    padding: '14px 30px',
                    borderRadius: '50px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: hoveredTalkBtn ? '0 12px 28px rgba(255, 255, 255, 0.3)' : 'none',
                    transform: hoveredTalkBtn ? 'translateY(-2px)' : 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  See industry priorities
                </button>

                <button
                  onMouseEnter={() => setHoveredViewBtn(true)}
                  onMouseLeave={() => setHoveredViewBtn(false)}
                  onClick={() => onNavigate && onNavigate('#contact')}
                  style={{
                    backgroundColor: hoveredViewBtn ? '#67DFCB' : 'transparent',
                    color: hoveredViewBtn ? '#08194A' : '#FFFFFF',
                    border: hoveredViewBtn ? '1.5px solid #67DFCB' : '1.5px solid rgba(255, 255, 255, 0.4)',
                    padding: '14px 30px',
                    borderRadius: '50px',
                    fontSize: '14.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: hoveredViewBtn ? '0 12px 28px rgba(103, 223, 203, 0.35)' : 'none',
                    transform: hoveredViewBtn ? 'translateY(-2px)' : 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  Talk to Ajiledone
                </button>
              </div>

              {/* Bottom Tag Line */}
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#67DFCB',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  opacity: 0.9,
                }}
              >
                TWO INDUSTRIES &nbsp;·&nbsp; SIXTEEN PRIORITIES
              </div>
            </div>

            {/* Right Column: 2 Connected Stacked Sub-Sector Cards (Exact Same Width & Placement) */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '460px', justifySelf: 'end' }}>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 1, width: '100%', alignItems: 'stretch' }}>

                {/* Sub-Sector Card 01: Life Sciences & Healthcare */}
                <div
                  className="lsfs-card-01"
                  onMouseEnter={() => setHoveredMaturityBlock(0)}
                  onMouseLeave={() => setHoveredMaturityBlock(null)}
                  onClick={() => {
                    setActiveCard('life-sciences');
                    if (window.location.hash !== '#life-sciences') {
                      window.history.pushState(null, '', '#life-sciences');
                    }
                    scrollToCapabilities();
                  }}
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    marginLeft: 0,
                    marginRight: 0,
                    boxSizing: 'border-box',
                    height: '175px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: activeCard === 'life-sciences' ? '#67DFCB' : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: activeCard === 'life-sciences' ? 'none' : 'blur(16px)',
                    WebkitBackdropFilter: activeCard === 'life-sciences' ? 'none' : 'blur(16px)',
                    border: activeCard === 'life-sciences' ? '2px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.25)',
                    color: activeCard === 'life-sciences' ? '#08194A' : '#FFFFFF',
                    borderRadius: '24px',
                    padding: '22px 26px',
                    boxShadow: activeCard === 'life-sciences'
                      ? (hoveredMaturityBlock === 0
                        ? '0 24px 48px rgba(8, 25, 74, 0.4), 0 0 32px rgba(103, 223, 203, 0.7)'
                        : '0 16px 36px rgba(8, 25, 74, 0.3), 0 0 20px rgba(103, 223, 203, 0.4)')
                      : (hoveredMaturityBlock === 0
                        ? '0 16px 32px rgba(0, 0, 0, 0.25)'
                        : '0 8px 24px rgba(0, 0, 0, 0.12)'),
                    transform: activeCard === 'life-sciences'
                      ? (hoveredMaturityBlock === 0 ? 'scale(1.03) translateY(-3px)' : 'scale(1.01)')
                      : (hoveredMaturityBlock === 0 ? 'scale(1.01) translateY(-2px)' : 'scale(0.98)'),
                    opacity: activeCard === 'life-sciences' ? 1 : 0.82,
                    transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 800,
                          color: activeCard === 'life-sciences' ? '#1B4AC7' : '#FFFFFF',
                          backgroundColor: activeCard === 'life-sciences' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.25)',
                          padding: '3px 10px',
                          borderRadius: '20px',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        01
                      </span>
                      <span
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          backgroundColor: activeCard === 'life-sciences' ? '#08194A' : 'rgba(255, 255, 255, 0.18)',
                          padding: '3px 12px',
                          borderRadius: '20px',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        8 priorities
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: 800,
                        color: activeCard === 'life-sciences' ? '#08194A' : '#FFFFFF',
                        margin: 0,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        whiteSpace: 'nowrap',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      Life Sciences &amp; Healthcare
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: '13.5px',
                      fontWeight: 500,
                      color: activeCard === 'life-sciences' ? '#08194A' : 'rgba(255, 255, 255, 0.85)',
                      opacity: activeCard === 'life-sciences' ? 0.9 : 1,
                      margin: 0,
                      lineHeight: 1.4,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    Technology for a more connected healthcare ecosystem.
                  </p>
                </div>

                {/* Sub-Sector Card 02: Banking & Financial Services */}
                <div
                  className="lsfs-card-02"
                  onMouseEnter={() => setHoveredMaturityBlock(1)}
                  onMouseLeave={() => setHoveredMaturityBlock(null)}
                  onClick={() => {
                    setActiveCard('financial-services');
                    if (window.location.hash !== '#financial-services') {
                      window.history.pushState(null, '', '#financial-services');
                    }
                    const el = document.getElementById('financial-capabilities');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    marginLeft: 0,
                    marginRight: 0,
                    boxSizing: 'border-box',
                    height: '175px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: activeCard === 'financial-services' ? '#67DFCB' : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: activeCard === 'financial-services' ? 'none' : 'blur(16px)',
                    WebkitBackdropFilter: activeCard === 'financial-services' ? 'none' : 'blur(16px)',
                    border: activeCard === 'financial-services' ? '2px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.25)',
                    color: activeCard === 'financial-services' ? '#08194A' : '#FFFFFF',
                    borderRadius: '24px',
                    padding: '22px 26px',
                    boxShadow: activeCard === 'financial-services'
                      ? (hoveredMaturityBlock === 1
                        ? '0 24px 48px rgba(8, 25, 74, 0.4), 0 0 32px rgba(103, 223, 203, 0.7)'
                        : '0 16px 36px rgba(8, 25, 74, 0.3), 0 0 20px rgba(103, 223, 203, 0.4)')
                      : (hoveredMaturityBlock === 1
                        ? '0 16px 32px rgba(0, 0, 0, 0.25)'
                        : '0 8px 24px rgba(0, 0, 0, 0.12)'),
                    transform: activeCard === 'financial-services'
                      ? (hoveredMaturityBlock === 1 ? 'scale(1.03) translateY(-3px)' : 'scale(1.01)')
                      : (hoveredMaturityBlock === 1 ? 'scale(1.01) translateY(-2px)' : 'scale(0.98)'),
                    opacity: activeCard === 'financial-services' ? 1 : 0.82,
                    transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 800,
                          color: activeCard === 'financial-services' ? '#1B4AC7' : '#FFFFFF',
                          backgroundColor: activeCard === 'financial-services' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.25)',
                          padding: '3px 10px',
                          borderRadius: '20px',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        02
                      </span>
                      <span
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          backgroundColor: activeCard === 'financial-services' ? '#08194A' : 'rgba(255, 255, 255, 0.18)',
                          padding: '3px 12px',
                          borderRadius: '20px',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        8 priorities
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: 800,
                        color: activeCard === 'financial-services' ? '#08194A' : '#FFFFFF',
                        margin: 0,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        whiteSpace: 'nowrap',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      Banking &amp; Financial Services
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: '13.5px',
                      fontWeight: 400,
                      color: activeCard === 'financial-services' ? '#08194A' : 'rgba(255, 255, 255, 0.85)',
                      margin: 0,
                      lineHeight: 1.4,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    Building intelligent financial institutions.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION 2: SUB-SECTOR 1 (LIFE SCIENCES & HEALTHCARE) */}
      <section id="healthcare-capabilities" style={{ padding: '96px 0 100px', backgroundColor: '#FFFFFF' }}>
        <div className="section-container">
          <div className="lsfs-section-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '56px', alignItems: 'center' }}>

            {/* Left Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '28px', height: '2.5px', backgroundColor: '#1B58F4', borderRadius: '2px' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#1B58F4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  01 &nbsp;·&nbsp; LIFE SCIENCES &amp; HEALTHCARE
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', fontWeight: 800, color: '#0A1128', lineHeight: 1.12, margin: '0 0 24px 0', letterSpacing: '-0.03em' }}>
                Technology for a more connected healthcare ecosystem.
              </h2>

              <p style={{ fontSize: '15.5px', color: '#52607B', lineHeight: 1.6, margin: '0 0 36px 0', maxWidth: '520px' }}>
                Life sciences and healthcare organizations operate in highly regulated environments where data, supply chains, customer and patient experiences, operational efficiency and innovation increasingly intersect.
              </p>

              <div
                onMouseEnter={() => setHoveredRegulatedTag(true)}
                onMouseLeave={() => setHoveredRegulatedTag(false)}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#060B1E',
                  color: '#52E0CB',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transform: hoveredRegulatedTag ? 'scale(1.08) translateY(-2px)' : 'scale(1)',
                  boxShadow: hoveredRegulatedTag ? '0 12px 24px rgba(6, 11, 30, 0.35), 0 0 16px rgba(82, 224, 203, 0.4)' : '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  userSelect: 'none',
                }}
              >
                REGULATED BY DEFAULT
              </div>
            </div>

            {/* Right Column: Staggered Intersect Visualization Diagram */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '520px', justifySelf: 'end', paddingBottom: '36px' }}>
              {/* Mint Vertical Intersect Rectangle (Exact Figma Specs: 112px width, 16px radius, #67DFCB 40%) */}
              <div
                style={{
                  position: 'absolute',
                  top: '-16px',
                  bottom: '26px',
                  left: '60%',
                  width: '112px',
                  backgroundColor: 'rgba(103, 223, 203, 0.40)',
                  borderRadius: '16px',
                  transform: 'translateX(-50%)',
                  zIndex: 0,
                }}
              />

              {/* Bottom Indicator Line & THEY INTERSECT Text */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0px',
                  left: '60%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  zIndex: 2,
                }}
              >
                <div style={{ width: '1.5px', height: '14px', backgroundColor: '#52E0CB', marginBottom: '4px' }} />
                <span
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 800,
                    color: '#0A1128',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  THEY INTERSECT
                </span>
              </div>

              {/* 5 Stacked Horizontal Pill Bars with Staggered Left Margins */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative', zIndex: 1 }}>
                {healthcarePills.map((title, idx) => {
                  const offsets = [
                    { marginLeft: '0px', width: '100%' },
                    { marginLeft: '14px', width: '97%' },
                    { marginLeft: '28px', width: '94%' },
                    { marginLeft: '42px', width: '91%' },
                    { marginLeft: '56px', width: '88%' },
                  ];
                  const offset = offsets[idx % offsets.length];
                  return (
                    <div
                      key={title}
                      className="lsfs-staggered-pill"
                      onMouseEnter={() => setHoveredHealthCap(idx)}
                      onMouseLeave={() => setHoveredHealthCap(null)}
                      style={{
                        marginLeft: offset.marginLeft,
                        width: offset.width,
                        backgroundColor: hoveredHealthCap === idx ? '#E6EFFD' : '#F0F4FF',
                        borderRadius: '50px',
                        padding: '16px 28px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        border: '1.5px solid #E2E8F0',
                        boxShadow: hoveredHealthCap === idx ? '0 8px 20px rgba(10, 17, 40, 0.08)' : '0 4px 14px rgba(10, 17, 40, 0.03)',
                        transform: hoveredHealthCap === idx ? 'scale(1.01)' : 'scale(1)',
                        transition: 'all 0.25s ease',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                      }}
                    >
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1B58F4', display: 'inline-block', flexShrink: 0 }} />
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#0A1128' }}>{title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 3: HEALTHCARE AGENDA (8 Priorities Grid) */}
      <section style={{ padding: '80px 0 100px', backgroundColor: '#FFFFFF' }}>
        <div className="section-container">
          <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#8DA4C4', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '24px' }}>
            INDUSTRY PRIORITIES
          </div>

          {/* 4x2 Grid of 8 Priority Cards */}
          <div className="lsfs-priorities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px' }}>
            {healthcarePriorities.map((item, idx) => {
              const isHovered = hoveredHealthPriority === idx;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setHoveredHealthPriority(idx)}
                  onMouseLeave={() => setHoveredHealthPriority(null)}
                  style={{
                    backgroundColor: item.bg,
                    color: item.textColor,
                    borderRadius: '16px',
                    padding: '28px 24px',
                    minHeight: '130px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: isHovered ? '0 16px 32px rgba(10, 17, 40, 0.14)' : 'none',
                    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: '12.5px', fontWeight: 900, color: item.numColor, marginBottom: '14px' }}>
                    {item.num}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SECTION 4: SUB-SECTOR 02 (BANKING & FINANCIAL SERVICES) */}
      <section id="financial-capabilities" style={{ padding: '96px 0 100px', backgroundColor: '#F2F6FE' }}>
        <div className="section-container">
          <div className="lsfs-section-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '56px', alignItems: 'start' }}>

            {/* Left Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '28px', height: '2.5px', backgroundColor: '#1B58F4', borderRadius: '2px' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#1B58F4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  02 &nbsp;·&nbsp; BANKING &amp; FINANCIAL SERVICES
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', fontWeight: 800, color: '#0A1128', lineHeight: 1.12, margin: '0 0 24px 0', letterSpacing: '-0.03em' }}>
                Building intelligent financial institutions.
              </h2>

              <p style={{ fontSize: '15.5px', color: '#52607B', lineHeight: 1.6, margin: '0 0 36px 0', maxWidth: '520px' }}>
                Financial organizations are transforming around data, automation, AI, digital experiences, risk and changing customer expectations.
              </p>

              <div
                onMouseEnter={() => setHoveredScrutinyTag(true)}
                onMouseLeave={() => setHoveredScrutinyTag(false)}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#265CF4',
                  color: '#FFFFFF',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transform: hoveredScrutinyTag ? 'scale(1.08) translateY(-2px)' : 'scale(1)',
                  boxShadow: hoveredScrutinyTag ? '0 12px 24px rgba(38, 92, 244, 0.4), 0 0 16px rgba(38, 92, 244, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  userSelect: 'none',
                }}
              >
                TRANSFORMING UNDER SCRUTINY
              </div>
            </div>

            {/* Right Column: 2x3 Grid with Left Cyan Line */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#8DA4C4', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>
                WHAT THEY ARE TRANSFORMING AROUND
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'stretch' }}>
                {/* Left Cyan Vertical Accent Line */}
                <div style={{ width: '3px', backgroundColor: '#52E0CB', borderRadius: '2px', flexShrink: 0 }} />

                {/* 2x3 Grid of 6 Cards */}
                <div className="lsfs-capabilities-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', flex: 1 }}>
                  {financialCapabilities.map((item, idx) => {
                    const isHovered = hoveredFinCap === idx;
                    const isMintCard = item.bg === '#52E0CB';
                    const isDarkCard = item.bg === '#0B1226';
                    return (
                      <div
                        key={item.num}
                        onMouseEnter={() => setHoveredFinCap(idx)}
                        onMouseLeave={() => setHoveredFinCap(null)}
                        style={{
                          backgroundColor: isMintCard ? '#52E0CB' : (isDarkCard ? '#0B1226' : (isHovered ? '#FFFFFF' : '#FFFFFF')),
                          color: item.textColor,
                          borderRadius: '16px',
                          padding: '24px 20px',
                          border: isMintCard || isDarkCard ? 'none' : '1px solid #E2E8F0',
                          boxShadow: isHovered ? '0 12px 28px rgba(10, 17, 40, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.02)',
                          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                        }}
                      >
                        <div style={{ fontSize: '12px', fontWeight: 900, color: item.numColor, marginBottom: '12px' }}>
                          {item.num}
                        </div>
                        <div style={{ fontSize: '15.5px', fontWeight: 800, lineHeight: 1.3 }}>
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SECTION 5: FINANCIAL AGENDA (8 Priorities Grid) */}
      <section style={{ padding: '80px 0 100px', backgroundColor: '#F2F6FE' }}>
        <div className="section-container">
          <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#8DA4C4', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '24px' }}>
            INDUSTRY PRIORITIES
          </div>

          {/* 4x2 Grid of 8 Priority Cards */}
          <div className="lsfs-priorities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px' }}>
            {financialPriorities.map((item, idx) => {
              const isHovered = hoveredFinPriority === idx;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setHoveredFinPriority(idx)}
                  onMouseLeave={() => setHoveredFinPriority(null)}
                  style={{
                    backgroundColor: item.bg,
                    color: item.textColor,
                    borderRadius: '16px',
                    padding: '28px 24px',
                    minHeight: '130px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: isHovered ? '0 16px 32px rgba(10, 17, 40, 0.14)' : (item.bg === '#FFFFFF' ? '0 2px 8px rgba(0, 0, 0, 0.02)' : 'none'),
                    border: item.bg === '#FFFFFF' ? '1px solid #E2E8F0' : 'none',
                    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: '12.5px', fontWeight: 900, color: item.numColor, marginBottom: '14px' }}>
                    {item.num}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. DEEP CTA BANNER */}
      <section style={{ padding: '110px 0 115px', background: 'linear-gradient(135deg, #0A1230 0%, #0D2A75 50%, #1942B2 100%)', color: '#FFFFFF', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Background Glowing Mint Ellipse (Figma Specs: 620x620px, top: -30px, #67DFCB 22% opacity, blur: 230px) */}
        <div
          style={{
            position: 'absolute',
            top: '-30px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '620px',
            height: '620px',
            borderRadius: '50%',
            backgroundColor: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(200px)',
            WebkitFilter: 'blur(200px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Eyebrow Header with Mint Accent Lines */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div style={{ width: '28px', height: '2.5px', backgroundColor: '#52E0CB', borderRadius: '2px' }} />
            <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#52E0CB', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              TWO INDUSTRIES, ONE STANDARD
            </span>
            <div style={{ width: '28px', height: '2.5px', backgroundColor: '#52E0CB', borderRadius: '2px' }} />
          </div>

          {/* Main Headline */}
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 800, color: '#FFFFFF', maxWidth: '920px', margin: '0 auto 28px auto', lineHeight: 1.18, letterSpacing: '-0.03em' }}>
            A connected healthcare ecosystem.<br />
            Intelligent financial institutions.
          </h2>

          {/* Mint Accent Bar */}
          <div style={{ width: '180px', height: '5px', backgroundColor: '#52E0CB', borderRadius: '3px', margin: '0 auto 40px auto' }} />

          {/* 4 Feature Tags with Mint Teal Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '44px' }}>
            {[
              'Regulated by default',
              'Data-led',
              'Automated',
              'Audit-ready'
            ].map((tag) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  padding: '10px 24px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 700,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#52E0CB', display: 'inline-block', flexShrink: 0 }} />
                <span>{tag}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onMouseEnter={() => setHoveredCtaBtn(true)}
            onMouseLeave={() => setHoveredCtaBtn(false)}
            onClick={() => onNavigate && onNavigate('#contact')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#1942B2',
              padding: '16px 40px',
              borderRadius: '50px',
              fontSize: '15px',
              fontWeight: 800,
              cursor: 'pointer',
              border: 'none',
              boxShadow: hoveredCtaBtn ? '0 16px 36px rgba(255, 255, 255, 0.35), 0 0 24px rgba(82, 224, 203, 0.4)' : '0 6px 20px rgba(0, 0, 0, 0.2)',
              transform: hoveredCtaBtn ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Talk to Ajiledone
          </button>
        </div>
      </section>

      {/* 7. CONTACT BANNER */}
      <section style={{ background: 'linear-gradient(90deg, #265CF4 0%, #1FA5FF 100%)', padding: '76px 0', color: '#FFFFFF' }}>
        <div className="section-container lsfs-contact-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <div style={{ fontSize: '11.5px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '12px' }}>
              DON'T BE WEIRD
            </div>
            <h3 style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: 800, margin: 0, lineHeight: 1.2, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Would you like more information, or<br />
              do you have a question?
            </h3>
          </div>
          <button
            onMouseEnter={() => setHoveredContactBtn(true)}
            onMouseLeave={() => setHoveredContactBtn(false)}
            onClick={() => onNavigate && onNavigate('#contact')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#265CF4',
              padding: '14px 30px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1,
              letterSpacing: '0',
              cursor: 'pointer',
              border: 'none',
              boxShadow: hoveredContactBtn ? '0 12px 28px rgba(0, 0, 0, 0.2)' : '0 4px 14px rgba(0, 0, 0, 0.1)',
              transform: hoveredContactBtn ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              whiteSpace: 'nowrap',
            }}
          >
            Contact us
          </button>
        </div>
      </section>

      {/* Embedded Responsive Media Queries */}
      <style>{`
        @media (max-width: 1024px) {
          .lsfs-hero-grid,
          .lsfs-section-grid {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
          }
          .lsfs-priorities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .lsfs-priorities-grid {
            grid-template-columns: 1fr !important;
          }
          .lsfs-capabilities-2col {
            grid-template-columns: 1fr !important;
          }
          .lsfs-staggered-pill {
            margin-left: 0px !important;
            width: 100% !important;
          }
          .lsfs-contact-flex {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>

    </div>
  );
};
