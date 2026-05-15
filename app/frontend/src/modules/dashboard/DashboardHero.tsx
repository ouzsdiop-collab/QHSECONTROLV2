import { Button } from '../../components/ui/Button';
import { DashboardContext, DashboardSituation, ScoreSummary } from './DashboardTypes';

interface DashboardHeroMetric {
  id: string;
  label: string;
  value: number;
  status: string;
  tone: 'danger' | 'warning' | 'info' | 'success';
}

interface DashboardHeroProps {
  situation: DashboardSituation;
  trend: string;
  context: DashboardContext;
  score: ScoreSummary;
  metrics: DashboardHeroMetric[];
  onAction?: (actionId: 'incidents' | 'actions' | 'audits' | 'report' | 'see_priorities') => void;
}

const situationCopy: Record<DashboardSituation, { label: string; tone: string; message: string }> = {
  action_urgente: {
    label: 'Action urgente',
    tone: 'status-pill--danger',
    message: 'Plusieurs signaux critiques nécessitent un arbitrage sous 48h.',
  },
  vigilance: {
    label: 'Vigilance renforcée',
    tone: 'status-pill--warning',
    message: 'Des signaux faibles montent, un suivi renforcé est recommandé cette semaine.',
  },
  maitrise: {
    label: 'Maîtrisé',
    tone: 'status-pill--success',
    message: 'La situation est globalement maîtrisée, maintenir la cadence de contrôle.',
  },
};

export function DashboardHero({ situation, trend, context, score, metrics, onAction }: DashboardHeroProps) {
  const progress = Math.min(100, Math.max(0, score.value));
  const readingLabel = context.readingMode === 'essential' ? 'Essentiel' : 'Expert';

  return (
    <section className="card dashboard-cockpit-hero section-gap">
      <div className="dashboard-cockpit-hero__body">
        <div className="dashboard-cockpit-main">
          <p className="subtle">Vue direction · risques, actions, incidents, conformité</p>
          <h2>Cockpit QHSE</h2>
          <div className="dashboard-cockpit-main__status">
            <span className={`status-pill ${situationCopy[situation].tone}`}>{situationCopy[situation].label}</span>
            <small className="muted">{trend}</small>
          </div>
          <p className="dashboard-cockpit-main__score-label subtle">Score QHSE</p>
          <p className="dashboard-cockpit-main__score">{score.value}/100</p>
          <div className="dashboard-cockpit-main__track" role="progressbar" aria-valuenow={score.value} aria-valuemin={0} aria-valuemax={100}>
            <span style={{ width: `${progress}%` }} />
          </div>
          <p className="muted">{situationCopy[situation].message}</p>
        </div>

        <aside className="dashboard-cockpit-side">
          <div className="dashboard-cockpit-side__kpis">
            {metrics.slice(0, 4).map((metric) => (
              <article key={metric.id} className="dashboard-mini-kpi">
                <p className="dashboard-mini-kpi__value">{metric.value}</p>
                <p className="dashboard-mini-kpi__label">{metric.label}</p>
                <span className={`status-pill status-pill--${metric.tone}`}>{metric.status}</span>
              </article>
            ))}
          </div>
          <div className="dashboard-cockpit-side__actions">
            <p className="dashboard-cockpit-side__actions-title">Accès rapide</p>
            <div className="dashboard-cockpit-side__buttons">
              <Button className="dashboard-quick-btn" onClick={() => onAction?.('incidents')}>Incidents</Button>
              <Button className="dashboard-quick-btn" onClick={() => onAction?.('actions')}>Actions</Button>
              <Button className="dashboard-quick-btn" onClick={() => onAction?.('audits')}>Audits</Button>
              <Button className="dashboard-quick-btn" onClick={() => onAction?.('report')}>Rapport</Button>
            </div>
            <button className="dashboard-link-btn" onClick={() => onAction?.('see_priorities')}>Voir toutes les priorités</button>
          </div>
        </aside>
      </div>

      <p className="subtle dashboard-cockpit-hero__context">{context.period} · {context.site} · {context.service} · Lecture {readingLabel}</p>
    </section>
  );
}
