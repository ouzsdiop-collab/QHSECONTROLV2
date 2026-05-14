# Backend Architecture Target — QHSE Control V2

## 1. Principes
- Stack : **Node.js + TypeScript**.
- API REST versionnée (`/api/v1`) compatible évolution future.
- **Prisma + PostgreSQL** pour persistance.
- Architecture modulaire par domaines métier.

## 2. Arborescence cible
```txt
/app/backend/src
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

## 3. Organisation interne par module
Chaque module suit un découpage stable:
- `*.route.ts` (exposition HTTP)
- `*.controller.ts` (adaptation requête/réponse)
- `*.service.ts` (logique métier)
- `*.repository.ts` (accès données)
- `*.schema.ts` (validation)
- `*.policy.ts` (permissions module)

## 4. API & controllers/routes
- Endpoints REST cohérents, orientés ressources.
- Contrats DTO explicités et versionnés.
- Gestion d’erreurs uniforme + `requestId`.

## 5. Services métier
- Aucune logique métier en route/controller.
- Services testables isolément.
- Règles inter-modules orchestrées explicitement.

## 6. Validation
- Validation stricte des entrées API.
- Validation métier en service (règles de transition d’état, invariants).
- Rejet explicite des payloads invalides.

## 7. Policies & permissions
- RBAC par rôle + permissions granulaire par module.
- Contrôles tenant/company/site systématiques.
- Endpoints admin séparés et fortement contrôlés.

## 8. Audit logs
- Journalisation des opérations sensibles : auth, admin, imports, exports, statuts critiques.
- Stockage structuré pour traçabilité et conformité.

## 9. Imports / exports PDF / files
- Imports : ingestion, parsing, mapping, brouillon, validation humaine, fusion.
- PDF : pipeline template-based, versionné, non lié aux écrans front.
- Documents/files : métadonnées, contrôle accès, historique version.

## 10. Jobs async (plus tard)
- Prévoir `/jobs` pour tâches longues (imports lourds, génération rapports, notifications).
- Exécution différée avec suivi état, retries, logs.

## 11. Sécurité
- Middlewares sécurité (headers, CORS, rate limiting, sanitation).
- Sessions/tokens robustes, rotation et invalidation.
- Principe du moindre privilège sur endpoints et opérations.

## 12. Multi-tenant
- Isolation stricte des données par company.
- Segmentation complémentaire par site.
- Contrainte d’accès vérifiée côté serveur à chaque requête.

## 13. Modèle organisationnel
- Entités cibles : `Company`, `Site`, `User`, `Role`, `ModuleActivation`, `Subscription`.
- Les modules métier se rattachent au contexte company/site.
