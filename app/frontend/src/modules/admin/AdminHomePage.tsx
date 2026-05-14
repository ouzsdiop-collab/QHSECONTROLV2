import { Settings, Users } from 'lucide-react';

export function AdminHomePage() {
  return <section><h2><Settings size={18} /> Console Admin SaaS</h2><p className="muted"><Users size={15} /> Gestion tenants, rôles, droits et gouvernance opérationnelle.</p></section>;
}
