# Design System Premium — QHSE Control V2

## Direction artistique
- Positionnement SaaS B2B premium, orienté cabinet conseil QHSE.
- Priorité lisibilité, hiérarchie claire, densité maîtrisée.
- Éviter les patterns “admin template” génériques.

## Tokens
- Tous les tokens visuels sont centralisés dans `app/frontend/src/styles/tokens.css`.
- Catégories: background/surface, border, text, accent, semantic colors, radius, shadows, spacing, transitions, focus ring.

## Composants
- Base UI: `Button`, `Card`, `Badge`, `ThemeToggle`, `StatusPill`, `EmptyState`, `Skeleton`, `Tabs`.
- Pilotage: `KpiCard`, `KpiGrid`, `AlertCard`, `ToastPlaceholder`.
- Navigation: `Sidebar`, `Topbar`, `AppShell`, `FieldShell`.

## Règles Light / Dark
- Aucune couleur codée en dur dans les composants métier.
- Utiliser les variables CSS issues de `tokens.css`.
- Contraste minimum conservé sur texte principal/secondaire.

## Règles mobile Terrain
- Actions tactiles larges et libellés explicites.
- Surface d'information minimaliste pour usage terrain.
- Offline/sync visible en permanence dans la page terrain.

## Anti-patterns design
- Pas de surcharge visuelle.
- Pas de composants monolithiques.
- Pas de styles inline pour couleurs structurelles.
- Pas de duplication de palette hors tokens.

## Éviter un template générique
- Mettre en avant le contexte QHSE (score, incident, audit, CAPA).
- Utiliser une tonalité “pilotage opérationnel + conseil”.
- Préserver la distinction nette des modes Essentiel / Expert / Terrain / Admin.
