import { ThemeToggle } from '../ui/ThemeToggle';
import { Badge } from '../ui/Badge';

export function Topbar() {
  return (
    <header className="topbar">
      <div>
        <h1>Pilotage QHSE Premium</h1>
        <p className="muted">Modes Essentiel / Expert / Terrain / Admin</p>
      </div>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <Badge>Tenant Démo</Badge>
        <ThemeToggle />
      </div>
    </header>
  );
}
