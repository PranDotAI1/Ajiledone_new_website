import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Layers,
  Sparkles,
  Database,
  Cpu,
  Cloud,
  Code,
  Shield,
  Zap,
  TrendingUp,
  Workflow,
  Server,
  BarChart3,
  Lock,
} from 'lucide-react';

interface WhatWeDoPageProps {
  onNavigate: (anchor: string) => void;
  onGoHome: () => void;
}

export function WhatWeDoPage({ onNavigate, onGoHome }: WhatWeDoPageProps) {
  const [activeArea, setActiveArea] = useState<number>(0);
  const [hoveredShift, setHoveredShift] = useState<number | null>(null);
  const [heroFlowStep, setHeroFlowStep] = useState<number>(0); // 0: AMBITION, 1: Arrow Moving, 2: EXECUTION
  const [activeConnectedPill, setActiveConnectedPill] = useState<number | null>(0);
  const [hoveredCapIndex, setHoveredCapIndex] = useState<number | null>(null);
  const [activeBtPill, setActiveBtPill] = useState<number | null>(null);
  const [hoveredBtPillIndex, setHoveredBtPillIndex] = useState<number | null>(null);
  const [isCtaHovered, setIsCtaHovered] = useState<boolean>(false);

  const interconnectedMap: Record<number, number[]> = {
    0: [3, 5], // 01 Business & Tech Transformation -> 04 Platforms, 06 Digital Engineering
    1: [3, 5], // 02 AI & Intelligent Enterprise -> 04 Platforms, 06 Digital Engineering
    2: [3],    // 03 Data & Intelligence -> 04 Platforms
    3: [0, 1, 2, 4, 5], // 04 Enterprise Platforms -> 01, 02, 03, 05, 06
    4: [3],    // 05 Cloud & Modernization -> 04 Platforms
    5: [0, 1, 3], // 06 Digital Engineering -> 01, 02, 04
  };

  const [autoShiftIndex, setAutoShiftIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroFlowStep((prev) => (prev + 1) % 3);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (hoveredShift !== null) return;
    const timer = setInterval(() => {
      setAutoShiftIndex((prev) => (prev + 1) % 6);
    }, 3800);
    return () => clearInterval(timer);
  }, [hoveredShift]);

  const capabilitiesList = [
    {
      id: '01',
      title: 'Business & Technology Transformation',
      desc: 'Connecting business strategy with technology execution.',
      image: '/images/Ourcapabilities1.png',
      tags: ['Enterprise Architecture', 'Operating Models', 'Roadmaps', 'Value Realization'],
    },
    {
      id: '02',
      title: 'AI & Intelligent Enterprise',
      desc: 'Move beyond AI experimentation into everyday operations.',
      image: '/images/Ourcapabilities2.png',
      tags: ['Generative AI', 'Agentic AI', 'Applied AI', 'Responsible AI'],
    },
    {
      id: '03',
      title: 'Data & Intelligence',
      desc: 'Modern data foundations for analytics, automation and AI.',
      image: '/images/Ourcapabilities3.png',
      tags: ['Data Strategy', 'Engineering', 'Databricks', 'Governance'],
    },
    {
      id: '04',
      title: 'Enterprise Platforms',
      desc: 'Modernizing the digital core across SAP, Oracle and ServiceNow.',
      image: '/images/Ourcapabilities4.png',
      tags: ['SAP', 'Oracle', 'ServiceNow', 'Integration'],
    },
    {
      id: '05',
      title: 'Cloud & Technology Modernization',
      desc: 'A technology foundation designed for change.',
      image: '/images/Ourcapabilities5.png',
      tags: ['Cloud Strategy', 'Migration', 'Cloud Native', 'DevOps'],
    },
    {
      id: '06',
      title: 'Digital Engineering',
      desc: 'Turning ideas into scalable technology.',
      image: '/images/Ourcapabilities6.png',
      tags: ['Software', 'Experience', 'Platform', 'Quality'],
    },
  ];

  const twelveWays = [
    { id: '01', text: 'Business Transformation' },
    { id: '02', text: 'Technology Strategy' },
    { id: '03', text: 'Enterprise Architecture' },
    { id: '04', text: 'Operating Model Transformation' },
    { id: '05', text: 'Business Process Transformation' },
    { id: '06', text: 'ERP Strategy' },
    { id: '07', text: 'Digital Transformation' },
    { id: '08', text: 'Technology Modernization' },
    { id: '09', text: 'Transformation Roadmaps' },
    { id: '10', text: 'Program Governance' },
    { id: '11', text: 'Value Realization' },
    { id: '12', text: 'Technology Operating Models' },
  ];

  const sixShifts = [
    {
      id: '01',
      from: 'Fragmented processes',
      to: 'Connected enterprises',
    },
    {
      id: '02',
      from: 'Legacy platforms',
      to: 'Modern digital cores',
    },
    {
      id: '03',
      from: 'Technology silos',
      to: 'Intelligent operations',
    },
    {
      id: '04',
      from: 'Manual operations',
      to: 'Integrated data',
    },
    {
      id: '05',
      from: 'Disconnected data',
      to: 'Scalable platforms',
    },
    {
      id: '06',
      from: 'High technical debt',
      to: 'Continuous innovation',
    },
  ];

  return (
    <div className="what-we-do-page" style={{ paddingTop: '0px', fontFamily: "'Inter', sans-serif" }}>
      {/* 1. HERO SECTION */}
      <section
        style={{
          background: 'linear-gradient(135deg, #061644 0%, #0D2C7A 50%, #1A4ED0 100%)',
          color: '#FFFFFF',
          padding: '110px 0 90px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Vertical Background Grid Lines Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            pointerEvents: 'none',
            opacity: 0.08,
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={{ borderRight: '1px solid #FFFFFF', height: '100%' }} />
          ))}
        </div>

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.65)',
              marginBottom: '28px',
              fontWeight: 500,
            }}
          >
            <span
              onClick={onGoHome}
              style={{ cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
            >
              Home
            </span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>What we do</span>
          </div>

          <div
            className="hero-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
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
                <div
                  style={{
                    width: '24px',
                    height: '2px',
                    backgroundColor: '#67DFCB',
                    borderRadius: '1px',
                  }}
                />
                <span
                  style={{
                    color: '#67DFCB',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  WHAT WE DO
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontSize: 'clamp(40px, 4.8vw, 58px)',
                  fontWeight: 800,
                  lineHeight: 1.12,
                  letterSpacing: '-0.025em',
                  marginBottom: '24px',
                  color: '#FFFFFF',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                From transformation<br />
                ambition to enterprise<br />
                execution.
              </h1>

              {/* Subhead Description */}
              <p
                style={{
                  fontSize: '16.5px',
                  color: 'rgba(255, 255, 255, 0.82)',
                  lineHeight: 1.65,
                  marginBottom: '36px',
                  maxWidth: '540px',
                }}
              >
                Our capabilities span six interconnected areas — strategy, intelligence, data, platforms, cloud and engineering, working as one agenda rather than six practices.
              </p>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href="#capabilities"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('capabilities');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    background: '#FFFFFF',
                    color: '#1A4ED0',
                    padding: '14px 28px',
                    borderRadius: '30px',
                    fontWeight: 800,
                    fontSize: '14px',
                    textDecoration: 'none',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#67DFCB';
                    e.currentTarget.style.color = '#0A1230';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#1A4ED0';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  Explore the six areas
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#contact');
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    color: '#FFFFFF',
                    padding: '14px 28px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#0A1230';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  Talk to Ajiledone
                </a>
              </div>
            </div>

            {/* Right Side Visual Graphic Card */}
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingLeft: '40px',
                }}
              >
                {/* WHERE IT STARTS */}
                <div
                  style={{
                    color: heroFlowStep === 0 ? '#67DFCB' : 'rgba(255, 255, 255, 0.5)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                    opacity: heroFlowStep === 0 ? 1 : 0.6,
                    transform: heroFlowStep === 0 ? 'translateX(4px)' : 'translateX(0)',
                    textShadow: heroFlowStep === 0 ? '0 0 12px rgba(103, 223, 203, 0.8)' : 'none',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  WHERE IT STARTS
                </div>

                {/* AMBITION */}
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(44px, 5.5vw, 74px)',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: heroFlowStep === 0 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.38)',
                    opacity: heroFlowStep === 0 ? 1 : 0.6,
                    transform: heroFlowStep === 0 ? 'scale(1.03)' : 'scale(1)',
                    textShadow: heroFlowStep === 0 ? '0 0 28px rgba(255, 255, 255, 0.85)' : 'none',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  AMBITION
                </div>

                {/* Dynamic Connector Arrow & Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '24px 0 24px 12px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '2px',
                        height: '44px',
                        background: heroFlowStep === 1
                          ? 'linear-gradient(180deg, #67DFCB 0%, #FFFFFF 100%)'
                          : 'linear-gradient(180deg, rgba(103, 223, 203, 0.3) 0%, #67DFCB 100%)',
                        boxShadow: heroFlowStep === 1 ? '0 0 12px #67DFCB' : 'none',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                    <div
                      style={{
                        color: heroFlowStep === 1 ? '#FFFFFF' : '#67DFCB',
                        fontSize: '22px',
                        lineHeight: 1,
                        marginTop: '-4px',
                        transform: heroFlowStep === 1 ? 'translateY(6px) scale(1.2)' : 'translateY(0) scale(1)',
                        transition: 'all 0.6s ease',
                        filter: heroFlowStep === 1 ? 'drop-shadow(0 0 10px #67DFCB)' : 'none',
                      }}
                    >
                      ↓
                    </div>
                  </div>

                  <div
                    style={{
                      background: heroFlowStep === 1 ? '#67DFCB' : 'rgba(255, 255, 255, 0.1)',
                      border: heroFlowStep === 1 ? '1px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.3)',
                      color: heroFlowStep === 1 ? '#0A1230' : '#FFFFFF',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      letterSpacing: '0.14em',
                      padding: '8px 20px',
                      borderRadius: '24px',
                      textTransform: 'uppercase',
                      backdropFilter: 'blur(8px)',
                      boxShadow: heroFlowStep === 1 ? '0 0 24px rgba(103, 223, 203, 0.6)' : 'none',
                      transform: heroFlowStep === 1 ? 'scale(1.05)' : 'scale(1)',
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    SIX INTERCONNECTED AREAS
                  </div>
                </div>

                {/* EXECUTION */}
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(44px, 5.5vw, 74px)',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: heroFlowStep === 2 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.38)',
                    opacity: heroFlowStep === 2 ? 1 : 0.6,
                    transform: heroFlowStep === 2 ? 'scale(1.03)' : 'scale(1)',
                    textShadow: heroFlowStep === 2 ? '0 0 32px rgba(103, 223, 203, 0.9)' : 'none',
                    marginBottom: '14px',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  EXECUTION
                </div>

                {/* Cyan Mint Accent Line */}
                <div
                  style={{
                    width: '100%',
                    maxWidth: '420px',
                    height: '3.5px',
                    backgroundColor: '#67DFCB',
                    borderRadius: '2px',
                    marginBottom: '10px',
                    boxShadow: heroFlowStep === 2 ? '0 0 18px #67DFCB' : 'none',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />

                {/* WHERE IT LANDS */}
                <div
                  style={{
                    color: heroFlowStep === 2 ? '#67DFCB' : 'rgba(255, 255, 255, 0.5)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    opacity: heroFlowStep === 2 ? 1 : 0.6,
                    transform: heroFlowStep === 2 ? 'translateX(4px)' : 'translateX(0)',
                    textShadow: heroFlowStep === 2 ? '0 0 12px rgba(103, 223, 203, 0.8)' : 'none',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  WHERE IT LANDS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIX AREAS. ONE CONNECTED AGENDA SECTION */}
      <section
        style={{
          background: '#070D22',
          padding: '44px 0 36px',
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
            onMouseLeave={() => setActiveConnectedPill(null)}
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
              {capabilitiesList.map((cap, idx) => {
                const isHoveredOrClicked = activeConnectedPill === idx;
                const isOtherConnected =
                  activeConnectedPill !== null && activeConnectedPill !== idx;

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
                      } else {
                        setActiveArea(idx);
                        const el = document.getElementById('capabilities');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    style={{
                      background: isHoveredOrClicked
                        ? '#52E0CB'
                        : isOtherConnected
                        ? 'rgba(82, 224, 203, 0.12)'
                        : 'rgba(255, 255, 255, 0.05)',
                      border: isHoveredOrClicked
                        ? '1px solid #52E0CB'
                        : isOtherConnected
                        ? '1px solid rgba(82, 224, 203, 0.5)'
                        : '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '24px',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: isHoveredOrClicked
                        ? '0 8px 24px rgba(82, 224, 203, 0.4)'
                        : isOtherConnected
                        ? '0 0 14px rgba(82, 224, 203, 0.15)'
                        : 'none',
                      transform: isHoveredOrClicked ? 'translateY(-4px)' : 'none',
                    }}
                  >
                    {/* Badge Number Box */}
                    <span
                      style={{
                        background: isHoveredOrClicked
                          ? '#070D22'
                          : 'rgba(255, 255, 255, 0.15)',
                        color: isHoveredOrClicked ? '#52E0CB' : '#FFFFFF',
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
                        color: isHoveredOrClicked ? '#070D22' : '#FFFFFF',
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
                const isSelectedNode = activeConnectedPill === idx;

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

      {/* 3. OUR CAPABILITIES / SIX INTERCONNECTED AREAS */}
      <section id="capabilities" style={{ padding: '100px 0', background: '#FFFFFF' }}>
        <div className="section-container">
          <div style={{ marginBottom: '64px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#265CF4',
                  borderRadius: '1px',
                }}
              />
              <span
                style={{
                  color: '#265CF4',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                OUR CAPABILITIES
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 800,
                color: '#0A1128',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                margin: 0,
              }}
            >
              Six interconnected areas.
            </h2>
          </div>

          {/* 6 Capability Rows (Alternating Layout) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {capabilitiesList.map((cap, idx) => {
              const isEven = idx % 2 === 0;
              const isLast = idx === capabilitiesList.length - 1;
              const isCardHovered = hoveredCapIndex === idx;

              const sectionIds = [
                'cap-card-0',
                'ai-intelligent-enterprise-sec',
                'data-intelligence-sec',
                'enterprise-platforms',
                'cloud-technology-modernization',
                'digital-engineering',
              ];

              return (
                <div
                  key={cap.id}
                  id={sectionIds[idx]}
                  onMouseEnter={() => {
                    setHoveredCapIndex(idx);
                    setActiveConnectedPill(idx);
                  }}
                  onMouseLeave={() => setHoveredCapIndex(null)}
                  onClick={() => {
                    const routes = [
                      '#bt-transformation',
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
                    paddingBottom: isLast ? '0' : '64px',
                    marginBottom: isLast ? '0' : '64px',
                    borderBottom: isLast ? 'none' : '1px solid #E2E8F0',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '56px',
                      alignItems: 'center',
                    }}
                  >
                    {/* Image Column with Exact Overlay Number Specs */}
                    <div
                      style={{
                        order: isEven ? 1 : 2,
                        position: 'relative',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        height: '310px',
                        boxShadow: isCardHovered
                          ? '0 24px 48px rgba(38, 92, 244, 0.2)'
                          : '0 16px 36px rgba(0, 0, 0, 0.08)',
                        background: '#F8FAFC',
                        transform: isCardHovered ? 'translateY(-6px)' : 'none',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <img
                        src={cap.image}
                        alt={cap.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transform: isCardHovered ? 'scale(1.06)' : 'scale(1)',
                          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                      {/* Big Overlay Number with Clean Solid Typography (No Overlap Lines) */}
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '20px',
                          left: '24px',
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 800,
                          fontSize: '72px',
                          lineHeight: '100%',
                          letterSpacing: '-0.02em',
                          color: 'rgba(255, 255, 255, 0.85)',
                          textShadow: '0 2px 14px rgba(0, 0, 0, 0.4)',
                          pointerEvents: 'none',
                          userSelect: 'none',
                          transition: 'all 0.4s ease',
                          transform: isCardHovered ? 'scale(1.08)' : 'none',
                        }}
                      >
                        {cap.id}
                      </span>
                    </div>

                    {/* Content Column */}
                    <div style={{ order: isEven ? 2 : 1 }}>
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          color: isCardHovered ? '#265CF4' : '#64748B',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          marginBottom: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        <span style={{ color: '#265CF4', fontWeight: 900 }}>—</span> AREA {cap.id}
                      </div>

                      <h3
                        style={{
                          fontSize: '28px',
                          fontWeight: 800,
                          color: isCardHovered ? '#265CF4' : '#0A1128',
                          marginBottom: '10px',
                          lineHeight: 1.2,
                          fontFamily: "'Inter', sans-serif",
                          letterSpacing: '-0.015em',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {cap.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '15px',
                          color: '#64748B',
                          marginBottom: '20px',
                          lineHeight: 1.55,
                        }}
                      >
                        {cap.desc}
                      </p>

                      {/* Tag Pills (Dynamic Highlight on Card Hover) */}
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '8px',
                          marginBottom: '24px',
                        }}
                      >
                        {cap.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              background: isCardHovered ? 'rgba(38, 92, 244, 0.08)' : '#F1F5F9',
                              color: isCardHovered ? '#265CF4' : '#475569',
                              fontSize: '12px',
                              fontWeight: 600,
                              padding: '6px 14px',
                              borderRadius: '16px',
                              border: isCardHovered
                                ? '1px solid rgba(38, 92, 244, 0.3)'
                                : '1px solid #E2E8F0',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Explore Link CTA (Dynamic Hover Motion & Direct Page Navigation) */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const routes = [
                            '#bt-transformation',
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
                          background: 'none',
                          border: 'none',
                          color: '#265CF4',
                          fontSize: '13.5px',
                          fontWeight: 700,
                          padding: 0,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Explore this area{' '}
                        <ArrowRight
                          style={{
                            width: '15px',
                            height: '15px',
                            transform: isCardHovered ? 'translateX(6px)' : 'none',
                            transition: 'transform 0.3s ease',
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. BUSINESS & TECHNOLOGY TRANSFORMATION SPOTLIGHT SECTION */}
      {(() => {
        const btPillsData = [
          {
            name: 'Strategy',
            color: '#52E0CB',
            glow: 'rgba(82, 224, 203, 0.45)',
            subhead: 'Transformation begins by understanding where the organization is today, where it needs to go and what must change to get there.',
            desc: 'We help organizations rethink business processes, operating models, technology landscapes and enterprise capabilities — creating transformation programs that connect strategic objectives with executable technology roadmaps.',
          },
          {
            name: 'Architecture',
            color: '#38BDF8',
            glow: 'rgba(56, 189, 248, 0.45)',
            subhead: 'Designing resilient, composable enterprise architecture blueprints aligned with modern cloud and data foundations.',
            desc: 'We align business architecture with technology platforms, decoupling legacy dependencies and structuring enterprise APIs to support continuous velocity and security.',
          },
          {
            name: 'Operating model',
            color: '#34D399',
            glow: 'rgba(52, 211, 153, 0.45)',
            subhead: 'Realigning organizational structures, leadership governance, and cross-functional delivery teams for digital speed.',
            desc: 'We transition traditional enterprise silos into agile product-led operating models, establishing clear accountability, modern DevOps practices, and measurable value streams.',
          },
          {
            name: 'Roadmap',
            color: '#FBBF24',
            glow: 'rgba(251, 191, 36, 0.45)',
            subhead: 'Converting long-term strategy into multi-horizon, risk-mitigated execution programs with transparent ROI milestones.',
            desc: 'We build clear, prioritized transformation roadmaps that balance immediate high-impact quick wins with long-term infrastructure modernization and continuous value tracking.',
          },
        ];

        const activeContent =
          (activeBtPill !== null ? btPillsData[activeBtPill] : null) ||
          (hoveredBtPillIndex !== null ? btPillsData[hoveredBtPillIndex] : null) ||
          btPillsData[0];

        return (
          <section
            id="bt-transformation"
            style={{
              background: 'linear-gradient(110deg, #051446 0%, #0A226E 60%, #0C287B 100%)',
              padding: '90px 0',
              color: '#FFFFFF',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div className="section-container">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '64px',
                  alignItems: 'center',
                }}
              >
                {/* Left Content Column */}
                <div>
                  {/* Dynamic Tag Header Accent */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '20px',
                    }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '2px',
                        backgroundColor: activeContent.color,
                        borderRadius: '1px',
                        transition: 'background-color 0.4s ease',
                      }}
                    />
                    <span
                      style={{
                        color: activeContent.color,
                        fontSize: '12px',
                        fontWeight: 800,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        transition: 'color 0.4s ease',
                      }}
                    >
                      01 · BUSINESS &amp; TECHNOLOGY TRANSFORMATION
                    </span>
                  </div>

                  {/* Main Title */}
                  <h2
                    style={{
                      fontSize: 'clamp(34px, 4.2vw, 54px)',
                      fontWeight: 800,
                      lineHeight: 1.15,
                      letterSpacing: '-0.02em',
                      color: '#FFFFFF',
                      margin: '0 0 24px',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Connecting business strategy with technology execution.
                  </h2>

                  {/* Dynamic Subhead & Description */}
                  <div key={activeBtPill} style={{ transition: 'opacity 0.4s ease, transform 0.4s ease' }}>
                    {/* Primary Subhead */}
                    <p
                      style={{
                        fontSize: '16.5px',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        lineHeight: 1.55,
                        marginBottom: '18px',
                        minHeight: '48px',
                      }}
                    >
                      {activeContent.subhead}
                    </p>

                    {/* Secondary Description */}
                    <p
                      style={{
                        fontSize: '14.5px',
                        color: 'rgba(255, 255, 255, 0.75)',
                        lineHeight: 1.65,
                        marginBottom: '36px',
                        minHeight: '70px',
                      }}
                    >
                      {activeContent.desc}
                    </p>

                    {/* Interactive Dynamic Category Pills */}
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {btPillsData.map((pill, pIdx) => {
                        const isSelected = activeBtPill === pIdx;
                        const isHovered = hoveredBtPillIndex === pIdx;
                        const isHighlighted = isSelected || isHovered;

                        return (
                          <button
                            key={pill.name}
                            onClick={() => setActiveBtPill(pIdx)}
                            onMouseEnter={() => setHoveredBtPillIndex(pIdx)}
                            onMouseLeave={() => setHoveredBtPillIndex(null)}
                            style={{
                              background: isHighlighted
                                ? '#52E0CB'
                                : 'rgba(255, 255, 255, 0.08)',
                              color: isHighlighted ? '#0A1128' : '#FFFFFF',
                              border: isHighlighted
                                ? '1px solid #52E0CB'
                                : '1px solid rgba(255, 255, 255, 0.22)',
                              padding: '10px 24px',
                              borderRadius: '24px',
                              fontSize: '13.5px',
                              fontWeight: isHighlighted ? 800 : 600,
                              cursor: 'pointer',
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              boxShadow: isHighlighted
                                ? '0 8px 24px rgba(82, 224, 203, 0.45)'
                                : 'none',
                              transform: isHighlighted ? 'translateY(-2px)' : 'none',
                            }}
                          >
                            {pill.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Image Column with Fading Mask effect */}
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '580px',
                      height: '420px',
                      position: 'relative',
                      overflow: 'hidden',
                      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.5) 15%, black 40%)',
                      maskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.5) 15%, black 40%)',
                    }}
                  >
                    <img
                      src="/images/BT1.png"
                      alt="Business & Technology Transformation"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    {/* Soft Gradient Overlay Fading into Background */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to right, #051446 0%, rgba(5, 20, 70, 0.4) 30%, transparent 70%)',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* 5. TWELVE WAYS THIS WORK SHOWS UP */}
      <section style={{ padding: '80px 0 100px', background: '#F4F7FC', position: 'relative' }}>
        <div className="section-container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '44px',
            }}
          >
            <div>
              <span
                style={{
                  color: '#265CF4',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                OUR CAPABILITIES
              </span>

              <h2
                style={{
                  fontSize: 'clamp(32px, 3.8vw, 42px)',
                  fontWeight: 800,
                  color: '#0A1128',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Twelve ways this work shows up.
              </h2>
            </div>

            {/* Giant Faded Number 12 */}
            <div
              style={{
                fontSize: '100px',
                fontWeight: 900,
                color: 'rgba(38, 92, 244, 0.12)',
                lineHeight: 1,
                fontFamily: "'Inter', sans-serif",
                userSelect: 'none',
              }}
            >
              12
            </div>
          </div>

          {/* 12 White Cards Grid (3 columns x 4 rows) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '18px',
            }}
          >
            {twelveWays.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.025)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(38, 92, 244, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(38, 92, 244, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.025)';
                    e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.8)';
                  }}
                >
                  {/* Blue Number */}
                  <span
                    style={{
                      color: '#265CF4',
                      fontSize: '14px',
                      fontWeight: 800,
                      flexShrink: 0,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {item.id}
                  </span>

                  {/* Title Text */}
                  <span
                    style={{
                      fontSize: '15px',
                      fontWeight: 800,
                      color: '#0A1128',
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SIX SHIFTS, LINE BY LINE SECTION */}
      <section
        style={{
          padding: '100px 0',
          background: 'linear-gradient(180deg, #050F2C 0%, #07153B 100%)',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="section-container">
          {/* Header */}
          <div style={{ marginBottom: '48px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#52E0CB',
                  borderRadius: '1px',
                }}
              />
              <span
                style={{
                  color: '#52E0CB',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                THE MOVE WE MAKE
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(34px, 4.2vw, 50px)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '14px',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Six shifts, line by line.
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255, 255, 255, 0.72)',
                margin: 0,
                maxWidth: '560px',
                lineHeight: 1.55,
              }}
            >
              Every transformation program we run is measured against a change of state — not a list of deliverables.
            </p>
          </div>

          {/* 6 Shift Rows Container */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '1040px', margin: '0 auto' }}>
            {/* Column Label Pill Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 48px 1fr',
                gap: '16px',
                alignItems: 'center',
                marginBottom: '8px',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF',
                    padding: '4px 14px',
                    borderRadius: '16px',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                  }}
                >
                  FROM
                </span>
              </div>
              <div />
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#52E0CB',
                    color: '#0A1128',
                    padding: '4px 14px',
                    borderRadius: '16px',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                  }}
                >
                  TO
                </span>
              </div>
            </div>

            {/* 6 Shift Pairs */}
            {sixShifts.map((shift, idx) => {
              const isHovered = hoveredShift === idx;
              const isRowActive = isHovered || (hoveredShift === null && autoShiftIndex === idx);

              return (
                <div
                  key={shift.id}
                  onMouseEnter={() => setHoveredShift(idx)}
                  onMouseLeave={() => setHoveredShift(null)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 56px 1fr',
                    gap: '16px',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {/* FROM Box (Left Box with Strikethrough Line Wipe 0% -> 100%) */}
                  <div
                    style={{
                      background: isRowActive
                        ? 'rgba(82, 224, 203, 0.08)'
                        : 'rgba(255, 255, 255, 0.04)',
                      border: isRowActive
                        ? '1px solid rgba(82, 224, 203, 0.5)'
                        : '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '16px',
                      padding: '16px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      transition: 'all 0.4s ease',
                      transform: isRowActive ? 'translateX(-4px)' : 'none',
                      boxShadow: isRowActive ? '0 0 20px rgba(82, 224, 203, 0.18)' : 'none',
                    }}
                  >
                    <span
                      style={{
                        color: isRowActive ? '#52E0CB' : 'rgba(255, 255, 255, 0.4)',
                        fontSize: '12px',
                        fontWeight: 800,
                        flexShrink: 0,
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {shift.id}
                    </span>

                    {/* Strikethrough Text Container */}
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <span
                        style={{
                          fontSize: '15px',
                          fontWeight: 600,
                          color: isRowActive ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.55)',
                          transition: 'color 0.3s ease',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {shift.from}
                      </span>
                      {/* Step 1: Dynamic Cyan Laser Line Wipe (0% -> 100%) - Smoother Slower Pace */}
                      <div
                        style={{
                          position: 'absolute',
                          left: '0',
                          top: '50%',
                          height: '2px',
                          background: '#52E0CB',
                          boxShadow: isRowActive ? '0 0 10px #52E0CB, 0 0 4px #FFFFFF' : 'none',
                          transform: 'translateY(-50%)',
                          width: isRowActive ? '100%' : '0%',
                          transition: 'width 0.85s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Middle Arrow Conduit (Step 2: Traveling Arrow passing Left -> Right) */}
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '40px',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Laser Beam Line Conduit Wiping Left -> Right */}
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        width: isRowActive ? '100%' : '0%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #52E0CB 0%, #2076EA 100%)',
                        boxShadow: isRowActive ? '0 0 12px #52E0CB' : 'none',
                        transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.35s',
                      }}
                    />
                    {/* Traveling Arrow Icon */}
                    <ArrowRight
                      size={18}
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        color: isRowActive ? '#52E0CB' : 'rgba(255, 255, 255, 0.35)',
                        transform: isRowActive ? 'translateX(18px) scale(1.3)' : 'translateX(-12px)',
                        transition: 'transform 0.85s cubic-bezier(0.4, 0, 0.2, 1) 0.35s, color 0.4s ease 0.35s',
                        filter: isRowActive ? 'drop-shadow(0 0 10px #52E0CB)' : 'none',
                      }}
                    />
                  </div>

                  {/* TO Box (Step 3: Right Electric Blue Card receiving Glow Shift) */}
                  <div
                    style={{
                      background: isRowActive
                        ? 'linear-gradient(90deg, #2076EA 0%, #1055C4 100%)'
                        : 'linear-gradient(90deg, #1B61D1 0%, #2076EA 100%)',
                      borderRadius: '16px',
                      padding: '16px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      boxShadow: isRowActive
                        ? '0 0 35px rgba(82, 224, 203, 0.65), 0 12px 36px rgba(32, 118, 234, 0.8)'
                        : '0 4px 16px rgba(0, 0, 0, 0.2)',
                      border: isRowActive ? '1px solid #52E0CB' : '1px solid transparent',
                      transition: 'all 0.75s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
                      transform: isRowActive ? 'translateX(8px)' : 'none',
                    }}
                  >
                    <span
                      style={{
                        color: '#52E0CB',
                        fontSize: '18px',
                        lineHeight: 1,
                        marginRight: '4px',
                        filter: isRowActive ? 'drop-shadow(0 0 8px #52E0CB)' : 'none',
                        transition: 'all 0.4s ease 0.6s',
                      }}
                    >
                      •
                    </span>
                    <span
                      style={{
                        color: '#FFFFFF',
                        fontSize: '15.5px',
                        fontWeight: 800,
                        letterSpacing: '-0.01em',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {shift.to}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Bottom Sub-caption */}
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.72)',
                fontSize: '14.5px',
                fontWeight: 500,
                textAlign: 'center',
                marginTop: '44px',
              }}
            >
              Transformation programs that connect strategic objectives with executable technology roadmaps.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CTA BRAND BANNER */}
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
