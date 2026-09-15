import { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, ShieldCheck, Clock, Send, Sparkles } from 'lucide-react';

interface ContactUsProps {
  onNavigate: (anchor: string) => void;
  onGoHome?: () => void;
}

export function ContactUsPage({ onNavigate, onGoHome }: ContactUsProps) {
  const [selectedScenario, setSelectedScenario] = useState<string>('AI Transformation');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phone: '',
    company: '',
    message: '',
    consent: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredScenarioId, setHoveredScenarioId] = useState<string | null>(null);

  const [animStep, setAnimStep] = useState(0);
  const processRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let interval: any = null;

    const startStepSequence = () => {
      let step = 1;
      setAnimStep(1);

      if (interval) clearInterval(interval);
      interval = setInterval(() => {
        step += 1;
        setAnimStep(step);
        if (step >= 6) {
          clearInterval(interval);
          interval = null;
        }
      }, 260);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startStepSequence();
        } else {
          setAnimStep(0);
          if (interval) {
            clearInterval(interval);
            interval = null;
          }
        }
      },
      { threshold: 0.15 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  const scenarios = [
    {
      id: 'ai-transformation',
      index: '01',
      title: 'AI transformation?',
      desc: 'Moving from pilots to something the business actually runs on.',
      defaultBg: '#2563EB',
      defaultTextColor: '#FFFFFF',
      defaultDescColor: 'rgba(255, 255, 255, 0.85)',
      defaultIndexColor: 'rgba(255, 255, 255, 0.8)',
    },
    {
      id: 'sap-modernization',
      index: '02',
      title: 'SAP modernization?',
      desc: 'S/4HANA, RISE, BTP — and what the business gets out of it.',
      defaultBg: '#FFFFFF',
      defaultTextColor: '#0B1739',
      defaultDescColor: '#64748B',
      defaultIndexColor: '#2563EB',
    },
    {
      id: 'data-landscape',
      index: '03',
      title: 'A fragmented data landscape?',
      desc: "Data you can't trust, reach or act on quickly enough.",
      defaultBg: '#FFFFFF',
      defaultTextColor: '#0B1739',
      defaultDescColor: '#64748B',
      defaultIndexColor: '#2563EB',
    },
    {
      id: 'cloud-modernization',
      index: '04',
      title: 'Cloud modernization?',
      desc: 'Not just moving workloads — building for continuous change.',
      defaultBg: '#FFFFFF',
      defaultTextColor: '#0B1739',
      defaultDescColor: '#64748B',
      defaultIndexColor: '#2563EB',
    },
    {
      id: 'supply-chain',
      index: '05',
      title: 'Supply chain transformation?',
      desc: 'Planning, sourcing and logistics that predict rather than react.',
      defaultBg: '#5EEAD4',
      defaultTextColor: '#0B1739',
      defaultDescColor: 'rgba(11, 23, 57, 0.8)',
      defaultIndexColor: '#0B1739',
    },
    {
      id: 'digital-product',
      index: '06',
      title: 'A new digital product?',
      desc: 'From an idea to something engineered for production.',
      defaultBg: '#FFFFFF',
      defaultTextColor: '#0B1739',
      defaultDescColor: '#64748B',
      defaultIndexColor: '#2563EB',
    },
    {
      id: 'enterprise-automation',
      index: '07',
      title: 'Enterprise automation?',
      desc: 'Work that runs without being pushed through the organization.',
      defaultBg: '#06112E',
      defaultTextColor: '#FFFFFF',
      defaultDescColor: 'rgba(255, 255, 255, 0.75)',
      defaultIndexColor: '#5EEAD4',
    },
  ];

  const handleScenarioSelect = (title: string) => {
    setSelectedScenario(title);
    const formEl = document.getElementById('contact-form-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.workEmail || !formData.firstName) return;
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#FFFFFF', color: '#0B1739' }}>
      <style>{`
        .contact-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 992px) {
          .contact-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        .scenarios-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .scenarios-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .scenarios-grid {
            grid-template-columns: 1fr !important;
          }
        }

        .form-layout-grid {
          display: grid;
          grid-template-columns: 1fr 432px;
          gap: 48px;
          align-items: flex-start;
        }
        @media (max-width: 992px) {
          .form-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }

        .process-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 992px) {
          .process-steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* 1. HERO SECTION (Exact Figma Spec & Layer Blurs) */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(95deg, #051336 0%, #0A246B 38%, #1142B2 72%, #1B5CE6 100%)',
          color: '#FFFFFF',
          padding: '110px 0 100px',
          overflow: 'hidden',
        }}
      >
        {/* Background Vertical Grid Lines (Exact 6-column grid lines from uploaded screenshot) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '1440px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            padding: '0 32px',
            zIndex: 0,
          }}
        >
          {[...Array(7)].map((_, i) => (
            <div key={i} style={{ width: '1px', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.05)' }} />
          ))}
        </div>

        {/* Figma Layer Blur 1 (Blue Ellipse: 480px x 480px, Blur 200, rgba(31, 165, 255, 0.4)) */}
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

        {/* Figma Layer Blur 2 (Mint Ellipse: 620px x 620px, Blur 230, rgba(103, 223, 203, 0.22)) */}
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

        <div className="section-container" style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', marginBottom: '40px', color: 'rgba(255, 255, 255, 0.65)' }}>
            <span
              onClick={onGoHome || (() => onNavigate('#top'))}
              style={{ cursor: 'pointer', color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#67DFCB')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
            >
              Home
            </span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 500 }}>Let's talk</span>
          </div>

          <div className="contact-hero-grid">
            {/* Left Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <div style={{ width: '28px', height: '2.5px', backgroundColor: '#67DFCB', borderRadius: '1.5px' }} />
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  LET'S TALK
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(38px, 4.8vw, 58px)', fontWeight: 800, color: '#FFFFFF', margin: 0, letterSpacing: '-0.025em', lineHeight: 1.08 }}>
                What's the next<br />challenge you're<br />trying to solve?
              </h1>

              <p style={{ fontSize: '16.5px', color: 'rgba(255, 255, 255, 0.78)', marginTop: '22px', lineHeight: 1.6, maxWidth: '520px' }}>
                Whatever the starting point, the conversation should begin with the business outcome — not the platform.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '36px' }}>
                <button
                  onClick={() => {
                    const formEl = document.getElementById('contact-form-section');
                    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#265CF4',
                    fontWeight: 800,
                    fontSize: '14.5px',
                    padding: '14px 30px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#67DFCB';
                    e.currentTarget.style.color = '#0B1739';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#265CF4';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  Talk to Ajiledone
                </button>

                <button
                  onClick={() => {
                    const formEl = document.getElementById('contact-form-section');
                    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1.5px solid rgba(255, 255, 255, 0.35)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    padding: '14px 30px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#0B1739';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  Email us directly
                </button>
              </div>



              {/* Bottom Category Row */}
              <div style={{ fontSize: '11.5px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.65)', letterSpacing: '0.16em', marginTop: '44px' }}>
                AI &nbsp;·&nbsp; SAP &nbsp;·&nbsp; DATA &nbsp;·&nbsp; CLOUD &nbsp;·&nbsp; SUPPLY CHAIN &nbsp;·&nbsp; DIGITAL PRODUCTS &nbsp;·&nbsp; AUTOMATION
              </div>
            </div>

            {/* Right Side Card with START ANYWHERE Header */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.55)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '14px', textAlign: 'left' }}>
                START ANYWHERE
              </div>

              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#0B1739',
                  borderRadius: '28px',
                  padding: '38px 36px 32px 36px',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.28)',
                  position: 'relative',
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#265CF4', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  DIRECT LINES
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: 800, margin: '0 0 24px 0', color: '#0B1739', letterSpacing: '-0.015em' }}>
                  Talk to Ajiledone.
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {/* Email Item */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 0', borderBottom: '1px solid #F1F5F9' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#265CF4', flexShrink: 0 }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2px' }}>Email</div>
                      <a href="mailto:info@ajiledone.com" style={{ fontSize: '15.5px', fontWeight: 700, color: '#0B1739', textDecoration: 'none' }}>
                        info@ajiledone.com
                      </a>
                    </div>
                  </div>

                  {/* Offices Item */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 0' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#265CF4', flexShrink: 0 }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2px' }}>Offices</div>
                      <div style={{ fontSize: '15.5px', fontWeight: 700, color: '#0B1739' }}>
                        United States &nbsp;·&nbsp; Dubai &nbsp;·&nbsp; Bengaluru
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text under card */}
              <div style={{ marginTop: '16px', fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 500, textAlign: 'left', paddingLeft: '4px' }}>
                Or use the form below — it reaches the same people.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHICH ONE SOUNDS LIKE YOU SECTION (Exact Uploaded Design) */}
      <section style={{ padding: '95px 0 85px', backgroundColor: '#F4F7FC' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'left', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '28px', height: '2.5px', backgroundColor: '#2563EB', borderRadius: '1.5px' }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#2563EB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                PICK A STARTING POINT
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 4.2vw, 52px)', fontWeight: 800, color: '#0B1739', margin: 0, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Which one sounds like you?
            </h2>
            <p style={{ fontSize: '16px', color: '#475569', maxWidth: '640px', marginTop: '16px', lineHeight: 1.6 }}>
              Select one and it carries into the form below. You can change it later — the first conversation is about the outcome, not the label.
            </p>
          </div>

          {/* Scenarios Grid (Exact 4-column layout matching uploaded image) */}
          <div className="scenarios-grid">
            {scenarios.map((sc) => {
              const isSelected = selectedScenario === sc.title;
              const isHovered = hoveredScenarioId === sc.id;
              const showCyanDot = isSelected || isHovered;

              const cardBg = isSelected ? '#2563EB' : sc.defaultBg;
              const textColor = isSelected ? '#FFFFFF' : sc.defaultTextColor;
              const descColor = isSelected ? 'rgba(255, 255, 255, 0.85)' : sc.defaultDescColor;
              const indexColor = isSelected ? 'rgba(255, 255, 255, 0.8)' : sc.defaultIndexColor;

              return (
                <div
                  key={sc.id}
                  onClick={() => handleScenarioSelect(sc.title)}
                  onMouseEnter={(e) => {
                    setHoveredScenarioId(sc.id);
                    if (!isSelected && sc.defaultBg === '#FFFFFF') {
                      e.currentTarget.style.borderColor = '#2563EB';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    } else if (!isSelected) {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    setHoveredScenarioId(null);
                    if (!isSelected && sc.defaultBg === '#FFFFFF') {
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.transform = 'none';
                    } else if (!isSelected) {
                      e.currentTarget.style.transform = 'none';
                    }
                  }}
                  style={{
                    backgroundColor: cardBg,
                    color: textColor,
                    border: isSelected ? 'none' : isHovered && sc.defaultBg === '#FFFFFF' ? '1.5px solid #2563EB' : sc.defaultBg === '#FFFFFF' ? '1.5px solid #E2E8F0' : 'none',
                    borderRadius: '20px',
                    padding: '28px 24px 30px',
                    cursor: 'pointer',
                    boxShadow: isSelected || isHovered
                      ? '0 16px 40px rgba(37, 99, 235, 0.25)'
                      : sc.defaultBg === '#FFFFFF'
                      ? '0 4px 16px rgba(0, 0, 0, 0.02)'
                      : '0 8px 24px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '180px',
                  }}
                >
                  {/* Top Row: Index badge & Radio circle */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: indexColor, letterSpacing: '0.04em' }}>
                      {sc.index}
                    </span>

                    {/* Radio circle: Cyan dot appears dynamically on hover or select */}
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        border: showCyanDot
                          ? sc.defaultBg === '#FFFFFF' && !isSelected
                            ? '2px solid #2563EB'
                            : '2px solid rgba(255, 255, 255, 0.85)'
                          : sc.defaultBg === '#06112E'
                          ? '2px solid rgba(255, 255, 255, 0.25)'
                          : '2px solid #CBD5E1',
                        backgroundColor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {showCyanDot && (
                        <div
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#5EEAD4',
                            boxShadow: '0 0 8px rgba(94, 234, 212, 0.7)',
                            transition: 'all 0.2s ease',
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 style={{ fontSize: '19px', fontWeight: 800, margin: '0 0 12px 0', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                      {sc.title}
                    </h3>

                    <p style={{ fontSize: '13.5px', margin: 0, color: descColor, lineHeight: 1.5 }}>
                      {sc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Bold Statement */}
          <div style={{ marginTop: '48px', fontSize: '16px', fontWeight: 800, color: '#0B1739', textAlign: 'left' }}>
            Whatever the starting point, the conversation should begin with the business outcome.
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM & DIRECT REACH SECTION (Exact Uploaded Design & Figma Specs) */}
      <section id="contact-form-section" style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'left', marginBottom: '44px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '28px', height: '2.5px', backgroundColor: '#2563EB', borderRadius: '1.5px' }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#2563EB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                START THE CONVERSATION
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 4.2vw, 52px)', fontWeight: 800, color: '#0B1739', margin: 0, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Tell us what you're trying to solve.
            </h2>
            <p style={{ fontSize: '16px', color: '#475569', maxWidth: '600px', marginTop: '16px', lineHeight: 1.6 }}>
              A few details are enough. The right architect or industry lead will come back to you — not a generic mailbox.
            </p>
          </div>

          <div className="form-layout-grid">
            {/* Left Form */}
            <div>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#F0F4F9', borderRadius: '24px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#2563EB', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#0B1739', marginBottom: '12px' }}>
                    Thank you! Message Received.
                  </h3>
                  <p style={{ fontSize: '15.5px', color: '#475569', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                    A solution architect specializing in <strong>{selectedScenario}</strong> has been notified and will respond to <strong>{formData.workEmail}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ firstName: '', lastName: '', workEmail: '', phone: '', company: '', message: '', consent: true });
                    }}
                    style={{
                      backgroundColor: '#2563EB',
                      color: '#FFFFFF',
                      fontSize: '14.5px',
                      fontWeight: 800,
                      padding: '14px 32px',
                      borderRadius: '9999px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Row 1: Full Name & Work Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#0B1739', marginBottom: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Jane Mathews"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          border: 'none',
                          backgroundColor: '#F0F4F9',
                          fontSize: '14.5px',
                          color: '#0B1739',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#0B1739', marginBottom: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        WORK EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="jane@company.com"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          border: 'none',
                          backgroundColor: '#F0F4F9',
                          fontSize: '14.5px',
                          color: '#0B1739',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 2: Company & Country / Region */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#0B1739', marginBottom: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        COMPANY
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company name"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          border: 'none',
                          backgroundColor: '#F0F4F9',
                          fontSize: '14.5px',
                          color: '#0B1739',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#0B1739', marginBottom: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        COUNTRY / REGION
                      </label>
                      <select
                        defaultValue=""
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          border: 'none',
                          backgroundColor: '#F0F4F9',
                          fontSize: '14.5px',
                          color: '#0B1739',
                          outline: 'none',
                          boxSizing: 'border-box',
                          cursor: 'pointer',
                        }}
                      >
                        <option value="" disabled>Select a region</option>
                        <option value="North America">North America</option>
                        <option value="Europe">Europe</option>
                        <option value="Middle East">Middle East</option>
                        <option value="Asia Pacific">Asia Pacific</option>
                        <option value="India">India</option>
                        <option value="Latin America">Latin America</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: What are you trying to solve? */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#0B1739', marginBottom: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      WHAT ARE YOU TRYING TO SOLVE?
                    </label>
                    <select
                      value={selectedScenario}
                      onChange={(e) => setSelectedScenario(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: 'none',
                        backgroundColor: '#F0F4F9',
                        fontSize: '14.5px',
                        color: '#0B1739',
                        outline: 'none',
                        boxSizing: 'border-box',
                        cursor: 'pointer',
                      }}
                    >
                      {scenarios.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Tell us a little more */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#0B1739', marginBottom: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      TELL US A LITTLE MORE
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Where it hurts today, what you've already tried, and what a good outcome looks like..."
                      style={{
                        width: '100%',
                        padding: '16px 18px',
                        borderRadius: '12px',
                        border: 'none',
                        backgroundColor: '#F0F4F9',
                        fontSize: '14.5px',
                        color: '#0B1739',
                        outline: 'none',
                        resize: 'vertical',
                        boxSizing: 'border-box',
                        minHeight: '120px',
                      }}
                    />
                  </div>

                  {/* Checkbox Row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '32px' }}>
                    <input
                      type="checkbox"
                      id="consent-check"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      style={{ width: '18px', height: '18px', cursor: 'pointer', marginTop: '2px', accentColor: '#2563EB' }}
                    />
                    <label htmlFor="consent-check" style={{ fontSize: '13.5px', color: '#475569', cursor: 'pointer', lineHeight: 1.4 }}>
                      I'd like Ajiledone to contact me about this enquiry. We'll only use these details to reply.
                    </label>
                  </div>

                  {/* Action Row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: '#2563EB',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '15px',
                        padding: '14px 34px',
                        borderRadius: '9999px',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 10px 25px rgba(37, 99, 235, 0.35)',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1D4ED8';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#2563EB';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      Talk to Ajiledone
                    </button>

                    <div style={{ fontSize: '13.5px', color: '#475569' }}>
                      Prefer email?{' '}
                      <a href="mailto:info@ajiledone.com" style={{ color: '#2563EB', fontWeight: 700, textDecoration: 'none' }}>
                        info@ajiledone.com
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Right Side Direct Reach Info Card (Exact Figma Specs: 432px width, 664px height, 22px radius, rgba(10,18,48,1) to rgba(13,42,117,1) linear gradient) */}
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(10, 18, 48, 1) 0%, rgba(13, 42, 117, 1) 100%)',
                color: '#FFFFFF',
                borderRadius: '22px',
                padding: '38px 36px 32px 36px',
                width: '100%',
                maxWidth: '432px',
                minHeight: '664px',
                boxSizing: 'border-box',
                boxShadow: '0 20px 50px rgba(10, 18, 48, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#5EEAD4', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  CONTACT
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#FFFFFF', margin: '0 0 28px 0', letterSpacing: '-0.015em' }}>
                  Reach us directly.
                </h3>

                {/* Location 1: United States */}
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '16px', marginBottom: '16px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#5EEAD4', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    UNITED STATES
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                    United States
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', marginTop: '2px' }}>
                    North America
                  </div>
                </div>

                {/* Location 2: United Arab Emirates */}
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '16px', marginBottom: '16px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#5EEAD4', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    UNITED ARAB EMIRATES
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                    Dubai
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', marginTop: '2px' }}>
                    Middle East
                  </div>
                </div>

                {/* Location 3: India */}
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '16px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#5EEAD4', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    INDIA
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                    Bengaluru
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', marginTop: '2px' }}>
                    India · Asia-Pacific
                  </div>
                </div>
              </div>

              {/* Bottom Info & Sub-badge */}
              <div>
                <a href="mailto:info@ajiledone.com" style={{ fontSize: '16px', fontWeight: 700, color: '#5EEAD4', textDecoration: 'none', display: 'block', marginBottom: '12px' }}>
                  info@ajiledone.com
                </a>

                <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.4, marginBottom: '16px' }}>
                  Serving North America · Europe · Middle East · India · Asia-Pacific
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    fontSize: '10.5px',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '0.12em',
                  }}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT HAPPENS NEXT SECTION (Animated Staggered Step-by-Step Scroll Reveal) */}
      <section ref={processRef} style={{ padding: '95px 0 85px', backgroundColor: '#F4F7FC', overflow: 'hidden' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          <div
            style={{
              textAlign: 'left',
              marginBottom: '48px',
              opacity: animStep >= 1 ? 1 : 0,
              transform: animStep >= 1 ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '28px', height: '2.5px', backgroundColor: '#2563EB', borderRadius: '1.5px' }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#2563EB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                AFTER YOU HIT SEND
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 4.2vw, 52px)', fontWeight: 800, color: '#0B1739', margin: 0, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              What happens next.
            </h2>
            <p style={{ fontSize: '16px', color: '#475569', maxWidth: '620px', marginTop: '16px', lineHeight: 1.6 }}>
              No sequence of nurture emails. Three steps, and a real conversation at the end of them.
            </p>
          </div>

          {/* 3 Stepped Cards with Sequential Animations */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {/* Step 01 */}
            <div
              style={{
                flex: '1 1 300px',
                backgroundColor: '#06112E',
                color: '#FFFFFF',
                borderRadius: '20px',
                padding: '32px 28px 34px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(6, 17, 46, 0.25)',
                minHeight: '190px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                opacity: animStep >= 1 ? 1 : 0,
                transform: animStep >= 1 ? 'translateY(0) scale(1)' : 'translateY(36px) scale(0.92)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '18px',
                  fontSize: '76px',
                  fontWeight: 800,
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.25)',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  letterSpacing: '-0.04em',
                }}
              >
                01
              </div>

              <div style={{ fontSize: '13px', fontWeight: 800, color: '#5EEAD4', letterSpacing: '0.04em', marginBottom: '20px' }}>
                01
              </div>

              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', margin: '0 0 10px 0', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                  We read it properly
                </h3>

                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.55, margin: 0 }}>
                  A person reads what you wrote — not a scoring model. Usually the same day.
                </p>
              </div>
            </div>

            {/* Connector Arrow 1 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 4px',
                color: '#2563EB',
                opacity: animStep >= 2 ? 1 : 0,
                transform: animStep >= 2 ? 'scale(1) translateX(0)' : 'scale(0.2) translateX(-15px)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <ArrowRight size={24} />
            </div>

            {/* Step 02 */}
            <div
              style={{
                flex: '1 1 300px',
                backgroundColor: '#2563EB',
                color: '#FFFFFF',
                borderRadius: '20px',
                padding: '32px 28px 34px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(37, 99, 235, 0.3)',
                minHeight: '190px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                opacity: animStep >= 3 ? 1 : 0,
                transform: animStep >= 3 ? 'translateY(0) scale(1)' : 'translateY(36px) scale(0.92)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '18px',
                  fontSize: '76px',
                  fontWeight: 800,
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.3)',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  letterSpacing: '-0.04em',
                }}
              >
                02
              </div>

              <div style={{ fontSize: '13px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.85)', letterSpacing: '0.04em', marginBottom: '20px' }}>
                02
              </div>

              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', margin: '0 0 10px 0', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                  We bring the right people
                </h3>

                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.55, margin: 0 }}>
                  An architect or industry lead who has actually done this, not a generalist.
                </p>
              </div>
            </div>

            {/* Connector Arrow 2 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 4px',
                color: '#2563EB',
                opacity: animStep >= 4 ? 1 : 0,
                transform: animStep >= 4 ? 'scale(1) translateX(0)' : 'scale(0.2) translateX(-15px)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <ArrowRight size={24} />
            </div>

            {/* Step 03 */}
            <div
              style={{
                flex: '1 1 300px',
                backgroundColor: '#5EEAD4',
                color: '#0B1739',
                borderRadius: '20px',
                padding: '32px 28px 34px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(94, 234, 212, 0.3)',
                minHeight: '190px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                opacity: animStep >= 5 ? 1 : 0,
                transform: animStep >= 5 ? 'translateY(0) scale(1)' : 'translateY(36px) scale(0.92)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '18px',
                  fontSize: '76px',
                  fontWeight: 800,
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(11, 23, 57, 0.25)',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  letterSpacing: '-0.04em',
                }}
              >
                03
              </div>

              <div style={{ fontSize: '13px', fontWeight: 800, color: '#0B1739', letterSpacing: '0.04em', marginBottom: '20px' }}>
                03
              </div>

              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0B1739', margin: '0 0 10px 0', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                  We come back with a view
                </h3>

                <p style={{ fontSize: '13.5px', color: 'rgba(11, 23, 57, 0.8)', lineHeight: 1.55, margin: 0 }}>
                  Within two business days: what we'd look at first, and what we'd want to know.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bold Statement */}
          <div
            style={{
              marginTop: '48px',
              fontSize: '16px',
              fontWeight: 800,
              color: '#0B1739',
              textAlign: 'left',
              opacity: animStep >= 6 ? 1 : 0,
              transform: animStep >= 6 ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.5s ease',
            }}
          >
            If it turns out we're not the right partner for it, we'll say so.
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER ("Let's build what's next." - Exact Uploaded & Figma Specs) */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(100deg, #07102A 0%, #0D2D7D 50%, #154BC7 100%)',
          color: '#FFFFFF',
          padding: '105px 0 115px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Figma Layer Blur Ellipse Glow Spec: 640x640, top: -30px, blur: 230px, rgba(103, 223, 203, 0.22) */}
        <div
          style={{
            position: 'absolute',
            top: '-30px',
            left: 'calc(50% - 320px)',
            width: '640px',
            height: '640px',
            borderRadius: '50%',
            backgroundColor: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          {/* Eyebrow: — LET'S TALK — */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '24px' }}>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#5EEAD4', borderRadius: '1px' }} />
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#5EEAD4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              LET'S TALK
            </span>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#5EEAD4', borderRadius: '1px' }} />
          </div>

          {/* Main Headline */}
          <h2 style={{ fontSize: 'clamp(40px, 4.8vw, 64px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, marginBottom: 0, letterSpacing: '-0.025em' }}>
            Let's build what's next.
          </h2>

          {/* Mint Underline Bar */}
          <div
            style={{
              width: '220px',
              height: '5px',
              backgroundColor: '#5EEAD4',
              borderRadius: '9999px',
              margin: '20px auto 28px',
            }}
          />

          {/* Subtitle */}
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 40px', fontWeight: 500 }}>
            Whatever the starting point, the conversation should begin with the business outcome.
          </p>

          {/* Action Buttons Row */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
            {/* Primary Solid White Pill Button */}
            <button
              onClick={() => {
                const formEl = document.getElementById('contact-form-section');
                if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#2563EB',
                fontWeight: 700,
                fontSize: '15px',
                padding: '14px 36px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 14px 32px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
              }}
            >
              Talk to Ajiledone
            </button>

            {/* Secondary Outlined Pill Button */}
            <a
              href="mailto:info@ajiledone.com"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1.5px solid rgba(255, 255, 255, 0.45)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '15px',
                padding: '14px 36px',
                borderRadius: '9999px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#2563EB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              info@ajiledone.com
            </a>
          </div>

          {/* 3 Regional Hub Glass Cards Grid (Exact matching uploaded design) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1080px', margin: '0 auto' }}>
            {/* Hub 1: United States */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1.2px solid rgba(255, 255, 255, 0.18)', backdropFilter: 'blur(12px)', borderRadius: '18px', padding: '20px 24px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                <span style={{ color: '#5EEAD4', fontSize: '14px' }}>•</span>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em' }}>United States</span>
              </div>
              <div style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.65)', paddingLeft: '14px' }}>North America</div>
            </div>

            {/* Hub 2: Dubai */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1.2px solid rgba(255, 255, 255, 0.18)', backdropFilter: 'blur(12px)', borderRadius: '18px', padding: '20px 24px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                <span style={{ color: '#5EEAD4', fontSize: '14px' }}>•</span>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em' }}>Dubai</span>
              </div>
              <div style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.65)', paddingLeft: '14px' }}>Middle East</div>
            </div>

            {/* Hub 3: Bengaluru */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1.2px solid rgba(255, 255, 255, 0.18)', backdropFilter: 'blur(12px)', borderRadius: '18px', padding: '20px 24px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                <span style={{ color: '#5EEAD4', fontSize: '14px' }}>•</span>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em' }}>Bengaluru</span>
              </div>
              <div style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.65)', paddingLeft: '14px' }}>India · Asia-Pacific</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
