import { UserRole } from '@qhse/shared';
import { LucideIcon } from 'lucide-react';

export type DashboardQuickActionMode = 'global' | 'essential' | 'expert' | 'field' | 'company_admin';

export interface DashboardQuickAction {
  id: string;
  label: string;
  hint: string;
  mode: DashboardQuickActionMode;
  icon: LucideIcon;
  feedback: string;
  visibleForRoles?: UserRole[];
}
