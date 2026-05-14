export function useOfflineStatus(){ return { isOffline: !navigator.onLine, syncStatus: navigator.onLine ? 'synced' : 'pending_sync' }; }
