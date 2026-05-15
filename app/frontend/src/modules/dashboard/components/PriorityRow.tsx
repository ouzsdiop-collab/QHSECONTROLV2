import { DashboardStatusVariant, StatusBadge } from './StatusBadge';

interface PriorityRowProps {
  type: string;
  title: string;
  location?: string;
  meta?: string;
  severity: Exclude<DashboardStatusVariant, 'success'>;
  actionLabel?: string;
  onAction?: () => void;
}

export function PriorityRow({ type, title, location, meta, severity, actionLabel, onAction }: PriorityRowProps) {
  return (
    <article className="dashboard-priority-row">
      <div className="dashboard-priority-row__main">
        <StatusBadge label={type} variant={severity} />
        <p className="dashboard-priority-row__title">{title}</p>
      </div>
      <p className="dashboard-priority-row__meta muted">{[location, meta].filter(Boolean).join(' · ')}</p>
      {actionLabel ? (
        <button type="button" className="dashboard-link-btn" onClick={onAction}>
          {actionLabel}
        </button>
      ) : null}
    </article>
  );
}
