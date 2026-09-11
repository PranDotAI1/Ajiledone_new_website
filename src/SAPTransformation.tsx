import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';

interface SAPTransformationProps {
  onNavigate: (anchor: string) => void;
}

export const SAPTransformationPage: React.FC<SAPTransformationProps> = ({ onNavigate }) => {
  const [activeAccordion, setActiveAccordion] = useState<number>(0);
  const [hoveredAccordion, setHoveredAccordion] = useState<number | null>(null);
  const [activeConnectedPill, setActiveConnectedPill] = useState<number | null>(3);
  const [hoveredCapabilityCol, setHoveredCapabilityCol] = useState<number | null>(null);
  
  // Opportunity Section (Scroll-triggered only)
  const opportunityRef = useRef<HTMLDivElement>(null);
  const [activeOpportunityCard, setActiveOpportunityCard] = useState<number>(-1);
  const [hoveredOpportunityCard, setHoveredOpportunityCard] = useState<number | null>(null);
  
  const [hoveredItemCard, setHoveredItemCard] = useState<string | null>(null);
  const [hoveredOracleCap, setHoveredOracleCap] = useState<number | null>(null);
  
  // ServiceNow Section (Scroll-triggered only)
  const serviceNowRef = useRef<HTMLDivElement>(null);
  const [hoveredServiceNowCard, setHoveredServiceNowCard] = useState<number | null>(null);
  const [activeServiceNowCard, setActiveServiceNowCard] = useState<number>(-1);
  
  // Ecosystem Section (Scroll-triggered only)
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const [activeEcosystemStep, setActiveEcosystemStep] = useState<number>(0);
  const [hoveredEcosystemBtn, setHoveredEcosystemBtn] = useState<boolean>(false);
  const [hoveredEcosystemPill, setHoveredEcosystemPill] = useState<number | null>(null);
  const [hoveredContactBtn, setHoveredContactBtn] = useState<boolean>(false);

  useEffect(() => {
    const isOracleTarget = window.location.hash.includes('oracle') || window.location.href.includes('oracle');
    const isServiceNowTarget = window.location.hash.includes('servicenow') || window.location.href.includes('servicenow');

    if (isOracleTarget) {
      setTimeout(() => {
        const el = document.getElementById('oracle-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else if (isServiceNowTarget) {
      setTimeout(() => {
        const el = document.getElementById('servicenow-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // Sequential top-to-bottom propagation loop every 2.4s for hero stack (Hero stays animated)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAccordion((prev) => (prev + 1) % 7);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  // Opportunity section scroll-triggered sequence
  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeouts.forEach(clearTimeout);
          timeouts = [];
          for (let i = 0; i < 7; i++) {
            timeouts.push(setTimeout(() => setActiveOpportunityCard(i), 80 + i * 160));
          }
        } else {
          timeouts.forEach(clearTimeout);
          timeouts = [];
          setActiveOpportunityCard(-1);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const el = opportunityRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      timeouts.forEach(clearTimeout);
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  // ServiceNow section scroll-triggered sequence
  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeouts.forEach(clearTimeout);
          timeouts = [];
          for (let i = 0; i < 10; i++) {
            timeouts.push(setTimeout(() => setActiveServiceNowCard(i), 80 + i * 140));
          }
        } else {
          timeouts.forEach(clearTimeout);
          timeouts = [];
          setActiveServiceNowCard(-1);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const el = serviceNowRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      timeouts.forEach(clearTimeout);
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  // ONE ECOSYSTEM section scroll-triggered sequence
  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeouts.forEach(clearTimeout);
          timeouts = [];
          timeouts.push(setTimeout(() => setActiveEcosystemStep(1), 100));
          timeouts.push(setTimeout(() => setActiveEcosystemStep(2), 350));
          timeouts.push(setTimeout(() => setActiveEcosystemStep(3), 600));
          timeouts.push(setTimeout(() => setActiveEcosystemStep(4), 850));
          timeouts.push(setTimeout(() => setActiveEcosystemStep(5), 1100));
        } else {
          timeouts.forEach(clearTimeout);
          timeouts = [];
          setActiveEcosystemStep(0);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const el = ecosystemRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      timeouts.forEach(clearTimeout);
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  const opportunityCards = [
    { num: '01', title: 'Finance' },
    { num: '02', title: 'Procurement' },
    { num: '03', title: 'Supply chain' },
    { num: '04', title: 'Manufacturing' },
    { num: '05', title: 'Assets' },
    { num: '06', title: 'Workforce' },
    { num: '07', title: 'Enterprise data' },
  ];

  const accordionItems = [
    { num: '01', title: 'Digital Core', count: 4, desc: 'Modernizing core ERP with S/4HANA Cloud, RISE, and Central Finance.' },
    { num: '02', title: 'Finance', count: 9, desc: 'Financial planning, analysis, treasury, and group reporting on SAP.' },
    { num: '03', title: 'Supply Chain', count: 8, desc: 'Intelligent digital supply chain planning with IBP, EWM, and TM.' },
    { num: '04', title: 'Projects & Assets', count: 4, desc: 'Enterprise project portfolio management, asset performance, and maintenance.' },
    { num: '05', title: 'Technology & Integration', count: 9, desc: 'SAP Business Technology Platform (BTP), Datasphere, and enterprise integration.' },
    { num: '06', title: 'Data & Analytics', count: 5, desc: 'SAP Analytics Cloud, Datasphere, BW/4HANA, and enterprise data warehousing.' },
    { num: '07', title: 'Industry Solutions', count: 7, desc: 'Tailored industry vertical solutions for Utilities, Retail, Energy, and Banking.' },
  ];

  const connectedAreasList = [
    { id: '01', title: 'Business & Technology Transformation' },
    { id: '02', title: 'AI & Intelligent Enterprise' },
    { id: '03', title: 'Data & Intelligence' },
    { id: '04', title: 'Enterprise Platforms' },
    { id: '05', title: 'Cloud & Modernization' },
    { id: '06', title: 'Digital Engineering' },
  ];

  const pipelineBoxes = [
    'Finance',
    'Procurement',
    'Supply Chain',
    'Manufacturing',
    'Sales',
    'Workforce',
    'Treasury & Risk',
  ];

  const capabilityColumns = [
    {
      num: '01',
      title: 'Digital Core',
      sublabel: '4 modules',
      topBarColor: '#52E0CB',
      items: ['SAP S/4HANA', 'RISE with SAP', 'S/4HANA Cloud', 'ERP Modernization'],
      isHighlighted: true,
    },
    {
      num: '02',
      title: 'Finance',
      sublabel: '9 modules',
      topBarColor: '#E2E8F0',
      items: ['FI', 'CO', 'FSCM', 'TRM', 'RAR', 'BRIM', 'FICA', 'Group Reporting', 'SAC'],
      isHighlighted: false,
    },
    {
      num: '03',
      title: 'Supply Chain',
      sublabel: '8 modules',
      topBarColor: '#E2E8F0',
      items: ['IBP', 'APO', 'EWM', 'TM', 'MM', 'PP', 'QM', 'Ariba'],
      isHighlighted: false,
    },
    {
      num: '04',
      title: 'Projects & Assets',
      sublabel: '4 modules',
      topBarColor: '#E2E8F0',
      items: ['PS', 'PPM', 'EAM', 'PM'],
      isHighlighted: false,
    },
    {
      num: '05',
      title: 'Technology & Integration',
      sublabel: '9 modules',
      topBarColor: '#071026',
      items: ['SAP BTP', 'CPI', 'Integration Suite', 'API Management', 'Event Mesh', 'ABAP', 'RAP', 'Fiori', 'UI5'],
      isDark: true,
    },
    {
      num: '06',
      title: 'Data & Analytics',
      sublabel: '5 modules',
      topBarColor: '#E2E8F0',
      items: ['SAP Datasphere', 'SAC', 'BW', 'BODS', 'Syniti'],
      isHighlighted: false,
    },
    {
      num: '07',
      title: 'Industry Solutions',
      sublabel: '7 modules',
      topBarColor: '#265CF4',
      items: ['IS-Oil & Gas', 'JVA', 'EHS', 'ATTP', 'IMRO', 'MII', 'Vistex'],
      isBlue: true,
    },
  ];

  const oracleCapabilitiesList = [
    { num: '01', name: 'Oracle Fusion Cloud' },
    { num: '02', name: 'Oracle EBS' },
    { num: '03', name: 'Oracle Financials' },
    { num: '04', name: 'Oracle HCM' },
    { num: '05', name: 'Oracle Payroll' },
    { num: '06', name: 'Oracle EPM' },
    { num: '07', name: 'Oracle Integration Cloud' },
    { num: '08', name: 'OCI' },
    { num: '09', name: 'OTBI' },
    { num: '10', name: 'BI Publisher' },
    { num: '11', name: 'Primavera' },
    { num: '12', name: 'Primavera Cloud' },
    { num: '13', name: 'Unifier' },
  ];

  const serviceNowCapabilitiesList = [
    { num: '01', title: 'ITSM', isDark: true },
    { num: '02', title: 'ITOM' },
    { num: '03', title: 'ITAM' },
    { num: '04', title: 'CSM' },
    { num: '05', title: 'HRSD' },
    { num: '06', title: 'GRC' },
    { num: '07', title: 'SecOps' },
    { num: '08', title: 'Workflow Automation' },
    { num: '09', title: 'Platform Development' },
    { num: '10', title: 'Enterprise Integration', isDark: true },
  ];

  const ecosystemPartners = [
    'SAP S/4HANA Cloud',
    'SAP BTP Platform',
    'SAP Datasphere',
    'SAP Ariba & Business Network',
    'SAP Concur',
    'SAP IBP Planning',
    'SAP SuccessFactors',
    'AWS Cloud Infrastructure',
    'Google Cloud Platform (GCP)',
    'Microsoft Azure Enterprise',
    'Databricks Intelligence',
    'Snowflake Data Cloud',
    'Salesforce Integration',
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#0A1128', backgroundColor: '#FFFFFF' }}>
      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0 110px',
          background: 'linear-gradient(135deg, #08194A 0%, #0D2A75 45%, #1B4AC7 100%)',
          color: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Vertical Background Grid Lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
            backgroundSize: '160px 100%',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Figma Spec Glow Ellipse 1: #1FA5FF 40% with blur(200px) */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '0px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'rgba(31, 165, 255, 0.40)',
            filter: 'blur(200px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Figma Spec Glow Ellipse 2: #67DFCB 22% with blur(230px) */}
        <div
          style={{
            position: 'absolute',
            top: '200px',
            right: '-60px',
            width: '620px',
            height: '620px',
            borderRadius: '50%',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.65)',
              marginBottom: '32px',
              fontWeight: 500,
            }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#top');
              }}
              style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}
            >
              Home
            </a>
            <span>/</span>
            <a
              href="#what-we-do"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#what-we-do');
              }}
              style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}
            >
              What we do
            </a>
            <span>/</span>
            <a
              href="#enterprise-platforms"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#enterprise-platforms');
              }}
              style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}
            >
              Enterprise Platforms
            </a>
            <span>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>SAP</span>
          </div>

          <div
            className="hero-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            <div>
              {/* Tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '24px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
                <span
                  style={{
                    color: '#67DFCB',
                    fontSize: '12.5px',
                    fontWeight: 800,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  SAP TRANSFORMATION
                </span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontSize: 'clamp(40px, 5.2vw, 64px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                }}
              >
                From ERP<br />
                modernization to<br />
                intelligent enterprise.
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: '16.5px',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.82)',
                  marginBottom: '36px',
                  maxWidth: '540px',
                }}
              >
                Ajiledone combines functional, technical, integration, data and industry capabilities across the SAP ecosystem.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href="#sap-capabilities"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('sap-capabilities');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    background: '#FFFFFF',
                    color: '#0A1128',
                    padding: '14px 30px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  See the SAP landscape
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#contact');
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                    padding: '14px 30px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#0A1128';
                    e.currentTarget.style.borderColor = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                >
                  Talk to Ajiledone
                </a>
              </div>

              {/* Functional Sub-tags List */}
              <div
                style={{
                  marginTop: '36px',
                  color: '#67DFCB',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                FUNCTIONAL &bull; TECHNICAL &bull; INTEGRATION &bull; DATA &bull; INDUSTRY
              </div>
            </div>

            {/* Right Column - THE SAP LANDSCAPE Accordion/Card Stack */}
            <div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.65)',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                THE SAP LANDSCAPE
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {accordionItems.map((item, idx) => {
                  const currentActiveIdx =
                    hoveredAccordion !== null ? hoveredAccordion : activeAccordion;
                  const isActive = currentActiveIdx === idx;

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredAccordion(idx)}
                      onMouseLeave={() => setHoveredAccordion(null)}
                      onClick={() => setActiveAccordion(idx)}
                      style={{
                        background: isActive
                          ? '#67DFCB'
                          : 'rgba(255, 255, 255, 0.08)',
                        color: isActive ? '#0A1128' : '#FFFFFF',
                        border: isActive
                          ? '1px solid #67DFCB'
                          : '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '16px',
                        padding: '16px 24px',
                        cursor: 'pointer',
                        transform: isActive ? 'scale(1.045)' : 'scale(1)',
                        boxShadow: isActive
                          ? '0 14px 32px rgba(103, 223, 203, 0.55), 0 0 20px rgba(103, 223, 203, 0.35)'
                          : 'none',
                        backdropFilter: 'blur(12px)',
                        transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <span
                            style={{
                              fontSize: '12.5px',
                              fontWeight: 800,
                              color: isActive ? '#265CF4' : 'rgba(255, 255, 255, 0.65)',
                              transition: 'color 0.3s ease',
                            }}
                          >
                            {item.num}
                          </span>
                          <span
                            style={{
                              fontSize: '15.5px',
                              fontWeight: 800,
                              color: isActive ? '#0A1128' : '#FFFFFF',
                              transition: 'color 0.3s ease',
                            }}
                          >
                            {item.title}
                          </span>
                        </div>

                        <span
                          style={{
                            fontSize: '13.5px',
                            fontWeight: 800,
                            color: isActive ? '#265CF4' : 'rgba(255, 255, 255, 0.65)',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {item.count}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIX AREAS. ONE CONNECTED AGENDA SECTION */}
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

              {[0, 1, 2, 3, 4, 5].map((idx) => {
                const nodeX = idx * 200 + 100;
                const currentActivePill = activeConnectedPill ?? 3;
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

      {/* 3. THE OPPORTUNITY / RETHINK HOW THE ENTERPRISE OPERATES TOGETHER */}
      <section style={{ padding: '100px 0 110px', background: '#FFFFFF' }}>
        <div ref={opportunityRef} className="section-container">
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
                THE OPPORTUNITY
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(34px, 4.2vw, 52px)',
                fontWeight: 800,
                color: '#0A1128',
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                marginBottom: '18px',
                maxWidth: '750px',
              }}
            >
              An opportunity to rethink how<br />
              the enterprise operates together.
            </h2>
            <p
              style={{
                fontSize: '16.5px',
                color: '#64748B',
                maxWidth: '720px',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              SAP transformation represents an opportunity to rethink how finance, procurement, supply chain, manufacturing, assets, workforce and enterprise data operate together.
            </p>
          </div>

          {/* 7 Pipeline Flow Cards with Sequential Left-to-Right Reveal & Line Propagation */}
          <div style={{ position: 'relative', marginTop: '50px' }}>
            <div
              className="approach-cards-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '14px',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {opportunityCards.map((card, idx) => {
                const currentActiveIdx =
                  hoveredOpportunityCard !== null ? hoveredOpportunityCard : activeOpportunityCard;
                const isRevealed = currentActiveIdx >= 0 && idx <= currentActiveIdx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredOpportunityCard(idx)}
                    onMouseLeave={() => setHoveredOpportunityCard(null)}
                    onClick={() => setActiveOpportunityCard(idx)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      cursor: 'pointer',
                      opacity: isRevealed ? 1 : 0,
                      pointerEvents: isRevealed ? 'auto' : 'none',
                      transform: isRevealed ? 'translateY(0) scale(1)' : 'translateY(22px) scale(0.92)',
                      transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        background: '#F3F6FC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '14px',
                        padding: '16px 14px',
                        textAlign: 'left',
                        transition: 'all 0.3s ease',
                        boxShadow: 'none',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          color: '#265CF4',
                          marginBottom: '8px',
                        }}
                      >
                        {card.num}
                      </div>
                      <div
                        style={{
                          fontSize: '14px',
                          fontWeight: 800,
                          color: '#0A1128',
                          lineHeight: 1.25,
                        }}
                      >
                        {card.title}
                      </div>
                    </div>

                    {/* Vertical connector stem */}
                    <div
                      style={{
                        width: '2px',
                        height: '22px',
                        backgroundColor: isRevealed ? '#52E0CB' : 'transparent',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Horizontal Line Propagating Alongside Revealed Cards */}
            <div style={{ position: 'relative', marginTop: '-2px' }}>
              {/* Base background line */}
              <div
                style={{
                  height: '3px',
                  backgroundColor: 'rgba(203, 213, 225, 0.4)',
                  width: '100%',
                  borderRadius: '2px',
                }}
              />
              {/* Active propagating progress line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '3px',
                  backgroundColor: '#52E0CB',
                  width: activeOpportunityCard === -1 && hoveredOpportunityCard === null
                    ? '0%'
                    : `${(((hoveredOpportunityCard !== null ? hoveredOpportunityCard : activeOpportunityCard) + 1) / 7) * 100}%`,
                  borderRadius: '2px',
                  transition: 'width 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            </div>

            {/* Centered OPERATING TOGETHER Button Below the Line */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <span
                style={{
                  display: 'inline-block',
                  background: '#07153B',
                  border: '1.5px solid #52E0CB',
                  color: '#52E0CB',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  padding: '9px 28px',
                  borderRadius: '24px',
                  textTransform: 'uppercase',
                  boxShadow: 'none',
                }}
              >
                OPERATING TOGETHER
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE FULL LANDSCAPE / EVERY LAYER OF THE SAP ESTATE */}
      <section id="sap-capabilities" style={{ padding: '100px 0 110px', background: '#F4F7FC' }}>
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
                  THE FULL LANDSCAPE
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(34px, 4.2vw, 52px)',
                  fontWeight: 800,
                  color: '#0A1128',
                  lineHeight: 1.12,
                  letterSpacing: '-0.025em',
                  marginBottom: '14px',
                }}
              >
                Every layer of the SAP estate.
              </h2>
              <p
                style={{
                  fontSize: '16.5px',
                  color: '#64748B',
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                Functional depth, technical build and industry solutions — mapped as one landscape.
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '56px', fontWeight: 800, color: '#CBD5E1', lineHeight: 1, letterSpacing: '-0.03em' }}>
                46
              </div>
              <div
                style={{
                  fontSize: '11px',
                  color: '#94A3B8',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                }}
              >
                MODULES & SOLUTIONS
              </div>
            </div>
          </div>

          {/* 7 Capability Columns */}
          <div
            className="approach-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '14px',
              alignItems: 'start',
            }}
          >
            {capabilityColumns.map((col, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {/* Column Header */}
                  <div style={{ marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          color: '#265CF4',
                          background: 'rgba(38, 92, 244, 0.08)',
                          padding: '2px 7px',
                          borderRadius: '6px',
                        }}
                      >
                        {col.num}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: '14.5px',
                        fontWeight: 800,
                        color: '#0A1128',
                        lineHeight: 1.25,
                        minHeight: '38px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {col.title}
                    </div>

                    <div
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 600,
                        color: '#94A3B8',
                        marginBottom: '10px',
                      }}
                    >
                      {col.sublabel}
                    </div>

                    {/* Top colored indicator line */}
                    <div
                      style={{
                        height: '3px',
                        backgroundColor: col.topBarColor || '#E2E8F0',
                        width: '100%',
                        borderRadius: '2px',
                        marginBottom: '12px',
                      }}
                    />
                  </div>

                  {/* Module Cards */}
                  {col.items.map((item, iIdx) => {
                    const itemKey = `${idx}-${iIdx}-${item}`;
                    const isHovered = hoveredItemCard === itemKey;

                    let bg = '#FFFFFF';
                    let fg = '#0A1128';
                    let border = '1px solid #E2E8F0';

                    if (col.isHighlighted) {
                      bg = '#52E0CB';
                      fg = '#0A1128';
                      border = '1px solid #52E0CB';
                    } else if (col.isDark) {
                      bg = '#071026';
                      fg = '#FFFFFF';
                      border = '1px solid #071026';
                    } else if (col.isBlue) {
                      bg = '#265CF4';
                      fg = '#FFFFFF';
                      border = '1px solid #265CF4';
                    }

                    return (
                      <div
                        key={iIdx}
                        onMouseEnter={() => setHoveredItemCard(itemKey)}
                        onMouseLeave={() => setHoveredItemCard(null)}
                        style={{
                          background: bg,
                          color: fg,
                          border: border,
                          borderRadius: '12px',
                          padding: '14px 14px',
                          fontSize: '13px',
                          fontWeight: 800,
                          textAlign: 'left',
                          cursor: 'pointer',
                          transform: isHovered ? 'scale(1.08) translateY(-3px)' : 'scale(1)',
                          boxShadow: isHovered
                            ? col.isHighlighted
                              ? '0 12px 24px rgba(82, 224, 203, 0.5)'
                              : col.isBlue
                              ? '0 12px 24px rgba(38, 92, 244, 0.45)'
                              : col.isDark
                              ? '0 12px 24px rgba(7, 16, 38, 0.45)'
                              : '0 10px 22px rgba(0, 0, 0, 0.12)'
                            : '0 2px 5px rgba(0, 0, 0, 0.02)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          position: 'relative',
                          zIndex: isHovered ? 10 : 1,
                        }}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ORACLE CAPABILITIES SECTION (EXACT UPLOADED DESIGN) */}
      <section
        id="oracle-section"
        style={{
          background: 'linear-gradient(135deg, #07194D 0%, #0B2875 50%, #0E3188 100%)',
          color: '#FFFFFF',
          padding: '110px 0 120px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Exact Figma Ellipse Glow Effect: #1FA5FF 35% opacity, 680x680px, top 100px, left -160px, blur 250px */}
        <div
          style={{
            position: 'absolute',
            width: '680px',
            height: '680px',
            top: '100px',
            left: '-160px',
            background: 'rgba(31, 165, 255, 0.35)',
            filter: 'blur(250px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            className="hero-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.35fr',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            {/* Left Header & Metric */}
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
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
                  ORACLE
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 54px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.025em',
                  marginBottom: '24px',
                }}
              >
                Transforming enterprise<br />
                operations through Oracle.
              </h2>

              <p
                style={{
                  fontSize: '16.5px',
                  color: 'rgba(255, 255, 255, 0.78)',
                  lineHeight: 1.6,
                  marginBottom: '54px',
                  maxWidth: '460px',
                }}
              >
                Our Oracle capabilities span financials, HCM and payroll, planning, integration, infrastructure and project controls.
              </p>

              {/* Large Outlined Number Metric: 13 CAPABILITIES */}
              <div>
                <div
                  style={{
                    fontSize: '96px',
                    fontWeight: 800,
                    color: 'transparent',
                    WebkitTextStroke: '2px rgba(255, 255, 255, 0.35)',
                    lineHeight: 0.9,
                    letterSpacing: '-0.04em',
                  }}
                >
                  13
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: '#52E0CB',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    marginTop: '8px',
                  }}
                >
                  CAPABILITIES
                </div>
              </div>
            </div>

            {/* Right Capability List (2 Columns: 1..7 and 8..13) */}
            <div
              className="oracle-items-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0 40px',
              }}
            >
              {/* Column 1: Items 1..7 */}
              <div>
                {oracleCapabilitiesList.slice(0, 7).map((cap, i) => {
                  const isHovered = hoveredOracleCap === i;
                  return (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredOracleCap(i)}
                      onMouseLeave={() => setHoveredOracleCap(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        padding: '20px 12px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
                        cursor: 'pointer',
                        transform: isHovered ? 'translateX(6px)' : 'none',
                        background: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                        borderRadius: '8px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 800,
                          color: '#52E0CB',
                          letterSpacing: '0.04em',
                          flexShrink: 0,
                        }}
                      >
                        {cap.num}
                      </span>
                      <span
                        style={{
                          fontSize: '16.5px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          lineHeight: 1.3,
                        }}
                      >
                        {cap.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Column 2: Items 8..13 */}
              <div>
                {oracleCapabilitiesList.slice(7, 13).map((cap, i) => {
                  const realIdx = i + 7;
                  const isHovered = hoveredOracleCap === realIdx;
                  return (
                    <div
                      key={realIdx}
                      onMouseEnter={() => setHoveredOracleCap(realIdx)}
                      onMouseLeave={() => setHoveredOracleCap(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        padding: '20px 12px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
                        cursor: 'pointer',
                        transform: isHovered ? 'translateX(6px)' : 'none',
                        background: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                        borderRadius: '8px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 800,
                          color: '#52E0CB',
                          letterSpacing: '0.04em',
                          flexShrink: 0,
                        }}
                      >
                        {cap.num}
                      </span>
                      <span
                        style={{
                          fontSize: '16.5px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          lineHeight: 1.3,
                        }}
                      >
                        {cap.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICENOW WORKFLOW CAPABILITIES SECTION (EXACT UPLOADED DESIGN) */}
      <section
        id="servicenow-section"
        style={{
          padding: '110px 0 120px',
          background: '#FFFFFF',
          color: '#0A1128',
          position: 'relative',
        }}
      >
        <div ref={serviceNowRef} className="section-container">
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '54px',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
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
                  SERVICENOW
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(34px, 4.2vw, 52px)',
                  fontWeight: 800,
                  color: '#0A1128',
                  lineHeight: 1.12,
                  letterSpacing: '-0.025em',
                  marginBottom: '16px',
                  maxWidth: '780px',
                }}
              >
                Connecting workflows<br />
                across the enterprise.
              </h2>

              <p
                style={{
                  fontSize: '16.5px',
                  color: '#64748B',
                  maxWidth: '680px',
                  lineHeight: 1.6,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                Service, operations, risk and people processes on one platform automated end to end and integrated with the digital core.
              </p>
            </div>

            <div
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#64748B',
                paddingTop: '28px',
              }}
            >
              10 workflow capabilities
            </div>
          </div>

          {/* 10 Workflow Capabilities Grid Layout (2 Rows of 5 Cards) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
            {/* Row 1: Cards 01 to 05 (Left to Right) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '16px',
                position: 'relative',
              }}
            >
              {serviceNowCapabilitiesList.slice(0, 5).map((item, idx) => {
                const currentActiveIdx =
                  hoveredServiceNowCard !== null ? hoveredServiceNowCard : activeServiceNowCard;
                const isActive = currentActiveIdx === idx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredServiceNowCard(idx)}
                    onMouseLeave={() => setHoveredServiceNowCard(null)}
                    onClick={() => setActiveServiceNowCard(idx)}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        background: isActive ? '#0B1739' : '#F1F5F9',
                        border: isActive ? '1px solid #0B1739' : '1px solid #E2E8F0',
                        borderRadius: '14px',
                        padding: '24px 20px',
                        minHeight: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isActive ? 'translateY(-6px) scale(1.03)' : 'scale(1)',
                        boxShadow: isActive
                          ? '0 12px 28px rgba(7, 17, 38, 0.35)'
                          : 'none',
                        cursor: 'pointer',
                        zIndex: isActive ? 10 : 2,
                      }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          color: isActive ? '#52E0CB' : '#265CF4',
                          marginBottom: '8px',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {item.num}
                      </div>
                      <div
                        style={{
                          fontSize: '15px',
                          fontWeight: 800,
                          color: isActive ? '#FFFFFF' : '#0A1128',
                          lineHeight: 1.25,
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {item.title}
                      </div>
                    </div>

                    {/* Horizontal Connector Line to Next Card */}
                    {idx < 4 && (
                      <div
                        style={{
                          position: 'absolute',
                          right: '-16px',
                          width: '16px',
                          height: '2px',
                          backgroundColor: isActive ? '#52E0CB' : '#CBD5E1',
                          transition: 'background-color 0.3s ease',
                          zIndex: 1,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Normal Vertical Connector Line from Card 05 (Row 1) down to Card 06 (Row 2) */}
            <div
              style={{
                position: 'absolute',
                right: '9.8%',
                top: '44%',
                bottom: '44%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 3,
              }}
            >
              <div
                style={{
                  width: '2px',
                  height: '24px',
                  backgroundColor: '#CBD5E1',
                  borderRadius: '1px',
                }}
              />
            </div>

            {/* Row 2: Cards 10 to 06 (Rendered 10..06 or 06..10 left to right as in uploaded photo) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '16px',
                position: 'relative',
              }}
            >
              {[
                serviceNowCapabilitiesList[9], // 10 Enterprise Integration
                serviceNowCapabilitiesList[8], // 09 Platform Development
                serviceNowCapabilitiesList[7], // 08 Workflow Automation
                serviceNowCapabilitiesList[6], // 07 SecOps
                serviceNowCapabilitiesList[5], // 06 GRC
              ].map((item, i) => {
                const realIdx = 9 - i;
                const currentActiveIdx =
                  hoveredServiceNowCard !== null ? hoveredServiceNowCard : activeServiceNowCard;
                const isActive = currentActiveIdx === realIdx;

                return (
                  <div
                    key={realIdx}
                    onMouseEnter={() => setHoveredServiceNowCard(realIdx)}
                    onMouseLeave={() => setHoveredServiceNowCard(null)}
                    onClick={() => setActiveServiceNowCard(realIdx)}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        background: isActive ? '#0B1739' : '#F1F5F9',
                        border: isActive ? '1px solid #0B1739' : '1px solid #E2E8F0',
                        borderRadius: '14px',
                        padding: '24px 20px',
                        minHeight: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isActive ? 'translateY(-6px) scale(1.03)' : 'scale(1)',
                        boxShadow: isActive
                          ? '0 12px 28px rgba(7, 17, 38, 0.35)'
                          : 'none',
                        cursor: 'pointer',
                        zIndex: isActive ? 10 : 2,
                      }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          color: isActive ? '#52E0CB' : '#265CF4',
                          marginBottom: '8px',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {item.num}
                      </div>
                      <div
                        style={{
                          fontSize: '15px',
                          fontWeight: 800,
                          color: isActive ? '#FFFFFF' : '#0A1128',
                          lineHeight: 1.25,
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {item.title}
                      </div>
                    </div>

                    {/* Horizontal Connector Line to Next Card */}
                    {i < 4 && (
                      <div
                        style={{
                          position: 'absolute',
                          right: '-16px',
                          width: '16px',
                          height: '2px',
                          backgroundColor: isActive ? '#52E0CB' : '#CBD5E1',
                          transition: 'background-color 0.3s ease',
                          zIndex: 1,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. ONE ECOSYSTEM, END TO END SECTION (EXACT UPLOADED FIGMA DESIGN) */}
      <section
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

        <div ref={ecosystemRef} className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Line 0: Top Tag — ONE ECOSYSTEM, END TO END — */}
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

          {/* Line 1 & Line 2: Headline */}
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
              From ERP modernization
            </span>
            <span
              style={{
                display: 'block',
                opacity: activeEcosystemStep >= 2 ? 1 : 0,
                transform: activeEcosystemStep >= 2 ? 'translateY(0)' : 'translateY(16px)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              to intelligent enterprise.
            </span>
          </h2>

          {/* Line 3: Underline Accent Bar */}
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

          {/* Line 4: 5 Translucent Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '44px',
            }}
          >
            {['Functional', 'Technical', 'Integration', 'Data', 'Industry'].map((tag, idx) => {
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

          {/* Button: Talk to Ajiledone about SAP (ALWAYS VISIBLE & Enlarges on Hover) */}
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
              transform: hoveredEcosystemBtn
                ? 'scale(1.09) translateY(-4px)'
                : 'scale(1)',
              boxShadow: hoveredEcosystemBtn
                ? '0 16px 40px rgba(0, 0, 0, 0.4)'
                : '0 12px 30px rgba(0, 0, 0, 0.22)',
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Talk to Ajiledone about SAP
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
