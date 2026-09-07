import { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface QuestionsShapingBusinessProps {
  onNavigate: (anchor: string) => void;
  onGoHome: () => void;
}

export function QuestionsShapingBusinessPage({ onNavigate, onGoHome }: QuestionsShapingBusinessProps) {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(2); // Default 03 active per image
  const convergenceRef = useRef<HTMLElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (convergenceRef.current) {
      observer.observe(convergenceRef.current);
    }

    return () => {
      if (convergenceRef.current) {
        observer.unobserve(convergenceRef.current);
      }
    };
  }, []);

  const questions = [
    {
      num: '01',
      tag: 'AI',
      question: 'How do we make AI real?',
      description: 'How can AI move beyond experimentation and become part of everyday business operations?',
      bg: '#FFFFFF',
      border: '#E2E8F0',
      numColor: '#94A3B8',
      tagColor: '#265CF4',
      textColor: '#0B1739',
      descColor: '#475569',
    },
    {
      num: '02',
      tag: 'DIGITAL CORE',
      question: 'How do we modernize our digital core?',
      description: 'How can legacy ERP, application and infrastructure cost and risk without disrupting the business?',
      bg: '#FFFFFF',
      border: '#E2E8F0',
      numColor: '#94A3B8',
      tagColor: '#265CF4',
      textColor: '#0B1739',
      descColor: '#475569',
    },
    {
      num: '03',
      tag: 'DATA',
      question: 'How do we unlock the value of our data?',
      description: 'How can fragmented enterprise data become an intelligent asset for decision, application and AI?',
      bg: '#265CF4',
      border: '#265CF4',
      numColor: '#FFFFFF',
      tagColor: '#67DFCB',
      textColor: '#FFFFFF',
      descColor: 'rgba(255, 255, 255, 0.9)',
      isHighlight: true,
    },
    {
      num: '04',
      tag: 'SUPPLY CHAIN',
      question: 'How do we build a more resilient supply chain?',
      description: 'How can planning, procurement, manufacturing, logistics and inventory become more connected and predictive?',
      bg: '#FFFFFF',
      border: '#E2E8F0',
      numColor: '#94A3B8',
      tagColor: '#265CF4',
      textColor: '#0B1739',
      descColor: '#475569',
    },
    {
      num: '05',
      tag: 'ECONOMICS',
      question: 'How do we improve technology economics?',
      description: 'How can organizations simplify technology, reduce technical debt and increase return on technology investment?',
      bg: '#FFFFFF',
      border: '#E2E8F0',
      numColor: '#94A3B8',
      tagColor: '#265CF4',
      textColor: '#0B1739',
      descColor: '#475569',
    },
    {
      num: '06',
      tag: 'WORKFORCE',
      question: 'How do we create an Intelligent workforce?',
      description: 'How can AI, automation and digital platforms augment people rather than simply automate tasks?',
      bg: '#67DFCB',
      border: '#67DFCB',
      numColor: '#0A1230',
      tagColor: '#0A1230',
      textColor: '#0A1230',
      descColor: 'rgba(10, 18, 48, 0.85)',
      isHighlight: true,
    },
    {
      num: '07',
      tag: 'CONTINUOUS CHANGE',
      question: 'How do we continuously transform?',
      description: 'How can organizations build technology environments capable of adapting as quickly as market change?',
      bg: '#0B1739',
      border: '#0B1739',
      numColor: '#FFFFFF',
      tagColor: '#67DFCB',
      textColor: '#FFFFFF',
      descColor: 'rgba(255, 255, 255, 0.85)',
      isHighlight: true,
    },
  ];

  const categories = [
    'AI',
    'DIGITAL CORE',
    'DATA',
    'SUPPLY CHAIN',
    'ECONOMICS',
    'WORKFORCE',
    'CONTINUOUS CHANGE',
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#FFFFFF', color: '#0B1739' }}>
      <style>{`
        .hero-grid-container {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .hero-grid-container {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }

        .hero-artwork-container {
          position: relative;
          min-height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          overflow: visible;
        }

        .hero-cards-scaler {
          position: relative;
          width: 500px;
          height: 420px;
          margin: 0 auto;
          transition: transform 0.3s ease;
        }

        @media (max-width: 600px) {
          .hero-cards-scaler {
            transform: scale(0.78) !important;
            transform-origin: top center !important;
            margin-bottom: -90px !important;
          }
        }
        @media (max-width: 440px) {
          .hero-cards-scaler {
            transform: scale(0.65) !important;
            transform-origin: top center !important;
            margin-bottom: -145px !important;
          }
        }
        @media (max-width: 360px) {
          .hero-cards-scaler {
            transform: scale(0.55) !important;
            transform-origin: top center !important;
            margin-bottom: -190px !important;
          }
        }

        .question-agenda-card {
          display: grid;
          grid-template-columns: 80px 1.4fr 1.6fr;
          gap: 32px;
          align-items: center;
        }
        @media (max-width: 868px) {
          .question-agenda-card {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            padding: 26px 24px !important;
          }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #08194A 0%, #0D2A75 50%, #1B4AC7 100%)',
          color: '#FFFFFF',
          padding: '110px 0 100px',
          overflow: 'hidden',
        }}
      >
        {/* Ambient Top Light Spotlights */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            left: '10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(103, 223, 203, 0.18) 0%, transparent 70%)',
            filter: 'blur(210px)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '5%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(38, 92, 244, 0.35) 0%, transparent 70%)',
            filter: 'blur(230px)',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', marginBottom: '32px' }}>
            <span
              onClick={onGoHome}
              style={{ cursor: 'pointer', color: 'rgba(255, 255, 255, 0.8)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#67DFCB')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
            >
              Home
            </span>
            <ChevronRight size={13} style={{ opacity: 0.5 }} />
            <span style={{ color: '#67DFCB', fontWeight: 600 }}>The questions shaping business</span>
          </div>

          <div className="hero-grid-container">
            {/* Left Hero Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '24px', height: '2.5px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 800,
                    color: '#67DFCB',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  THE QUESTIONS SHAPING BUSINESS
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(36px, 4.4vw, 54px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.12,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                }}
              >
                The technology conversation has become a business conversation.
              </h1>

              <p
                style={{
                  fontSize: '16.5px',
                  color: 'rgba(255, 255, 255, 0.78)',
                  lineHeight: 1.65,
                  maxWidth: '540px',
                  marginBottom: '36px',
                }}
              >
                Today's leadership teams are confronting questions that cut across traditional organizational boundaries.
              </p>

              {/* Stat Highlight 07 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                <span style={{ fontSize: '54px', fontWeight: 800, color: '#67DFCB', lineHeight: 1, letterSpacing: '-0.03em' }}>
                  07
                </span>
                <span style={{ fontSize: '13.5px', fontWeight: 500, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.35, maxWidth: '170px' }}>
                  questions that no single function can answer alone
                </span>
              </div>

              {/* CTA Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    const el = document.getElementById('seven-questions');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '14px 28px',
                    borderRadius: '28px',
                    border: '1.5px solid rgba(255, 255, 255, 0.4)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#265CF4';
                    e.currentTarget.style.borderColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Read the seven
                </button>

                <button
                  onClick={() => onNavigate('#contact')}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '14px 28px',
                    borderRadius: '28px',
                    border: '1.5px solid rgba(255, 255, 255, 0.4)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#67DFCB';
                    e.currentTarget.style.color = '#0A1230';
                    e.currentTarget.style.borderColor = '#67DFCB';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(103, 223, 203, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Talk to Ajiledone
                </button>
              </div>
            </div>

            {/* Right Hero Artwork: Exact Figma Inspect Specs for Card Stack */}
            <div className="hero-artwork-container">
              <div className="hero-cards-scaler">
                {/* Card 1: AI (Figma Inspect: 400x150, Rotation -7°, Background #FFFFFF @ 13%, Border 1.2px #FFFFFF @ 30%, Blur 20, Drop Shadow 0px 14px 36px rgba(3, 10, 41, 0.40)) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: '400px',
                    height: '150px',
                    background: 'rgba(255, 255, 255, 0.13)',
                    border: '1.2px solid rgba(255, 255, 255, 0.30)',
                    borderRadius: '18px',
                    padding: '18px 26px',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0px 14px 36px rgba(3, 10, 41, 0.40)',
                    transform: 'rotate(7deg)',
                    zIndex: 1,
                    isolation: 'isolate',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#67DFCB' }}>?</span>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.85)', letterSpacing: '0.12em' }}>AI</span>
                  </div>
                  <div style={{ fontSize: '17.5px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25 }}>
                    How do we make AI real?
                  </div>
                </div>

                {/* Card 2: DIGITAL CORE (Figma Inspect: 400x150, Rotation -2°, Background #FFFFFF @ 13%, Border 1.2px #FFFFFF @ 30%, Blur 20, Drop Shadow 0px 14px 36px rgba(3, 10, 41, 0.40)) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '75px',
                    left: '30px',
                    width: '400px',
                    height: '150px',
                    background: 'rgba(255, 255, 255, 0.13)',
                    border: '1.2px solid rgba(255, 255, 255, 0.30)',
                    borderRadius: '18px',
                    padding: '24px 26px',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0px 14px 36px rgba(3, 10, 41, 0.40)',
                    transform: 'rotate(-2deg)',
                    zIndex: 2,
                    isolation: 'isolate',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#67DFCB' }}>?</span>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.75)', letterSpacing: '0.12em' }}>DIGITAL CORE</span>
                  </div>
                  <div style={{ fontSize: '17.5px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25 }}>
                    How do we modernize our digital core?
                  </div>
                </div>

                {/* Card 3: DATA (Figma Inspect: 400x150, Rotation 3°, Solid Mint #67DFCB, Blur 20, Drop Shadow 0px 14px 36px rgba(3, 10, 41, 0.40)) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '170px',
                    left: '60px',
                    width: '400px',
                    height: '150px',
                    backgroundColor: '#67DFCB',
                    border: '1.2px solid #67DFCB',
                    borderRadius: '18px',
                    padding: '24px 26px',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0px 14px 36px rgba(3, 10, 41, 0.40)',
                    transform: 'rotate(-3deg)',
                    zIndex: 3,
                    isolation: 'isolate',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#265CF4' }}>?</span>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#0A1230', letterSpacing: '0.12em' }}>DATA</span>
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#0A1230', lineHeight: 1.25 }}>
                    How do we unlock the value of our data?
                  </div>
                </div>

                {/* Card 4: CHANGE (Figma Inspect: 400x150, Rotation 8°, Background #FFFFFF @ 13%, Border 1.2px #FFFFFF @ 30%, Blur 20, Drop Shadow 0px 14px 36px rgba(3, 10, 41, 0.40)) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '290px',
                    left: '85px',
                    width: '400px',
                    height: '150px',
                    background: 'rgba(255, 255, 255, 0.13)',
                    border: '1.2px solid rgba(255, 255, 255, 0.30)',
                    borderRadius: '18px',
                    padding: '24px 26px',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0px 14px 36px rgba(3, 10, 41, 0.40)',
                    transform: 'rotate(-8deg)',
                    zIndex: 4,
                    isolation: 'isolate',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#67DFCB' }}>?</span>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.75)', letterSpacing: '0.12em' }}>CHANGE</span>
                  </div>
                  <div style={{ fontSize: '17.5px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25 }}>
                    How do we continuously transform?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEVEN QUESTIONS AGENDA SECTION per uploaded Image 1 */}
      <section id="seven-questions" style={{ padding: '100px 0 110px', backgroundColor: '#FFFFFF' }}>
        <div className="section-container">
          {/* Section Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '64px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <div style={{ width: '24px', height: '2.5px', backgroundColor: '#265CF4', borderRadius: '1px' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#265CF4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  AN EXECUTIVE STRATEGY AGENDA
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(34px, 4vw, 46px)', fontWeight: 800, color: '#0B1739', margin: 0, letterSpacing: '-0.02em' }}>
                Seven questions.
              </h2>
            </div>
            <div style={{ fontSize: '14.5px', color: '#64748B', maxWidth: '300px', lineHeight: 1.5, textAlign: 'right', fontWeight: 500 }}>
              From strategy to execution across business and enterprise architecture.
            </div>
          </div>

          {/* 7 Question Row Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {questions.map((item, idx) => {
              const isSelected = activeQuestion === idx;

              return (
                <div
                  key={item.num}
                  id={`q-${item.num}`}
                  className="question-agenda-card"
                  onClick={() => setActiveQuestion(idx)}
                  style={{
                    backgroundColor: isSelected && !item.isHighlight ? '#F0F5FE' : item.bg,
                    border: `1.5px solid ${isSelected && !item.isHighlight ? '#265CF4' : item.border}`,
                    borderRadius: '20px',
                    padding: '36px 40px',
                    cursor: 'pointer',
                    boxShadow: item.isHighlight ? '0 12px 30px rgba(0,0,0,0.08)' : '0 2px 10px rgba(0,0,0,0.02)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    if (!item.isHighlight) {
                      e.currentTarget.style.borderColor = '#265CF4';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(38, 92, 244, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    if (!item.isHighlight) {
                      e.currentTarget.style.borderColor = item.border;
                      e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.02)';
                    }
                  }}
                >
                  {/* Col 1: Number + Question Mark */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: item.numColor, opacity: 0.85 }}>{item.num}</span>
                    <span style={{ fontSize: '42px', fontWeight: 300, color: item.numColor, lineHeight: 1, opacity: 0.35 }}>?</span>
                  </div>

                  {/* Col 2: Category Tag + Question Title */}
                  <div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        color: item.tagColor,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                      }}
                    >
                      {item.tag}
                    </div>
                    <h3
                      style={{
                        fontSize: 'clamp(20px, 2.2vw, 25px)',
                        fontWeight: 800,
                        color: item.textColor,
                        lineHeight: 1.25,
                        margin: 0,
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {item.question}
                    </h3>
                  </div>

                  {/* Col 3: Description Text */}
                  <div
                    style={{
                      fontSize: '15.5px',
                      color: item.descColor,
                      lineHeight: 1.6,
                      fontWeight: 400,
                    }}
                  >
                    {item.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CONVERGENCE / CHALLENGES TREE SECTION per uploaded Image */}
      <section
        ref={convergenceRef}
        style={{
          position: 'relative',
          backgroundColor: 'rgba(13, 42, 117, 1)',
          color: '#FFFFFF',
          padding: '100px 0 110px',
          overflow: 'hidden',
        }}
      >
        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Eyebrow Header Tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '40px',
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'translateY(0)' : 'translateY(-15px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            <div style={{ width: '24px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                color: '#67DFCB',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              WHERE THEY ALL LEAD
            </span>
            <div style={{ width: '24px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
          </div>

          {/* 7 Category Pills Row - Step 1: Cards Appear First */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              maxWidth: '1200px',
              margin: '0 auto 10px',
            }}
          >
            {categories.map((cat, i) => (
              <div
                key={cat}
                onClick={() => {
                  const el = document.getElementById(`q-0${i + 1}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1.2px solid rgba(255, 255, 255, 0.22)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  padding: '8px 18px',
                  borderRadius: '24px',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
                  opacity: isSectionVisible ? 1 : 0,
                  transform: isSectionVisible ? 'translateY(0)' : 'translateY(-20px)',
                  transition: `opacity 0.5s ease ${i * 65}ms, transform 0.5s ease ${i * 65}ms, border-color 0.25s ease, background-color 0.25s ease`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#67DFCB';
                  e.currentTarget.style.backgroundColor = 'rgba(103, 223, 203, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = isSectionVisible ? 'translateY(0)' : 'translateY(-20px)';
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#67DFCB' }}>?</span>
                <span>{cat}</span>
              </div>
            ))}
          </div>

          {/* Converging Curved Lines Tree Graphics with Exact Figma Blur Ellipses */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', position: 'relative' }}>
            {/* Step 3: Ellipse Glow Light Appears After Lines Converge */}
            {/* 1. Large Outer Background Glow Ellipse (Figma Inspect: 720px x 720px, Color rgba(103, 223, 203, 0.2), Blur 240px) */}
            <div
              style={{
                position: 'absolute',
                width: '720px',
                height: '720px',
                borderRadius: '50%',
                backgroundColor: 'rgba(103, 223, 203, 0.2)',
                filter: 'blur(240px)',
                WebkitFilter: 'blur(240px)',
                top: '135px',
                left: '50%',
                transform: isSectionVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.2)',
                opacity: isSectionVisible ? 1 : 0,
                pointerEvents: 'none',
                zIndex: 0,
                transition: 'opacity 0.8s ease 1.35s, transform 0.8s ease 1.35s',
              }}
            />

            {/* 2. Inner Core Glow Ellipse (Figma Inspect: 180px x 180px, Color rgba(103, 223, 203, 0.5), Blur 60px) */}
            <div
              style={{
                position: 'absolute',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                backgroundColor: 'rgba(103, 223, 203, 0.5)',
                filter: 'blur(60px)',
                WebkitFilter: 'blur(60px)',
                top: '135px',
                left: '50%',
                transform: isSectionVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.2)',
                opacity: isSectionVisible ? 1 : 0,
                pointerEvents: 'none',
                zIndex: 1,
                transition: 'opacity 0.6s ease 1.25s, transform 0.6s ease 1.25s',
              }}
            />

            {/* Step 2: SVG Lines Draw Downwards to Node */}
            <svg width="1100" height="150" viewBox="0 0 1100 150" fill="none" style={{ maxWidth: '100%', position: 'relative', zIndex: 2 }}>
              <path
                d="M 65 0 C 65 95, 550 55, 550 135"
                stroke="rgba(103, 223, 203, 0.50)"
                strokeWidth="1.8"
                style={{
                  strokeDasharray: 800,
                  strokeDashoffset: isSectionVisible ? 0 : 800,
                  transition: 'stroke-dashoffset 0.85s cubic-bezier(0.4, 0, 0.2, 1) 0.45s',
                }}
              />
              <path
                d="M 220 0 C 220 85, 550 50, 550 135"
                stroke="rgba(103, 223, 203, 0.65)"
                strokeWidth="1.8"
                style={{
                  strokeDasharray: 800,
                  strokeDashoffset: isSectionVisible ? 0 : 800,
                  transition: 'stroke-dashoffset 0.85s cubic-bezier(0.4, 0, 0.2, 1) 0.45s',
                }}
              />
              <path
                d="M 370 0 C 370 70, 550 45, 550 135"
                stroke="rgba(103, 223, 203, 0.80)"
                strokeWidth="1.8"
                style={{
                  strokeDasharray: 800,
                  strokeDashoffset: isSectionVisible ? 0 : 800,
                  transition: 'stroke-dashoffset 0.85s cubic-bezier(0.4, 0, 0.2, 1) 0.45s',
                }}
              />
              <path
                d="M 550 0 L 550 135"
                stroke="#67DFCB"
                strokeWidth="2.2"
                style={{
                  strokeDasharray: 800,
                  strokeDashoffset: isSectionVisible ? 0 : 800,
                  transition: 'stroke-dashoffset 0.85s cubic-bezier(0.4, 0, 0.2, 1) 0.45s',
                }}
              />
              <path
                d="M 730 0 C 730 70, 550 45, 550 135"
                stroke="rgba(103, 223, 203, 0.80)"
                strokeWidth="1.8"
                style={{
                  strokeDasharray: 800,
                  strokeDashoffset: isSectionVisible ? 0 : 800,
                  transition: 'stroke-dashoffset 0.85s cubic-bezier(0.4, 0, 0.2, 1) 0.45s',
                }}
              />
              <path
                d="M 880 0 C 880 85, 550 50, 550 135"
                stroke="rgba(103, 223, 203, 0.65)"
                strokeWidth="1.8"
                style={{
                  strokeDasharray: 800,
                  strokeDashoffset: isSectionVisible ? 0 : 800,
                  transition: 'stroke-dashoffset 0.85s cubic-bezier(0.4, 0, 0.2, 1) 0.45s',
                }}
              />
              <path
                d="M 1035 0 C 1035 95, 550 55, 550 135"
                stroke="rgba(103, 223, 203, 0.50)"
                strokeWidth="1.8"
                style={{
                  strokeDasharray: 800,
                  strokeDashoffset: isSectionVisible ? 0 : 800,
                  transition: 'stroke-dashoffset 0.85s cubic-bezier(0.4, 0, 0.2, 1) 0.45s',
                }}
              />
              {/* Central Target Solid Dot - Step 3 Accent */}
              <circle
                cx="550"
                cy="135"
                r="7"
                fill="#67DFCB"
                style={{
                  opacity: isSectionVisible ? 1 : 0,
                  transform: isSectionVisible ? 'scale(1)' : 'scale(0)',
                  transformOrigin: '550px 135px',
                  transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1.25s, opacity 0.4s ease 1.25s',
                }}
              />
            </svg>
          </div>

          {/* Central Headline & CTA */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '840px',
              margin: '0 auto',
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s ease 1.35s, transform 0.7s ease 1.35s',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(32px, 4.2vw, 50px)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.18,
                marginTop: '16px',
                marginBottom: '20px',
                letterSpacing: '-0.025em',
              }}
            >
              These are the challenges<br />Ajiledone is built to address.
            </h2>

            <p
              style={{
                fontSize: '14.5px',
                color: 'rgba(255, 255, 255, 0.72)',
                lineHeight: 1.6,
                marginBottom: '36px',
                fontWeight: 400,
                letterSpacing: '0.01em',
              }}
            >
              Business &amp; Technology Transformation &nbsp;·&nbsp; AI &nbsp;·&nbsp; Data &nbsp;·&nbsp; Enterprise Platforms &nbsp;·&nbsp; Cloud &nbsp;·&nbsp; Digital Engineering
            </p>

            <button
              onClick={() => onNavigate('#contact')}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#265CF4',
                fontWeight: 700,
                fontSize: '14.5px',
                padding: '14px 34px',
                borderRadius: '30px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(103, 223, 203, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
              }}
            >
              Start with your question
            </button>
          </div>
        </div>
      </section>

      {/* 4. CONTACT CALLOUT BANNER */}
      <section
        style={{
          background: 'linear-gradient(135deg, #00A3FF 0%, #0066FF 100%)',
          color: '#FFFFFF',
          padding: '80px 0',
        }}
      >
        <div
          className="section-container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '32px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.16em',
                color: 'rgba(255, 255, 255, 0.85)',
                marginBottom: '12px',
                textTransform: 'uppercase',
              }}
            >
              GET IN TOUCH
            </div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 40px)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.2,
                margin: 0,
                maxWidth: '680px',
              }}
            >
              Would you like more information, or do you have a question?
            </h2>
          </div>

          <button
            onClick={() => onNavigate('#contact')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0066FF',
              fontWeight: 800,
              fontSize: '14px',
              padding: '14px 32px',
              borderRadius: '28px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            }}
          >
            Contact us
          </button>
        </div>
      </section>
    </div>
  );
}
