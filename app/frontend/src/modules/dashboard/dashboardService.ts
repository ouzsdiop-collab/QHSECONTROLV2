import { dashboardMockData } from './DashboardMockData';
import { DashboardData } from './DashboardTypes';

export function getDashboardDemoData(): DashboardData {
  return dashboardMockData;
}

export const dashboardService = {
  getDashboardData(): Promise<DashboardData> {
    // TODO: remplacer par appel API backend quand le contrat sera stabilisé.
    return Promise.resolve(getDashboardDemoData());
  },
};
