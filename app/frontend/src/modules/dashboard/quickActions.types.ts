import { LucideIcon } from 'lucide-react';

export type DashboardQuickActionMode = 'global' | 'essential' | 'expert' | 'field' | 'admin';

export interface DashboardQuickAction {
  id: string;
  label: string;
  hint: string;
  mode: DashboardQuickActionMode;
  icon: LucideIcon;
  feedback: string;
}
