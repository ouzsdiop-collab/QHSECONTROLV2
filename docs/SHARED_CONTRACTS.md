# Shared Contracts — Frontend / Backend

## 1. Objectif
Définir des contrats partagés stables entre frontend et backend pour réduire les divergences fonctionnelles et accélérer les développements modulaires.

## 2. Types partagés (cibles)
- Identifiants, métadonnées, pagination, erreurs API.
- DTO communs pour incidents, risques, actions, audits, imports, rapports.
- Types de session, rôles, permissions et modes d’interface.

## 3. Enums principaux (cibles)
- `SeverityLevel`: `LOW | MEDIUM | HIGH | CRITICAL`
- `UserRole`: `SUPER_ADMIN | ADMIN | QHSE_MANAGER | AUDITOR | MANAGER | FIELD_AGENT | VIEWER`
- `UiMode`: `ESSENTIAL | EXPERT | FIELD | ADMIN`
- `ModuleKey`: `DASHBOARD | RISKS | DUERP | ACTIONS | INCIDENTS | AUDITS | DOCUMENTS | CHEMICALS | COMPLIANCE | REPORTS | IMPORTS | SETTINGS | ADMIN`
- `ImportStatus`: `DRAFT | TO_REVIEW | VALIDATED | REJECTED | MERGED`
- `ActionStatus`: `OPEN | IN_PROGRESS | BLOCKED | DONE | CANCELLED`
- `DocumentStatus`: `DRAFT | ACTIVE | OBSOLETE | ARCHIVED`
- `AuditStatus`: `PLANNED | IN_PROGRESS | COMPLETED | CLOSED`
- `IncidentStatus`: `DECLARED | QUALIFIED | INVESTIGATING | ACTIONED | CLOSED`

## 4. Packs réglementaires
- `RegulatoryPackKey`: ex. `ISO_9001_CORE`, `ISO_14001_CORE`, `ISO_45001_CORE`, variantes par pays/secteur.
- Paramètres : pays, secteur, taille entreprise, modules activés, objectifs ISO.

## 5. Contrats API initiaux (exemples)
```ts
// Exemple documentaire uniquement (non implémenté)
export interface ApiResponse<T> {
  data: T;
  meta?: { requestId: string; timestamp: string };
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  requestId: string;
}

export interface ImportDraftDto {
  id: string;
  sourceType: 'EXCEL' | 'PDF';
  detectedDocumentType: 'DUERP' | 'FDS' | 'AUDIT' | 'ACTION_PLAN' | 'INCIDENT_REGISTER' | 'RISK_TABLE' | 'UNKNOWN';
  status: 'DRAFT' | 'TO_REVIEW' | 'VALIDATED' | 'REJECTED' | 'MERGED';
  suggestionsCount: number;
}
```

## 6. Règles de versionnage des contrats
- Version sémantique des contrats (`major.minor.patch`).
- Breaking change => incrément **major** + adaptation front/back coordonnée.
- Ajout rétrocompatible => incrément **minor**.
- Correctif non-breaking => incrément **patch**.
- Changelog contrats obligatoire à chaque évolution.
