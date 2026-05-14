import { OfflineSyncStatus } from '../enums/sync.js';

export interface OfflineQueueItem {
  id: string;
  entityType: 'incident' | 'action' | 'observation' | 'import';
  payloadRef: string;
  status: OfflineSyncStatus;
  updatedAt: string;
}
