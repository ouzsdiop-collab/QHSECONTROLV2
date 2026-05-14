# DASHBOARD V1 → V2 Coverage Matrix

Objectif : garantir que la valeur métier du dashboard V1 est préservée, rationalisée et mieux hiérarchisée dans V2.

## Légende destination V2
- **Premier écran** : visible sans scroll desktop.
- **Section secondaire** : sous la ligne de flottaison du dashboard.
- **Drawer** : détail filtré contextuel.
- **Module dédié** : traitement complet hors dashboard.
- **Futur lot** : non bloquant pour la stabilisation UX V2 actuelle.

## Matrice

| Élément V1 | Valeur métier | Destination V2 | Priorité | Décision | Justification |
|---|---|---|---|---|---|
| Cockpit QHSE | Vision macro instantanée | Premier écran (A) + Drawer | P0 | Conserver et compacter | Cœur de lecture en 5 secondes, indispensable à l’adoption. |
| Score QHSE | Mesure synthétique de performance | Premier écran (B) + Drawer explicatif | P0 | Conserver, rendre explicable | Un score non explicable perd sa crédibilité managériale. |
| À traiter immédiatement | Pilotage du court terme | Premier écran (C) + Drawer | P0 | Conserver strictement | Aligne l’action quotidienne ; limité à 5 items pour focus. |
| Raccourcis utiles | Réduction du temps d’accès | Premier écran (E) | P1 | Conserver en version compacte | Doit accélérer l’exécution sans polluer le cockpit. |
| Incidents critiques | Gestion du risque immédiat | Premier écran (D KPI) + Module incidents | P0 | Conserver | KPI critique direct, traitement complet dans module. |
| Actions en retard | Discipline d’exécution | Premier écran (D KPI) + Drawer + Module actions | P0 | Conserver | Signal de dérive opérationnelle majeur. |
| NC ouvertes | Qualité et conformité | Premier écran (D KPI) + Module NC | P0 | Conserver | Indicateur fondamental qualité/SMI. |
| Risques critiques | Prévention et maîtrise | Premier écran (D KPI) + Module risques | P0 | Conserver | Priorité réglementaire et opérationnelle. |
| FDS à réviser | Conformité sécurité chimique | Premier écran (D KPI) ou J selon criticité | P1 | Conserver avec seuils | Monte en premier écran uniquement si seuil critique. |
| Audits | Assurance conformité | Section secondaire (J) + Module audits | P1 | Conserver hors top fold | Important mais pas toujours urgent minute. |
| Habilitations | Maîtrise des compétences autorisées | Section secondaire (J) + KPI critique si expirations massives | P1 | Conserver contextualisé | Remonte en critique uniquement selon seuil d’expiration. |
| Sous-traitants | Maîtrise des tiers | Section secondaire (J) + Module dédié | P1 | Conserver | Pilotage étendu pertinent hors surcharge du premier écran. |
| Permis | Sécurité opérationnelle terrain | Section secondaire (J) + Module permis | P1 | Conserver | Domaine opérationnel clé mais traitement complet en module. |
| Dérives et recommandations | Anticipation et arbitrage | Premier écran (F + G) + Drawers | P0 | Renforcer | Différenciateur fort V2 : signal + décision actionnable. |
| Détection d’anomalies | Identification signaux faibles | Section secondaire (H) + Drawer | P2 | Intégrer progressivement | Valeur élevée, maturité data variable selon contextes. |
| Executive summary | Lecture managériale rapide | Premier écran (A synthèse) + Drawer | P1 | Conserver en version concise | Doit rester court, le détail bascule en drawer. |
| Lecture assistée | Aide à l’interprétation | Section secondaire (H) | P2 | Conserver en support | Utile, mais priorité après stabilisation du noyau action. |
| Pilotage essentiel | Vue exécution | Mode Essentiel transverse (A→K) | P0 | Structurer explicitement | Nécessaire pour adoption large terrain/management intermédiaire. |
| Pilotage expert | Vue diagnostic | Mode Expert transverse (A→K) | P0 | Structurer explicitement | Nécessaire pour analystes et responsables multi-sites. |
| Tendances incidents | Vision temporelle | Section secondaire (H) + Drawer | P1 | Conserver | Analyse secondaire, pas blocage de décision immédiate. |
| Typologies | Compréhension des causes | Section secondaire (H) | P2 | Conserver en analytique | Forte utilité experte, moindre priorité opérationnelle. |
| Statuts actions | Suivi d’avancement | Section secondaire (H) + Module actions | P1 | Conserver | Complète KPI “actions en retard”. |
| Conformité ISO | Pilotage référentiels | Section secondaire (I) + Drawer + Module conformité | P0 | Conserver clairement | Exigence de gouvernance et auditabilité. |
| SMI overview | Vision système intégré | Section secondaire (I) | P1 | Conserver | Complète ISO avec lecture consolidée management. |
| Preuves attendues | Préparation audits | Section secondaire (I) + Drawer | P1 | Conserver | Actionnable dans horizon court/moyen terme. |
| Contrôles suggérés | Prévention proactive | Section secondaire (I/H) | P2 | Conserver guidé | À présenter comme suggestion, non injonction automatique. |
| Questions d’audit | Préparation terrain | Drawer depuis I + Module audits | P2 | Conserver en drawer | Détail textuel, ne doit pas alourdir le dashboard. |
| Décisions recommandées | Passage insight → action | Premier écran (G) + Drawer | P0 | Renforcer avec validation humaine | Élément central de valeur managériale de V2. |
| Pilotage opérationnel étendu | Couverture périphérie critique | Section secondaire (J) | P1 | Conserver en bloc dédié | Évite de surcharger le premier écran tout en gardant la couverture. |
| Matrice risques | Visualisation priorisation risques | Module dédié risques + entrée depuis D/J | P1 | Ne pas reconstruire dans dashboard | Le dashboard référence, le module traite en profondeur. |

## Décisions UX structurantes (synthèse)
1. Le premier écran concentre uniquement ce qui doit déclencher une décision immédiate (A→G).
2. Toute profondeur analytique et textuelle va en drawer ou module dédié.
3. Les modules existants restent les lieux de traitement complet (dashboard non redondant).
4. Le mode Essentiel/Expert est transverse ; on ne duplique pas deux dashboards.
5. Les éléments V1 conservés sont reclassés par urgence et valeur décisionnelle, pas par héritage historique.
