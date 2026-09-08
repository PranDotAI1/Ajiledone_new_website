import React, { useState, useMemo } from 'react';
import { Search, MapPin, Briefcase, ArrowRight, X, Check, ChevronDown } from 'lucide-react';

interface OpenRolesPageProps {
  onNavigate?: (page: string) => void;
}

interface RoleItem {
  id: string;
  title: string;
  dept: string;
  location: string;
  type: string;
  new?: boolean;
  description: string;
  bgColor?: string;
  textColor?: string;
  badgeBg?: string;
  badgeText?: string;
  buttonStyle?: 'white' | 'outline' | 'dark' | 'mint';
  responsibilities?: string[];
  requirements?: string[];
}

const ROLES_DATA: RoleItem[] = [
  {
    id: 'ai-engineer-llm',
    title: 'AI Engineer — LLM Systems',
    dept: 'AI & Intelligent Enterprise',
    location: 'Remote · India',
    type: 'Full-time',
    new: true,
    description: 'Build retrieval, agent and evaluation layers that hold up in production.',
    bgColor: '#265CF4',
    textColor: '#FFFFFF',
    badgeBg: 'rgba(255, 255, 255, 0.2)',
    badgeText: '#FFFFFF',
    buttonStyle: 'white',
    responsibilities: [
      'Architect and deploy multi-agent RAG systems for enterprise knowledge bases.',
      'Fine-tune open-weights LLMs for specialized domain tasks (finance, supply chain).',
      'Design latency-optimized inference pipelines with streaming responses.',
      'Implement evaluation frameworks (Ragas, DeepEval) for hallucination prevention.'
    ],
    requirements: [
      '3+ years experience with Python, PyTorch, LangChain/LlamaIndex, and Vector DBs (Qdrant, Pinecone).',
      'Hands-on experience with vLLM, TensorRT-LLM, or Ollama deployment.',
      'Strong software engineering fundamentals (Docker, Kubernetes, Async Python).'
    ]
  },
  {
    id: 'sap-finance',
    title: 'SAP S/4HANA Finance Consultant',
    dept: 'Enterprise Platforms',
    location: 'Bengaluru, India',
    type: 'Full-time',
    new: true,
    description: 'FI/CO, Group Reporting and the finance processes behind them.',
    bgColor: '#FFFFFF',
    textColor: '#0A1128',
    badgeBg: '#EFF6FF',
    badgeText: '#265CF4',
    buttonStyle: 'outline',
    responsibilities: [
      'Lead S/4HANA Finance implementation modules including Universal Journal and Group Reporting.',
      'Design automated Bank Communication Management and Cash Management workflows.',
      'Collaborate with business CFO teams to streamline period-end closing.'
    ],
    requirements: [
      '5+ years in SAP FI/CO with at least two full lifecycle S/4HANA greenfield/brownfield implementations.',
      'Strong expertise in Central Finance, S/4HANA Cloud, and BTP integrations.'
    ]
  },
  {
    id: 'senior-data-engineer',
    title: 'Senior Data Engineer',
    dept: 'Data & Intelligence',
    location: 'Bengaluru, India',
    type: 'Full-time',
    description: 'Pipelines, streaming and lakehouse models for enterprise-scale data.',
    bgColor: '#FFFFFF',
    textColor: '#0A1128',
    badgeBg: '#EFF6FF',
    badgeText: '#265CF4',
    buttonStyle: 'outline',
    responsibilities: [
      'Build real-time data ingestion pipelines using Apache Kafka and PySpark.',
      'Design Delta Lake / Icehouse architectures on AWS Databricks and Snowflake.',
      'Establish data quality monitoring using Great Expectations and dbt.'
    ],
    requirements: [
      '4+ years in data engineering with strong SQL, Python, Databricks, and dbt mastery.',
      'Experience building streaming pipelines with sub-second SLA.'
    ]
  },
  {
    id: 'enterprise-architect',
    title: 'Enterprise Architect',
    dept: 'Business & Technology Transformation',
    location: 'Vienna, VA',
    type: 'Full-time',
    description: 'Target architectures across applications, data, AI, cloud and integration.',
    bgColor: '#0A1128',
    textColor: '#FFFFFF',
    badgeBg: 'rgba(255, 255, 255, 0.15)',
    badgeText: '#FFFFFF',
    buttonStyle: 'white',
    responsibilities: [
      'Define enterprise-wide cloud target architectures for Fortune 500 clients.',
      'Align legacy modernization roadmaps with modern microservices and event-driven patterns.',
      'Advise executive leadership on technology investment and governance.'
    ],
    requirements: [
      '8+ years in IT architecture, TOGAF certification preferred.',
      'Deep architectural knowledge across AWS/Azure, SAP, and Modern API Gateways.'
    ]
  },
  {
    id: 'cloud-azure',
    title: 'Cloud Platform Engineer (Azure)',
    dept: 'Cloud & Modernization',
    location: 'Dubai, UAE',
    type: 'Full-time',
    description: 'Landing zones, IaC and the path that gets code safely to production.',
    bgColor: '#FFFFFF',
    textColor: '#0A1128',
    badgeBg: '#EFF6FF',
    badgeText: '#265CF4',
    buttonStyle: 'outline',
    responsibilities: [
      'Deploy and maintain Azure Enterprise Landing Zones using Terraform and Bicep.',
      'Implement Zero Trust network security and Azure Sentinel monitoring.',
      'Automate CI/CD infrastructure deployment via Azure DevOps pipelines.'
    ],
    requirements: [
      '4+ years in Azure Cloud Infrastructure, Terraform, and AKS (Azure Kubernetes Service).',
      'AZ-305 or AZ-400 certification preferred.'
    ]
  },
  {
    id: 'servicenow-dev',
    title: 'ServiceNow Developer',
    dept: 'Enterprise Platforms',
    location: 'Bengaluru, India',
    type: 'Full-time',
    description: 'ITSM, ITOM and workflow automation integrated with the digital core.',
    bgColor: '#FFFFFF',
    textColor: '#0A1128',
    badgeBg: '#EFF6FF',
    badgeText: '#265CF4',
    buttonStyle: 'outline',
    responsibilities: [
      'Develop custom ServiceNow applications using Flow Designer and IntegrationHub.',
      'Implement Automated Test Framework (ATF) and Service Portal widgets.',
      'Integrate ServiceNow with Jira, Salesforce, and Azure AD.'
    ],
    requirements: [
      '3+ years experience as certified ServiceNow Application Developer (CAD).',
      'Proficient in JavaScript, REST/SOAP web services, and HTML/CSS.'
    ]
  },
  {
    id: 'fullstack-react-node',
    title: 'Full-stack Engineer (React / Node)',
    dept: 'Digital Engineering',
    location: 'Remote · India',
    type: 'Full-time',
    description: 'Digital products and enterprise platforms, from MVP to scale.',
    bgColor: '#FFFFFF',
    textColor: '#0A1128',
    badgeBg: '#EFF6FF',
    badgeText: '#265CF4',
    buttonStyle: 'outline',
    responsibilities: [
      'Build responsive, high-performance web applications using React, Next.js, and TypeScript.',
      'Design RESTful & GraphQL microservices using Node.js, Express, and PostgreSQL.',
      'Ensure 100% unit and integration test coverage with Jest and Cypress.'
    ],
    requirements: [
      '3+ years full-stack development experience.',
      'Deep understanding of React state management, server-side rendering, and Node performance tuning.'
    ]
  },
  {
    id: 'engagement-manager',
    title: 'Engagement Manager',
    dept: 'Business & Technology Transformation',
    location: 'Vienna, VA',
    type: 'Full-time',
    description: 'Own a transformation programme end to end, with the client in the room.',
    bgColor: '#FFFFFF',
    textColor: '#0A1128',
    badgeBg: '#EFF6FF',
    badgeText: '#265CF4',
    buttonStyle: 'outline',
    responsibilities: [
      'Own end-to-end delivery of complex digital transformation programmes.',
      'Manage multi-disciplinary teams across software, cloud, and data engineering.',
      'Track project budgets, scope, risks, and executive stakeholder satisfaction.'
    ],
    requirements: [
      '6+ years in technical project management or management consulting.',
      'PMP, Agile SAFe, or Scrum Master certification required.'
    ]
  },
  {
    id: 'sap-ibp',
    title: 'Supply Chain Consultant (SAP IBP)',
    dept: 'Enterprise Platforms',
    location: 'Dubai, UAE',
    type: 'Full-time',
    description: 'Integrated planning across demand, supply and inventory.',
    bgColor: '#FFFFFF',
    textColor: '#0A1128',
    badgeBg: '#EFF6FF',
    badgeText: '#265CF4',
    buttonStyle: 'outline',
    responsibilities: [
      'Configure SAP IBP modules for Demand Planning, S&OP, and Response & Supply.',
      'Integrate SAP IBP with S/4HANA via CPI-DS.',
      'Drive process optimization workshops with regional supply chain directors.'
    ],
    requirements: [
      '4+ years in SAP IBP / APO supply chain implementation.',
      'Hands-on experience with S&OP mathematical optimization algorithms.'
    ]
  },
  {
    id: 'data-governance-lead',
    title: 'Data Governance Lead',
    dept: 'Data & Intelligence',
    location: 'Bengaluru, India',
    type: 'Full-time',
    description: 'MDM, quality and lineage — the trust layer under every AI programme.',
    bgColor: '#52E0CB',
    textColor: '#0A1128',
    badgeBg: '#EFF6FF',
    badgeText: '#265CF4',
    buttonStyle: 'mint',
    responsibilities: [
      'Establish Enterprise Data Governance frameworks, policies, and data dictionaries.',
      'Implement Master Data Management (MDM) solutions using Informatica or Collibra.',
      'Define automated data quality metrics and lineage tracking across data pipelines.'
    ],
    requirements: [
      '5+ years leading data governance, data lineage, and privacy regulation compliance (GDPR, CCPA).',
      'Strong background in data modeling and enterprise cataloging tools.'
    ]
  }
];

const DEPARTMENT_OPTIONS = [
  'All roles',
  'Enterprise Platforms',
  'Data & Intelligence',
  'AI & Intelligent Enterprise',
  'Cloud & Modernization',
  'Digital Engineering',
  'Business & Technology Transformation'
];

const LOCATION_OPTIONS = [
  'All locations',
  'Bengaluru, India',
  'Vienna, VA',
  'Dubai, UAE',
  'Remote'
];

export const OpenRolesPage: React.FC<OpenRolesPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All roles');
  const [selectedLocation, setSelectedLocation] = useState('All locations');
  const [selectedRoleModal, setSelectedRoleModal] = useState<RoleItem | null>(null);
  const [copiedRole, setCopiedRole] = useState(false);

  // Compute counts dynamically
  const deptCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All roles': ROLES_DATA.length };
    DEPARTMENT_OPTIONS.slice(1).forEach(d => {
      counts[d] = ROLES_DATA.filter(r => r.dept.toLowerCase() === d.toLowerCase()).length;
    });
    return counts;
  }, []);

  const locationCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    LOCATION_OPTIONS.slice(1).forEach(loc => {
      counts[loc] = ROLES_DATA.filter(r => r.location.toLowerCase().includes(loc.split(',')[0].toLowerCase())).length;
    });
    return counts;
  }, []);

  // Filtered Roles
  const filteredRoles = useMemo(() => {
    return ROLES_DATA.filter(role => {
      // Department filter
      if (selectedDept !== 'All roles' && role.dept.toLowerCase() !== selectedDept.toLowerCase()) {
        return false;
      }
      // Location filter
      if (selectedLocation !== 'All locations') {
        const targetLoc = selectedLocation.split(',')[0].toLowerCase();
        if (!role.location.toLowerCase().includes(targetLoc)) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = role.title.toLowerCase().includes(q);
        const matchDept = role.dept.toLowerCase().includes(q);
        const matchLoc = role.location.toLowerCase().includes(q);
        const matchDesc = role.description.toLowerCase().includes(q);
        if (!matchTitle && !matchDept && !matchLoc && !matchDesc) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedDept, selectedLocation]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDept('All roles');
    setSelectedLocation('All locations');
  };

  const handleApplyRole = (role: RoleItem) => {
    setSelectedRoleModal(null);
    if (onNavigate) {
      onNavigate('#contact');
    }
  };

  return (
    <div style={{ backgroundColor: '#040914', color: '#FFFFFF', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
           {/* 1. HERO SECTION WITH EXACT FIGMA LINEAR GRADIENT & GRID LINES */}
      <section style={{
        background: 'linear-gradient(90deg, rgba(8, 25, 74, 1) 0%, rgba(13, 42, 117, 1) 45%, rgba(27, 74, 199, 1) 100%)',
        padding: '130px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {/* Vertical Grid Lines Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          opacity: 0.12
        }}>
          {[...Array(9)].map((_, i) => (
            <div key={i} style={{ width: '1px', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.4)' }} />
          ))}
        </div>

        {/* Figma Mint Ellipse Glow (Width: 560px, Height: 560px, Color: rgba(103, 223, 203, 0.2), Layer blur) */}
        <div style={{
          position: 'absolute',
          top: '60px',
          right: '5%',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'rgba(103, 223, 203, 0.2)',
          filter: 'blur(160px)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '24px', fontWeight: 500 }}>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onClick={() => onNavigate && onNavigate('#home')}>Home</span>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onClick={() => onNavigate && onNavigate('#careers')}>Careers</span>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Open roles</span>
          </div>

          {/* Eyebrow */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
            <div style={{ width: '24px', height: '2px', backgroundColor: '#67DFCB' }} />
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              CAREERS AT AJILEDONE
            </span>
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(48px, 6.5vw, 76px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            margin: '0 0 20px 0',
            lineHeight: 1.05,
            color: '#FFFFFF'
          }}>
            Open roles.
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '680px',
            lineHeight: 1.6,
            marginBottom: '48px',
            fontWeight: 400
          }}>
            Ten open positions across six capability areas and four locations. Every one works on live client programmes from week one.
          </p>

          {/* 4 Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
            gap: '32px',
            maxWidth: '560px',
            marginBottom: '56px'
          }}>
            <div>
              <div style={{ fontSize: '38px', fontWeight: 800, color: '#67DFCB', letterSpacing: '-0.02em' }}>10</div>
              <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>Open roles</div>
            </div>
            <div>
              <div style={{ fontSize: '38px', fontWeight: 800, color: '#67DFCB', letterSpacing: '-0.02em' }}>06</div>
              <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>Capability areas</div>
            </div>
            <div>
              <div style={{ fontSize: '38px', fontWeight: 800, color: '#67DFCB', letterSpacing: '-0.02em' }}>04</div>
              <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>Locations</div>
            </div>
            <div>
              <div style={{ fontSize: '38px', fontWeight: 800, color: '#67DFCB', letterSpacing: '-0.02em' }}>48h</div>
              <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>First response</div>
            </div>
          </div>

          {/* Floating Pill Search Bar Container */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '50px',
            padding: '8px 10px 8px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
            maxWidth: '1100px',
            flexWrap: 'nowrap'
          }}>
            <Search size={20} color="#94A3B8" style={{ flexShrink: 0 }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search roles, skills or platforms — e.g. “SAP”, “data engineer”, “Bengaluru”'
              style={{
                border: 'none',
                outline: 'none',
                flex: 1,
                minWidth: '240px',
                fontSize: '15px',
                color: '#0F172A',
                fontWeight: 500,
                backgroundColor: 'transparent'
              }}
            />

            {/* Vertical Divider */}
            <div style={{ width: '1px', height: '32px', backgroundColor: '#E2E8F0', flexShrink: 0 }} />

            {/* Location Selector Dropdown */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                style={{
                  border: 'none',
                  padding: '8px 28px 8px 8px',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  color: '#0F172A',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  outline: 'none',
                  appearance: 'none'
                }}
              >
                {LOCATION_OPTIONS.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              <ChevronDown size={16} color="#64748B" style={{ position: 'absolute', right: '6px', pointerEvents: 'none' }} />
            </div>

            {/* Search Pill Button */}
            <button
              onClick={() => {}}
              style={{
                backgroundColor: '#265CF4',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '50px',
                padding: '13px 34px',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                flexShrink: 0,
                boxShadow: '0 4px 16px rgba(38, 92, 244, 0.4)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1D4ED8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#265CF4'}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* 2. FILTER PILLS SECTION WITH CLEAN WHITE BACKGROUND */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '44px 24px 32px', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Department Pills Row */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
              DEPARTMENT
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {DEPARTMENT_OPTIONS.map(dept => {
                const isActive = selectedDept.toLowerCase() === dept.toLowerCase();
                const count = deptCounts[dept] || 0;
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    style={{
                      backgroundColor: isActive ? '#0A1128' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#475569',
                      border: isActive ? '1px solid #0A1128' : '1px solid #E2E8F0',
                      borderRadius: '50px',
                      padding: '8px 18px',
                      fontSize: '13.5px',
                      fontWeight: isActive ? 700 : 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? '0 4px 12px rgba(10, 17, 40, 0.15)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = '#F8FAFC';
                        e.currentTarget.style.borderColor = '#CBD5E1';
                        e.currentTarget.style.color = '#0F172A';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.borderColor = '#E2E8F0';
                        e.currentTarget.style.color = '#475569';
                      }
                    }}
                  >
                    <span>{dept}</span>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.18)' : '#EFF6FF',
                      color: isActive ? '#67DFCB' : '#2563EB',
                      borderRadius: '20px',
                      padding: '2px 8px'
                    }}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Location Pills Row */}
          <div style={{ marginBottom: '36px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
              LOCATION
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {LOCATION_OPTIONS.slice(1).map(loc => {
                const isActive = selectedLocation.toLowerCase().includes(loc.split(',')[0].toLowerCase());
                const count = locationCounts[loc] || 0;
                return (
                  <button
                    key={loc}
                    onClick={() => setSelectedLocation(isActive ? 'All locations' : loc)}
                    style={{
                      backgroundColor: isActive ? '#67DFCB' : '#FFFFFF',
                      color: isActive ? '#0A1128' : '#475569',
                      border: isActive ? '1px solid #67DFCB' : '1px solid #E2E8F0',
                      borderRadius: '50px',
                      padding: '8px 18px',
                      fontSize: '13.5px',
                      fontWeight: isActive ? 800 : 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? '0 4px 14px rgba(103, 223, 203, 0.3)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = '#F8FAFC';
                        e.currentTarget.style.borderColor = '#CBD5E1';
                        e.currentTarget.style.color = '#0F172A';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.borderColor = '#E2E8F0';
                        e.currentTarget.style.color = '#475569';
                      }
                    }}
                  >
                    <span>{loc}</span>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      backgroundColor: isActive ? 'rgba(10, 17, 40, 0.15)' : '#EFF6FF',
                      color: isActive ? '#0A1128' : '#2563EB',
                      borderRadius: '20px',
                      padding: '2px 8px'
                    }}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Status Bar: Count, Clear Filters & Sort */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #F1F5F9',
            paddingTop: '20px',
            fontSize: '14px',
            color: '#475569'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ color: '#0F172A', fontWeight: 700 }}>
                Showing {filteredRoles.length} of {ROLES_DATA.length} roles
              </span>
              {(selectedDept !== 'All roles' || selectedLocation !== 'All locations' || searchQuery !== '') && (
                <button
                  onClick={clearFilters}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#2563EB',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '14px',
                    padding: 0,
                    textDecoration: 'none'
                  }}
                >
                  Clear filters
                </button>
              )}
            </div>

            <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#475569' }}>
              Sort: <span style={{ color: '#0F172A' }}>Newest first ▾</span>
            </div>
          </div>
        </div>
      {/* 3. ROLES CARDS LIST SECTION */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '48px 24px 80px', borderTop: '1px solid #F1F5F9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
            {filteredRoles.length === 0 ? (
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '60px 24px',
                textAlign: 'center',
                border: '1px solid #E2E8F0'
              }}>
                <Briefcase size={40} color="#64748B" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 8px 0', color: '#0F172A' }}>No roles match your exact filter.</h3>
                <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '24px' }}>
                  Try searching for broader skills or clearing your location filter.
                </p>
                <button
                  onClick={clearFilters}
                  style={{
                    backgroundColor: '#265CF4',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '30px',
                    padding: '10px 24px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Show all 10 roles
                </button>
              </div>
            ) : (
              filteredRoles.map(role => {
                const cardBg = role.bgColor || '#FFFFFF';
                const cardText = role.textColor || '#0A1128';
                const isBlueCard = cardBg === '#265CF4';
                const isDarkCard = cardBg === '#0A1128';
                const isMintCard = cardBg === '#52E0CB' || cardBg === '#67DFCB';
                const isWhiteCard = cardBg === '#FFFFFF';

                return (
                  <div
                    key={role.id}
                    style={{
                      backgroundColor: cardBg,
                      color: cardText,
                      borderRadius: '16px',
                      padding: '28px 36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '24px',
                      flexWrap: 'wrap',
                      boxShadow: isWhiteCard ? '0 2px 10px rgba(0, 0, 0, 0.03)' : '0 8px 24px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.25s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      border: isWhiteCard ? '1px solid #E2E8F0' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (isWhiteCard) {
                        e.currentTarget.style.borderColor = '#94A3B8';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (isWhiteCard) {
                        e.currentTarget.style.borderColor = '#E2E8F0';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.03)';
                      }
                    }}
                  >
                    {/* Left Column: Dept Tag, NEW Badge, Title & Description */}
                    <div style={{ flex: '1 1 440px', minWidth: '280px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                        <span style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          backgroundColor:
                            isBlueCard ? 'rgba(255, 255, 255, 0.2)' :
                            isDarkCard ? 'rgba(255, 255, 255, 0.15)' :
                            isMintCard ? 'rgba(255, 255, 255, 0.4)' :
                            '#EFF6FF',
                          color:
                            isBlueCard || isDarkCard ? '#FFFFFF' :
                            isMintCard ? '#265CF4' :
                            '#265CF4',
                          borderRadius: '20px',
                          padding: '4px 12px',
                          display: 'inline-block'
                        }}>
                          {role.dept}
                        </span>
                        {role.new && (
                          <span style={{
                            fontSize: '10px',
                            fontWeight: 800,
                            backgroundColor: isBlueCard ? '#52E0CB' : '#0A1128',
                            color: isBlueCard ? '#0A1128' : '#FFFFFF',
                            borderRadius: '12px',
                            padding: '3px 10px',
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase'
                          }}>
                            NEW
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 style={{
                        fontSize: '21px',
                        fontWeight: 800,
                        margin: '0 0 6px 0',
                        letterSpacing: '-0.015em',
                        lineHeight: 1.25,
                        color: isBlueCard || isDarkCard ? '#FFFFFF' : '#0A1128'
                      }}>
                        {role.title}
                      </h3>

                      {/* Description */}
                      <p style={{
                        fontSize: '13.5px',
                        margin: 0,
                        color:
                          isBlueCard || isDarkCard ? 'rgba(255, 255, 255, 0.8)' :
                          isMintCard ? '#1E293B' :
                          '#64748B',
                        fontWeight: 400,
                        lineHeight: 1.5
                      }}>
                        {role.description}
                      </p>
                    </div>

                    {/* Middle Column: Metadata (Location & Type) */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '48px',
                      flexShrink: 0,
                      fontSize: '13.5px'
                    }}>
                      <div>
                        <div style={{
                          fontSize: '10px',
                          fontWeight: 800,
                          color:
                            isBlueCard || isDarkCard ? 'rgba(255, 255, 255, 0.65)' :
                            isMintCard ? '#0D5C50' :
                            '#94A3B8',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginBottom: '3px'
                        }}>
                          LOCATION
                        </div>
                        <div style={{
                          fontWeight: 700,
                          color: isBlueCard || isDarkCard ? '#FFFFFF' : '#0A1128'
                        }}>
                          {role.location}
                        </div>
                      </div>

                      <div>
                        <div style={{
                          fontSize: '10px',
                          fontWeight: 800,
                          color:
                            isBlueCard || isDarkCard ? 'rgba(255, 255, 255, 0.65)' :
                            isMintCard ? '#0D5C50' :
                            '#94A3B8',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginBottom: '3px'
                        }}>
                          TYPE
                        </div>
                        <div style={{
                          fontWeight: 700,
                          color: isBlueCard || isDarkCard ? '#FFFFFF' : '#0A1128'
                        }}>
                          {role.type}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: View Role Button */}
                    <div style={{ flexShrink: 0 }}>
                      <button
                        onClick={() => setSelectedRoleModal(role)}
                        style={{
                          backgroundColor:
                            isBlueCard || isDarkCard ? '#FFFFFF' :
                            'transparent',
                          color:
                            isBlueCard ? '#265CF4' :
                            isDarkCard ? '#265CF4' :
                            '#0A1128',
                          border:
                            isWhiteCard ? '1.5px solid #0A1128' :
                            isMintCard ? '1.5px solid #0A1128' :
                            'none',
                          borderRadius: '50px',
                          padding: '10px 22px',
                          fontSize: '13.5px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          if (isWhiteCard || isMintCard) {
                            e.currentTarget.style.backgroundColor = '#0A1128';
                            e.currentTarget.style.color = '#FFFFFF';
                          } else if (isBlueCard) {
                            e.currentTarget.style.backgroundColor = '#0A1128';
                            e.currentTarget.style.color = '#FFFFFF';
                          } else if (isDarkCard) {
                            e.currentTarget.style.backgroundColor = '#265CF4';
                            e.currentTarget.style.color = '#FFFFFF';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (isWhiteCard || isMintCard) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#0A1128';
                          } else if (isBlueCard || isDarkCard) {
                            e.currentTarget.style.backgroundColor = '#FFFFFF';
                            e.currentTarget.style.color = '#265CF4';
                          }
                        }}
                      >
                        <span>View role</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* End of List Badge */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-block',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '50px',
              padding: '12px 32px',
              fontSize: '13.5px',
              color: '#64748B',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
            }}>
              You've reached the end of the list
            </div>
          </div>
        </div>
      </section>

        {/* 4. BOTTOM CTA BANNER: SEND US YOUR THINKING ANYWAY */}
        <div style={{
          background: 'linear-gradient(90deg, #09132E 0%, #153CB5 45%, #2561E8 85%, #3070FA 100%)',
          borderRadius: '24px',
          padding: '52px 64px',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '36px'
        }}>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px' }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 800,
              color: '#52E0CB',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              NOTHING THAT FITS?
            </div>
            <h2 style={{
              fontSize: '34px',
              fontWeight: 800,
              color: '#FFFFFF',
              margin: '0 0 12px 0',
              letterSpacing: '-0.025em',
              lineHeight: 1.2
            }}>
              Send us your thinking anyway.
            </h2>
            <p style={{
              fontSize: '14.5px',
              color: 'rgba(255, 255, 255, 0.75)',
              lineHeight: 1.5,
              marginBottom: '28px',
              maxWidth: '520px',
              fontWeight: 400
            }}>
              Tell us what you'd want to work on. We keep a short list and come back when the right programme starts.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', alignItems: 'center' }}>
              <button
                onClick={() => onNavigate && onNavigate('#contact')}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#265CF4',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '12px 28px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Send an open application
              </button>

              <a
                href="mailto:info@ajiledone.com"
                style={{
                  color: '#52E0CB',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                info@ajiledone.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer quote */}
        <div style={{ fontSize: '13px', color: '#475569', fontWeight: 700, paddingLeft: '4px' }}>
          Think differently. Learn continuously. Engineer boldly. Create meaningful impact.
        </div>
      </section>

      {/* 5. ROLE DETAIL APPLICATION MODAL */}
      {selectedRoleModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(4, 9, 20, 0.85)',
          backdropFilter: 'blur(12px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <div style={{
            backgroundColor: '#0A1128',
            color: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            maxWidth: '680px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '40px',
            position: 'relative',
            boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6)'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedRoleModal(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  backgroundColor: '#265CF4',
                  color: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '4px 12px',
                  textTransform: 'uppercase'
                }}>
                  {selectedRoleModal.dept}
                </span>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  backgroundColor: '#67DFCB',
                  color: '#07132B',
                  borderRadius: '20px',
                  padding: '4px 12px'
                }}>
                  {selectedRoleModal.location}
                </span>
              </div>

              <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 12px 0', letterSpacing: '-0.02em' }}>
                {selectedRoleModal.title}
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, margin: 0 }}>
                {selectedRoleModal.description}
              </p>
            </div>

            {/* Responsibilities */}
            {selectedRoleModal.responsibilities && (
              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#67DFCB', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  KEY RESPONSIBILITIES
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '14px', lineHeight: 1.7 }}>
                  {selectedRoleModal.responsibilities.map((r, i) => (
                    <li key={i} style={{ marginBottom: '6px' }}>{r}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {selectedRoleModal.requirements && (
              <div style={{ marginBottom: '36px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#67DFCB', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  WHAT WE LOOK FOR
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '14px', lineHeight: 1.7 }}>
                  {selectedRoleModal.requirements.map((req, i) => (
                    <li key={i} style={{ marginBottom: '6px' }}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Actions */}
            <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '24px' }}>
              <button
                onClick={() => handleApplyRole(selectedRoleModal)}
                style={{
                  backgroundColor: '#265CF4',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '14px 32px',
                  fontSize: '15px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <span>Apply for this position</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  setCopiedRole(true);
                  setTimeout(() => setCopiedRole(false), 2000);
                }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50px',
                  padding: '14px 24px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {copiedRole ? 'Link Copied!' : 'Share role'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenRolesPage;
