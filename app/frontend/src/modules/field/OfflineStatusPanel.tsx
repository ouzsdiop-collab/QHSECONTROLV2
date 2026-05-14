import { OfflineSyncStatus } from '@qhse/shared';
import { Card } from '../../components/ui/Card';

export function OfflineStatusPanel() {
  return (
    <Card>
      <h2>État de synchronisation</h2>
      <p><strong>{OfflineSyncStatus.PENDING_SYNC}</strong> · aucune saisie terrain perdue.</p>
      <p className="muted">Dernière sync simulée : il y a 3 min (placeholder).</p>
    </Card>
  );
}
