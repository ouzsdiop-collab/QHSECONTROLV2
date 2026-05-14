import { Bell, Search, Users } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { IconBadge } from '../ui/IconBadge';

export function Topbar() {
  return (
    <header className="topbar">
      <div>
        <h1>Pilotage QHSE Premium</h1>
        <p className="muted">Modes Essentiel / Expert / Terrain + Paramètres entreprise</p>
      </div>
      <div className="topbar-actions">
        <IconBadge icon={Users} label="Tenant Démo" />
        <button className="icon-btn" aria-label="Recherche"><Search size={16} /></button>
        <button className="icon-btn" aria-label="Alertes"><Bell size={16} /></button>
        <ThemeToggle />
      </div>
    </header>
  );
}
