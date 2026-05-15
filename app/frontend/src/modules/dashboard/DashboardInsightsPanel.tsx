import { Card } from '../../components/ui/Card';
import { DashboardInsight } from './DashboardTypes';

export function DashboardInsightsPanel({ insights }: { insights: DashboardInsight[] }) {
  return <Card className="section-gap"><h3>Dérives détectées / recommandations</h3>{insights.slice(0, 3).map((insight) => <div className="dashboard-item" key={insight.id}><strong>{insight.kind}</strong><p>{insight.explanation}</p><p className="muted">Confiance: {insight.confidence} · Source: {insight.source}</p><p className="subtle">Recommandation: {insight.recommendedAction}</p></div>)}</Card>;
}
