# CODEX INSTRUCTIONS — QHSE Control V2

## Principes directeurs
1. Construire **QHSE Control V2 from scratch**.
2. Utiliser `/reference` uniquement comme support de référence fonctionnelle.
3. Développer le nouveau produit exclusivement dans `/app`.

## Interdictions absolues
- Aucun déploiement production (plateformes, domaine, pipelines, automatisations de mise en prod).
- Aucun secret, token, clé API ou variable d’environnement de production.
- Aucune dérive vers des fichiers monolithiques volumineux.

## Règles d’architecture
- Séparer strictement :
  - UI,
  - logique métier,
  - services API,
  - validations,
  - imports,
  - exports,
  - modèles de données.
- Préserver une architecture modulaire et extensible.

## Méthode de travail
- Travailler par **petits lots reviewables**.
- Proposer un **plan avant chaque grosse implémentation**.
- Documenter les décisions structurantes dans `/docs`.
