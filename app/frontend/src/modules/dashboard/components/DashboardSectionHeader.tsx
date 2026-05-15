import { ReactNode } from 'react';

interface DashboardSectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function DashboardSectionHeader({ eyebrow, title, description, action }: DashboardSectionHeaderProps) {
  return (
    <header className="dashboard-section-header">
      <div>
        <p className="dashboard-section-header__eyebrow subtle">{eyebrow}</p>
        <h3 className="dashboard-section-header__title">{title}</h3>
        {description ? <p className="dashboard-section-header__description muted">{description}</p> : null}
      </div>
      {action ? <div className="dashboard-section-header__action">{action}</div> : null}
    </header>
  );
}
