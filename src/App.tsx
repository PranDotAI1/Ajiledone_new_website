import { useState, useEffect } from 'react';
import { WhoWeArePage } from './WhoWeAre';
import { PurposeandValuesPage } from './PurposeandValues';
import { WhatWeDoPage } from './WhatWeDo';
import { OurVisionPage } from './OurVision';
import { AIAndIntelligentEnterprisePage } from './AIAndIntelligentEnterprise';
import { DataAndIntelligencePage } from './DataAndIntelligence';
import { EnterprisePlatformsPage } from './EnterprisePlatforms';
import { SAPTransformationPage } from './SAPTransformation';
import { CloudTechnologyModernization } from './CloudTechnologyModernization';
import { DigitalEngineeringPage } from './DigitalEngineering';
import { AjiledoneIntelligentEnterprisePage } from './AjiledoneIntelligentEnterprise';
import { BusinessFunctionsPage } from './BusinessFunctions';
import { HowWeCreateValuePage } from './HowWeCreateValue';
import { OutcomesWePursuePage } from './OutcomesWePursue';
import { HowWeWorkPage } from './HowWeWork';
import { IndustriesPage } from './Industries';
import { EnergyResourcesOilGasPage } from './EnergyResourcesOilGas';
import { ManufacturingPage } from './Manufacturing';
import { LifeSciencesFinancialServicesPage } from './LifeSciencesFinancialServices';
import { ConsumerRetailAutomotivePage } from './ConsumerRetailAutomotive';
import { MiningUtilitiesChemicalsECPage } from './MiningUtilitiesChemicalsEC';
import { GlobalPresencePage } from './GlobalPresence';
import { QuestionsShapingBusinessPage } from './QuestionsShapingBusiness';
import { InsightsPage } from './Insights';
import { TransformationPage } from './Transformation';
import { ContactUsPage } from './ContactUs';
import { CareersPage } from './Careers';
import { OpenRolesPage } from './OpenRoles';
import { ProductsPage } from './Products';
import { HMISPage } from './HMIS';
import { LMISPage } from './LMIS';
import {
  ArrowRight,
  ChevronDown,
  Globe,
  Menu,
  Minus,
  Plus,
  Search,
  X,
} from 'lucide-react';

function AjileDoneLogo({ variant = 'default' }: { variant?: 'default' | 'footer' }) {
  return (
    <img
      src={variant === 'footer' ? '/images/Lockup.png' : '/images/LOGO1.png'}
      alt="AjileDone"
      style={{
        height: '38px',
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
      }}
    />
  );
}

function IndustriesMegaMenu({ onNavigate }: { onNavigate: (anchor: string) => void }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  const items = [
    { name: 'Energy & Resources', anchor: '#energy-resources-oil-gas' },
    { name: 'Automotive', anchor: '#automotive' },
    { name: 'Manufacturing', anchor: '#manufacturing' },
    { name: 'Consumer & Retail', anchor: '#consumer-retail' },
    { name: 'Life Sciences & Healthcare', anchor: '#life-sciences' },
    { name: 'Utilities', anchor: '#utilities' },
    { name: 'Financial Services', anchor: '#financial-services' },
    { name: 'Chemicals', anchor: '#chemicals' },
    { name: 'Mining & Metals', anchor: '#mining-metals' },
    { name: 'Engineering & Construction', anchor: '#engineering-construction' },
  ];

  return (
    <div className="mega-menu-overlay">
      <div className="mega-content-wrapper">
        <div className="section-container" style={{ padding: '36px 0 28px' }}>
          <div
            className="mega-section-label"
            style={{
              fontSize: '11.5px',
              fontWeight: 800,
              letterSpacing: '0.14em',
              color: '#8DA4C4',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            TEN INDUSTRIES
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px', alignItems: 'center' }}>
            {/* Left 2-Column Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px' }}>
              {items.map((item, idx) => {
                const isActive = hoveredIdx === idx;
                return (
                  <div
                    key={item.name}
                    className="mega-card-item"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(0)}
                    onClick={() => onNavigate(item.anchor)}
                    style={{
                      background: isActive ? '#F0F4FF' : 'transparent',
                      padding: '12px 18px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontWeight: 700,
                      color: '#0F172A',
                      fontSize: '14.5px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Right Banner Card using /images/Ourcapabilities1.png */}
            <div
              className="mega-card-item"
              onClick={() => onNavigate('#industries')}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '270px',
                cursor: 'pointer',
                boxShadow: '0 16px 36px rgba(8, 25, 74, 0.16)',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease',
              }}
            >
              {/* Background image */}
              <img
                src="/images/Ourcapabilities1.png"
                alt=""
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  zIndex: 0,
                }}
              />

              {/* Dark translucent overlay matching exact Figma gradient (#0A1230 92% -> 35%) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, rgba(10, 18, 48, 0.92) 0%, rgba(10, 18, 48, 0.35) 100%)',
                  zIndex: 1,
                }}
              />

              {/* Foreground content */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    color: '#52E0CB',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                  }}
                >
                  WHY INDUSTRY CONTEXT MATTERS
                </div>
                <h3
                  style={{
                    fontSize: '25px',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1.25,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    maxWidth: '320px',
                  }}
                >
                  Industry knowledge changes the transformation conversation.
                </h3>
              </div>

              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  color: '#52E0CB',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '28px',
                  transition: 'gap 0.2s ease',
                }}
              >
                All industries <ArrowRight size={15} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mega-bottom-bar" style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0', padding: '16px 0' }}>
          <div className="section-container mega-bottom-inner" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '13.5px', color: '#64748B', fontWeight: 600 }}>
              Processes &nbsp;&bull;&nbsp; Operating models &nbsp;&bull;&nbsp; Regulatory environments &nbsp;&bull;&nbsp; Value chains
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MegaMenuDropdown({
  active,
  onNavigate,
}: {
  active: string | null;
  onNavigate: (anchor: string) => void;
}) {
  if (!active) return null;

  if (active === 'Who we are') {
    return (
      <div className="mega-menu-overlay">
        <div className="mega-content-wrapper">
          <div className="section-container" style={{ padding: '32px 0 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
              {/* 01 About Ajiledone */}
              <div
                className="mega-card-item"
                onClick={() => onNavigate('#who-we-are')}
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'transparent',
                  border: '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#265CF4', marginBottom: '8px' }}>01</div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0A1128', marginBottom: '6px', fontFamily: "'Inter', sans-serif" }}>
                  About Ajiledone
                </h3>
                <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
                  Who we are and what we are built to solve.
                </p>
              </div>

              {/* 02 Purpose & Values */}
              <div
                className="mega-card-item"
                onClick={() => onNavigate('#purpose-and-values')}
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'transparent',
                  border: '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#265CF4', marginBottom: '8px' }}>02</div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0A1128', marginBottom: '6px', fontFamily: "'Inter', sans-serif" }}>
                  Purpose &amp; Values
                </h3>
                <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
                  Technology as a catalyst for business progress.
                </p>
              </div>

              {/* 03 Our People */}
              <div
                className="mega-card-item"
                onClick={() => onNavigate('#global')}
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'transparent',
                  border: '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#265CF4', marginBottom: '8px' }}>03</div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0A1128', marginBottom: '6px', fontFamily: "'Inter', sans-serif" }}>
                  Our People
                </h3>
                <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
                  Strategists, architects, engineers and industry experts.
                </p>
              </div>

              {/* 04 Our Vision */}
              <div
                className="mega-card-item"
                onClick={() => onNavigate('#our-vision')}
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'transparent',
                  border: '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#265CF4', marginBottom: '8px' }}>04</div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0A1128', marginBottom: '6px', fontFamily: "'Inter', sans-serif" }}>
                  Our Vision
                </h3>
                <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
                  Building the intelligent enterprise.
                </p>
              </div>
            </div>

            {/* Row 2: 05 Global Presence */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              <div
                className="mega-card-item"
                onClick={() => onNavigate('#global-presence')}
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'transparent',
                  border: '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#265CF4', marginBottom: '8px' }}>05</div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0A1128', marginBottom: '6px', fontFamily: "'Inter', sans-serif" }}>
                  Global Presence
                </h3>
                <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
                  Five regions, one delivery standard.
                </p>
              </div>

              <div
                className="mega-card-item"
                onClick={() => onNavigate('#careers')}
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'transparent',
                  border: '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#265CF4', marginBottom: '8px' }}>06</div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0A1128', marginBottom: '6px', fontFamily: "'Inter', sans-serif" }}>
                  Careers
                </h3>
                <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
                  Join us. Choose your impact.
                </p>
              </div>
            </div>
          </div>

          <div className="mega-bottom-bar">
            <div className="section-container mega-bottom-inner">
              <span style={{ fontSize: '13.5px', color: '#475569', fontWeight: 600 }}>One organization. One standard. Global execution.</span>
              <a
                href="#global-presence"
                onClick={(e) => { e.preventDefault(); onNavigate('#global-presence'); }}
                style={{ color: '#265CF4', fontWeight: 700, fontSize: '13.5px', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
              >
                Global Ajiledone <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (active === 'What we do') {
    return (
      <div className="mega-menu-overlay">
        <div className="mega-content-wrapper">
          <div className="section-container">
            <div className="mega-section-label">CAPABILITIES</div>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <div className="mega-card-item" onClick={() => onNavigate('#bt-transformation')} style={{ padding: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', marginBottom: '6px' }}>01</div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Business &amp; Technology Transformation</h4>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.4' }}>Strategy connected to executable roadmaps.</p>
                </div>

                <div className="mega-card-item" onClick={() => onNavigate('#ai-intelligent-enterprise')} style={{ padding: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', marginBottom: '6px' }}>02</div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>AI &amp; Intelligent Enterprise</h4>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.4' }}>Beyond experimentation, into operations.</p>
                </div>

                <div className="mega-card-item" onClick={() => onNavigate('#data-intelligence')} style={{ padding: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', marginBottom: '6px' }}>03</div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Data &amp; Intelligence</h4>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.4' }}>Modern foundations for analytics and AI.</p>
                </div>

                <div className="mega-card-item" onClick={() => onNavigate('#enterprise-platforms')} style={{ padding: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', marginBottom: '6px' }}>04</div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Enterprise Platforms</h4>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.4' }}>SAP, Oracle and ServiceNow, modernized.</p>
                </div>

                <div className="mega-card-item" onClick={() => onNavigate('#cloud-technology-modernization')} style={{ padding: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', marginBottom: '6px' }}>05</div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Cloud &amp; Modernization</h4>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.4' }}>A foundation designed for change.</p>
                </div>

                <div className="mega-card-item" onClick={() => onNavigate('#digital-engineering')} style={{ padding: '16px', cursor: 'pointer' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', marginBottom: '6px' }}>06</div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Digital Engineering</h4>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.4' }}>Ideas turned into scalable technology.</p>
                </div>
              </div>

              <div
                className="mega-card-item"
                onClick={() => onNavigate('#ajiledone-intelligent-enterprise')}
                style={{ background: '#081742', color: '#FFFFFF', padding: '28px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#67DFCB', marginBottom: '12px' }}>FEATURED</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', lineHeight: '1.3' }}>The Ajiledone Intelligent Enterprise</h3>
                  <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: '1.5' }}>Five connected layers — digital core, data, intelligence, engineering and cloud.</p>
                </div>
                <div style={{ color: '#67DFCB', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '20px' }}>
                  Explore the model <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>

          <div className="mega-bottom-bar">
            <div className="section-container mega-bottom-inner">
              <span style={{ fontSize: '13.5px', color: '#475569', fontWeight: 600 }}>
                <a
                  href="#business-functions"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#business-functions');
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2563EB')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#2B3857')}
                  style={{
                    color: '#2B3857',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    marginRight: '6px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  Business functions
                </a>
                &nbsp;·&nbsp;
                <a
                  href="#how-we-create-value"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#how-we-create-value');
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2563EB')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#2B3857')}
                  style={{
                    color: '#2B3857',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    marginRight: '6px',
                    marginLeft: '6px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  How we create value
                </a>
                &nbsp;·&nbsp;
                <a
                  href="#outcomes-we-pursue"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#outcomes-we-pursue');
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2563EB')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#2B3857')}
                  style={{
                    color: '#2B3857',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    marginLeft: '6px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  The outcomes we pursue
                </a>
                &nbsp;·&nbsp;
                <a
                  href="#how-we-work"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#how-we-work');
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2563EB')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#2B3857')}
                  style={{
                    color: '#2B3857',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    marginLeft: '6px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  How we work
                </a>
              </span>
              <a href="#capabilities" onClick={(e) => { e.preventDefault(); onNavigate('#capabilities'); }} style={{ color: '#2563EB', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                All capabilities <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (active === 'Industries') {
    return <IndustriesMegaMenu onNavigate={onNavigate} />;
  }

  if (active === 'Technology') {
    return (
      <div className="mega-menu-overlay">
        <div className="mega-content-wrapper">
          <div className="section-container">
            <div className="mega-section-label">PLATFORMS &amp; DISCIPLINES</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '12px' }}>
              {[
                { name: 'SAP', desc: 'S/4HANA · BTP · Industry' },
                { name: 'AI', desc: 'GenAI · Agentic · Applied' },
                { name: 'Data', desc: 'Lakehouse · Governance' },
                { name: 'Cloud', desc: 'Azure · AWS · GCP · OCI' },
                { name: 'Oracle', desc: 'Fusion · EBS · OCI' },
                { name: 'ServiceNow', desc: 'ITSM · ITOM · CSM' },
                { name: 'Digital Engineering', desc: 'Applications · Platforms' },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="mega-card-item"
                  onClick={() => onNavigate('#architecture')}
                  style={{
                    background: '#FFFFFF',
                    padding: '20px 14px',
                    borderRadius: '10px',
                    border: '1px solid #E2E8F0',
                    position: 'relative',
                  }}
                >
                  <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>{tech.name}</h4>
                  <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.4' }}>{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mega-bottom-bar">
            <div className="section-container mega-bottom-inner">
              <span style={{ fontSize: '13px', color: '#64748B' }}>Enterprise platforms remain at the center of critical business operations.</span>
              <a href="#architecture" onClick={(e) => { e.preventDefault(); onNavigate('#architecture'); }} style={{ color: '#2563EB', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Technology &amp; platforms <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (active === 'Insights') {
    return (
      <div className="mega-menu-overlay">
        <div className="mega-content-wrapper">
          <div className="section-container">
            <div className="mega-section-label">AJILEDONE INSIGHTS</div>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <div className="mega-card-item" onClick={() => onNavigate('#our-thinking')} style={{ padding: '20px 16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', marginBottom: '6px' }}>01</div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>Research &amp; Perspectives</h4>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.4' }}>Long-form thinking on where the enterprise is heading.</p>
                </div>

                <div className="mega-card-item" onClick={() => onNavigate('#our-thinking')} style={{ padding: '20px 16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', marginBottom: '6px' }}>02</div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>Technology Insights</h4>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.4' }}>AI, SAP, data and cloud — what actually changes.</p>
                </div>

                <div className="mega-card-item" onClick={() => onNavigate('#our-thinking')} style={{ padding: '20px 16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', marginBottom: '6px' }}>03</div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>Industry Insights</h4>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.4' }}>What the shift means sector by sector.</p>
                </div>
              </div>

              <div
                className="mega-card-item"
                onClick={() => onNavigate('#our-thinking')}
                style={{ background: '#081742', color: '#FFFFFF', padding: '24px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#67DFCB', marginBottom: '10px' }}>LATEST</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', lineHeight: '1.3' }}>The Agentic Enterprise: What Comes After Generative AI?</h3>
                </div>
                <div style={{ color: '#67DFCB', fontSize: '13px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                  Read <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>

          <div className="mega-bottom-bar">
            <div className="section-container mega-bottom-inner">
              <span style={{ fontSize: '13px', color: '#64748B' }}>Ideas for what's next.</span>
              <a href="#our-thinking" onClick={(e) => { e.preventDefault(); onNavigate('#our-thinking'); }} style={{ color: '#2563EB', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                View all insights <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (active === 'Products') {
    return (
      <div className="mega-menu-overlay">
        <div className="mega-content-wrapper">
          <div className="section-container" style={{ padding: '28px 0 24px' }}>
            {/* Top Sub-header Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div className="mega-section-label" style={{ marginBottom: 0, fontSize: '11px', letterSpacing: '0.14em', color: '#8DA4C4' }}>
                PRODUCTS
              </div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#8DA4C4', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                BUILT, OPERATED AND SUPPORTED BY AJILEDONE
              </div>
            </div>

            {/* 2x2 Grid of Product Cards (Left Column) + 1 Featured Column (Right Column) */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
              {/* Left Column: Grid of 3 Product Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>

                {/* Product Card 2: HMIS (Clean White Background #FFFFFF) */}
                <div
                  className="mega-card-item"
                  onClick={() => {
                    onNavigate('products-hmis');
                  }}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: '#265CF4',
                      color: '#FFFFFF',
                      fontSize: '15px',
                      fontWeight: 900,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    HM
                  </div>
                  <div style={{ flex: 1, paddingRight: '20px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#265CF4', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                      HOSPITAL MANAGEMENT
                    </div>
                    <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0B1739', margin: '0 0 6px' }}>
                      HMIS
                    </h4>
                    <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.45', margin: 0 }}>
                      Front desk to ward, on one live patient record.
                    </p>
                  </div>
                  <ArrowRight size={15} style={{ color: '#265CF4', position: 'absolute', bottom: '18px', right: '18px' }} />
                </div>

                {/* Product Card 3: LMIS (Clean White Background #FFFFFF) */}
                <div
                  className="mega-card-item"
                  onClick={() => {
                    onNavigate('products-lmis');
                  }}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: '#0B1739',
                      color: '#FFFFFF',
                      fontSize: '15px',
                      fontWeight: 900,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    BL
                  </div>
                  <div style={{ flex: 1, paddingRight: '20px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#265CF4', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                      LABORATORY INFORMATION
                    </div>
                    <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0B1739', margin: '0 0 6px' }}>
                      LMIS
                    </h4>
                    <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.45', margin: 0 }}>
                      Sample to signed report, with the guardrails built in.
                    </p>
                  </div>
                  <ArrowRight size={15} style={{ color: '#265CF4', position: 'absolute', bottom: '18px', right: '18px' }} />
                </div>
              </div>

              {/* Right Column Featured Card with Exact Figma Ambient Glow Blur #67DFCB 20% layer blur 90 */}
              <div
                className="mega-card-item"
                onClick={() => {
                  onNavigate('products-lmis');
                }}
                style={{
                  background: '#06102B',
                  borderRadius: '20px',
                  padding: '26px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  color: '#FFFFFF',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Figma Ambient Glow Blur (#67DFCB 20% layer blur 90) */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-40px',
                    right: '-40px',
                    width: '240px',
                    height: '240px',
                    borderRadius: '50%',
                    background: 'rgba(103, 223, 203, 0.20)',
                    filter: 'blur(90px)',
                    pointerEvents: 'none',
                  }}
                />

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
                    LATEST RELEASE
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', lineHeight: '1.25', margin: '0 0 20px' }}>
                    Biosynthesis LMIS v2.5 engine goes live.
                  </h3>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.6)', marginBottom: '8px' }}>
                    v2.5 &bull; 14 AUG 2026
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.5', margin: 0 }}>
                    Automated sample tracking, HL7 integration, and real-time lab analytics.
                  </p>
                </div>

                <div style={{ position: 'relative', zIndex: 2, color: '#67DFCB', fontSize: '13px', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '24px' }}>
                  Read the notes <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Sub-bar of Products Dropdown (Exact Light Lavender-Blue #F0F5FD) */}
          <div className="mega-bottom-bar" style={{ background: '#F0F5FD', borderTop: '1px solid #E2E8F0' }}>
            <div className="section-container mega-bottom-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '13px', color: '#475569', fontWeight: 600, display: 'flex', gap: '18px' }}>
                <span onClick={() => onNavigate('#contact')} style={{ cursor: 'pointer' }}>Product overview</span>
                <span>&bull;</span>
                <span onClick={() => onNavigate('#contact')} style={{ cursor: 'pointer' }}>Release notes</span>
                <span>&bull;</span>
                <span onClick={() => onNavigate('#contact')} style={{ cursor: 'pointer' }}>Request a demo</span>
                <span>&bull;</span>
                <span onClick={() => onNavigate('#contact')} style={{ cursor: 'pointer' }}>Documentation</span>
              </div>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); onNavigate('#contact'); }}
                style={{ color: '#265CF4', fontWeight: 800, fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
              >
                All products <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [langOpen, setLangOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('IN · EN');
  const [currentPage, setCurrentPage] = useState<'home' | 'who-we-are' | 'purpose-and-vision' | 'what-we-do' | 'our-vision' | 'ai-intelligent-enterprise' | 'data-intelligence' | 'enterprise-platforms' | 'sap-transformation' | 'oracle-transformation' | 'cloud-technology-modernization' | 'digital-engineering' | 'ajiledone-intelligent-enterprise' | 'business-functions' | 'how-we-create-value' | 'outcomes-we-pursue' | 'how-we-work' | 'industries' | 'energy-resources-oil-gas' | 'manufacturing' | 'life-sciences-financial-services' | 'consumer-retail-automotive' | 'mining-utilities-chemicals-ec' | 'global-presence' | 'questions-shaping-business' | 'insights' | 'transformation' | 'contact-us' | 'careers' | 'open-roles' | 'products' | 'products-hmis' | 'products-lmis'>('home');

  // Sticky navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Browser Back / Forward button navigation history handler (popstate & hashchange)
  useEffect(() => {
    const handleLocationChange = () => {
      const rawHash = window.location.hash || '#home';
      const hash = decodeURIComponent(rawHash).toLowerCase();

      if (hash.includes('energy-resources-oil-gas') || hash.includes('energy-resources') || hash.includes('energy')) {
        setCurrentPage('energy-resources-oil-gas');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('manufacturing')) {
        setCurrentPage('manufacturing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('industries') || hash.includes('industry')) {
        setCurrentPage('industries');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('global-presence') || hash.includes('global') || hash.includes('presence')) {
        setCurrentPage('global-presence');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('how-we-work') || hash.includes('how we work') || hash.includes('work')) {
        setCurrentPage('how-we-work');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('outcomes') || hash.includes('pursue')) {
        setCurrentPage('outcomes-we-pursue');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('how-we-create-value') || hash.includes('value')) {
        setCurrentPage('how-we-create-value');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('business-functions') || hash.includes('functions')) {
        setCurrentPage('business-functions');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('ajiledone-intelligent-enterprise') || hash.includes('architecture')) {
        setCurrentPage('ajiledone-intelligent-enterprise');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('oracle')) {
        setCurrentPage('sap-transformation');
        setTimeout(() => {
          document.getElementById('oracle-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else if (hash.includes('servicenow')) {
        setCurrentPage('sap-transformation');
        setTimeout(() => {
          document.getElementById('servicenow-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else if (hash.includes('sap-transformation') || hash.includes('sap')) {
        setCurrentPage('sap-transformation');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('cloud-technology-modernization') || hash.includes('cloud')) {
        setCurrentPage('cloud-technology-modernization');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('who-we-are') || hash === '#who-we-are') {
        setCurrentPage('who-we-are');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('questions-shaping-business') || hash.includes('questions')) {
        setCurrentPage('questions-shaping-business');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('insights') || hash.includes('our-thinking')) {
        setCurrentPage('insights');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('transformation') || hash.includes('our-work') || hash.includes('stories')) {
        setCurrentPage('transformation');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('digital-engineering') || hash.includes('engineering')) {
        setCurrentPage('digital-engineering');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('data-intelligence') || hash.includes('data')) {
        setCurrentPage('data-intelligence');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('enterprise-platforms') || hash.includes('platforms')) {
        setCurrentPage('enterprise-platforms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('ai-intelligent-enterprise') || hash.includes('ai')) {
        setCurrentPage('ai-intelligent-enterprise');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('our-vision') || hash.includes('vision')) {
        setCurrentPage('our-vision');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('purpose-and-values') || hash.includes('purpose-and-vision')) {
        setCurrentPage('purpose-and-vision');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('consumer') || hash.includes('retail') || hash.includes('auto') || hash.includes('mobility')) {
        setCurrentPage('consumer-retail-automotive');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('life-sciences') || hash.includes('financial-services')) {
        setCurrentPage('life-sciences-financial-services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('mining') || hash.includes('metals') || hash.includes('utilities') || hash.includes('chemicals') || hash.includes('construction') || hash.includes('ec')) {
        setCurrentPage('mining-utilities-chemicals-ec');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('what-we-do') || hash.includes('capabilities')) {
        setCurrentPage('what-we-do');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('open-roles') || hash.includes('openroles')) {
        setCurrentPage('open-roles');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('careers') || hash.includes('join-us')) {
        setCurrentPage('careers');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('products-hmis') || hash.includes('hmis')) {
        setCurrentPage('products-hmis');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('products-lmis') || hash.includes('lmis')) {
        setCurrentPage('products-lmis');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('products') || hash.includes('our-products')) {
        setCurrentPage('products');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    // Initial sync if loaded with hash
    if (window.location.hash && window.location.hash !== '#home') {
      handleLocationChange();
    }

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleNavigate = (anchor: string) => {
    setActiveDropdown(null);
    setSearchOpen(false);

    if (
      anchor === 'who-we-are' ||
      anchor === '#who-we-are' ||
      anchor === 'who we are' ||
      anchor === '#who we are'
    ) {
      if (window.location.hash !== '#who-we-are') {
        window.history.pushState({ page: 'who-we-are' }, '', '#who-we-are');
      }
      setCurrentPage('who-we-are');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'questions-shaping-business' ||
      anchor === '#questions-shaping-business' ||
      anchor === 'questions' ||
      anchor === '#questions' ||
      anchor === '#seven-questions'
    ) {
      if (window.location.hash !== '#questions-shaping-business') {
        window.history.pushState({ page: 'questions-shaping-business' }, '', '#questions-shaping-business');
      }
      setCurrentPage('questions-shaping-business');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'mining-utilities-chemicals-ec' ||
      anchor === '#mining-utilities-chemicals-ec' ||
      anchor === 'mining-metals' ||
      anchor === '#mining-metals' ||
      anchor === 'mining' ||
      anchor === '#mining' ||
      anchor === 'utilities' ||
      anchor === '#utilities' ||
      anchor === 'chemicals' ||
      anchor === '#chemicals' ||
      anchor === 'engineering-construction' ||
      anchor === '#engineering-construction' ||
      anchor === 'ec' ||
      anchor === '#ec'
    ) {
      const targetHash = anchor.startsWith('#') ? anchor : `#${anchor}`;
      window.location.hash = targetHash;
      window.dispatchEvent(new Event('hashchange'));
      setCurrentPage('mining-utilities-chemicals-ec');
      setActiveDropdown(null);
      return;
    }

    if (
      anchor === 'consumer-retail-automotive' ||
      anchor === '#consumer-retail-automotive' ||
      anchor === 'consumer-retail' ||
      anchor === '#consumer-retail' ||
      anchor === 'automotive' ||
      anchor === '#automotive'
    ) {
      const targetHash = anchor.startsWith('#') ? anchor : `#${anchor}`;
      window.location.hash = targetHash;
      window.dispatchEvent(new Event('hashchange'));
      setCurrentPage('consumer-retail-automotive');
      setActiveDropdown(null);
      return;
    }

    if (
      anchor === 'life-sciences-financial-services' ||
      anchor === '#life-sciences-financial-services' ||
      anchor === 'life-sciences' ||
      anchor === '#life-sciences' ||
      anchor === 'financial-services' ||
      anchor === '#financial-services'
    ) {
      const targetHash = anchor.startsWith('#') ? anchor : `#${anchor}`;
      window.location.hash = targetHash;
      window.dispatchEvent(new Event('hashchange'));
      setCurrentPage('life-sciences-financial-services');
      setActiveDropdown(null);
      return;
    }

    if (
      anchor === 'manufacturing' ||
      anchor === '#manufacturing'
    ) {
      if (window.location.hash !== '#manufacturing') {
        window.history.pushState({ page: 'manufacturing' }, '', '#manufacturing');
      }
      setCurrentPage('manufacturing');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'energy-resources-oil-gas' ||
      anchor === '#energy-resources-oil-gas' ||
      anchor === 'energy-resources' ||
      anchor === '#energy-resources' ||
      anchor === 'energy' ||
      anchor === '#energy'
    ) {
      if (window.location.hash !== '#energy-resources-oil-gas') {
        window.history.pushState({ page: 'energy-resources-oil-gas' }, '', '#energy-resources-oil-gas');
      }
      setCurrentPage('energy-resources-oil-gas');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'industries' ||
      anchor === '#industries' ||
      anchor === 'industry' ||
      anchor === '#industry'
    ) {
      if (window.location.hash !== '#industries') {
        window.history.pushState({ page: 'industries' }, '', '#industries');
      }
      setCurrentPage('industries');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'how-we-work' ||
      anchor === '#how-we-work' ||
      anchor === 'how we work' ||
      anchor === '#how we work' ||
      anchor === 'work' ||
      anchor === '#work'
    ) {
      if (window.location.hash !== '#how-we-work') {
        window.history.pushState({ page: 'how-we-work' }, '', '#how-we-work');
      }
      setCurrentPage('how-we-work');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'global-presence' ||
      anchor === '#global-presence' ||
      anchor === 'global' ||
      anchor === '#global'
    ) {
      if (window.location.hash !== '#global-presence') {
        window.history.pushState({ page: 'global-presence' }, '', '#global-presence');
      }
      setCurrentPage('global-presence');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'outcomes-we-pursue' ||
      anchor === '#outcomes-we-pursue' ||
      anchor === 'outcomes' ||
      anchor === '#outcomes' ||
      anchor === 'the-outcomes-we-pursue' ||
      anchor === '#the-outcomes-we-pursue'
    ) {
      if (window.location.hash !== '#outcomes-we-pursue') {
        window.history.pushState({ page: 'outcomes-we-pursue' }, '', '#outcomes-we-pursue');
      }
      setCurrentPage('outcomes-we-pursue');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'how-we-create-value' ||
      anchor === '#how-we-create-value' ||
      anchor === 'value' ||
      anchor === '#value'
    ) {
      if (window.location.hash !== '#how-we-create-value') {
        window.history.pushState({ page: 'how-we-create-value' }, '', '#how-we-create-value');
      }
      setCurrentPage('how-we-create-value');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'business-functions' ||
      anchor === '#business-functions' ||
      anchor === 'functions' ||
      anchor === '#functions'
    ) {
      if (window.location.hash !== '#business-functions') {
        window.history.pushState({ page: 'business-functions' }, '', '#business-functions');
      }
      setCurrentPage('business-functions');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'ajiledone-intelligent-enterprise' ||
      anchor === '#ajiledone-intelligent-enterprise' ||
      anchor === 'architecture' ||
      anchor === '#architecture'
    ) {
      if (window.location.hash !== '#ajiledone-intelligent-enterprise') {
        window.history.pushState({ page: 'ajiledone-intelligent-enterprise' }, '', '#ajiledone-intelligent-enterprise');
      }
      setCurrentPage('ajiledone-intelligent-enterprise');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'oracle-section' ||
      anchor === '#oracle-section' ||
      anchor === 'oracle-transformation' ||
      anchor === '#oracle-transformation' ||
      anchor === '#oracle'
    ) {
      if (window.location.hash !== '#oracle-section') {
        window.history.pushState({ page: 'sap-transformation', anchor: '#oracle-section' }, '', '#oracle-section');
      }
      setCurrentPage('sap-transformation');
      setActiveDropdown(null);
      setTimeout(() => {
        const el = document.getElementById('oracle-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }

    if (
      anchor === 'servicenow-section' ||
      anchor === '#servicenow-section' ||
      anchor === 'servicenow-transformation' ||
      anchor === '#servicenow-transformation' ||
      anchor === '#servicenow'
    ) {
      if (window.location.hash !== '#servicenow-section') {
        window.history.pushState({ page: 'sap-transformation', anchor: '#servicenow-section' }, '', '#servicenow-section');
      }
      setCurrentPage('sap-transformation');
      setActiveDropdown(null);
      setTimeout(() => {
        const el = document.getElementById('servicenow-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }

    if (
      anchor === 'sap-transformation' ||
      anchor === '#sap-transformation' ||
      anchor === '#sap'
    ) {
      if (window.location.hash !== '#sap-transformation') {
        window.history.pushState({ page: 'sap-transformation' }, '', '#sap-transformation');
      }
      setCurrentPage('sap-transformation');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'cloud-technology-modernization' ||
      anchor === '#cloud-technology-modernization' ||
      anchor === '#cloud'
    ) {
      if (window.location.hash !== '#cloud-technology-modernization') {
        window.history.pushState({ page: 'cloud-technology-modernization' }, '', '#cloud-technology-modernization');
      }
      setCurrentPage('cloud-technology-modernization');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'digital-engineering' ||
      anchor === '#digital-engineering' ||
      anchor === '#engineering'
    ) {
      if (window.location.hash !== '#digital-engineering') {
        window.history.pushState({ page: 'digital-engineering' }, '', '#digital-engineering');
      }
      setCurrentPage('digital-engineering');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'data-intelligence' ||
      anchor === '#data-intelligence' ||
      anchor === '#data'
    ) {
      if (window.location.hash !== '#data-intelligence') {
        window.history.pushState({ page: 'data-intelligence' }, '', '#data-intelligence');
      }
      setCurrentPage('data-intelligence');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'enterprise-platforms' ||
      anchor === '#enterprise-platforms' ||
      anchor === '#platforms'
    ) {
      if (window.location.hash !== '#enterprise-platforms') {
        window.history.pushState({ page: 'enterprise-platforms' }, '', '#enterprise-platforms');
      }
      setCurrentPage('enterprise-platforms');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'ai-intelligent-enterprise' ||
      anchor === '#ai-intelligent-enterprise' ||
      anchor === '#ai'
    ) {
      if (window.location.hash !== '#ai-intelligent-enterprise') {
        window.history.pushState({ page: 'ai-intelligent-enterprise' }, '', '#ai-intelligent-enterprise');
      }
      setCurrentPage('ai-intelligent-enterprise');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'our-vision' ||
      anchor === '#our-vision' ||
      anchor === '#vision'
    ) {
      if (window.location.hash !== '#our-vision') {
        window.history.pushState({ page: 'our-vision' }, '', '#our-vision');
      }
      setCurrentPage('our-vision');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'purpose-and-values' ||
      anchor === '#purpose-and-values' ||
      anchor === 'purpose-and-vision' ||
      anchor === '#purpose-and-vision'
    ) {
      if (window.location.hash !== '#purpose-and-vision') {
        window.history.pushState({ page: 'purpose-and-vision' }, '', '#purpose-and-vision');
      }
      setCurrentPage('purpose-and-vision');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'what-we-do' ||
      anchor === '#what-we-do' ||
      anchor === '#bt-transformation' ||
      anchor === '#capabilities' ||
      anchor === '#cap-card-0' ||
      anchor === '#cloud-technology-modernization' ||
      anchor === '#digital-engineering'
    ) {
      if (window.location.hash !== '#what-we-do') {
        window.history.pushState({ page: 'what-we-do' }, '', '#what-we-do');
      }
      setCurrentPage('what-we-do');
      setActiveDropdown(null);

      const targetId =
        anchor === 'what-we-do' || anchor === '#what-we-do'
          ? '#bt-transformation'
          : anchor.startsWith('#')
            ? anchor
            : `#${anchor}`;

      let attempts = 0;
      const pollTimer = setInterval(() => {
        attempts++;
        const element =
          document.querySelector(targetId) ||
          document.querySelector('#bt-transformation') ||
          document.querySelector('#capabilities');

        if (element) {
          clearInterval(pollTimer);
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts >= 15) {
          clearInterval(pollTimer);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    if (
      anchor === 'insights' ||
      anchor === '#insights' ||
      anchor === 'our-thinking' ||
      anchor === '#our-thinking'
    ) {
      if (window.location.hash !== '#insights') {
        window.history.pushState({ page: 'insights' }, '', '#insights');
      }
      setCurrentPage('insights');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'transformation' ||
      anchor === '#transformation' ||
      anchor === 'transformation-stories' ||
      anchor === '#transformation-stories' ||
      anchor === 'our-work' ||
      anchor === '#our-work' ||
      anchor === '#stories'
    ) {
      if (window.location.hash !== '#transformation') {
        window.history.pushState({ page: 'transformation' }, '', '#transformation');
      }
      setCurrentPage('transformation');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'contact' ||
      anchor === '#contact' ||
      anchor === 'contact-us' ||
      anchor === '#contact-us' ||
      anchor === 'get-in-touch' ||
      anchor === '#get-in-touch'
    ) {
      if (window.location.hash !== '#contact') {
        window.history.pushState({ page: 'contact-us' }, '', '#contact');
      }
      setCurrentPage('contact-us');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'products-hmis' ||
      anchor === '#products-hmis' ||
      anchor === 'hmis' ||
      anchor === '#hmis'
    ) {
      if (window.location.hash !== '#products-hmis') {
        window.history.pushState({ page: 'products-hmis' }, '', '#products-hmis');
      }
      setCurrentPage('products-hmis');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'products-lmis' ||
      anchor === '#products-lmis' ||
      anchor === 'lmis' ||
      anchor === '#lmis' ||
      anchor === 'biosynthesis-lmis' ||
      anchor === '#biosynthesis-lmis'
    ) {
      if (window.location.hash !== '#products-lmis') {
        window.history.pushState({ page: 'products-lmis' }, '', '#products-lmis');
      }
      setCurrentPage('products-lmis');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'products' ||
      anchor === '#products' ||
      anchor === 'products-page' ||
      anchor === '#products-page' ||
      anchor === 'our-products' ||
      anchor === '#our-products'
    ) {
      if (window.location.hash !== '#products') {
        window.history.pushState({ page: 'products' }, '', '#products');
      }
      setCurrentPage('products');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'open-roles' ||
      anchor === '#open-roles' ||
      anchor === 'openroles' ||
      anchor === '#openroles' ||
      anchor === 'open roles' ||
      anchor === '#open-roles-page'
    ) {
      if (window.location.hash !== '#open-roles') {
        window.history.pushState({ page: 'open-roles' }, '', '#open-roles');
      }
      setCurrentPage('open-roles');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      anchor === 'careers' ||
      anchor === '#careers' ||
      anchor === 'careers-page' ||
      anchor === '#careers-page' ||
      anchor === 'join-us' ||
      anchor === '#join-us'
    ) {
      if (window.location.hash !== '#careers') {
        window.history.pushState({ page: 'careers' }, '', '#careers');
      }
      setCurrentPage('careers');
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (window.location.hash !== '#home') {
      window.history.pushState({ page: 'home' }, '', '#home');
    }
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mainNavItems = [
    { name: 'Who we are', hasChevron: true },
    { name: 'What we do', hasChevron: true },
    { name: 'Industries', hasChevron: true },
    { name: 'Technology', hasChevron: true },
    { name: 'Insights', hasChevron: true },
    { name: 'Products', hasChevron: true },
    { name: 'Transformation', hasChevron: false },
    { name: 'Contact', hasChevron: false },
  ];

  return (
    <div className="site-shell" id="top">
      {/* 1. SITE HEADER */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`} onMouseLeave={() => { setActiveDropdown(null); setLangOpen(false); }}>
        <div className="header-container">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="brand"
            aria-label="Ajile Done Home"
          >
            <AjileDoneLogo />
          </a>

          <nav className="desktop-nav" aria-label="Main Navigation">
            {mainNavItems.map((item) => {
              const dropdownKey = item.name === 'Our thinking' ? 'Insights' : item.name;
              const isActive =
                activeDropdown === dropdownKey ||
                (item.name === 'Who we are' && currentPage === 'who-we-are') ||
                (item.name === 'What we do' && currentPage === 'what-we-do') ||
                (item.name === 'Industries' && currentPage === 'industries') ||
                (item.name === 'Products' && currentPage === 'products') ||
                (item.name === 'Insights' && currentPage === 'insights') ||
                (item.name === 'Transformation' && currentPage === 'transformation');

              return (
                <div
                  key={item.name}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  style={{
                    color: isActive ? '#2563EB' : '#334155',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                  }}
                >
                  {/* Clicking the text label routes directly to the page */}
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveDropdown(null);
                      if (item.name === 'Who we are') {
                        setCurrentPage('who-we-are');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else if (item.name === 'What we do') {
                        setCurrentPage('what-we-do');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else if (item.name === 'Products') {
                        setCurrentPage('products');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else if (item.name === 'Industries') {
                        setCurrentPage('industries');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else if (item.name === 'Technology') {
                        handleNavigate('#architecture');
                      } else if (item.name === 'Insights') {
                        handleNavigate('#our-thinking');
                      } else if (item.name === 'Transformation') {
                        handleNavigate('#transformation');
                      } else if (item.name === 'Contact') {
                        handleNavigate('#contact');
                      } else {
                        handleNavigate(`#${item.name.toLowerCase().replace(/\s+/g, '-')}`);
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.name}
                  </span>

                  {/* Clicking the chevron arrow toggles the dropdown overlay */}
                  {item.hasChevron && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === dropdownKey ? null : dropdownKey);
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '4px 2px',
                        cursor: 'pointer',
                      }}
                    >
                      <ChevronDown
                        size={13}
                        style={{
                          transform: activeDropdown === dropdownKey ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s',
                        }}
                      />
                    </span>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '16px', position: 'relative' }}>
            <button
              className="nav-link"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              style={{ padding: '6px', border: 'none', background: 'transparent', cursor: 'pointer', color: '#334155', display: 'flex', alignItems: 'center' }}
            >
              <Search size={19} />
            </button>

            <button
              className="nav-link"
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Language selector"
              style={{ padding: 0, gap: '4px', fontSize: '13px', fontWeight: 600, color: '#334155' }}
            >
              <Globe size={15} /> {selectedRegion} <ChevronDown size={13} style={{ transform: langOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {langOpen && (
              <div className="lang-popover">
                {[
                  { code: 'IN · EN', label: 'India (EN)' },
                  { code: 'US · EN', label: 'United States (EN)' },
                  { code: 'UK · EN', label: 'United Kingdom (EN)' },
                  { code: 'EU · DE', label: 'Europe (DE)' },
                  { code: 'JP · JA', label: 'Japan (JA)' },
                ].map((reg) => (
                  <div
                    key={reg.code}
                    onClick={() => {
                      setSelectedRegion(reg.code);
                      setLangOpen(false);
                    }}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: selectedRegion === reg.code ? 700 : 500,
                      color: selectedRegion === reg.code ? '#2563EB' : '#0F172A',
                      background: selectedRegion === reg.code ? '#F2F6FE' : 'transparent',
                      cursor: 'pointer',
                    }}
                  >
                    {reg.label}
                  </div>
                ))}
              </div>
            )}

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('#contact');
              }}
              style={{
                background: '#2563EB',
                color: '#FFFFFF',
                padding: '10px 24px',
                borderRadius: '24px',
                fontSize: '14px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
            >
              Let's connect
            </a>
          </div>

          <button
            className="menu-button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mega Menu Overlay Dropdown */}
        <MegaMenuDropdown active={activeDropdown} onNavigate={handleNavigate} />

        {mobileOpen && (
          <div className="mobile-menu" style={{ maxHeight: 'calc(100vh - 76px)', overflowY: 'auto', padding: '16px 20px 60px' }}>
            {[
              { name: 'Who we are', hasAccordion: true },
              { name: 'What we do', hasAccordion: true },
              { name: 'Products', hasAccordion: true },
              { name: 'Industries', hasAccordion: true },
              { name: 'Technology', hasAccordion: true },
              { name: 'Insights', hasAccordion: false },
              { name: 'Transformation', hasAccordion: false },
              { name: 'Careers', hasAccordion: false },
              { name: 'Contact', hasAccordion: false },
            ].map((item) => {
              const isExpanded = mobileExpanded === item.name;

              return (
                <div key={item.name} style={{ borderBottom: '1px solid #F1F5F9', padding: '14px 0' }}>
                  <div
                    onClick={() => {
                      if (item.hasAccordion) {
                        setMobileExpanded(isExpanded ? null : item.name);
                      } else {
                        setMobileOpen(false);
                        handleNavigate(`#${item.name.toLowerCase().replace(/\s+/g, '-')}`);
                      }
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: isExpanded ? '#265CF4' : '#0B1739',
                    }}
                  >
                    <span>{item.name}</span>
                    {item.hasAccordion && (
                      <span style={{ color: isExpanded ? '#265CF4' : '#94A3B8', fontSize: '20px', fontWeight: 600 }}>
                        {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    )}
                  </div>

                  {/* Expanded Accordion Content */}
                  {isExpanded && item.name === 'Who we are' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '12px 16px', background: '#F8FAFC', borderRadius: '12px', marginTop: '10px' }}>
                      <div onClick={() => { setCurrentPage('who-we-are'); setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ fontSize: '15px', fontWeight: 700, color: '#0B1739', cursor: 'pointer' }}>Who We Are</div>
                      <div onClick={() => { setCurrentPage('purpose-and-vision'); setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ fontSize: '15px', fontWeight: 700, color: '#0B1739', cursor: 'pointer' }}>Purpose &amp; Values</div>
                      <div onClick={() => { setCurrentPage('our-vision'); setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ fontSize: '15px', fontWeight: 700, color: '#0B1739', cursor: 'pointer' }}>Our Vision</div>
                      <div onClick={() => { setCurrentPage('global-presence'); setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ fontSize: '15px', fontWeight: 700, color: '#0B1739', cursor: 'pointer' }}>Global Presence</div>
                    </div>
                  )}

                  {isExpanded && item.name === 'What we do' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '12px 16px', background: '#F8FAFC', borderRadius: '12px', marginTop: '10px' }}>
                      <div onClick={() => { handleNavigate('#bt-transformation'); setMobileOpen(false); }} style={{ fontSize: '14.5px', fontWeight: 700, color: '#0B1739', cursor: 'pointer' }}>01 Business &amp; Technology Transformation</div>
                      <div onClick={() => { handleNavigate('#ai-intelligent-enterprise'); setMobileOpen(false); }} style={{ fontSize: '14.5px', fontWeight: 700, color: '#0B1739', cursor: 'pointer' }}>02 AI &amp; Intelligent Enterprise</div>
                      <div onClick={() => { handleNavigate('#data-intelligence'); setMobileOpen(false); }} style={{ fontSize: '14.5px', fontWeight: 700, color: '#0B1739', cursor: 'pointer' }}>03 Data &amp; Intelligence</div>
                      <div onClick={() => { handleNavigate('#enterprise-platforms'); setMobileOpen(false); }} style={{ fontSize: '14.5px', fontWeight: 700, color: '#0B1739', cursor: 'pointer' }}>04 Enterprise Platforms</div>
                      <div onClick={() => { handleNavigate('#cloud-technology-modernization'); setMobileOpen(false); }} style={{ fontSize: '14.5px', fontWeight: 700, color: '#0B1739', cursor: 'pointer' }}>05 Cloud &amp; Modernization</div>
                      <div onClick={() => { handleNavigate('#digital-engineering'); setMobileOpen(false); }} style={{ fontSize: '14.5px', fontWeight: 700, color: '#0B1739', cursor: 'pointer' }}>06 Digital Engineering</div>
                    </div>
                  )}

                  {isExpanded && item.name === 'Products' && (
                    <div style={{ background: '#F4F7FF', borderRadius: '16px', padding: '16px 18px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '14px' }}>

                      {/* HMIS */}
                      <div onClick={() => { handleNavigate('products-hmis'); setMobileOpen(false); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#265CF4', color: '#FFFFFF', fontSize: '15px', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>H</div>
                          <div>
                            <div style={{ fontSize: '15px', fontWeight: 800, color: '#0B1739' }}>HMIS</div>
                            <div style={{ fontSize: '12.5px', color: '#64748B' }}>Hospital Management</div>
                          </div>
                        </div>
                        <ArrowRight size={15} style={{ color: '#265CF4' }} />
                      </div>

                      {/* Biosynthesis LMIS */}
                      <div onClick={() => { handleNavigate('products-lmis'); setMobileOpen(false); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#0B1739', color: '#FFFFFF', fontSize: '14px', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>BL</div>
                          <div>
                            <div style={{ fontSize: '15px', fontWeight: 800, color: '#0B1739' }}>Biosynthesis LMIS</div>
                            <div style={{ fontSize: '12.5px', color: '#64748B' }}>Laboratory Information</div>
                          </div>
                        </div>
                        <ArrowRight size={15} style={{ color: '#265CF4' }} />
                      </div>



                      <div onClick={() => { handleNavigate('products'); setMobileOpen(false); }} style={{ color: '#265CF4', fontSize: '14px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px', cursor: 'pointer' }}>
                        All products <ArrowRight size={14} />
                      </div>
                    </div>
                  )}

                  {isExpanded && item.name === 'Industries' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '14px 16px', background: '#F4F7FF', borderRadius: '16px', marginTop: '12px' }}>
                      {[
                        { name: 'Energy & Resources', anchor: '#energy-resources-oil-gas' },
                        { name: 'Automotive', anchor: '#automotive' },
                        { name: 'Manufacturing', anchor: '#manufacturing' },
                        { name: 'Consumer & Retail', anchor: '#consumer-retail' },
                        { name: 'Life Sciences & Healthcare', anchor: '#life-sciences' },
                        { name: 'Financial Services', anchor: '#financial-services' },
                        { name: 'Mining & Metals', anchor: '#mining-metals' },
                        { name: 'Utilities', anchor: '#utilities' },
                        { name: 'Chemicals', anchor: '#chemicals' },
                        { name: 'Engineering & Construction', anchor: '#engineering-construction' },
                      ].map((indItem) => (
                        <div
                          key={indItem.name}
                          onClick={() => {
                            handleNavigate(indItem.anchor);
                            setMobileOpen(false);
                          }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            background: 'transparent',
                            fontSize: '14.5px',
                            fontWeight: 700,
                            color: '#0B1739',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <span>{indItem.name}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {isExpanded && item.name === 'Technology' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', padding: '12px 16px', background: '#F8FAFC', borderRadius: '12px', marginTop: '10px' }}>
                      {['SAP', 'AI', 'Data', 'Cloud', 'Oracle', 'ServiceNow', 'Digital Engineering'].map((tech) => (
                        <div key={tech} onClick={() => { handleNavigate('#architecture'); setMobileOpen(false); }} style={{ fontSize: '14px', fontWeight: 600, color: '#0B1739', cursor: 'pointer' }}>
                          {tech}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </header>

      {/* SEARCH OVERLAY MODAL */}
      {searchOpen && (
        <div className="search-modal-backdrop" onClick={() => setSearchOpen(false)}>
          <div className="search-modal-box" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px', marginBottom: '20px' }}>
              <Search size={20} style={{ color: '#2563EB' }} />
              <input
                type="text"
                placeholder="Search capabilities, insights, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                style={{ flex: 1, border: 'none', outline: 'none', fontSize: '18px', fontFamily: "'Inter', sans-serif", color: '#0F172A' }}
              />
              <button onClick={() => setSearchOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', marginBottom: '10px', letterSpacing: '0.08em' }}>QUICK FILTERS</div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['AI & Intelligence', 'SAP Modernization', 'Cloud Architecture', 'Data & Analytics', 'Energy Sector'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    style={{
                      background: '#F1F5F9',
                      border: 'none',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#334155',
                      cursor: 'pointer',
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {searchQuery && (
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#2563EB', marginBottom: '12px' }}>TOP MATCHES FOR "{searchQuery.toUpperCase()}"</div>
                <div
                  className="mega-card-item"
                  onClick={() => handleNavigate('#capabilities')}
                  style={{ padding: '12px', marginBottom: '8px' }}
                >
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>AI &amp; Intelligent Enterprise Capability</div>
                  <div style={{ fontSize: '13px', color: '#64748B' }}>Move beyond experimentation into autonomous enterprise operations.</div>
                </div>
                <div
                  className="mega-card-item"
                  onClick={() => handleNavigate('#our-thinking')}
                  style={{ padding: '12px' }}
                >
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>The Agentic Enterprise Research</div>
                  <div style={{ fontSize: '13px', color: '#64748B' }}>Perspectives on what comes after Generative AI for global leaders.</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {currentPage === 'who-we-are' ? (
        <WhoWeArePage
          onNavigate={handleNavigate}
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'purpose-and-vision' ? (
        <PurposeandValuesPage
          onNavigate={handleNavigate}
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'what-we-do' ? (
        <WhatWeDoPage
          onNavigate={handleNavigate}
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'our-vision' ? (
        <OurVisionPage
          onNavigate={handleNavigate}
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'ai-intelligent-enterprise' ? (
        <AIAndIntelligentEnterprisePage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'data-intelligence' ? (
        <DataAndIntelligencePage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'enterprise-platforms' ? (
        <EnterprisePlatformsPage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'sap-transformation' ? (
        <SAPTransformationPage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'cloud-technology-modernization' ? (
        <CloudTechnologyModernization
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'digital-engineering' ? (
        <DigitalEngineeringPage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'ajiledone-intelligent-enterprise' ? (
        <AjiledoneIntelligentEnterprisePage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'business-functions' ? (
        <BusinessFunctionsPage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'how-we-create-value' ? (
        <HowWeCreateValuePage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'outcomes-we-pursue' ? (
        <OutcomesWePursuePage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'how-we-work' ? (
        <HowWeWorkPage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'industries' ? (
        <IndustriesPage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'energy-resources-oil-gas' ? (
        <EnergyResourcesOilGasPage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'manufacturing' ? (
        <ManufacturingPage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'life-sciences-financial-services' ? (
        <LifeSciencesFinancialServicesPage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'consumer-retail-automotive' ? (
        <ConsumerRetailAutomotivePage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'mining-utilities-chemicals-ec' ? (
        <MiningUtilitiesChemicalsECPage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'global-presence' ? (
        <GlobalPresencePage onNavigate={handleNavigate} />
      ) : currentPage === 'insights' ? (
        <InsightsPage
          onNavigate={handleNavigate}
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'transformation' ? (
        <TransformationPage
          onNavigate={handleNavigate}
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'contact-us' ? (
        <ContactUsPage
          onNavigate={handleNavigate}
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'products' ? (
        <ProductsPage
          onNavigate={handleNavigate}
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'products-hmis' ? (
        <HMISPage
          onNavigate={handleNavigate}
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'products-lmis' ? (
        <LMISPage
          onNavigate={handleNavigate}
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'careers' ? (
        <CareersPage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'open-roles' ? (
        <OpenRolesPage
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'questions-shaping-business' ? (
        <QuestionsShapingBusinessPage
          onNavigate={handleNavigate}
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <main>
          {/* 2. HERO SECTION */}
          <section className="hero" style={{ background: 'linear-gradient(135deg, #07184A 0%, #0D2B78 45%, #1A4ED0 100%)', position: 'relative', overflow: 'hidden' }}>
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

            <div className="section-container hero-layout" style={{ position: 'relative', zIndex: 2 }}>
              <div className="hero-content">
                {/* Top Tag */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ width: '24px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
                  <span style={{ color: '#67DFCB', fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    FEATURED &nbsp;·&nbsp; IT CONSULTING &amp; RESOURCE SUPPLY
                  </span>
                </div>

                {/* Headline */}
                <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 4.8vw, 58px)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.025em', marginBottom: '24px', color: '#FFFFFF' }}>
                  Getting it done.<br />
                  It's what we do.
                </h1>

                {/* Subhead */}
                <p className="hero-description" style={{ fontSize: '16.5px', color: 'rgba(255, 255, 255, 0.82)', lineHeight: 1.65, maxWidth: '540px', marginBottom: '36px' }}>
                  AjileDone Technologies connects businesses with specialist SAP, AI and engineering teams — through consulting, delivery and dedicated resource supply across India, Dubai and the United States.
                </p>

                {/* CTA Buttons */}
                <div className="hero-cta-group" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
                  <a
                    href="#capabilities"
                    onClick={(e) => { e.preventDefault(); handleNavigate('#capabilities'); }}
                    className="hero-btn-primary"
                  >
                    Explore our services
                  </a>
                  <a
                    href="#who-we-are"
                    onClick={(e) => { e.preventDefault(); handleNavigate('#who-we-are'); }}
                    className="hero-btn-secondary"
                  >
                    Who we are
                  </a>
                </div>

                {/* Bottom Sub-tag */}
                <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.14em', color: '#67DFCB', textTransform: 'uppercase' }}>
                  SAP &nbsp;·&nbsp; AI &nbsp;·&nbsp; ENGINEERING &nbsp;·&nbsp; INDIA &nbsp;·&nbsp; DUBAI &nbsp;·&nbsp; UNITED STATES
                </div>
              </div>

              {/* Right Side Visual Artwork with Opaque Small Dashed Ring */}
              <div className="hero-visual-wrapper">
                <div className="orb-container" style={{ position: 'relative' }}>
                  {/* SVG Outer Circle with Refined Small Opaque Dashes */}
                  <svg
                    width="470"
                    height="470"
                    viewBox="0 0 470 470"
                    style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '-15px',
                      animation: 'spinSlow 90s linear infinite',
                      pointerEvents: 'none',
                    }}
                  >
                    <circle
                      cx="235"
                      cy="235"
                      r="228"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.38)"
                      strokeWidth="1.4"
                      strokeDasharray="7 7"
                    />
                  </svg>

                  <img
                    src="/images/Ellipse.png"
                    alt="Getting it done artwork"
                    className="orb-image-graphic"
                    style={{
                      borderRadius: '50%',
                      boxShadow: '0 0 60px rgba(103, 223, 203, 0.3)',
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 3. INTRO BANNER SECTION */}
          <section
            className="intro-banner"
            id="intro"
            style={{
              background: '#FFFFFF',
              padding: '90px 0',
              borderBottom: '1px solid #E2E8F0',
            }}
          >
            <div className="section-container">
              <div
                className="hero-layout"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 300px',
                  gap: '60px',
                  alignItems: 'center',
                }}
              >
                {/* Left Column: Headline with Vertical Mint Line Accent */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    gap: '24px',
                  }}
                >
                  {/* Vertical Mint Line Accent */}
                  <div
                    style={{
                      width: '4px',
                      backgroundColor: '#67DFCB',
                      borderRadius: '2px',
                      flexShrink: 0,
                    }}
                  />
                  <h2
                    style={{
                      fontSize: 'clamp(26px, 3.2vw, 34px)',
                      fontWeight: 800,
                      color: '#0A1128',
                      lineHeight: 1.3,
                      letterSpacing: '-0.02em',
                      margin: 0,
                      maxWidth: '680px',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Since the beginning, Ajiledone has been about getting things done for our clients, our talent and our communities.
                  </h2>
                </div>

                {/* Right Column: 3 Stacked Action Pill Cards */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  {[
                    { label: 'Who we are', anchor: '#who-we-are' },
                    { label: 'What we do', anchor: '#what-we-do' },
                    { label: 'Careers at AjileDone', anchor: '#careers' },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.anchor}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate(item.anchor);
                      }}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        color: '#265CF4',
                        padding: '14px 22px',
                        borderRadius: '14px',
                        fontSize: '14px',
                        fontWeight: 700,
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                        fontFamily: "'Inter', sans-serif",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#F0F5FE';
                        e.currentTarget.style.borderColor = 'rgba(38, 92, 244, 0.25)';
                        e.currentTarget.style.color = '#265CF4';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(38, 92, 244, 0.12)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#FFFFFF';
                        e.currentTarget.style.borderColor = '#E2E8F0';
                        e.currentTarget.style.color = '#265CF4';
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.02)';
                      }}
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* THE QUESTIONS SHAPING BUSINESS SECTION matching Figma Specs & Colors */}
          <section
            id="questions-shaping-business"
            style={{
              position: 'relative',
              backgroundColor: '#0A1230',
              color: '#FFFFFF',
              padding: '100px 0 90px',
              overflow: 'hidden',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {/* Background Grid Lines */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
                backgroundSize: '140px 140px',
                pointerEvents: 'none',
              }}
            />

            {/* Figma Exact Ambient Spotlight Glow Ellipses */}
            {/* Ellipse 1: #67DFCB 18% Opacity 500x500 blur(220px) per Figma inspect image 4 */}
            <div
              style={{
                position: 'absolute',
                width: '500px',
                height: '500px',
                top: '-160px',
                right: '8%',
                background: 'rgba(103, 223, 203, 0.18)',
                filter: 'blur(220px)',
                WebkitFilter: 'blur(220px)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />
            {/* Ellipse 2: #265CF4 42% Opacity 640x640 Layer blur 240px per Figma inspect image 5 */}
            <div
              style={{
                position: 'absolute',
                width: '640px',
                height: '640px',
                top: '180px',
                left: '20%',
                background: 'rgba(38, 92, 244, 0.42)',
                filter: 'blur(240px)',
                WebkitFilter: 'blur(240px)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />

            <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
              {/* Top Tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '24px', height: '2.5px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  THE QUESTIONS SHAPING BUSINESS
                </span>
              </div>

              {/* Section Header Grid: Title + Stat Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '32px', marginBottom: '56px' }}>
                <div style={{ maxWidth: '720px' }}>
                  <h2
                    style={{
                      fontSize: 'clamp(32px, 3.8vw, 48px)',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      lineHeight: 1.12,
                      letterSpacing: '-0.03em',
                      margin: '0 0 20px 0',
                    }}
                  >
                    The technology conversation has become a business conversation.
                  </h2>
                  <p
                    style={{
                      fontSize: '16px',
                      color: 'rgba(255, 255, 255, 0.72)',
                      lineHeight: 1.6,
                      margin: 0,
                      maxWidth: '560px',
                    }}
                  >
                    Today's leadership teams are confronting questions that cut across traditional organizational boundaries.
                  </p>
                </div>

                {/* Stat Badge 07 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', alignSelf: 'flex-start' }}>
                  <span style={{ fontSize: 'clamp(44px, 5vw, 56px)', fontWeight: 800, color: '#67DFCB', lineHeight: 1, letterSpacing: '-0.03em' }}>
                    07
                  </span>
                  <span style={{ fontSize: '13.5px', fontWeight: 500, color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.35, maxWidth: '170px' }}>
                    questions that no single function can answer alone
                  </span>
                </div>
              </div>

              {/* 4 Question Cards Grid matching Figma Image 1 & 5 */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '24px',
                  marginBottom: '48px',
                }}
              >
                {/* Card 1: AI (Active Solid Mint Card) */}
                <div
                  onClick={() => handleNavigate('#questions-shaping-business')}
                  style={{
                    backgroundColor: '#67DFCB',
                    borderRadius: '20px',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '220px',
                    boxShadow: '0 12px 28px rgba(103, 223, 203, 0.25)',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), boxShadow 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(103, 223, 203, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(103, 223, 203, 0.25)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#0A1230',
                        color: '#67DFCB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 800,
                      }}
                    >
                      ?
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#0A1230', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      AI
                    </span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0A1230', lineHeight: 1.3, margin: 0 }}>
                    How do we make AI real?
                  </h3>
                </div>

                {/* Card 2: DIGITAL CORE */}
                <div
                  onClick={() => handleNavigate('#questions-shaping-business')}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '20px',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '220px',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.borderColor = '#67DFCB';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 800,
                      }}
                    >
                      ?
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      DIGITAL CORE
                    </span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.3, margin: 0 }}>
                    How do we modernize our digital core?
                  </h3>
                </div>

                {/* Card 3: DATA */}
                <div
                  onClick={() => handleNavigate('#questions-shaping-business')}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '20px',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '220px',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.borderColor = '#67DFCB';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 800,
                      }}
                    >
                      ?
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      DATA
                    </span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.3, margin: 0 }}>
                    How do we unlock the value of our data?
                  </h3>
                </div>

                {/* Card 4: CONTINUOUS CHANGE (Solid Royal Blue Card) */}
                <div
                  onClick={() => handleNavigate('#questions-shaping-business')}
                  style={{
                    backgroundColor: '#265CF4',
                    borderRadius: '20px',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '220px',
                    boxShadow: '0 12px 28px rgba(38, 92, 244, 0.35)',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), boxShadow 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(38, 92, 244, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(38, 92, 244, 0.35)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 800,
                      }}
                    >
                      ?
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#9ECAFF', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      CONTINUOUS CHANGE
                    </span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.3, margin: 0 }}>
                    How do we continuously transform?
                  </h3>
                </div>
              </div>

              {/* Bottom Footer Bar: Link + Category Pills matching Figma Image 1 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                <a
                  href="#questions-shaping-business"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate('#questions-shaping-business');
                  }}
                  style={{
                    color: '#67DFCB',
                    fontSize: '15px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'gap 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
                >
                  <span>Read the seven questions</span>
                  <ArrowRight size={16} />
                </a>

                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'rgba(255, 255, 255, 0.45)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  AI &nbsp;·&nbsp; DIGITAL CORE &nbsp;·&nbsp; DATA &nbsp;·&nbsp; SUPPLY CHAIN &nbsp;·&nbsp; ECONOMICS &nbsp;·&nbsp; WORKFORCE &nbsp;·&nbsp; CONTINUOUS CHANGE
                </div>
              </div>
            </div>
          </section>

          {/* 5. CAPABILITIES SECTION (WHAT WE DO) */}
          <section className="section-pad capabilities-section" id="capabilities" style={{ background: '#F4F7FC', padding: '96px 0' }}>
            <div className="section-container">
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: '24px', height: '2px', backgroundColor: '#265CF4', borderRadius: '1px' }} />
                    <span style={{ color: '#265CF4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                      WHAT WE DO
                    </span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 800, color: '#0A1128', lineHeight: 1.15, margin: '0 0 12px 0', fontFamily: "'Inter', sans-serif" }}>
                    Services built around your roadmap.
                  </h2>
                  <p style={{ fontSize: '16px', color: '#64748B', margin: 0 }}>
                    Six capability areas — engaged individually, or as one connected programme.
                  </p>
                </div>
                <a
                  href="#what-we-do"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage('what-we-do');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    color: '#265CF4',
                    fontSize: '15px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'gap 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
                >
                  <span>All services</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* 6 Capabilities Grid */}
              <div className="responsive-3col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                {[
                  {
                    num: '01',
                    title: 'Web Development',
                    text: 'Websites and web applications for online interaction, information sharing and e-commerce.',
                    dashColor: '#67DFCB',
                    defaultBg: '#090F24',
                    defaultTitleColor: '#FFFFFF',
                    defaultTextColor: 'rgba(255, 255, 255, 0.72)',
                    defaultLinkColor: '#67DFCB',
                    hoverBg: '#265CF4',
                    hoverTitleColor: '#FFFFFF',
                    hoverTextColor: 'rgba(255, 255, 255, 0.95)',
                    hoverLinkColor: '#67DFCB',
                  },
                  {
                    num: '02',
                    title: 'SAP & ERP',
                    text: 'Integrating business functions so resources and data are managed efficiently across the organisation.',
                    dashColor: '#265CF4',
                    defaultBg: '#FFFFFF',
                    defaultTitleColor: '#0A1128',
                    defaultTextColor: '#64748B',
                    defaultLinkColor: '#265CF4',
                    hoverBg: '#090F24',
                    hoverTitleColor: '#FFFFFF',
                    hoverTextColor: 'rgba(255, 255, 255, 0.8)',
                    hoverLinkColor: '#67DFCB',
                  },
                  {
                    num: '03',
                    title: 'AI & Machine Learning',
                    text: 'Systems that learn from data and improve performance without explicit programming.',
                    dashColor: '#67DFCB',
                    defaultBg: '#265CF4',
                    defaultTitleColor: '#FFFFFF',
                    defaultTextColor: 'rgba(255, 255, 255, 0.88)',
                    defaultLinkColor: '#67DFCB',
                    hoverBg: '#090F24',
                    hoverTitleColor: '#FFFFFF',
                    hoverTextColor: 'rgba(255, 255, 255, 0.9)',
                    hoverLinkColor: '#67DFCB',
                  },
                  {
                    num: '04',
                    title: 'Blockchain Solutions',
                    text: 'Distributed ledger builds for traceable, tamper-evident business processes.',
                    dashColor: '#265CF4',
                    defaultBg: '#FFFFFF',
                    defaultTitleColor: '#0A1128',
                    defaultTextColor: '#64748B',
                    defaultLinkColor: '#265CF4',
                    hoverBg: '#265CF4',
                    hoverTitleColor: '#FFFFFF',
                    hoverTextColor: 'rgba(255, 255, 255, 0.9)',
                    hoverLinkColor: '#67DFCB',
                  },
                  {
                    num: '05',
                    title: 'Resource Augmentation',
                    text: 'Vetted specialists supplied on demand — embedded into your team, managed by ours.',
                    dashColor: '#1D4ED8',
                    defaultBg: '#52E0CB',
                    defaultTitleColor: '#0A1128',
                    defaultTextColor: 'rgba(10, 17, 40, 0.85)',
                    defaultLinkColor: '#1D4ED8',
                    hoverBg: '#265CF4',
                    hoverTitleColor: '#FFFFFF',
                    hoverTextColor: 'rgba(255, 255, 255, 0.95)',
                    hoverLinkColor: '#67DFCB',
                  },
                  {
                    num: '06',
                    title: 'Support & Production',
                    text: 'Keeping your business safe and ensuring high availability once you are live.',
                    dashColor: '#265CF4',
                    defaultBg: '#FFFFFF',
                    defaultTitleColor: '#0A1128',
                    defaultTextColor: '#64748B',
                    defaultLinkColor: '#265CF4',
                    hoverBg: '#52E0CB',
                    hoverTitleColor: '#0A1128',
                    hoverTextColor: 'rgba(10, 17, 40, 0.85)',
                    hoverLinkColor: '#1D4ED8',
                  },
                ].map((c) => (
                  <div
                    key={c.num}
                    style={{
                      background: c.defaultBg,
                      borderRadius: '18px',
                      padding: '32px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '260px',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = c.hoverBg;
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 18px 36px rgba(38, 92, 244, 0.2)';
                      const titleEl = e.currentTarget.querySelector('.card-title') as HTMLElement;
                      const textEl = e.currentTarget.querySelector('.card-text') as HTMLElement;
                      const linkEl = e.currentTarget.querySelector('.card-link') as HTMLElement;
                      if (titleEl) titleEl.style.color = c.hoverTitleColor;
                      if (textEl) textEl.style.color = c.hoverTextColor;
                      if (linkEl) linkEl.style.color = c.hoverLinkColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = c.defaultBg;
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
                      const titleEl = e.currentTarget.querySelector('.card-title') as HTMLElement;
                      const textEl = e.currentTarget.querySelector('.card-text') as HTMLElement;
                      const linkEl = e.currentTarget.querySelector('.card-link') as HTMLElement;
                      if (titleEl) titleEl.style.color = c.defaultTitleColor;
                      if (textEl) textEl.style.color = c.defaultTextColor;
                      if (linkEl) linkEl.style.color = c.defaultLinkColor;
                    }}
                  >
                    <div>
                      {/* Top Accent Dash & Number */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <div style={{ width: '32px', height: '3px', backgroundColor: c.dashColor, borderRadius: '2px' }} />
                        <span style={{ fontSize: '13px', fontWeight: 800, color: c.defaultTitleColor, opacity: 0.6, letterSpacing: '0.05em' }}>
                          {c.num}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="card-title"
                        style={{
                          fontSize: '20px',
                          fontWeight: 800,
                          color: c.defaultTitleColor,
                          margin: '0 0 12px 0',
                          lineHeight: 1.25,
                          transition: 'color 0.3s ease',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {c.title}
                      </h3>

                      {/* Description Text */}
                      <p
                        className="card-text"
                        style={{
                          fontSize: '14.5px',
                          color: c.defaultTextColor,
                          margin: '0 0 24px 0',
                          lineHeight: 1.55,
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {c.text}
                      </p>
                    </div>

                    {/* Learn More Link */}
                    <div
                      className="card-link"
                      style={{
                        color: c.defaultLinkColor,
                        fontSize: '14px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      <span>Learn more</span>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. OUR THINKING SECTION */}
          <section className="section-pad" id="our-thinking" style={{ background: '#FFFFFF', padding: '88px 0 96px' }}>
            <div className="section-container">
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: '24px', height: '2px', backgroundColor: '#265CF4', borderRadius: '1px' }} />
                    <span style={{ color: '#265CF4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                      OUR THINKING
                    </span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 800, color: '#0A1128', lineHeight: 1.15, margin: 0, fontFamily: "'Inter', sans-serif" }}>
                    The latest from AjileDone.
                  </h2>
                </div>
                <a
                  href="#our-thinking"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate('#our-thinking');
                  }}
                  style={{
                    color: '#265CF4',
                    fontSize: '15px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'gap 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
                >
                  <span>View all insights</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* 3 Insight Cards */}
              <div className="responsive-3col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px', marginBottom: '48px' }}>
                {[
                  {
                    tag: 'ANALYSIS · 5 MIN READ',
                    title: 'Agentic AI in the enterprise',
                    text: 'How autonomous agents are reshaping service delivery — and what it means for your operating model.',
                    img: '/images/insights1.png',
                  },
                  {
                    tag: 'PERSPECTIVE · 4 MIN READ',
                    title: 'SAP S/4HANA migration playbook',
                    text: 'A pragmatic sequence for moving off legacy ERP without stalling the business.',
                    img: '/images/insights2.png',
                  },
                  {
                    tag: 'RESEARCH · 6 MIN READ',
                    title: 'The distributed team advantage',
                    text: 'Why resource augmentation outperforms traditional outsourcing on speed and retention.',
                    img: '/images/insights3.png',
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid #E2E8F0',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 16px 32px rgba(38, 92, 244, 0.12)';
                      e.currentTarget.style.borderColor = 'rgba(38, 92, 244, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.02)';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                    }}
                  >
                    {/* Card Header Image with Floating Badge */}
                    <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden' }}>
                      <img
                        src={card.img}
                        alt={card.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '12px',
                          left: '16px',
                          background: '#FFFFFF',
                          color: '#265CF4',
                          fontSize: '11px',
                          fontWeight: 800,
                          letterSpacing: '0.08em',
                          padding: '6px 14px',
                          borderRadius: '20px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        }}
                      >
                        {card.tag}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div style={{ padding: '24px 28px 28px 28px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                      <div>
                        <h3
                          style={{
                            fontSize: '20px',
                            fontWeight: 800,
                            color: '#0F172A',
                            margin: '0 0 12px 0',
                            lineHeight: 1.3,
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {card.title}
                        </h3>
                        <p
                          style={{
                            fontSize: '14px',
                            color: '#64748B',
                            margin: '0 0 24px 0',
                            lineHeight: 1.55,
                          }}
                        >
                          {card.text}
                        </p>
                      </div>

                      <div
                        style={{
                          color: '#265CF4',
                          fontSize: '14px',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <span>Read</span>
                        <ArrowRight size={15} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Subtext */}
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#475569', margin: 0 }}>
                Perspectives across technology, industries and business transformation.
              </p>
            </div>
          </section>

          {/* 8. OUR WORK SECTION */}
          <section
            className="section-pad stories-section"
            id="stories"
            style={{
              background: 'linear-gradient(180deg, #07132B 0%, #0A1B3D 50%, #081530 100%)',
              color: '#FFFFFF',
              padding: '96px 0',
            }}
          >
            <div className="section-container">
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: '24px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
                    <span style={{ color: '#67DFCB', fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                      OUR WORK
                    </span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(34px, 4.2vw, 48px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, margin: '0 0 12px 0', fontFamily: "'Inter', sans-serif" }}>
                    Client stories that moved the needle.
                  </h2>
                  <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.72)', margin: 0, maxWidth: '620px' }}>
                    Every story follows the same arc — the challenge, the approach, the technology and what actually changed.
                  </p>
                </div>
                <a
                  href="#stories"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate('#stories');
                  }}
                  style={{
                    color: '#67DFCB',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'gap 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
                >
                  <span>All transformation stories</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* 3 Story Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                {[
                  {
                    num: '01',
                    category: 'E-COMMERCE',
                    title: 'A catering business goes digital',
                    desc: 'Elegant, modern web presence with an online menu and reservation system that customers actually use.',
                    img: '/images/ourworkhome1.png',
                    reverse: false,
                  },
                  {
                    num: '02',
                    category: 'FITNESS & WELLNESS',
                    title: 'Booking that keeps up with the workouts',
                    desc: "A class schedule and booking feature that became a game-changer for a fitness studio's clients.",
                    img: '/images/ourworkhome2.png',
                    reverse: true,
                  },
                  {
                    num: '03',
                    category: 'CREATIVE SERVICES',
                    title: 'A portfolio that wins clients',
                    desc: 'Gallery-first design showcasing photography work, with enquiry flows that convert visitors into bookings.',
                    img: '/images/ourworkhome3.png',
                    reverse: false,
                  },
                ].map((story, i) => (
                  <div
                    key={story.num}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '48px',
                      alignItems: 'center',
                      paddingBottom: i === 2 ? '0' : '48px',
                      borderBottom: i === 2 ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                      transition: 'transform 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      const imgEl = e.currentTarget.querySelector('.story-img') as HTMLElement;
                      const imgCard = e.currentTarget.querySelector('.story-img-card') as HTMLElement;
                      const badgeEl = e.currentTarget.querySelector('.story-badge') as HTMLElement;
                      const linkEl = e.currentTarget.querySelector('.story-link') as HTMLElement;
                      if (imgEl) imgEl.style.transform = 'scale(1.06)';
                      if (imgCard) imgCard.style.boxShadow = '0 20px 40px rgba(103, 223, 203, 0.25)';
                      if (badgeEl) {
                        badgeEl.style.background = '#67DFCB';
                        badgeEl.style.color = '#07132B';
                        badgeEl.style.borderColor = '#67DFCB';
                      }
                      if (linkEl) linkEl.style.gap = '10px';
                    }}
                    onMouseLeave={(e) => {
                      const imgEl = e.currentTarget.querySelector('.story-img') as HTMLElement;
                      const imgCard = e.currentTarget.querySelector('.story-img-card') as HTMLElement;
                      const badgeEl = e.currentTarget.querySelector('.story-badge') as HTMLElement;
                      const linkEl = e.currentTarget.querySelector('.story-link') as HTMLElement;
                      if (imgEl) imgEl.style.transform = 'scale(1)';
                      if (imgCard) imgCard.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)';
                      if (badgeEl) {
                        badgeEl.style.background = 'rgba(255, 255, 255, 0.1)';
                        badgeEl.style.color = '#FFFFFF';
                        badgeEl.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                      }
                      if (linkEl) linkEl.style.gap = '6px';
                    }}
                  >
                    {/* Image Block (Left if not reversed) */}
                    {!story.reverse && (
                      <div
                        className="story-img-card"
                        style={{
                          borderRadius: '18px',
                          overflow: 'hidden',
                          height: '280px',
                          boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                          transition: 'box-shadow 0.35s ease',
                        }}
                      >
                        <img
                          src={story.img}
                          alt={story.title}
                          className="story-img"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                        />
                      </div>
                    )}

                    {/* Text Block */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 800, color: '#67DFCB' }}>{story.num}</span>
                        <span
                          className="story-badge"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                            color: '#FFFFFF',
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            textTransform: 'uppercase',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {story.category}
                        </span>
                      </div>
                      <h3 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800, color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.25, fontFamily: "'Inter', sans-serif" }}>
                        {story.title}
                      </h3>
                      <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.72)', margin: '0 0 28px 0', lineHeight: 1.6, maxWidth: '480px' }}>
                        {story.desc}
                      </p>
                      <a
                        href="#stories"
                        className="story-link"
                        onClick={(e) => { e.preventDefault(); handleNavigate('#stories'); }}
                        style={{ color: '#67DFCB', fontSize: '14.5px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'gap 0.25s ease' }}
                      >
                        <span>Read the full story</span>
                        <ArrowRight size={15} />
                      </a>
                    </div>

                    {/* Image Block (Right if reversed) */}
                    {story.reverse && (
                      <div
                        className="story-img-card"
                        style={{
                          borderRadius: '18px',
                          overflow: 'hidden',
                          height: '280px',
                          boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                          transition: 'box-shadow 0.35s ease',
                        }}
                      >
                        <img
                          src={story.img}
                          alt={story.title}
                          className="story-img"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>



          {/* 8.5 OUR THINKING / INSIGHTS HOME SECTION per uploaded Image 2 */}
          <section
            id="our-thinking"
            style={{
              padding: '96px 0',
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid #E2E8F0',
            }}
          >
            <div className="section-container">
              {/* Header Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <div style={{ width: '24px', height: '2.5px', backgroundColor: '#265CF4', borderRadius: '1px' }} />
                    <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#265CF4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                      OUR THINKING
                    </span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: '#0B1739', margin: 0, letterSpacing: '-0.025em' }}>
                    The latest from AjileDone.
                  </h2>
                </div>

                <a
                  href="#insights"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate('#insights');
                  }}
                  style={{
                    color: '#265CF4',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    textDecoration: 'none',
                    transition: 'gap 0.2s ease',
                  }}
                >
                  View all insights <ArrowRight size={15} />
                </a>
              </div>

              {/* 3 Cards Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
                {[
                  {
                    id: 1,
                    tag: 'AI',
                    title: 'The Agentic Enterprise: What Comes After Generative AI?',
                    desc: 'Why the next shift in enterprise software is from copilot tools to autonomous agents that act and orchestrate across systems.',
                    bg: 'linear-gradient(135deg, #1B4AC7 0%, #0D2A75 100%)',
                    tagBg: 'rgba(255, 255, 255, 0.2)',
                    tagColor: '#FFFFFF',
                    textColor: '#FFFFFF',
                    descColor: 'rgba(255, 255, 255, 0.8)',
                    btnColor: '#67DFCB',
                  },
                  {
                    id: 2,
                    tag: 'ERP',
                    title: 'Beyond ERP: Building the Intelligent Enterprise',
                    desc: 'How modernizing your SAP ERP core enables real-time decision making and continuous transformation across business functions.',
                    bg: '#0B1739',
                    tagBg: 'rgba(38, 92, 244, 0.3)',
                    tagColor: '#67DFCB',
                    textColor: '#FFFFFF',
                    descColor: 'rgba(255, 255, 255, 0.78)',
                    btnColor: '#67DFCB',
                  },
                  {
                    id: 3,
                    tag: 'DATA',
                    title: 'Why Your Data Architecture Will Determine Your AI Strategy',
                    desc: 'Without unified data governance and real-time data pipelines, AI models cannot deliver sustainable enterprise value.',
                    bg: '#67DFCB',
                    tagBg: 'rgba(10, 18, 48, 0.15)',
                    tagColor: '#0A1230',
                    textColor: '#0A1230',
                    descColor: 'rgba(10, 18, 48, 0.85)',
                    btnColor: '#265CF4',
                  },
                ].map((card) => (
                  <div
                    key={card.id}
                    onClick={() => handleNavigate('#insights')}
                    style={{
                      background: card.bg,
                      borderRadius: '24px',
                      padding: '38px 32px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '340px',
                      cursor: 'pointer',
                      boxShadow: '0 12px 32px rgba(11, 23, 57, 0.08)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 18px 40px rgba(11, 23, 57, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(11, 23, 57, 0.08)';
                    }}
                  >
                    <div>
                      <span
                        style={{
                          display: 'inline-block',
                          backgroundColor: card.tagBg,
                          color: card.tagColor,
                          fontSize: '11px',
                          fontWeight: 800,
                          letterSpacing: '0.12em',
                          padding: '6px 14px',
                          borderRadius: '16px',
                          textTransform: 'uppercase',
                          marginBottom: '20px',
                        }}
                      >
                        {card.tag}
                      </span>

                      <h3
                        style={{
                          fontSize: '21px',
                          fontWeight: 800,
                          color: card.textColor,
                          lineHeight: 1.3,
                          marginBottom: '14px',
                          letterSpacing: '-0.015em',
                        }}
                      >
                        {card.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '14px',
                          color: card.descColor,
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {card.desc}
                      </p>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: card.btnColor,
                        fontSize: '14px',
                        fontWeight: 800,
                        marginTop: '28px',
                      }}
                    >
                      Read perspective <ArrowRight size={15} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 9. CAREERS SECTION */}
          <section
            className="section-pad careers-section"
            id="careers"
            style={{
              background: '#F4F7FC',
              padding: '96px 0',
              borderTop: '1px solid #E2E8F0',
            }}
          >
            <div className="section-container">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '60px',
                  alignItems: 'center',
                }}
              >
                {/* Left Column: Header, Body, Buttons, Value Pills */}
                <div>
                  {/* Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <div style={{ width: '24px', height: '2px', backgroundColor: '#265CF4', borderRadius: '1px' }} />
                    <span style={{ color: '#265CF4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                      CAREERS
                    </span>
                  </div>

                  {/* Headline */}
                  <h2
                    style={{
                      fontSize: 'clamp(34px, 4.2vw, 48px)',
                      fontWeight: 800,
                      color: '#0A1128',
                      lineHeight: 1.15,
                      margin: '0 0 20px 0',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Join us. Choose your impact.
                  </h2>

                  {/* Subhead Description */}
                  <p
                    style={{
                      fontSize: '16px',
                      color: '#64748B',
                      lineHeight: 1.6,
                      maxWidth: '520px',
                      margin: '0 0 36px 0',
                    }}
                  >
                    Deciding your career is more than landing the job. It's finding a place where you make a difference each day — and can be your most authentic self.
                  </p>

                  {/* CTA Buttons Group */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
                    <a
                      href="#careers"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('#careers');
                      }}
                      style={{
                        background: '#265CF4',
                        color: '#FFFFFF',
                        padding: '14px 28px',
                        borderRadius: '30px',
                        fontWeight: 700,
                        fontSize: '14px',
                        textDecoration: 'none',
                        boxShadow: '0 8px 24px rgba(38, 92, 244, 0.25)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 12px 28px rgba(38, 92, 244, 0.35)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(38, 92, 244, 0.25)';
                      }}
                    >
                      Explore careers
                    </a>
                    <a
                      href="#careers"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('#careers');
                      }}
                      style={{
                        background: 'transparent',
                        border: '1px solid #0F172A',
                        color: '#0F172A',
                        padding: '14px 28px',
                        borderRadius: '30px',
                        fontWeight: 700,
                        fontSize: '14px',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0F172A';
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#0F172A';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      Search and apply
                    </a>
                  </div>

                  {/* 4 Bottom Value Pills */}
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {[
                      'Think differently',
                      'Learn continuously',
                      'Engineer boldly',
                      'Create meaningful impact',
                    ].map((val) => (
                      <div
                        key={val}
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderRadius: '20px',
                          padding: '8px 16px',
                          fontSize: '12.5px',
                          fontWeight: 700,
                          color: '#334155',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                        }}
                      >
                        <span style={{ color: '#52E0CB', fontSize: '14px', lineHeight: 1 }}>•</span>
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Visual Artwork Card with Mint Floating Pill */}
                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      borderRadius: '24px',
                      overflow: 'hidden',
                      height: '350px',
                      boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)',
                    }}
                  >
                    <img
                      src="/images/carrershome1.png"
                      alt="Join us. Choose your impact."
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Floating Mint Teal Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '24px',
                      left: '-20px',
                      background: '#52E0CB',
                      borderRadius: '16px',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      boxShadow: '0 12px 30px rgba(82, 224, 203, 0.4)',
                    }}
                  >
                    <span style={{ fontSize: '32px', fontWeight: 900, color: '#07132B', lineHeight: 1, fontFamily: "'Inter', sans-serif" }}>
                      10
                    </span>
                    <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#07132B', lineHeight: 1.3, maxWidth: '120px' }}>
                      open roles across India, Dubai and the US
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* 12. FOOTER */}
      <footer className="site-footer">
        <div className="section-container">
          <div className="footer-top-grid">
            <div className="footer-brand-col">
              <a href="#top" className="brand brand--footer">
                <AjileDoneLogo variant="footer" />
              </a>
              <p>
                Let's connect. Whether you're just starting out or an experienced professional, your future starts here.
              </p>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-col-header">What we do</h4>
              <ul className="footer-links-list">
                <li><a href="#capabilities">Web Development</a></li>
                <li><a href="#capabilities">SAP &amp; ERP</a></li>
                <li><a href="#capabilities">AI &amp; Machine Learning</a></li>
                <li><a href="#capabilities">Blockchain</a></li>
                <li><a href="#capabilities">Resource Augmentation</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-col-header">Who we are</h4>
              <ul className="footer-links-list">
                <li><a href="#who-we-are" onClick={(e) => { e.preventDefault(); handleNavigate('#who-we-are'); }}>About us</a></li>
                <li><a href="#who-we-are" onClick={(e) => { e.preventDefault(); handleNavigate('#who-we-are'); }}>Our people</a></li>
                <li><a href="#stories" onClick={(e) => { e.preventDefault(); handleNavigate('#transformation'); }}>Portfolio</a></li>
                <li><a href="#careers" onClick={(e) => { e.preventDefault(); handleNavigate('#careers'); }}>Careers</a></li>
                <li><a href="#insights" onClick={(e) => { e.preventDefault(); handleNavigate('#insights'); }}>Press room</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-col-header">Connect</h4>
              <ul className="footer-links-list">
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigate('#contact'); }}>Get in touch</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigate('#contact'); }}>Submit RFP</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigate('#contact'); }}>View locations</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '32px' }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)' }}>© 2026 AjileDone Technologies Private Limited. All rights reserved.</p>
            <div className="footer-legal-links" style={{ gap: '16px', color: 'rgba(255, 255, 255, 0.5)' }}>
              <a href="#top" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Terms of Use</a>
              <span style={{ opacity: 0.4 }}>·</span>
              <a href="#top" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Cookies</a>
              <span style={{ opacity: 0.4 }}>·</span>
              <a href="#top" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
