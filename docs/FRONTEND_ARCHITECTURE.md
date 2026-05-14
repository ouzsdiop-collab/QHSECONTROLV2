# Frontend Architecture Target — QHSE Control V2

## 1. Principes
- Stack : **React + TypeScript + Vite**.
- Front modulaire par domaines métier.
- Design system centralisé et thèmes clair/sombre.
- Séparation stricte UI / logique métier / accès API.

## 2. Arborescence cible
```txt
/app/frontend/src
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

## 3. Routing
- Routeur central déclaratif par modules.
- Routes protégées selon rôles/modules activés.
- Segmentation des routes par mode : Essentiel, Expert, Terrain, Admin.

## 4. Layout
- Shell principal : sidebar + topbar + zone contenu.
- Layout spécifique Terrain (mobile-first compact).
- Layout Admin orienté supervision/configuration.

## 5. Design system
- Bibliothèque interne de composants atomiques/moléculaires.
- États UI standardisés (loading, empty, error, success).
- Tokens centralisés (typographie, spacing, radius, ombres, z-index).

## 6. Thème clair/sombre
- Gestion thème via contexte global.
- Variables sémantiques, jamais valeurs hardcodées métier.
- Accessibilité contrastes validée sur composants clés.

## 7. Modules métier
- `dashboard`, `risks`, `duerp`, `actions`, `incidents`, `audits`, `documents`, `chemicals`, `compliance`, `reports`, `imports`, `admin`, `field`, `settings`.
- Chaque module contient ses pages, composants, hooks spécifiques et adaptateurs API.

## 8. Composants UI & patterns
- `components/ui`: primitives.
- `components/charts`: wrappers de visualisation.
- `components/forms`: champs, sections, validation UI.
- `components/tables`: tables filtrables/paginées.
- `components/modals` / `drawers`: interactions contextuelles.
- `components/feedback`: toast, banners, inline messages.

## 9. Hooks
- Hooks transverses : session, permissions UI, thème, navigation.
- Hooks module : filtres, pagination, tri, formulaires.
- Interdit : hooks énormes mélangeant API + UI + règles complexes.

## 10. Services API
- Couche `services` dédiée appels HTTP.
- DTO typés + mapping vers view models.
- Gestion erreurs homogène et traçable.

## 11. State management
- État local pour UI locale.
- État serveur via couche dédiée (cache/revalidation).
- État global limité aux besoins transverses (session, thème, mode, permissions).

## 12. Formulaires et validation
- Schémas de validation côté front pour UX immédiate.
- Validation finale serveur systématique.
- Gestion des erreurs champ/global standardisée.

## 13. Permissions UI
- Guards de route + guards de composants.
- L’UI n’expose pas d’actions interdites selon rôle/mode/module.
- Les permissions UI n’annulent jamais le contrôle serveur.

## 14. Modes
- **Essentiel** : langage clair, priorités et actions guidées.
- **Expert** : détail technique, preuves, matrices, auditability.
- **Terrain** : flux rapides mobile-first, captures (photo/signature/QR).
- **Admin** : configuration SaaS, tenants, modules, supervision.

## 15. Command palette (Ctrl+K)
- Recherche navigation/commandes globales.
- Actions filtrées par permissions et contexte mode.
- Aide à l’exécution rapide pour users experts.

## 16. Dashboard / charts / tables
- Dashboard = composition de widgets indépendants.
- Charts découplés des sources via adaptateurs.
- Tables avec tri/filtre/pagination/export pilotés par contrats.

## 17. Modales / drawers / toasts
- Modales pour actions critiques et confirmations.
- Drawers pour consultation/modification latérale rapide.
- Toasts pour feedback non bloquant (succès/erreur/info).

## 18. Imports & exports PDF (front)
- Front import = upload + revue humaine + validation finale.
- Front PDF = paramétrage du rapport et prévisualisation workflow.
- Génération finale orchestrée backend via templates.
