import { CheckCircle2 } from 'lucide-react';
import { MetricTrend } from './MetricTrend';
import { Card } from '../ui/Card';
import { StatusPill } from '../ui/StatusPill';

export function KpiCard({ title, value, trend, severity, status, action }: { title: string; value: string; trend: string; severity: string; status: string; action: string }) {
  return <Card className="kpi-card"><p className="muted">{title}</p><h3>{value}</h3><MetricTrend trend={trend} /><div className="kpi-meta"><StatusPill label={severity} /><StatusPill label={status} /></div><small><CheckCircle2 size={14} /> Action recommandée : {action}</small></Card>;
}
