import { Card } from '../../components/ui/Card';

export function DashboardCharts({ trend, workload }: { trend: number[]; workload: { incidents: number; actions: number; nc: number } }) {
  const max = Math.max(...trend);
  return <Card className="section-gap"><h3>Tendances et charge</h3><div className="sparkline">{trend.map((value, index) => <span key={index} style={{ height: `${(value / max) * 100}%` }} />)}</div><p className="muted">Charge: incidents {workload.incidents} · actions {workload.actions} · NC {workload.nc}</p></Card>;
}
