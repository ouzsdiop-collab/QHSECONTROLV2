import { ArrowUpRight, Clock } from 'lucide-react';

export function MetricTrend({ trend, pending }: { trend: string; pending?: boolean }) {
  const tone = pending ? 'pending' : trend.includes('+') ? 'positive' : 'neutral';
  return <p className={`metric-trend metric-trend--${tone}`}>{pending ? <Clock size={14} /> : <ArrowUpRight size={14} />} {trend}</p>;
}
