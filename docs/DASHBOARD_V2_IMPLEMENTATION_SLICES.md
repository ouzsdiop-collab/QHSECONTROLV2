# DASHBOARD V2 — Implementation Slices (Codex)

Objectif : découper l’implémentation en incréments courts, testables et alignés avec la spécification UX.

## Contraintes transverses à tous les slices
- Ne pas modifier `/reference`.
- Ne pas ajouter de dépendance.
- Ne pas configurer de déploiement.
- Ne pas stocker de données métier en localStorage.
- Dashboard = résumé/décision/action ; modules = traitement complet.
- Textes longs et détails analytiques en drawers.

---

## Slice 1 — Hero Cockpit + Score QHSE
- **Fichiers concernés**
  - `app/frontend` : page dashboard, layout principal, blocs A/B.
  - éventuels services frontend existants de récupération des données synthétiques.
- **Objectif**
  - Mettre en place le premier niveau de lecture : statut global + score explicable.
- **Limites**
  - Pas d’analyse avancée multi-domaines complète.
  - Pas de recalcul métier complexe dans le frontend.
- **Critères d’acceptation**
  - A et B visibles sans scroll desktop.
  - Score accompagné d’au moins 3 facteurs explicatifs visibles/ouvrables.
  - État vide et état critique définis et rendus.
- **Ne pas modifier**
  - Modules métier incidents/actions/risques/compliance.
  - Backend structurel hors contrats API existants.

## Slice 2 — À traiter maintenant
- **Fichiers concernés**
  - `app/frontend` : section C, logique de priorisation UI, interactions de base.
- **Objectif**
  - Créer la liste prioritaire actionnable immédiate.
- **Limites**
  - Maximum strict 5 items.
  - Pas de logique de workflow complet (assignation complexe dans module).
- **Critères d’acceptation**
  - Liste ordonnée par criticité/échéance.
  - CTA d’action rapide visibles.
  - Ouverture d’un drawer de détail par item.
- **Ne pas modifier**
  - Mécanismes d’orchestration métiers profonds.

## Slice 3 — KPI critiques
- **Fichiers concernés**
  - `app/frontend` : section D, composants KPI, mapping statuts.
- **Objectif**
  - Afficher jusqu’à 6 KPI critiques avec seuils lisibles.
- **Limites**
  - Pas de visualisations lourdes.
  - Pas de duplication des écrans de modules.
- **Critères d’acceptation**
  - Max 6 KPI sur desktop.
  - Clic KPI ouvre détail filtré.
  - États critique/vigilance/maîtrisé cohérents en clair/sombre.
- **Ne pas modifier**
  - Modèles de données backend des modules KPI sources.

## Slice 4 — Actions rapides compactes
- **Fichiers concernés**
  - `app/frontend` : section E, routage vers modules.
- **Objectif**
  - Ajouter raccourcis utiles compacts orientés exécution.
- **Limites**
  - Pas de reconstruction des formulaires module dans dashboard.
- **Critères d’acceptation**
  - 4 à 6 raccourcis selon mode.
  - Navigation fiable vers modules dédiés.
- **Ne pas modifier**
  - Implémentation interne des modules cibles.

## Slice 5 — Dérives + décisions
- **Fichiers concernés**
  - `app/frontend` : sections F et G, cartes signal/recommandation.
- **Objectif**
  - Afficher dérives principales et décisions recommandées actionnables.
- **Limites**
  - IA prédictive future non couplée directement à l’UI d’exécution.
- **Critères d’acceptation**
  - 3 dérives max + 3 décisions max.
  - Chaque décision contient rationnel court + action.
  - Validation humaine explicite avant action structurante.
- **Ne pas modifier**
  - Pipelines IA/ML futurs (si présents en stub).

## Slice 6 — Analyse complémentaire
- **Fichiers concernés**
  - `app/frontend` : section H, widgets tendances/typologies/statuts.
- **Objectif**
  - Apporter un niveau d’analyse secondaire compact.
- **Limites**
  - Pas de rapport complet dans le dashboard.
- **Critères d’acceptation**
  - 1–3 widgets selon mode Essentiel/Expert.
  - Drill-down vers drawers ou modules d’analyse.
- **Ne pas modifier**
  - Génération de rapports PDF et pipelines export.

## Slice 7 — ISO / SMI aperçu
- **Fichiers concernés**
  - `app/frontend` : section I, indicateurs conformité/SMI.
- **Objectif**
  - Donner l’état macro conformité ISO et SMI.
- **Limites**
  - Pas d’édition de référentiel complet depuis dashboard.
- **Critères d’acceptation**
  - Indicateurs clairs : score, preuves attendues, contrôles suggérés.
  - Redirection vers module conformité/SMI pour traitement complet.
- **Ne pas modifier**
  - Moteur d’évaluation conformité backend.

## Slice 8 — Pilotage étendu + activité récente
- **Fichiers concernés**
  - `app/frontend` : sections J et K.
- **Objectif**
  - Couvrir domaines étendus + traçabilité récente.
- **Limites**
  - Pas d’historique exhaustif visible en carte.
- **Critères d’acceptation**
  - J : 4 domaines synthétiques max.
  - K : timeline concise (5 à 8 événements selon mode).
- **Ne pas modifier**
  - Journaux backend et structures d’audit trail existantes.

## Slice 9 — Drawers de détail
- **Fichiers concernés**
  - `app/frontend` : infrastructure drawer partagée + contenu contextualisé A→K.
- **Objectif**
  - Uniformiser le patron de détail filtré.
- **Limites**
  - Un seul drawer ouvert à la fois.
  - Aucun traitement complet métier dans drawer.
- **Critères d’acceptation**
  - En-tête contexte + liste filtrée + CTA module.
  - Comportement cohérent desktop/mobile.
- **Ne pas modifier**
  - Navigation globale applicative hors interactions dashboard.

## Slice 10 — Responsive/mobile polish
- **Fichiers concernés**
  - `app/frontend` : responsive dashboard complet, thème clair/sombre.
- **Objectif**
  - Garantir lisibilité et actionnabilité mobile sans perte des priorités.
- **Limites**
  - Pas de refonte visuelle globale du design system hors dashboard.
- **Critères d’acceptation**
  - Ordre mobile respecté : A → C → D → G → F → B → E → H → I → J → K.
  - Drawers plein écran mobile.
  - Contraste conforme en clair/sombre sur états critiques.
- **Ne pas modifier**
  - Tokens globaux non nécessaires au dashboard.

---

## Résumé des décisions UX à préserver pendant l’implémentation
1. Le premier écran desktop doit être utile sans scroll.
2. “À traiter maintenant” est plafonné à 5 items.
3. “KPI critiques” est plafonné à 6 KPI.
4. Tout détail long bascule en drawer ; tout traitement profond bascule en module.
5. Essentiel et Expert partagent la même architecture, seule la profondeur varie.
6. Données métier via services/API remplaçables ; localStorage réservé aux préférences UI non sensibles.
