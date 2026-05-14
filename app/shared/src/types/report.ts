import { ReportType } from '../enums/statuses.js';

export interface ReportDraft {
  id: string;
  type: ReportType;
  title: string;
  generatedAt?: string;
  qualityLevel: 'internal' | 'cabinet';
}
