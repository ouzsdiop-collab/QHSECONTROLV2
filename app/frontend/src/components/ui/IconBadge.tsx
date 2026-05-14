import { LucideIcon } from 'lucide-react';

export function IconBadge({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="icon-badge">
      <Icon size={14} aria-hidden />
      {label}
    </span>
  );
}
