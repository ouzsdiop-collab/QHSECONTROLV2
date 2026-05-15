import { useMemo, useState } from 'react';
import { AlertTriangle, ClipboardCheck, FileWarning, Flame, Wrench } from 'lucide-react';
import { CockpitCard } from './components/CockpitCard';
import { PriorityRow } from './components/PriorityRow';
import { DashboardPriorityItem, DashboardPriorityType } from './DashboardTypes';

interface DashboardNowPanelProps {
  items: DashboardPriorityItem[];
}

function mapSeverity(value: DashboardPriorityItem['severity']) {
  if (value === 'danger') return 'critical';
  return value;
}

const priorityIconMap: Record<DashboardPriorityType, JSX.Element> = {
  Incident: <Flame size={12} aria-hidden="true" />,
  Action: <Wrench size={12} aria-hidden="true" />,
  NC: <AlertTriangle size={12} aria-hidden="true" />,
  FDS: <FileWarning size={12} aria-hidden="true" />,
  Audit: <ClipboardCheck size={12} aria-hidden="true" />,
};

export function DashboardNowPanel({ items }: DashboardNowPanelProps) {
  const [feedback, setFeedback] = useState('');
  const visibleItems = useMemo(() => items.slice(0, 5), [items]);

  return (
    <section className="section-gap">
      <CockpitCard
        title="À traiter maintenant"
        eyebrow="Priorités opérationnelles"
        description="5 sujets à ouvrir avant revue QHSE."
        actions={<button type="button" className="dashboard-link-btn">Voir toutes les priorités</button>}
      >
        <div className="dashboard-now-panel__list" role="list" aria-label="Priorités opérationnelles">
          {visibleItems.map((item) => (
            <div key={item.id} role="listitem" className="dashboard-now-panel__item">
              <PriorityRow
                type={item.type}
                icon={priorityIconMap[item.type]}
                title={item.title}
                location={`${item.site} · ${item.service}`}
                meta={`${item.ageOrDue} · ${item.sourceModule}`}
                severity={mapSeverity(item.severity)}
                severityLabel={item.severity === 'danger' ? 'Critique' : 'Vigilance'}
                recommendation={item.recommendedAction}
                actionLabel={item.actionLabel ?? 'Ouvrir'}
                onAction={() => setFeedback(`Ouverture préparée: ${item.sourceModule} · ${item.title}`)}
              />
            </div>
          ))}
        </div>
        {feedback ? <p className="muted dashboard-now-panel__feedback">{feedback}</p> : null}
      </CockpitCard>
    </section>
  );
}
