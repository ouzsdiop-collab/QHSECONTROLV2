# AUDIT V1 — QHSE Control (référence)

## 1) Résumé global
Le V1 est une plateforme QHSE riche fonctionnellement, avec un front Vite/JS dense et un backend Express/Prisma déjà orienté multi-modules (risques, incidents, audits, reporting, conformité ISO, imports). Le produit couvre un périmètre métier large, mais présente une dette de structuration notable côté frontend (fichiers très volumineux, styles massifs, responsabilités mélangées) et des traces d’artefacts de build/test committés (dist, coverage).

## 2) Architecture observée
- **Monorepo applicatif** avec front et API dans `qhse-africa-starter`.
- **Frontend** dans `src/` avec pages modules, composants, services UI, utils, styles, data mock.
- **Backend** dans `backend/src/` avec `routes` → `controllers` → `services` + `validation` Zod + Prisma.
- **Data packs conformité** (ISO/pays/secteurs) présents côté backend.
- **CI/CD et déploiement** existaient dans V1 (`.github/workflows/ci.yml`, Docker files, docs deployment).

## 3) Technologies utilisées
- Frontend : Vite, JavaScript, Vitest, Playwright, Chart.js, jsPDF/html2canvas, Sentry browser.
- Backend : Node.js/Express, Prisma/PostgreSQL, Zod, JWT, Helmet/CORS/rate-limit, Sentry node.
- Import/Export : `xlsx`, `pdf-parse`, `pdf-lib`, `pdfkit`, routes import/export/reporting.
- IA : intégration Mistral AI (`@mistralai/mistralai`) + modules de suggestion.

## 4) Points forts
- Couverture métier très complète des usages QHSE.
- Backend déjà structuré par couches avec validations dédiées.
- Mesures de sécurité présentes (Helmet, rate limits, gardes prod, auth/cookies).
- Préparation conformité ISO + packs réglementaires déjà initiée.
- Capacités reporting et génération documentaire déjà présentes.

## 5) Points faibles
- Forte densité frontend et fichiers de plusieurs milliers de lignes.
- Mélange UI/logique métier/styling dans plusieurs zones front.
- Présence d’artefacts générés dans le dépôt (dist/coverage), augmentant le bruit.
- Multiplication des pages/modules rend la maintenabilité fragile sans refonte modulaire stricte.

## 6) Risques techniques
- Régressions élevées sur front sans refactoring modulaire.
- Performance front potentiellement dégradée (taille bundle, composants surchargés).
- Risque de dette continue si patterns V1 sont reproduits (gros fichiers, couplage fort).
- Risques opérationnels si scripts/déploiements historiques sont réutilisés tels quels.

## 7) Modules les plus importants (constat V1)
- Dashboard & pilotage.
- Risques + matrice + plans d’actions.
- Incidents & non-conformités.
- Audits & conformité ISO.
- Reporting / exports / PDFs.
- Imports Excel/PDF + parsing FDS.
- Admin / utilisateurs / sites / notifications.

## 8) Zones à ne pas reproduire
- Gros fichiers monolithiques UI (>1 500 à 4 500 lignes).
- Couplage fort entre rendu UI et règles métier complexes.
- Commit d’artefacts build/test dans le dépôt source.
- Accumulation de variantes UX sans standard design system strict.

## 9) Opportunités pour V2
- Repartir from scratch avec architecture modulaire stricte `/app/frontend`, `/app/backend`, `/app/shared`.
- Encapsuler le métier dans services/domaines testables, UI centrée composants.
- Formaliser des contrats API/types partagés dès lot 0.
- Industrialiser import avec validation humaine obligatoire comme étape de gouvernance.
- Standardiser le reporting PDF “niveau cabinet” par templates versionnés.
