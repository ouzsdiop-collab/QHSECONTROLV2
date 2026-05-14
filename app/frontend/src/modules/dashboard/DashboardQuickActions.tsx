import { UserRole } from '@qhse/shared';
import { useMemo, useState } from 'react';
import { QuickActionButton } from '../../components/ui/QuickActionButton';
import { Tabs } from '../../components/ui/Tabs';
import { dashboardQuickActionsService } from './quickActions.service';
import { DashboardQuickActionMode } from './quickActions.types';

const modeTabs: { id: DashboardQuickActionMode; label: string }[] = [
  { id: 'global', label: 'Pilotage global' },
  { id: 'essential', label: 'Mode Essentiel' },
  { id: 'expert', label: 'Mode Expert' },
  { id: 'field', label: 'Mode Terrain' },
  { id: 'company_admin', label: 'Paramètres entreprise' },
];

const mockCurrentRole: UserRole = UserRole.COMPANY_ADMIN;

export function DashboardQuickActions() {
  const [mode, setMode] = useState<DashboardQuickActionMode>('global');
  const [feedback, setFeedback] = useState('Sélectionnez un raccourci pour agir immédiatement.');
  const actions = useMemo(() => dashboardQuickActionsService.listByMode(mode, mockCurrentRole), [mode]);

  return (
    <section className="card section-gap">
      <h3>Actions rapides / Raccourcis utiles</h3>
      <p className="muted">Des raccourcis contextualisés pour passer de la lecture à l’action sans surcharge.</p>
      <Tabs items={modeTabs} active={mode} onChange={(nextMode) => setMode(nextMode as DashboardQuickActionMode)} />
      <div className="quick-actions-grid">
        {actions.map((action) => (
          <QuickActionButton key={action.id} icon={action.icon} onClick={() => setFeedback(action.feedback)} title={action.hint}>
            {action.label}
          </QuickActionButton>
        ))}
      </div>
      <p className="muted quick-actions-feedback">{feedback}</p>
    </section>
  );
}
