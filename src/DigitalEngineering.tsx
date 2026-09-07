import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Code,
  Layers,
  Cpu,
  Smartphone,
  Globe,
  Terminal,
  Database,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface DigitalEngineeringProps {
  onNavigate?: (anchor: string) => void;
}

export const DigitalEngineeringPage: React.FC<DigitalEngineeringProps> = ({ onNavigate }) => {
  // State for HERO buttons hover
  const [hoveredExploreBtn, setHoveredExploreBtn] = useState<boolean>(false);
  const [hoveredTalkBtn, setHoveredTalkBtn] = useState<boolean>(false);

  // State for Connected Agenda (Node 05 default pre-selected = Node 05 is "06 Digital Engineering" in 0-indexed terms)
  const [activeConnectedPill, setActiveConnectedPill] = useState<number | null>(5);

  const connectedAreasList = [
    { id: '01', title: 'Business & Technology Transformation' },
    { id: '02', title: 'AI & Intelligent Enterprise' },
    { id: '03', title: 'Data & Intelligence' },
    { id: '04', title: 'Enterprise Platforms' },
    { id: '05', title: 'Cloud & Modernization' },
    { id: '06', title: 'Digital Engineering' },
  ];

  // Automated loop for Hero glass diagram animation (Step 0 = blank start, 1 = SKETCH, 2 = Arrow, 3 = SHIPPED card, 4 = hold full view)
  const [heroStep, setHeroStep] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroStep((prev) => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  // Automated left-to-right sequential animation for Section 3 (Slower, elegant pacing)
  const [deliverySeqStep, setDeliverySeqStep] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setDeliverySeqStep((prev) => (prev + 1) % 6);
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  // Hover state for Section 3 process cards (statically null so all cards are colorless by default)
  const [hoveredProcessIdx, setHoveredProcessIdx] = useState<number | null>(null);

  // Automated animation for Section 5 lower callout (Step 0 = blank start, Step 1 = headline text appears first, Step 2 = all 4 tabs appear all together, Step 3 = hold)
  const [calloutSeqStep, setCalloutSeqStep] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCalloutSeqStep((prev) => (prev + 1) % 4);
    }, 1600);
    return () => clearInterval(timer);
  }, []);

  // State for capability card hover & tag hover
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [hoveredTagKey, setHoveredTagKey] = useState<string | null>(null);

  // Connected Agenda Nodes Data
  const agendaNodes = [
    { id: '01', title: 'AI & Intelligent Enterprise', anchor: '#ai-intelligent-enterprise' },
    { id: '02', title: 'Data & Intelligence', anchor: '#data-intelligence' },
    { id: '03', title: 'Enterprise Platforms', anchor: '#enterprise-platforms' },
    { id: '04', title: 'SAP Transformation', anchor: '#sap-transformation' },
    { id: '05', title: 'Cloud & Modernization', anchor: '#cloud-technology-modernization' },
    { id: '06', title: 'Digital Engineering', anchor: '#digital-engineering' },
  ];

  // Process Phases Data (Section 3)
  const processPhases = [
    {
      num: '01',
      title: 'Designs',
      desc: 'Architecting resilient software blueprints, user experience journeys, and cloud-native system topologies.',
      subTags: ['Architects', 'UI/UX Lead'],
    },
    {
      num: '02',
      title: 'Builds',
      desc: 'Writing clean, scalable code across web, mobile, microservices, and distributed backend systems.',
      subTags: ['Developers', 'Engineers'],
    },
    {
      num: '03',
      title: 'Integrates',
      desc: 'Connecting systems via high-throughput APIs, event brokers, and seamless data streaming conduits.',
      subTags: ['API Architects', 'Integration Leads'],
    },
    {
      num: '04',
      title: 'Modernizes',
      desc: 'Refactoring legacy monoliths into cloud-native microservices with zero downtime and instant scalability.',
      subTags: ['Delivery Leads', 'Cloud Engineers'],
    },
  ];

  // Six Capability Groups Data (Section 4)
  const capabilityGroups = [
    {
      num: '01',
      title: 'Software Engineering',
      badge: '6 CAPABILITIES',
      desc: 'Modern, cloud-native custom software designed for high availability, performance, and enterprise scale.',
      tags: ['Java', 'Go/Python', '.NET', 'C++', 'Node.js', 'Rust'],
      isHighlight: true,
      image: '/images/Ourcapabilities1.png',
    },
    {
      num: '02',
      title: 'Modern Web & Mobile',
      badge: '4 CAPABILITIES',
      desc: 'Cross-platform mobile apps and responsive web interfaces optimized for rich user engagement.',
      tags: ['React', 'Flutter', 'iOS / Android', 'TypeScript'],
      isHighlight: false,
      image: '/images/Ourcapabilities2.png',
    },
    {
      num: '03',
      title: 'Architecture',
      badge: '4 CAPABILITIES',
      desc: 'Scalable enterprise patterns designed for resilience, event-driven messaging, and microservices.',
      tags: ['Microservices', 'APIs', 'Event-Driven Architecture', 'Distributed Systems'],
      isHighlight: false,
      image: '/images/Ourcapabilities3.png',
    },
    {
      num: '04',
      title: 'Product Engineering',
      badge: '5 CAPABILITIES',
      desc: 'End-to-end product design, UX modernization, and continuous delivery from concept to production.',
      tags: ['System Architecture', 'UX/UI Modernization', 'Scalability Engineering', 'API Infrastructure', 'DevOps & Modern CI/CD'],
      isHighlight: false,
      image: '/images/Ourcapabilities4.png',
    },
    {
      num: '05',
      title: 'Platform Engineering',
      badge: '6 CAPABILITIES',
      desc: 'Automated developer platforms, container orchestration, and continuous deployment pipelines.',
      tags: ['DevOps', 'CI/CD', 'Kubernetes', 'Infrastructure as Code', 'Observability', 'IaC'],
      isHighlight: true,
      image: '/images/Ourcapabilities5.png',
    },
    {
      num: '06',
      title: 'Quality Engineering',
      badge: '4 CAPABILITIES',
      desc: 'Automated testing frameworks, performance engineering, and continuous quality assurance.',
      tags: ['Automated Testing', 'Performance', 'Performance Engineering', 'Continuous Testing'],
      isHighlight: false,
      image: '/images/Ourcapabilities1.png',
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#0A1128', backgroundColor: '#FFFFFF', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION (EXACT FIGMA DESIGN & SPECS) */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #08194A 0%, #0D2A75 50%, #1B4AC7 100%)',
          backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(135deg, #08194A 0%, #0D2A75 50%, #1B4AC7 100%)',
          backgroundSize: '16.666% 100%, 100% 100%',
          color: '#FFFFFF',
          padding: '130px 0 110px',
          overflow: 'hidden',
          minHeight: '720px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Figma Ambient Glow Blur 1: #1FA5FF (40%, Blur 210, Width 500px, Height 500px, Top/Right) */}
        <div
          style={{
            position: 'absolute',
            top: '-5%',
            right: '0%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(31, 165, 255, 0.40)',
            filter: 'blur(210px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        {/* Figma Ambient Glow Blur 2: #67DFCB (22%, Blur 230, Width 640px, Height 640px, Top 240px, Left 860px) */}
        <div
          style={{
            position: 'absolute',
            top: '240px',
            right: '5%',
            width: '640px',
            height: '640px',
            borderRadius: '50%',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="hero-layout" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '50px', alignItems: 'center' }}>
            
            {/* Left Content Column */}
            <div>
              {/* Breadcrumbs */}
              <div
                style={{
                  fontSize: '12.5px',
                  color: 'rgba(255, 255, 255, 0.65)',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 500,
                }}
              >
                <span
                  onClick={() => onNavigate?.('#home')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
                >
                  Home
                </span>
                <span>/</span>
                <span
                  onClick={() => onNavigate?.('#what-we-do')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
                >
                  What we do
                </span>
                <span>/</span>
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Digital Engineering</span>
              </div>

              {/* Mint Cyan Top Pill Tag */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '22px',
                }}
              >
                <span style={{ width: '24px', height: '2px', background: '#67DFCB', display: 'inline-block' }} />
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    color: '#67DFCB',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  06 &bull; DIGITAL ENGINEERING
                </span>
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontSize: 'clamp(42px, 4.8vw, 62px)',
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                  color: '#FFFFFF',
                }}
              >
                Turning ideas into <br />
                scalable technology.
              </h1>

              {/* Description Paragraph */}
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.55,
                  color: 'rgba(255, 255, 255, 0.82)',
                  maxWidth: '520px',
                  marginBottom: '36px',
                  fontWeight: 400,
                }}
              >
                Ajiledone designs, builds, integrates and modernizes applications, platforms and digital products that connect customers, employees, operations and enterprise systems.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  onMouseEnter={() => setHoveredExploreBtn(true)}
                  onMouseLeave={() => setHoveredExploreBtn(false)}
                  onClick={() => onNavigate?.('#capabilities')}
                  style={{
                    background: '#FFFFFF',
                    color: '#1B4AC7',
                    border: 'none',
                    borderRadius: '30px',
                    padding: '13px 30px',
                    fontSize: '14.5px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredExploreBtn ? 'translateY(-3px)' : 'none',
                    boxShadow: hoveredExploreBtn ? '0 12px 28px rgba(255, 255, 255, 0.3)' : '0 4px 14px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  Explore engineering
                </button>

                <button
                  onMouseEnter={() => setHoveredTalkBtn(true)}
                  onMouseLeave={() => setHoveredTalkBtn(false)}
                  onClick={() => onNavigate?.('#contact')}
                  style={{
                    background: 'rgba(13, 42, 117, 0.4)',
                    color: '#FFFFFF',
                    border: hoveredTalkBtn ? '1px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.35)',
                    borderRadius: '30px',
                    padding: '13px 30px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredTalkBtn ? '0 0 16px rgba(103, 223, 203, 0.3)' : 'none',
                  }}
                >
                  Talk to Ajiledone
                </button>
              </div>

              {/* Bottom Process Tags */}
              <div
                className="digital-hero-process-tags"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginTop: '36px',
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#67DFCB',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                <span>DESIGN</span>
                <span style={{ opacity: 0.5 }}>&bull;</span>
                <span>BUILD</span>
                <span style={{ opacity: 0.5 }}>&bull;</span>
                <span>INTEGRATE</span>
                <span style={{ opacity: 0.5 }}>&bull;</span>
                <span>MODERNIZE</span>
              </div>
            </div>

            {/* Right Column: Dynamic Step-by-Step Figma Blueprint Hero Glass Artwork */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
              <div className="digital-hero-artwork-box" style={{ position: 'relative', width: '460px', height: '370px' }}>
                
                {/* 1. Background SKETCH Blueprint Frame (Reveals at heroStep >= 1) */}
                <div
                  className="digital-hero-sketch-frame"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '380px',
                    opacity: heroStep >= 1 ? 1 : 0,
                    transform: heroStep >= 1 ? 'translateY(0)' : 'translateY(-14px)',
                    transition: 'all 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: heroStep === 1 ? '#67DFCB' : 'rgba(255, 255, 255, 0.75)',
                      letterSpacing: '0.14em',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                      transition: 'color 0.4s ease',
                      textShadow: heroStep === 1 ? '0 0 10px rgba(103, 223, 203, 0.6)' : 'none',
                    }}
                  >
                    SKETCH
                  </div>

                  <div
                    style={{
                      border: heroStep === 1 ? '1px dashed #67DFCB' : '1px dashed rgba(255, 255, 255, 0.3)',
                      borderRadius: '16px',
                      height: '230px',
                      padding: '16px',
                      background: heroStep === 1 ? 'rgba(103, 223, 203, 0.04)' : 'rgba(255, 255, 255, 0.02)',
                      transition: 'all 0.5s ease',
                      boxShadow: heroStep === 1 ? '0 0 20px rgba(103, 223, 203, 0.15)' : 'none',
                    }}
                  >
                    {/* Dotted Sketch Wireframe Layout Placeholders */}
                    <div style={{ border: '1px dashed rgba(255, 255, 255, 0.3)', height: '24px', borderRadius: '8px', marginBottom: '12px', width: '50%' }} />
                    <div style={{ border: '1px dashed rgba(255, 255, 255, 0.25)', height: '44px', borderRadius: '8px', marginBottom: '12px' }} />
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <div style={{ border: '1px dashed rgba(255, 255, 255, 0.2)', height: '58px', borderRadius: '8px', width: '48%' }} />
                    </div>
                  </div>
                </div>

                {/* 2. Cyan Arrow -> (Reveals at heroStep >= 2) */}
                <div
                  className="digital-hero-arrow"
                  style={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '80px',
                    color: '#67DFCB',
                    fontSize: '26px',
                    fontWeight: 900,
                    zIndex: 15,
                    opacity: heroStep >= 2 ? 1 : 0,
                    transform: heroStep >= 2 ? 'translateX(0) scale(1)' : 'translateX(-15px) scale(0.7)',
                    transition: 'all 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
                    textShadow: '0 0 16px #67DFCB, 0 0 8px rgba(103, 223, 203, 0.9)',
                  }}
                >
                  &rarr;
                </div>

                {/* 3. Foreground Overlapping Glassmorphic Blueprint Card (Reveals at heroStep >= 3) */}
                <div
                  className="digital-hero-glass-card"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '145px',
                    width: '315px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(13, 42, 117, 0.8) 100%)',
                    border: heroStep >= 3 ? '1px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '20px',
                    padding: '20px',
                    backdropFilter: 'blur(24px)',
                    boxShadow: heroStep >= 3 ? '0 24px 50px rgba(103, 223, 203, 0.3)' : '0 24px 50px rgba(0, 0, 0, 0.4)',
                    opacity: heroStep >= 3 ? 1 : 0,
                    transform: heroStep >= 3 ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.92)',
                    transition: 'all 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 3,
                  }}
                >
                  {/* Top Mint Pill Bar */}
                  <div style={{ width: '100px', height: '11px', borderRadius: '8px', background: '#67DFCB', marginBottom: '14px' }} />

                  {/* Input Box: Digital product */}
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.14)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontSize: '13px',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      marginBottom: '14px',
                    }}
                  >
                    Digital product
                  </div>

                  {/* Dual Box Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '10px', marginBottom: '16px' }}>
                    <div
                      style={{
                        height: '56px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #1FA5FF 0%, #67DFCB 100%)',
                        boxShadow: '0 6px 16px rgba(31, 165, 255, 0.35)',
                      }}
                    />
                    <div
                      style={{
                        height: '56px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.16)',
                      }}
                    />
                  </div>

                  {/* Button inside glass card */}
                  <div>
                    <button
                      style={{
                        background: '#FFFFFF',
                        color: '#1B4AC7',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '7px 22px',
                        fontSize: '12.5px',
                        fontWeight: 800,
                        boxShadow: '0 4px 14px rgba(255, 255, 255, 0.35)',
                        cursor: 'pointer',
                      }}
                    >
                      Ship it
                    </button>
                  </div>
                </div>

                {/* 4. SHIPPED Label (Reveals at heroStep >= 3) */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '140px',
                    fontSize: '11.5px',
                    fontWeight: 900,
                    color: '#67DFCB',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    opacity: heroStep >= 3 ? 1 : 0,
                    transform: heroStep >= 3 ? 'translateY(0)' : 'translateY(8px)',
                    transition: 'all 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 5,
                    textShadow: '0 0 12px rgba(103, 223, 203, 0.8)',
                  }}
                >
                  SHIPPED
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION: SIX AREAS. ONE CONNECTED AGENDA SECTION (Pre-Selected: 06 Digital Engineering) */}
      <section
        style={{
          background: '#070D22',
          padding: '48px 0 40px',
          color: '#FFFFFF',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="section-container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '32px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(26px, 3vw, 36px)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: 0,
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              Six areas. One connected agenda.
            </h2>
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.65)',
                fontSize: '14.5px',
                fontWeight: 500,
              }}
            >
              Every engagement draws on more than one.
            </span>
          </div>

          <div
            style={{ position: 'relative', width: '100%' }}
          >
            <div
              className="connected-pills-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '12px',
                position: 'relative',
                zIndex: 3,
              }}
            >
              {connectedAreasList.map((cap, idx) => {
                const isCurrentActive = activeConnectedPill === idx;

                return (
                  <div
                    key={cap.id}
                    onMouseEnter={() => setActiveConnectedPill(idx)}
                    onTouchStart={() => setActiveConnectedPill(idx)}
                    onClick={() => {
                      const routes = [
                        '#what-we-do',
                        '#ai-intelligent-enterprise',
                        '#data-intelligence',
                        '#enterprise-platforms',
                        '#cloud-technology-modernization',
                        '#digital-engineering',
                      ];
                      if (onNavigate) {
                        onNavigate(routes[idx]);
                      }
                    }}
                    style={{
                      background: isCurrentActive
                        ? '#52E0CB'
                        : 'rgba(255, 255, 255, 0.05)',
                      border: isCurrentActive
                        ? '1px solid #52E0CB'
                        : '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '24px',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: isCurrentActive
                        ? '0 8px 24px rgba(82, 224, 203, 0.4)'
                        : 'none',
                      transform: isCurrentActive ? 'translateY(-4px)' : 'none',
                    }}
                  >
                    <span
                      style={{
                        background: isCurrentActive ? '#070D22' : 'rgba(255, 255, 255, 0.15)',
                        color: isCurrentActive ? '#52E0CB' : '#FFFFFF',
                        fontSize: '11px',
                        fontWeight: 800,
                        padding: '4px 8px',
                        borderRadius: '12px',
                        lineHeight: 1,
                        flexShrink: 0,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {cap.id}
                    </span>
                    <span
                      style={{
                        color: isCurrentActive ? '#070D22' : '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 800,
                        lineHeight: 1.25,
                        whiteSpace: 'normal',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {cap.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <svg
              viewBox="0 0 1200 230"
              style={{
                width: '100%',
                height: '195px',
                overflow: 'visible',
                pointerEvents: 'none',
                marginTop: '8px',
              }}
            >
              {/* All 15 Connected Agenda Pairwise Arcs with Vibrant Cyan Glow */}
              {[
                { src: 0, tgt: 1, depth: 60 },
                { src: 0, tgt: 2, depth: 95 },
                { src: 0, tgt: 3, depth: 130 },
                { src: 0, tgt: 4, depth: 165 },
                { src: 0, tgt: 5, depth: 200 },
                { src: 1, tgt: 2, depth: 60 },
                { src: 1, tgt: 3, depth: 95 },
                { src: 1, tgt: 4, depth: 130 },
                { src: 1, tgt: 5, depth: 165 },
                { src: 2, tgt: 3, depth: 60 },
                { src: 2, tgt: 4, depth: 95 },
                { src: 2, tgt: 5, depth: 130 },
                { src: 3, tgt: 4, depth: 60 },
                { src: 3, tgt: 5, depth: 95 },
              ].map(({ src, tgt, depth }) => {
                const srcX = src * 200 + 100;
                const tgtX = tgt * 200 + 100;
                const isNoActiveTab = activeConnectedPill === null;
                const isConnectedToActive =
                  activeConnectedPill !== null &&
                  (activeConnectedPill === src || activeConnectedPill === tgt);

                return (
                  <path
                    key={`${src}-${tgt}`}
                    d={`M ${srcX} 0 C ${srcX} ${depth}, ${tgtX} ${depth}, ${tgtX} 0`}
                    fill="none"
                    stroke={
                      isNoActiveTab
                        ? 'rgba(82, 224, 203, 0.85)'
                        : isConnectedToActive
                        ? '#52E0CB'
                        : 'rgba(82, 224, 203, 0.35)'
                    }
                    strokeWidth={isNoActiveTab ? '2.2' : isConnectedToActive ? '2.5' : '1.5'}
                    style={{
                      opacity: isNoActiveTab ? 0.95 : isConnectedToActive ? 1 : 0.4,
                      filter: isNoActiveTab
                        ? 'drop-shadow(0 0 8px rgba(82, 224, 203, 0.8))'
                        : isConnectedToActive
                        ? 'drop-shadow(0 0 12px rgba(82, 224, 203, 0.95)) drop-shadow(0 0 4px #52E0CB)'
                        : 'none',
                      transition: 'all 0.45s ease',
                    }}
                  />
                );
              })}

              {/* Glowing Connection Dots under all 6 Pill Boxes */}
              {[0, 1, 2, 3, 4, 5].map((idx) => {
                const nodeX = idx * 200 + 100;
                const currentActivePill = activeConnectedPill ?? 5;
                const isSelectedNode = currentActivePill === idx;

                return (
                  <g key={`node-${idx}`}>
                    <circle
                      cx={nodeX}
                      cy={0}
                      r={isSelectedNode ? 6 : 4}
                      fill="#52E0CB"
                      style={{
                        filter: isSelectedNode
                          ? 'drop-shadow(0 0 10px #52E0CB)'
                          : 'drop-shadow(0 0 5px rgba(82, 224, 203, 0.6))',
                        transition: 'all 0.35s ease',
                      }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </section>

      {/* 3. SECTION: WHERE DIRECTION BECOMES DELIVERY (Exact Figma Uploaded Design) */}
      <section
        style={{
          padding: '110px 0 100px',
          background: '#FFFFFF',
        }}
      >
        <div className="section-container">
          {/* Top Tag & Main Headline */}
          <div style={{ marginBottom: '44px' }}>
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
                WHERE DIRECTION BECOMES DELIVERY
              </span>
            </div>

            <h2
              style={{
                lineHeight: 1.08,
                margin: 0,
                letterSpacing: '-0.03em',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(32px, 3.6vw, 46px)',
                  fontWeight: 700,
                  color: '#717D96',
                  marginBottom: '6px',
                }}
              >
                Strategy creates direction.
              </div>
              <div
                style={{
                  fontSize: 'clamp(42px, 4.6vw, 58px)',
                  fontWeight: 800,
                  color: '#0B1739',
                }}
              >
                Engineering makes <br />
                transformation real.
              </div>
            </h2>

            {/* Mint Cyan Underline Bar */}
            <div
              className="delivery-cyan-underline"
              style={{
                width: '320px',
                height: '5px',
                background: '#52E0CB',
                borderRadius: '3px',
                marginTop: '18px',
                boxShadow: '0 2px 10px rgba(82, 224, 203, 0.4)',
              }}
            />
          </div>

          {/* 4 Process Cards Row with Interspersed Blue Arrows (Animated Left to Right starting after blank step 0) */}
          <div
            className="delivery-cards-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              marginBottom: '54px',
            }}
          >
            {[
              { num: '01', title: 'Designs' },
              { num: '02', title: 'Builds' },
              { num: '03', title: 'Integrates' },
              { num: '04', title: 'Modernizes' },
            ].map((card, cIdx) => {
              const isHovered = hoveredProcessIdx === cIdx;
              const isRevealed = deliverySeqStep >= cIdx + 1;
              const isLast = cIdx === 3;

              return (
                <React.Fragment key={cIdx}>
                  <div
                    className="delivery-card-box"
                    onMouseEnter={() => setHoveredProcessIdx(cIdx)}
                    onMouseLeave={() => setHoveredProcessIdx(null)}
                    style={{
                      flex: 1,
                      background: isHovered ? '#0B1739' : '#F4F7FF',
                      color: isHovered ? '#FFFFFF' : '#0B1739',
                      border: isHovered ? '1px solid #0B1739' : '1px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '24px 26px',
                      height: '115px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      opacity: isRevealed ? 1 : 0,
                      transform: isRevealed ? (isHovered ? 'translateY(-6px)' : 'none') : 'translateX(-28px) scale(0.94)',
                      transition: 'all 1.0s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: isHovered
                        ? '0 16px 36px rgba(11, 23, 57, 0.25)'
                        : '0 2px 8px rgba(0, 0, 0, 0.02)',
                      cursor: 'pointer',
                      pointerEvents: isRevealed ? 'auto' : 'none',
                    }}
                  >
                    <div
                      className="delivery-card-num"
                      style={{
                        fontSize: '12px',
                        fontWeight: 800,
                        color: isHovered ? '#52E0CB' : '#265CF4',
                        letterSpacing: '0.04em',
                        transition: 'color 0.4s ease',
                      }}
                    >
                      {card.num}
                    </div>
                    <div
                      className="delivery-card-title"
                      style={{
                        fontSize: '24px',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                        transition: 'color 0.4s ease',
                      }}
                    >
                      {card.title}
                    </div>
                  </div>

                  {!isLast && (
                    <div
                      className="delivery-card-arrow"
                      style={{
                        color: '#265CF4',
                        fontSize: '18px',
                        fontWeight: 800,
                        padding: '0 4px',
                        flexShrink: 0,
                        opacity: deliverySeqStep > cIdx + 1 ? 1 : 0,
                        transform: deliverySeqStep > cIdx + 1 ? 'scale(1)' : 'scale(0.5)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      &rarr;
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Connecting Sub-section Baseline & Pills (Propagating Left to Right) */}
          <div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#717D96',
                marginBottom: '16px',
              }}
            >
              Connecting
            </div>

            {/* 4 Connected Target Pills Row over Baseline */}
            <div style={{ position: 'relative', width: '100%' }}>
              <div
                className="connecting-pills-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '24px',
                  position: 'relative',
                  zIndex: 2,
                  marginBottom: '14px',
                }}
              >
                {[
                  'Customers',
                  'Employees',
                  'Operations',
                  'Enterprise systems',
                ].map((targetName, tIdx) => {
                  const isPillRevealed = deliverySeqStep >= tIdx + 1;

                  return (
                    <div
                      key={tIdx}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        opacity: isPillRevealed ? 1 : 0,
                        transform: isPillRevealed ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <div
                        className="connecting-pill-box"
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderRadius: '30px',
                          padding: '8px 22px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '13.5px',
                          fontWeight: 700,
                          color: '#0B1739',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <span
                          style={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            background: '#52E0CB',
                            display: 'inline-block',
                            boxShadow: isPillRevealed ? '0 0 8px #52E0CB' : 'none',
                          }}
                        />
                        {targetName}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Colorless Propagating Baseline Line (0% at step 0) */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '2px',
                  background: 'transparent',
                  borderRadius: '2px',
                  marginTop: '12px',
                  overflow: 'hidden',
                }}
              >
                {/* Active Colorless Propagating Slate Line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: `${deliverySeqStep === 0 ? 0 : Math.min(100, deliverySeqStep * 25)}%`,
                    background: '#CBD5E1',
                    borderRadius: '2px',
                    transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              </div>

              {/* Colorless Dots Grid on Propagating Baseline */}
              <div
                className="connecting-dots-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '24px',
                  position: 'absolute',
                  bottom: '-3px',
                  left: 0,
                  width: '100%',
                  zIndex: 3,
                  pointerEvents: 'none',
                }}
              >
                {[0, 1, 2, 3].map((dotIdx) => {
                  const isDotRevealed = deliverySeqStep >= dotIdx + 1;

                  return (
                    <div key={dotIdx} style={{ paddingLeft: '32px' }}>
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#94A3B8',
                          opacity: isDotRevealed ? 1 : 0,
                          transform: isDotRevealed ? 'scale(1)' : 'scale(0)',
                          transition: 'all 0.8s ease',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Caption Paragraph */}
            <div
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#64748B',
                marginTop: '28px',
              }}
            >
              Applications, platforms and digital products &mdash; connected to the systems that run the business.
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECTION: CAPABILITY GROUPS ("Six capability groups." - Exact Uploaded Figma Design) */}
      <section
        style={{
          padding: '110px 0 100px',
          background: '#F4F7FF',
        }}
      >
        <div className="section-container">
          {/* Top Tag & Title Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '44px' }}>
            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#265CF4',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                — OUR ENGINEERING CAPABILITIES
              </div>
              <h2
                style={{
                  fontSize: 'clamp(36px, 4vw, 52px)',
                  fontWeight: 800,
                  color: '#0B1739',
                  lineHeight: 1.1,
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                Six capability groups.
              </h2>
            </div>
            <div
              style={{
                fontSize: '13px',
                color: '#94A3B8',
                fontWeight: 600,
                textAlign: 'right',
                lineHeight: 1.6,
              }}
            >
              Software &bull; Experience &bull; Architecture<br />
              Product &bull; Platform &bull; Quality
            </div>
          </div>

          {/* 6 Capability Cards Grid (3 Columns x 2 Rows) */}
          <div className="responsive-3col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '26px' }}>
            {[
              {
                num: '01',
                title: 'Software Engineering',
                desc: 'The services and systems behind the product.',
                headerBg: '#0B1739',
                headerTextColor: '#FFFFFF',
                numColor: 'rgba(255, 255, 255, 0.6)',
                items: ['Java', 'Spring Boot', '.NET', 'C#', 'Python', 'Node.js'],
              },
              {
                num: '02',
                title: 'Experience Engineering',
                desc: 'The interface the customer or employee actually touches.',
                headerBg: '#F1F5F9',
                headerTextColor: '#0B1739',
                numColor: '#94A3B8',
                items: ['React', 'Angular', 'JavaScript', 'TypeScript'],
              },
              {
                num: '03',
                title: 'Architecture',
                desc: 'How the parts talk to each other — and keep talking at scale.',
                headerBg: '#F1F5F9',
                headerTextColor: '#0B1739',
                numColor: '#94A3B8',
                items: ['Microservices', 'APIs', 'Event-Driven Architecture', 'Distributed Systems'],
              },
              {
                num: '04',
                title: 'Product Engineering',
                desc: 'Building the thing itself, from MVP to platform.',
                headerBg: '#F1F5F9',
                headerTextColor: '#0B1739',
                numColor: '#94A3B8',
                items: ['Digital Products', 'Enterprise Platforms', 'MVP Development', 'SaaS Platforms', 'Product Modernization'],
              },
              {
                num: '05',
                title: 'Platform Engineering',
                desc: 'The path that gets code safely and repeatedly into production.',
                headerBg: '#265CF4',
                headerTextColor: '#FFFFFF',
                numColor: 'rgba(255, 255, 255, 0.7)',
                items: ['DevOps', 'CI/CD', 'Kubernetes', 'Infrastructure as Code', 'Observability', 'SRE'],
              },
              {
                num: '06',
                title: 'Quality Engineering',
                desc: "Proving it works before the business finds out it doesn't.",
                headerBg: '#F1F5F9',
                headerTextColor: '#0B1739',
                numColor: '#94A3B8',
                items: ['Test Automation', 'API Testing', 'Performance Engineering', 'Continuous Testing'],
              },
            ].map((group, idx) => {
              const isHovered = hoveredCardIndex === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCardIndex(idx)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isHovered ? 'scale(1.04) translateY(-6px)' : 'none',
                    boxShadow: isHovered ? '0 24px 48px rgba(11, 23, 57, 0.16)' : '0 6px 20px rgba(0, 0, 0, 0.03)',
                    zIndex: isHovered ? 5 : 1,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Card Header Bar (Colors stay fixed - No color change on hover) */}
                  <div
                    style={{
                      background: group.headerBg,
                      color: group.headerTextColor,
                      padding: '16px 22px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {/* 3 Cyan Dots */}
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#52E0CB' }} />
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#52E0CB', opacity: 0.7 }} />
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#52E0CB', opacity: 0.4 }} />
                      </div>
                      <h3 style={{ fontSize: '17px', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
                        {group.title}
                      </h3>
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: group.numColor }}>
                      {group.num}
                    </span>
                  </div>

                  {/* Card Body Description */}
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#475569',
                      lineHeight: 1.5,
                      margin: '18px 22px 16px',
                      fontWeight: 500,
                    }}
                  >
                    {group.desc}
                  </p>

                  {/* Capability List Items */}
                  <div style={{ borderTop: '1px solid #F1F5F9', marginTop: 'auto' }}>
                    {group.items.map((item, itemIdx) => {
                      const itemNum = (itemIdx + 1).toString().padStart(2, '0');

                      return (
                        <div
                          key={itemIdx}
                          style={{
                            padding: '13px 22px',
                            borderBottom: itemIdx < group.items.length - 1 ? '1px solid #F1F5F9' : 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                          }}
                        >
                          <span style={{ fontSize: '12px', fontWeight: 700, color: '#94A3B8', width: '22px' }}>
                            {itemNum}
                          </span>
                          <span style={{ fontSize: '14px', fontWeight: 700, color: '#0B1739' }}>
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SECTION: LOWER HERO CALLOUT ("Turning ideas into scalable technology." - Exact Uploaded Figma Specs) */}
      <section
        style={{
          position: 'relative',
          padding: '110px 0 100px',
          background: 'linear-gradient(135deg, #08194A 0%, #0D2A75 50%, #1B4AC7 100%)',
          color: '#FFFFFF',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Figma Ambient Glow Blur (#67DFCB 22% layer blur 230) */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '620px',
            height: '620px',
            borderRadius: '50%',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, maxWidth: '850px' }}>
          {/* Top Mint Sub-tag (Appears first at step >= 1) */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '11px',
              fontWeight: 800,
              color: '#67DFCB',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '22px',
              opacity: calloutSeqStep >= 1 ? 1 : 0,
              transform: calloutSeqStep >= 1 ? 'translateY(0)' : 'translateY(-12px)',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <span style={{ width: '28px', height: '1.5px', background: '#67DFCB', borderRadius: '2px' }} />
            ENGINEERING MAKES IT REAL
            <span style={{ width: '28px', height: '1.5px', background: '#67DFCB', borderRadius: '2px' }} />
          </div>

          {/* Main Headline Text (Appears first at step >= 1) */}
          <h2
            style={{
              fontSize: 'clamp(38px, 5.2vw, 62px)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.12,
              margin: '0 auto 20px',
              letterSpacing: '-0.025em',
              opacity: calloutSeqStep >= 1 ? 1 : 0,
              transform: calloutSeqStep >= 1 ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Turning ideas into <br />
            scalable technology.
          </h2>

          {/* Mint Underline Bar (Appears first at step >= 1) */}
          <div
            style={{
              width: '170px',
              height: '4px',
              borderRadius: '4px',
              background: '#67DFCB',
              margin: '0 auto 36px',
              boxShadow: '0 0 16px rgba(103, 223, 203, 0.6)',
              opacity: calloutSeqStep >= 1 ? 1 : 0,
              transform: calloutSeqStep >= 1 ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />

          {/* 4 Process Tag Tabs (Appears ALL TOGETHER simultaneously at step >= 2) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '44px',
              opacity: calloutSeqStep >= 2 ? 1 : 0,
              transform: calloutSeqStep >= 2 ? 'translateY(0)' : 'translateY(18px) scale(0.95)',
              transition: 'all 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {[
              { label: 'Designs' },
              { label: 'Builds' },
              { label: 'Integrates' },
              { label: 'Modernizes' },
            ].map((pill, pIdx) => (
              <div
                key={pIdx}
                style={{
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.26)',
                  borderRadius: '30px',
                  padding: '8px 24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#67DFCB',
                    display: 'inline-block',
                    boxShadow: '0 0 8px #67DFCB',
                  }}
                />
                {pill.label}
              </div>
            ))}
          </div>

          {/* ALWAYS VISIBLE CTA BUTTON */}
          <div>
            <button
              onClick={() => onNavigate?.('#contact')}
              style={{
                background: '#FFFFFF',
                color: '#1B4AC7',
                border: 'none',
                borderRadius: '40px',
                padding: '15px 38px',
                fontSize: '15px',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 10px 28px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 14px 34px rgba(255, 255, 255, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(0, 0, 0, 0.25)';
              }}
            >
              Talk to Ajiledone about engineering
            </button>
          </div>
        </div>
      </section>

      {/* 6. SECTION: CTA BANNER ("Would you like more information, or do you have a question?" - Exact Uploaded Figma Specs) */}
      <section
        style={{
          background: 'linear-gradient(135deg, #265CF4 0%, #1FA5FF 100%)',
          padding: '96px 0',
          color: '#FFFFFF',
        }}
      >
        <div className="section-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
            <div style={{ maxWidth: '720px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.85)',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                DON'T BE WEIRD
              </div>
              <h3
                style={{
                  fontSize: 'clamp(28px, 3.6vw, 42px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                Would you like more information, or do you have a question?
              </h3>
            </div>

            <button
              onClick={() => onNavigate?.('#contact')}
              style={{
                background: '#FFFFFF',
                color: '#265CF4',
                border: 'none',
                borderRadius: '12px',
                padding: '14px 34px',
                fontSize: '14.5px',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.10) translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 14px 32px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
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
