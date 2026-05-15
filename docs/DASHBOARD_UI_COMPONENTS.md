# Dashboard UI Components (Lot 3C)

## Objectif
Établir un langage visuel dashboard premium, compact et réutilisable pour éviter la duplication de styles et la dette UI.

## Composants

### 1) `CockpitCard`
- **Rôle**: carte structurante des blocs cockpit (hero maintenant, puis à traiter/dérives/décisions).
- **Props**: `title`, `eyebrow?`, `description?`, `statusLabel?`, `statusVariant?`, `children`, `actions?`.
- **Usage**: wrapper principal des zones de pilotage.

### 2) `MetricCard`
- **Rôle**: carte KPI compacte avec valeur forte + statut.
- **Props**: `label`, `value`, `helper?`, `trend?`, `variant`, `icon?`, `onClick?`.
- **Usage**: KPI synthétiques et comparables.

### 3) `PriorityRow`
- **Rôle**: ligne dense pour listes “À traiter maintenant”.
- **Props**: `type`, `title`, `location?`, `meta?`, `severity`, `actionLabel?`, `onAction?`.
- **Usage**: une ligne = une priorité actionnable.

### 4) `ActionShortcut`
- **Rôle**: raccourci compact premium (évite les gros boutons génériques).
- **Props**: `label`, `description?`, `icon?`, `variant`, `onClick?`.
- **Usage**: accès rapides cockpit.

### 5) `InsightCard`
- **Rôle**: carte courte pour dérive/anomalie/recommandation/décision.
- **Props**: `title`, `description`, `variant`, `confidence?`, `impact?`, `actionLabel?`, `onAction?`.
- **Usage**: synthèse orientée décision, texte court.

### 6) `DashboardSectionHeader`
- **Rôle**: entête de section cohérent, hiérarchie claire.
- **Props**: `eyebrow`, `title`, `description?`, `action?`.
- **Usage**: tête de chaque section dashboard.

### 7) `StatusBadge`
- **Rôle**: badge de statut harmonisé dashboard.
- **Props**: `label`, `variant` (`critical|warning|success|info|neutral`).
- **Usage**: évite la création de badges ad-hoc.

## Variantes et règles de choix
- **`MetricCard`**: KPI chiffré court (valeur + statut).
- **`InsightCard`**: insight textuel court (anomalie, dérive, reco, décision).
- **`PriorityRow`**: item opérationnel compact en liste “à faire”.

## Règles anti-dette
- Ne pas recréer une carte custom si un composant de ce catalogue couvre le besoin.
- Ne pas hardcoder les couleurs (utiliser `tokens.css` / classes globales).
- Ne pas mettre de longs paragraphes dans les cartes.
- Détail long = ouvrir un drawer dédié.
- Garder les fichiers de composant petits, typés, et orientés réutilisation.

## Styles
- Classes globales génériques utilisées:
  - `dashboard-card`
  - `dashboard-metric`
  - `dashboard-priority-row`
  - `dashboard-shortcut`
  - `dashboard-insight`
  - `dashboard-section-header`
