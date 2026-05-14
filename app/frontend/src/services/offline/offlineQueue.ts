export const offlineQueue = { enqueue: (payload: unknown) => ({ id: crypto.randomUUID(), payload, status: 'pending_sync' }) };
