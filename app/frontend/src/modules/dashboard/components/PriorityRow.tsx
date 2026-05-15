import { ReactNode } from 'react';
import { DashboardStatusVariant, StatusBadge } from './StatusBadge';

interface PriorityRowProps {
  type: string;
  title: string;
  location?: string;
  meta?: string;
  severity: Exclude<DashboardStatusVariant, 'success'>;
  actionLabel?: string;
  onAction?: () => void;
  icon?: ReactNode;
  severityLabel?: string;
  recommendation?: string;
}

export function PriorityRow({
  type,
  title,
  location,
  meta,
  severity,
  actionLabel,
  onAction,
  icon,
  severityLabel,
  recommendation,
}: PriorityRowProps) {
  return (
    <article className="dashboard-priority-row">
      <div className="dashboard-priority-row__content">
        <div className="dashboard-priority-row__main">
          <StatusBadge label={<span className="dashboard-priority-row__type-label">{icon}{type}</span>} variant={severity} />
          <p className="dashboard-priority-row__title">{title}</p>
        </div>
        <div className="dashboard-priority-row__details">
          {severityLabel ? <StatusBadge label={severityLabel} variant={severity} /> : null}
          {recommendation ? <p className="dashboard-priority-row__recommendation">{recommendation}</p> : null}
        </div>
        <p className="dashboard-priority-row__meta muted">{[location, meta].filter(Boolean).join(' · ')}</p>
      </div>
      {actionLabel ? (
        <button type="button" className="dashboard-link-btn dashboard-priority-row__action" onClick={onAction}>
          {actionLabel}
        </button>
      ) : null}
    </article>
  );
}
