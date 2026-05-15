export type DashboardReadingMode = 'essential' | 'expert';
export type DashboardSituation = 'action_urgente' | 'vigilance_renforcee' | 'maitrise';
export type DashboardSeverity = 'info' | 'warning' | 'danger' | 'success';

export interface DashboardContext {
  company: string;
  sector: string;
  period: string;
  activeSite: string;
  services: string[];
  readingMode: DashboardReadingMode;
}

export interface ScoreFactor {
  label: string;
}

export interface ScoreSummary {
  value: number;
  max: number;
  level: string;
  trend: string;
  situation: DashboardSituation;
  explanationEssential: string;
  explanationExpert: string;
  factors: ScoreFactor[];
}

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
  severity: DashboardSeverity;
  recommendedAction: string;
  whyImportant: string;
  source: string;
  impactedItems: string[];
}

export type DashboardPriorityType = 'Incident' | 'Action' | 'NC' | 'FDS' | 'Audit';

export interface DashboardPriorityItem {
  id: string;
  type: DashboardPriorityType;
  title: string;
  site: string;
  service: string;
  severity: Exclude<DashboardSeverity, 'success'>;
  ageOrDue: string;
  sourceModule: string;
  actionLabel?: string;
  recommendedAction?: string;
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

export interface DashboardHeroMetric {
  id: string;
  label: string;
  value: number;
  status: string;
  tone: DashboardSeverity;
}

export interface DashboardSeveritySplitItem {
  label: string;
  value: number;
}

export interface DashboardActionStatusItem {
  label: string;
  value: number;
}

export interface DashboardIsoOverviewItem {
  standard: 'ISO 45001' | 'ISO 14001' | 'ISO 9001' | string;
  readiness: number;
  missingEvidence: number;
  suggestedControl: string;
}

export interface DashboardExtendedIndicator {
  label: string;
  value: string;
  status: string;
}

export interface DashboardRecentActivity {
  id: string;
  label: string;
}

export interface DashboardData {
  context: DashboardContext;
  score: ScoreSummary;
  periods: string[];
  sites: string[];
  services: string[];
  kpis: DashboardKpi[];
  priorities: DashboardPriorityItem[];
  heroMetrics: DashboardHeroMetric[];
  insights: DashboardInsight[];
  decisions: DashboardDecision[];
  incidentTrend6m: number[];
  workload: { incidents: number; actions: number; nc: number };
  severitySplit: DashboardSeveritySplitItem[];
  actionStatus: DashboardActionStatusItem[];
  isoOverview: DashboardIsoOverviewItem[];
  extendedIndicators: DashboardExtendedIndicator[];
  recentActivity: DashboardRecentActivity[];
}
