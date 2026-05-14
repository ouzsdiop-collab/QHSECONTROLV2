# Dette technique observée dans V1

## 1) Fichiers trop gros (exemples)
- `src/components/dashboardStyles.js` (~4681 lignes).
- `src/pages/iso.js` (~3189 lignes).
- `src/pages/audits.js` (~2408 lignes).
- `src/pages/dashboard.js` (~2307 lignes).
- `src/pages/products.js` (~2063 lignes).
- `backend/src/services/aiSuggestion.service.js` (~1116 lignes).

## 2) Responsabilités mélangées
- Pages front combinant logique métier + orchestration + rendu + parfois styles.
- Styles massifs JavaScript/CSS centralisés, difficiles à maintenir.

## 3) Duplications et fragmentation
- Multiples variantes dashboard/cockpit et composants proches.
- Multiples styles et couches UI parallèles (risque d’incohérence UX).

## 4) Dépendances potentiellement inutiles / à rationaliser
- Empilement d’outils export PDF (front + back) à rationaliser selon architecture cible.
- Dépendances IA à isoler en module optionnel pour limiter couplage.

## 5) Logique métier dans UI
- Calculs KPI, priorisation et règles métier visibles côté frontend dans plusieurs utilitaires/pages.
- Risque : règles divergentes entre front et backend.

## 6) Maintenabilité
- Courbe de prise en main élevée (grand nombre de fichiers hétérogènes).
- Difficulté de revue unitaire sur gros fichiers.

## 7) Sécurité (points d’attention)
- V1 inclut des garde-fous intéressants (rate-limit, helmet, contrôles prod), mais complexité de configuration élevée.
- Risque d’erreurs de configuration env si copiée sans simplification et policy claire V2.

## 8) Performance (points d’attention)
- Gros fichiers et modules multifonctions -> bundle front potentiellement lourd.
- Dashboards riches pouvant saturer rendu sans stratégie de découpage/lazy loading.

## 9) Risques de déploiement / opérations
- Présence d’artefacts (`dist/`, `coverage/`) et documents de déploiement historiques dans la référence.
- Risque de confusion si ces pratiques sont reprises dans V2 sans gouvernance stricte.
