import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, X, Play, Shield, Cpu, Activity, FileSpreadsheet } from 'lucide-react';

interface ProductsPageProps {
  onNavigate?: (anchor: string) => void;
  onGoHome?: () => void;
}

export function ProductsPage({ onNavigate, onGoHome }: ProductsPageProps) {
  const [hoveredProductCard, setHoveredProductCard] = useState<number | null>(null);
  const [selectedDemoProduct, setSelectedDemoProduct] = useState<string | null>(null);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoForm, setDemoForm] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    selectedProduct: 'All platforms',
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
        selectedProduct: 'All platforms',
        notes: ''
      });
    }, 2800);
  };

  const scrollToProducts = () => {
    const el = document.getElementById('the-products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC', color: '#0F172A', minHeight: '100vh', fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>

      {/* 1. HERO SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(8, 25, 74, 1) 0%, rgba(13, 42, 117, 1) 50%, rgba(27, 74, 199, 1) 100%)',
        color: '#FFFFFF',
        padding: '72px 24px 96px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '720px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Subtle Vertical Background Blueprint Grid Lines */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          pointerEvents: 'none',
          zIndex: 1
        }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ borderRight: '1px solid rgba(255, 255, 255, 0.05)', height: '100%' }} />
          ))}
        </div>

        {/* Figma Ambient Blurs */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '50px',
          width: '460px',
          height: '460px',
          background: 'rgba(31, 165, 255, 0.4)',
          filter: 'blur(200px)',
          pointerEvents: 'none',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          top: '140px',
          right: '180px',
          width: '600px',
          height: '600px',
          background: 'rgba(103, 223, 203, 0.22)',
          filter: 'blur(230px)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        <div style={{ maxWidth: '1240px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 2 }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '32px' }}>
            <span
              onClick={onGoHome}
              style={{ cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)'}
            >
              Home
            </span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 500 }}>Products</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '56px', alignItems: 'center' }}>

            {/* Left Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '24px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
                <span style={{ color: '#67DFCB', fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  AJILEDONE PRODUCTS
                </span>
              </div>

              <h1 style={{
                fontSize: 'clamp(36px, 4.8vw, 54px)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
                color: '#FFFFFF'
              }}>
                Platforms we built,<br />
                not just projects<br />
                we delivered.
              </h1>

              <p style={{
                fontSize: '15.5px',
                color: 'rgba(255, 255, 255, 0.82)',
                lineHeight: 1.6,
                marginBottom: '36px',
                maxWidth: '520px',
                fontWeight: 400
              }}>
                Three enterprise-grade platforms across hospital operations, diagnostics and multi-jurisdictional tax — each built on the same engineering standard we bring to client transformation.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                <button
                  onClick={scrollToProducts}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#08194A',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '14px 32px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#67DFCB';
                    e.currentTarget.style.color = '#0A1128';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#08194A';
                  }}
                >
                  Explore the products
                </button>

                <button
                  onClick={() => setSelectedDemoProduct('All platforms')}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#FFFFFF',
                    border: '1.5px solid rgba(255, 255, 255, 0.35)',
                    borderRadius: '50px',
                    padding: '13px 28px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.borderColor = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                  }}
                >
                  Request a demo
                </button>
              </div>
            </div>

            {/* Right Cards Grid (3 Products) */}
            <div>
              <div style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: 'rgba(255, 255, 255, 0.65)',
                marginBottom: '16px',
                textTransform: 'uppercase'
              }}>
                THREE PRODUCTS
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px'
              }}>

                {/* Quick Card 01 - HMIS */}
                <div
                  onClick={scrollToProducts}
                  onMouseEnter={() => setHoveredProductCard(1)}
                  onMouseLeave={() => setHoveredProductCard(null)}
                  style={{
                    backgroundColor: hoveredProductCard === 1 ? '#67DFCB' : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: hoveredProductCard === 1 ? '1px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.2)',
                    color: hoveredProductCard === 1 ? '#0A1128' : '#FFFFFF',
                    borderRadius: '20px',
                    padding: '24px 20px',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    minHeight: '140px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transform: hoveredProductCard === 1 ? 'translateY(-3px)' : 'translateY(0)',
                    boxShadow: hoveredProductCard === 1 ? '0 12px 28px rgba(103, 223, 203, 0.3)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, opacity: hoveredProductCard === 1 ? 0.7 : 0.6, letterSpacing: '0.08em', color: hoveredProductCard === 1 ? '#0A1128' : '#FFFFFF' }}>01</span>
                    <ArrowRight size={16} color={hoveredProductCard === 1 ? '#0A1128' : '#67DFCB'} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 4px 0', color: hoveredProductCard === 1 ? '#0A1128' : '#FFFFFF' }}>HMIS</h3>
                    <p style={{ fontSize: '12px', fontWeight: 600, margin: 0, color: hoveredProductCard === 1 ? '#0A1128' : '#FFFFFF', opacity: hoveredProductCard === 1 ? 0.9 : 0.85 }}>Hospital Management Information System</p>
                  </div>
                </div>

                {/* Quick Card 02 - Biosynthesis LMIS */}
                <div
                  onClick={() => onNavigate?.('products-lmis')}
                  onMouseEnter={() => setHoveredProductCard(2)}
                  onMouseLeave={() => setHoveredProductCard(null)}
                  style={{
                    backgroundColor: hoveredProductCard === 2 ? '#67DFCB' : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: hoveredProductCard === 2 ? '1px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.2)',
                    color: hoveredProductCard === 2 ? '#0A1128' : '#FFFFFF',
                    borderRadius: '20px',
                    padding: '24px 20px',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    minHeight: '140px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transform: hoveredProductCard === 2 ? 'translateY(-3px)' : 'translateY(0)',
                    boxShadow: hoveredProductCard === 2 ? '0 12px 28px rgba(103, 223, 203, 0.3)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, opacity: hoveredProductCard === 2 ? 0.7 : 0.6, letterSpacing: '0.08em', color: hoveredProductCard === 2 ? '#0A1128' : '#FFFFFF' }}>02</span>
                    <ArrowRight size={16} color={hoveredProductCard === 2 ? '#0A1128' : '#67DFCB'} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 4px 0', color: hoveredProductCard === 2 ? '#0A1128' : '#FFFFFF' }}>Biosynthesis LMIS</h3>
                    <p style={{ fontSize: '12px', fontWeight: 500, margin: 0, color: hoveredProductCard === 2 ? '#0A1128' : '#FFFFFF', opacity: hoveredProductCard === 2 ? 0.9 : 0.8 }}>Laboratory Information Management</p>
                  </div>
                </div>

                {/* Quick Card 03 - Audit Pro (Spans full row) */}
                <div
                  onClick={scrollToProducts}
                  onMouseEnter={() => setHoveredProductCard(3)}
                  onMouseLeave={() => setHoveredProductCard(null)}
                  style={{
                    gridColumn: 'span 2',
                    backgroundColor: hoveredProductCard === 3 ? '#67DFCB' : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: hoveredProductCard === 3 ? '1px solid #67DFCB' : '1px solid rgba(255, 255, 255, 0.2)',
                    color: hoveredProductCard === 3 ? '#0A1128' : '#FFFFFF',
                    borderRadius: '20px',
                    padding: '24px 20px',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    minHeight: '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transform: hoveredProductCard === 3 ? 'translateY(-3px)' : 'translateY(0)',
                    boxShadow: hoveredProductCard === 3 ? '0 12px 28px rgba(103, 223, 203, 0.3)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, opacity: hoveredProductCard === 3 ? 0.7 : 0.6, letterSpacing: '0.08em', color: hoveredProductCard === 3 ? '#0A1128' : '#FFFFFF' }}>03</span>
                    <ArrowRight size={16} color={hoveredProductCard === 3 ? '#0A1128' : '#67DFCB'} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '19px', fontWeight: 800, margin: '0 0 4px 0', color: hoveredProductCard === 3 ? '#0A1128' : '#FFFFFF' }}>Audit Pro</h3>
                    <p style={{ fontSize: '12px', fontWeight: 500, margin: 0, color: hoveredProductCard === 3 ? '#0A1128' : '#FFFFFF', opacity: hoveredProductCard === 3 ? 0.9 : 0.8 }}>Tax, Compliance & Audit Platform</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. THE PRODUCTS SECTION */}
      <section id="the-products" style={{ backgroundColor: '#F8FAFC', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1380px', margin: '0 auto' }}>

          {/* Section Header */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '24px', height: '2px', backgroundColor: '#1F5AF4', borderRadius: '1px' }} />
              <span style={{ color: '#1F5AF4', fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                THE PRODUCTS
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              color: '#0A1128',
              margin: '0 0 16px 0',
              letterSpacing: '-0.025em',
              lineHeight: 1.18
            }}>
              Three platforms, one engineering standard.
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#64748B',
              margin: 0,
              maxWidth: '680px',
              lineHeight: 1.55
            }}>
              Each product is production software — built, operated and supported by the same teams that deliver our client transformation work.
            </p>
          </div>

          {/* Product Cards Grid (3 Products with wider card boundaries) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>

            {/* CARD 01: HMIS (Vibrant Electric Blue) */}
            <div
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 28px 60px rgba(31, 90, 244, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(31, 90, 244, 0.2)';
              }}
              onClick={() => onNavigate?.('products-hmis')}
              style={{
                backgroundColor: '#1F5AF4',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: '44px 40px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 16px 40px rgba(31, 90, 244, 0.2)',
                minHeight: '520px',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Outlined Watermark */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '28px',
                fontSize: '110px',
                fontWeight: 900,
                color: 'transparent',
                WebkitTextStroke: '2px rgba(255, 255, 255, 0.2)',
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none'
              }}>
                01
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Category Pill */}
                <div style={{ marginBottom: '20px' }}>
                  <span style={{
                    fontSize: '10.5px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '5px 14px',
                    display: 'inline-block',
                    textTransform: 'uppercase'
                  }}>
                    HOSPITAL MANAGEMENT
                  </span>
                </div>

                <h3 style={{ fontSize: '38px', fontWeight: 800, margin: '0 0 16px 0', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
                  HMIS
                </h3>

                <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6, marginBottom: '36px', maxWidth: '440px' }}>
                  An end-to-end, AI-powered Hospital Management Information System, Clinical Intelligence Platform and Patient Health Experience Engine.
                </p>

                {/* Pill Badges Grid */}
                <div style={{ marginBottom: '36px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.08em', marginBottom: '14px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
                    5 MODULES
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['ABDM / ABHA workflows', 'AI symptom triage', 'QR check-in', 'Ambient SOAP notes', 'IoT vitals', 'Smart bed allocation', 'OT command centre'].map((module, idx) => (
                      <span key={idx} style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        backgroundColor: 'rgba(255, 255, 255, 0.18)',
                        color: '#FFFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        borderRadius: '20px',
                        padding: '6px 14px'
                      }}>
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNavigate) {
                      onNavigate('products-hmis');
                    } else {
                      setSelectedDemoProduct('HMIS');
                    }
                  }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#1F5AF4',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '12px 26px',
                    fontSize: '14px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0A1128';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#1F5AF4';
                  }}
                >
                  <span>Explore HMIS</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* CARD 02: Biosynthesis LMIS (Vibrant Mint Teal) */}
            <div
              onClick={() => onNavigate?.('products-lmis')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 28px 60px rgba(70, 211, 182, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(70, 211, 182, 0.2)';
              }}
              style={{
                backgroundColor: '#46D3B6',
                color: '#0A1128',
                borderRadius: '24px',
                padding: '44px 40px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 16px 40px rgba(70, 211, 182, 0.2)',
                minHeight: '520px',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Outlined Watermark */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '28px',
                fontSize: '110px',
                fontWeight: 900,
                color: 'transparent',
                WebkitTextStroke: '2px rgba(10, 17, 40, 0.15)',
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none'
              }}>
                02
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Category Pill */}
                <div style={{ marginBottom: '20px' }}>
                  <span style={{
                    fontSize: '10.5px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    backgroundColor: 'rgba(10, 17, 40, 0.1)',
                    color: '#0A1128',
                    borderRadius: '20px',
                    padding: '5px 14px',
                    display: 'inline-block',
                    textTransform: 'uppercase'
                  }}>
                    LABORATORY INFORMATION
                  </span>
                </div>

                <h3 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 16px 0', letterSpacing: '-0.02em', color: '#0A1128' }}>
                  Biosynthesis LMIS
                </h3>

                <p style={{ fontSize: '15px', color: '#0F172A', lineHeight: 1.6, marginBottom: '36px', maxWidth: '440px', fontWeight: 500 }}>
                  An enterprise-grade, AI-powered Laboratory Information Management System, Diagnostic Quality Engine and Patient Health Intelligence Platform.
                </p>

                {/* Pill Badges Grid */}
                <div style={{ marginBottom: '36px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#0A1128', letterSpacing: '0.08em', marginBottom: '14px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1F5AF4', display: 'inline-block' }} />
                    7 MODULES
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['AI TRF parsing', 'Optical tube recognition', 'DICOM viewer', 'Delta-check analysis', 'Autonomous AI agents', 'Smart health summaries'].map((module, idx) => (
                      <span key={idx} style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        backgroundColor: 'rgba(255, 255, 255, 0.55)',
                        color: '#0A1128',
                        border: '1px solid rgba(10, 17, 40, 0.12)',
                        borderRadius: '20px',
                        padding: '6px 14px'
                      }}>
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNavigate) {
                      onNavigate('products-lmis');
                    } else {
                      setSelectedDemoProduct('Biosynthesis LMIS');
                    }
                  }}
                  style={{
                    backgroundColor: '#0A1128',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '12px 26px',
                    fontSize: '14px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#0A1128';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0A1128';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  <span>Explore Biosynthesis LMIS</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* CARD 03: Audit Pro (Clean White) */}
            <div
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 28px 60px rgba(15, 23, 42, 0.15)';
                e.currentTarget.style.borderColor = '#CBD5E1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0A1128',
                borderRadius: '24px',
                padding: '44px 40px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                minHeight: '520px',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Outlined Watermark */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '28px',
                fontSize: '110px',
                fontWeight: 900,
                color: 'transparent',
                WebkitTextStroke: '2px rgba(148, 163, 184, 0.25)',
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none'
              }}>
                03
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Category Pill */}
                <div style={{ marginBottom: '20px' }}>
                  <span style={{
                    fontSize: '10.5px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    backgroundColor: '#EFF6FF',
                    color: '#1F5AF4',
                    borderRadius: '20px',
                    padding: '5px 14px',
                    display: 'inline-block',
                    textTransform: 'uppercase'
                  }}>
                    TAX, COMPLIANCE &amp; AUDIT
                  </span>
                </div>

                <h3 style={{ fontSize: '38px', fontWeight: 800, margin: '0 0 16px 0', letterSpacing: '-0.02em', color: '#0A1128' }}>
                  Audit Pro
                </h3>

                <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, marginBottom: '36px', maxWidth: '440px', fontWeight: 400 }}>
                  An AI-powered multi-jurisdictional tax optimization, statutory compliance, audit preparation and financial document processing platform.
                </p>

                {/* Pill Badges Grid */}
                <div style={{ marginBottom: '36px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#1F5AF4', letterSpacing: '0.08em', marginBottom: '14px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1F5AF4', display: 'inline-block' }} />
                    3 REGIONS
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['India · GST, TDS, ITR-6', 'USA · IRS, SALT, Nexus', 'Canada · CRA, T2, GST/HST', '4-tier RBAC', 'AI document OCR', 'Audit readiness'].map((module, idx) => (
                      <span key={idx} style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        backgroundColor: '#F8FAFC',
                        color: '#334155',
                        border: '1px solid #E2E8F0',
                        borderRadius: '20px',
                        padding: '6px 14px'
                      }}>
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <button
                  onClick={() => setSelectedDemoProduct('Audit Pro')}
                  style={{
                    backgroundColor: '#0A1128',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '12px 26px',
                    fontSize: '14px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1F5AF4';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0A1128';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  <span>Explore Audit Pro</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. WHO THEY ARE BUILT FOR */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '96px 24px', borderTop: '1px solid #F1F5F9' }}>
        <div style={{ maxWidth: '1380px', margin: '0 auto' }}>

          <div style={{ marginBottom: '52px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '24px', height: '2px', backgroundColor: '#1F5AF4', borderRadius: '1px' }} />
              <span style={{ color: '#1F5AF4', fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                WHO THEY ARE BUILT FOR
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              color: '#0A1128',
              margin: '0 0 14px 0',
              letterSpacing: '-0.025em',
              lineHeight: 1.18
            }}>
              Different industries. Same problem.
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#64748B',
              margin: 0,
              maxWidth: '640px',
              lineHeight: 1.55
            }}>
              Data trapped across too many systems, too many tabs and too much manual re-entry.
            </p>
          </div>

          {/* 3 Column Audience Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>

            {/* Column 1 - HMIS */}
            <div style={{
              backgroundColor: '#1F5AF4',
              color: '#FFFFFF',
              borderRadius: '20px',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 24px 0', lineHeight: 1.3, color: '#FFFFFF' }}>
                Hospitals, clinicians &amp; patients
              </h3>
              <div>
                <span style={{
                  fontSize: '11.5px',
                  fontWeight: 700,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '4px 14px',
                  display: 'inline-block'
                }}>
                  HMIS
                </span>
              </div>
            </div>

            {/* Column 2 - Biosynthesis LMIS */}
            <div style={{
              backgroundColor: '#46D3B6',
              color: '#0A1128',
              borderRadius: '20px',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 24px 0', lineHeight: 1.3, color: '#0A1128' }}>
                Labs, pathologists &amp; radiologists
              </h3>
              <div>
                <span style={{
                  fontSize: '11.5px',
                  fontWeight: 800,
                  backgroundColor: 'rgba(10, 17, 40, 0.12)',
                  color: '#0A1128',
                  borderRadius: '20px',
                  padding: '4px 14px',
                  display: 'inline-block'
                }}>
                  Biosynthesis LMIS
                </span>
              </div>
            </div>

            {/* Column 3 - Audit Pro */}
            <div style={{
              backgroundColor: '#F0F4FA',
              color: '#0A1128',
              borderRadius: '20px',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
              border: '1px solid #E2E8F0'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 24px 0', lineHeight: 1.3, color: '#0A1128' }}>
                CPAs, auditors &amp; finance teams
              </h3>
              <div>
                <span style={{
                  fontSize: '11.5px',
                  fontWeight: 700,
                  backgroundColor: '#FFFFFF',
                  color: '#1F5AF4',
                  borderRadius: '20px',
                  padding: '4px 14px',
                  display: 'inline-block',
                  border: '1px solid #CBD5E1'
                }}>
                  Audit Pro
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. BOTTOM CTA BANNER: SEE ANY OF THEM RUNNING */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '0 24px 96px' }}>
        <div style={{ maxWidth: '1380px', margin: '0 auto' }}>

          <div style={{
            background: 'linear-gradient(135deg, #071026 0%, #0D2673 40%, #164AC0 75%, #1F5AF4 100%)',
            borderRadius: '24px',
            padding: '64px 64px 72px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(7, 16, 38, 0.3)'
          }}>

            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '24px', height: '2px', backgroundColor: '#52E0CB', borderRadius: '1px' }} />
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#52E0CB', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  AJILEDONE PRODUCTS
                </span>
                <div style={{ width: '24px', height: '2px', backgroundColor: '#52E0CB', borderRadius: '1px' }} />
              </div>

              <h2 style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: '0 0 16px 0',
                letterSpacing: '-0.025em',
                lineHeight: 1.15
              }}>
                See any of them running.
              </h2>

              {/* Mint Green Accent Line under title */}
              <div style={{
                width: '180px',
                height: '4px',
                backgroundColor: '#52E0CB',
                borderRadius: '2px',
                margin: '0 auto 28px'
              }} />

              <p style={{
                fontSize: '15.5px',
                color: 'rgba(255, 255, 255, 0.88)',
                lineHeight: 1.6,
                marginBottom: '36px',
                fontWeight: 400
              }}>
                Every product page carries an intro walkthrough. Book a live session and we'll run it against your workflow.
              </p>

              {/* Product Pills Selector (Excluding BartPay) */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
                {['HMIS', 'Biosynthesis LMIS', 'Audit Pro'].map((prod) => (
                  <span
                    key={prod}
                    onClick={() => setSelectedDemoProduct(prod)}
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      borderRadius: '30px',
                      padding: '8px 20px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#52E0CB';
                      e.currentTarget.style.color = '#0A1128';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#52E0CB', display: 'inline-block' }} />
                    {prod}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
                <button
                  onClick={() => setSelectedDemoProduct('All platforms')}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#1F5AF4',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '14px 34px',
                    fontSize: '14.5px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#52E0CB';
                    e.currentTarget.style.color = '#0A1128';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#1F5AF4';
                  }}
                >
                  Request a demo
                </button>

                <a
                  href="mailto:info@agiledonetech.com"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                    border: '1.5px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '50px',
                    padding: '13px 32px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.borderColor = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  }}
                >
                  info@agiledonetech.com
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE DEMO REQUEST MODAL */}
      {selectedDemoProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(4, 9, 20, 0.82)',
          backdropFilter: 'blur(10px)',
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
            padding: '40px',
            position: 'relative',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.3)',
            animation: 'fadeIn 0.3s ease'
          }}>
            <button
              onClick={() => setSelectedDemoProduct(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748B'
              }}
            >
              <X size={18} />
            </button>

            {demoSubmitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#EFF6FF', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#1F5AF4', marginBottom: '20px' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 10px 0', color: '#0F172A' }}>Demo Request Received</h3>
                <p style={{ fontSize: '14.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                  Our technical team will prepare a live sandbox walk-through for <strong>{selectedDemoProduct}</strong> and email you within 1 business day.
                </p>
              </div>
            ) : (
              <div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#1F5AF4', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                  LIVE DEMO SESSION
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 8px 0', color: '#0A1128' }}>
                  Request Demo: {selectedDemoProduct}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '28px', lineHeight: 1.5 }}>
                  Fill in your details below to schedule a custom engineering walk-through tailored to your workflow.
                </p>

                <form onSubmit={handleDemoSubmit}>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={demoForm.fullName}
                      onChange={(e) => setDemoForm({ ...demoForm, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="s.jenkins@organization.com"
                      value={demoForm.workEmail}
                      onChange={(e) => setDemoForm({ ...demoForm, workEmail: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      ORGANIZATION / COMPANY
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Health Systems"
                      value={demoForm.organization}
                      onChange={(e) => setDemoForm({ ...demoForm, organization: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      backgroundColor: '#1F5AF4',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '50px',
                      padding: '14px',
                      fontSize: '15px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0A1128'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1F5AF4'}
                  >
                    Confirm &amp; Schedule Demo
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
