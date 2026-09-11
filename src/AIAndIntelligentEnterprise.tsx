import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Zap,
  Lock,
  LineChart,
  Users,
  CheckCircle2,
} from 'lucide-react';

interface AIAndIntelligentEnterprisePageProps {
  onNavigate: (anchor: string) => void;
}

export const AIAndIntelligentEnterprisePage: React.FC<AIAndIntelligentEnterprisePageProps> = ({ onNavigate }) => {
  const [hoveredHeroLayer, setHoveredHeroLayer] = useState<number | null>(null);

  const heroLayers = [
    {
      id: 0,
      title: 'BUSINESS PROCESSES',
      desc: 'How work actually gets done',
    },
    {
      id: 1,
      title: 'THE AI LAYER',
      desc: 'Generative · Agentic · Applied',
    },
    {
      id: 2,
      title: 'ENTERPRISE APPLICATIONS',
      desc: 'SAP · Oracle · ServiceNow',
    },
    {
      id: 3,
      title: 'DATA FOUNDATION',
      desc: 'Trusted, governed, connected',
    },
  ];

  const [frameworkStepIndex, setFrameworkStepIndex] = useState<number>(0);
  const [hoveredFrameworkStep, setHoveredFrameworkStep] = useState<number | null>(null);

  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
  const [activeGroupTags, setActiveGroupTags] = useState<Record<string, number>>({});

  const [objectiveStep, setObjectiveStep] = useState<number>(0);
  // Step 0: Initial state (line 0%, text bright, headline hidden)
  // Step 1: Strike line moving left to right (0% -> 100%)
  // Step 2: Strike complete -> text dims, headline reveals with fade & scale!

  useEffect(() => {
    let t1: NodeJS.Timeout, t2: NodeJS.Timeout;

    const runSequence = () => {
      setObjectiveStep(0);
      t1 = setTimeout(() => {
        setObjectiveStep(1);
      }, 300);

      t2 = setTimeout(() => {
        setObjectiveStep(2);
      }, 1000);
    };

    const targetEl = document.querySelector('section');
    if (targetEl) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            observer.unobserve(entries[0].target);
            runSequence();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(targetEl);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        observer.disconnect();
      };
    } else {
      runSequence();
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, []);

  useEffect(() => {
    if (hoveredFrameworkStep !== null) return;
    const timer = setInterval(() => {
      setFrameworkStepIndex((prev) => (prev + 1) % 4);
    }, 2600);
    return () => clearInterval(timer);
  }, [hoveredFrameworkStep]);

  const frameworkSteps = [
    { id: 0, num: '01', label: 'Identify', desc: 'High-value AI opportunities, ranked by business impact.' },
    { id: 1, num: '02', label: 'Found', desc: 'Enterprise AI foundations: data, architecture, guardrails.' },
    { id: 2, num: '03', label: 'Build', desc: 'Intelligent solutions engineered for production.' },
    { id: 3, num: '04', label: 'Embed', desc: 'AI placed directly inside business processes.' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeConnectedPill, setActiveConnectedPill] = useState<number | null>(1);

  const connectedAreasList = [
    { id: '01', title: 'Business & Technology Transformation' },
    { id: '02', title: 'AI & Intelligent Enterprise' },
    { id: '03', title: 'Data & Intelligence' },
    { id: '04', title: 'Enterprise Platforms' },
    { id: '05', title: 'Cloud & Modernization' },
    { id: '06', title: 'Digital Engineering' },
  ];

  const interconnectedMap: Record<number, number[]> = {
    0: [3, 5], // 01 Business & Tech Transformation -> 04 Platforms, 06 Digital Engineering
    1: [3, 5], // 02 AI & Intelligent Enterprise -> 04 Platforms, 06 Digital Engineering
    2: [3],    // 03 Data & Intelligence -> 04 Platforms
    3: [0, 1, 2, 4, 5], // 04 Enterprise Platforms -> 01, 02, 03, 05, 06
    4: [3],    // 05 Cloud & Modernization -> 04 Platforms
    5: [0, 1, 3], // 06 Digital Engineering -> 01, 02, 04
  };

  const approachCards = [
    {
      id: '01',
      title: 'Trusted data',
      desc: 'Governed, connected and fit for the decision it feeds.',
    },
    {
      id: '02',
      title: 'Scalable architecture',
      desc: 'Built to serve production load, not a demo.',
    },
    {
      id: '03',
      title: 'Security',
      desc: 'Controlled access to models, prompts and outputs.',
    },
    {
      id: '04',
      title: 'Governance',
      desc: 'Clear ownership, policy and accountability.',
    },
    {
      id: '05',
      title: 'Integration with enterprise applications',
      desc: 'AI that reaches into SAP, Oracle and ServiceNow.',
    },
    {
      id: '06',
      title: 'Redesigned workflows',
      desc: 'The process changes, not just the tooling.',
    },
    {
      id: '07',
      title: 'A clear connection to business value',
      desc: 'Named outcome, measured before and after.',
    },
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isCtaHovered, setIsCtaHovered] = useState<boolean>(false);

  const capabilityGroups = [
    {
      id: '01',
      groupTag: 'GROUP 01',
      title: 'Generative AI',
      desc: 'Enterprise language capability, grounded in your own knowledge.',
      img: '/images/Ourcapabilities1.png',
      reverse: false,
      capCountTag: '7 CAPABILITIES',
      largeNumber: '01',
      tags: [
        'Enterprise LLM Applications',
        'Retrieval-Augmented Generation',
        'Knowledge Assistants',
        'Enterprise Search',
        'AI Copilots',
        'Document Intelligence',
        'Conversational AI',
      ],
    },
    {
      id: '02',
      groupTag: 'GROUP 02',
      title: 'Agentic AI',
      desc: "Systems that don't just answer — they carry the task through.",
      img: '/images/Ourcapabilities2.png',
      reverse: true,
      capCountTag: '6 CAPABILITIES',
      largeNumber: '02',
      tags: [
        'AI Agents',
        'Multi-Agent Systems',
        'Agent Orchestration',
        'Autonomous Workflows',
        'Enterprise Process Agents',
        'Human-in-the-Loop Systems',
      ],
    },
    {
      id: '03',
      groupTag: 'GROUP 03',
      title: 'Applied AI',
      desc: 'Prediction and perception applied to real operational decisions.',
      img: '/images/Ourcapabilities3.png',
      reverse: false,
      capCountTag: '7 CAPABILITIES',
      largeNumber: '03',
      tags: [
        'Machine Learning',
        'Predictive Analytics',
        'NLP',
        'Computer Vision',
        'Recommendation Systems',
        'Forecasting',
        'Anomaly Detection',
      ],
    },
    {
      id: '04',
      groupTag: 'GROUP 04',
      title: 'AI Engineering',
      desc: 'The engineering discipline that makes AI hold up in production.',
      img: '/images/Ourcapabilities4.png',
      reverse: true,
      capCountTag: '8 CAPABILITIES',
      largeNumber: '04',
      tags: [
        'LLM Engineering',
        'Model Integration',
        'Vector Databases',
        'Embeddings',
        'Fine-Tuning',
        'Prompt Engineering',
        'MLOps',
        'LLMOps',
      ],
    },
    {
      id: '05',
      groupTag: 'GROUP 05',
      title: 'Responsible AI',
      desc: 'Governance and control designed in — not added after an incident.',
      img: '/images/Ourcapabilities5.png',
      reverse: false,
      capCountTag: '5 CAPABILITIES',
      largeNumber: '05',
      tags: [
        'AI Governance',
        'Security',
        'Risk Management',
        'Model Monitoring',
        'Responsible Deployment',
      ],
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#0A1128', backgroundColor: '#FFFFFF' }}>
      {/* 1. HERO SECTION (Exact Our Vision Hero Background & Only AI Layer Colored/Glowing) */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0 110px',
          background: 'linear-gradient(135deg, #06143E 0%, #0D2A75 45%, #1B4AC7 100%)',
          color: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Vertical Background Grid Overlay matching Our Vision page */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: '8% 100%',
            pointerEvents: 'none',
          }}
        />

        {/* Glow Layer 1 matching Our Vision: Ellipse 600px x 600px, #1FA5FF (35%), Blur 220px */}
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
          }}
        />

        {/* Glow Layer 2 matching Our Vision: 1000px x 320px, #67DFCB (40%), Blur 150px */}
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
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Breadcrumb Navigation */}
          <div
            style={{
              fontSize: '12.5px',
              color: 'rgba(255, 255, 255, 0.65)',
              fontWeight: 500,
              marginBottom: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>Home</span>
            <span>/</span>
            <span>What we do</span>
            <span>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>AI &amp; Intelligent Enterprise</span>
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
              {/* Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
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
                  02 &nbsp;&bull;&nbsp; AI &amp; INTELLIGENT ENTERPRISE
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontSize: 'clamp(40px, 4.8vw, 64px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                }}
              >
                Move beyond AI<br />
                experimentation.
              </h1>

              {/* Description Paragraph matching uploaded screenshot */}
              <p
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6,
                  marginBottom: '40px',
                  maxWidth: '540px',
                }}
              >
                Artificial intelligence is rapidly becoming a new operating layer for the enterprise &mdash; sitting between the processes that run the business and the systems and data beneath them.
              </p>

              {/* CTA Buttons (Matching Our Vision Hero Button Effects: Default Colorless Glass, Hover Solid White) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '44px' }}>
                <a
                  href="#capabilities"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#capabilities');
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    color: '#FFFFFF',
                    padding: '16px 36px',
                    borderRadius: '30px',
                    fontWeight: 800,
                    fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#1B4AC7';
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
                  Explore AI capabilities
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#contact');
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    color: '#FFFFFF',
                    padding: '16px 36px',
                    borderRadius: '30px',
                    fontWeight: 800,
                    fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#0A1128';
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
                  Talk to Ajiledone
                </a>
              </div>

              {/* Bottom Tag */}
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#52E0CB',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                FROM PILOT &rarr; TO OPERATING LAYER
              </div>
            </div>

            {/* Right Column: 4-Diamond Architectural Stack Diagram (Only AI Layer Colored & Glowing, Static on Hover) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  color: 'rgba(255, 255, 255, 0.55)',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                A NEW OPERATING LAYER
              </div>

              {heroLayers.map((layer, idx) => {
                const isAiLayer = layer.id === 1; // THE AI LAYER is the ONLY colored & glowing shape

                return (
                  <React.Fragment key={layer.id}>
                    {/* Connecting Vertical Line Segment between Diamonds (Only adjoining, never on shape bodies!) */}
                    {idx > 0 && (
                      <div
                        style={{
                          width: '1.5px',
                          height: '14px',
                          background: 'rgba(255, 255, 255, 0.35)',
                          margin: '-2px 0',
                          position: 'relative',
                          zIndex: 1,
                        }}
                      />
                    )}

                    {/* Diamond Wrapper Container */}
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {/* Radiant Light Glow Aura behind THE AI LAYER (Continuous Breathing Pulse Glow) */}
                      {isAiLayer && (
                        <>
                          <style>{`
                            @keyframes pulseAiGlow {
                              0%, 100% {
                                opacity: 0.35;
                                transform: scale(0.92);
                                filter: blur(14px);
                              }
                              50% {
                                opacity: 1;
                                transform: scale(1.14);
                                filter: blur(32px);
                              }
                            }
                          `}</style>
                          <div
                            style={{
                              position: 'absolute',
                              width: '410px',
                              height: '120px',
                              borderRadius: '60px',
                              background: 'radial-gradient(ellipse at center, rgba(82, 224, 203, 0.95) 0%, rgba(31, 165, 255, 0.75) 45%, transparent 75%)',
                              animation: 'pulseAiGlow 2.6s ease-in-out infinite',
                              pointerEvents: 'none',
                              zIndex: 1,
                            }}
                          />
                        </>
                      )}

                      {/* Diamond Shape */}
                      <div
                        style={{
                          width: '350px',
                          height: '84px',
                          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                          background: isAiLayer
                            ? 'linear-gradient(90deg, #52E0CB 0%, #1FA5FF 50%, #1852EB 100%)'
                            : 'rgba(255, 255, 255, 0.08)',
                          border: isAiLayer ? '1px solid #52E0CB' : '1px solid rgba(255, 255, 255, 0.25)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          padding: '0 36px',
                          position: 'relative',
                          zIndex: 5,
                        }}
                      >
                        <div
                          style={{
                            fontSize: '13.5px',
                            fontWeight: 800,
                            letterSpacing: '0.08em',
                            color: isAiLayer ? '#0A1128' : '#FFFFFF',
                            marginBottom: '2px',
                            textTransform: 'uppercase',
                          }}
                        >
                          {layer.title}
                        </div>

                        <div
                          style={{
                            fontSize: '11px',
                            fontWeight: isAiLayer ? 700 : 500,
                            color: isAiLayer ? 'rgba(10, 17, 40, 0.85)' : 'rgba(255, 255, 255, 0.65)',
                          }}
                        >
                          {layer.desc}
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIX AREAS. ONE CONNECTED AGENDA SECTION (Selected by Default: 02 AI & Intelligent Enterprise) */}
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
          {/* Top Header Flex */}
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

          {/* Interactive Connected Pills Navigation Container */}
          <div
            style={{ position: 'relative', width: '100%' }}
          >
            {/* Horizontal Pill Grid (6 connected pill boxes) */}
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
                    {/* Badge Number Box */}
                    <span
                      style={{
                        background: isCurrentActive
                          ? '#070D22'
                          : 'rgba(255, 255, 255, 0.15)',
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

                    {/* Pill Text */}
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

            {/* SVG Curving Connection Arc Lines Overlay & Centered Node Ellipses */}
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
                { src: 4, tgt: 5, depth: 60 },
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
                const currentActivePill = activeConnectedPill ?? 1;
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

      {/* 3. SUCCESSFUL ENTERPRISE AI REQUIRES MORE THAN DEPLOYING MODELS */}
      <section style={{ padding: '100px 0', background: '#FFFFFF' }}>
        <div className="section-container">
          <div style={{ marginBottom: '52px' }}>
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
                WHAT IT ACTUALLY TAKES
              </span>
            </div>

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
              Successful enterprise AI requires<br />
              more than deploying models.
            </h2>
            <p
              style={{
                fontSize: '15.5px',
                color: '#64748B',
                maxWidth: '680px',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Seven things have to be true before an AI capability can carry real business weight.
            </p>
          </div>

          {/* 7 Cards Grid matching uploaded screenshot */}
          <div
            className="approach-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
          >
            {approachCards.map((card, idx) => {
              const isHovered = hoveredCard === idx;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onTouchStart={() => setHoveredCard(idx)}
                  onClick={() => setHoveredCard(hoveredCard === idx ? null : idx)}
                  style={{
                    background: isHovered ? '#070D22' : '#F4F7FB',
                    color: isHovered ? '#FFFFFF' : '#0A1128',
                    borderRadius: '16px',
                    padding: '28px 24px',
                    border: isHovered ? '1px solid #070D22' : '1px solid #E2E8F0',
                    boxShadow: isHovered
                      ? '0 16px 40px rgba(7, 13, 34, 0.22)'
                      : '0 4px 14px rgba(0, 0, 0, 0.02)',
                    transform: isHovered ? 'translateY(-5px)' : 'none',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '190px',
                    cursor: 'pointer',
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '12px',
                        fontWeight: 800,
                        color: isHovered ? '#52E0CB' : '#265CF4',
                        marginBottom: '16px',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {card.id}
                    </span>
                    <h3
                      style={{
                        fontSize: '17.5px',
                        fontWeight: 800,
                        margin: '0 0 10px 0',
                        lineHeight: 1.3,
                        color: isHovered ? '#FFFFFF' : '#0A1128',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: '13px',
                      color: isHovered ? 'rgba(255, 255, 255, 0.75)' : '#64748B',
                      lineHeight: 1.5,
                      margin: 0,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FOUR-STAGE FRAMEWORK (IDENTIFY. FOUND. BUILD. EMBED.) */}
      <section style={{ padding: '100px 0', background: '#051233', color: '#FFFFFF' }}>
        <div className="section-container">
          <div style={{ marginBottom: '52px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
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
                HOW AJILEDONE WORKS
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(34px, 4.2vw, 50px)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '16px',
              }}
            >
              Identify. Found. Build. Embed.
            </h2>
            <p
              style={{
                fontSize: '15.5px',
                color: 'rgba(255, 255, 255, 0.75)',
                maxWidth: '680px',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Ajiledone helps organizations identify high-value AI opportunities, create enterprise AI foundations, build intelligent solutions and embed AI directly into business processes.
            </p>
          </div>

          {/* 4 Interlocking Chevron Arrow Cards */}
          <div
            className="framework-chevron-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              margin: '0 auto',
            }}
          >
            {frameworkSteps.map((step) => {
              const activeIdx = hoveredFrameworkStep !== null ? hoveredFrameworkStep : frameworkStepIndex;
              const isActive = activeIdx === step.id;
              const isFirst = step.id === 0;

              return (
                <div
                  key={step.id}
                  className={`framework-chevron-card ${isFirst ? 'is-first-chevron' : ''}`}
                  onMouseEnter={() => setHoveredFrameworkStep(step.id)}
                  onMouseLeave={() => setHoveredFrameworkStep(null)}
                  onClick={() => setFrameworkStepIndex(step.id)}
                  style={{
                    flex: isActive ? 1.15 : 0.95,
                    background: isActive
                      ? '#52E0CB'
                      : 'rgba(255, 255, 255, 0.08)',
                    color: isActive ? '#0A1128' : '#FFFFFF',
                    border: isActive ? '1px solid #52E0CB' : '1px solid rgba(255, 255, 255, 0.18)',
                    padding: isFirst ? '22px 38px 22px 28px' : '22px 38px 22px 54px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    minHeight: '165px',
                    marginLeft: isFirst ? 0 : '-22px',
                    clipPath: isFirst
                      ? 'polygon(0% 0%, 88% 0%, 100% 50%, 88% 100%, 0% 100%)'
                      : 'polygon(0% 0%, 88% 0%, 100% 50%, 88% 100%, 0% 100%, 12% 50%)',
                    filter: isActive ? 'drop-shadow(0 10px 25px rgba(82, 224, 203, 0.5))' : 'none',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: isActive ? 10 : 4 - step.id,
                    transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div
                    style={{
                      maxWidth: '200px',
                      width: '100%',
                      margin: '0 auto',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <span
                      className="framework-chevron-num"
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        color: isActive ? '#0A1128' : '#52E0CB',
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      {step.num}
                    </span>
                    <h3
                      className="framework-chevron-label"
                      style={{
                        fontSize: '22px',
                        fontWeight: 800,
                        margin: '0 0 6px 0',
                        color: isActive ? '#0A1128' : '#FFFFFF',
                        lineHeight: 1.15,
                        textAlign: 'center',
                      }}
                    >
                      {step.label}
                    </h3>
                    <p
                      className="framework-chevron-desc"
                      style={{
                        fontSize: '12.5px',
                        color: isActive ? 'rgba(10, 17, 40, 0.85)' : 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.4,
                        margin: 0,
                        textAlign: 'center',
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FIVE CAPABILITY GROUPS SECTION */}
      <section style={{ padding: '110px 0', background: '#FFFFFF' }}>
        <div className="section-container">
          {/* Header Flex */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '64px',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
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
                  OUR AI CAPABILITIES
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(34px, 4.2vw, 50px)',
                  fontWeight: 800,
                  color: '#0A1128',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  margin: 0,
                }}
              >
                Five capability groups.
              </h2>
            </div>

            <div
              style={{
                fontSize: '13.5px',
                fontWeight: 600,
                color: '#64748B',
                letterSpacing: '0.02em',
              }}
            >
              Generative &bull; Agentic &bull; Applied &bull; Engineering &bull; Responsible
            </div>
          </div>

          {/* 5 Capability Group Cards with Dynamic Image Zoom, Badge Glow & Interactive Tag Pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '90px' }}>
            {capabilityGroups.map((group) => {
              const isGroupHovered = hoveredGroup === group.id;
              const activeTagIdx = activeGroupTags[group.id] ?? 0;

              return (
                <div
                  key={group.id}
                  onMouseEnter={() => setHoveredGroup(group.id)}
                  onMouseLeave={() => setHoveredGroup(null)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '56px',
                    alignItems: 'center',
                    padding: '24px',
                    borderRadius: '24px',
                    background: isGroupHovered ? 'rgba(248, 250, 252, 0.8)' : 'transparent',
                    border: isGroupHovered ? '1px solid rgba(82, 224, 203, 0.4)' : '1px solid transparent',
                    transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {/* Image Container with Badges */}
                  <div
                    style={{
                      order: group.reverse ? 2 : 1,
                      borderRadius: '20px',
                      overflow: 'hidden',
                      height: '320px',
                      position: 'relative',
                      boxShadow: isGroupHovered
                        ? '0 24px 50px rgba(10, 17, 40, 0.16)'
                        : '0 16px 40px rgba(10, 17, 40, 0.08)',
                      transition: 'all 0.45s ease',
                    }}
                  >
                    <img
                      src={group.img}
                      alt={group.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: isGroupHovered ? 'scale(1.06)' : 'scale(1)',
                        transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />

                    {/* Top-Left Cyan Capabilities Badge */}
                    <span
                      style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: '#52E0CB',
                        color: '#0A1128',
                        fontSize: '11px',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        padding: '6px 12px',
                        borderRadius: '16px',
                        zIndex: 5,
                        boxShadow: isGroupHovered
                          ? '0 6px 20px rgba(82, 224, 203, 0.6)'
                          : '0 4px 12px rgba(0, 0, 0, 0.15)',
                        transform: isGroupHovered ? 'scale(1.05)' : 'scale(1)',
                        transition: 'all 0.35s ease',
                      }}
                    >
                      {group.capCountTag}
                    </span>

                    {/* Bottom-Left Large Translucent Number Overlay */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '24px',
                        fontSize: '68px',
                        fontWeight: 800,
                        color: isGroupHovered ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.45)',
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        zIndex: 5,
                        userSelect: 'none',
                        transition: 'all 0.45s ease',
                      }}
                    >
                      {group.largeNumber}
                    </span>
                  </div>

                  {/* Content Block */}
                  <div style={{ order: group.reverse ? 1 : 2 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '14px',
                      }}
                    >
                      <div
                        style={{
                          width: isGroupHovered ? '28px' : '16px',
                          height: '2px',
                          backgroundColor: isGroupHovered ? '#265CF4' : '#64748B',
                          borderRadius: '1px',
                          transition: 'all 0.35s ease',
                        }}
                      />
                      <span
                        style={{
                          color: isGroupHovered ? '#265CF4' : '#64748B',
                          fontSize: '11.5px',
                          fontWeight: 800,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          transition: 'all 0.35s ease',
                        }}
                      >
                        {group.groupTag}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '32px',
                        fontWeight: 800,
                        color: '#0A1128',
                        marginBottom: '12px',
                        lineHeight: 1.2,
                        transform: isGroupHovered ? 'translateX(4px)' : 'none',
                        transition: 'transform 0.35s ease',
                      }}
                    >
                      {group.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '15px',
                        color: '#64748B',
                        lineHeight: 1.6,
                        marginBottom: '26px',
                      }}
                    >
                      {group.desc}
                    </p>

                    {/* Capability Tag Pills Grid with Dynamic Hover */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {group.tags.map((tag, idx) => {
                        const isSelectedTag = activeTagIdx === idx;
                        return (
                          <span
                            key={idx}
                            onMouseEnter={() =>
                              setActiveGroupTags((prev) => ({ ...prev, [group.id]: idx }))
                            }
                            style={{
                              background: isSelectedTag ? '#0A1128' : '#F1F5F9',
                              color: isSelectedTag ? '#FFFFFF' : '#334155',
                              fontSize: '12px',
                              fontWeight: 700,
                              padding: '7px 16px',
                              borderRadius: '20px',
                              border: isSelectedTag ? '1px solid #0A1128' : '1px solid #E2E8F0',
                              boxShadow: isSelectedTag
                                ? '0 6px 16px rgba(10, 17, 40, 0.2)'
                                : 'none',
                              transform: isSelectedTag ? 'translateY(-2px)' : 'none',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer',
                            }}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. THE OBJECTIVE SECTION (Hero Background Gradient + #67DFCB 22% Ellipse Glow) */}
      <section
        style={{
          padding: '110px 0',
          background: 'linear-gradient(135deg, #06143E 0%, #0D2A75 45%, #1B4AC7 100%)',
          color: '#FFFFFF',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Ellipse Radial Glow (#67DFCB 22% opacity, 620px x 620px) */}
        <div
          style={{
            position: 'absolute',
            width: '620px',
            height: '620px',
            top: '60px',
            right: '-100px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(103, 223, 203, 0.22) 0%, rgba(103, 223, 203, 0) 70%)',
            filter: 'blur(120px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Secondary Soft Left Accent Blur */}
        <div
          style={{
            position: 'absolute',
            width: '520px',
            height: '520px',
            bottom: '-120px',
            left: '-120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(31, 165, 255, 0.15) 0%, rgba(31, 165, 255, 0) 70%)',
            filter: 'blur(140px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Top Tag: — THE OBJECTIVE — */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              color: '#67DFCB',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            <div style={{ width: '20px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
            <span>THE OBJECTIVE</span>
            <div style={{ width: '20px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
          </div>

          {/* First Line: "The objective is not simply to implement AI." with Solid #67DFCB Strike Line */}
          <div
            className="objective-strikethrough-container"
            style={{
              position: 'relative',
              display: 'inline-block',
              marginBottom: '28px',
              maxWidth: '100%',
            }}
          >
            <p
              className="objective-strikethrough-text"
              style={{
                fontSize: 'clamp(13.5px, 2.6vw, 30px)',
                color: objectiveStep >= 2 ? 'rgba(255, 255, 255, 0.45)' : 'rgba(255, 255, 255, 0.95)',
                fontWeight: 600,
                margin: 0,
                whiteSpace: 'nowrap',
                lineHeight: 1.2,
                transition: 'color 0.6s ease',
              }}
            >
              The objective is not simply to implement AI.
            </p>

            {/* Dynamic Solid Mint Strike Line Moving Left to Right (No Glow, Cuts Directly Through Words) */}
            <div
              className="objective-strikethrough-line"
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                height: '3.5px',
                backgroundColor: '#67DFCB',
                boxShadow: 'none',
                borderRadius: '2px',
                transform: 'translateY(-50%)',
                width: objectiveStep >= 1 ? '100%' : '0%',
                transition: objectiveStep === 0 ? 'none' : 'width 2.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </div>

          {/* Main Headline: Appears after strike line finishes! */}
          <div
            style={{
              opacity: objectiveStep >= 2 ? 1 : 0,
              transform: objectiveStep >= 2 ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.96)',
              transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(38px, 5.2vw, 68px)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.1,
                margin: '0 0 20px 0',
                letterSpacing: '-0.03em',
              }}
            >
              It is to redesign<br />
              how work gets done.
            </h2>

            {/* Solid Mint Accent Underline Bar (No Glow) */}
            <div
              style={{
                width: objectiveStep >= 2 ? '240px' : '0px',
                height: '3.5px',
                backgroundColor: '#67DFCB',
                boxShadow: 'none',
                borderRadius: '2px',
                margin: '0 auto 40px',
                transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
              }}
            />

            {/* 3 Pill Badges */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '44px',
              }}
            >
              {[
                'Processes redesigned',
                'Decisions augmented',
                'Work reimagined',
              ].map((pill, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#FFFFFF',
                    padding: '9px 24px',
                    borderRadius: '30px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    backdropFilter: 'blur(10px)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#67DFCB',
                      boxShadow: 'none',
                      display: 'inline-block',
                    }}
                  />
                  {pill}
                </span>
              ))}
            </div>

            {/* CTA Button: Talk to Ajiledone about AI */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#contact');
              }}
              style={{
                background: '#FFFFFF',
                color: '#1B4AC7',
                padding: '16px 36px',
                borderRadius: '30px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#52E0CB';
                e.currentTarget.style.color = '#0A1128';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(82, 224, 203, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.color = '#1B4AC7';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.25)';
              }}
            >
              Talk to Ajiledone about AI <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 7. CONTACT CTA BRAND BANNER (Identical to Who We Are Page) */}
      <section
        style={{
          padding: '80px 0',
          background: 'linear-gradient(90deg, #1852EB 0%, #1F7CF7 50%, #22A7FF 100%)',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
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
            position: 'relative',
            zIndex: 10,
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
                fontFamily: "'Inter', sans-serif",
              }}
            >
              DON'T BE WEIRD
            </div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.2,
                fontFamily: "'Inter', sans-serif",
                margin: 0,
                maxWidth: '680px',
              }}
            >
              Would you like more information, or<br />
              do you have a question?
            </h2>
          </div>

          <button
            onClick={() => onNavigate('#contact')}
            style={{
              background: '#FFFFFF',
              color: '#1E69F5',
              fontWeight: 700,
              fontSize: '14px',
              padding: '13px 28px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
              fontFamily: "'Inter', sans-serif",
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
            }}
          >
            Contact us
          </button>
        </div>
      </section>
    </div>
  );
};
