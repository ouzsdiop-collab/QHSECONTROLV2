import { ReactNode } from 'react';
import { DashboardStatusVariant, StatusBadge } from './StatusBadge';

interface MetricCardProps {
  label: string;
  value: string | number;
  helper?: string;
  trend?: string;
  variant: DashboardStatusVariant;
  icon?: ReactNode;
  onClick?: () => void;
}

export function MetricCard({ label, value, helper, trend, variant, icon, onClick }: MetricCardProps) {
  const clickable = Boolean(onClick);

  return (
    <article className={`dashboard-card dashboard-metric ${clickable ? 'dashboard-metric--interactive' : ''}`}>
      <div className="dashboard-metric__top">
        <p className="dashboard-metric__label">{label}</p>
        <StatusBadge label={trend ?? helper ?? 'Stable'} variant={variant} />
      </div>
      <p className="dashboard-metric__value">{value}</p>
      <div className="dashboard-metric__footer">
        {helper ? <small className="muted">{helper}</small> : <span />}
        {icon ? <span className="dashboard-metric__icon">{icon}</span> : null}
      </div>
      {clickable ? <button type="button" className="dashboard-metric__hitbox" onClick={onClick} aria-label={`Ouvrir ${label}`} /> : null}
    </article>
  );
}
