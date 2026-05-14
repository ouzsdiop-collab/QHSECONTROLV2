import { FieldQuickActions } from './FieldQuickActions';
import { OfflineStatusPanel } from './OfflineStatusPanel';

export function FieldHomePage() {
  return (
    <section>
      <OfflineStatusPanel />
      <h2>Actions rapides</h2>
      <p className="muted">Grandes cibles tactiles pour opérateurs terrain.</p>
      <FieldQuickActions />
    </section>
  );
}
