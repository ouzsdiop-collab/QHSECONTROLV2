import { Drawer } from '../../components/ui/Drawer';
import { DashboardKpi, DashboardReadingMode } from './DashboardTypes';

export function KpiDetailDrawer({ kpi, readingMode, onClose }: { kpi: DashboardKpi | null; readingMode: DashboardReadingMode; onClose: () => void }) {
  return <Drawer open={Boolean(kpi)} title={kpi?.title ?? 'Détail KPI'} onClose={onClose}>{kpi && <div><p>{kpi.description}</p><p><strong>Pourquoi c’est important :</strong> {kpi.whyImportant}</p><ul>{kpi.impactedItems.map((item) => <li key={item}>{item}</li>)}</ul><p><strong>Action recommandée:</strong> {kpi.recommendedAction}</p><p className="muted">Lecture {readingMode === 'essential' ? 'Essentiel' : 'Expert'}.</p><p className="subtle">Source mockée: {kpi.source}. Prochaine action: ouvrir le module source.</p></div>}</Drawer>;
}
