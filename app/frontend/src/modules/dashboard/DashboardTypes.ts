export type DashboardReadingMode = 'essential' | 'expert';
export type DashboardSituation = 'action_urgente' | 'vigilance' | 'maitrise';

export interface DashboardFilterState {
  period: string;
  site: string;
  service: string;
  readingMode: DashboardReadingMode;
}

export interface DashboardKpi {
  id: string;
  title: string;
  value: number;
  unit?: string;
  description: string;
  trend: string;
  trendDirection: 'up' | 'down' | 'flat';
  status: string;
  severity: 'info' | 'success' | 'warning' | 'danger';
  recommendedAction: string;
  whyImportant: string;
  source: string;
  impactedItems: string[];
}

export interface DashboardPriorityItem {
  id: string;
  type: string;
  title: string;
  site: string;
  service: string;
  severity: 'warning' | 'danger' | 'info';
  ageOrDue: string;
  sourceModule: string;
}

export interface DashboardInsight {
  id: string;
  kind: 'anomalie' | 'derive' | 'tendance';
  explanation: string;
  confidence: string;
  source: string;
  recommendedAction: string;
}

export interface DashboardDecision {
  id: string;
  title: string;
  impact: string;
  delay: string;
  owner: string;
}

export interface DashboardData {
  score: { value: number; level: string; trend: string; situation: DashboardSituation; explanation: string; penalties: string[] };
  periods: string[];
  sites: string[];
  services: string[];
  kpis: DashboardKpi[];
  priorities: DashboardPriorityItem[];
  insights: DashboardInsight[];
  decisions: DashboardDecision[];
  incidentTrend6m: number[];
  workload: { incidents: number; actions: number; nc: number };
  severitySplit: { label: string; value: number }[];
  actionStatus: { label: string; value: number }[];
  isoOverview: { standard: string; readiness: number; missingEvidence: number; suggestedControl: string }[];
  extendedIndicators: { label: string; value: string; status: string }[];
  recentActivity: string[];
}
