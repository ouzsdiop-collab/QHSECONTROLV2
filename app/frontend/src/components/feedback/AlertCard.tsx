import { Card } from '../ui/Card';

export function AlertCard({ level, title, message }: { level: 'danger' | 'warning' | 'info' | 'success'; title: string; message: string }) {
  return (
    <Card>
      <strong>{level.toUpperCase()} · {title}</strong>
      <p className="muted">{message}</p>
    </Card>
  );
}
