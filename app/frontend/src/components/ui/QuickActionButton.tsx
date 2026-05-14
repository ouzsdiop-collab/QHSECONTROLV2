import { ArrowUpRight, LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';

export function QuickActionButton({ icon: Icon, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { icon: LucideIcon }) {
  return <button className="quick-action-btn" {...props}><Icon size={18} /><span>{children}</span><ArrowUpRight size={16} className="qa-arrow" /></button>;
}
