import { Card } from '../../components/ui/Card';
import { DashboardExtendedIndicator, DashboardRecentActivity } from './DashboardTypes';

export function DashboardExtendedIndicators({ indicators, recentActivity }: { indicators: DashboardExtendedIndicator[]; recentActivity: DashboardRecentActivity[] }) {
  return <Card><h3>Pilotage étendu & activité récente</h3><div className="grid">{indicators.map((it) => <div key={it.label}><strong>{it.value}</strong><p>{it.label}</p><small className="muted">{it.status}</small></div>)}</div><ul>{recentActivity.map((activity) => <li key={activity.id}>{activity.label}</li>)}</ul></Card>;
}
