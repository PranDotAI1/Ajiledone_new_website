import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface DataAndIntelligencePageProps {
  onNavigate: (anchor: string) => void;
}

export const DataAndIntelligencePage: React.FC<DataAndIntelligencePageProps> = ({ onNavigate }) => {
  const [hoveredHeroLayer, setHoveredHeroLayer] = useState<number | null>(null);

  const heroLayers = [
    {
      id: 0,
      title: 'BUSINESS APPLICATIONS',
      desc: 'SAP · Oracle · Salesforce · Custom App',
    },
    {
      id: 1,
      title: 'ANALYTICS & AI LAYER',
      desc: 'BI Dashboards · Predictive ML · GenAI',
    },
    {
      id: 2,
      title: 'DATA PLATFORM & MESH',
      desc: 'Databricks · Snowflake · Lakehouse',
    },
    {
      id: 3,
      title: 'DATA SOURCES',
      desc: 'ERP · CRM · IoT · External Streams',
    },
  ];

  const [activeConnectedPill, setActiveConnectedPill] = useState<number | null>(2);

  const connectedAreasList = [
    { id: '01', title: 'Business & Technology Transformation' },
    { id: '02', title: 'AI & Intelligent Enterprise' },
    { id: '03', title: 'Data & Intelligence' },
    { id: '04', title: 'Enterprise Platforms' },
    { id: '05', title: 'Cloud & Modernization' },
    { id: '06', title: 'Digital Engineering' },
  ];

  const interconnectedMap: Record<number, number[]> = {
    0: [3, 5],
    1: [3, 5],
    2: [3],    // 03 Data & Intelligence -> 04 Platforms
    3: [0, 1, 2, 4, 5],
    4: [3],
    5: [0, 1, 3],
  };

  const challengeCards = [
    {
      id: '01',
      title: 'Fragmented data',
      desc: 'Isolated data stores with conflicting metrics across teams.',
    },
    {
      id: '02',
      title: 'Siloed platforms',
      desc: 'Legacy databases unable to scale or stream in real time.',
    },
    {
      id: '03',
      title: 'Inconsistent definitions',
      desc: 'No single source of truth for core business entities.',
    },
    {
      id: '04',
      title: 'Governed data foundation',
      desc: 'Unified, cataloged, and trusted data assets.',
    },
    {
      id: '05',
      title: 'Business decisions',
      desc: 'Real-time analytics and AI driving measurable outcomes.',
    },
  ];

  const [hoveredChallengeCard, setHoveredChallengeCard] = useState<number | null>(null);

  const [outcomeStepIndex, setOutcomeStepIndex] = useState<number>(0);
  const [hoveredOutcomeStep, setHoveredOutcomeStep] = useState<number | null>(null);

  useEffect(() => {
    if (hoveredOutcomeStep !== null) return;
    const timer = setInterval(() => {
      setOutcomeStepIndex((prev) => (prev + 1) % 4);
    }, 2600);
    return () => clearInterval(timer);
  }, [hoveredOutcomeStep]);

  const outcomeSteps = [
    {
      id: 0,
      num: '01',
      label: 'Operations & reporting',
      desc: 'Real-time dashboards, financial reporting, and operational visibility.',
    },
    {
      id: 1,
      num: '02',
      label: 'Advanced analytics',
      desc: 'Predictive models, customer insights, and trend forecasting.',
    },
    {
      id: 2,
      num: '03',
      label: 'Automation',
      desc: 'Automated workflows, data pipelines, and robotic process integration.',
    },
    {
      id: 3,
      num: '04',
      label: 'Analytics & AI',
      desc: 'Retrieval-augmented generation, custom LLMs, and autonomous agents.',
    },
  ];

  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
  const [activeGroupTags, setActiveGroupTags] = useState<Record<string, number>>({});

  const capabilityGroups = [
    {
      id: '01',
      groupTag: 'GROUP 01',
      title: 'Data Strategy',
      desc: 'Where the data estate is going, and what has to change to get there.',
      img: '/images/Ourcapabilities1.png',
      reverse: false,
      capCountTag: '4 CAPABILITIES',
      largeNumber: '01',
      tags: [
        'Data Operating Models',
        'Enterprise Data Architecture',
        'Data Modernization Roadmaps',
        'Data Governance Strategy',
      ],
    },
    {
      id: '02',
      groupTag: 'GROUP 02',
      title: 'Data Engineering',
      desc: 'Moving data reliably, at the speed the business needs it.',
      img: '/images/Ourcapabilities2.png',
      reverse: true,
      capCountTag: '5 CAPABILITIES',
      largeNumber: '02',
      tags: [
        'ETL / ELT',
        'Data Pipelines',
        'Real-Time Streaming',
        'Enterprise Integration',
        'Data Migration',
      ],
    },
    {
      id: '03',
      groupTag: 'GROUP 03',
      title: 'Modern Data Platforms',
      desc: 'The architecture the rest of the estate is built on.',
      img: '/images/Ourcapabilities3.png',
      reverse: false,
      capCountTag: '5 CAPABILITIES',
      largeNumber: '03',
      tags: [
        'Lakehouse',
        'Data Lakes',
        'Data Warehouses',
        'Data Fabric',
        'Data Mesh',
      ],
    },
    {
      id: '04',
      groupTag: 'GROUP 04',
      title: 'Data Governance',
      desc: 'Definitions, quality and control that make data trustworthy.',
      img: '/images/Ourcapabilities4.png',
      reverse: true,
      capCountTag: '6 CAPABILITIES',
      largeNumber: '04',
      tags: [
        'Master Data Management',
        'Data Quality',
        'Metadata Management',
        'Data Security',
        'Data Lineage',
        'Governance',
      ],
    },
    {
      id: '05',
      groupTag: 'GROUP 05',
      title: 'Analytics & Intelligence',
      desc: 'Turning governed information into decisions people act on.',
      img: '/images/Ourcapabilities5.png',
      reverse: false,
      capCountTag: '6 CAPABILITIES',
      largeNumber: '05',
      tags: [
        'Business Intelligence',
        'Advanced Analytics',
        'Predictive Analytics',
        'Real-Time Analytics',
        'Data Science',
        'Decision Intelligence',
      ],
    },
  ];

  const platformCards = [
    { name: 'Databricks', category: 'Lakehouse' },
    { name: 'Snowflake', category: 'Data Cloud' },
    { name: 'AWS Lake Formation', category: 'Cloud Infrastructure' },
    { name: 'Azure Synapse', category: 'Analytics Platform' },
    { name: 'Google BigQuery', category: 'Cloud Data Warehouse' },
    { name: 'dbt Labs', category: 'Data Transformation' },
    { name: 'Fivetran', category: 'Automated Ingestion' },
    { name: 'Apache Airflow', category: 'Workflow Orchestration' },
    { name: 'Power BI', category: 'Enterprise BI' },
    { name: 'Tableau', category: 'Data Visualization' },
    { name: 'Collibra', category: 'Data Governance' },
    { name: 'Alation', category: 'Data Catalog' },
  ];

  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null);

  const [objectiveStep, setObjectiveStep] = useState<number>(0);
  const [sweepProgress, setSweepProgress] = useState<number>(0); // 0.0 -> 1.0 continuous smooth float
  const [funnelProgress, setFunnelProgress] = useState<number>(0); // 0.0 -> 1.0 continuous smooth float for funnel

  useEffect(() => {
    let animId: number;
    let startTime: number | null = null;
    const duration = 8800; // 8.8s smooth slow continuous loop

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = ((timestamp - startTime) % duration) / duration;
      setSweepProgress(progress);
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    let animId: number;
    let startTime: number | null = null;
    const duration = 9800; // 9.8s smooth slow continuous unrolling sweep

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = ((timestamp - startTime) % duration) / duration;
      setFunnelProgress(progress);
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  const [whereStep, setWhereStep] = useState<number>(0);

  useEffect(() => {
    let t1: NodeJS.Timeout, t2: NodeJS.Timeout, t3: NodeJS.Timeout, t4: NodeJS.Timeout, t5: NodeJS.Timeout;

    const runWhereSequence = () => {
      setWhereStep(0);
      t1 = setTimeout(() => setWhereStep(1), 300);  // Tag & Line 1
      t2 = setTimeout(() => setWhereStep(2), 700); // Line 2
      t3 = setTimeout(() => setWhereStep(3), 1100); // Accent Cyan Bar
      t4 = setTimeout(() => setWhereStep(4), 1500); // 4 Pills
      t5 = setTimeout(() => setWhereStep(5), 1900); // CTA Button
    };

    const targetEl = document.getElementById('where-data-meets-business') || document.querySelector('section');
    if (targetEl) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            observer.unobserve(entries[0].target);
            runWhereSequence();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(targetEl);
      return () => {
        clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5);
        observer.disconnect();
      };
    } else {
      runWhereSequence();
      return () => {
        clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5);
      };
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#0A1128', backgroundColor: '#FFFFFF' }}>
      {/* 1. HERO SECTION (Our Vision Hero Background Gradient: linear-gradient(135deg, #06143E 0%, #0D2A75 45%, #1B4AC7 100%)) */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0 110px',
          background: 'linear-gradient(135deg, #06143E 0%, #0D2A75 45%, #1B4AC7 100%)',
          color: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        {/* Vertical Grid Overlay from Our Vision Page */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '8% 100%',
            pointerEvents: 'none',
          }}
        />

        {/* Our Vision Radial Glow Layer 1: Ellipse 600px x 600px, #1FA5FF (35%), Blur 220px */}
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
            pointerEvents: 'none',
          }}
        />

        {/* Our Vision Radial Glow Layer 2: Ellipse 520px x 520px, #52E0CB (28%), Blur 180px */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '-60px',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'rgba(82, 224, 203, 0.28)',
            filter: 'blur(180px)',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Breadcrumb Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.65)',
              marginBottom: '36px',
            }}
          >
            <span
              onClick={() => onNavigate('/')}
              style={{ cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
            >
              Home
            </span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span
              onClick={() => onNavigate('#what-we-do')}
              style={{ cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
            >
              What we do
            </span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Data &amp; Intelligence</span>
          </div>

          <div
            className="hero-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.05fr',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            {/* Left Hero Content Column */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#52E0CB',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                <div style={{ width: '20px', height: '2px', backgroundColor: '#52E0CB', borderRadius: '1px' }} />
                <span>03 &bull; DATA &amp; INTELLIGENCE</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(40px, 4.8vw, 62px)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                  color: '#FFFFFF',
                }}
              >
                Data is the<br />
                foundation of the<br />
                intelligent enterprise.
              </h1>

              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '36px',
                  maxWidth: '500px',
                }}
              >
                Most enterprises do not suffer from a lack of data. They suffer from data they cannot trust, reach or act on quickly enough.
              </p>

              {/* Dual Hero CTA Buttons (Colorless default, solid color on hover) */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
                <a
                  href="#capabilities"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#capabilities');
                  }}
                  style={{
                    background: 'transparent',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    padding: '14px 32px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: 'none',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#1852EB';
                    e.currentTarget.style.borderColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Explore data capabilities
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#contact');
                  }}
                  style={{
                    background: 'transparent',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    padding: '14px 32px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#1852EB';
                    e.currentTarget.style.borderColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Talk to Ajiledone
                </a>
              </div>

              {/* Bottom Sub-Tag List */}
              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#52E0CB',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                <span>REPORTING</span>
                <span>&bull;</span>
                <span>ANALYTICS</span>
                <span>&bull;</span>
                <span>AUTOMATION</span>
                <span>&bull;</span>
                <span>AI</span>
              </div>
            </div>

            {/* Right Side Matrix Diagram Column */}
            <div
              className="matrix-grid-container"
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              {/* Header Labels: FRAGMENTED vs TRUSTED */}
              <div
                className="matrix-grid-labels"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  width: '100%',
                  maxWidth: '426px',
                }}
              >
                <span
                  style={{
                    color: 'rgba(255, 255, 255, 0.45)',
                    opacity: sweepProgress < 0.6 ? 1 : 0.6,
                    transition: 'opacity 0.4s ease',
                  }}
                >
                  FRAGMENTED
                </span>
                <span
                  style={{
                    color: '#67DFCB',
                    opacity: Math.max(0.15, Math.min(1, (sweepProgress - 0.5) / 0.38)),
                    transform: sweepProgress >= 0.85 ? 'scale(1.08)' : 'scale(1)',
                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                  }}
                >
                  {sweepProgress >= 0.85 ? '● TRUSTED' : 'TRUSTED'}
                </span>
              </div>

              {/* 12x12 Matrix Grid Nodes */}
              <div
                className="matrix-grid-box"
                style={{
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '6px',
                  marginBottom: '20px',
                  maxWidth: '426px',
                  width: '100%',
                }}
              >
                {Array.from({ length: 144 }).map((_, idx) => {
                  const row = Math.floor(idx / 12);
                  const col = idx % 12;

                  const isLeftFragmented =
                    (row === 0 && (col === 2 || col === 3 || col === 4)) ||
                    (row === 1 && (col === 1 || col === 2 || col === 4)) ||
                    (row === 2 && (col === 1 || col === 2)) ||
                    (row === 3 && (col === 4 || col === 5)) ||
                    (row === 4 && (col === 3 || col === 4 || col === 5)) ||
                    (row === 5 && (col === 2 || col === 3 || col === 4)) ||
                    (row === 6 && (col === 2 || col === 3 || col === 4)) ||
                    (row === 7 && (col === 1 || col === 2)) ||
                    (row === 8 && (col === 1 || col === 2)) ||
                    (row === 9 && (col === 3 || col === 4)) ||
                    (row === 10 && (col === 2 || col === 3)) ||
                    (row === 11 && (col === 2 || col === 3));

                  const isMainGrid = col >= 5;

                  const isMintSquare =
                    (row === 0 && col === 9) ||
                    (row === 2 && col === 11) ||
                    (row === 3 && col === 10) ||
                    (row === 4 && col === 9) ||
                    (row === 5 && col === 8) ||
                    (row === 7 && col === 11) ||
                    (row === 8 && col === 10) ||
                    (row === 9 && col === 9) ||
                    (row === 10 && col === 8);

                  if (!isLeftFragmented && !isMainGrid) {
                    return <div key={idx} style={{ width: '30px', height: '30px' }} />;
                  }

                  const nodeOpacity = (0.08 + (col / 11) * 0.22).toFixed(2);
                  
                  // Functional Group Reveal Logic (Group 0: Cols 0-3 | Group 1: Cols 4-7 | Group 2: Cols 8-11)
                  const groupIndex = Math.floor(col / 4);
                  const groupThresholds = [0.05, 0.38, 0.70];
                  const isGroupRevealed = sweepProgress >= groupThresholds[groupIndex];

                  return (
                    <div
                      key={idx}
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '6px',
                        backgroundColor: isMintSquare
                          ? '#67DFCB'
                          : `rgba(255, 255, 255, ${nodeOpacity})`,
                        boxShadow:
                          isGroupRevealed && isMintSquare && sweepProgress >= 0.85
                            ? '0 0 14px rgba(103, 223, 203, 0.7)'
                            : 'none',
                        position: 'relative',
                        zIndex: isMintSquare ? 2 : 1,
                        opacity: isGroupRevealed ? 1 : 0.04,
                        transform: isGroupRevealed
                          ? isMintSquare && sweepProgress >= 0.85
                            ? 'scale(1.08)'
                            : 'scale(1) translateY(0)'
                          : 'scale(0.85) translateY(4px)',
                        transition: 'opacity 0.85s ease-out, transform 0.85s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }}
                    />
                  );
                })}
              </div>

              {/* Bottom Horizontal Axis Line with Arrow Leading Tip */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '426px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {/* Background Line Track */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '1.5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '1px',
                  }}
                />

                {/* Active Cyan Fill Line terminating EXACTLY at the arrow base */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    width: `${Math.min(95, sweepProgress * 95)}%`,
                    height: '2px',
                    backgroundColor: '#67DFCB',
                    borderRadius: '1px',
                  }}
                />

                {/* Arrowhead positioned seamlessly at the leading front tip of the cyan line */}
                <div
                  style={{
                    position: 'absolute',
                    left: `${Math.min(95, sweepProgress * 95)}%`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'translateX(-2px)',
                    zIndex: 3,
                  }}
                >
                  <ArrowRight size={16} color="#67DFCB" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIX AREAS. ONE CONNECTED AGENDA SECTION (Pre-Selected: 03 Data & Intelligence) */}
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
                const currentActivePill = activeConnectedPill;
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

      {/* 3. THE REAL PROBLEM SECTION */}
      <section style={{ padding: '100px 0', background: '#FFFFFF' }}>
        <div className="section-container">
          {/* Header Tag, Heading & Subhead */}
          <div style={{ marginBottom: '48px' }}>
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
                THE REAL PROBLEM
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(34px, 4vw, 50px)',
                fontWeight: 800,
                color: '#0A1128',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '18px',
              }}
            >
              Most enterprises do not suffer<br />
              from a lack of data.
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#64748B',
                maxWidth: '720px',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              They suffer from fragmented data, inconsistent definitions, legacy architectures, slow access and limited ability to convert information into action.
            </p>
          </div>

          {/* Diagram Container */}
          <div style={{ position: 'relative', width: '100%', marginBottom: '28px' }}>
            {/* Top Category Labels */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                padding: '0 4px',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#94A3B8',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  opacity: funnelProgress >= 0.02 ? 1 : 0,
                  transform: funnelProgress >= 0.02 ? 'translateX(0)' : 'translateX(-10px)',
                  transition: 'all 0.5s ease',
                }}
              >
                ALL YOUR ENTERPRISE DATA
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#265CF4',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  opacity: funnelProgress >= 0.78 ? 1 : 0,
                  transform: funnelProgress >= 0.78 ? 'scale(1)' : 'scale(0.85)',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                ACTION
              </span>
            </div>

            {/* Dynamic Tapering Funnel Banner Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '220px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* Dynamic Tapering Polygon Funnel SVG (Propagates physically from left to right) */}
              {(() => {
                const currentT = Math.min(1, Math.max(0.01, funnelProgress * 1.15));
                const currentX = currentT * 1000;
                const currentTopY = 15 + 60 * currentT;
                const currentBottomY = 185 - 60 * currentT;

                return (
                  <svg
                    viewBox="0 0 1000 200"
                    preserveAspectRatio="none"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      overflow: 'visible',
                    }}
                  >
                    <defs>
                      <linearGradient id="realProblemFunnelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F2F6FE" stopOpacity="0.95" />
                        <stop offset="50%" stopColor="#89ABF8" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#265CF4" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    {/* Propagating Polygon Funnel Shape */}
                    <polygon
                      points={`0,15 ${currentX},${currentTopY} ${currentX},${currentBottomY} 0,185`}
                      fill="url(#realProblemFunnelGrad)"
                    />
                    {/* Glowing Leading Edge Front Line */}
                    <line
                      x1={currentX}
                      y1={currentTopY}
                      x2={currentX}
                      y2={currentBottomY}
                      stroke="#265CF4"
                      strokeWidth="3.5"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(38, 92, 244, 0.8))',
                      }}
                    />
                  </svg>
                );
              })()}

              {/* 5 Floating Pill Badges (Appears dynamically as funnel sweeps left to right) */}
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {[
                  {
                    title: 'Fragmented data',
                    left: '2%',
                    top: '16px',
                    isTop: true,
                    stemHeight: '34px',
                    threshold: 0.08,
                    translateX: '0%',
                  },
                  {
                    title: 'Inconsistent definitions',
                    left: '18%',
                    bottom: '16px',
                    isTop: false,
                    stemHeight: '34px',
                    threshold: 0.25,
                    translateX: '0%',
                  },
                  {
                    title: 'Legacy architectures',
                    left: '42%',
                    top: '24px',
                    isTop: true,
                    stemHeight: '32px',
                    threshold: 0.42,
                    translateX: '-20%',
                  },
                  {
                    title: 'Slow access',
                    left: '64%',
                    bottom: '24px',
                    isTop: false,
                    stemHeight: '32px',
                    threshold: 0.60,
                    translateX: '-20%',
                  },
                  {
                    title: 'Limited ability to act',
                    left: '74%',
                    top: '32px',
                    isTop: true,
                    stemHeight: '30px',
                    threshold: 0.78,
                    translateX: '-30%',
                  },
                ].map((item, idx) => {
                  const isRevealed = funnelProgress >= item.threshold;
                  const tx = item.translateX || '0%';

                  return (
                    <div
                      key={idx}
                      className="problem-funnel-pill-wrapper"
                      style={{
                        position: 'absolute',
                        left: item.left,
                        top: item.isTop ? item.top : 'auto',
                        bottom: !item.isTop ? item.bottom : 'auto',
                        transform: isRevealed
                          ? `translateX(${tx}) translateY(0) scale(1)`
                          : item.isTop
                          ? `translateX(${tx}) translateY(-14px) scale(0.85)`
                          : `translateX(${tx}) translateY(14px) scale(0.85)`,
                        opacity: isRevealed ? 1 : 0,
                        display: 'flex',
                        flexDirection: item.isTop ? 'column' : 'column-reverse',
                        alignItems: 'center',
                        pointerEvents: 'auto',
                        zIndex: 3,
                        transition: 'opacity 0.45s ease-out, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }}
                    >
                      {/* Pill Card */}
                      <div
                        className="problem-funnel-pill-card"
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid #CBD5E1',
                          borderRadius: '24px',
                          padding: '9px 18px',
                          boxShadow: '0 10px 24px rgba(38, 92, 244, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          whiteSpace: 'nowrap',
                          fontSize: '13.5px',
                          fontWeight: 800,
                          color: '#0F172A',
                          transition: 'all 0.35s ease',
                        }}
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#265CF4',
                          }}
                        />
                        <span>{item.title}</span>
                      </div>

                      {/* Vertical Connector Stem Line */}
                      <div
                        style={{
                          width: '1.5px',
                          height: item.stemHeight,
                          backgroundColor: '#93C5FD',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Summary Caption */}
          <div style={{ marginTop: '28px' }}>
            <p
              style={{
                fontSize: '16.5px',
                fontWeight: 800,
                color: '#0A1128',
                margin: 0,
                letterSpacing: '-0.01em',
              }}
            >
              The gap is not volume. It is trust, access and the distance between information and action.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE BUILD SECTION */}
      <section
        style={{
          padding: '100px 0 90px',
          background: '#0A1230',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Figma Layer Blur Ellipse Glow (760px x 760px, rgba(38, 92, 244, 0.4), blur 250px at top: 120px) */}
        <div
          style={{
            position: 'absolute',
            top: '120px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '760px',
            height: '760px',
            borderRadius: '50%',
            background: 'rgba(38, 92, 244, 0.4)',
            filter: 'blur(250px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Header Tag, Heading & Subhead */}
          <div style={{ marginBottom: '52px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '24px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
              <span
                style={{
                  color: '#67DFCB',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                WHAT WE BUILD
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(34px, 4.2vw, 50px)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '18px',
              }}
            >
              Modern data foundations —<br />
              and everything they hold up.
            </h2>
            <p
              style={{
                fontSize: '15.5px',
                color: 'rgba(255, 255, 255, 0.72)',
                maxWidth: '700px',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Ajiledone helps organizations create modern data foundations capable of supporting operational reporting, advanced analytics, automation and artificial intelligence.
            </p>
          </div>

          {/* Floating Center Badge: THE INTELLIGENT ENTERPRISE */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                borderRadius: '24px',
                padding: '10px 28px',
                fontSize: '12px',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              }}
            >
              THE INTELLIGENT ENTERPRISE
            </div>
          </div>

          {/* 4 Architectural Capability Cards Grid */}
          <div
            className="approach-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginBottom: '28px',
            }}
          >
            {[
              {
                num: '01',
                title: 'Operational reporting',
                desc: 'What happened, reliably and on time.',
              },
              {
                num: '02',
                title: 'Advanced analytics',
                desc: 'Why it happened, and what happens next.',
              },
              {
                num: '03',
                title: 'Automation',
                desc: 'Work that runs without being pushed.',
              },
              {
                num: '04',
                title: 'Artificial intelligence',
                desc: 'Judgement, language and prediction in the flow.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '16px',
                  padding: '26px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '190px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.35s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = '#67DFCB';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{ marginBottom: '16px' }}>
                    <span
                      style={{
                        background: 'rgba(103, 223, 203, 0.15)',
                        border: '1px solid rgba(103, 223, 203, 0.4)',
                        color: '#67DFCB',
                        borderRadius: '6px',
                        padding: '4px 10px',
                        fontSize: '12px',
                        fontWeight: 800,
                        display: 'inline-block',
                      }}
                    >
                      {card.num}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '10px',
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'rgba(255, 255, 255, 0.68)',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Spanning Foundation Bar (#67DFCB to #1FA5FF Gradient) */}
          <div
            style={{
              background: 'linear-gradient(90deg, #67DFCB 0%, #1FA5FF 100%)',
              borderRadius: '16px',
              padding: '20px 32px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              boxShadow: '0 12px 30px rgba(103, 223, 203, 0.25)',
            }}
          >
            <span
              style={{
                fontSize: '14.5px',
                fontWeight: 800,
                color: '#0A1230',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              MODERN DATA FOUNDATION
            </span>
            <span
              style={{
                fontSize: '13.5px',
                fontWeight: 700,
                color: '#0A1230',
                letterSpacing: '0.04em',
              }}
            >
              Trusted &nbsp;&middot;&nbsp; Governed &nbsp;&middot;&nbsp; Connected &nbsp;&middot;&nbsp; Available
            </span>
          </div>
        </div>
      </section>

      {/* 5. FIVE CAPABILITY GROUPS SECTION */}
      <section id="capabilities" style={{ padding: '110px 0', background: '#FFFFFF' }}>
        <div className="section-container">
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
                  OUR DATA CAPABILITIES
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
              Strategy &bull; Engineering &bull; Platforms &bull; Governance &bull; Analytics
            </div>
          </div>

          {/* 5 Capability Group Cards with Dynamic Image Zoom & Interactive Tag Pills */}
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

                    {/* Figma Linear Gradient Overlay (#0D2A75 60% to 2%) */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(13, 42, 117, 0.6) 0%, rgba(13, 42, 117, 0.02) 100%)',
                        pointerEvents: 'none',
                        zIndex: 3,
                      }}
                    />

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

      {/* 6. TECHNOLOGY ECOSYSTEM — THE PLATFORMS WE BUILD ON */}
      <section
        style={{
          padding: '100px 0 90px',
          background: '#0D2A75',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Figma Layer Blur Ellipse Glow (700px x 700px, rgba(103, 223, 203, 0.2), blur 240px at top: 40px, left: 820px) */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '-100px',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'rgba(103, 223, 203, 0.2)',
            filter: 'blur(240px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Header Tag, Heading & Subhead */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '24px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
              <span
                style={{
                  color: '#67DFCB',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                TECHNOLOGY ECOSYSTEM
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
              The platforms we build on.
            </h2>
            <p
              style={{
                fontSize: '15.5px',
                color: 'rgba(255, 255, 255, 0.72)',
                maxWidth: '680px',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Platform-fluent, not platform-loyal &mdash; the architecture decides the tool, not the other way round.
            </p>
          </div>

          {/* 13 Platform Cards Grid (Screenshot 1 Layout) */}
          <div
            className="approach-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '18px',
              marginBottom: '28px',
            }}
          >
            {[
              'Databricks',
              'Snowflake',
              'Microsoft Fabric',
              'SAP Datasphere',
              'Azure Data Factory',
              'AWS Glue',
              'Spark',
              'Kafka',
              'Python',
              'SQL',
              'dbt',
              'Informatica',
              'Talend',
            ].map((platformName, idx) => {
              const isCardHovered = hoveredPlatform === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredPlatform(idx)}
                  onMouseLeave={() => setHoveredPlatform(null)}
                  style={{
                    background: isCardHovered ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.07)',
                    border: isCardHovered
                      ? '1px solid #67DFCB'
                      : '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: '14px',
                    padding: '20px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: isCardHovered ? '0 0 22px rgba(103, 223, 203, 0.35)' : 'none',
                    transform: isCardHovered ? 'translateY(-3px)' : 'none',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: isCardHovered ? '#67DFCB' : 'rgba(255, 255, 255, 0.5)',
                      boxShadow: isCardHovered ? '0 0 10px #67DFCB' : 'none',
                      transition: 'all 0.3s ease',
                      flexShrink: 0,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: '15.5px',
                      fontWeight: 800,
                      margin: 0,
                      color: '#FFFFFF',
                      lineHeight: 1.2,
                    }}
                  >
                    {platformName}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Bottom Spanning Inline Pipe-Separated List */}
          <div
            style={{
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.52)',
              letterSpacing: '0.02em',
              lineHeight: 1.6,
            }}
          >
            Databricks &nbsp;|&nbsp; Snowflake &nbsp;|&nbsp; Microsoft Fabric &nbsp;|&nbsp; SAP Datasphere &nbsp;|&nbsp; Azure Data Factory &nbsp;|&nbsp; AWS Glue &nbsp;|&nbsp; Spark &nbsp;|&nbsp; Kafka &nbsp;|&nbsp; Python &nbsp;|&nbsp; SQL &nbsp;|&nbsp; dbt &nbsp;|&nbsp; Informatica &nbsp;|&nbsp; Talend
          </div>
        </div>
      </section>

      {/* 7. WHERE IT LEADS SECTION */}
      <section
        style={{
          padding: '110px 0 100px',
          background: 'linear-gradient(135deg, #0A1230 0%, #0D2A75 45%, #1942B2 100%)',
          color: '#FFFFFF',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Figma Layer Blur Ellipse Glow (720px x 720px, rgba(103, 223, 203, 0.22), blur 230px at top: 20px, left: 50%) */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '720px',
            height: '720px',
            borderRadius: '50%',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Centered Tag: — WHERE IT LEADS — */}
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
              marginBottom: '24px',
              opacity: whereStep >= 1 ? 1 : 0,
              transform: whereStep >= 1 ? 'translateY(0)' : 'translateY(-12px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div style={{ width: '24px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
            <span>WHERE IT LEADS</span>
            <div style={{ width: '24px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
          </div>

          {/* Centered Title with Line 1 & Line 2 Sequential Reveal */}
          <h2
            style={{
              fontSize: 'clamp(38px, 5vw, 62px)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              margin: '0 auto 24px',
              letterSpacing: '-0.025em',
              maxWidth: '920px',
            }}
          >
            <span
              style={{
                display: 'block',
                opacity: whereStep >= 1 ? 1 : 0,
                transform: whereStep >= 1 ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Data is the foundation of
            </span>
            <span
              style={{
                display: 'block',
                opacity: whereStep >= 2 ? 1 : 0,
                transform: whereStep >= 2 ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              the intelligent enterprise.
            </span>
          </h2>

          {/* Cyan Mint Accent Underline Bar */}
          <div
            style={{
              width: whereStep >= 3 ? '160px' : '0px',
              height: '3.5px',
              backgroundColor: '#67DFCB',
              borderRadius: '2px',
              margin: '0 auto 36px',
              boxShadow: '0 0 16px rgba(103, 223, 203, 0.6)',
              opacity: whereStep >= 3 ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />

          {/* 4 Horizontal Pill Badges */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '44px',
            }}
          >
            {[
              'Trusted',
              'Governed',
              'Connected',
              'Ready for AI',
            ].map((pill, idx) => {
              const isPillRevealed = whereStep >= 4;

              return (
                <span
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#FFFFFF',
                    padding: '10px 24px',
                    borderRadius: '28px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    backdropFilter: 'blur(10px)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                    opacity: isPillRevealed ? 1 : 0,
                    transform: isPillRevealed
                      ? 'translateY(0) scale(1)'
                      : 'translateY(16px) scale(0.9)',
                    transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 120}ms`,
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#67DFCB',
                      display: 'inline-block',
                      boxShadow: '0 0 8px #67DFCB',
                    }}
                  />
                  {pill}
                </span>
              );
            })}
          </div>

          {/* Primary Action CTA Button */}
          <div
            style={{
              opacity: whereStep >= 5 ? 1 : 0,
              transform: whereStep >= 5 ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#contact');
              }}
              style={{
                background: '#FFFFFF',
                color: '#1942B2',
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
                e.currentTarget.style.background = '#67DFCB';
                e.currentTarget.style.color = '#0A1230';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(103, 223, 203, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.color = '#1942B2';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.25)';
              }}
            >
              Talk to Ajiledone about data <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 8. CONTACT CTA BRAND BANNER (Identical to Who We Are Page) */}
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
