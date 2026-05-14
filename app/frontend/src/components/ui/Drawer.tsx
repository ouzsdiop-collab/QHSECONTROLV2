import { ReactNode } from 'react';
import { Button } from './Button';

export function Drawer({ open, title, onClose, children }: { open: boolean; title: string; onClose: () => void; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="drawer-overlay" role="presentation" onClick={onClose}>
      <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label={title} onClick={(event) => event.stopPropagation()}>
        <div className="drawer-head"><h3>{title}</h3><Button onClick={onClose}>Fermer</Button></div>
        {children}
      </aside>
    </div>
  );
}
