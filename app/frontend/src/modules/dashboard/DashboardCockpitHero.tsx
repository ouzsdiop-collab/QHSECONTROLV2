import { ActionShortcut } from './components/ActionShortcut';
import { CockpitCard } from './components/CockpitCard';
import { MetricCard } from './components/MetricCard';
import { StatusBadge } from './components/StatusBadge';
import { DashboardContext, DashboardHeroMetric, DashboardSituation, ScoreSummary } from './DashboardTypes';

interface DashboardCockpitHeroProps {
  situation: DashboardSituation;
  trend: string;
  context: DashboardContext;
  score: ScoreSummary;
  metrics: DashboardHeroMetric[];
  onAction?: (actionId: 'incidents' | 'actions' | 'audits' | 'report' | 'see_priorities') => void;
}

const situationCopy: Record<DashboardSituation, { label: string; tone: 'critical' | 'warning' | 'success'; message: string }> = {
  action_urgente: {
    label: 'Action urgente',
    tone: 'critical',
    message: 'Plusieurs signaux critiques nécessitent un arbitrage sous 48h.',
  },
  vigilance: {
    label: 'Vigilance renforcée',
    tone: 'warning',
    message: 'Des signaux faibles montent, un suivi renforcé est recommandé cette semaine.',
  },
  maitrise: {
    label: 'Maîtrisé',
    tone: 'success',
    message: 'La situation est globalement maîtrisée, maintenir la cadence de contrôle.',
  },
};

const metricToneMap = {
  danger: 'critical',
  warning: 'warning',
  success: 'success',
  info: 'info',
  accent: 'neutral',
} as const;

export function DashboardCockpitHero({ situation, trend, context, score, metrics, onAction }: DashboardCockpitHeroProps) {
  const progress = Math.min(100, Math.max(0, score.value));
  const readingLabel = context.readingMode === 'essential' ? 'Essentiel' : 'Expert';

  return (
    <section className="dashboard-cockpit-hero section-gap">
      <CockpitCard
        eyebrow="Vue direction · risques, actions, incidents, conformité"
        title="Cockpit QHSE"
        description={situationCopy[situation].message}
        statusLabel={situationCopy[situation].label}
        statusVariant={situationCopy[situation].tone}
      >
        <div className="dashboard-cockpit-hero__body">
          <div className="dashboard-cockpit-main">
            <div className="dashboard-cockpit-main__status">
              <small className="muted">{trend}</small>
            </div>
            <p className="dashboard-cockpit-main__score-label subtle">Score QHSE</p>
            <p className="dashboard-cockpit-main__score">{score.value}/100</p>
            <div className="dashboard-cockpit-main__track" role="progressbar" aria-valuenow={score.value} aria-valuemin={0} aria-valuemax={100}>
              <span style={{ width: `${progress}%` }} />
            </div>
            <StatusBadge label={score.level} variant="info" />
          </div>
          <aside className="dashboard-cockpit-side">
            <div className="dashboard-cockpit-side__kpis">
              {metrics.slice(0, 4).map((metric) => (
                <MetricCard
                  key={metric.id}
                  label={metric.label}
                  value={metric.value}
                  helper={metric.status}
                  variant={metricToneMap[metric.tone] ?? 'neutral'}
                />
              ))}
            </div>
            <div className="dashboard-cockpit-side__actions">
              <p className="dashboard-cockpit-side__actions-title">Accès rapide</p>
              <div className="dashboard-cockpit-side__buttons">
                <ActionShortcut label="Incidents" variant="secondary" onClick={() => onAction?.('incidents')} />
                <ActionShortcut label="Actions" variant="secondary" onClick={() => onAction?.('actions')} />
                <ActionShortcut label="Audits" variant="subtle" onClick={() => onAction?.('audits')} />
                <ActionShortcut label="Rapport" variant="subtle" onClick={() => onAction?.('report')} />
              </div>
              <button className="dashboard-link-btn" onClick={() => onAction?.('see_priorities')}>Voir toutes les priorités</button>
            </div>
          </aside>
        </div>
      </CockpitCard>
      <p className="subtle dashboard-cockpit-hero__context">{context.period} · {context.site} · {context.service} · Lecture {readingLabel}</p>
    </section>
  );
}
