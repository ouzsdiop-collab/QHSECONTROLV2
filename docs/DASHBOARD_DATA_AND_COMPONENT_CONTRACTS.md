# Dashboard data and component contracts

## Objectif
Stabiliser les contrats UI + données du dashboard V2 pour limiter la dette technique lors des prochains lots.

## Composants dashboard signature (audit)

### `CockpitCard`
- **Rôle**: conteneur structurel de section cockpit (header, statut, actions, contenu).
- **Props**: `title`, `eyebrow?`, `description?`, `statusLabel?`, `statusVariant?`, `children`, `actions?`.
- **Règle**: aucune logique métier ni accès données.

### `MetricCard`
- **Rôle**: affichage compact KPI/indicateur.
- **Props**: `label`, `value`, `helper?`, `trend?`, `variant`, `icon?`, `onClick?`.
- **Règle**: aucun mapping métier embarqué; uniquement rendu.

### `PriorityRow`
- **Rôle**: ligne standardisée pour priorité opérationnelle.
- **Props**: `type`, `title`, `location?`, `meta?`, `severity`, `severityLabel?`, `recommendation?`, `actionLabel?`, `onAction?`, `icon?`.
- **Règle**: pas de texte métier figé; contenu injecté via props.

### `ActionShortcut`
- **Rôle**: bouton d’accès rapide.
- **Props**: `label`, `description?`, `icon?`, `variant`, `onClick?`.
- **Règle**: pas de logique API/navigation interne.

### `InsightCard`
- **Rôle**: carte dérive/anomalie/recommandation/décision.
- **Props**: `title`, `description`, `variant`, `confidence?`, `impact?`, `actionLabel?`, `onAction?`.
- **Règle**: les détails métier viennent de la donnée.

### `DashboardSectionHeader`
- **Rôle**: en-tête de section dashboard cohérent.
- **Props**: `eyebrow`, `title`, `description?`, `action?`.

### `StatusBadge`
- **Rôle**: badge de statut avec variants design system.
- **Props**: `label`, `variant`.
- **Règle**: pas de couleurs hardcodées, uniquement classes de variants.

## Types de données dashboard
Fichier: `app/frontend/src/modules/dashboard/DashboardTypes.ts`.

Contrats couverts:
- contexte dashboard (`DashboardContext`);
- score summary (`ScoreSummary`);
- KPI dashboard (`DashboardKpi`);
- priorité opérationnelle (`DashboardPriorityItem`);
- action rapide (IDs gérés au niveau container, pas de type métier couplé composant);
- dérive/recommandation (`DashboardInsight`);
- indicateur étendu (`DashboardExtendedIndicator`);
- activité récente (`DashboardRecentActivity`);
- aperçu conformité ISO/SMI (`DashboardIsoOverviewItem`).

## Scénarios mock
Fichier: `app/frontend/src/modules/dashboard/DashboardDemoScenarios.ts`.

- Scénario principal: `energyOilGasDemoScenario`.
- Données structurées uniquement (pas de JSX, pas de logique UI, pas d’API, pas de localStorage).
- Source centrale des mocks dashboard via `DashboardMockData.ts`.

## Service dashboard
Fichier: `app/frontend/src/modules/dashboard/dashboardService.ts`.

- `getDashboardDemoData()` retourne le scénario mock actuel.
- `dashboardService.getDashboardData()` conserve le contrat async côté page.
- Point de remplacement futur clairement identifié (TODO API backend).

## Règles anti-dette (obligatoires)
- Jamais de texte métier codé en dur dans les composants.
- Jamais de couleur hardcodée dans les composants dashboard.
- Jamais de données métier dans localStorage.
- Jamais de logique API dans les composants UI.
- Détail long => drawer.
- Module complet => page dédiée.
