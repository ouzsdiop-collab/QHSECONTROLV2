import { useEffect, useState } from 'react';
import { DashboardActionPlan } from './DashboardActionPlan';
import { DashboardAlerts } from './DashboardAlerts';
import { DashboardCharts } from './DashboardCharts';
import { DashboardExtendedIndicators } from './DashboardExtendedIndicators';
import { DashboardFilters } from './DashboardFilters';
import { DashboardHero } from './DashboardHero';
import { DashboardKpis } from './DashboardKpis';
import { DashboardQuickActions } from './DashboardQuickActions';
import { KpiDetailDrawer } from './KpiDetailDrawer';
import { PriorityPanel } from './PriorityPanel';
import { ScoreSummaryCard } from './ScoreSummaryCard';
import { dashboardService } from './dashboardService';
import { DashboardData, DashboardFilterState, DashboardKpi } from './DashboardTypes';

export function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [selectedKpi, setSelectedKpi] = useState<DashboardKpi | null>(null);
  const [heroFeedback, setHeroFeedback] = useState('');
  const [filters, setFilters] = useState<DashboardFilterState>({ period: '30 derniers jours', site: 'Tous les sites', service: 'Tous les services', readingMode: 'essential' });

  useEffect(() => {
    dashboardService.getDashboardData().then(setData);
  }, []);

  if (!data) return <section><p>Chargement cockpit…</p></section>;

  return <section>
    <DashboardFilters filters={filters} periods={data.periods} sites={data.sites} services={data.services} onChange={setFilters} />
    <div className="dashboard-top-grid section-gap">
      <DashboardHero
        situation={data.score.situation}
        context={filters}
        onAction={(actionId) => setHeroFeedback(`Action préparée: ${actionId.replace('_', ' ')}`)}
      />
      <ScoreSummaryCard
        score={data.score}
        readingMode={filters.readingMode}
        onExplainScore={() => setHeroFeedback('Détail du score disponible dans une prochaine slice (drawer explicatif).')}
      />
    </div>
    {heroFeedback && <p className="muted section-gap">{heroFeedback}</p>}
    <PriorityPanel items={data.priorities} />
    <DashboardKpis kpis={data.kpis} onSelect={setSelectedKpi} />
    <DashboardAlerts insights={data.insights} />
    <DashboardActionPlan decisions={data.decisions} />
    <DashboardQuickActions />
    <DashboardCharts trend={data.incidentTrend6m} workload={data.workload} />
    <DashboardExtendedIndicators indicators={data.extendedIndicators} recentActivity={data.recentActivity} />
    <KpiDetailDrawer kpi={selectedKpi} readingMode={filters.readingMode} onClose={() => setSelectedKpi(null)} />
  </section>;
}
