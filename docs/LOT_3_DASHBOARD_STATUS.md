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

## Lot 3D - Hero cockpit visual densification
- Amélioration visuelle du hero cockpit sans ajout de fonctionnalité métier ni extension de périmètre dashboard.
- Hiérarchie premium renforcée dans la même carte hero: contexte compact en tête, badge état intégré, tendance rapprochée.
- Zone score densifiée: score dominant, barre premium, résumé direction court, action secondaire "Comprendre le score".
- Zone droite renforcée: KPI 2x2 avec icônes lucide, accents visuels subtils par statut, raccourcis compacts en bande, affordance discrète "Voir priorités".
- Responsive conservé: desktop en deux zones, mobile en pile (score puis KPI puis actions).

## Slice 2 - À traiter maintenant compact
- **Composants ajoutés/modifiés**:
  - `DashboardNowPanel` refactorisé autour de `CockpitCard` + `PriorityRow` pour une lecture immédiate des 5 priorités max.
  - `DashboardPriorityItem` enrichi minimalement (`DashboardPriorityType`, `actionLabel`) pour structurer les lignes sans sur-modélisation.
  - Styles dashboard étendus (`dashboard-now-panel__*`) pour une densité premium, hover subtil et version mobile en cartes courtes.
- **Choix UX**:
  - En-tête cockpit secondaire avec eyebrow + description ultra-courte orientée revue QHSE.
  - Lignes compactes : type (badge), titre court, contexte (site/service), méta (délai/ancienneté + module), CTA `Ouvrir` à droite.
  - Feedback local après clic pour confirmer l'intention d'ouverture sans navigation réelle.
- **Limites**:
  - Navigation module toujours placeholder (aucune redirection fonctionnelle).
  - Données toujours mockées, non persistées.
- **Prochaine slice recommandée**:
  - Connecter `Ouvrir` à un routeur/intercepteur module et ajouter un état de priorisation partagé avec le hero cockpit (filtre + focus croisé).

### Slice 2 - Itération pétrole/gaz (raffinement visuel)
- Remplacement des 5 priorités mockées par des cas crédibles énergie/pétrole/gaz (fuite gaz HP compresseur, ATEX, condensats, FDS méthanol, consignation énergie dangereuse).
- Densification des lignes priorité avec hiérarchie renforcée:
  - badge type + icône métier,
  - titre opérationnel court,
  - badge gravité,
  - action recommandée concise,
  - méta complète `site · service · délai · module`.
- Colonne action droite clarifiée sur desktop avec bouton `Ouvrir` en pill, et fallback mobile en cartes compactes.


## Lot 3E - Dashboard data and component contracts
- Audit des composants signature (`CockpitCard`, `MetricCard`, `PriorityRow`, `ActionShortcut`, `InsightCard`, `DashboardSectionHeader`, `StatusBadge`) avec maintien du périmètre UI et sans refonte visuelle.
- Stabilisation des types dashboard dans `DashboardTypes.ts` pour couvrir contexte, score, KPI, priorités, insights, ISO/SMI, pilotage étendu et activité récente.
- Introduction d’un scénario mock métier unique `energyOilGasDemoScenario` (gaz/pétrole/énergie) dans `DashboardDemoScenarios.ts`.
- Simplification de `DashboardMockData.ts` pour éviter les sources concurrentes et duplication de données.
- Mise à jour de `dashboardService.ts` avec `getDashboardDemoData()` et point de bascule API explicite (sans appel réseau réel).
- Documentation de contrats ajoutée: `docs/DASHBOARD_DATA_AND_COMPONENT_CONTRACTS.md`.
