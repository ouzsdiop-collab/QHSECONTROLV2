import { OfflineSyncStatus } from '@qhse/shared';
import { Clock } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { OfflineSyncBadge } from '../../components/ui/OfflineSyncBadge';

export function OfflineStatusPanel() {
  return <Card><h2>État de synchronisation</h2><p><OfflineSyncBadge syncing /> <strong>{OfflineSyncStatus.PENDING_SYNC}</strong></p><p className="muted"><Clock size={14} /> Dernière sync simulée : il y a 3 min (placeholder).</p></Card>;
}
