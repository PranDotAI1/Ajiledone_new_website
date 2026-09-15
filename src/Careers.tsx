import { useState } from 'react';
import { ArrowRight, Briefcase, CheckCircle2, ChevronRight, MapPin, Send, X } from 'lucide-react';

interface CareersPageProps {
  onNavigate: (anchor: string) => void;
}

export function CareersPage({ onNavigate }: CareersPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeRoleModal, setActiveRoleModal] = useState<any | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [expandedRoleId, setExpandedRoleId] = useState<string | null>(null);

  const [applicantForm, setApplicantForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    experience: '3-5 years',
    location: 'United States',
    note: '',
  });

  const openRoles = [
    {
      id: 'ai-solutions-architect',
      category: 'ai-data',
      title: 'Principal AI Solutions Architect',
      department: 'AI & Data Intelligence',
      location: 'United States / Remote',
      type: 'Full-time',
      exp: '8+ years',
      desc: 'Lead enterprise AI transformation programs, architecting agentic workflows, LLM fine-tuning pipelines, and RAG architectures for Fortune 500 clients.',
      skills: ['Python', 'LangChain', 'PyTorch', 'Azure OpenAI', 'Vector DBs'],
    },
    {
      id: 'sap-btp-lead',
      category: 'sap',
      title: 'SAP BTP & RISE Transformation Lead',
      department: 'Enterprise Platforms',
      location: 'Dubai, UAE / Hybrid',
      type: 'Full-time',
      exp: '7+ years',
      desc: 'Drive clean-core SAP S/4HANA migrations, building custom extensions on SAP BTP and integrating cloud ERP landscapes.',
      skills: ['SAP BTP', 'S/4HANA', 'ABAP Cloud', 'CAP/RAP', 'Integration Suite'],
    },
    {
      id: 'senior-data-engineer',
      category: 'ai-data',
      title: 'Senior Data & Analytics Engineer',
      department: 'AI & Data Intelligence',
      location: 'Bengaluru, India / Hybrid',
      type: 'Full-time',
      exp: '5+ years',
      desc: 'Build scalable data lakehouses, real-time streaming pipelines, and unified data governance frameworks for energy and retail clients.',
      skills: ['Databricks', 'Snowflake', 'dbt', 'PySpark', 'Kafka'],
    },
    {
      id: 'cloud-devops-architect',
      category: 'engineering',
      title: 'Cloud Native & DevOps Architect',
      department: 'Digital Engineering',
      location: 'United States / Hybrid',
      type: 'Full-time',
      exp: '6+ years',
      desc: 'Design resilient multi-cloud infrastructure, automated Kubernetes deployments, and GitOps CI/CD security pipelines.',
      skills: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'ArgoCD'],
    },
    {
      id: 'fullstack-lead-engineer',
      category: 'engineering',
      title: 'Lead Full-Stack Product Engineer',
      department: 'Digital Product Engineering',
      location: 'Bengaluru, India / Hybrid',
      type: 'Full-time',
      exp: '6+ years',
      desc: 'Architect high-performance web applications and enterprise micro-frontends using React, TypeScript, Node.js, and cloud backend microservices.',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Next.js'],
    },
    {
      id: 'supply-chain-consultant',
      category: 'architecture',
      title: 'Supply Chain Transformation Lead',
      department: 'Industry Solutions',
      location: 'Dubai, UAE / Hybrid',
      type: 'Full-time',
      exp: '7+ years',
      desc: 'Advise life sciences and automotive leaders on predictive sourcing, logistics optimization, and real-time inventory visibility.',
      skills: ['Supply Chain Analytics', 'SAP IBP', 'Kinaxis', 'Operations Research'],
    },
    {
      id: 'enterprise-security-architect',
      category: 'architecture',
      title: 'Enterprise Cyber & Security Architect',
      department: 'Enterprise Architecture',
      location: 'United States / Remote',
      type: 'Full-time',
      exp: '8+ years',
      desc: 'Establish zero-trust security postures, cloud compliance frameworks, and IAM architectures across global hybrid ecosystems.',
      skills: ['Zero Trust', 'ISO 27001', 'Cloud Security', 'IAM', 'SOC 2'],
    },
    {
      id: 'sap-analytics-specialist',
      category: 'sap',
      title: 'SAP Analytics Cloud (SAC) Specialist',
      department: 'Enterprise Platforms',
      location: 'Bengaluru, India / Hybrid',
      type: 'Full-time',
      exp: '4+ years',
      desc: 'Create executive analytics dashboards, predictive financial models, and live SAP S/4HANA reporting systems.',
      skills: ['SAP SAC', 'SAP BW/4HANA', 'BusinessObjects', 'Financial Planning'],
    },
    {
      id: 'mlops-engineer',
      category: 'ai-data',
      title: 'MLOps & AI Platform Engineer',
      department: 'AI & Data Intelligence',
      location: 'Dubai, UAE / Remote',
      type: 'Full-time',
      exp: '5+ years',
      desc: 'Deploy and monitor production LLMs, automated model retraining loops, and scalable inference endpoints on Kubernetes.',
      skills: ['MLflow', 'Kubeflow', 'Docker', 'Triton Server', 'Python'],
    },
    {
      id: 'digital-transformation-manager',
      category: 'architecture',
      title: 'Senior Digital Transformation Manager',
      department: 'Transformation Practice',
      location: 'United States / Travel',
      type: 'Full-time',
      exp: '8+ years',
      desc: 'Orchestrate end-to-end enterprise modernizations, managing executive client relationships and cross-functional engineering pods.',
      skills: ['Program Delivery', 'Change Management', 'Agile @ Scale', 'Strategy'],
    },
  ];

  const filteredRoles = openRoles.filter((role) => {
    if (selectedCategory === 'all') return true;
    return role.category === selectedCategory;
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantForm.fullName || !applicantForm.email) return;
    setApplicationSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#FFFFFF', color: '#0B1739' }}>
      {/* 1. HERO SECTION (Exact Figma Specs & Gradient from Uploaded Screenshots) */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(8, 25, 74, 1) 0%, rgba(13, 42, 117, 1) 50%, rgba(27, 74, 199, 1) 100%)',
          color: '#FFFFFF',
          padding: '120px 0 100px',
          minHeight: '800px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background Architectural Grid Lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '160px 100%, 100% 160px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Figma Layer Blur Ellipse Glow 1: Blue Blur (480x480, blur 200, rgba(31, 165, 255, 0.4)) */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '-100px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            backgroundColor: 'rgba(31, 165, 255, 0.4)',
            filter: 'blur(200px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Figma Layer Blur Ellipse Glow 2: Mint Blur (620x620, blur 230, rgba(103, 223, 203, 0.22)) */}
        <div
          style={{
            position: 'absolute',
            top: '200px',
            right: '100px',
            width: '620px',
            height: '620px',
            borderRadius: '50%',
            backgroundColor: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', padding: '0 32px', width: '100%' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '28px', fontWeight: 500 }}>
            Home &nbsp;/&nbsp; <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Careers</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            {/* Left Column Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <div style={{ width: '28px', height: '2.5px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#67DFCB', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                  CAREERS AT AJILEDONE
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(48px, 5.5vw, 68px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  margin: '0 0 24px 0',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Build what<br />comes next.
              </h1>

              <p
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6,
                  maxWidth: '480px',
                  marginBottom: '28px',
                  fontWeight: 400,
                }}
              >
                Join a company where technology isn't simply something you work with. It is something you use to solve meaningful problems.
              </p>

              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#67DFCB',
                  lineHeight: 1.65,
                  marginBottom: '38px',
                  letterSpacing: '0.01em',
                }}
              >
                Think differently. Learn continuously. Engineer boldly.<br />
                Create meaningful impact.
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <button
                  onClick={() => onNavigate && onNavigate('#open-roles')}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#07132B',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    padding: '14px 32px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.18)';
                  }}
                >
                  See open roles
                </button>

                <button
                  onClick={() => {
                    const diffEl = document.getElementById('why-this-place');
                    if (diffEl) diffEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    backgroundColor: 'transparent',
                    border: '1.2px solid rgba(255, 255, 255, 0.4)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '14px 30px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Life at Ajiledone
                </button>
              </div>

              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#67DFCB',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                INDUSTRIES &nbsp;·&nbsp; TECHNOLOGIES &nbsp;·&nbsp; GEOGRAPHIES
              </div>
            </div>

            {/* Right Column: WHERE YOU'D WORK Stacked Cards (Matching Figma Inspect Specs) */}
            <div style={{ maxWidth: '490px', width: '100%', justifySelf: 'end' }}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'rgba(255, 255, 255, 0.65)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  marginLeft: '36px',
                }}
              >
                WHERE YOU'D WORK
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Card 1: 10 Industries (Glassmorphism 452x128, radius 18px, border 1.2px solid rgba(255,255,255,0.3)) */}
                <div
                  style={{
                    height: '128px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    border: '1.2px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderRadius: '18px',
                    padding: '20px 26px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    boxShadow: '0px 14px 36px rgba(3, 10, 41, 0.4)',
                    marginLeft: '36px',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.04)';
                    e.currentTarget.style.boxShadow = '0px 24px 48px rgba(31, 165, 255, 0.35)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0px 14px 36px rgba(3, 10, 41, 0.4)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                >
                  <div style={{ fontSize: '44px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, flexShrink: 0, fontFamily: "'Inter', sans-serif" }}>
                    10
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
                      INDUSTRIES
                    </div>
                    <div style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.45, fontWeight: 400 }}>
                      Energy &middot; Manufacturing &middot; Healthcare &middot; Financial services &middot; and six more
                    </div>
                  </div>
                </div>

                {/* Card 2: 06 Technologies (Solid Mint #67DFCB Card, Radius 18px, Extended Left) */}
                <div
                  style={{
                    height: '128px',
                    backgroundColor: '#67DFCB',
                    color: '#08194A',
                    borderRadius: '18px',
                    padding: '20px 26px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    boxShadow: '0px 14px 36px rgba(3, 10, 41, 0.4)',
                    marginLeft: '0px',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.04)';
                    e.currentTarget.style.boxShadow = '0px 24px 48px rgba(103, 223, 203, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0px 14px 36px rgba(3, 10, 41, 0.4)';
                  }}
                >
                  <div style={{ fontSize: '44px', fontWeight: 800, color: '#08194A', lineHeight: 1, flexShrink: 0, fontFamily: "'Inter', sans-serif" }}>
                    06
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#08194A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
                      TECHNOLOGIES
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#08194A', lineHeight: 1.45, fontWeight: 600 }}>
                      SAP &middot; AI &middot; Data &middot; Cloud &middot; Enterprise platforms &middot; Digital engineering
                    </div>
                  </div>
                </div>

                {/* Card 3: 05 Geographies (Glassmorphism 452x128, radius 18px, border 1.2px solid rgba(255,255,255,0.3)) */}
                <div
                  style={{
                    height: '128px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    border: '1.2px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderRadius: '18px',
                    padding: '20px 26px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    boxShadow: '0px 14px 36px rgba(3, 10, 41, 0.4)',
                    marginLeft: '36px',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.04)';
                    e.currentTarget.style.boxShadow = '0px 24px 48px rgba(31, 165, 255, 0.35)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0px 14px 36px rgba(3, 10, 41, 0.4)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                >
                  <div style={{ fontSize: '44px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, flexShrink: 0, fontFamily: "'Inter', sans-serif" }}>
                    05
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
                      GEOGRAPHIES
                    </div>
                    <div style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.45, fontWeight: 400 }}>
                      North America &middot; Europe &middot; Middle East &middot; India &middot; Asia-Pacific
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-text under cards */}
              <p style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5, marginTop: '20px', marginBottom: 0, marginLeft: '36px', maxWidth: '420px' }}>
                Our people work across industries, technologies and geographies to help organizations address complex transformation challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY THIS PLACE IS DIFFERENT SECTION (Exact Uploaded Screenshot) */}
      <section id="why-this-place" style={{ padding: '95px 0 85px', backgroundColor: '#FFFFFF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'left', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '28px', height: '2.5px', backgroundColor: '#2563EB', borderRadius: '1.5px' }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#2563EB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                WHY THIS PLACE IS DIFFERENT
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 4.2vw, 52px)', fontWeight: 800, color: '#0A1128', margin: 0, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              It is something you use to<br />solve meaningful problems.
            </h2>
            {/* Mint Green Underline Bar matching uploaded screenshot */}
            <div style={{ width: '280px', height: '4px', backgroundColor: '#5EEAD4', borderRadius: '2px', marginTop: '12px', marginBottom: '24px' }} />

            <p style={{ fontSize: '15px', color: '#475569', maxWidth: '500px', margin: 0, lineHeight: 1.6 }}>
              At Ajiledone, our people work across industries, technologies and geographies to help organizations address complex transformation challenges.
            </p>
          </div>

          {/* 3 Pillar Cards Grid with Dynamic Colorful Hover Enlargement */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {/* Card 1: Dark Navy -> Vibrant Blue/Cyan Gradient on Hover */}
            <div
              style={{
                backgroundColor: '#0A1128',
                color: '#FFFFFF',
                borderRadius: '20px',
                padding: '36px 30px',
                boxShadow: '0 12px 32px rgba(10, 17, 40, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '200px',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.04)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #0A1128 0%, #1653D8 100%)';
                e.currentTarget.style.boxShadow = '0 24px 50px rgba(22, 83, 216, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.background = '#0A1128';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(10, 17, 40, 0.15)';
              }}
            >
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', margin: '0 0 12px 0', letterSpacing: '-0.01em' }}>
                  Complex, not cosmetic
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, margin: 0 }}>
                  The problems are multi-country, multi-system and multi-vendor. That is the work.
                </p>
              </div>
            </div>

            {/* Card 2: Light Ice Blue -> Solid Mint Green on Hover */}
            <div
              style={{
                backgroundColor: '#EEF2FB',
                color: '#0A1128',
                borderRadius: '20px',
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '200px',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.04)';
                e.currentTarget.style.backgroundColor = '#5EEAD4';
                e.currentTarget.style.boxShadow = '0 24px 50px rgba(94, 234, 212, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.backgroundColor = '#EEF2FB';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0A1128', margin: '0 0 12px 0', letterSpacing: '-0.01em' }}>
                  Client-facing early
                </h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  You present your own thinking, with senior support — not after two years of note-taking.
                </p>
              </div>
            </div>

            {/* Card 3: Light Ice Blue -> Vibrant Royal Blue on Hover */}
            <div
              style={{
                backgroundColor: '#EEF2FB',
                color: '#0A1128',
                borderRadius: '20px',
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '200px',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.04)';
                e.currentTarget.style.backgroundColor = '#2563EB';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.boxShadow = '0 24px 50px rgba(37, 99, 235, 0.45)';
                const titleEl = e.currentTarget.querySelector('h3');
                const descEl = e.currentTarget.querySelector('p');
                if (titleEl) titleEl.style.color = '#FFFFFF';
                if (descEl) descEl.style.color = 'rgba(255, 255, 255, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.backgroundColor = '#EEF2FB';
                e.currentTarget.style.color = '#0A1128';
                e.currentTarget.style.boxShadow = 'none';
                const titleEl = e.currentTarget.querySelector('h3');
                const descEl = e.currentTarget.querySelector('p');
                if (titleEl) titleEl.style.color = '#0A1128';
                if (descEl) descEl.style.color = '#475569';
              }}
            >
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0A1128', margin: '0 0 12px 0', letterSpacing: '-0.01em', transition: 'color 0.3s ease' }}>
                  Breadth on purpose
                </h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: 0, transition: 'color 0.3s ease' }}>
                  Move between industries and platforms. Depth follows exposure, not the other way round.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE ASK OF EACH OTHER (Four Instructions - Exact Uploaded Screenshots) */}
      <section style={{ padding: '100px 0 90px', backgroundColor: '#06112E', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        {/* Figma Layer Blur Glow 1: Blue Blur (520x520, left 300px, blur 250, rgba(38, 92, 244, 0.4)) */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '15%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            backgroundColor: 'rgba(38, 92, 244, 0.4)',
            filter: 'blur(250px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Figma Layer Blur Glow 2: Mint Blur (520x520, top 60px, left 980px, blur 230, rgba(103, 223, 203, 0.2)) */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '-60px',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            backgroundColor: 'rgba(103, 223, 203, 0.2)',
            filter: 'blur(230px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'left', marginBottom: '52px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '28px', height: '2.5px', backgroundColor: '#67DFCB', borderRadius: '1.5px' }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                WHAT WE ASK OF EACH OTHER
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(38px, 4.5vw, 56px)', fontWeight: 800, color: '#FFFFFF', margin: 0, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Four instructions.
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.75)', maxWidth: '640px', marginTop: '16px', lineHeight: 1.6 }}>
              Not values on a wall — the four things we actually expect from each other, from week one.
            </p>
          </div>

          {/* 4 Large Principle Cards Grid (Matching Uploaded Screenshot 1) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '44px' }}>
            {/* Card 01: Mint Green */}
            <div
              style={{
                backgroundColor: '#67DFCB',
                color: '#07132B',
                borderRadius: '24px',
                padding: '36px 28px 40px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(103, 223, 203, 0.25)',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.04)';
                e.currentTarget.style.boxShadow = '0 24px 50px rgba(103, 223, 203, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(103, 223, 203, 0.25)';
              }}
            >
              {/* Card 01 Watermark (Exact Inter 800 Extra Bold 96px, -4% letter spacing, 1.6px stroke) */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '14px',
                  width: '131px',
                  height: '116px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: '96px',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  color: 'transparent',
                  WebkitTextStroke: '1.6px rgba(38, 92, 244, 0.4)',
                  pointerEvents: 'none',
                  textAlign: 'right',
                  userSelect: 'none',
                }}
              >
                01
              </div>

              <div style={{ fontSize: '13px', fontWeight: 800, color: '#265CF4', letterSpacing: '0.04em', marginBottom: '24px' }}>
                01
              </div>

              <div>
                <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#07132B', margin: '0 0 16px 0', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                  Think<br />differently.
                </h3>
                <div style={{ width: '36px', height: '3px', backgroundColor: '#265CF4', marginBottom: '18px' }} />
                <p style={{ fontSize: '13.5px', color: '#07132B', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                  Challenge the conventional approach when it is the wrong one for this problem.
                </p>
              </div>
            </div>

            {/* Card 02: Dark Royal Blue / Indigo */}
            <div
              style={{
                backgroundColor: 'rgba(35, 50, 97, 0.85)',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: '36px 28px 40px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.3)',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.04)';
                e.currentTarget.style.boxShadow = '0 24px 50px rgba(103, 223, 203, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(103, 223, 203, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
            >
              {/* Card 02 Watermark (Exact Inter 800 Extra Bold 96px, -4% letter spacing, 1.6px stroke) */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '14px',
                  width: '131px',
                  height: '116px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: '96px',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  color: 'transparent',
                  WebkitTextStroke: '1.6px rgba(255, 255, 255, 0.2)',
                  pointerEvents: 'none',
                  textAlign: 'right',
                  userSelect: 'none',
                }}
              >
                02
              </div>

              <div style={{ fontSize: '13px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.04em', marginBottom: '24px' }}>
                02
              </div>

              <div>
                <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                  Learn<br />continuously.
                </h3>
                <div style={{ width: '36px', height: '3px', backgroundColor: '#67DFCB', marginBottom: '18px' }} />
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.55, margin: 0 }}>
                  The stack changes every quarter. So does what is expected of you.
                </p>
              </div>
            </div>

            {/* Card 03: Vibrant Royal Blue */}
            <div
              style={{
                backgroundColor: '#265CF4',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: '36px 28px 40px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(38, 92, 244, 0.35)',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.04)';
                e.currentTarget.style.boxShadow = '0 24px 50px rgba(38, 92, 244, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(38, 92, 244, 0.35)';
              }}
            >
              {/* Card 03 Watermark (Exact Inter 800 Extra Bold 96px, -4% letter spacing, 1.6px stroke) */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '14px',
                  width: '131px',
                  height: '116px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: '96px',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  color: 'transparent',
                  WebkitTextStroke: '1.6px rgba(255, 255, 255, 0.35)',
                  pointerEvents: 'none',
                  textAlign: 'right',
                  userSelect: 'none',
                }}
              >
                03
              </div>

              <div style={{ fontSize: '13px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.04em', marginBottom: '24px' }}>
                03
              </div>

              <div>
                <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                  Engineer<br />boldly.
                </h3>
                <div style={{ width: '36px', height: '3px', backgroundColor: '#67DFCB', marginBottom: '18px' }} />
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.55, margin: 0 }}>
                  Build things that carry real load &mdash; then own how they behave in production.
                </p>
              </div>
            </div>

            {/* Card 04: Dark Slate Blue */}
            <div
              style={{
                backgroundColor: 'rgba(27, 43, 72, 0.85)',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: '36px 28px 40px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.3)',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.04)';
                e.currentTarget.style.boxShadow = '0 24px 50px rgba(103, 223, 203, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(103, 223, 203, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
            >
              {/* Card 04 Watermark (Exact Inter 800 Extra Bold 96px, -4% letter spacing, 1.6px stroke) */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '14px',
                  width: '131px',
                  height: '116px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: '96px',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  color: 'transparent',
                  WebkitTextStroke: '1.6px rgba(255, 255, 255, 0.2)',
                  pointerEvents: 'none',
                  textAlign: 'right',
                  userSelect: 'none',
                }}
              >
                04
              </div>

              <div style={{ fontSize: '13px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.04em', marginBottom: '24px' }}>
                04
              </div>

              <div>
                <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                  Create<br />meaningful<br />impact.
                </h3>
                <div style={{ width: '36px', height: '3px', backgroundColor: '#67DFCB', marginBottom: '18px' }} />
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.55, margin: 0 }}>
                  Measure your work by what changed for the business, not by what shipped.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer Note (Screenshot 1) */}
          <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', marginTop: '24px' }}>
            Join a company where technology isn't simply something you work with.
          </div>
        </div>
      </section>

      {/* 4. OPEN ROLES & INTERACTIVE APPLICATION EXPLORER (Exact Uploaded Screenshots) */}
      <section
        id="open-roles-section"
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(8, 25, 74, 1) 0%, rgba(13, 42, 117, 1) 50%, rgba(27, 74, 199, 1) 100%)',
          color: '#FFFFFF',
          padding: '105px 0 115px',
          overflow: 'hidden',
        }}
      >
        {/* Figma Layer Blur Glow: Mint Blur (620x620, top -20px, left 420px, blur 230, rgba(103, 223, 203, 0.22)) */}
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            left: 'calc(50% - 310px)',
            width: '620px',
            height: '620px',
            borderRadius: '50%',
            backgroundColor: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                CAREERS AT AJILEDONE
              </span>
              <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
            </div>

            <h2 style={{ fontSize: 'clamp(40px, 4.8vw, 64px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, marginBottom: '0', letterSpacing: '-0.025em' }}>
              Build what comes next.
            </h2>

            {/* Mint Green Underline Bar matching uploaded screenshot */}
            <div style={{ width: '240px', height: '4px', backgroundColor: '#67DFCB', borderRadius: '2px', margin: '16px auto 28px' }} />

            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 36px', fontWeight: 500 }}>
              Work across industries, technologies and geographies on problems that are genuinely complex.
            </p>

            {/* 4 Value Pills matching uploaded screenshot 1 */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
              {['Think differently', 'Learn continuously', 'Engineer boldly', 'Create meaningful impact'].map((val) => (
                <div
                  key={val}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '9999px',
                    padding: '8px 20px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span style={{ color: '#67DFCB', fontSize: '14px' }}>•</span>
                  <span>{val}</span>
                </div>
              ))}
            </div>

            {/* 2 Action Buttons matching uploaded screenshot */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '0' }}>
              <button
                onClick={() => onNavigate('#open-roles')}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#265CF4',
                  fontWeight: 800,
                  fontSize: '14.5px',
                  padding: '13px 32px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 14px 32px rgba(255, 255, 255, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                }}
              >
                See open roles
              </button>

              <button
                onClick={() => onNavigate('#contact')}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  padding: '13px 32px',
                  borderRadius: '9999px',
                  border: '1.2px solid rgba(255, 255, 255, 0.4)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                Send us your thinking
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CYAN BANNER ("DON'T BE WEIRD - Would you like more information...") */}
      <section
        style={{
          background: 'linear-gradient(90deg, #1E66F5 0%, #2575FC 35%, #00A6FE 75%, #00C6FF 100%)',
          color: '#FFFFFF',
          padding: '72px 0',
        }}
      >
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
            <div style={{ maxWidth: '940px' }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.85)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>
                DON'T BE WEIRD
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 800, color: '#FFFFFF', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                <span style={{ display: 'inline-block' }}>Would you like more information, or</span><br />
                <span style={{ display: 'inline-block' }}>do you have a question?</span>
              </h2>
            </div>

            <button
              onClick={() => onNavigate('#contact')}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#2575FC',
                fontWeight: 700,
                fontSize: '14.5px',
                padding: '13px 28px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                flexShrink: 0,
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 255, 255, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      </section>

      {/* MODAL FOR JOB APPLICATION */}
      {activeRoleModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(6, 17, 46, 0.82)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0B1739',
              borderRadius: '24px',
              maxWidth: '620px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '36px 32px',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
            }}
          >
            <button
              onClick={() => setActiveRoleModal(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748B',
              }}
            >
              <X size={20} />
            </button>

            {applicationSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#5EEAD4',
                    color: '#0B1739',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#0B1739', marginBottom: '12px' }}>
                  Application Received!
                </h3>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '28px' }}>
                  Thank you for applying for <strong>{activeRoleModal.title}</strong>. Our talent team will review your submission and contact you at <strong>{applicantForm.email}</strong> within 3 business days.
                </p>
                <button
                  onClick={() => setActiveRoleModal(null)}
                  style={{
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '14.5px',
                    padding: '14px 32px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Close window
                </button>
              </div>
            ) : (
              <div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#2563EB', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  APPLY FOR POSITION
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0B1739', margin: '0 0 6px 0', letterSpacing: '-0.015em' }}>
                  {activeRoleModal.title}
                </h3>
                <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '24px' }}>
                  {activeRoleModal.department} &nbsp;·&nbsp; {activeRoleModal.location}
                </div>

                <form onSubmit={handleFormSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#0B1739', marginBottom: '6px', textTransform: 'uppercase' }}>
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantForm.fullName}
                        onChange={(e) => setApplicantForm({ ...applicantForm, fullName: e.target.value })}
                        placeholder="Alex Morgan"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#F8FAFC',
                          fontSize: '14px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#0B1739', marginBottom: '6px', textTransform: 'uppercase' }}>
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantForm.email}
                        onChange={(e) => setApplicantForm({ ...applicantForm, email: e.target.value })}
                        placeholder="alex@example.com"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#F8FAFC',
                          fontSize: '14px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#0B1739', marginBottom: '6px', textTransform: 'uppercase' }}>
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        value={applicantForm.phone}
                        onChange={(e) => setApplicantForm({ ...applicantForm, phone: e.target.value })}
                        placeholder="+1 555-0199"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#F8FAFC',
                          fontSize: '14px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#0B1739', marginBottom: '6px', textTransform: 'uppercase' }}>
                        PREFERRED HUB
                      </label>
                      <select
                        value={applicantForm.location}
                        onChange={(e) => setApplicantForm({ ...applicantForm, location: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#F8FAFC',
                          fontSize: '14px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      >
                        <option value="United States">United States</option>
                        <option value="Dubai UAE">Dubai (UAE)</option>
                        <option value="Bengaluru India">Bengaluru (India)</option>
                        <option value="Remote">Remote</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#0B1739', marginBottom: '6px', textTransform: 'uppercase' }}>
                      LINKEDIN / PORTFOLIO / GITHUB LINK
                    </label>
                    <input
                      type="url"
                      value={applicantForm.portfolio}
                      onChange={(e) => setApplicantForm({ ...applicantForm, portfolio: e.target.value })}
                      placeholder="https://linkedin.com/in/yourname"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        backgroundColor: '#F8FAFC',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#0B1739', marginBottom: '6px', textTransform: 'uppercase' }}>
                      WHY AJILEDONE? (TELL US YOUR THINKING)
                    </label>
                    <textarea
                      rows={3}
                      value={applicantForm.note}
                      onChange={(e) => setApplicantForm({ ...applicantForm, note: e.target.value })}
                      placeholder="Share a complex problem you recently solved or what draws you to this role..."
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        backgroundColor: '#F8FAFC',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      backgroundColor: '#2563EB',
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '15px',
                      padding: '14px 24px',
                      borderRadius: '9999px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 8px 24px rgba(37, 99, 235, 0.3)',
                    }}
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
