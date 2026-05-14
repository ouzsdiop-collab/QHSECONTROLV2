import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { DashboardSituation } from './DashboardTypes';

export function DashboardHeader({ situation }: { situation: DashboardSituation }) {
  return <header className="card section-gap"><h2>Cockpit QHSE</h2><p className="muted">Résumé décisionnel orienté action immédiate.</p><div className="dashboard-row"><Badge>{situation.replace('_', ' ')}</Badge><div className="dashboard-actions"><Button>Importer un document</Button><Button>Déclarer un incident</Button><Button>Générer un rapport</Button><Button>Voir les priorités</Button></div></div></header>;
}
