# Stratégie Import Excel/PDF

## Objectifs
- Imports robustes et traçables.
- Détection de documents : DUERP, FDS, audits, plans d’action, registres incidents, tableaux de risques.
- Extraction structurée et mapping intelligent.

## Pipeline cible
1. Ingestion fichier.
2. Classification type documentaire.
3. Extraction champs/sections.
4. Mapping vers modèle interne.
5. Pré-remplissage des formulaires métiers.
6. Validation humaine obligatoire.
7. Fusion contrôlée dans les entités métier.

## Gouvernance qualité
- Aucune création définitive sans validation humaine.
- Journalisation des suggestions automatiques.
- Historique des corrections utilisateur.

## Statuts de traitement
- brouillon
- à vérifier
- validé
- rejeté
- fusionné
