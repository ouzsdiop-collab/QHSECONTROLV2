# LOT 0 — Technical Blueprint (QHSE Control V2)

## 1. Objectif du Lot 0
Définir un socle technique clair, modulaire et gouverné avant toute implémentation applicative. Ce lot ne contient **que** du cadrage : architecture cible, conventions, frontières de modules, standards qualité/sécurité, et critères de passage au Lot 1.

## 2. Stack technique retenue (cible)
- **Frontend** : React + TypeScript + Vite.
- **Backend** : Node.js + TypeScript (API HTTP).
- **Base de données** : PostgreSQL (via Prisma).
- **Contrats partagés** : `app/shared` (types, enums, schémas de contrats).
- **Tests** : unitaires + intégration + e2e (définis, non implémentés en Lot 0).

## 3. Structure cible détaillée

### 3.1 `/app/frontend` (cible)
```txt
/app/frontend
  /src
    /app
    /routes
    /layouts
    /components
      /ui
      /charts
      /forms
      /tables
      /modals
      /drawers
      /feedback
    /modules
      /dashboard
      /risks
      /duerp
      /actions
      /incidents
      /audits
      /documents
      /chemicals
      /compliance
      /reports
      /imports
      /admin
      /field
      /settings
    /services
    /hooks
    /lib
    /styles
    /types
    /mocks
```

### 3.2 `/app/backend` (cible)
```txt
/app/backend
  /src
    /config
    /common
      /errors
      /middlewares
      /permissions
      /validation
      /logger
    /modules
      /auth
      /companies
      /sites
      /users
      /dashboard
      /risks
      /duerp
      /actions
      /incidents
      /audits
      /documents
      /chemicals
      /compliance
      /reports
      /imports
      /admin
    /prisma
    /jobs
    /templates
    /tests
```

### 3.3 `/app/shared` (cible)
```txt
/app/shared
  /src
    /contracts
    /enums
    /types
    /schemas
    /constants
    /versioning
```

## 4. Conventions de nommage
- **Fichiers TS/TSX** : `kebab-case` (ex: `risk-score-card.tsx`).
- **Composants React** : `PascalCase` (ex: `RiskScoreCard`).
- **Hooks** : préfixe `use` (ex: `useRiskFilters`).
- **Services** : suffixe `.service.ts`.
- **Validators** : suffixe `.schema.ts`.
- **Tests** : `*.test.ts` / `*.test.tsx`.

## 5. Règles de séparation des responsabilités
- UI = rendu + interactions locales.
- Logique métier = services/domaines.
- Accès API = couche `services` dédiée.
- Validation = schémas centralisés (front/back).
- Mappages DTO ↔ domaine explicités, jamais implicites.

## 6. Règles anti-fichiers monolithiques
- Composant UI idéalement `< 250` lignes.
- Service métier idéalement `< 300` lignes.
- Page/module idéalement `< 400` lignes.
- Dépassement => découpage obligatoire (sous-composants, sous-services, utilitaires).

## 7. Stratégie des modules
- Modules alignés sur domaines métier (risks, incidents, audits, etc.).
- Chaque module expose une API interne minimale.
- Interactions inter-modules via contrats explicites (pas d’accès direct interne caché).

## 8. Stratégie des modes Essentiel / Expert / Terrain / Admin
- Une **source de données unique** partagée.
- Le mode change la **lecture UX**, pas la vérité métier.
- Terrain = parcours mobile-first et saisie accélérée.
- Admin = gouvernance SaaS, supervision, configuration.

## 9. Stratégie design system
- Design tokens centralisés (couleurs, typo, spacing, radius, elevations).
- Composants UI de base réutilisables (boutons, champs, badges, cartes, toasts).
- Interdiction de styles ad hoc non gouvernés hors exceptions documentées.

## 10. Stratégie thèmes clair/sombre
- Theming via tokens sémantiques (`bg-surface`, `text-primary`, etc.).
- Aucune couleur codée en dur dans les modules métier.
- Contraste/accessibilité validés sur composants transverses.

## 11. Stratégie API
- REST versionnée (`/api/v1`).
- DTO d’entrée/sortie documentés et validés.
- Erreurs homogènes (`code`, `message`, `details`, `requestId`).

## 12. Stratégie validation
- Backend : validation stricte des payloads + règles métier serveur.
- Frontend : validation UX initiale pour qualité de saisie.
- Import : validation humaine obligatoire avant persistance finale.

## 13. Stratégie tests
- Unitaires : fonctions métier, validators, mappers.
- Intégration : services + API + persistance.
- E2E : parcours critiques (login, dashboard, risques, incident, import-review).

## 14. Stratégie sécurité
- RBAC strict (rôles + permissions par module).
- Isolation multi-tenant (company/site boundaries).
- Journalisation d’actions sensibles.
- Défense API : rate limiting, headers sécurité, sanitization, traçabilité.

## 15. Stratégie logs
- Logs structurés JSON côté backend.
- Correlation/request ID obligatoire.
- Niveaux standard : debug, info, warn, error.
- Audit logs dédiés aux opérations critiques.

## 16. Stratégie imports
- Pipeline : upload → détection type doc → extraction → mapping → pré-remplissage → revue humaine → fusion.
- Statuts imposés : `draft`, `to_review`, `validated`, `rejected`, `merged`.

## 17. Stratégie PDF
- Génération par templates métier (pas export écran).
- Sections obligatoires: cover, méthodologie, KPI, constats, écarts, reco, plan d’action, annexes.
- Versionnage des templates.

## 18. Stratégie réglementaire
- Packs paramétrables (pays, secteur, taille, ISO, modules).
- Recommandations assistées avec avertissement de validation humaine.
- Historique des versions de packs et règles appliquées.

## 19. Critères de validation Lot 0 -> Lot 1
- Blueprint validé par revue architecture.
- Frontières de modules documentées.
- Conventions de nommage et taille de fichiers actées.
- Plan de bootstrap Lot 1 détaillé et vérifiable.
- Aucun code applicatif métier implémenté en Lot 0.
