function getTone(label: string) {
  const value = label.toLowerCase();

  if (value.includes('crit') || value.includes('élev') || value.includes('danger')) return 'danger';
  if (value.includes('vigil') || value.includes('retard') || value.includes('cours')) return 'warning';
  if (value.includes('contrôle') || value.includes('valid') || value.includes('maîtr')) return 'success';
  if (value.includes('pilot') || value.includes('analys')) return 'info';

  return 'accent';
}

export function StatusPill({ label }: { label: string }) {
  const tone = getTone(label);
  return <span className={`status-pill status-pill--${tone}`}>{label}</span>;
}
