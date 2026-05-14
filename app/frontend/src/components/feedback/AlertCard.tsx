import { AlertTriangle, CheckCircle2, LucideIcon } from 'lucide-react';
import { Card } from '../ui/Card';

const icons: Record<'danger' | 'warning' | 'info' | 'success', LucideIcon> = { danger: AlertTriangle, warning: AlertTriangle, info: AlertTriangle, success: CheckCircle2 };

export function AlertCard({ level, title, message }: { level: 'danger' | 'warning' | 'info' | 'success'; title: string; message: string }) {
  const Icon = icons[level];
  return <Card><strong className="alert-title"><Icon size={16} /> {title}</strong><p className="muted">{message}</p></Card>;
}
