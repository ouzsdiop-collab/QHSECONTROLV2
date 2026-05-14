# Naming & Code Conventions — QHSE Control V2

## 1. Conventions fichiers
- `kebab-case` pour fichiers (`risk-summary-card.tsx`).
- Suffixes explicites : `.service.ts`, `.schema.ts`, `.controller.ts`, `.route.ts`, `.policy.ts`, `.repository.ts`.
- Un fichier = une responsabilité principale.

## 2. Composants React
- Nom composant en `PascalCase`.
- Props explicitement typées.
- Interdit : composant “god object” gérant fetch + logique métier + rendu complexe.

## 3. Hooks
- Préfixe `use` obligatoire.
- Un hook = un problème métier/UI bien défini.
- Interdit : hook géant multi-domaines.

## 4. Services
- Service = logique métier ou accès API, jamais mélange chaotique.
- Fonctions nommées par intention (`computeRiskScore`, `submitIncidentDraft`).

## 5. Modules
- Un module métier possède : pages, composants module, hook(s), service(s), schemas.
- Dépendances inter-modules explicites seulement via contrats partagés.

## 6. API conventions
- REST resource-oriented, versionnée (`/api/v1/...`).
- DTO request/response strictement typés.
- Erreurs normalisées (`code`, `message`, `details`, `requestId`).

## 7. Prisma conventions
- Modèles en `PascalCase`, champs en `camelCase`.
- Enum explicites pour statuts.
- Migrations atomiques et traçables.

## 8. Tests conventions
- Nommage : `*.test.ts` / `*.test.tsx`.
- AAA (Arrange / Act / Assert) recommandé.
- Tests unitaires proches du domaine, e2e sur flux critiques.

## 9. CSS / design tokens
- Tokens sémantiques d’abord (`color-bg-surface`, `space-4`, `radius-md`).
- Interdit : valeurs hardcodées répétées dans modules.

## 10. Seuils anti-monolithiques
- Composant UI idéalement `< 250` lignes.
- Service métier idéalement `< 300` lignes.
- Module/page idéalement `< 400` lignes.
- Si dépassement : découpage obligatoire documenté.

## 11. Quand découper un fichier
- Multiples responsabilités identifiées.
- Tests difficiles à écrire/lire.
- Réutilisation partielle possible ailleurs.
- Relecture PR devenue complexe.

## 12. Ce qui est interdit
- Copier-coller massif de logique métier entre modules.
- Logique critique uniquement côté UI sans garde serveur.
- Fichiers monolithiques non justifiés.
- Dépendances croisées non documentées entre modules.
