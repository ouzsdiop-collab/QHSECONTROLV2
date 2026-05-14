import { Card } from '../../components/ui/Card';
import { DashboardKpi } from './DashboardTypes';

export function DashboardKpis({ kpis, onSelect }: { kpis: DashboardKpi[]; onSelect: (kpi: DashboardKpi) => void }) {
  return <section className="grid section-gap">{kpis.slice(0, 6).map((kpi) => <Card key={kpi.id} className="kpi-card" ><button className="dashboard-link" onClick={() => onSelect(kpi)}><h4>{kpi.title}</h4><p>{kpi.value}{kpi.unit ?? ''}</p><p className="muted">{kpi.description} · {kpi.trend}</p><p className="subtle">Action: {kpi.recommendedAction}</p></button></Card>)}</section>;
}
