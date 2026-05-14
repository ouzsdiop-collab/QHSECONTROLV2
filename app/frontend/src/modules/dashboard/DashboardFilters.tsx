import { Select } from '../../components/ui/Select';
import { DashboardFilterState } from './DashboardTypes';

export function DashboardFilters({ filters, periods, sites, services, onChange }: { filters: DashboardFilterState; periods: string[]; sites: string[]; services: string[]; onChange: (next: DashboardFilterState) => void }) {
  return <div className="dashboard-filters">{[
    { label: 'Période', value: filters.period, options: periods, key: 'period' },
    { label: 'Site', value: filters.site, options: sites, key: 'site' },
    { label: 'Service', value: filters.service, options: services, key: 'service' },
    { label: 'Lecture', value: filters.readingMode, options: ['essential', 'expert'], key: 'readingMode' },
  ].map((item) => <label key={item.key}><span>{item.label}</span><Select value={item.value} onChange={(e) => onChange({ ...filters, [item.key]: e.target.value } as DashboardFilterState)}>{item.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}</Select></label>)}</div>;
}
