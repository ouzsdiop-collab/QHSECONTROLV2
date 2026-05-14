import { FileText } from 'lucide-react';
import { Card } from './Card';

export function EmptyState({ title, message }: { title: string; message: string }) {
  return <Card><h3 className="empty-title"><FileText size={18} /> {title}</h3><p className="muted">{message}</p></Card>;
}
