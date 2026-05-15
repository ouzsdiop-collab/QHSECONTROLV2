import { AlertTriangle, ClipboardCheck, FileWarning, FileX2, Flame, ShieldAlert, Sparkles, TrendingDown } from 'lucide-react';
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

const situationCopy: Record<DashboardSituation, { label: string; tone: 'critical' | 'warning' | 'success'; summary: string }> = {
  action_urgente: {
    label: 'Action urgente',
    tone: 'critical',
    summary: 'Priorité : réduire les actions en retard et traiter les incidents critiques sous 48h.',
  },
  vigilance: {
    label: 'Vigilance renforcée',
    tone: 'warning',
    summary: 'Priorité : stabiliser les dérives terrain et renforcer le suivi hebdomadaire.',
  },
  maitrise: {
    label: 'Maîtrisé',
    tone: 'success',
    summary: 'Priorité : maintenir la cadence de contrôle et sécuriser les preuves ISO critiques.',
  },
};

const metricToneMap = { danger: 'critical', warning: 'warning', success: 'success', info: 'info' } as const;
const metricIconMap = [ShieldAlert, ClipboardCheck, FileWarning, FileX2] as const;

export function DashboardCockpitHero({ situation, trend, context, score, metrics, onAction }: DashboardCockpitHeroProps) {
  const progress = Math.min(100, Math.max(0, score.value));
  const readingLabel = context.readingMode === 'essential' ? 'Essentiel' : 'Expert';
  const quickContext = `${context.period} · ${context.site} · ${context.service} · Lecture ${readingLabel}`;

  return (
    <section className="dashboard-cockpit-hero section-gap">
      <CockpitCard
        eyebrow="Vue direction"
        title="Cockpit QHSE"
        description={quickContext}
        statusLabel={situationCopy[situation].label}
        statusVariant={situationCopy[situation].tone}
        actions={<p className="subtle dashboard-cockpit-card__trend"><TrendingDown size={14} /> {trend}</p>}
      >
        <div className="dashboard-cockpit-hero__body">
          <div className="dashboard-cockpit-main">
            <div className="dashboard-cockpit-main__score-head">
              <p className="dashboard-cockpit-main__score-label subtle">Score QHSE</p>
              <StatusBadge label={situationCopy[situation].label} variant={situationCopy[situation].tone} />
            </div>
            <p className="dashboard-cockpit-main__score">{score.value}/100</p>
            <div className="dashboard-cockpit-main__track" role="progressbar" aria-valuenow={score.value} aria-valuemin={0} aria-valuemax={100}>
              <span style={{ width: `${progress}%` }} />
            </div>
            <div className="dashboard-cockpit-main__meta">
              <StatusBadge label={score.level} variant="info" />
              <p className="dashboard-cockpit-main__summary muted">{situationCopy[situation].summary}</p>
            </div>
            <button type="button" className="dashboard-cockpit-main__score-btn" onClick={() => onAction?.('see_priorities')}>
              <Sparkles size={14} /> Comprendre le score
            </button>
          </div>
          <aside className="dashboard-cockpit-side">
            <div className="dashboard-cockpit-side__kpis">
              {metrics.slice(0, 4).map((metric, index) => {
                const Icon = metricIconMap[index] ?? Flame;
                return (
                  <MetricCard
                    key={metric.id}
                    label={metric.label}
                    value={metric.value}
                    helper={metric.status}
                    variant={metricToneMap[metric.tone] ?? 'neutral'}
                    icon={<Icon size={16} />}
                  />
                );
              })}
            </div>
            <div className="dashboard-cockpit-side__actions">
              <p className="dashboard-cockpit-side__actions-title">Accès rapide</p>
              <div className="dashboard-cockpit-side__buttons">
                <ActionShortcut label="Incidents" icon={<AlertTriangle size={14} />} variant="primary" onClick={() => onAction?.('incidents')} />
                <ActionShortcut label="Actions" icon={<ClipboardCheck size={14} />} variant="secondary" onClick={() => onAction?.('actions')} />
                <ActionShortcut label="Audits" icon={<FileWarning size={14} />} variant="subtle" onClick={() => onAction?.('audits')} />
                <ActionShortcut label="Rapport" icon={<FileX2 size={14} />} variant="subtle" onClick={() => onAction?.('report')} />
              </div>
              <button className="dashboard-link-btn dashboard-link-btn--priority" onClick={() => onAction?.('see_priorities')}>Voir priorités</button>
            </div>
          </aside>
        </div>
      </CockpitCard>
    </section>
  );
}
