# Mapping V1 -> V2 (proposition)

| Fonctionnalité V1 | Statut V2 | Module cible V2 | Remarques | Priorité |
|---|---|---|---|---|
| Dashboard cockpit multi-blocs | améliorer | `app/frontend/modules/dashboard` | Conserver valeur pilotage, refondre UX + perfs + modularité. | Critique |
| Registre risques + matrice | garder/améliorer | `app/frontend/modules/risks` + `app/backend/domains/risks` | Séparer calcul métier du rendu UI. | Critique |
| Actions (kanban, suivi) | garder | `app/frontend/modules/actions` + `app/backend/domains/actions` | Flux commun incidents/risques/audits. | Critique |
| Incidents & presqu’accidents | garder/améliorer | `app/frontend/modules/incidents` + `app/backend/domains/incidents` | Optimiser mode terrain mobile-first. | Critique |
| Audits & constats | garder/améliorer | `app/frontend/modules/audits` + `app/backend/domains/audits` | Structurer preuves, écarts, scoring. | Critique |
| ISO / conformité assistée | reconstruire | `app/backend/domains/compliance` + UI experte | Basé sur packs paramétrables et garde-fous humains. | Critique |
| Imports Excel/PDF | reconstruire | `app/backend/domains/imports` + `app/frontend/modules/imports-review` | Validation humaine obligatoire avant fusion. | Critique |
| Exports/Reporting PDF | améliorer | `app/backend/domains/reporting` + `app/frontend/modules/reports` | Standard “cabinet-grade” template-first. | Critique |
| FDS parser | fusionner/améliorer | `app/backend/domains/chemical-safety` | Fusionner avec module Documents/Produits. | Important |
| Notifications | garder/améliorer | `app/shared/events` + modules front | Introduire centre de notifications unifié. | Important |
| Auth + rôles + admin | garder/améliorer | `app/backend/domains/auth` + `admin` | Renforcer RBAC/tenant boundaries. | Critique |
| Sites & multi-entités | garder | `app/backend/domains/organization` | Base multi-sites incontournable B2B. | Important |
| PTW / permis | fusionner | `app/frontend/modules/operations` | Possiblement pack optionnel selon segment client. | Secondaire |
| Artefacts CI/deploy V1 | supprimer | N/A | Ne pas reprendre configurations V1. | Critique |
| Gros fichiers styles/pages | supprimer/remplacer | design system + modules | Interdire monolithes et découper par responsabilités. | Critique |
