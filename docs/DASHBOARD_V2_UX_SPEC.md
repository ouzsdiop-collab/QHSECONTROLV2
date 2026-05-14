# DASHBOARD V2 — UX Specification

## 1) Objectif du dashboard
Le dashboard V2 est un **cockpit de pilotage quotidien** orienté décision et action.
Il doit délivrer en un seul écran desktop :
- le niveau global de maîtrise QHSE ;
- les priorités immédiates ;
- les signaux de dérive ;
- les décisions recommandées ;
- les points d’accès rapides vers les modules de traitement.

Principe cardinal : **Dashboard = résumé + décision + action**.
- Résumé : vision synthétique, compréhensible en < 60 secondes.
- Décision : arbitrage explicite (ce qui est critique maintenant).
- Action : redirection vers un module dédié pour traiter complètement.

## 2) Utilisateur cible
- **Utilisateur principal** : Responsable QHSE site / multi-sites.
- **Utilisateurs secondaires** : Direction d’exploitation, coordinateur HSE, manager opérationnel.
- **Contrainte d’usage** : consultation rapide entre deux opérations, avec besoin d’explication métier sans surcharge textuelle.

## 3) Différence Essentiel / Expert

### Mode Essentiel
- Vue épurée orientée exécution immédiate.
- Accent sur : priorités, urgences, KPIs principaux, actions rapides.
- Limite les options avancées et le détail analytique.

### Mode Expert
- Vue dense mais structurée orientée diagnostic et arbitrage.
- Ajoute : comparaisons temporelles, filtres avancés, signaux faibles, qualification des causes.
- Conserve la même structure globale pour éviter toute rupture cognitive.

## 4) Structure cible du premier écran (sans scroll desktop)
Grille desktop recommandée (12 colonnes) :
- Ligne 1 : **A. Hero Cockpit compact** (8 col) + **B. Score QHSE explicable** (4 col).
- Ligne 2 : **C. À traiter maintenant** (8 col) + **D. KPI critiques** (4 col).
- Ligne 3 : **E. Actions rapides compactes** (4 col) + **F. Dérives détectées** (4 col) + **G. Décisions recommandées** (4 col).

Contraintes :
- premier écran utile sans scroll sur desktop standard ;
- maximum 5 éléments dans “À traiter maintenant” ;
- maximum 6 KPI principaux.

## 5) Structure des sections secondaires (sous la ligne de flottaison)
- **H. Analyse complémentaire**
- **I. Conformité ISO / SMI aperçu**
- **J. Pilotage étendu**
- **K. Activité récente**

Ces sections complètent la lecture sans diluer le focus du premier écran.

## 6) Règles globales de densité
- 1 carte = 1 intention dominante.
- Maximum 2 niveaux de texte visibles par carte (titre + micro-explication).
- Textes longs, listes détaillées et verbatims → **drawer**.
- Limiter les badges de statut à 3 couleurs opérationnelles : critique, vigilance, maîtrisé.
- Nombre cible de cartes visibles au premier écran desktop : 7 blocs (A→G).

## 7) Règles globales de hiérarchie visuelle
- Niveau 1 : priorités actionnables (C, D, G).
- Niveau 2 : contexte décisionnel (A, B, F).
- Niveau 3 : navigation et extension (E, H, I, J, K).
- Les CTA principaux doivent être des verbes d’action (ex : “Traiter”, “Affecter”, “Ouvrir module”).
- Les états critiques utilisent contraste + icône + libellé (ne jamais dépendre uniquement de la couleur).

## 8) Règles de drawers
- **Drawer = détail filtré**, pas module complet.
- Ouverture depuis une carte par clic sur item, KPI ou lien “Voir détail”.
- Contenu d’un drawer :
  1) en-tête contexte (périmètre, filtre, période),
  2) liste/tabl e filtrée,
  3) CTA vers module dédié.
- Taille recommandée : 40–50% largeur desktop, plein écran mobile.
- Un seul drawer ouvert à la fois.

## 9) Règles de micro-interactions
- Hover : feedback léger (élévation/contour), sans animation longue.
- Clic KPI : filtre contextuel + ouverture drawer ciblé.
- Changement Essentiel/Expert : transition instantanée, sans rechargement perçu.
- Skeleton/loading : par bloc, pas spinner global plein écran.
- États d’erreur : message court + action de reprise (“Réessayer”).

## 10) Règles responsive mobile
- Priorité verticale : A → C → D → G → F → B → E → H → I → J → K.
- Les cartes multi-colonnes desktop passent en cartes empilées.
- KPI critiques en carrousel horizontal léger ou grille 2x3 max.
- Drawers en plein écran avec barre d’action fixe en bas.
- “À traiter maintenant” conserve strictement le max 5.

## 11) Règles mode clair/sombre
- Conserver les mêmes niveaux de contraste hiérarchiques.
- Les états Critique/Vigilance/Maîtrisé restent identifiables dans les deux modes.
- Éviter les aplats trop saturés ; privilégier surfaces neutres + accents statut.
- Les graphiques doivent utiliser palettes compatibles daltonisme et sombre.

---

## 12) Spécification section par section (A → K)

### A. Hero Cockpit compact
- **Rôle** : cadrer la situation QHSE globale en 5 secondes.
- **Contenu visible** : statut global, variation vs période précédente, 1 phrase de synthèse.
- **Contenu caché en drawer** : détails par site/périmètre, facteurs contributeurs.
- **Maximum d’items visibles** : 3 signaux clés.
- **Interactions** : clic sur signal → drawer filtré ; clic synthèse → executive summary détaillé.
- **État vide** : “Données insuffisantes pour établir le cockpit” + CTA paramétrer périmètre.
- **État critique** : bannière critique + recommandation prioritaire affichée.
- **Mode Essentiel** : uniquement statut global + 1 variation.
- **Mode Expert** : ajoute distribution par domaines (sécurité, qualité, environnement).

### B. Score QHSE explicable
- **Rôle** : rendre le score compréhensible et défendable.
- **Contenu visible** : score actuel, tendance courte, 3 principaux facteurs.
- **Contenu caché en drawer** : formule détaillée, pondérations, historique complet.
- **Maximum d’items visibles** : 3 facteurs explicatifs.
- **Interactions** : clic facteur → filtre transversal ; clic score → historique drawer.
- **État vide** : “Score en construction” + prérequis manquants.
- **État critique** : score sous seuil avec indicateur d’écart.
- **Mode Essentiel** : score + delta.
- **Mode Expert** : score + décomposition pondérée.

### C. À traiter maintenant
- **Rôle** : concentrer les priorités opérationnelles immédiates.
- **Contenu visible** : liste priorisée des éléments urgents.
- **Contenu caché en drawer** : détails de chaque item + propriétaire + échéance + blocages.
- **Maximum d’items visibles** : **5 (strict)**.
- **Interactions** : CTA rapide “Traiter”, “Affecter”, “Reporter motivé”.
- **État vide** : “Aucune action immédiate” (état maîtrisé).
- **État critique** : présence d’au moins un item P1 en retard.
- **Mode Essentiel** : top 3 à 5 uniquement.
- **Mode Expert** : même liste + score de criticité explicite.

### D. KPI critiques
- **Rôle** : suivre les métriques de risque court terme.
- **Contenu visible** : tuiles KPI (incidents critiques, actions en retard, NC ouvertes, risques critiques, FDS à réviser, audits/habilitations selon contexte).
- **Contenu caché en drawer** : définition KPI, périmètre, liste source.
- **Maximum d’items visibles** : **6 KPI max**.
- **Interactions** : clic tuile → drawer filtré ; tooltip de définition.
- **État vide** : KPI indisponible avec raison.
- **État critique** : KPI au-dessus du seuil rouge.
- **Mode Essentiel** : 4 KPI prioritaires.
- **Mode Expert** : jusqu’à 6 KPI + tendance mini sparkline.

### E. Actions rapides compactes
- **Rôle** : accès immédiat aux opérations fréquentes sans reconstruire les modules.
- **Contenu visible** : raccourcis utiles (ex : créer action, déclarer incident, ouvrir NC, planifier audit, vérifier habilitations).
- **Contenu caché en drawer** : aucun obligatoire ; sinon personnalisation des raccourcis UI.
- **Maximum d’items visibles** : 6 raccourcis.
- **Interactions** : clic = navigation directe module.
- **État vide** : fallback sur raccourcis par défaut.
- **État critique** : non applicable.
- **Mode Essentiel** : 4 raccourcis cœur.
- **Mode Expert** : 6 raccourcis incluant expertises.

### F. Dérives détectées
- **Rôle** : signaler les écarts émergents avant incident majeur.
- **Contenu visible** : 3 dérives principales (intensité + direction).
- **Contenu caché en drawer** : détail série temporelle, périmètre impacté, hypothèses causes.
- **Maximum d’items visibles** : 3 dérives.
- **Interactions** : clic dérive → drawer + lien vers analyse module.
- **État vide** : “Aucune dérive significative détectée”.
- **État critique** : dérive forte persistante multi-périodes.
- **Mode Essentiel** : signaux majeurs uniquement.
- **Mode Expert** : ajoute niveau de confiance et facteurs corrélés.

### G. Décisions recommandées
- **Rôle** : proposer les arbitrages à haute valeur managériale.
- **Contenu visible** : 3 recommandations classées par impact/urgence.
- **Contenu caché en drawer** : rationnel, hypothèses, impacts attendus, risques de non-action.
- **Maximum d’items visibles** : 3 décisions.
- **Interactions** : “Valider”, “Planifier”, “Assigner”, avec trace de validation humaine.
- **État vide** : “Aucune décision prioritaire aujourd’hui”.
- **État critique** : recommandation bloquante non traitée.
- **Mode Essentiel** : recommandations prêtes à exécuter.
- **Mode Expert** : inclut variantes et impacts comparés.

### H. Analyse complémentaire
- **Rôle** : apporter lecture assistée (tendances, typologies, statuts actions).
- **Contenu visible** : widgets synthétiques à faible hauteur.
- **Contenu caché en drawer** : breakdown détaillé par période, entité, catégorie.
- **Maximum d’items visibles** : 3 widgets.
- **Interactions** : filtres rapides période/type.
- **État vide** : message pédagogique.
- **État critique** : anomalies de qualité de données.
- **Mode Essentiel** : 1 à 2 widgets.
- **Mode Expert** : 3 widgets + segmentation avancée.

### I. Conformité ISO / SMI aperçu
- **Rôle** : donner l’état macro de conformité et du système de management intégré.
- **Contenu visible** : score conformité, preuves attendues manquantes, contrôles suggérés.
- **Contenu caché en drawer** : clauses/chapitres concernés, écarts et preuves associées.
- **Maximum d’items visibles** : 3 indicateurs.
- **Interactions** : clic indicateur → module conformité/SMI.
- **État vide** : “Aucun référentiel chargé”.
- **État critique** : non-conformité majeure ouverte.
- **Mode Essentiel** : état global + preuves critiques.
- **Mode Expert** : état par norme/référentiel.

### J. Pilotage étendu
- **Rôle** : couvrir sous-traitants, permis, habilitations, audits, FDS hors urgence immédiate.
- **Contenu visible** : résumé opérationnel étendu par domaines.
- **Contenu caché en drawer** : files d’attente détaillées par domaine.
- **Maximum d’items visibles** : 4 domaines synthétiques.
- **Interactions** : drill-down par domaine.
- **État vide** : “Aucun élément actif sur la période”.
- **État critique** : domaine en dépassement de seuil.
- **Mode Essentiel** : seulement domaines en vigilance/critique.
- **Mode Expert** : tous domaines + comparatifs.

### K. Activité récente
- **Rôle** : assurer traçabilité des événements récents et décisions prises.
- **Contenu visible** : timeline courte (créations, clôtures, validations).
- **Contenu caché en drawer** : journal étendu filtrable.
- **Maximum d’items visibles** : 8 événements.
- **Interactions** : clic événement → contexte ou module source.
- **État vide** : “Aucune activité récente”.
- **État critique** : activité anormale interrompue ou pic inattendu.
- **Mode Essentiel** : 5 événements clés.
- **Mode Expert** : 8 événements + filtres.

## 13) Règles d’architecture produit à respecter
- Les modules complets ne sont pas reconstruits dans le dashboard.
- Les textes longs vont en drawer.
- Données métier : via services/API remplaçables.
- Pas de localStorage pour la donnée métier.
- localStorage uniquement pour préférences UI non sensibles (ex : mode Essentiel/Expert, thème).
- IA prédictive future : composant séparé, recommandations validées humainement avant action.
