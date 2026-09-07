import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  X,
  Play,
  Shield,
  Cpu,
  Activity,
  Users,
  Stethoscope,
  Bed,
  Receipt,
  HeartPulse,
  Clock,
  Sparkles,
  Database,
  Layers,
  FileSpreadsheet,
  Building2,
  Lock,
  Zap,
  TrendingUp,
  BarChart3
} from 'lucide-react';

interface FeatureModuleCardProps {
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

function FeatureModuleCard({
  title,
  desc,
  bg,
  textColor,
  descColor,
  lineColor,
  border,
  defaultShadow,
  hoverShadow
}: FeatureModuleCardProps) {
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

interface UserValueRowProps {
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

function UserValueRowCard({
  role,
  valueHeader,
  description,
  bg,
  roleColor,
  headerColor,
  descColor,
  defaultShadow,
  hoverShadow
}: UserValueRowProps) {
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

function AudiencePill({ pill }: { pill: string }) {
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

interface HMISPageProps {
  onNavigate?: (anchor: string) => void;
  onGoHome?: () => void;
}

export function HMISPage({ onNavigate, onGoHome }: HMISPageProps) {
  const [selectedDemoProduct, setSelectedDemoProduct] = useState<string | null>(null);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [activeWalkthroughStep, setActiveWalkthroughStep] = useState(0);
  const [demoForm, setDemoForm] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    selectedProduct: 'HMIS',
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
        selectedProduct: 'HMIS',
        notes: ''
      });
    }, 2800);
  };

  const walkthroughSteps = [
    {
      step: '01',
      title: 'Patient Arrival & Registration',
      subtitle: 'Instant kiosk or desk check-in with biometric and government ID sync.',
      detail: 'Front-desk operators capture demographic data, check insurance eligibility in real time, and issue biometric patient IDs in under 45 seconds.'
    },
    {
      step: '02',
      title: 'Triage & Doctor Consultation',
      subtitle: 'Smart vital capture with direct clinical note generation and E-Prescriptions.',
      detail: 'Triage nurses log Vitals into tablet devices. Physicians see immediate alert flags and issue digital orders directly to pharmacy and labs.'
    },
    {
      step: '03',
      title: 'LIS & Diagnostic Processing',
      subtitle: 'Barcoded sample tracking with auto-analyzer interfacing.',
      detail: 'Laboratory instruments directly stream result values into the central record, eliminating manual transcription errors.'
    },
    {
      step: '04',
      title: 'Ward Admission & Nursing Care',
      subtitle: 'Interactive graphical bed mapping with MAR (Medication Administration Record).',
      detail: 'Head nurses view bed availability by floor, manage shift handovers, and track scheduled medication doses digitally.'
    },
    {
      step: '05',
      title: 'Integrated Billing & Discharge',
      subtitle: 'One-click consolidated invoice generation and automated insurance pre-auth.',
      detail: 'All department charges automatically aggregate onto a unified discharge bill with split multi-payer support.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#F8FAFC', color: '#0F172A', minHeight: '100vh', fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>

      {/* 1. HERO SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(8, 25, 74, 1) 0%, rgba(13, 42, 117, 1) 50%, rgba(27, 74, 199, 1) 100%)',
        color: '#FFFFFF',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Figma Layer Blur 1: Mint Teal Glow (600x600, rgba(103, 223, 203, 0.22), blur 230px) */}
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          right: '-100px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(103, 223, 203, 0.22)',
          filter: 'blur(230px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Figma Layer Blur 2: Blue Glow (460x460, rgba(31, 165, 255, 0.4), blur 200px) */}
        <div style={{
          position: 'absolute',
          width: '460px',
          height: '460px',
          right: '50px',
          top: '10%',
          backgroundColor: 'rgba(31, 165, 255, 0.4)',
          filter: 'blur(200px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Decorative Subtle Vertical Grid Lines Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '80px 100%',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Breadcrumb / Navigation link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '32px' }}>
            <span onClick={() => onGoHome?.()} style={{ cursor: 'pointer' }}>Home</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>/</span>
            <span onClick={() => onNavigate?.('products')} style={{ cursor: 'pointer' }}>Products</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>HMIS</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'center' }}>

            {/* Left Hero Content */}
            <div>
              {/* Category Badge Pill */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#52E0CB',
                color: '#061539',
                borderRadius: '30px',
                padding: '6px 18px',
                fontSize: '11.5px',
                fontWeight: 800,
                marginBottom: '24px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                HOSPITAL MANAGEMENT INFORMATION SYSTEM
              </div>

              <h1 style={{
                fontSize: 'clamp(44px, 6vw, 68px)',
                fontWeight: 900,
                color: '#FFFFFF',
                margin: '0 0 16px',
                letterSpacing: '-0.03em',
                lineHeight: 1.05
              }}>
                HMIS
              </h1>

              <h2 style={{
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 700,
                color: '#52E0CB',
                margin: '0 0 20px',
                lineHeight: 1.25
              }}>
                From the front desk to the ward, on one live record.
              </h2>

              <p style={{
                fontSize: '16.5px',
                color: 'rgba(255, 255, 255, 0.88)',
                lineHeight: 1.65,
                margin: '0 0 36px',
                maxWidth: '560px'
              }}>
                HMIS is an end-to-end, AI-powered Hospital Management Information System, Clinical Intelligence Platform, and Patient Health Experience Engine.
              </p>

              {/* Stats Metrics Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>05</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>Connected modules</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>ABDM</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>ABHA-native workflows</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1 }}>AI</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>Ambient SOAP notes</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '44px' }}>
                <button
                  onClick={() => setSelectedDemoProduct('HMIS')}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#1F5AF4',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '14px 34px',
                    fontSize: '15px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#52E0CB';
                    e.currentTarget.style.color = '#061539';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#1F5AF4';
                  }}
                >
                  Request a demo
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('walkthrough');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Watch the intro
                </button>
              </div>

              {/* Bottom Module Tags Bar */}
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#52E0CB', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                OPD &nbsp;•&nbsp; OT &nbsp;•&nbsp; IPD &nbsp;•&nbsp; LABS &nbsp;•&nbsp; BILLING &nbsp;•&nbsp; PATIENT MOBILE
              </div>
            </div>

            {/* Right Hero Image Visualization Container (Cropped Inner Dashboard, Outer Blue Frame Removed) */}
            <div style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))' }}>
              <img
                src="/images/hmismain.png"
                alt="HMIS Platform Visualization"
                style={{
                  width: '100%',
                  height: 'auto',
                  clipPath: 'inset(6.2% 5.5% 6.5% 5.5% round 20px)',
                  display: 'block',
                  border: 'none',
                  outline: 'none'
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
              {/* Top Accent Line & Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '28px', height: '3px', backgroundColor: '#2563EB', borderRadius: '2px' }} />
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#2563EB', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  PRODUCT DESCRIPTION
                </span>
              </div>

              <h2 style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 900,
                color: '#0B1739',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                margin: '0 0 24px'
              }}>
                Physical hospital workflows,<br />digitally linked.
              </h2>

              <p style={{ fontSize: '15.5px', color: '#64748B', lineHeight: 1.7, marginBottom: '20px' }}>
                It bridges physical hospital workflows with digital care management by linking administrative front desks, clinical consultation rooms, operating theatres (OT), inpatient wards (IPD), laboratories, billing departments, and patient mobile devices into one synchronized ecosystem.
              </p>

              <p style={{ fontSize: '15.5px', color: '#64748B', lineHeight: 1.7, margin: 0 }}>
                For Patients: It acts as a 24/7 personal health concierge providing conversational onboarding, ABDM/ABHA integration, AI symptom triage, diagnostic bookings, instant QR self-check-ins, indoor GPS navigation, and personalized post-op recovery guides.
              </p>
            </div>

            {/* Right Dark Navy Card: BUILT FOR */}
            <div style={{
              backgroundColor: '#07122E',
              color: '#FFFFFF',
              borderRadius: '24px',
              padding: '40px 36px',
              boxShadow: '0 20px 40px rgba(7, 18, 46, 0.12)'
            }}>
              <div style={{
                fontSize: '11px',
                fontWeight: 800,
                color: '#52E0CB',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                BUILT FOR
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  'Patients & caregivers',
                  'Physicians, surgeons & nurses',
                  'Billing, TPA & hospital admins'
                ].map((role, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '20px 0',
                      borderBottom: idx !== 2 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                    }}
                  >
                    <span style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#52E0CB',
                      display: 'inline-block',
                      flexShrink: 0
                    }} />
                    <span style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF' }}>
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FEATURE SPOTLIGHTS: FIVE MOMENTS IN THE PATIENT JOURNEY */}
      <section style={{ padding: '100px 24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          <div style={{ marginBottom: '60px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '3px', backgroundColor: '#2563EB', borderRadius: '2px' }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#2563EB', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                FEATURE SPOTLIGHTS
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              color: '#0B1739',
              letterSpacing: '-0.025em',
              margin: '0 0 12px'
            }}>
              Five moments in the patient journey.
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
              The parts of HMIS staff and patients touch most — the full module list follows below.
            </p>
          </div>

          {/* 5 Feature Spotlight Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {[
              {
                number: '01',
                title: 'Native ABDM / ABHA Workflows',
                description: 'A complete suite for generating new 14-digit ABHA IDs or linking existing accounts via OTP and mobile lookup, along with consent management to pull and store EMR records securely.',
                tags: ['ABHA generation', 'Consent management', 'EMR linking'],
                image: '/images/hmis1.png',
                imageOnLeft: true
              },
              {
                number: '02',
                title: 'AI Triage & Red-Flag Screening',
                description: 'Guided diagnostic chats evaluate pain characteristics, severity and functional impact, while red-flag screening prompts immediate safety interventions when severe symptoms are detected.',
                tags: ['Adaptive questionnaires', 'Emergency triggers', 'Regional languages'],
                image: '/images/hmis2.png',
                imageOnLeft: false
              },
              {
                number: '03',
                title: 'QR Check-In & Indoor Wayfinding',
                description: 'Self-service kiosks and department QR codes let walk-in patients check in instantly, receive queue tokens and track live wait times — then navigate step-by-step to the consultation room.',
                tags: ['Queue tokens', 'Live wait times', 'Indoor GPS'],
                image: '/images/hmis3.png',
                imageOnLeft: true
              },
              {
                number: '04',
                title: 'Ambient AI SOAP Automation',
                description: 'Transcribes live doctor-patient dialogue in real time, auto-generating structured SOAP notes with evidence timestamps, standardized into SNOMED CT and ICD-10 codes.',
                tags: ['Live transcription', 'Evidence timestamps', 'SNOMED / ICD-10'],
                image: '/images/hmis4.png',
                imageOnLeft: false
              },
              {
                number: '05',
                title: 'OT Command Centre & Bed Allocation',
                description: 'A real-time OT schedule with AI recommendations to reschedule elective cases when emergency trauma arrives, plus bed assignments matched to policy limits, OT proximity and nurse ratios.',
                tags: ['Emergency displacement', 'Readiness scoring', 'Smart bed match'],
                image: '/images/hmis5.png',
                imageOnLeft: true
              }
            ].map((spotlight) => (
              <div
                key={spotlight.number}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                  gap: '48px',
                  alignItems: 'center'
                }}
              >
                {/* Image Column */}
                <div
                  style={{
                    order: spotlight.imageOnLeft ? 1 : 2,
                    position: 'relative',
                    width: '100%',
                    maxWidth: '560px',
                    justifySelf: spotlight.imageOnLeft ? 'start' : 'end',
                    transition: 'all 0.35s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {spotlight.number === '05' ? (
                    <div style={{
                      borderRadius: '16px',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 15px 35px rgba(11, 23, 57, 0.08)',
                      overflow: 'hidden',
                      width: '100%',
                      maxWidth: '410px'
                    }}>
                      <img
                        src={spotlight.image}
                        alt={spotlight.title}
                        style={{
                          width: '330%',
                          maxWidth: 'none',
                          height: 'auto',
                          display: 'block'
                        }}
                      />
                    </div>
                  ) : (
                    <img
                      src={spotlight.image}
                      alt={spotlight.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '16px',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 15px 35px rgba(11, 23, 57, 0.08)'
                      }}
                    />
                  )}
                </div>

                {/* Content Column */}
                <div style={{ order: spotlight.imageOnLeft ? 2 : 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#2563EB', marginBottom: '8px', letterSpacing: '0.05em' }}>
                    {spotlight.number}
                  </div>
                  <h3 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 900, color: '#0B1739', margin: '0 0 16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                    {spotlight.title}
                  </h3>
                  <p style={{ fontSize: '15.5px', color: '#64748B', lineHeight: 1.65, margin: '0 0 24px' }}>
                    {spotlight.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {spotlight.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: '12.5px',
                        fontWeight: 700,
                        color: '#0284C7',
                        backgroundColor: '#F0F9FF',
                        border: '1px solid #BAE6FD',
                        borderRadius: '20px',
                        padding: '6px 16px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0284C7', display: 'inline-block' }} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FIVE MODULES: FROM REGISTRATION TO DISCHARGE */}
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
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              color: '#0B1739',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              margin: 0
            }}>
              Five modules, from registration to discharge.
            </h2>
          </div>

          {/* Categories Grid Container */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {[
              {
                code: 'A. PATIENT ONBOARDING, IDENTITY & ABDM COMPLIANCE',
                cards: [
                  {
                    title: 'Multimodal Registration',
                    desc: 'Supports multi-channel account creation via Email, Social Sign-In, Phone OTP, self-service hospital kiosks, and conversational AI chatbots in major regional languages.',
                    bg: '#07122E',
                    textColor: '#FFFFFF',
                    descColor: 'rgba(255, 255, 255, 0.75)',
                    lineColor: '#52E0CB',
                    defaultShadow: '0 10px 30px rgba(7, 18, 46, 0.2)',
                    hoverShadow: '0 25px 50px rgba(7, 18, 46, 0.4), 0 0 25px rgba(82, 224, 203, 0.25)'
                  },
                  {
                    title: 'Native ABDM / ABHA Workflows',
                    desc: 'Complete suite for generating new 14-digit ABHA IDs or linking existing accounts via OTP/mobile lookup, along with consent management to pull and store EMR records securely.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  },
                  {
                    title: 'Smart Data Ingestion',
                    desc: 'Uses OCR, NLP, and dictation to auto-fill registration forms, parse uploaded PDFs/IDs, and detect duplicate profiles.',
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
                code: 'B. AI TRIAGE, SYMPTOM ASSESSMENT & EMERGENCY PROTOCOLS',
                cards: [
                  {
                    title: 'Red-Flag Emergency Screening',
                    desc: 'Prompts immediate safety interventions when severe symptoms are detected.',
                    bg: '#2563EB',
                    textColor: '#FFFFFF',
                    descColor: 'rgba(255, 255, 255, 0.88)',
                    lineColor: '#52E0CB',
                    defaultShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
                    hoverShadow: '0 25px 50px rgba(37, 99, 235, 0.45), 0 0 25px rgba(82, 224, 203, 0.3)'
                  },
                  {
                    title: 'Adaptive Clinical Questionnaires',
                    desc: 'Conducts guided diagnostic chats evaluating pain characteristics, severity, functional impact, and pregnancy context.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  },
                  {
                    title: 'Smart Delay & Cancellation Triage',
                    desc: 'Captures reasons for late arrivals or cancellations, offering empathetic resolutions like teleconsultations, financial aid schemes, or instant rescheduling.',
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
                code: 'C. OUTPATIENT (OPD) & DIAGNOSTIC CONCIERGE',
                cards: [
                  {
                    title: 'On-Site QR & Kiosk Flow',
                    desc: 'Self-service kiosks and department-specific QR codes allow walk-in patients to check in instantly, receive queue tokens, and track real-time wait times.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  },
                  {
                    title: 'Phlebotomy & Home Diagnostics',
                    desc: 'Suggests missing lab tests based on symptoms and history, allows scheduling home sample pickups, and tracks phlebotomist dispatch.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  },
                  {
                    title: 'Indoor GPS Wayfinding',
                    desc: "Built-in interactive map navigation guiding patients step-by-step from hospital entrances to their doctor's consultation room.",
                    bg: '#52E0CB',
                    textColor: '#07122E',
                    descColor: 'rgba(7, 18, 46, 0.85)',
                    lineColor: '#07122E',
                    defaultShadow: '0 10px 30px rgba(82, 224, 203, 0.3)',
                    hoverShadow: '0 25px 50px rgba(82, 224, 203, 0.5), 0 0 25px rgba(7, 18, 46, 0.2)'
                  }
                ]
              },
              {
                code: 'D. CLINICAL INTELLIGENCE, EHR & ORDER MANAGEMENT',
                cards: [
                  {
                    title: 'Ambient AI SOAP Automation',
                    desc: 'Transcribes live doctor-patient dialogue in real-time, auto-generating structured SOAP notes with evidence timestamps.',
                    bg: '#07122E',
                    textColor: '#FFFFFF',
                    descColor: 'rgba(255, 255, 255, 0.75)',
                    lineColor: '#2563EB',
                    defaultShadow: '0 10px 30px rgba(7, 18, 46, 0.2)',
                    hoverShadow: '0 25px 50px rgba(7, 18, 46, 0.4), 0 0 25px rgba(37, 99, 235, 0.25)'
                  },
                  {
                    title: 'International Medical Coding',
                    desc: 'Standardizes allergen, drug composition, and diagnosis entries into SNOMED CT and ICD-10 codes.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  },
                  {
                    title: 'IoT Hardware Connectivity',
                    desc: 'Streams real-time vitals directly from connected hospital devices into the EMR.',
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
                code: 'E. OPERATING THEATRE, IPD & PRE-AUTHORIZATION ENGINE',
                cards: [
                  {
                    title: 'AI Insurance Pre-Authorization Tracker',
                    desc: 'Prioritizes claim approvals using an AI priority matrix based on surgery dates and urgency, parsing claim notes to flag missing documentation.',
                    bg: '#FFFFFF',
                    textColor: '#0B1739',
                    descColor: '#64748B',
                    lineColor: '#2563EB',
                    border: '1px solid #E2E8F0',
                    defaultShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
                  },
                  {
                    title: 'Smart Bed Allocation',
                    desc: 'Recommends ward and bed assignments matched to insurance policy limits, OT proximity, attending doctor wards, and nurse-to-patient ratios.',
                    bg: '#2563EB',
                    textColor: '#FFFFFF',
                    descColor: 'rgba(255, 255, 255, 0.88)',
                    lineColor: '#52E0CB',
                    defaultShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
                    hoverShadow: '0 25px 50px rgba(37, 99, 235, 0.45), 0 0 25px rgba(82, 224, 203, 0.3)'
                  },
                  {
                    title: 'OT Command Centre',
                    desc: 'Real-time OT schedule calendar with AI recommendations to reschedule elective cases dynamically when emergency trauma cases arrive.',
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
                    <FeatureModuleCard key={cardIdx} {...card} />
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
                role: 'Patients & Caregivers',
                valueHeader: 'Frictionless, Transparent Healthcare Journey',
                description: 'Replaces paper forms with digital intake, eliminates waiting line frustration through QR check-in and live wait times, and demystifies inpatient stays with live recovery guides.',
                bg: '#081028',
                roleColor: '#FFFFFF',
                headerColor: '#52E0CB',
                descColor: '#94A3B8',
                defaultShadow: '0 8px 24px rgba(8, 16, 40, 0.25)',
                hoverShadow: '0 25px 50px rgba(8, 16, 40, 0.45), 0 0 25px rgba(82, 224, 203, 0.25)'
              },
              {
                role: 'Attending Physicians & Surgeons',
                valueHeader: 'Zero-Burnout Clinical Documentation',
                description: 'Ambient AI transcription generates structured SOAP notes automatically, while AI summaries synthesize complex medical histories in seconds.',
                bg: '#F1F5FD',
                roleColor: '#0B1739',
                headerColor: '#2563EB',
                descColor: '#64748B',
                defaultShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
                hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
              },
              {
                role: 'Nurses & Triage Staff',
                valueHeader: 'Automated Workflows & Zero Manual Typing',
                description: 'Direct IoT vitals capture, automated pre-op checklists, and automated arrival alerts keep nursing stations synchronized with minimal administrative effort.',
                bg: '#F1F5FD',
                roleColor: '#0B1739',
                headerColor: '#2563EB',
                descColor: '#64748B',
                defaultShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
                hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
              },
              {
                role: 'Billing, TPA & Insurance Teams',
                valueHeader: 'Error-Free Claims & Faster Turnaround',
                description: 'Dynamic payer forms capture accurate TPA data upfront, and AI pre-auth tracking packages clinical evidence to reduce claim rejections.',
                bg: '#52E0CB',
                roleColor: '#07122E',
                headerColor: '#2563EB',
                descColor: '#0F2942',
                defaultShadow: '0 8px 24px rgba(82, 224, 203, 0.3)',
                hoverShadow: '0 25px 50px rgba(82, 224, 203, 0.5), 0 0 25px rgba(37, 99, 235, 0.25)'
              },
              {
                role: 'Hospital Operations & Admins',
                valueHeader: 'Maximized Facility Efficiency & ABDM Compliance',
                description: 'OT scheduling optimizes room utilization, order deduplication reduces test waste, and built-in ABDM/ABHA workflows ensure regulatory compliance.',
                bg: '#F1F5FD',
                roleColor: '#0B1739',
                headerColor: '#2563EB',
                descColor: '#64748B',
                defaultShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
                hoverShadow: '0 20px 45px rgba(11, 23, 57, 0.12), 0 0 20px rgba(37, 99, 235, 0.1)'
              }
            ].map((row, idx) => (
              <UserValueRowCard key={idx} {...row} />
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

          {/* Top Badge: — HMIS — */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '24px', height: '2px', backgroundColor: '#52E0CB', borderRadius: '1px' }} />
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#52E0CB', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              HMIS
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
            One hospital, one live record.
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
            {['Patients', 'Clinicians', 'Nurses', 'Billing & TPA', 'Operations'].map((pill) => (
              <AudiencePill key={pill} pill={pill} />
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', alignItems: 'center' }}>
            <button
              onClick={() => setSelectedDemoProduct('HMIS')}
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
                <p style={{ fontSize: '15px', color: '#64748B' }}>Our healthcare solutions team will contact you within 24 hours to schedule your live walkthrough.</p>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit}>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', margin: '0 0 6px' }}>
                  Request HMIS Demo
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 24px' }}>
                  Book a personalized walk-through tailored to your hospital workflow.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Sarah Jenkins"
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
                      placeholder="s.jenkins@stjudehospital.org"
                      value={demoForm.workEmail}
                      onChange={(e) => setDemoForm({ ...demoForm, workEmail: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Hospital / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="St. Jude Memorial Health System"
                      value={demoForm.organization}
                      onChange={(e) => setDemoForm({ ...demoForm, organization: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Workflow Notes / Questions (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Mention bed capacity, OPD volume, or specific modules..."
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
