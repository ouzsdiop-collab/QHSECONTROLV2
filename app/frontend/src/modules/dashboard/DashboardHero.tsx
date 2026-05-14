import { Button } from '../../components/ui/Button';
import { ScoreSummaryCard } from './ScoreSummaryCard';
import { DashboardContext, DashboardSituation, ScoreSummary } from './DashboardTypes';

interface DashboardHeroProps {
  situation: DashboardSituation;
  trend: string;
  context: DashboardContext;
  score: ScoreSummary;
  onAction?: (actionId: 'declare_incident' | 'import_document' | 'generate_report' | 'see_priorities') => void;
  onExplainScore?: () => void;
}

const situationCopy: Record<DashboardSituation, { label: string; tone: string }> = {
  action_urgente: { label: 'Action urgente', tone: 'status-pill--danger' },
  vigilance: { label: 'Vigilance renforcée', tone: 'status-pill--warning' },
  maitrise: { label: 'Maîtrisé', tone: 'status-pill--success' },
};

export function DashboardHero({ situation, trend, context, score, onAction, onExplainScore }: DashboardHeroProps) {
  const contextLine = `${context.period} · ${context.site} · ${context.service} · Lecture ${context.readingMode === 'essential' ? 'Essentiel' : 'Expert'}`;

  return (
    <section className="card dashboard-cockpit-hero section-gap">
      <header className="dashboard-cockpit-hero__head">
        <div>
          <h2>Cockpit QHSE</h2>
          <p className="muted">Pilotage consolidé des risques, actions, incidents et conformité.</p>
          <p className="subtle">{contextLine}</p>
        </div>
        <div className="dashboard-cockpit-hero__status">
          <span className={`status-pill ${situationCopy[situation].tone}`}>{situationCopy[situation].label}</span>
          <small className="muted">{trend}</small>
        </div>
      </header>

      <div className="dashboard-cockpit-hero__body">
        <ScoreSummaryCard score={score} readingMode={context.readingMode} onExplainScore={onExplainScore} />

        <div className="dashboard-action-block">
          <p className="dashboard-action-block__title">Agir maintenant</p>
          <div className="dashboard-action-block__buttons">
            <Button className="dashboard-btn" onClick={() => onAction?.('declare_incident')}>Déclarer incident</Button>
            <Button className="dashboard-btn dashboard-btn--secondary" onClick={() => onAction?.('import_document')}>Importer document</Button>
            <Button className="dashboard-btn dashboard-btn--secondary" onClick={() => onAction?.('generate_report')}>Générer rapport</Button>
          </div>
          <button className="dashboard-link-btn" onClick={() => onAction?.('see_priorities')}>Voir les priorités</button>
        </div>
      </div>
    </section>
  );
}
