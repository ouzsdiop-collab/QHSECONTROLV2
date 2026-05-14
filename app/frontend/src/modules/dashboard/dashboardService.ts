import { dashboardMockData } from './DashboardMockData';
import { DashboardData } from './DashboardTypes';

export const dashboardService = {
  getDashboardData(): Promise<DashboardData> {
    return Promise.resolve(dashboardMockData);
  },
};
