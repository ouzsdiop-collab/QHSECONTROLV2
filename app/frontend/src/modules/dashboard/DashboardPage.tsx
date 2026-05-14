import { AlertCard } from '../../components/feedback/AlertCard';
import { ToastPlaceholder } from '../../components/feedback/ToastPlaceholder';
import { KpiCard } from '../../components/kpi/KpiCard';
import { KpiGrid } from '../../components/kpi/KpiGrid';

export function DashboardPage() {
  return (
    <section>
      <h2>Dashboard de pilotage QHSE</h2>
      <p className="muted">Vue actionnable prête pour score, tendance, gravité et recommandations.</p>
      <KpiGrid>
        <KpiCard title="Score conformité" value="92/100" trend="+3 pts sur 30 jours" severity="Risque modéré" status="Sous contrôle" action="Clore 4 CAPA en retard" />
        <KpiCard title="Incidents ouverts" value="07" trend="-2 vs semaine précédente" severity="Vigilance" status="En cours" action="Prioriser site logistique" />
        <KpiCard title="Audits critiques" value="03" trend="Stable" severity="Élevé" status="Planifié" action="Valider preuves ISO" />
      </KpiGrid>
      <div className="grid" style={{ marginTop: '1rem' }}>
        <AlertCard level="warning" title="Dérive terrain" message="Hausse des presqu'accidents sur la zone expédition." />
        <ToastPlaceholder />
      </div>
    </section>
  );
}
