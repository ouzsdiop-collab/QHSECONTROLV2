import { dashboardQuickActionsMock } from './quickActions.mocks';
import { DashboardQuickAction, DashboardQuickActionMode } from './quickActions.types';

export interface DashboardQuickActionsApi {
  listByMode(mode: DashboardQuickActionMode): DashboardQuickAction[];
}

export const dashboardQuickActionsService: DashboardQuickActionsApi = {
  listByMode(mode) {
    return dashboardQuickActionsMock.filter((action) => action.mode === mode);
  },
};
