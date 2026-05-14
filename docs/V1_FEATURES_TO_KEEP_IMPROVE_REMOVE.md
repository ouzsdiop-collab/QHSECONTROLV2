# V1 — Features à garder / améliorer / supprimer-remplacer

## À garder
- Couverture métier large : risques, incidents, actions, audits, conformité.
- Modèle backend en couches (routes/controllers/services/validation).
- Orientation multi-tenant (admin, utilisateurs, sites, rôles).
- Capacités import/export/reporting déjà pensées métier.

## À améliorer
- Dashboard : simplifier l’UX et séparer les responsabilités techniques.
- Modules ISO/réglementaire : meilleure explicabilité et gouvernance de preuve.
- Imports Excel/PDF : pipeline robuste avec validation humaine systématique.
- PDF reporting : standardiser templates “cabinet-grade”.
- Mode Terrain : réduire les frictions de saisie mobile et préparer offline.

## À supprimer ou remplacer
- Fichiers front monolithiques et styles surdimensionnés.
- Duplications de composants/dashboard.
- Toute logique de déploiement/config V1 non conforme au cadre V2 actuel.
- Couplages forts qui empêchent testabilité et modularité.
