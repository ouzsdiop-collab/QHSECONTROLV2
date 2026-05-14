import { Button } from '../../components/ui/Button';
import { DashboardContext, DashboardSituation } from './DashboardTypes';

interface DashboardHeroProps {
  situation: DashboardSituation;
  context: DashboardContext;
  onAction?: (actionId: 'declare_incident' | 'import_document' | 'generate_report') => void;
}

const situationCopy: Record<DashboardSituation, { label: string; tone: string }> = {
  action_urgente: { label: 'Action urgente', tone: 'status-pill--danger' },
  vigilance: { label: 'Vigilance', tone: 'status-pill--warning' },
  maitrise: { label: 'Maîtrisé', tone: 'status-pill--success' },
};

export function DashboardHero({ situation, context, onAction }: DashboardHeroProps) {
  const actions = [
    { id: 'declare_incident' as const, label: 'Déclarer un incident' },
    { id: 'import_document' as const, label: 'Importer un document' },
    { id: 'generate_report' as const, label: 'Générer un rapport' },
  ];

  return (
    <section className="card dashboard-hero">
      <div className="dashboard-hero__header">
        <div>
          <h2>Cockpit QHSE</h2>
          <p className="muted">Pilotage immédiat de la situation QHSE, orienté décision et action.</p>
        </div>
        <span className={`status-pill ${situationCopy[situation].tone}`}>{situationCopy[situation].label}</span>
      </div>

      <dl className="dashboard-hero__context">
        <div><dt>Période</dt><dd>{context.period}</dd></div>
        <div><dt>Site</dt><dd>{context.site}</dd></div>
        <div><dt>Service</dt><dd>{context.service}</dd></div>
        <div><dt>Lecture</dt><dd>{context.readingMode === 'essential' ? 'Essentiel' : 'Expert'}</dd></div>
      </dl>

      <div className="dashboard-hero__actions">
        {actions.map((action) => (
          <Button key={action.id} onClick={() => onAction?.(action.id)}>{action.label}</Button>
        ))}
      </div>
    </section>
  );
}
