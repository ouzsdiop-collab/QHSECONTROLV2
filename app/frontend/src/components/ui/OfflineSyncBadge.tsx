import { RefreshCw, WifiOff } from 'lucide-react';

export function OfflineSyncBadge({ syncing }: { syncing?: boolean }) {
  return <span className={`offline-sync ${syncing ? 'syncing' : ''}`}><WifiOff size={14} /> Offline <RefreshCw size={13} className="sync-icon" /></span>;
}
