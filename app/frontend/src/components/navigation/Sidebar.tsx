import { BarChart3, Building2, ClipboardCheck, FileSignature, HardHat, LayoutDashboard, Settings, ShieldCheck, UploadCloud } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const items: [string, string, LucideIcon][] = [
  ['/', 'Dashboard', LayoutDashboard],
  ['/essential', 'Essentiel', ShieldCheck],
  ['/expert', 'Expert', ClipboardCheck],
  ['/field', 'Terrain', HardHat],
  ['/admin', 'Admin', Settings],
  ['/imports', 'Imports', UploadCloud],
  ['/reports', 'Rapports', FileSignature],
  ['/settings', 'Paramètres', Building2],
];

export function Sidebar() {
  return <aside className="sidebar"><h2><BarChart3 size={18} /> QHSE Control V2</h2>{items.map(([path, label, Icon]) => <NavLink key={path} to={path}><Icon size={16} /> {label}</NavLink>)}</aside>;
}
