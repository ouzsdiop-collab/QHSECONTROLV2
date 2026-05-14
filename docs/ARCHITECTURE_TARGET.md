# Architecture cible (draft)

## Périmètre technique
- Nouveau produit construit dans `/app`.
- Frontend prévu : **React + TypeScript + Vite**.
- Backend prévu : **Node.js structuré**.
- Persistance prévue : **Prisma + PostgreSQL**.

## Principes
- Architecture modulaire (domaines métier découplés).
- Design system centralisé.
- Aucun fichier monolithique.
- Séparation nette : modules, UI, services, validations, imports, exports, reporting.

## Segmentation initiale
- `/app/frontend` : application client, design system, navigation par modes.
- `/app/backend` : API, services métier, règles de validation, orchestration imports/exports.
- `/app/shared` : contrats communs, types, schémas, utilitaires transverses.
