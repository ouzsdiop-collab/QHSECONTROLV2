# Lot 3 Dashboard Status

## Objectifs réalisés
- Cockpit QHSE modulaire avec score, priorités, KPI cliquables, dérives, décisions et vues tendances.
- Filtres placeholder période/site/service/lecture Essentiel-Expert.
- Drawer de détail KPI orienté compréhension + action.
- Données mockées typées via service abstrait remplaçable.

## Composants créés
- DashboardHeader, DashboardFilters, ExecutiveSummary, DashboardKpis, PriorityPanel, DashboardAlerts, DashboardActionPlan, DashboardCharts, DashboardExtendedIndicators, KpiDetailDrawer.
- UI: Drawer, Select.

## Interactions ajoutées
- Ouverture détail KPI par clic.
- Changement lecture Essentiel/Expert.
- Raccourcis opérationnels via DashboardQuickActions.

## Limites
- Données entièrement mockées.
- Liens modules restent placeholders.
- Pas de moteur analytics/IA en production.

## Prochaines étapes
- Brancher API réelle backend.
- Connecter modules incidents/actions/ISO.
- Ajouter filtres inter-modules synchronisés.

## Slice 1 - Hero Cockpit + Score QHSE
- Ajout d'un Hero Cockpit premium avec badge de situation (Action urgente / Vigilance / Maîtrisé), contexte opérationnel (période/site/service/lecture) et 3 actions principales limitées à des placeholders.
- Ajout d'une carte Score QHSE explicable avec score, tendance, niveau, explication adaptée Essentiel/Expert, 3 facteurs pénalisants max et bouton “Comprendre le score”.
- Intégration de ces deux blocs en tête de DashboardPage via une grille dédiée, tout en conservant le reste du dashboard existant après cette zone.

### Limites
- Les actions Hero et le bouton “Comprendre le score” restent des feedbacks UI locaux (pas de navigation module ni drawer analytique complet dans cette slice).
- Les données restent mockées, sans calcul métier backend réel.

### Prochaines slices
- Slice 2: structurer “À traiter maintenant” avec priorisation plus explicite et interactions dédiées.
- Slice 3: enrichir la zone KPI critiques avec seuils et interactions de détail harmonisées.

### Ajustement visuel Slice 1 (itération premium)
- Fusion des deux cartes hautes en une carte cockpit unique plus dense et hiérarchisée.
- Passage à un corps en 3 colonnes desktop (Score / Facteurs pénalisants / Actions prioritaires) avec fallback mobile en pile.
- Facteurs pénalisants rendus en chips compactes de statut, actions rendues plus sobres avec variantes primaire/secondaire/ghost.

- 2026-05-14: Slice cockpit V2 hero renforcée (bloc cockpit unique, score dominant, mini-KPI 2x2, accès rapides compacts, filtres visuellement secondaires).

## Lot 3C - Dashboard UI signature components
- Création d'une mini-bibliothèque UI dashboard réutilisable dans `app/frontend/src/modules/dashboard/components`:
  - `CockpitCard`, `MetricCard`, `PriorityRow`, `ActionShortcut`, `InsightCard`, `DashboardSectionHeader`, `StatusBadge`.
- Introduction de classes globales dashboard génériques (cards, metrics, priority rows, shortcuts, insight, section headers) sans couleurs hardcodées hors tokens.
- Application minimale au hero cockpit:
  - Hero encapsulé par `CockpitCard`.
  - 4 mini KPI migrés sur `MetricCard`.
  - Accès rapides migrés sur `ActionShortcut`.
- Aucune nouvelle fonctionnalité métier: refonte purement UI + cohérence visuelle.
- Documentation dédiée ajoutée: `docs/DASHBOARD_UI_COMPONENTS.md`.
