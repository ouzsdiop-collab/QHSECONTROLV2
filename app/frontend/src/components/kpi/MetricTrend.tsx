import { ArrowUpRight, Clock } from 'lucide-react';

export function MetricTrend({ trend, pending }: { trend: string; pending?: boolean }) {
  return <p className="metric-trend">{pending ? <Clock size={14} /> : <ArrowUpRight size={14} />} {trend}</p>;
}
