import { Button } from '../../components/ui/Button';
import { DashboardReadingMode, ScoreSummary } from './DashboardTypes';

interface ScoreSummaryCardProps {
  score: ScoreSummary;
  readingMode: DashboardReadingMode;
  onExplainScore?: () => void;
}

const factorToneByText = (label: string) => {
  const lower = label.toLowerCase();
  if (lower.includes('critique')) return 'status-pill status-pill--danger';
  if (lower.includes('retard') || lower.includes('nc')) return 'status-pill status-pill--warning';
  return 'status-pill status-pill--info';
};

export function ScoreSummaryCard({ score, readingMode, onExplainScore }: ScoreSummaryCardProps) {
  const progress = Math.min(100, Math.max(0, score.value));
  const explanation = readingMode === 'essential' ? score.explanationEssential : score.explanationExpert;

  return (
    <>
      <div className="dashboard-score-block">
        <p className="subtle">Score QHSE</p>
        <p className="dashboard-score-block__value">{score.value}/100</p>
        <p className="muted">{score.level}</p>
        <div className="dashboard-score-block__track" role="progressbar" aria-valuenow={score.value} aria-valuemin={0} aria-valuemax={100}>
          <span style={{ width: `${progress}%` }} />
        </div>
        <Button className="dashboard-btn dashboard-btn--ghost" onClick={onExplainScore}>Comprendre le score</Button>
      </div>

      <div className="dashboard-factor-block">
        <p className="dashboard-factor-block__title">Ce qui fragilise le score</p>
        <div className="dashboard-factor-list">
          {score.factors.slice(0, 4).map((factor) => (
            <div key={factor.label} className={`dashboard-factor-chip ${factorToneByText(factor.label)}`}>
              <span aria-hidden>●</span>
              <span>{factor.label}</span>
            </div>
          ))}
        </div>
        <p className="subtle dashboard-factor-block__hint">{explanation}</p>
      </div>
    </>
  );
}
