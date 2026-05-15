import { ReactNode } from 'react';
import { DashboardStatusVariant, StatusBadge } from './StatusBadge';

interface CockpitCardProps {
  title: string;
  eyebrow?: string;
  description?: string;
  statusLabel?: string;
  statusVariant?: DashboardStatusVariant;
  children: ReactNode;
  actions?: ReactNode;
}

export function CockpitCard({
  title,
  eyebrow,
  description,
  statusLabel,
  statusVariant = 'neutral',
  children,
  actions,
}: CockpitCardProps) {
  return (
    <article className="dashboard-card dashboard-cockpit-card">
      <header className="dashboard-cockpit-card__header">
        <div>
          {eyebrow ? <p className="subtle dashboard-cockpit-card__eyebrow">{eyebrow}</p> : null}
          <h2 className="dashboard-cockpit-card__title">{title}</h2>
          {description ? <p className="muted dashboard-cockpit-card__description">{description}</p> : null}
        </div>
        {statusLabel ? <StatusBadge label={statusLabel} variant={statusVariant} /> : null}
      </header>
      <div className="dashboard-cockpit-card__content">{children}</div>
      {actions ? <footer className="dashboard-cockpit-card__actions">{actions}</footer> : null}
    </article>
  );
}
