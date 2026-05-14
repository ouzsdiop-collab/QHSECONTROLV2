import { UserRole } from '@qhse/shared';
import { dashboardQuickActionsMock } from './quickActions.mocks';
import { DashboardQuickAction, DashboardQuickActionMode } from './quickActions.types';

export interface DashboardQuickActionsApi {
  listByMode(mode: DashboardQuickActionMode, role: UserRole): DashboardQuickAction[];
}

export const dashboardQuickActionsService: DashboardQuickActionsApi = {
  listByMode(mode, role) {
    return dashboardQuickActionsMock.filter((action) => action.mode === mode && (!action.visibleForRoles || action.visibleForRoles.includes(role)));
  },
};
