import { ImportStatus } from '../enums/statuses.js';

export interface ImportBatch {
  id: string;
  sourceFileName: string;
  status: ImportStatus;
  uploadedAt: string;
  reviewerId?: string;
}
