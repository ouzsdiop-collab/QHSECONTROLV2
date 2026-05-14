import { Card } from '../../components/ui/Card';
import { DashboardPriorityItem } from './DashboardTypes';

export function PriorityPanel({ items }: { items: DashboardPriorityItem[] }) {
  return <Card className="section-gap"><h3>À traiter maintenant</h3>{items.slice(0,5).map((item) => <div className="dashboard-item" key={item.id}><strong>{item.type}</strong> - {item.title}<div className="muted">{item.site} · {item.service} · {item.ageOrDue} · {item.sourceModule}</div><button className="dashboard-inline-btn">Ouvrir</button></div>)}</Card>;
}
