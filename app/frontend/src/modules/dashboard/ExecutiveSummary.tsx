import { Card } from '../../components/ui/Card';
import { DashboardReadingMode, DashboardData } from './DashboardTypes';

export function ExecutiveSummary({ score, readingMode }: { score: DashboardData['score']; readingMode: DashboardReadingMode }) {
  const explanation = readingMode === 'essential' ? score.explanationEssential : score.explanationExpert;
  return <Card className="section-gap"><h3>Score global QHSE: {score.value}/100</h3><p>{score.level} · {score.trend}</p><p className="muted">{explanation}</p><ul>{score.factors.map((factor) => <li key={factor.label}>{factor.label}</li>)}</ul></Card>;
}
