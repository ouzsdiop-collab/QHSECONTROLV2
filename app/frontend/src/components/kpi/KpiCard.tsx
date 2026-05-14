import { Card } from '../ui/Card';
import { StatusPill } from '../ui/StatusPill';

export function KpiCard({ title, value, trend, severity, status, action }: { title: string; value: string; trend: string; severity: string; status: string; action: string }) {
  return (
    <Card className="kpi-card">
      <p className="muted">{title}</p>
      <h3>{value}</h3>
      <p>{trend}</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <StatusPill label={severity} />
        <StatusPill label={status} />
      </div>
      <small>Action recommandée : {action}</small>
    </Card>
  );
}
