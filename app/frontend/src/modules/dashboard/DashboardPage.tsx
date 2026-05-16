import { useEffect, useState } from 'react';
import { DashboardAnalysisSection } from './DashboardAnalysisSection';
import { DashboardCockpitHero } from './DashboardCockpitHero';
import { DashboardExtendedIndicators } from './DashboardExtendedIndicators';
import { DashboardFilters } from './DashboardFilters';
import { DashboardInsightsPanel } from './DashboardInsightsPanel';
import { DashboardKpiGrid } from './DashboardKpiGrid';
import { DashboardNowPanel } from './DashboardNowPanel';
import { DashboardQuickActions } from './DashboardQuickActions';
import { KpiDetailDrawer } from './KpiDetailDrawer';
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
  const cockpitContext = { ...data.context, period: filters.period, activeSite: filters.site, readingMode: filters.readingMode };

  return <section><DashboardFilters filters={filters} periods={data.periods} sites={data.sites} services={data.services} onChange={setFilters} /><DashboardCockpitHero situation={data.score.situation} trend={data.score.trend} context={cockpitContext} score={data.score} metrics={data.heroMetrics} onAction={(actionId) => setHeroFeedback(`Navigation cockpit préparée: ${actionId.replace('_', ' ')}`)} />{heroFeedback && <p className="muted section-gap">{heroFeedback}</p>}<DashboardNowPanel items={data.priorities} /><DashboardKpiGrid kpis={data.kpis} onSelect={setSelectedKpi} /><DashboardInsightsPanel insights={data.insights} /><DashboardAnalysisSection decisions={data.decisions} /><DashboardQuickActions /><DashboardExtendedIndicators indicators={data.extendedIndicators} recentActivity={data.recentActivity} /><KpiDetailDrawer kpi={selectedKpi} readingMode={filters.readingMode} onClose={() => setSelectedKpi(null)} /></section>;
}
