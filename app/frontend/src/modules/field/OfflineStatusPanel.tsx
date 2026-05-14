import { OfflineSyncStatus } from '@qhse/shared';

export function OfflineStatusPanel() {
  return (
    <p>
      Offline sync: {OfflineSyncStatus.PENDING_SYNC} (placeholder, aucun signalement perdu).
    </p>
  );
}
