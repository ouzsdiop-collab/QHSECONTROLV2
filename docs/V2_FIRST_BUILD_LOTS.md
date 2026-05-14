# Proposition de reconstruction V2 par lots

## Lot 0 — Socle technique
- **Objectif** : fondations architecture et conventions.
- **Livrables** : conventions modules, contrats API, standards qualité, skeleton minimal.
- **Cibles /app** : `app/frontend`, `app/backend`, `app/shared` (structure interne).
- **Critères validation** : architecture documentée, dossiers cohérents, règles revues.
- **Risques** : sous-spécification des conventions.

## Lot 1 — Design system + modes clair/sombre
- **Objectif** : base UI homogène.
- **Livrables** : design tokens, composants de base, thème clair/sombre.
- **Cibles /app** : `app/frontend/design-system`, `app/shared/ui-contracts`.
- **Critères validation** : cohérence visuelle, accessibilité de base.
- **Risques** : dérive de styles non gouvernée.

## Lot 2 — Dashboard pilotage
- **Objectif** : cockpit décisionnel V2 minimal viable.
- **Livrables** : KPI essentiels, alertes, priorités, vue management.
- **Cibles /app** : `app/frontend/modules/dashboard`, `app/backend/domains/dashboard`.
- **Critères validation** : données fiables, temps de chargement maîtrisé.
- **Risques** : sur-complexification précoce.

## Lot 3 — Risques + DUERP + actions
- **Objectif** : coeur prévention/exécution.
- **Livrables** : registre risques, matrice, actions correctives/préventives, logique DUERP.
- **Cibles /app** : `app/frontend/modules/risks`, `actions`; `app/backend/domains/risks`, `actions`.
- **Critères validation** : workflows bout-en-bout et traçabilité.
- **Risques** : ambiguïtés métier DUERP selon secteurs/pays.

## Lot 4 — Incidents + audits + documents
- **Objectif** : cycle complet terrain -> audit -> preuve.
- **Livrables** : déclarations incidents, audits, gestion docs contrôlés.
- **Cibles /app** : `app/frontend/modules/incidents|audits|documents`, `app/backend/domains/*`.
- **Critères validation** : liens incidents/actions/audits/données preuve.
- **Risques** : complexité workflow et permissions.

## Lot 5 — Imports Excel/PDF avec validation humaine
- **Objectif** : ingestion fiable sans automatisme aveugle.
- **Livrables** : upload, parsing, suggestions mapping, interface de revue humaine, statuts.
- **Cibles /app** : `app/frontend/modules/imports-review`, `app/backend/domains/imports`.
- **Critères validation** : aucune création finale sans validation explicite.
- **Risques** : qualité extraction hétérogène des documents source.

## Lot 6 — PDF niveau cabinet
- **Objectif** : livrables premium décisionnels.
- **Livrables** : templates versionnés, pipeline génération, annexes/signatures.
- **Cibles /app** : `app/backend/domains/reporting`, `app/frontend/modules/reports`.
- **Critères validation** : structure complète (cover, sommaire, constats, plan d’action).
- **Risques** : exigences graphiques/perf élevées.

## Lot 7 — Modes Essentiel / Expert / Terrain / Admin
- **Objectif** : expériences adaptées par profil sans divergence de données.
- **Livrables** : routage mode, permissions, présentations spécialisées.
- **Cibles /app** : `app/frontend/modes/*`, `app/backend/domains/auth-admin`.
- **Critères validation** : même source de vérité, UX différenciée cohérente.
- **Risques** : fragmentation fonctionnelle si mauvais découpage.

## Lot 8 — Réglementaire + ISO
- **Objectif** : pilotage conformité paramétrable.
- **Livrables** : packs réglementaires, objectifs ISO, alertes de vérification humaine.
- **Cibles /app** : `app/backend/domains/compliance`, `app/frontend/modules/compliance`.
- **Critères validation** : traçabilité sources + explicabilité recommandations.
- **Risques** : dérives d’interprétation réglementaire.

## Lot 9 — Stabilisation, tests, migration
- **Objectif** : fiabilisation pré-lancement et stratégie migration V1->V2.
- **Livrables** : tests unitaires/intégration/e2e prioritaires, plan migration de données.
- **Cibles /app** : transversal front/back/shared + outillage QA.
- **Critères validation** : couverture critique, non-régression des flux clés.
- **Risques** : dette QA si reportée trop tard.
