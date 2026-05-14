import { Card } from '../../components/ui/Card';
import { DashboardReadingMode, DashboardData } from './DashboardTypes';

export function ExecutiveSummary({ score, readingMode }: { score: DashboardData['score']; readingMode: DashboardReadingMode }) {
  return <Card className="section-gap"><h3>Score global QHSE: {score.value}/100</h3><p>{score.level} · {score.trend}</p><p className="muted">{score.explanation}</p><ul>{score.penalties.map((penalty) => <li key={penalty}>{penalty}</li>)}</ul><p className="subtle">{readingMode === 'essential' ? 'Ce que cela signifie : les retards et preuves manquantes fragilisent la conformité.' : 'Lecture expert : sources mockées, confiance moyenne/élevée, écarts ISO 45001 à justifier.'}</p></Card>;
}
