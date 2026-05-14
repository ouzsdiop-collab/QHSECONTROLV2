# Field Offline Mode Strategy — QHSE Control V2

## 1) Positionnement
Le mode Terrain est une **interface mobile simplifiée à haute valeur opérationnelle**, pas une version dégradée. Son objectif est d’augmenter la vitesse de remontée, la qualité des preuves, et la continuité d’activité même sans réseau.

## 2) Cas d’usage critiques (MVP)
Le mode Terrain doit permettre en priorité :
- déclaration rapide d’un incident ;
- déclaration d’un presque accident ;
- déclaration d’un danger observé ;
- création d’une action immédiate ;
- ajout de photos ;
- ajout de signature ;
- ajout de commentaire vocal ou texte court (voix potentiellement en phase ultérieure) ;
- scan QR code pour accès rapide à FDS/consigne/équipement/zone/action ;
- consultation rapide des consignes essentielles ;
- consultation rapide des FDS utiles ;
- consultation des actions assignées ;
- consultation des alertes critiques.

## 3) UX mobile-first
- Navigation simple, gros boutons, lisibilité forte.
- Saisie orientée “moins de 60 secondes” pour une déclaration critique.
- Flux guidés courts : signaler -> prouver -> confirmer.
- Limiter fortement le nombre de champs obligatoires au moment terrain.

## 4) Stratégie offline-compatible
Le mode Terrain doit fonctionner en réseau dégradé ou hors-ligne :
- enregistrement local des déclarations ;
- mise en attente locale des médias (photos/signatures) ;
- statut local des actions terrain ;
- synchronisation automatique au retour réseau ;
- visibilité claire des états de synchro ;
- aucun utilisateur ne doit perdre une déclaration pour cause de connexion.

## 5) Statuts offline
- `local_draft`
- `pending_sync`
- `syncing`
- `synced`
- `sync_failed`
- `conflict_review`

## 6) Règles fonctionnelles offline
1. Une donnée terrain offline n’est pas perdue.
2. Une donnée synchronisée peut ensuite passer en validation humaine si nécessaire.
3. Les médias lourds peuvent être synchronisés séparément du payload principal.
4. Le offline MVP est limité aux flux critiques terrain.
5. Les modules experts complets ne sont pas offline au MVP.

## 7) Conflits de synchronisation
- Détection de conflits à la remontée serveur.
- Marquage explicite `conflict_review`.
- Résolution guidée côté responsable QHSE/Admin (fusion, rejet, correction).
- Journalisation des conflits et décisions.

## 8) Supervision admin/responsable QHSE
- Vue des synchronisations en erreur et en attente.
- Priorisation des items bloqués critiques.
- Traçabilité des tentatives de sync et causes d’échec.

## 9) Compatibilité future PWA
- Prévoir dès l’architecture des mécanismes de cache local et file de synchronisation.
- Le MVP implémente le minimum critique, puis enrichissement progressif vers offline plus large.

## 10) Critères de réussite
- Déclaration critique possible en < 60 sec sur mobile.
- Zéro perte de donnée terrain en coupure réseau.
- État de synchronisation visible et compréhensible par l’utilisateur.
- Conflits traitables par workflow clair côté supervision.
