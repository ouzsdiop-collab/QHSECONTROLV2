# Dashboard Frontend Architecture (V2 Stabilisée)

## Objectif
Cette version stabilise l'architecture du dashboard sans refonte visuelle majeure.

## Composants actifs
- `DashboardPage.tsx` : composition des sections, état minimal (data, filtres, drawer KPI).
- `DashboardCockpitHero.tsx` : hero cockpit unique (score, contexte, mini-KPI, CTA rapides).
- `DashboardFilters.tsx` : filtres période/site/service/mode de lecture.
- `DashboardNowPanel.tsx` : priorités immédiates.
- `DashboardKpiGrid.tsx` : grille KPI + ouverture du détail.
- `DashboardInsightsPanel.tsx` : dérives et recommandations.
- `DashboardAnalysisSection.tsx` : décisions recommandées.
- `DashboardQuickActions.tsx` : raccourcis multi-modes.
- `DashboardExtendedIndicators.tsx` : indicateurs étendus + activité récente.
- `KpiDetailDrawer.tsx` : détail KPI selon mode de lecture.

## Données, types, service
- `DashboardTypes.ts` centralise les types du module dashboard.
- `DashboardMockData.ts` centralise les mocks dashboard.
- `dashboardService.ts` conserve l'abstraction d'accès aux données (mock aujourd'hui, API demain).
- Interdiction de stocker des données métier dashboard dans `localStorage`.

## Composants supprimés / fusionnés
- Supprimés car non utilisés ou redondants :
  - `DashboardHero.tsx` (remplacé par `DashboardCockpitHero.tsx`)
  - `DashboardKpis.tsx` (remplacé par `DashboardKpiGrid.tsx`)
  - `PriorityPanel.tsx` (remplacé par `DashboardNowPanel.tsx`)
  - `DashboardAlerts.tsx` (remplacé par `DashboardInsightsPanel.tsx`)
  - `DashboardActionPlan.tsx` (remplacé par `DashboardAnalysisSection.tsx`)
  - `DashboardCharts.tsx` (sorti de la composition active)
  - `DashboardHeader.tsx`, `ExecutiveSummary.tsx`, `ScoreSummaryCard.tsx` (non utilisés)

## Règles pour les prochaines slices UX
1. `DashboardPage.tsx` reste un orchestrateur de sections (pas de logique métier lourde).
2. Un seul hero actif : `DashboardCockpitHero.tsx`.
3. Garder les composants petits et mono-responsabilité.
4. Éviter les gros fichiers (préférer découpage en sections).
5. Réutiliser les tokens CSS existants (pas de hardcode couleur).
6. Ne pas introduire de stockage métier `localStorage`.

## Fichiers sensibles à ne toucher qu'en cas de nécessité
- `app/frontend/src/modules/dashboard/DashboardTypes.ts`
- `app/frontend/src/modules/dashboard/DashboardMockData.ts`
- `app/frontend/src/modules/dashboard/dashboardService.ts`
- `app/frontend/src/styles/globals.css`

