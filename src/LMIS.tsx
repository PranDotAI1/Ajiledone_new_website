import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  X,
  Play,
  Activity,
  FileText,
  ShieldCheck,
  Cpu,
  Database,
  Search,
  Sparkles,
  Clock,
  BarChart3,
  TestTube,
  AlertCircle,
  Share2,
  Check,
  FlaskConical,
  Microscope,
  Layers,
  FileCheck
} from 'lucide-react';

interface LmisFeatureCardProps {
  title: string;
  desc: string;
  bg: string;
  textColor: string;
  descColor: string;
  lineColor: string;
  border?: string;
  defaultShadow?: string;
  hoverShadow?: string;
}

function LmisFeatureCard({
  title,
  desc,
  bg,
  textColor,
  descColor,
  lineColor,
  border,
  defaultShadow,
  hoverShadow
}: LmisFeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: bg,
        color: textColor,
        borderRadius: '20px',
        padding: '36px 30px',
        border: border || 'none',
        boxShadow: isHovered
          ? (hoverShadow || '0 25px 50px rgba(0, 0, 0, 0.2)')
          : (defaultShadow || '0 4px 20px rgba(0, 0, 0, 0.03)'),
        transform: isHovered ? 'translateY(-10px) scale(1.045)' : 'translateY(0) scale(1)',
        zIndex: isHovered ? 10 : 1,
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}
    >
      {/* Top Line Accent Bar */}
      <div
        style={{
          width: isHovered ? '48px' : '32px',
          height: '4px',
          backgroundColor: lineColor,
          borderRadius: '2px',
          marginBottom: '22px',
          transition: 'width 0.3s ease, backgroundColor 0.3s ease'
        }}
      />

      {/* Card Title */}
      <h3
        style={{
          fontSize: '20px',
          fontWeight: 800,
          margin: '0 0 14px',
          lineHeight: 1.3,
          color: textColor,
          letterSpacing: '-0.015em'
        }}
      >
        {title}
      </h3>

      {/* Card Description */}
      <p
        style={{
          fontSize: '14.5px',
          color: descColor,
          lineHeight: 1.65,
          margin: 0,
          opacity: 0.95
        }}
      >
        {desc}
      </p>
    </div>
  );
}

interface LmisValueRowProps {
  role: string;
  valueHeader: string;
  description: string;
  bg: string;
  roleColor: string;
  headerColor: string;
  descColor: string;
  defaultShadow?: string;
  hoverShadow?: string;
}

function LmisValueRowCard({
  role,
  valueHeader,
  description,
  bg,
  roleColor,
  headerColor,
  descColor,
  defaultShadow,
  hoverShadow
}: LmisValueRowProps) {
  const [isRowHovered, setIsRowHovered] = useState(false);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  return (
    <div
      onMouseEnter={() => setIsRowHovered(true)}
      onMouseLeave={() => {
        setIsRowHovered(false);
        setHoveredCol(null);
      }}
      style={{
        backgroundColor: bg,
        borderRadius: '16px',
        padding: '30px 36px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '28px',
        alignItems: 'center',
        boxShadow: isRowHovered
          ? (hoverShadow || '0 20px 45px rgba(11, 23, 57, 0.15)')
          : (defaultShadow || '0 4px 16px rgba(0, 0, 0, 0.02)'),
        transform: isRowHovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
        zIndex: isRowHovered ? 10 : 1,
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
    >
      {/* Column 1: Role */}
      <div
        onMouseEnter={() => setHoveredCol(1)}
        onMouseLeave={() => setHoveredCol(null)}
        style={{
          transform: hoveredCol === 1 ? 'scale(1.06) translateX(4px)' : 'scale(1)',
          transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          padding: '8px 12px',
          borderRadius: '10px',
          backgroundColor: hoveredCol === 1 ? (bg === '#07122E' || bg === '#081028' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(37, 99, 235, 0.08)') : 'transparent'
        }}
      >
        <div style={{ fontSize: '18px', fontWeight: 800, color: roleColor, lineHeight: 1.3 }}>
          {role}
        </div>
      </div>

      {/* Column 2: Value Header */}
      <div
        onMouseEnter={() => setHoveredCol(2)}
        onMouseLeave={() => setHoveredCol(null)}
        style={{
          transform: hoveredCol === 2 ? 'scale(1.06) translateX(4px)' : 'scale(1)',
          transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          padding: '8px 12px',
          borderRadius: '10px',
          backgroundColor: hoveredCol === 2 ? (bg === '#07122E' || bg === '#081028' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(37, 99, 235, 0.08)') : 'transparent'
        }}
      >
        <div style={{ fontSize: '15.5px', fontWeight: 800, color: headerColor, lineHeight: 1.35 }}>
          {valueHeader}
        </div>
      </div>

      {/* Column 3: Description */}
      <div
        onMouseEnter={() => setHoveredCol(3)}
        onMouseLeave={() => setHoveredCol(null)}
        style={{
          transform: hoveredCol === 3 ? 'scale(1.04) translateX(4px)' : 'scale(1)',
          transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          padding: '8px 12px',
          borderRadius: '10px',
          backgroundColor: hoveredCol === 3 ? (bg === '#07122E' || bg === '#081028' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(37, 99, 235, 0.08)') : 'transparent'
        }}
      >
        <p style={{ fontSize: '14px', color: descColor, lineHeight: 1.6, margin: 0 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

function LmisAudiencePill({ pill }: { pill: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        fontSize: '13.5px',
        fontWeight: 700,
        backgroundColor: isHovered ? 'rgba(82, 224, 203, 0.22)' : 'rgba(255, 255, 255, 0.12)',
        color: '#FFFFFF',
        border: isHovered ? '1px solid #52E0CB' : '1px solid rgba(255, 255, 255, 0.25)',
        borderRadius: '30px',
        padding: '9px 22px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        backdropFilter: 'blur(6px)',
        transform: isHovered ? 'translateY(-4px) scale(1.12)' : 'translateY(0) scale(1)',
        boxShadow: isHovered ? '0 12px 30px rgba(82, 224, 203, 0.35)' : 'none',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
    >
      <span
        style={{
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          borderRadius: '50%',
          backgroundColor: '#52E0CB',
          display: 'inline-block',
          boxShadow: isHovered ? '0 0 10px #52E0CB' : 'none',
          transition: 'all 0.3s ease'
        }}
      />
      {pill}
    </span>
  );
}

interface LMISPageProps {
  onNavigate?: (anchor: string) => void;
  onGoHome?: () => void;
}

export function LMISPage({ onNavigate, onGoHome }: LMISPageProps) {
  const [selectedDemoProduct, setSelectedDemoProduct] = useState<string | null>(null);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [activeWalkthroughStep, setActiveWalkthroughStep] = useState(0);
  const [demoForm, setDemoForm] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    selectedProduct: 'Biosynthesis LMIS',
    notes: ''
  });

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
    setTimeout(() => {
      setDemoSubmitted(false);
      setSelectedDemoProduct(null);
      setDemoForm({
        fullName: '',
        workEmail: '',
        organization: '',
        selectedProduct: 'Biosynthesis LMIS',
        notes: ''
      });
    }, 2800);
  };

  const walkthroughSteps = [
    {
      title: '01. Sample Accessioning & Barcoding',
      desc: 'Scan barcode/QR stickers at blood collection points to generate 14-digit LIS IDs and route tubes automatically to specific lab departments.'
    },
    {
      title: '02. Auto-Analyzer Interface Sync',
      desc: 'Bi-directional RS232/TCP-IP interfaces push worklists directly to Roche, Abbott, and Sysmex analyzers and ingest raw test results in real-time.'
    },
    {
      title: '03. Quality Control & Westgard Rules',
      desc: 'Automated 1-2s, 1-3s, and R-4s Westgard rule evaluation blocks out-of-control runs immediately before patient samples are processed.'
    },
    {
      title: '04. Pathologist Validation & Sign-off',
      desc: 'Delta checks compare current results with historical patient baselines, flagging abnormal values for instant digital signature authorization.'
    },
    {
      title: '05. Automated Report Publishing & Dispatch',
      desc: 'Generates encrypted PDF lab reports with QR verification codes, sending instant WhatsApp and SMS links to patients and clinicians.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#0B1739', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* 1. HERO SECTION */}
      <section style={{
        background: `
          linear-gradient(135deg, rgba(8, 25, 74, 1) 0%, rgba(13, 42, 117, 1) 50%, rgba(27, 74, 199, 1) 100%)
        `,
        color: '#FFFFFF',
        padding: '50px 24px 100px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Vertical Grid Overlay matching Figma */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 1px, transparent 1px, transparent 160px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Figma Ambient Glow Blur Ellipse 1 (#1FA5FF 40% layer blur 200) */}
        <div style={{
          position: 'absolute',
          width: '460px',
          height: '460px',
          top: '20px',
          right: '10%',
          backgroundColor: 'rgba(31, 165, 255, 0.4)',
          filter: 'blur(200px)',
          WebkitFilter: 'blur(200px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Figma Ambient Glow Blur Ellipse 2 (#67DFCB 22% layer blur 230) */}
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          top: '180px',
          right: '15%',
          backgroundColor: 'rgba(103, 223, 203, 0.22)',
          filter: 'blur(230px)',
          WebkitFilter: 'blur(230px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          
          {/* Top Breadcrumb Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.65)',
            marginBottom: '40px'
          }}>
            <span
              style={{ cursor: 'pointer', transition: 'color 0.2s' }}
              onClick={onGoHome}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
            >
              Home
            </span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span
              style={{ cursor: 'pointer', transition: 'color 0.2s' }}
              onClick={() => onNavigate?.('products')}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
            >
              Products
            </span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Biosynthesis LMIS</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '56px', alignItems: 'center' }}>
            
            {/* Left Hero Content */}
            <div>
              {/* Top Tag Pill matching Figma exact solid cyan badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#52E0CB',
                color: '#07122E',
                padding: '7px 18px',
                borderRadius: '30px',
                fontWeight: 800,
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '28px',
                boxShadow: '0 4px 16px rgba(82, 224, 203, 0.35)'
              }}>
                LABORATORY INFORMATION MANAGEMENT SYSTEM
              </div>

              <h1 style={{
                fontSize: 'clamp(44px, 5.5vw, 68px)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                margin: '0 0 24px',
                color: '#FFFFFF'
              }}>
                Biosynthesis<br />LMIS
              </h1>

              <h2 style={{
                fontSize: 'clamp(20px, 2.4vw, 28px)',
                fontWeight: 800,
                color: '#52E0CB',
                margin: '0 0 20px',
                lineHeight: 1.3
              }}>
                From sample to signed report, with the guardrails built in.
              </h2>

              <p style={{
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.65,
                margin: '0 0 36px',
                maxWidth: '560px'
              }}>
                Biosynthesis LMIS is an enterprise-grade, AI-powered Laboratory Information Management System (LIMS), Diagnostic Quality Engine, and Patient Health Intelligence Platform.
              </p>

              {/* Stats Metrics Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '40px' }}>
                <div>
                  <div style={{ fontSize: '36px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>07</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>Platform modules</div>
                </div>
                <div>
                  <div style={{ fontSize: '36px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>AI</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>Autonomous agents</div>
                </div>
                <div>
                  <div style={{ fontSize: '36px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>DICOM</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>Native viewer</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '44px' }}>
                <button
                  onClick={() => setSelectedDemoProduct('Biosynthesis LMIS')}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#07122E',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '16px 36px',
                    fontSize: '15px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#52E0CB';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Request a demo
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('lmis-walkthrough');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '50px',
                    padding: '16px 34px',
                    fontSize: '15px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.borderColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Watch the intro
                </button>
              </div>

              {/* Bottom Module Tags Bar */}
              <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#52E0CB', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                INTAKE &nbsp;•&nbsp; COLLECTION &nbsp;•&nbsp; ANALYSIS &nbsp;•&nbsp; VALIDATION &nbsp;•&nbsp; REPORTING
              </div>
            </div>

            {/* Right Hero Image Visualization (Using /images/Lmismain.png) */}
            <div style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 25px 60px rgba(0, 0, 0, 0.45))' }}>
              <img
                src="/images/Lmismain.png"
                alt="Biosynthesis LMIS Dashboard Visualization"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  display: 'block',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT DESCRIPTION SECTION */}
      <section style={{ padding: '100px 24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '64px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{ width: '26px', height: '3px', backgroundColor: '#2563EB', borderRadius: '2px' }} />
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#2563EB', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  PRODUCT DESCRIPTION
                </span>
              </div>

              <h2 style={{
                fontSize: 'clamp(34px, 4vw, 46px)',
                fontWeight: 900,
                color: '#0B1739',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                margin: '0 0 28px',
                maxWidth: '620px'
              }}>
                One framework for everyone who touches the sample.
              </h2>

              <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: 1.7, marginBottom: '22px', maxWidth: '640px' }}>
                It unifies laboratory technicians, phlebotomists, pathologists, radiologists, lab managers, and patients into a single, cohesive digital operational framework.
              </p>

              <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: 1.7, margin: 0, maxWidth: '640px' }}>
                For Lab Operations & Logistics: It automates intake via AI TRF document parsing, enforces camera-based tube verification, manages multi-center order routing and splitting, tracks real-time sample stability timers, provides spatial freezer storage mapping, and monitors instrument health.
              </p>
            </div>

            {/* Right Dark Navy Card: BUILT FOR */}
            <div style={{
              backgroundColor: '#071029',
              color: '#FFFFFF',
              borderRadius: '24px',
              padding: '44px 40px',
              boxShadow: '0 25px 50px rgba(7, 16, 41, 0.18)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{
                fontSize: '11px',
                fontWeight: 800,
                color: '#52E0CB',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '28px'
              }}>
                BUILT FOR
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  'Technicians & phlebotomists',
                  'Pathologists & radiologists',
                  'Lab managers & patients'
                ].map((role, idx) => {
                  return (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '22px 14px',
                        borderRadius: '12px',
                        borderBottom: idx !== 2 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                        transition: 'all 0.25s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(82, 224, 203, 0.08)';
                        e.currentTarget.style.transform = 'translateX(6px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#52E0CB',
                        display: 'inline-block',
                        flexShrink: 0,
                        boxShadow: '0 0 8px rgba(82, 224, 203, 0.6)'
                      }} />
                      <span style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                        {role}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 4. FEATURE SPOTLIGHTS: FIVE POINTS IN THE SAMPLE LIFECYCLE */}
      <section style={{ padding: '100px 24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '3px', backgroundColor: '#2563EB', borderRadius: '2px' }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#2563EB', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                FEATURE SPOTLIGHTS
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(34px, 4.5vw, 50px)',
              fontWeight: 900,
              color: '#0B1739',
              letterSpacing: '-0.025em',
              lineHeight: 1.12,
              margin: '0 0 16px'
            }}>
              Five points in the sample lifecycle.
            </h2>

            <p style={{ fontSize: '16px', color: '#64748B', margin: 0, maxWidth: '640px', lineHeight: 1.6 }}>
              Where Biosynthesis LMIS does the heaviest lifting — the full module list follows below.
            </p>
          </div>

          {/* 5 Alternating Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '72px' }}>
            {[
              {
                num: '01',
                title: 'Role-Based Operational Dashboards',
                desc: 'Technicians track daily throughput, collection queue times, STAT cases and sample stability timers; pathologists see pending validations, critical value alerts and delta-check deviations.',
                tags: ['Throughput & queues', 'Critical alerts', 'SLA visibility'],
                img: '/images/Lmis1.png',
                imageOnLeft: true
              },
              {
                num: '02',
                title: 'Multimodal AI Intake',
                desc: 'Accepts Test Requisition Forms, insurance cards and government IDs via drag-and-drop or bulk upload, auto-populating demographic, insurance and medical history fields into an order cart.',
                tags: ['TRF parsing', 'Auto-filled fields', 'STAT vs. routine'],
                img: '/images/Lmis2.png',
                imageOnLeft: false
              },
              {
                num: '03',
                title: 'Optical Tube Recognition & Sample Tracking',
                desc: 'Camera-based tube scanning verifies correct container usage before labeling, and generates live shareable tracking links for patients and providers.',
                tags: ['Container verification', 'Live tracking links', 'Stability timers'],
                img: '/images/Lmis3.png',
                imageOnLeft: true,
                imgBoxWidth: '350px',
                imgWidth: '550px'
              },
              {
                num: '04',
                title: 'Native DICOM Radiology Viewer',
                desc: 'Displays high-resolution imaging series with historical scan comparisons, AI structural change insights, rich-text reporting and voice dictation.',
                tags: ['Series comparison', 'AI change insights', 'Voice dictation'],
                img: '/images/Lmis4.png',
                imageOnLeft: false
              },
              {
                num: '05',
                title: 'Interactive Visual Health Summaries',
                desc: 'Colour-coded body mapping across kidney, liver, lipid, blood sugar, thyroid and vitamins, with trend graphs, population percentile benchmarks and predictive disease risk scoring.',
                tags: ['Body mapping', 'Percentile benchmarks', 'Risk scoring'],
                img: '/images/Lmis5.png',
                imageOnLeft: true
              }
            ].map((spot, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '48px',
                    alignItems: 'center',
                    paddingBottom: idx !== 4 ? '48px' : '0',
                    borderBottom: idx !== 4 ? '1px solid #F1F5F9' : 'none'
                  }}
                >
                  {/* Image Column */}
                  <div
                    style={{
                      order: spot.imageOnLeft ? 1 : 2,
                      position: 'relative',
                      width: '100%',
                      maxWidth: spot.imgBoxWidth || '560px',
                      borderRadius: '16px',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 15px 35px rgba(11, 23, 57, 0.08)',
                      overflow: 'hidden',
                      justifySelf: spot.imageOnLeft ? 'start' : 'end',
                      transition: 'all 0.35s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 25px 50px rgba(11, 23, 57, 0.14)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(11, 23, 57, 0.08)';
                    }}
                  >
                    <img
                      src={spot.img}
                      alt={spot.title}
                      style={{
                        width: spot.imgWidth || '100%',
                        maxWidth: 'none',
                        height: 'auto',
                        display: 'block'
                      }}
                    />
                  </div>

                  {/* Content Column */}
                  <div style={{ order: spot.imageOnLeft ? 2 : 1 }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: 800,
                      color: '#2563EB',
                      marginBottom: '10px',
                      letterSpacing: '0.02em'
                    }}>
                      {spot.num}
                    </div>

                    <h3 style={{
                      fontSize: 'clamp(24px, 3vw, 32px)',
                      fontWeight: 800,
                      color: '#0B1739',
                      margin: '0 0 16px',
                      lineHeight: 1.25,
                      letterSpacing: '-0.015em'
                    }}>
                      {spot.title}
                    </h3>

                    <p style={{
                      fontSize: '15px',
                      color: '#475569',
                      lineHeight: 1.7,
                      margin: '0 0 24px',
                      maxWidth: '540px'
                    }}>
                      {spot.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {spot.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            backgroundColor: 'rgba(82, 224, 203, 0.14)',
                            color: '#0B1739',
                            border: '1px solid rgba(82, 224, 203, 0.4)',
                            padding: '6px 16px',
                            borderRadius: '20px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#059669', display: 'inline-block' }} />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. SEVEN MODULES THAT SPAN THE LABORATORY LIFECYCLE (THE FULL FEATURE SET) */}
      <section style={{ padding: '100px 24px', backgroundColor: '#F0F4FA' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Top Section Header */}
          <div style={{ marginBottom: '52px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '3px', backgroundColor: '#2563EB', borderRadius: '2px' }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#2563EB', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                THE FULL FEATURE SET
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(34px, 4.5vw, 50px)',
              fontWeight: 900,
              color: '#0B1739',
              letterSpacing: '-0.025em',
              lineHeight: 1.12,
              margin: 0
            }}>
              Seven modules across the laboratory lifecycle.
            </h2>
          </div>

          {/* Categories Grid Container */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {[
              {
                code: 'A. ROLE-BASED OPERATIONAL DASHBOARDS',
                cards: [
                  {
                    title: 'Lab Technician Dashboard',
                    desc: 'Tracks daily throughput, collection queue times, STAT cases, AI risk flags, sample stability timers, and live cold-storage and instrument connectivity statuses.',
                    bg: '#071029',
                    textColor: '#FFFFFF',
                    descColor: 'rgba(255, 255, 255, 0.8)',
                    lineColor: '#FFFFFF',
                    defaultShadow: '0 10px 30px rgba(7, 16, 41, 0.2)',
                    hoverShadow: '0 25px 50px rgba(7, 16, 41, 0.4), 0 0 25px rgba(255, 255, 255, 0.2)'
                  },
                  {
                    title: 'Pathologist Dashboard',
                    desc: 'Surfaces pending validations, critical value alerts, baseline delta-check deviations, and AI clinical insights for rapid case review.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  },
                  {
                    title: 'Lab Admin Dashboard',
                    desc: 'Real-time visibility into order lifecycle pipelines, SLA compliance rates, average processing times, facility bottlenecks, and staff workload distribution.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  }
                ]
              },
              {
                code: 'B. REGISTRATION, AI ORDER EXTRACTION & PROFILE MERGING',
                cards: [
                  {
                    title: 'Multimodal AI Intake',
                    desc: 'Accepts Test Requisition Forms, insurance cards, and government IDs via drag-and-drop or bulk uploads, auto-populating demographic, insurance, and medical history fields.',
                    bg: '#2563EB',
                    textColor: '#FFFFFF',
                    descColor: 'rgba(255, 255, 255, 0.9)',
                    lineColor: '#FFFFFF',
                    defaultShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
                    hoverShadow: '0 25px 50px rgba(37, 99, 235, 0.45), 0 0 25px rgba(255, 255, 255, 0.3)'
                  },
                  {
                    title: 'Automated Test Cart & Package Suggestion',
                    desc: 'Extracts ordered test names directly from paper TRFs and prescriptions into an order cart, assigning priority tags and suggesting relevant wellness add-on packages.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  },
                  {
                    title: 'AI Duplicate Profile Merging',
                    desc: 'Detects potential duplicate patient records with confidence scores, allowing field-level selective merging backed by rationale logging and electronic signatures.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  }
                ]
              },
              {
                code: 'C. CLINICAL SAFETY GUARDRAILS & SPECIMEN LOGISTICS',
                cards: [
                  {
                    title: 'Pre-Collection Compliance Warnings',
                    desc: 'Verifies pre-test fasting protocols before drawing blood, alerts staff to drug and supplement interferences, and flags duplicate orders placed within guideline windows.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  },
                  {
                    title: 'Optical Tube Recognition & Tracking',
                    desc: 'Uses camera-based tube scanning to verify correct container usage before labeling, generating live shareable tracking links for patients and providers.',
                    bg: '#52E0CB',
                    textColor: '#071029',
                    descColor: 'rgba(7, 16, 41, 0.85)',
                    lineColor: '#071029',
                    defaultShadow: '0 10px 30px rgba(82, 224, 203, 0.3)',
                    hoverShadow: '0 25px 50px rgba(82, 224, 203, 0.5), 0 0 25px rgba(7, 16, 41, 0.2)'
                  },
                  {
                    title: 'Spatial Storage & Environmental AI',
                    desc: 'Visual grid mapping for sample storage and retrieval, real-time freezer temperature spike alerts, and bulk expired specimen disposal.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  }
                ]
              },
              {
                code: 'D. RESULT INGESTION, DICOM IMAGING & VERIFICATION',
                cards: [
                  {
                    title: 'Optical Instrument Screen Reading',
                    desc: 'Captures and parses biomarker values directly from analyzer screen images or data files, automatically linking them to EMR fields along with sample quality flags.',
                    bg: '#071029',
                    textColor: '#FFFFFF',
                    descColor: 'rgba(255, 255, 255, 0.8)',
                    lineColor: '#2563EB',
                    defaultShadow: '0 10px 30px rgba(7, 16, 41, 0.2)',
                    hoverShadow: '0 25px 50px rgba(7, 16, 41, 0.4), 0 0 25px rgba(37, 99, 235, 0.25)'
                  },
                  {
                    title: 'Native DICOM Radiology Viewer',
                    desc: 'Displays high-resolution imaging series with historical scan comparisons, AI structural change insights, rich-text reporting, and voice dictation.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  },
                  {
                    title: 'Double-Blind & Range Limit Safeguards',
                    desc: 'Enforces two-step independent entry for sensitive manual tests and blocks biologically improbable values with full-screen critical alerts.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  }
                ]
              },
              {
                code: 'E. AUTONOMOUS AI AGENTS & ENTERPRISE GOVERNANCE',
                cards: [
                  {
                    title: 'Dedicated AI Identity Agents',
                    desc: 'Configurable background AI workers operating under explicit permissions — result validation, double-blind entry, sample integrity, and workflow optimization.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  },
                  {
                    title: 'Granular RBAC & Audit Trails',
                    desc: 'Shift-based restrictions, MFA enforcement for high-risk actions, and comprehensive activity logging capturing IP addresses, timestamps, and confidence scores.',
                    bg: '#2563EB',
                    textColor: '#FFFFFF',
                    descColor: 'rgba(255, 255, 255, 0.9)',
                    lineColor: '#FFFFFF',
                    defaultShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
                    hoverShadow: '0 25px 50px rgba(37, 99, 235, 0.45), 0 0 25px rgba(255, 255, 255, 0.3)'
                  },
                  {
                    title: 'Multi-Location Test Routing',
                    desc: 'Detects when tests are unavailable at the primary facility, automatically splitting and routing specialized orders to partner centers with scheduled appointments.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  }
                ]
              },
              {
                code: 'F. SMART VISUAL REPORTS & PATIENT HEALTH INTELLIGENCE',
                cards: [
                  {
                    title: 'Interactive Visual Health Summaries',
                    desc: 'Features color-coded body mapping across kidney, liver, lipid, blood sugar, thyroid and vitamins, with trend graphs and population percentile benchmarks.',
                    bg: '#52E0CB',
                    textColor: '#071029',
                    descColor: 'rgba(7, 16, 41, 0.85)',
                    lineColor: '#071029',
                    defaultShadow: '0 10px 30px rgba(82, 224, 203, 0.3)',
                    hoverShadow: '0 25px 50px rgba(82, 224, 203, 0.5), 0 0 25px rgba(7, 18, 46, 0.2)'
                  },
                  {
                    title: 'Predictive Disease Risk Scoring',
                    desc: 'Calculates risk percentages for specific conditions and provides actionable dietary plans and screening recommendations.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  },
                  {
                    title: 'Real-Time Insurance & Co-Pay Clearing',
                    desc: 'Automatically calculates real-time insurance coverage, deductible status, service tax, and patient co-pay amounts during checkout.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  }
                ]
              }
            ].map((cat, catIdx) => (
              <div key={catIdx} style={{ borderTop: catIdx > 0 ? '1px solid #E2E8F0' : 'none', paddingTop: catIdx > 0 ? '40px' : '0' }}>
                <div style={{
                  fontSize: '11.5px',
                  fontWeight: 800,
                  color: '#64748B',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '20px'
                }}>
                  {cat.code}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                  {cat.cards.map((card, cardIdx) => (
                    <LmisFeatureCard key={cardIdx} {...card} />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. WHO IT CHANGES THE DAY FOR (USER VALUE PROVIDED MATRIX) */}
      <section style={{ padding: '100px 24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Section Header */}
          <div style={{ marginBottom: '44px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '3px', backgroundColor: '#2563EB', borderRadius: '2px' }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#2563EB', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                USER VALUE PROVIDED
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              color: '#0B1739',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              margin: 0
            }}>
              Who it changes the day for.
            </h2>
          </div>

          {/* Value Rows Container */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                role: 'Lab Technicians & Phlebotomists',
                valueHeader: 'Zero Manual Data Entry & Error-Free Handling',
                description: 'AI document parsing auto-fills patient details and test carts, camera tube verification prevents specimen re-draws, and optical instrument reading eliminates transcription typos.',
                bg: '#091026',
                roleColor: '#FFFFFF',
                headerColor: '#52E0CB',
                descColor: 'rgba(255, 255, 255, 0.78)',
                defaultShadow: '0 8px 24px rgba(8, 16, 40, 0.25)',
                hoverShadow: '0 25px 50px rgba(8, 16, 40, 0.45), 0 0 25px rgba(82, 224, 203, 0.25)'
              },
              {
                role: 'Pathologists & Radiologists',
                valueHeader: 'Rapid Triage & Fail-Safe Accuracy',
                description: 'Critical value alerts, baseline delta-check warnings, side-by-side DICOM comparisons, and built-in voice dictation accelerate report sign-offs.',
                bg: '#F1F5FD',
                roleColor: '#0B1739',
                headerColor: '#2563EB',
                descColor: '#475569',
                defaultShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
                hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
              },
              {
                role: 'Lab Managers & Quality Officers',
                valueHeader: 'Automated Quality Control & SLA Protection',
                description: 'Autonomous AI Agents continuously monitor sample integrity, re-prioritize task queues to prevent SLA breaches, and enforce double-blind data entry guardrails.',
                bg: '#F1F5FD',
                roleColor: '#0B1739',
                headerColor: '#2563EB',
                descColor: '#475569',
                defaultShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
                hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
              },
              {
                role: 'Front-Desk & Billing Teams',
                valueHeader: 'Transparent Checkouts & Multi-Site Logistics',
                description: 'Real-time insurance co-pay calculation eliminates billing surprises, while automated order splitting routes complex multi-center test orders seamlessly.',
                bg: '#52E0CB',
                roleColor: '#071029',
                headerColor: '#1D4ED8',
                descColor: 'rgba(7, 16, 41, 0.85)',
                defaultShadow: '0 8px 24px rgba(82, 224, 203, 0.3)',
                hoverShadow: '0 25px 50px rgba(82, 224, 203, 0.5), 0 0 25px rgba(29, 78, 216, 0.25)'
              },
              {
                role: 'Patients & Ordering Providers',
                valueHeader: 'Understandable Health Insights & Live Tracking',
                description: 'Replaces technical lab jargon with visual body maps, historical trend lines, disease risk scores, dietary advice, and live sample tracking.',
                bg: '#F1F5FD',
                roleColor: '#0B1739',
                headerColor: '#2563EB',
                descColor: '#475569',
                defaultShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
                hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
              }
            ].map((row, idx) => (
              <LmisValueRowCard key={idx} {...row} />
            ))}
          </div>

        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section style={{
        background: 'linear-gradient(90deg, rgba(10, 18, 48, 1) 0%, rgba(13, 42, 117, 1) 50%, rgba(25, 66, 178, 1) 100%)',
        color: '#FFFFFF',
        padding: '110px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Figma Layer Blur Glow */}
        <div style={{
          position: 'absolute',
          width: '620px',
          height: '620px',
          top: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(103, 223, 203, 0.22)',
          filter: 'blur(230px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>

          {/* Top Badge: — LMIS — */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '24px', height: '2px', backgroundColor: '#52E0CB', borderRadius: '1px' }} />
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#52E0CB', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              LMIS
            </span>
            <div style={{ width: '24px', height: '2px', backgroundColor: '#52E0CB', borderRadius: '1px' }} />
          </div>

          {/* Title */}
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 54px)',
            fontWeight: 900,
            color: '#FFFFFF',
            margin: '0 0 24px',
            letterSpacing: '-0.025em',
            lineHeight: 1.15
          }}>
            Every result, checked twice.
          </h2>

          {/* Mint Accent Bar */}
          <div style={{
            width: '180px',
            height: '4px',
            backgroundColor: '#52E0CB',
            borderRadius: '2px',
            margin: '0 auto 36px'
          }} />

          {/* 5 Target Audience / Feature Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginBottom: '44px' }}>
            {['Samples', 'QC Controls', 'Pathologists', 'EHR Sync', 'Portal'].map((pill) => (
              <LmisAudiencePill key={pill} pill={pill} />
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', alignItems: 'center' }}>
            <button
              onClick={() => setSelectedDemoProduct('Biosynthesis LMIS')}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#1D5BD8',
                border: 'none',
                borderRadius: '50px',
                padding: '14px 34px',
                fontSize: '15px',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#52E0CB';
                e.currentTarget.style.color = '#07122E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#1D5BD8';
              }}
            >
              Request a demo
            </button>

            <button
              onClick={() => {
                onNavigate?.('products');
              }}
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '50px',
                padding: '14px 30px',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              All products
            </button>
          </div>

        </div>
      </section>

      {/* DEMO REQUEST MODAL */}
      {selectedDemoProduct && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(9, 26, 66, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            maxWidth: '540px',
            width: '100%',
            padding: '36px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
            position: 'relative'
          }}>
            <button
              onClick={() => setSelectedDemoProduct(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#64748B'
              }}
            >
              <X size={20} />
            </button>

            {demoSubmitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(82, 224, 203, 0.2)', color: '#0D9488', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', margin: '0 0 8px' }}>Demo Request Received!</h3>
                <p style={{ fontSize: '15px', color: '#64748B' }}>Our laboratory solutions team will contact you within 24 hours to schedule your live Biosynthesis LMIS walkthrough.</p>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit}>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', margin: '0 0 6px' }}>
                  Request Biosynthesis LMIS Demo
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 24px' }}>
                  Book a personalized walk-through tailored to your laboratory workflow.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Robert Hayes"
                      value={demoForm.fullName}
                      onChange={(e) => setDemoForm({ ...demoForm, fullName: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="r.hayes@biomedlabs.com"
                      value={demoForm.workEmail}
                      onChange={(e) => setDemoForm({ ...demoForm, workEmail: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Diagnostic Lab / Hospital *</label>
                    <input
                      type="text"
                      required
                      placeholder="Apex Reference Laboratories"
                      value={demoForm.organization}
                      onChange={(e) => setDemoForm({ ...demoForm, organization: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Workflow Notes / Questions (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Mention daily sample volume, auto-analyzer models, or specific LIS modules..."
                      value={demoForm.notes}
                      onChange={(e) => setDemoForm({ ...demoForm, notes: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#184BBF',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '14px',
                      fontSize: '15px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      marginTop: '8px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Confirm Demo Booking
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
