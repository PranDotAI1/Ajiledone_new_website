import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, ChevronRight, Layers, ShieldCheck, Zap, Server, Cloud, Cpu, Globe, ArrowUpRight } from 'lucide-react';

interface CloudTechnologyModernizationProps {
  onNavigate?: (anchor: string) => void;
}

export const CloudTechnologyModernization: React.FC<CloudTechnologyModernizationProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeCapabilityFilter, setActiveCapabilityFilter] = useState<string>('All');
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [hoveredOutcomeIndex, setHoveredOutcomeIndex] = useState<number | null>(null);
  const [hoveredHeroNode, setHoveredHeroNode] = useState<number | null>(null);
  const [activeHeroNode, setActiveHeroNode] = useState<number>(1); // Default Cloud Transformation active
  const [activeConnectedPill, setActiveConnectedPill] = useState<number | null>(4);

  const connectedAreasList = [
    { id: '01', title: 'Business & Technology Transformation' },
    { id: '02', title: 'AI & Intelligent Enterprise' },
    { id: '03', title: 'Data & Intelligence' },
    { id: '04', title: 'Enterprise Platforms' },
    { id: '05', title: 'Cloud & Modernization' },
    { id: '06', title: 'Digital Engineering' },
  ];

  // State for HERO buttons
  const [hoveredExploreBtn, setHoveredExploreBtn] = useState<boolean>(false);
  const [hoveredTalkBtn, setHoveredTalkBtn] = useState<boolean>(false);

  // State for ONE ECOSYSTEM section reveal & buttons (Scroll-triggered only)
  const ecosystemRef = useRef<HTMLElement>(null);
  const [activeEcosystemStep, setActiveEcosystemStep] = useState<number>(0);
  const [hoveredEcosystemBtn, setHoveredEcosystemBtn] = useState<boolean>(false);
  const [hoveredContactBtn, setHoveredContactBtn] = useState<boolean>(false);
  const [hoveredEcosystemPill, setHoveredEcosystemPill] = useState<number | null>(null);

  // State for WHAT CLOUD IS ACTUALLY FOR section step reveal (Scroll-triggered only)
  const whatCloudRef = useRef<HTMLElement>(null);
  const [activeWhatCloudStep, setActiveWhatCloudStep] = useState<number>(0);

  // State for hovered capability tag pill
  const [hoveredTagKey, setHoveredTagKey] = useState<string | null>(null);


  // Section 3 (WHAT CLOUD IS ACTUALLY FOR) Scroll-triggered sequence (One time only)
  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (whatCloudRef.current) observer.unobserve(whatCloudRef.current);
          timeouts.push(setTimeout(() => setActiveWhatCloudStep(1), 200));
          timeouts.push(setTimeout(() => setActiveWhatCloudStep(2), 600));
          timeouts.push(setTimeout(() => setActiveWhatCloudStep(3), 1000));
          timeouts.push(setTimeout(() => setActiveWhatCloudStep(4), 1400));
          timeouts.push(setTimeout(() => setActiveWhatCloudStep(5), 1800));
          timeouts.push(setTimeout(() => setActiveWhatCloudStep(6), 2200));
          timeouts.push(setTimeout(() => setActiveWhatCloudStep(7), 2600));
          timeouts.push(setTimeout(() => setActiveWhatCloudStep(8), 3000));
        }
      },
      { threshold: 0.2 }
    );

    if (whatCloudRef.current) {
      observer.observe(whatCloudRef.current);
    }

    return () => {
      timeouts.forEach(clearTimeout);
      if (whatCloudRef.current) {
        observer.unobserve(whatCloudRef.current);
      }
    };
  }, []);

  // Automated loop for hero diagram node highlight (Hero stays animated)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroNode((prev) => (prev + 1) % 5);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  // Section 6 (ONE ECOSYSTEM) Scroll-triggered sequence (One time only)
  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (ecosystemRef.current) observer.unobserve(ecosystemRef.current);
          timeouts.push(setTimeout(() => setActiveEcosystemStep(1), 200));
          timeouts.push(setTimeout(() => setActiveEcosystemStep(2), 600));
          timeouts.push(setTimeout(() => setActiveEcosystemStep(3), 1000));
          timeouts.push(setTimeout(() => setActiveEcosystemStep(4), 1400));
          timeouts.push(setTimeout(() => setActiveEcosystemStep(5), 1800));
        }
      },
      { threshold: 0.2 }
    );

    if (ecosystemRef.current) {
      observer.observe(ecosystemRef.current);
    }

    return () => {
      timeouts.forEach(clearTimeout);
      if (ecosystemRef.current) {
        observer.unobserve(ecosystemRef.current);
      }
    };
  }, []);

  const sixArenas = [
    { id: '01', title: 'Cloud strategy & architecture', desc: 'Enterprise cloud roadmaps aligned with business velocity and financial governance.' },
    { id: '02', title: 'Tech & legacy migration', desc: 'Seamless re-platforming and re-hosting of complex mission-critical workloads.' },
    { id: '03', title: 'Cloud engineering', desc: 'Automated Infrastructure as Code (IaC), security, and high-performance landed zones.' },
    { id: '04', title: 'Modern ops & FinOps', desc: 'SRE-driven continuous operations, observability, and cloud spend optimization.' },
    { id: '05', title: 'Cloud-native AppDev', desc: 'Containerized microservices, serverless architectures, and modern API mesh.' },
    { id: '06', title: 'Digital sovereignty', desc: 'Data privacy, regional compliance, and multi-tenant security architecture.' },
  ];

  const outcomes = [
    {
      num: '01',
      title: 'Faster Innovation',
      desc: 'Deploy features in minutes instead of months with automated CI/CD and cloud-native building blocks.',
      accent: 'blue',
    },
    {
      num: '02',
      title: 'Greater Resilience',
      desc: 'Self-healing infrastructure, zero-downtime deployments, and multi-region failover capability.',
      accent: 'light',
    },
    {
      num: '03',
      title: 'Intelligent Applications',
      desc: 'Embed AI models, real-time streaming, and intelligent workflows directly into modern application stacks.',
      accent: 'light',
    },
    {
      num: '04',
      title: 'Changing Business Requirements',
      desc: 'Scale up or pivot architecture instantly to support volatile market demands and growth.',
      accent: 'dark',
    },
  ];

  const capabilityGroups = [
    {
      num: '01',
      category: 'Strategy',
      title: 'Cloud Strategy',
      badge: '4 CAPABILITIES',
      desc: 'Where to move, in what order, and how it will be run.',
      tags: ['Cloud Readiness', 'Cloud Architecture', 'Migration Strategy', 'Operating Models'],
      image: '/images/Ourcapabilities1.png',
    },
    {
      num: '02',
      category: 'Transformation',
      title: 'Cloud Transformation',
      badge: '4 CAPABILITIES',
      desc: 'The move itself — done without carrying the old constraints across.',
      tags: ['Migration', 'Re-platforming', 'Re-architecting', 'Application Modernization'],
      image: '/images/Ourcapabilities2.png',
    },
    {
      num: '03',
      category: 'Engineering',
      title: 'Cloud Engineering',
      badge: '5 CAPABILITIES',
      desc: 'Built on the hyperscaler the workload actually belongs on.',
      tags: ['Microsoft Azure', 'AWS', 'Google Cloud', 'Oracle Cloud', 'SAP Cloud'],
      image: '/images/Ourcapabilities3.png',
    },
    {
      num: '04',
      category: 'Native',
      title: 'Cloud Native',
      badge: '6 CAPABILITIES',
      desc: 'Architecture that assumes change rather than resisting it.',
      tags: ['Kubernetes', 'Docker', 'Containers', 'Serverless', 'Microservices', 'APIs'],
      image: '/images/Ourcapabilities4.png',
    },
    {
      num: '05',
      category: 'Operations',
      title: 'Cloud Operations',
      badge: '6 CAPABILITIES',
      desc: 'Running it well after go-live — reliably and affordably.',
      tags: ['DevOps', 'SRE', 'Infrastructure as Code', 'Observability', 'Automation', 'FinOps'],
      image: '/images/Ourcapabilities5.png',
    },
  ];

  const cloudPlatforms = [
    { name: 'AWS Multi-Cloud', desc: 'Enterprise Landing Zones & EKS' },
    { name: 'Microsoft Azure', desc: 'Hybrid Cloud & Enterprise Modernization' },
    { name: 'Google Cloud Platform', desc: 'Data Analytics & Kubernetes Engine' },
    { name: 'Oracle Cloud (OCI)', desc: 'Mission-Critical Autonomous Databases' },
    { name: 'IBM Cloud & Red Hat', desc: 'Hybrid OpenShift Enterprise Stacks' },
  ];

  const heroNodes = [
    { title: 'Cloud Strategy', num: '01' },
    { title: 'Cloud Transformation', num: '02' },
    { title: 'Cloud Engineering', num: '03' },
    { title: 'Cloud Native', num: '04' },
    { title: 'Cloud Operations', num: '05' },
  ];

  const filteredCapabilities =
    activeCapabilityFilter === 'All'
      ? capabilityGroups
      : capabilityGroups.filter((g) => g.category === activeCapabilityFilter);

  return (
    <div style={{ background: '#FFFFFF', color: '#0A1128', fontFamily: "'Inter', sans-serif" }}>
      {/* 1. HERO SECTION (EXACT UPLOADED DESIGN) */}
      <section
        style={{
          position: 'relative',
          padding: '140px 0 110px',
          background: 'linear-gradient(135deg, #061130 0%, #0C286D 45%, #1845C2 100%)',
          color: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Vertical Grid Lines Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
            backgroundSize: '16.666% 100%',
            pointerEvents: 'none',
          }}
        />

        {/* Figma Ellipse Glow 1: #1FA5FF 40%, blur 210 */}
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            top: '10px',
            left: '1010px',
            background: 'rgba(31, 165, 255, 0.40)',
            filter: 'blur(210px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Figma Ellipse Glow 2: #67DFCB 22%, blur 230 */}
        <div
          style={{
            position: 'absolute',
            width: '640px',
            height: '640px',
            top: '180px',
            left: '830px',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumbs */}
          <div
            style={{
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.75)',
              marginBottom: '28px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => onNavigate && onNavigate('#home')}
            >
              Home
            </span>
            <span>/</span>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => onNavigate && onNavigate('#what-we-do')}
            >
              What we do
            </span>
            <span>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>Cloud &amp; Technology Modernization</span>
          </div>

          <div
            className="hero-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.05fr',
              gap: '50px',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
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
                  05 &bull; CLOUD &amp; TECHNOLOGY MODERNIZATION
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(42px, 5vw, 62px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                }}
              >
                Build a technology<br />
                foundation designed<br />
                for change.
              </h1>

              <p
                style={{
                  fontSize: '16.5px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6,
                  marginBottom: '36px',
                  maxWidth: '480px',
                  fontWeight: 450,
                }}
              >
                Cloud transformation is not simply about moving workloads.<br />
                It is about creating an environment that can keep changing<br />
                after the migration is done.
              </p>

              {/* Action Buttons (Colorless initially, changes color on hover) */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <a
                  href="#capabilities"
                  onMouseEnter={() => setHoveredExploreBtn(true)}
                  onMouseLeave={() => setHoveredExploreBtn(false)}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('capabilities-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    background: hoveredExploreBtn ? '#FFFFFF' : 'transparent',
                    color: hoveredExploreBtn ? '#1852EB' : '#FFFFFF',
                    border: hoveredExploreBtn ? '1.5px solid #FFFFFF' : '1.5px solid rgba(255, 255, 255, 0.45)',
                    padding: '16px 36px',
                    borderRadius: '30px',
                    fontWeight: 800,
                    fontSize: '15px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transform: hoveredExploreBtn ? 'scale(1.08) translateY(-3px)' : 'scale(1)',
                    boxShadow: hoveredExploreBtn
                      ? '0 16px 36px rgba(255, 255, 255, 0.35)'
                      : 'none',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Explore cloud capabilities
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
                    background: hoveredTalkBtn ? '#52E0CB' : 'transparent',
                    color: hoveredTalkBtn ? '#0A1128' : '#FFFFFF',
                    border: hoveredTalkBtn ? '1.5px solid #52E0CB' : '1.5px solid rgba(255, 255, 255, 0.45)',
                    padding: '16px 34px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '15px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transform: hoveredTalkBtn ? 'scale(1.08) translateY(-3px)' : 'scale(1)',
                    boxShadow: hoveredTalkBtn ? '0 16px 36px rgba(82, 224, 203, 0.4)' : 'none',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Talk to Ajiledone
                </a>
              </div>

              {/* Ticker Line */}
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#52E0CB',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  opacity: 0.95,
                }}
              >
                STRATEGY &bull; TRANSFORMATION &bull; ENGINEERING &bull; NATIVE &bull; OPERATIONS
              </div>
            </div>

            {/* Right Interactive Cloud Environment Container Box with Continuously Moving Dotted Line */}
            <div style={{ position: 'relative', paddingRight: '20px' }}>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '24px',
                  padding: '36px 36px 36px 36px',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {/* Continuously Moving SVG Dashed Border Overlay */}
                <svg
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    borderRadius: '24px',
                    overflow: 'visible',
                  }}
                >
                  <rect
                    x="1"
                    y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx="24"
                    ry="24"
                    fill="none"
                    stroke="#52E0CB"
                    strokeWidth="1.5"
                    className="moving-dash-border"
                    opacity="0.75"
                  />
                </svg>

                {/* Header */}
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#52E0CB', letterSpacing: '0.14em', marginBottom: '4px' }}>
                  TECHNOLOGY ENVIRONMENT
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.72)', marginBottom: '32px' }}>
                  Designed to keep changing
                </div>

                {/* Staggered Floating Nodes Stack with Color Flowing Top to Bottom */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
                  {[
                    { title: 'Cloud Strategy', offset: '20px' },
                    { title: 'Cloud Transformation', offset: '100px' },
                    { title: 'Cloud Engineering', offset: '30px' },
                    { title: 'Cloud Native', offset: '135px' },
                    { title: 'Cloud Operations', offset: '40px' },
                  ].map((node, idx) => {
                    const currentActive = hoveredHeroNode !== null ? hoveredHeroNode : activeHeroNode;
                    const isActive = currentActive === idx;

                    return (
                      <div
                        key={idx}
                        className={`hero-tab-float-${idx} cloud-hero-node-pill`}
                        onMouseEnter={() => setHoveredHeroNode(idx)}
                        onMouseLeave={() => setHoveredHeroNode(null)}
                        onClick={() => setActiveHeroNode(idx)}
                        style={{
                          marginLeft: node.offset,
                          alignSelf: 'flex-start',
                          background: isActive ? '#52E0CB' : 'rgba(255, 255, 255, 0.13)',
                          border: isActive ? '1.1px solid #52E0CB' : '1.1px solid rgba(255, 255, 255, 0.30)',
                          borderRadius: '30px',
                          padding: '12px 20px 13px 20px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          cursor: 'pointer',
                          transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                          boxShadow: isActive
                            ? '0 14px 32px rgba(82, 224, 203, 0.55), 0 10px 26px rgba(3, 10, 41, 0.32)'
                            : '0 10px 26px rgba(3, 10, 41, 0.32)',
                          zIndex: isActive ? 10 : 2,
                        }}
                      >
                        {/* Dot Ellipse (Sleek 5.5px): Royal Blue (#265CF4) when active, Mint Cyan (#52E0CB) when inactive */}
                        <div
                          style={{
                            width: '5.5px',
                            height: '5.5px',
                            borderRadius: '50%',
                            backgroundColor: isActive ? '#265CF4' : '#52E0CB',
                            transition: 'background-color 0.5s ease',
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: '14.5px',
                            fontWeight: 800,
                            color: isActive ? '#0A1128' : '#FFFFFF',
                            whiteSpace: 'nowrap',
                            transition: 'color 0.5s ease',
                          }}
                        >
                          {node.title}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Overlapping Bottom-Right Dark Pill Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-16px',
                    right: '24px',
                    zIndex: 10,
                  }}
                >
                  <span
                    style={{
                      background: '#060D20',
                      border: '1px solid #52E0CB',
                      color: '#52E0CB',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      letterSpacing: '0.14em',
                      padding: '7px 18px',
                      borderRadius: '20px',
                      display: 'inline-block',
                      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    NOT JUST MOVED &mdash; REBUILT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIX AREAS. ONE CONNECTED AGENDA SECTION (Pre-Selected: 05 Cloud & Modernization) */}
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
                const currentActivePill = activeConnectedPill ?? 4;
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

      {/* 3. SECTION: WHAT CLOUD IS ACTUALLY FOR (EXACT UPLOADED DESIGN) */}
      <section
        ref={whatCloudRef}
        style={{
          padding: '110px 0 120px',
          background: '#FFFFFF',
          color: '#0A1128',
        }}
      >
        <div className="section-container">
          {/* Top Tag (STATICally visible always) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
              opacity: 1,
            }}
          >
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
              WHAT CLOUD IS ACTUALLY FOR
            </span>
          </div>

          {/* Line 1: Appears at Step 0, Strikethrough line cuts through at Step 1 */}
          <div
            className="cloud-strikethrough-container"
            style={{
              position: 'relative',
              display: 'inline-block',
              marginBottom: '14px',
              maxWidth: '100%',
            }}
          >
            <div
              className="cloud-strikethrough-text"
              style={{
                fontSize: 'clamp(12.5px, 2.8vw, 36px)',
                fontWeight: 700,
                color: activeWhatCloudStep >= 1 ? '#94A3B8' : '#0A1128',
                whiteSpace: 'nowrap',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                opacity: activeWhatCloudStep >= 0 ? 1 : 0,
                transform: activeWhatCloudStep >= 0 ? 'translateY(0)' : 'translateY(14px)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Cloud transformation is moving workloads.
            </div>

            {/* Dynamic Solid Strike Line Moving Left to Right */}
            <div
              className="cloud-strikethrough-line"
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                height: '3.5px',
                backgroundColor: '#0A1128',
                borderRadius: '2px',
                transform: 'translateY(-50%)',
                width: activeWhatCloudStep >= 1 ? '100%' : '0%',
                transition: activeWhatCloudStep === 0 ? 'none' : 'width 1.8s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </div>

          {/* Main Headline (All text appears together at Step 2) */}
          <h2
            style={{
              fontSize: 'clamp(34px, 4.2vw, 52px)',
              fontWeight: 800,
              color: '#0A1128',
              lineHeight: 1.15,
              marginBottom: '54px',
              maxWidth: '860px',
              letterSpacing: '-0.025em',
              opacity: activeWhatCloudStep >= 2 ? 1 : 0,
              transform: activeWhatCloudStep >= 2 ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            It is about creating a technology environment<br />
            capable of supporting what comes next.
          </h2>

          {/* 4 Outcome Cards 2x2 Grid with Mint Cyan Cross Axes & Central (+) Badge */}
          <div className="outcome-grid-wrapper" style={{ position: 'relative' }}>
            <div className="outcome-grid-container" style={{ position: 'relative' }}>
              {/* Horizontal Mint Cyan Cross Line */}
              <div
                className="outcome-cross-horizontal"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#52E0CB',
                  transform: 'translateY(-50%)',
                  zIndex: 5,
                  pointerEvents: 'none',
                  opacity: activeWhatCloudStep >= 3 ? 1 : 0,
                  transition: 'all 0.6s ease',
                }}
              />

              {/* Vertical Mint Cyan Cross Line */}
              <div
                className="outcome-cross-vertical"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  backgroundColor: '#52E0CB',
                  transform: 'translateX(-50%)',
                  zIndex: 5,
                  pointerEvents: 'none',
                  opacity: activeWhatCloudStep >= 3 ? 1 : 0,
                  transition: 'all 0.6s ease',
                }}
              />

              {/* Central Circular Mint Cyan (+) Badge */}
              <div
                className="outcome-cross-badge"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: activeWhatCloudStep >= 3 ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#52E0CB',
                  color: '#0A1128',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '20px',
                  zIndex: 10,
                  opacity: activeWhatCloudStep >= 3 ? 1 : 0,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                +
              </div>

              {/* Upper Cards Row (Cards 01 & 02) */}
              <div
                className="outcome-cards-row upper-row"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '51px' }}
              >
                {[
                  {
                    num: '01',
                    title: 'Faster innovation',
                    desc: 'Ship, test and change without waiting on procurement cycles.',
                    bg: '#265CF4',
                    numColor: '#67DFCB',
                    textColor: '#FFFFFF',
                    descColor: 'rgba(255, 255, 255, 0.85)',
                    stepRequired: 3,
                  },
                  {
                    num: '02',
                    title: 'Greater resilience',
                    desc: 'Failure is contained by design, not discovered in production.',
                    bg: '#F4F7FE',
                    numColor: '#265CF4',
                    textColor: '#0A1128',
                    descColor: '#475569',
                    stepRequired: 4,
                  },
                ].map((item, idx) => {
                  const isHovered = hoveredOutcomeIndex === idx;
                  const isRevealed = activeWhatCloudStep >= item.stepRequired;

                  return (
                    <div
                      key={idx}
                      className="outcome-card-box"
                      onMouseEnter={() => setHoveredOutcomeIndex(idx)}
                      onMouseLeave={() => setHoveredOutcomeIndex(null)}
                      style={{
                        background: item.bg,
                        borderRadius: '20px',
                        padding: '40px 36px 36px 36px',
                        opacity: isRevealed ? 1 : 0,
                        transform: isHovered
                          ? 'scale(1.03) translateY(-6px)'
                          : isRevealed
                          ? 'translateY(0)'
                          : 'translateY(20px)',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: isHovered ? '0 16px 36px rgba(0, 0, 0, 0.12)' : 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '190px',
                      }}
                    >
                      <div>
                        <div
                          className="outcome-card-num"
                          style={{ fontSize: '13px', fontWeight: 800, color: item.numColor, marginBottom: '12px' }}
                        >
                          {item.num}
                        </div>
                        <h3
                          className="outcome-card-title"
                          style={{ fontSize: '24px', fontWeight: 800, color: item.textColor, marginBottom: '12px' }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="outcome-card-desc"
                          style={{ fontSize: '15px', color: item.descColor, lineHeight: 1.6, margin: 0, fontWeight: 450 }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Middle Spacer between Upper & Lower Rows */}
              <div className="outcome-row-gap" style={{ height: '48px' }} />

              {/* Lower Cards Row (Cards 03 & 04) */}
              <div
                className="outcome-cards-row lower-row"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '51px' }}
              >
                {[
                  {
                    num: '03',
                    title: 'Intelligent applications',
                    desc: 'Applications that can reach data, AI and services natively.',
                    bg: '#F4F7FE',
                    numColor: '#265CF4',
                    textColor: '#0A1128',
                    descColor: '#475569',
                    stepRequired: 5,
                  },
                  {
                    num: '04',
                    title: 'Changing business requirements',
                    desc: 'An environment that absorbs change instead of resisting it.',
                    bg: '#0B1739',
                    numColor: '#52E0CB',
                    textColor: '#FFFFFF',
                    descColor: 'rgba(255, 255, 255, 0.80)',
                    stepRequired: 6,
                  },
                ].map((item, idx) => {
                  const actualIdx = idx + 2;
                  const isHovered = hoveredOutcomeIndex === actualIdx;
                  const isRevealed = activeWhatCloudStep >= item.stepRequired;

                  return (
                    <div
                      key={actualIdx}
                      className="outcome-card-box"
                      onMouseEnter={() => setHoveredOutcomeIndex(actualIdx)}
                      onMouseLeave={() => setHoveredOutcomeIndex(null)}
                      style={{
                        background: item.bg,
                        borderRadius: '20px',
                        padding: '40px 36px 36px 36px',
                        opacity: isRevealed ? 1 : 0,
                        transform: isHovered
                          ? 'scale(1.03) translateY(-6px)'
                          : isRevealed
                          ? 'translateY(0)'
                          : 'translateY(20px)',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: isHovered ? '0 16px 36px rgba(0, 0, 0, 0.12)' : 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '190px',
                      }}
                    >
                      <div>
                        <div
                          className="outcome-card-num"
                          style={{ fontSize: '13px', fontWeight: 800, color: item.numColor, marginBottom: '12px' }}
                        >
                          {item.num}
                        </div>
                        <h3
                          className="outcome-card-title"
                          style={{ fontSize: '24px', fontWeight: 800, color: item.textColor, marginBottom: '12px' }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="outcome-card-desc"
                          style={{ fontSize: '15px', color: item.descColor, lineHeight: 1.6, margin: 0, fontWeight: 450 }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Sub-Ribbon Caption (Sits OUTSIDE outcome-grid-container, completely below vertical line) */}
            <div
              className="outcome-sub-caption"
              style={{
                textAlign: 'center',
                marginTop: '44px',
                fontSize: '13.5px',
                fontWeight: 600,
                color: '#64748B',
                letterSpacing: '0.01em',
              }}
            >
              Four reasons the environment matters more than the migration.
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: FIVE CAPABILITY GROUPS (EXACT UPLOADED FIGMA DESIGN) */}
      <section
        id="capabilities-section"
        style={{
          padding: '110px 0',
          background: '#EFF4FC',
          color: '#0A1128',
        }}
      >
        <div className="section-container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '48px',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
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
                  OUR CLOUD CAPABILITIES
                </span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(34px, 4.2vw, 52px)',
                  fontWeight: 800,
                  color: '#0A1128',
                  lineHeight: 1.12,
                  margin: 0,
                  letterSpacing: '-0.025em',
                }}
              >
                Five capability groups.
              </h2>
            </div>

            {/* Right Subhead Text from Figma */}
            <div
              style={{
                fontSize: '14px',
                color: '#64748B',
                fontWeight: 500,
                textAlign: 'right',
                lineHeight: 1.5,
              }}
            >
              Strategy &bull; Transformation &bull; Engineering<br />
              Native &bull; Operations
            </div>
          </div>

          {/* Upper Cards Row (01, 02, 03) - 3 Columns */}
          <div className="responsive-3col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '24px' }}>
            {capabilityGroups.slice(0, 3).map((group, idx) => {
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
                    transform: isHovered ? 'translateY(-6px)' : 'none',
                    boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.12)' : '0 10px 30px rgba(0, 0, 0, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Card Header Image Container (Compact 160px height) */}
                  <div style={{ height: '160px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={group.image}
                      alt={group.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                      }}
                    />

                    {/* Exact Figma Linear Gradient Overlay: #0D2A75 72% down to 5% */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(13, 42, 117, 0.72) 0%, rgba(13, 42, 117, 0.05) 100%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Mint Cyan Capability Pill Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        background: '#52E0CB',
                        color: '#0A1128',
                        fontSize: '10.5px',
                        fontWeight: 800,
                        padding: '4px 12px',
                        borderRadius: '10px',
                        letterSpacing: '0.08em',
                        zIndex: 2,
                      }}
                    >
                      {group.badge}
                    </div>

                    {/* Bottom Left Outlined Large Number + Title Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '14px',
                        left: '16px',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '8px',
                        zIndex: 2,
                      }}
                    >
                      <span
                        style={{
                          fontSize: '38px',
                          fontWeight: 800,
                          color: 'rgba(255, 255, 255, 0.55)',
                          lineHeight: 1,
                          letterSpacing: '-0.02em',
                          userSelect: 'none',
                        }}
                      >
                        {group.num}
                      </span>
                      <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', margin: 0, lineHeight: 1.1 }}>
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '22px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <p style={{ fontSize: '14.5px', color: '#0A1128', lineHeight: 1.45, marginBottom: '14px', fontWeight: 700, margin: 0 }}>
                      {group.desc}
                    </p>

                    {/* Interactive Tag Pills (Statically Colorless, Colored & Enlarged ONLY ON HOVER) */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '12px' }}>
                      {group.tags.map((tag, tIdx) => {
                        const tagKey = `${idx}-${tIdx}`;
                        const isTagHovered = hoveredTagKey === tagKey;

                        return (
                          <span
                            key={tIdx}
                            onMouseEnter={() => setHoveredTagKey(tagKey)}
                            onMouseLeave={() => setHoveredTagKey(null)}
                            style={{
                              background: isTagHovered ? '#0B1739' : '#FFFFFF',
                              color: isTagHovered ? '#FFFFFF' : '#475569',
                              border: isTagHovered ? '1px solid #0B1739' : '1px solid #E2E8F0',
                              borderRadius: '16px',
                              padding: '6px 14px',
                              fontSize: '12px',
                              fontWeight: isTagHovered ? 700 : 600,
                              lineHeight: 1.2,
                              cursor: 'pointer',
                              boxShadow: isTagHovered ? '0 8px 22px rgba(11, 23, 57, 0.35)' : 'none',
                              transform: isTagHovered ? 'scale(1.10)' : 'scale(1)',
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              zIndex: isTagHovered ? 5 : 1,
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

          {/* Lower Cards Row (04, 05) - Centered with exact same card width as upper 3 cards */}
          <div
            className="capability-lower-cards-row"
            style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}
          >
            {capabilityGroups.slice(3, 5).map((group, idx) => {
              const actualIdx = idx + 3;
              const isHovered = hoveredCardIndex === actualIdx;

              return (
                <div
                  key={actualIdx}
                  className="capability-lower-card-item"
                  onMouseEnter={() => setHoveredCardIndex(actualIdx)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                  style={{
                    width: 'calc((100% - 48px) / 3)',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isHovered ? 'translateY(-6px)' : 'none',
                    boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.12)' : '0 10px 30px rgba(0, 0, 0, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Card Header Image Container (Compact 160px height) */}
                  <div style={{ height: '160px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={group.image}
                      alt={group.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                      }}
                    />

                    {/* Exact Figma Linear Gradient Overlay: #0D2A75 72% down to 5% */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(13, 42, 117, 0.72) 0%, rgba(13, 42, 117, 0.05) 100%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Mint Cyan Capability Pill Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        background: '#52E0CB',
                        color: '#0A1128',
                        fontSize: '10.5px',
                        fontWeight: 800,
                        padding: '4px 12px',
                        borderRadius: '10px',
                        letterSpacing: '0.08em',
                        zIndex: 2,
                      }}
                    >
                      {group.badge}
                    </div>

                    {/* Bottom Left Outlined Large Number + Title Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '14px',
                        left: '16px',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '8px',
                        zIndex: 2,
                      }}
                    >
                      <span
                        style={{
                          fontSize: '38px',
                          fontWeight: 800,
                          color: 'rgba(255, 255, 255, 0.55)',
                          lineHeight: 1,
                          letterSpacing: '-0.02em',
                          userSelect: 'none',
                        }}
                      >
                        {group.num}
                      </span>
                      <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', margin: 0, lineHeight: 1.1 }}>
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '22px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <p style={{ fontSize: '14.5px', color: '#0A1128', lineHeight: 1.45, marginBottom: '14px', fontWeight: 700, margin: 0 }}>
                      {group.desc}
                    </p>

                    {/* Interactive Tag Pills (Statically Colorless, Colored & Enlarged ONLY ON HOVER) */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '12px' }}>
                      {group.tags.map((tag, tIdx) => {
                        const tagKey = `${actualIdx}-${tIdx}`;
                        const isTagHovered = hoveredTagKey === tagKey;

                        return (
                          <span
                            key={tIdx}
                            onMouseEnter={() => setHoveredTagKey(tagKey)}
                            onMouseLeave={() => setHoveredTagKey(null)}
                            style={{
                              background: isTagHovered ? '#0B1739' : '#FFFFFF',
                              color: isTagHovered ? '#FFFFFF' : '#475569',
                              border: isTagHovered ? '1px solid #0B1739' : '1px solid #E2E8F0',
                              borderRadius: '16px',
                              padding: '6px 14px',
                              fontSize: '12px',
                              fontWeight: isTagHovered ? 700 : 600,
                              lineHeight: 1.2,
                              cursor: 'pointer',
                              boxShadow: isTagHovered ? '0 8px 22px rgba(11, 23, 57, 0.35)' : 'none',
                              transform: isTagHovered ? 'scale(1.10)' : 'scale(1)',
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              zIndex: isTagHovered ? 5 : 1,
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



      {/* 6. ONE ECOSYSTEM, END TO END SECTION (EXACT FIGMA DESIGN) */}
      <section
        ref={ecosystemRef}
        style={{
          padding: '110px 0 120px',
          background: 'linear-gradient(135deg, #0A1230 0%, #0D2A75 50%, #1942B2 100%)',
          color: '#FFFFFF',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Exact Figma Ellipse Glow Effect: #67DFCB at 22% opacity, blur 230 */}
        <div
          style={{
            position: 'absolute',
            width: '640px',
            height: '640px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Top Tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              color: '#67DFCB',
              fontSize: '12.5px',
              fontWeight: 800,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              opacity: activeEcosystemStep >= 0 ? 1 : 0,
              transform: activeEcosystemStep >= 0 ? 'translateY(0)' : 'translateY(12px)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div style={{ width: '22px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
            <span>ONE ECOSYSTEM, END TO END</span>
            <div style={{ width: '22px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
          </div>

          <h2
            style={{
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            <span
              style={{
                display: 'block',
                opacity: activeEcosystemStep >= 1 ? 1 : 0,
                transform: activeEcosystemStep >= 1 ? 'translateY(0)' : 'translateY(16px)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Build a technology foundation
            </span>
            <span
              style={{
                display: 'block',
                opacity: activeEcosystemStep >= 2 ? 1 : 0,
                transform: activeEcosystemStep >= 2 ? 'translateY(0)' : 'translateY(16px)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              designed for change.
            </span>
          </h2>

          {/* Underline Accent Bar */}
          <div
            style={{
              width: activeEcosystemStep >= 3 ? '140px' : '0px',
              opacity: activeEcosystemStep >= 3 ? 1 : 0,
              height: '3.5px',
              backgroundColor: '#67DFCB',
              borderRadius: '2px',
              margin: '0 auto 36px',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />

          {/* 4 Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '44px',
            }}
          >
            {['Infrastructure', 'Application Modernization', 'Data Infrastructure', 'Security & Resilience'].map((tag, idx) => {
              const isPillHovered = hoveredEcosystemPill === idx;
              const isPillActive = activeEcosystemStep >= 4;

              return (
                <span
                  key={idx}
                  onMouseEnter={() => setHoveredEcosystemPill(idx)}
                  onMouseLeave={() => setHoveredEcosystemPill(null)}
                  style={{
                    background: isPillHovered ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                    border: isPillHovered ? '1px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '24px',
                    padding: '9px 22px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    opacity: isPillActive ? 1 : 0,
                    transform: isPillHovered
                      ? 'scale(1.08) translateY(-3px)'
                      : isPillActive
                        ? 'translateY(0) scale(1)'
                        : 'translateY(12px)',
                    boxShadow: isPillHovered ? '0 10px 22px rgba(103, 223, 203, 0.3)' : 'none',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <span style={{ color: '#67DFCB', fontSize: '10px' }}>&bull;</span> {tag}
                </span>
              );
            })}
          </div>

          {/* Button (ALWAYS VISIBLE & Enlarges on Hover) */}
          <a
            href="#contact"
            onMouseEnter={() => setHoveredEcosystemBtn(true)}
            onMouseLeave={() => setHoveredEcosystemBtn(false)}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('#contact');
            }}
            style={{
              background: '#FFFFFF',
              color: '#1852EB',
              padding: '17px 40px',
              borderRadius: '32px',
              fontWeight: 800,
              fontSize: '15.5px',
              textDecoration: 'none',
              display: 'inline-block',
              opacity: 1,
              transform: hoveredEcosystemBtn ? 'scale(1.09) translateY(-4px)' : 'scale(1)',
              boxShadow: hoveredEcosystemBtn
                ? '0 16px 40px rgba(0, 0, 0, 0.4)'
                : '0 12px 30px rgba(0, 0, 0, 0.22)',
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Talk to Ajiledone about Cloud
          </a>
        </div>
      </section>

      {/* 7. CONTACT CTA BRAND BANNER */}
      <section
        style={{
          padding: '80px 0',
          background: 'linear-gradient(90deg, #1852EB 0%, #1F7CF7 50%, #22A7FF 100%)',
          color: '#FFFFFF',
        }}
      >
        <div className="section-container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '30px',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  opacity: 0.9,
                  marginBottom: '10px',
                }}
              >
                CONTACT US
              </div>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: 800,
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
              onMouseEnter={() => setHoveredContactBtn(true)}
              onMouseLeave={() => setHoveredContactBtn(false)}
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('#contact');
              }}
              style={{
                background: '#FFFFFF',
                color: '#1852EB',
                padding: '16px 38px',
                borderRadius: '30px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-block',
                transform: hoveredContactBtn ? 'scale(1.09) translateY(-4px)' : 'scale(1)',
                boxShadow: hoveredContactBtn
                  ? '0 16px 36px rgba(0, 0, 0, 0.35)'
                  : '0 10px 25px rgba(0, 0, 0, 0.18)',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
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
