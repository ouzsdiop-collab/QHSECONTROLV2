import { FlaskConical, HardHat, ScanLine, TriangleAlert } from 'lucide-react';
import { QuickActionButton } from '../../components/ui/QuickActionButton';

export function FieldQuickActions() {
  return <div className="grid field-actions"><QuickActionButton icon={TriangleAlert}>Incident</QuickActionButton><QuickActionButton icon={HardHat}>Danger</QuickActionButton><QuickActionButton icon={ScanLine}>Presque accident</QuickActionButton><QuickActionButton icon={FlaskConical}>Action immédiate</QuickActionButton></div>;
}
