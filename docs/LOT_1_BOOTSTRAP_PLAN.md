# Lot 1 — Bootstrap Plan (sans implémentation métier)

## Objectif global
Initialiser le socle technique exécutable minimal V2 (front/back/shared) sans développer les modules métier avancés.

## Sous-tâche 1 — Bootstrap frontend React + TypeScript + Vite
- **Objectif** : base frontend moderne.
- **Fichiers à créer** : `app/frontend/package.json`, `tsconfig*.json`, `vite.config.ts`, `src/*` minimal.
- **Commandes prévues** : initialisation Vite + TypeScript (à exécuter en Lot 1 uniquement).
- **Critères validation** : app front démarre localement avec page placeholder.
- **Risques** : choix initiaux d’outillage non alignés conventions.

## Sous-tâche 2 — Bootstrap backend Node + TypeScript
- **Objectif** : base API structurée sans logique métier complexe.
- **Fichiers à créer** : `app/backend/package.json`, `tsconfig.json`, `src/main.ts`, structure `src/common`.
- **Commandes prévues** : init projet Node TS (Lot 1 uniquement).
- **Critères validation** : endpoint health minimal répond localement.
- **Risques** : structure trop plate dès le démarrage.

## Sous-tâche 3 — Shared package simple
- **Objectif** : contrats/types partagés initiaux.
- **Fichiers à créer** : `app/shared/package.json`, `src/types`, `src/enums`, `src/contracts`.
- **Commandes prévues** : init package TS minimal (Lot 1 uniquement).
- **Critères validation** : import type partagé front/back fonctionnel.
- **Risques** : versionnage contrats absent.

## Sous-tâche 4 — Scripts npm & lint minimal
- **Objectif** : outillage de qualité de base.
- **Fichiers à créer** : scripts npm + config lint minimale dans front/back.
- **Commandes prévues** : lint/check de base (Lot 1 uniquement).
- **Critères validation** : lint passe sur placeholders.
- **Risques** : règles trop permissives ou trop strictes.

## Sous-tâche 5 — Thème clair/sombre initial
- **Objectif** : fondation visuelle et accessibilité.
- **Fichiers à créer** : tokens de base + provider thème + styles globaux initiaux.
- **Commandes prévues** : vérification build front (Lot 1 uniquement).
- **Critères validation** : toggle thème opérationnel sur pages placeholder.
- **Risques** : hardcode couleur hors tokens.

## Sous-tâche 6 — Layout shell
- **Objectif** : structure navigation commune.
- **Fichiers à créer** : `layouts/AppShell`, placeholders `Sidebar`, `Topbar`.
- **Commandes prévues** : run front local (Lot 1 uniquement).
- **Critères validation** : shell stable desktop/mobile de base.
- **Risques** : surcharger trop tôt le shell.

## Sous-tâche 7 — Routes placeholder
- **Objectif** : préparer l’espace des modules sans logique métier.
- **Fichiers à créer** : route map + pages vides `dashboard`, `risks`, `incidents`, `admin`, etc.
- **Commandes prévues** : tests smoke navigation (Lot 1 uniquement).
- **Critères validation** : navigation fonctionnelle entre placeholders.
- **Risques** : routes non alignées avec boundaries modules.

## Contraintes explicites Lot 1
- Aucun déploiement.
- Aucun module métier avancé.
- Aucune dépendance non justifiée.
- Aucune reprise directe du code V1.

## Statut
- 2026-05-14 : **Lot 1 bootstrap initialisé** avec workspace /app (frontend React+Vite, backend Express TS, shared contracts TS).
