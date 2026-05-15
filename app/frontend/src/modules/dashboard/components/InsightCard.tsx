import { StatusBadge } from './StatusBadge';

interface InsightCardProps {
  title: string;
  description: string;
  variant: 'anomaly' | 'drift' | 'recommendation' | 'decision';
  confidence?: string;
  impact?: string;
  actionLabel?: string;
  onAction?: () => void;
}

const variantMap = {
  anomaly: { label: 'Anomalie', tone: 'critical' as const },
  drift: { label: 'Dérive', tone: 'warning' as const },
  recommendation: { label: 'Recommandation', tone: 'info' as const },
  decision: { label: 'Décision', tone: 'neutral' as const },
};

export function InsightCard({ title, description, variant, confidence, impact, actionLabel, onAction }: InsightCardProps) {
  const badge = variantMap[variant];

  return (
    <article className="dashboard-card dashboard-insight">
      <div className="dashboard-insight__header">
        <StatusBadge label={badge.label} variant={badge.tone} />
      </div>
      <p className="dashboard-insight__title">{title}</p>
      <p className="dashboard-insight__description muted">{description}</p>
      {(confidence || impact) ? <p className="dashboard-insight__meta subtle">{[confidence, impact].filter(Boolean).join(' · ')}</p> : null}
      {actionLabel ? (
        <button type="button" className="dashboard-link-btn" onClick={onAction}>
          {actionLabel}
        </button>
      ) : null}
    </article>
  );
}
