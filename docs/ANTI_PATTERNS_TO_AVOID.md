# Anti-patterns à éviter

## Produit
- Dupliquer des expériences séparées par mode avec données divergentes.
- Transformer le Mode Essentiel en version “lite” pauvre.

## Technique
- Fichiers monolithiques mélangeant UI, métier et accès données.
- Couplage fort frontend/backend sans contrats partagés.
- Imports automatiques sans validation humaine.
- Reporting PDF réduit à un screenshot/export brut.

## Opérations
- Déploiement prématuré.
- Introduction de secrets en dépôt.
- Absence de journalisation des actions sensibles.
