import { ReactNode } from 'react';

export function KpiGrid({ children }: { children: ReactNode }) {
  return <section className="grid">{children}</section>;
}
