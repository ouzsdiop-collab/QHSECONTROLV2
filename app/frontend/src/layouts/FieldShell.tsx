import { ReactNode } from 'react';

export function FieldShell({ children }: { children: ReactNode }) {
  return (
    <div className="field-shell">
      <h1>Mode Terrain</h1>
      <p className="muted">Mini-app mobile, offline-first et actions immédiates.</p>
      {children}
    </div>
  );
}
