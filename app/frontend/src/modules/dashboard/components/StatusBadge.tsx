import { ReactNode } from 'react';

export type DashboardStatusVariant = 'critical' | 'warning' | 'success' | 'info' | 'neutral';

interface StatusBadgeProps {
  label: ReactNode;
  variant: DashboardStatusVariant;
}

const variantClassMap: Record<DashboardStatusVariant, string> = {
  critical: 'status-pill--danger',
  warning: 'status-pill--warning',
  success: 'status-pill--success',
  info: 'status-pill--info',
  neutral: 'status-pill--accent',
};

export function StatusBadge({ label, variant }: StatusBadgeProps) {
  return <span className={`status-pill dashboard-status-badge ${variantClassMap[variant]}`}>{label}</span>;
}
