import { ReactNode } from 'react';

interface ActionShortcutProps {
  label: string;
  description?: string;
  icon?: ReactNode;
  variant: 'primary' | 'secondary' | 'subtle';
  onClick?: () => void;
}

export function ActionShortcut({ label, description, icon, variant, onClick }: ActionShortcutProps) {
  return (
    <button type="button" className={`dashboard-shortcut dashboard-shortcut--${variant}`} onClick={onClick}>
      {icon ? <span className="dashboard-shortcut__icon">{icon}</span> : null}
      <span className="dashboard-shortcut__content">
        <span className="dashboard-shortcut__label">{label}</span>
        {description ? <small className="dashboard-shortcut__description">{description}</small> : null}
      </span>
    </button>
  );
}
