import { BarChart3, Building2, ClipboardCheck, FileSignature, HardHat, LayoutDashboard, Settings, ShieldCheck, UploadCloud } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const clientItems: [string, string, LucideIcon][] = [
  ['/', 'Dashboard', LayoutDashboard],
  ['/essential', 'Essentiel', ShieldCheck],
  ['/expert', 'Expert', ClipboardCheck],
  ['/field', 'Terrain', HardHat],
  ['/settings', 'Paramètres entreprise', Settings],
  ['/imports', 'Imports', UploadCloud],
  ['/reports', 'Rapports', FileSignature],
];

const platformItems: [string, string, LucideIcon][] = [['/admin', 'Console Plateforme', Building2]];
const isPlatformConsoleVisible = false; // placeholder RBAC: true uniquement pour équipe QHSE Control

export function Sidebar() {
  const items = isPlatformConsoleVisible ? [...clientItems, ...platformItems] : clientItems;
  return <aside className="sidebar"><h2><BarChart3 size={18} /> QHSE Control V2</h2>{items.map(([path, label, Icon]) => <NavLink key={path} to={path}><Icon size={16} /> {label}</NavLink>)}</aside>;
}
