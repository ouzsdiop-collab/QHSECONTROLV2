import { Button } from '../../components/ui/Button';
import { DashboardReadingMode, ScoreSummary } from './DashboardTypes';

interface ScoreSummaryCardProps {
  score: ScoreSummary;
  readingMode: DashboardReadingMode;
  onExplainScore?: () => void;
}

export function ScoreSummaryCard({ score, readingMode, onExplainScore }: ScoreSummaryCardProps) {
  const explanation = readingMode === 'essential' ? score.explanationEssential : score.explanationExpert;

  return (
    <section className="card score-summary-card section-gap">
      <p className="subtle">Score QHSE</p>
      <h3>{score.value}/100</h3>
      <p className="muted">Niveau : {score.level} · Tendance : {score.trend}</p>
      <p>{explanation}</p>

      <ul className="score-summary-card__factors">
        {score.factors.slice(0, 3).map((factor) => (
          <li key={factor.label}>{factor.label}</li>
        ))}
      </ul>

      <Button onClick={onExplainScore}>Comprendre le score</Button>
    </section>
  );
}
