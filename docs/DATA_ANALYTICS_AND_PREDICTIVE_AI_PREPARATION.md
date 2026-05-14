# Data Analytics & Predictive AI Preparation

Le dashboard QHSE doit garder des structures de données stables et explicables pour préparer l’analytics avancée.

## Principes
- Séparer strictement UI, données opérationnelles, logique de scoring.
- Journaliser des événements métier exploitables (incident créé, action replanifiée, preuve rejetée, audit clos).
- Garder la validation humaine obligatoire sur toute recommandation.

## Future couche analytics
- Pipeline d’événements normalisés par site, service, typologie, criticité, délai.
- Feature store pour tendances, saisonnalité, dérives locales.
- Scoring prédictif isolé (service dédié) consommé par API.

## Rôle Data Engineer
- Qualité, traçabilité, versioning des jeux de données.
- Monitoring dérive des données et calibration des modèles.
- Gouvernance et conformité (auditabilité, explicabilité).

## Exemples futurs
- Prédiction de zones à risque par coactivité.
- Risque de retard actions CAPA.
- Probabilité incident critique 7/30 jours.
- Conformité prévisionnelle ISO par site.
- Alertes préventives avant rupture de contrôle.
