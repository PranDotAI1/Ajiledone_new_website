import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Shield, Globe, Cpu, Layers, HardHat, Building2, Truck, Activity, Leaf, Sun, RefreshCw, ShoppingBag, DollarSign } from 'lucide-react';

// Custom SVG Vector Components for Mining, Utilities, Chemicals & E&C
const PickaxeVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4.5L19.5 9.5" />
    <path d="M12 7L4.5 14.5C3.5 15.5 3.5 17 4.5 18C5.5 19 7 19 8 18L15.5 10.5" />
    <path d="M21 3L18.5 5.5L18.5 2.5L21 3Z" />
    <path d="M3 21L8.5 15.5" />
  </svg>
);

const TransmissionTowerVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L4 22h16L12 2z" />
    <path d="M7 15h10" />
    <path d="M9 10h6" />
    <path d="M12 2v20" />
  </svg>
);

const FlaskLabVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2v7.5L4.5 19.5A2 2 0 0 0 6.2 22h11.6a2 2 0 0 0 1.7-2.5L14 9.5V2" />
    <path d="M8.5 2h7" />
    <path d="M7 16h10" />
  </svg>
);

const HardHatCraneVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18a10 10 0 0 1 20 0H2z" />
    <path d="M10 10V4a2 2 0 0 1 4 0v6" />
    <path d="M4 18v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" />
  </svg>
);

const GaugeVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 15l3.5-3.5" />
    <path d="M20.3 18a10 10 0 1 0-16.6 0" />
  </svg>
);

const WrenchVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const LogisticsTruckVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const UserProfileVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CpuVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

const ShieldVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const GlobeVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const LeafVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A9 9 0 0 1 2 11 9 9 0 0 1 11 2c5.5 0 10 4.5 10 10a9 9 0 0 1-10 8z" />
    <path d="M2 11h18" />
  </svg>
);

const SunVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const LayersVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
);

const SparkleVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
);

const CarVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.3.9L2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const BuildingVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="6" x2="9" y2="6.01" />
    <line x1="15" y1="6" x2="15" y2="6.01" />
    <line x1="9" y1="10" x2="9" y2="10.01" />
    <line x1="15" y1="10" x2="15" y2="10.01" />
    <line x1="9" y1="14" x2="9" y2="14.01" />
    <line x1="15" y1="14" x2="15" y2="14.01" />
    <path d="M10 22v-4h4v4" />
  </svg>
);

const ShoppingCartVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const FinancialDollarVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12M15 9.5c0-1.38-1.34-2.5-3-2.5s-3 1.12-3 2.5 1.34 2.5 3 2.5 3 1.12 3 2.5-1.34 2.5-3 2.5-3-1.12-3-2.5" />
  </svg>
);

const CloudVector = ({ color = '#52E0CB', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const EyeVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const BarChartVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const TargetOperationsVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const DatabaseVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const FactoryPlantVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20" />
    <path d="M6 20V10l4-2v12" />
    <path d="M14 20V6l4 2v12" />
    <path d="M18 10h3v10" />
  </svg>
);

const RefreshCwVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
  </svg>
);

const DocumentCheckVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

const ProjectDocVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 7h8" />
    <path d="M8 11h8" />
    <path d="M8 15h5" />
  </svg>
);

const UsersGroupVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Box3dVector = ({ color = '#265CF4', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

interface MiningUtilitiesChemicalsECPageProps {
  onNavigate?: (anchor: string) => void;
}

export const MiningUtilitiesChemicalsECPage: React.FC<MiningUtilitiesChemicalsECPageProps> = ({ onNavigate }) => {
  const [activeCard, setActiveCard] = useState<'mining-metals' | 'utilities' | 'chemicals' | 'engineering-construction'>('mining-metals');
  const [hoveredMaturityBlock, setHoveredMaturityBlock] = useState<number | null>(null);
  
  // Hover states for sub-sector cards & tags
  const [hoveredMiningCap, setHoveredMiningCap] = useState<number | null>(null);
  const [hoveredMiningPriority, setHoveredMiningPriority] = useState<number | null>(null);
  const [hoveredUtilCap, setHoveredUtilCap] = useState<number | null>(null);
  const [hoveredUtilPriority, setHoveredUtilPriority] = useState<number | null>(null);
  const [hoveredChemCap, setHoveredChemCap] = useState<number | null>(null);
  const [hoveredChemPriority, setHoveredChemPriority] = useState<number | null>(null);
  const [hoveredEcCap, setHoveredEcCap] = useState<number | null>(null);
  const [hoveredEcPriority, setHoveredEcPriority] = useState<number | null>(null);
  const [hoveredEcTech, setHoveredEcTech] = useState<number | null>(null);

  // Button & Pill hover states
  const [hoveredTalkBtn, setHoveredTalkBtn] = useState(false);
  const [hoveredViewBtn, setHoveredViewBtn] = useState(false);
  const [hoveredCtaBtn, setHoveredCtaBtn] = useState(false);
  const [hoveredCtaPill, setHoveredCtaPill] = useState<number | null>(null);
  const [hoveredBadgePill, setHoveredBadgePill] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('utilit') || hash.includes('grid') || hash.includes('power')) {
        setActiveCard('utilities');
        setTimeout(() => {
          const el = document.getElementById('utilities-capabilities');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (hash.includes('chem') || hash.includes('batch') || hash.includes('process')) {
        setActiveCard('chemicals');
        setTimeout(() => {
          const el = document.getElementById('chemicals-capabilities');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (hash.includes('engineering') || hash.includes('construct') || hash.includes('project') || hash.includes('ec')) {
        setActiveCard('engineering-construction');
        setTimeout(() => {
          const el = document.getElementById('ec-capabilities');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (hash.includes('mining') || hash.includes('metal') || hash.includes('asset')) {
        setActiveCard('mining-metals');
        setTimeout(() => {
          const el = document.getElementById('mining-capabilities');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        setActiveCard('mining-metals');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sub-Sector 01: Mining & Metals Capabilities Grid (5 Cards)
  const miningCapabilities = [
    { title: 'Asset performance', icon: GaugeVector, isMint: true },
    { title: 'Maintenance', icon: WrenchVector, isMint: false },
    { title: 'Supply chain visibility', icon: EyeVector, isMint: false },
    { title: 'Enterprise operations', icon: LayersVector, isMint: false },
    { title: 'Data-driven decisions', icon: BarChartVector, isMint: false },
  ];

  // Sub-Sector 01: Mining & Metals Priorities Grid (6 Cards)
  const miningPriorities = [
    { num: '01', title: 'Asset Intelligence', icon: GaugeVector, bg: '#0B1226', textColor: '#FFFFFF', numColor: '#52E0CB', isDark: true, isBlue: false },
    { num: '02', title: 'Autonomous Operations', icon: CpuVector, bg: '#F4F7FC', textColor: '#0A1128', numColor: '#265CF4', isDark: false, isBlue: false },
    { num: '03', title: 'Predictive Maintenance', icon: WrenchVector, bg: '#F4F7FC', textColor: '#0A1128', numColor: '#265CF4', isDark: false, isBlue: false },
    { num: '04', title: 'Energy & ESG', icon: LeafVector, bg: '#F4F7FC', textColor: '#0A1128', numColor: '#265CF4', isDark: false, isBlue: false },
    { num: '05', title: 'Supply Chain', icon: LogisticsTruckVector, bg: '#F4F7FC', textColor: '#0A1128', numColor: '#265CF4', isDark: false, isBlue: false },
    { num: '06', title: 'Mine-to-Market', icon: GlobeVector, bg: '#265CF4', textColor: '#FFFFFF', numColor: '#52E0CB', isDark: false, isBlue: true },
  ];

  // Sub-Sector 02: Utilities Capabilities Grid (6 Cards)
  const utilCapabilities = [
    { title: 'Assets', icon: TransmissionTowerVector, isMint: false },
    { title: 'Customers', icon: UserProfileVector, isMint: false },
    { title: 'Enterprise platforms', icon: LayersVector, isMint: false },
    { title: 'Operations', icon: TargetOperationsVector, isMint: false },
    { title: 'Data', icon: DatabaseVector, isMint: false },
    { title: 'Intelligence', icon: SparkleVector, isMint: true },
  ];

  // Sub-Sector 02: Utilities Priorities Grid (6 Cards)
  const utilPriorities = [
    { num: '01', title: 'Grid Modernization', icon: TransmissionTowerVector, bg: '#265CF4', textColor: '#FFFFFF', numColor: '#52E0CB', iconBg: 'rgba(255, 255, 255, 0.16)', iconColor: '#52E0CB' },
    { num: '02', title: 'Asset Resilience', icon: GaugeVector, bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4', iconBg: '#F4F7FC', iconColor: '#265CF4' },
    { num: '03', title: 'Customer Platforms', icon: UserProfileVector, bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4', iconBg: '#F4F7FC', iconColor: '#265CF4' },
    { num: '04', title: 'Field Workforce', icon: HardHatCraneVector, bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4', iconBg: '#F4F7FC', iconColor: '#265CF4' },
    { num: '05', title: 'Renewable Integration', icon: SunVector, bg: '#52E0CB', textColor: '#0A1128', numColor: '#265CF4', iconBg: 'rgba(255, 255, 255, 0.60)', iconColor: '#265CF4' },
    { num: '06', title: 'Regulatory & EHS', icon: ShieldVector, bg: '#0B1226', textColor: '#FFFFFF', numColor: '#52E0CB', iconBg: 'rgba(255, 255, 255, 0.16)', iconColor: '#52E0CB' },
  ];

  // Sub-Sector 03: Chemicals Capabilities Grid (8 Cards)
  const chemCapabilities = [
    { title: 'Manufacturing', icon: FactoryPlantVector, isMint: false },
    { title: 'EHS', icon: ShieldVector, isMint: true },
    { title: 'Supply chain', icon: LogisticsTruckVector, isMint: false },
    { title: 'Product lifecycle', icon: RefreshCwVector, isMint: false },
    { title: 'Compliance', icon: DocumentCheckVector, isMint: false },
    { title: 'Enterprise platforms', icon: LayersVector, isMint: false },
    { title: 'Analytics', icon: BarChartVector, isMint: false },
    { title: 'AI', icon: SparkleVector, isMint: false },
  ];

  // Sub-Sector 03: Chemicals Priorities Grid (6 Cards)
  const chemPriorities = [
    { num: '01', title: 'Batch & Process Safety', icon: FlaskLabVector, bg: '#0B1226', textColor: '#FFFFFF', numColor: '#52E0CB', isDark: true, isBlue: false },
    { num: '02', title: 'EHS & Sustainability', icon: ShieldVector, bg: '#F4F7FC', textColor: '#0A1128', numColor: '#265CF4', isDark: false, isBlue: false },
    { num: '03', title: 'Supply Chain Volatility', icon: LogisticsTruckVector, bg: '#F4F7FC', textColor: '#0A1128', numColor: '#265CF4', isDark: false, isBlue: false },
    { num: '04', title: 'Asset Integrity', icon: GaugeVector, bg: '#F4F7FC', textColor: '#0A1128', numColor: '#265CF4', isDark: false, isBlue: false },
    { num: '05', title: 'Quality & Yield', icon: SparkleVector, bg: '#F4F7FC', textColor: '#0A1128', numColor: '#265CF4', isDark: false, isBlue: false },
    { num: '06', title: 'Chemical AI', icon: CpuVector, bg: '#265CF4', textColor: '#FFFFFF', numColor: '#52E0CB', isDark: false, isBlue: true },
  ];

  // Sub-Sector 04: Engineering & Construction Capabilities Grid (5 Cards matching uploaded image)
  const ecCapabilities = [
    { title: 'Projects', icon: ProjectDocVector, isMint: true },
    { title: 'Procurement', icon: ShoppingCartVector, isMint: false },
    { title: 'Resources', icon: UsersGroupVector, isMint: false },
    { title: 'Finance', icon: FinancialDollarVector, isMint: false },
    { title: 'Assets', icon: Box3dVector, isMint: false },
  ];

  // Sub-Sector 04: Technology Stack Pills
  const ecTechStack = [
    'SAP PS/PPM',
    'Primavera',
    'Unifier',
    'Finance',
    'Procurement',
    'Data',
    'Analytics',
  ];

  // Sub-Sector 04: Engineering & Construction Priorities Grid (6 Cards)
  const ecPriorities = [
    { num: '01', title: 'Project Control & Cost', icon: BuildingVector, bg: '#265CF4', textColor: '#FFFFFF', numColor: '#52E0CB', iconBg: 'rgba(255, 255, 255, 0.16)', iconColor: '#52E0CB' },
    { num: '02', title: 'Subcontractor Network', icon: UserProfileVector, bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4', iconBg: '#F4F7FC', iconColor: '#265CF4' },
    { num: '03', title: 'Equipment & Assets', icon: HardHatCraneVector, bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4', iconBg: '#F4F7FC', iconColor: '#265CF4' },
    { num: '04', title: 'Capital Procurement', icon: ShoppingCartVector, bg: '#FFFFFF', textColor: '#0A1128', numColor: '#265CF4', iconBg: '#F4F7FC', iconColor: '#265CF4' },
    { num: '05', title: 'Safety & BIM', icon: ShieldVector, bg: '#52E0CB', textColor: '#0A1128', numColor: '#265CF4', iconBg: 'rgba(255, 255, 255, 0.60)', iconColor: '#265CF4' },
    { num: '06', title: 'Enterprise Finance', icon: FinancialDollarVector, bg: '#0B1226', textColor: '#FFFFFF', numColor: '#52E0CB', iconBg: 'rgba(255, 255, 255, 0.16)', iconColor: '#52E0CB' },
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#0A1128', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* 1. HERO SECTION (DARK BLUE GRAPHIC BANNER with Figma Specs) */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #08194A 0%, #0D2A75 45%, #1B4AC7 100%)',
          color: '#FFFFFF',
          padding: '120px 0 110px',
          overflow: 'hidden',
        }}
      >
        {/* Vertical Grid Lines Background Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '160px 100%',
            pointerEvents: 'none',
          }}
        />

        {/* Ambient Blur Layer 1 Ellipse */}
        <div
          style={{
            position: 'absolute',
            width: '540px',
            height: '540px',
            top: '-120px',
            left: '-80px',
            background: 'rgba(103, 223, 203, 0.25)',
            filter: 'blur(180px)',
            WebkitFilter: 'blur(180px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Ambient Blur Layer 2 Ellipse */}
        <div
          style={{
            position: 'absolute',
            width: '460px',
            height: '460px',
            top: '20px',
            right: '-40px',
            background: 'rgba(31, 165, 255, 0.40)',
            filter: 'blur(200px)',
            WebkitFilter: 'blur(200px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Ambient Blur Layer 3 Ellipse */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            top: '170px',
            right: '-60px',
            background: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            WebkitFilter: 'blur(230px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="lsfs-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', alignItems: 'center' }}>

            {/* Left Content Column */}
            <div>
              {/* Breadcrumb Navigation */}
              <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '32px' }}>
                <span
                  onClick={() => onNavigate && onNavigate('#top')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
                >
                  Home
                </span>
                {' / '}
                <span
                  onClick={() => onNavigate && onNavigate('#industries')}
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
                >
                  Industries
                </span>
                {' / '}
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Asset-intensive &amp; project-driven</span>
              </div>

              {/* Tag / Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  ASSET-INTENSIVE &amp; PROJECT-DRIVEN INDUSTRIES
                </span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontSize: 'clamp(40px, 4.6vw, 58px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  margin: '0 0 28px 0',
                }}
              >
                Where the asset,<br />the project and the<br />plant set the pace.
              </h1>

              {/* Description Paragraph */}
              <p
                style={{
                  fontSize: '16.5px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.82)',
                  lineHeight: 1.6,
                  margin: '0 0 40px 0',
                  maxWidth: '520px',
                }}
              >
                Mining, utilities, chemicals and construction all run on physical things — assets, plants, networks and projects. Technology earns its place when it improves how those perform.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <button
                  onMouseEnter={() => setHoveredTalkBtn(true)}
                  onMouseLeave={() => setHoveredTalkBtn(false)}
                  onClick={() => scrollToSection('mining-capabilities')}
                  style={{
                    backgroundColor: hoveredTalkBtn ? '#FFFFFF' : 'transparent',
                    color: hoveredTalkBtn ? '#1B4AC7' : '#FFFFFF',
                    border: hoveredTalkBtn ? '1.5px solid #FFFFFF' : '1.5px solid rgba(255, 255, 255, 0.45)',
                    padding: '14px 30px',
                    borderRadius: '50px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: hoveredTalkBtn ? '0 12px 28px rgba(255, 255, 255, 0.35)' : 'none',
                    transform: hoveredTalkBtn ? 'translateY(-2px)' : 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  See the four industries
                </button>

                <button
                  onMouseEnter={() => setHoveredViewBtn(true)}
                  onMouseLeave={() => setHoveredViewBtn(false)}
                  onClick={() => onNavigate && onNavigate('#contact')}
                  style={{
                    backgroundColor: hoveredViewBtn ? '#52E0CB' : 'transparent',
                    color: hoveredViewBtn ? '#08194A' : '#FFFFFF',
                    border: hoveredViewBtn ? '1.5px solid #52E0CB' : '1.5px solid rgba(255, 255, 255, 0.45)',
                    padding: '14px 30px',
                    borderRadius: '50px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: hoveredViewBtn ? '0 12px 28px rgba(82, 224, 203, 0.35)' : 'none',
                    transform: hoveredViewBtn ? 'translateY(-2px)' : 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  Talk to Ajiledone
                </button>
              </div>

              {/* Bottom Tag Line */}
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#67DFCB',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  opacity: 0.9,
                }}
              >
                FOUR INDUSTRIES &nbsp;·&nbsp; ONE OPERATING DISCIPLINE
              </div>
            </div>

            {/* Right Column: 4 Sub-Sector Cards in 2x2 Grid with Enlarged Hover Animation */}
            <div className="lsfs-hero-cards-container" style={{ position: 'relative', width: '100%', maxWidth: '540px', justifySelf: 'end' }}>
              <div className="lsfs-hero-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', position: 'relative', zIndex: 1, width: '100%' }}>

                {/* Sub-Sector Card 01: Mining & Metals */}
                {(() => {
                  const isHovered = hoveredMaturityBlock === 0;
                  const isActive = activeCard === 'mining-metals';

                  return (
                    <div
                      onMouseEnter={() => setHoveredMaturityBlock(0)}
                      onMouseLeave={() => setHoveredMaturityBlock(null)}
                      onClick={() => {
                        setActiveCard('mining-metals');
                        if (window.location.hash !== '#mining-metals') {
                          window.history.pushState(null, '', '#mining-metals');
                        }
                        scrollToSection('mining-capabilities');
                      }}
                      style={{
                        position: 'relative',
                        minHeight: '210px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundColor: isActive ? '#52E0CB' : 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: isActive ? 'none' : 'blur(16px)',
                        WebkitBackdropFilter: isActive ? 'none' : 'blur(16px)',
                        border: isActive ? '2px solid #52E0CB' : '1px solid rgba(255, 255, 255, 0.22)',
                        color: isActive ? '#08194A' : '#FFFFFF',
                        borderRadius: '24px',
                        padding: '24px',
                        boxShadow: isHovered
                          ? '0 24px 48px rgba(0, 0, 0, 0.4), 0 0 32px rgba(82, 224, 203, 0.5)'
                          : isActive
                          ? '0 16px 36px rgba(8, 25, 74, 0.3), 0 0 20px rgba(82, 224, 203, 0.3)'
                          : '0 8px 24px rgba(0, 0, 0, 0.12)',
                        transform: isHovered ? 'scale(1.14)' : isActive ? 'scale(1.02)' : 'scale(1)',
                        zIndex: isHovered ? 20 : 1,
                        transition: 'transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.35s ease, background-color 0.3s ease',
                        cursor: 'pointer',
                      }}
                    >
                      <div>
                        {/* Vector Icon Container Box */}
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '14px',
                            backgroundColor: isActive ? 'rgba(8, 25, 74, 0.12)' : 'rgba(255, 255, 255, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '16px',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <GaugeVector size={22} color={isActive ? '#08194A' : '#52E0CB'} />
                        </div>

                        <div style={{ fontSize: '12px', fontWeight: 800, color: isActive ? '#08194A' : '#52E0CB', marginBottom: '4px', letterSpacing: '0.04em' }}>
                          01
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 8px 0', lineHeight: 1.2, fontFamily: "'Inter', sans-serif" }}>
                          Mining &amp; Metals
                        </h3>
                      </div>
                      <p style={{ fontSize: '13px', fontWeight: 500, margin: 0, opacity: isActive ? 0.95 : 0.75, lineHeight: 1.4 }}>
                        Intelligence for asset-intensive operations.
                      </p>
                    </div>
                  );
                })()}

                {/* Sub-Sector Card 02: Utilities */}
                {(() => {
                  const isHovered = hoveredMaturityBlock === 1;
                  const isActive = activeCard === 'utilities';

                  return (
                    <div
                      onMouseEnter={() => setHoveredMaturityBlock(1)}
                      onMouseLeave={() => setHoveredMaturityBlock(null)}
                      onClick={() => {
                        setActiveCard('utilities');
                        if (window.location.hash !== '#utilities') {
                          window.history.pushState(null, '', '#utilities');
                        }
                        scrollToSection('utilities-capabilities');
                      }}
                      style={{
                        position: 'relative',
                        minHeight: '210px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundColor: isActive ? '#52E0CB' : 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: isActive ? 'none' : 'blur(16px)',
                        WebkitBackdropFilter: isActive ? 'none' : 'blur(16px)',
                        border: isActive ? '2px solid #52E0CB' : '1px solid rgba(255, 255, 255, 0.22)',
                        color: isActive ? '#08194A' : '#FFFFFF',
                        borderRadius: '24px',
                        padding: '24px',
                        boxShadow: isHovered
                          ? '0 24px 48px rgba(0, 0, 0, 0.4), 0 0 32px rgba(82, 224, 203, 0.5)'
                          : isActive
                          ? '0 16px 36px rgba(8, 25, 74, 0.3), 0 0 20px rgba(82, 224, 203, 0.3)'
                          : '0 8px 24px rgba(0, 0, 0, 0.12)',
                        transform: isHovered ? 'scale(1.14)' : isActive ? 'scale(1.02)' : 'scale(1)',
                        zIndex: isHovered ? 20 : 1,
                        transition: 'transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.35s ease, background-color 0.3s ease',
                        cursor: 'pointer',
                      }}
                    >
                      <div>
                        {/* Vector Icon Container Box */}
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '14px',
                            backgroundColor: isActive ? 'rgba(8, 25, 74, 0.12)' : 'rgba(255, 255, 255, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '16px',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <TransmissionTowerVector size={22} color={isActive ? '#08194A' : '#52E0CB'} />
                        </div>

                        <div style={{ fontSize: '12px', fontWeight: 800, color: isActive ? '#08194A' : '#52E0CB', marginBottom: '4px', letterSpacing: '0.04em' }}>
                          02
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 8px 0', lineHeight: 1.2, fontFamily: "'Inter', sans-serif" }}>
                          Utilities
                        </h3>
                      </div>
                      <p style={{ fontSize: '13px', fontWeight: 500, margin: 0, opacity: isActive ? 0.95 : 0.75, lineHeight: 1.4 }}>
                        Building connected and resilient utilities.
                      </p>
                    </div>
                  );
                })()}

                {/* Sub-Sector Card 03: Chemicals */}
                {(() => {
                  const isHovered = hoveredMaturityBlock === 2;
                  const isActive = activeCard === 'chemicals';

                  return (
                    <div
                      onMouseEnter={() => setHoveredMaturityBlock(2)}
                      onMouseLeave={() => setHoveredMaturityBlock(null)}
                      onClick={() => {
                        setActiveCard('chemicals');
                        if (window.location.hash !== '#chemicals') {
                          window.history.pushState(null, '', '#chemicals');
                        }
                        scrollToSection('chemicals-capabilities');
                      }}
                      style={{
                        position: 'relative',
                        minHeight: '210px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundColor: isActive ? '#52E0CB' : 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: isActive ? 'none' : 'blur(16px)',
                        WebkitBackdropFilter: isActive ? 'none' : 'blur(16px)',
                        border: isActive ? '2px solid #52E0CB' : '1px solid rgba(255, 255, 255, 0.22)',
                        color: isActive ? '#08194A' : '#FFFFFF',
                        borderRadius: '24px',
                        padding: '24px',
                        boxShadow: isHovered
                          ? '0 24px 48px rgba(0, 0, 0, 0.4), 0 0 32px rgba(82, 224, 203, 0.5)'
                          : isActive
                          ? '0 16px 36px rgba(8, 25, 74, 0.3), 0 0 20px rgba(82, 224, 203, 0.3)'
                          : '0 8px 24px rgba(0, 0, 0, 0.12)',
                        transform: isHovered ? 'scale(1.14)' : isActive ? 'scale(1.02)' : 'scale(1)',
                        zIndex: isHovered ? 20 : 1,
                        transition: 'transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.35s ease, background-color 0.3s ease',
                        cursor: 'pointer',
                      }}
                    >
                      <div>
                        {/* Vector Icon Container Box */}
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '14px',
                            backgroundColor: isActive ? 'rgba(8, 25, 74, 0.12)' : 'rgba(255, 255, 255, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '16px',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <FlaskLabVector size={22} color={isActive ? '#08194A' : '#52E0CB'} />
                        </div>

                        <div style={{ fontSize: '12px', fontWeight: 800, color: isActive ? '#08194A' : '#52E0CB', marginBottom: '4px', letterSpacing: '0.04em' }}>
                          03
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 8px 0', lineHeight: 1.2, fontFamily: "'Inter', sans-serif" }}>
                          Chemicals
                        </h3>
                      </div>
                      <p style={{ fontSize: '13px', fontWeight: 500, margin: 0, opacity: isActive ? 0.95 : 0.75, lineHeight: 1.4 }}>
                        Transforming complex manufacturing ecosystems.
                      </p>
                    </div>
                  );
                })()}

                {/* Sub-Sector Card 04: Engineering & Construction */}
                {(() => {
                  const isHovered = hoveredMaturityBlock === 3;
                  const isActive = activeCard === 'engineering-construction';

                  return (
                    <div
                      onMouseEnter={() => setHoveredMaturityBlock(3)}
                      onMouseLeave={() => setHoveredMaturityBlock(null)}
                      onClick={() => {
                        setActiveCard('engineering-construction');
                        if (window.location.hash !== '#engineering-construction') {
                          window.history.pushState(null, '', '#engineering-construction');
                        }
                        scrollToSection('ec-capabilities');
                      }}
                      style={{
                        position: 'relative',
                        minHeight: '210px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundColor: isActive ? '#52E0CB' : 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: isActive ? 'none' : 'blur(16px)',
                        WebkitBackdropFilter: isActive ? 'none' : 'blur(16px)',
                        border: isActive ? '2px solid #52E0CB' : '1px solid rgba(255, 255, 255, 0.22)',
                        color: isActive ? '#08194A' : '#FFFFFF',
                        borderRadius: '24px',
                        padding: '24px',
                        boxShadow: isHovered
                          ? '0 24px 48px rgba(0, 0, 0, 0.4), 0 0 32px rgba(82, 224, 203, 0.5)'
                          : isActive
                          ? '0 16px 36px rgba(8, 25, 74, 0.3), 0 0 20px rgba(82, 224, 203, 0.3)'
                          : '0 8px 24px rgba(0, 0, 0, 0.12)',
                        transform: isHovered ? 'scale(1.14)' : isActive ? 'scale(1.02)' : 'scale(1)',
                        zIndex: isHovered ? 20 : 1,
                        transition: 'transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.35s ease, background-color 0.3s ease',
                        cursor: 'pointer',
                      }}
                    >
                      <div>
                        {/* Vector Icon Container Box */}
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '14px',
                            backgroundColor: isActive ? 'rgba(8, 25, 74, 0.12)' : 'rgba(255, 255, 255, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '16px',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <HardHatCraneVector size={22} color={isActive ? '#08194A' : '#52E0CB'} />
                        </div>

                        <div style={{ fontSize: '12px', fontWeight: 800, color: isActive ? '#08194A' : '#52E0CB', marginBottom: '4px', letterSpacing: '0.04em' }}>
                          04
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 8px 0', lineHeight: 1.2, fontFamily: "'Inter', sans-serif" }}>
                          Engineering &amp; Construction
                        </h3>
                      </div>
                      <p style={{ fontSize: '13px', fontWeight: 500, margin: 0, opacity: isActive ? 0.95 : 0.75, lineHeight: 1.4 }}>
                        Connecting projects, assets and enterprise operations.
                      </p>
                    </div>
                  );
                })()}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION 2: SUB-SECTOR 01 (MINING & METALS) */}
      <section id="mining-capabilities" style={{ padding: '96px 0 70px', backgroundColor: '#FFFFFF' }}>
        <div className="section-container">
          <div className="lsfs-section-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '56px', alignItems: 'center' }}>

            {/* Left Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '28px', height: '2.5px', backgroundColor: '#1B58F4', borderRadius: '2px' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#1B58F4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  01 &nbsp;·&nbsp; MINING &amp; METALS
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', fontWeight: 800, color: '#0A1128', lineHeight: 1.12, margin: '0 0 24px 0', letterSpacing: '-0.03em', fontFamily: "'Inter', sans-serif" }}>
                Intelligence for<br />asset-intensive operations.
              </h2>

              <p style={{ fontSize: '15.5px', color: '#52607B', lineHeight: 1.6, margin: '0 0 36px 0', maxWidth: '500px' }}>
                We help mining and metals organizations improve asset performance, maintenance, supply chain visibility, enterprise operations and data-driven decision-making.
              </p>

              <div
                onMouseEnter={() => setHoveredBadgePill('mining')}
                onMouseLeave={() => setHoveredBadgePill(null)}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#081028',
                  color: '#52E0CB',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  userSelect: 'none',
                  cursor: 'pointer',
                  transform: hoveredBadgePill === 'mining' ? 'scale(1.12) translateY(-2px)' : 'scale(1)',
                  boxShadow: hoveredBadgePill === 'mining' ? '0 12px 24px rgba(8, 16, 40, 0.35), 0 0 20px rgba(82, 224, 203, 0.45)' : '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                THE ASSET SETS THE CEILING
              </div>
            </div>

            {/* Right Column: 2-Column Grid with Left Cyan Line */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#8DA4C4', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>
                WHAT WE COVER
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'stretch' }}>
                <div style={{ width: '3px', backgroundColor: '#52E0CB', borderRadius: '2px', flexShrink: 0 }} />

                <div className="lsfs-capabilities-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', flexGrow: 1 }}>
                  {miningCapabilities.map((item, idx) => {
                    const isHovered = hoveredMiningCap === idx;
                    const IconComp = item.icon;
                    return (
                      <div
                        key={item.title}
                        onMouseEnter={() => setHoveredMiningCap(idx)}
                        onMouseLeave={() => setHoveredMiningCap(null)}
                        style={{
                          backgroundColor: item.isMint ? '#52E0CB' : '#F2F6FE',
                          color: '#0A1128',
                          borderRadius: '20px',
                          padding: '18px 22px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          boxShadow: isHovered ? '0 14px 28px rgba(38, 92, 244, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.02)',
                          transform: isHovered ? 'scale(1.02) translateY(-2px)' : 'scale(1)',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '14px',
                            backgroundColor: item.isMint ? 'rgba(255, 255, 255, 0.45)' : '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: item.isMint ? 'none' : '0 2px 6px rgba(0, 0, 0, 0.04)',
                          }}
                        >
                          <IconComp color={item.isMint ? '#08194A' : '#265CF4'} size={22} />
                        </div>
                        <div style={{ fontSize: '15px', fontWeight: 800, lineHeight: 1.25, color: '#0A1128', fontFamily: "'Inter', sans-serif" }}>
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 4. SECTION 4: SUB-SECTOR 02 (UTILITIES) */}
      <section id="utilities-capabilities" style={{ padding: '96px 0 70px', backgroundColor: '#F4F7FC' }}>
        <div className="section-container">
          <div className="lsfs-section-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '56px', alignItems: 'center' }}>
            
            {/* Left Column: 2x3 Grid */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#8DA4C4', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>
                WHAT WE COVER
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'stretch' }}>
                <div style={{ width: '3px', backgroundColor: '#52E0CB', borderRadius: '2px', flexShrink: 0 }} />

                <div className="lsfs-capabilities-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', flexGrow: 1 }}>
                  {utilCapabilities.map((item, idx) => {
                    const isHovered = hoveredUtilCap === idx;
                    const IconComp = item.icon;
                    return (
                      <div
                        key={item.title}
                        onMouseEnter={() => setHoveredUtilCap(idx)}
                        onMouseLeave={() => setHoveredUtilCap(null)}
                        style={{
                          backgroundColor: item.isMint ? '#52E0CB' : '#FFFFFF',
                          color: '#0A1128',
                          borderRadius: '20px',
                          padding: '18px 22px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          boxShadow: isHovered ? '0 14px 28px rgba(38, 92, 244, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.02)',
                          transform: isHovered ? 'scale(1.02) translateY(-2px)' : 'scale(1)',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '14px',
                            backgroundColor: item.isMint ? 'rgba(255, 255, 255, 0.45)' : '#F4F7FC',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: item.isMint ? 'none' : '0 2px 6px rgba(0, 0, 0, 0.04)',
                          }}
                        >
                          <IconComp color={item.isMint ? '#08194A' : '#265CF4'} size={22} />
                        </div>
                        <div style={{ fontSize: '15px', fontWeight: 800, lineHeight: 1.25, color: '#0A1128', fontFamily: "'Inter', sans-serif" }}>
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '28px', height: '2.5px', backgroundColor: '#1B58F4', borderRadius: '2px' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#1B58F4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  02 &nbsp;·&nbsp; UTILITIES
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', fontWeight: 800, color: '#0A1128', lineHeight: 1.12, margin: '0 0 24px 0', letterSpacing: '-0.03em', fontFamily: "'Inter', sans-serif" }}>
                Building connected<br />and resilient utilities.
              </h2>

              <p style={{ fontSize: '15.5px', color: '#52607B', lineHeight: 1.6, margin: '0 0 36px 0', maxWidth: '500px' }}>
                We help utilities connect assets, customers, enterprise platforms, operations, data and intelligence.
              </p>

              <div
                onMouseEnter={() => setHoveredBadgePill('utilities')}
                onMouseLeave={() => setHoveredBadgePill(null)}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#265CF4',
                  color: '#FFFFFF',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  userSelect: 'none',
                  cursor: 'pointer',
                  transform: hoveredBadgePill === 'utilities' ? 'scale(1.12) translateY(-2px)' : 'scale(1)',
                  boxShadow: hoveredBadgePill === 'utilities' ? '0 12px 24px rgba(38, 92, 244, 0.4), 0 0 20px rgba(38, 92, 244, 0.35)' : '0 4px 14px rgba(38, 92, 244, 0.25)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                RESILIENCE BY DESIGN
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 6. SECTION 6: SUB-SECTOR 03 (CHEMICALS) */}
      <section id="chemicals-capabilities" style={{ padding: '96px 0 70px', backgroundColor: '#FFFFFF' }}>
        <div className="section-container">
          <div className="lsfs-section-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '56px', alignItems: 'center' }}>

            {/* Left Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '28px', height: '2.5px', backgroundColor: '#1B58F4', borderRadius: '2px' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#1B58F4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  03 &nbsp;·&nbsp; CHEMICALS
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', fontWeight: 800, color: '#0A1128', lineHeight: 1.12, margin: '0 0 24px 0', letterSpacing: '-0.03em', fontFamily: "'Inter', sans-serif" }}>
                Transforming complex<br />manufacturing<br />ecosystems.
              </h2>

              <p style={{ fontSize: '15.5px', color: '#52607B', lineHeight: 1.6, margin: '0 0 36px 0', maxWidth: '500px' }}>
                Our capabilities span manufacturing, EHS, supply chain, product lifecycle, compliance, enterprise platforms, analytics and AI.
              </p>

              <div
                onMouseEnter={() => setHoveredBadgePill('chemicals')}
                onMouseLeave={() => setHoveredBadgePill(null)}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#081028',
                  color: '#52E0CB',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  userSelect: 'none',
                  cursor: 'pointer',
                  transform: hoveredBadgePill === 'chemicals' ? 'scale(1.12) translateY(-2px)' : 'scale(1)',
                  boxShadow: hoveredBadgePill === 'chemicals' ? '0 12px 24px rgba(8, 16, 40, 0.35), 0 0 20px rgba(82, 224, 203, 0.45)' : '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                COMPLEXITY, MADE OPERABLE
              </div>
            </div>

            {/* Right Column: 2x4 Grid */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#8DA4C4', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>
                WHAT WE COVER
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'stretch' }}>
                <div style={{ width: '3px', backgroundColor: '#52E0CB', borderRadius: '2px', flexShrink: 0 }} />

                <div className="lsfs-capabilities-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', flexGrow: 1 }}>
                  {chemCapabilities.map((item, idx) => {
                    const isHovered = hoveredChemCap === idx;
                    const IconComp = item.icon;
                    return (
                      <div
                        key={item.title}
                        onMouseEnter={() => setHoveredChemCap(idx)}
                        onMouseLeave={() => setHoveredChemCap(null)}
                        style={{
                          backgroundColor: item.isMint ? '#52E0CB' : '#F2F6FE',
                          color: '#0A1128',
                          borderRadius: '20px',
                          padding: '18px 22px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          boxShadow: isHovered ? '0 14px 28px rgba(38, 92, 244, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.02)',
                          transform: isHovered ? 'scale(1.02) translateY(-2px)' : 'scale(1)',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '14px',
                            backgroundColor: item.isMint ? 'rgba(255, 255, 255, 0.45)' : '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: item.isMint ? 'none' : '0 2px 6px rgba(0, 0, 0, 0.04)',
                          }}
                        >
                          <IconComp color={item.isMint ? '#08194A' : '#265CF4'} size={22} />
                        </div>
                        <div style={{ fontSize: '15px', fontWeight: 800, lineHeight: 1.25, color: '#0A1128', fontFamily: "'Inter', sans-serif" }}>
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 8. SECTION 8: SUB-SECTOR 04 (ENGINEERING & CONSTRUCTION) */}
      <section id="ec-capabilities" style={{ padding: '96px 0 80px', backgroundColor: '#F4F7FC' }}>
        <div className="section-container">
          {/* Top Section Grid: Left Grid (WHAT WE COVER) + Right Header & Copy */}
          <div className="lsfs-section-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '56px', alignItems: 'flex-start' }}>

            {/* Left Column: WHAT WE COVER 5-Card Grid */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#8DA4C4', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>
                WHAT WE COVER
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'stretch' }}>
                <div style={{ width: '3px', backgroundColor: '#52E0CB', borderRadius: '2px', flexShrink: 0 }} />

                <div className="lsfs-capabilities-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', flexGrow: 1 }}>
                  {ecCapabilities.map((item, idx) => {
                    const isHovered = hoveredEcCap === idx;
                    const IconComp = item.icon;
                    return (
                      <div
                        key={item.title}
                        onMouseEnter={() => setHoveredEcCap(idx)}
                        onMouseLeave={() => setHoveredEcCap(null)}
                        style={{
                          backgroundColor: item.isMint ? '#52E0CB' : '#FFFFFF',
                          color: '#0A1128',
                          borderRadius: '16px',
                          padding: '18px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          boxShadow: isHovered
                            ? '0 12px 24px rgba(10, 17, 40, 0.08)'
                            : (item.isMint ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.03)'),
                          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '14px',
                            backgroundColor: item.isMint ? 'rgba(255, 255, 255, 0.45)' : '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: item.isMint ? 'none' : '0 2px 6px rgba(0, 0, 0, 0.04)',
                          }}
                        >
                          <IconComp color={item.isMint ? '#08194A' : '#265CF4'} size={22} />
                        </div>
                        <div style={{ fontSize: '15px', fontWeight: 800, lineHeight: 1.25, color: '#0A1128', fontFamily: "'Inter', sans-serif" }}>
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Header & Copy */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '28px', height: '2.5px', backgroundColor: '#1B58F4', borderRadius: '2px' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#1B58F4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  04 &nbsp;·&nbsp; ENGINEERING &amp; CONSTRUCTION
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', fontWeight: 800, color: '#0A1128', lineHeight: 1.12, margin: '0 0 20px 0', letterSpacing: '-0.03em' }}>
                Connecting projects,<br />
                assets<br />
                and enterprise operations.
              </h2>

              <p style={{ fontSize: '15.5px', color: '#52607B', lineHeight: 1.6, margin: '0 0 32px 0', maxWidth: '520px' }}>
                We help project-driven organizations improve visibility and control across projects, procurement, resources, finance and assets.
              </p>

              <div
                onMouseEnter={() => setHoveredBadgePill('ec')}
                onMouseLeave={() => setHoveredBadgePill(null)}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#265CF4',
                  color: '#FFFFFF',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  userSelect: 'none',
                  cursor: 'pointer',
                  transform: hoveredBadgePill === 'ec' ? 'scale(1.12) translateY(-2px)' : 'scale(1)',
                  boxShadow: hoveredBadgePill === 'ec' ? '0 12px 24px rgba(38, 92, 244, 0.4), 0 0 20px rgba(38, 92, 244, 0.35)' : '0 4px 14px rgba(38, 92, 244, 0.25)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                CONTROL ACROSS THE PORTFOLIO
              </div>
            </div>

          </div>

          {/* Bottom Technology Stack Section */}
          <div style={{ marginTop: '72px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#8DA4C4', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>
              TECHNOLOGY
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px' }}>
              {ecTechStack.map((techLabel, idx) => {
                const isHovered = hoveredEcTech === idx;
                return (
                  <div
                    key={techLabel}
                    onMouseEnter={() => setHoveredEcTech(idx)}
                    onMouseLeave={() => setHoveredEcTech(null)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: isHovered ? '#081028' : '#FFFFFF',
                      color: isHovered ? '#FFFFFF' : '#0A1128',
                      border: isHovered ? '1px solid #081028' : '1px solid #E2E8F0',
                      padding: '10px 22px',
                      borderRadius: '12px',
                      fontSize: '14px',
                      fontWeight: 700,
                      boxShadow: isHovered
                        ? '0 8px 20px rgba(8, 16, 40, 0.25), 0 0 12px rgba(82, 224, 203, 0.35)'
                        : '0 2px 6px rgba(0, 0, 0, 0.03)',
                      transform: isHovered ? 'scale(1.06) translateY(-2px)' : 'scale(1)',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: isHovered ? '#52E0CB' : '#265CF4',
                        display: 'inline-block',
                        transition: 'all 0.25s ease',
                      }}
                    />
                    <span>{techLabel}</span>
                  </div>
                );
              })}
            </div>

            <div style={{ fontSize: '13px', color: '#8DA4C4', fontWeight: 500, letterSpacing: '0.02em' }}>
              SAP PS/PPM &nbsp;|&nbsp; Primavera &nbsp;|&nbsp; Unifier &nbsp;|&nbsp; Finance &nbsp;|&nbsp; Procurement &nbsp;|&nbsp; Data &nbsp;|&nbsp; Analytics
            </div>
          </div>

        </div>
      </section>



      {/* 10. DEEP CTA BANNER */}
      <section style={{ padding: '100px 0 100px', minHeight: '540px', background: 'linear-gradient(135deg, #0A1230 0%, #0D2A75 45%, #1942B2 100%)', color: '#FFFFFF', textAlign: 'center', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            position: 'absolute',
            top: '-30px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '620px',
            height: '620px',
            borderRadius: '50%',
            backgroundColor: 'rgba(103, 223, 203, 0.22)',
            filter: 'blur(230px)',
            WebkitFilter: 'blur(230px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
            <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#67DFCB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              FOUR INDUSTRIES, ONE DISCIPLINE
            </span>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#67DFCB', borderRadius: '1px' }} />
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 44px)', fontWeight: 800, color: '#FFFFFF', maxWidth: '1140px', margin: '0 auto 28px auto', lineHeight: 1.25, letterSpacing: '-0.03em' }}>
            <span style={{ display: 'block' }}>When the asset performs, the plant runs</span>
            <span style={{ display: 'block' }}>and the project holds — the business performs.</span>
          </h2>

          <div style={{ width: '180px', height: '4px', backgroundColor: '#67DFCB', borderRadius: '2px', margin: '0 auto 36px auto' }} />

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {[
              'Asset Uptime',
              'Grid',
              'Batching',
              'Project Control'
            ].map((tag, idx) => {
              const isHovered = hoveredCtaPill === idx;
              return (
                <div
                  key={tag}
                  onMouseEnter={() => setHoveredCtaPill(idx)}
                  onMouseLeave={() => setHoveredCtaPill(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.28)' : 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: isHovered ? '1px solid rgba(103, 223, 203, 0.8)' : '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#FFFFFF',
                    padding: '10px 24px',
                    borderRadius: '50px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    boxShadow: isHovered
                      ? '0 12px 28px rgba(103, 223, 203, 0.4), 0 0 20px rgba(255, 255, 255, 0.3)'
                      : '0 4px 16px rgba(0, 0, 0, 0.1)',
                    transform: isHovered ? 'scale(1.14) translateY(-3px)' : 'scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#67DFCB',
                      display: 'inline-block',
                      flexShrink: 0,
                      boxShadow: isHovered ? '0 0 10px #67DFCB' : 'none',
                      transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <span>{tag}</span>
                </div>
              );
            })}
          </div>

          <button
            onMouseEnter={() => setHoveredCtaBtn(true)}
            onMouseLeave={() => setHoveredCtaBtn(false)}
            onClick={() => onNavigate && onNavigate('#contact')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#265CF4',
              padding: '14px 36px',
              borderRadius: '50px',
              fontSize: '15px',
              fontWeight: 800,
              cursor: 'pointer',
              border: 'none',
              boxShadow: hoveredCtaBtn ? '0 16px 36px rgba(255, 255, 255, 0.35), 0 0 24px rgba(103, 223, 203, 0.4)' : '0 6px 20px rgba(0, 0, 0, 0.2)',
              transform: hoveredCtaBtn ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Talk to Ajiledone
          </button>
        </div>
      </section>

      {/* 11. CONTACT BANNER (Exact Figma Uploaded Design Specs) */}
      <section style={{ background: 'linear-gradient(90deg, #265CF4 0%, #1FA5FF 100%)', padding: '76px 0', color: '#FFFFFF' }}>
        <div className="section-container lsfs-contact-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '12px' }}>
              DON'T BE WEIRD
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: 800, margin: 0, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Would you like more information, or<br />do you have a question?
            </h2>
          </div>
          <button
            onClick={() => onNavigate && onNavigate('#contact')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#265CF4',
              padding: '14px 32px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1,
              letterSpacing: '0',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
            }}
          >
            Contact us
          </button>
        </div>
      </section>

      {/* Embedded Responsive Media Queries */}
      <style>{`
        @media (max-width: 1024px) {
          .lsfs-hero-grid,
          .lsfs-section-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .lsfs-hero-cards-container {
            justify-self: center !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .lsfs-hero-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .lsfs-capabilities-2col {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .lsfs-contact-flex {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 24px !important;
          }
        }
      `}</style>

    </div>
  );
};
