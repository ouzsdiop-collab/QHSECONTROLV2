import { Card } from '../../components/ui/Card';

export function DashboardExtendedIndicators({ indicators, recentActivity }: { indicators: { label: string; value: string; status: string }[]; recentActivity: string[] }) {
  return <Card><h3>Pilotage étendu & activité récente</h3><div className="grid">{indicators.map((it) => <div key={it.label}><strong>{it.value}</strong><p>{it.label}</p><small className="muted">{it.status}</small></div>)}</div><ul>{recentActivity.map((activity) => <li key={activity}>{activity}</li>)}</ul></Card>;
}
