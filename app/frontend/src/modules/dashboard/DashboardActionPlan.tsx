import { Card } from '../../components/ui/Card';
import { DashboardDecision } from './DashboardTypes';

export function DashboardActionPlan({ decisions }: { decisions: DashboardDecision[] }) {
  return <Card className="section-gap"><h3>Décisions recommandées</h3>{decisions.map((decision) => <div key={decision.id} className="dashboard-item"><strong>{decision.title}</strong><p className="muted">Impact: {decision.impact} · Délai: {decision.delay} · Responsable: {decision.owner}</p><button className="dashboard-inline-btn">Préparer action</button></div>)}</Card>;
}
