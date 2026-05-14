# Module Boundaries — QHSE Control V2

## 1. Dashboard
- Agrège des indicateurs.
- **Ne contient pas** la logique métier détaillée risques/incidents/audits.

## 2. Imports
- Prépare des drafts et suggestions.
- **Ne crée jamais** les données finales sans validation humaine.

## 3. PDF Reporting
- Basé sur templates structurés.
- **Interdit** : export d’écran brut comme rapport final.

## 4. Admin
- Gère configuration, supervision, abonnements, rôles, modules.
- **N’embarque pas** de logique métier cachée des domaines opérationnels.

## 5. Regulatory Packs
- Alimentent l’aide conformité et priorisation.
- **N’écrasent jamais** la validation humaine et l’expertise métier.

## 6. Modes Essentiel & Expert
- Même source de données.
- Différence limitée à la lecture UX (niveau de détail, guidage, vocabulaire).

## 7. Mode Terrain
- Flux dédiés mobile-first (rapidité de saisie, preuves terrain).
- Peut utiliser des vues simplifiées mais reste aligné sur la même vérité métier.
