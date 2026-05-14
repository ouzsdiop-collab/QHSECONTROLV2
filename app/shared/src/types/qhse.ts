import { ActionStatus, IncidentStatus, SeverityLevel } from '../enums/statuses.js';

export interface QhseKpi {
  key: string;
  label: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  actionHint: string;
}

export interface FieldReportDraft {
  id: string;
  summary: string;
  severity: SeverityLevel;
  incidentStatus: IncidentStatus;
  linkedActionStatus?: ActionStatus;
}
