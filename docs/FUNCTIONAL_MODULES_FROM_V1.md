# Modules fonctionnels détectés dans V1

> Source : analyse documentaire du code extrait V1 (lecture seule).

## Dashboard
- **Objectif** : pilotage KPI, alertes, priorités et vue décisionnelle.
- **Fichiers V1** : `src/pages/dashboard.js`, `src/components/dashboard*.js`, `backend/src/controllers/dashboard.controller.js`.
- **Fonctions principales** : agrégation KPI, graphiques, alertes/priorités, cockpit.
- **Valeur métier** : pilotage quotidien QHSE.
- **Priorité V2** : **critique**.

## Risques
- **Objectif** : registre risques, matrice criticité, suivi mitigation.
- **Fichiers V1** : `src/pages/risks.js`, `src/components/risk*.js`, `backend/src/routes/risks.routes.js`, `backend/src/services/risks.service.js`.
- **Fonctions principales** : CRUD risques, analyse/statistiques, liens incidents.
- **Valeur métier** : coeur prévention.
- **Priorité V2** : **critique**.

## DUERP (présence indirecte)
- **Objectif** : structuration risques/situations de travail et plans d’action.
- **Fichiers V1** : modules risques/actions + imports (`backend/src/routes/imports.routes.js`).
- **Fonctions principales** : usage probable via matrice risques/actions/import.
- **Valeur métier** : conformité légale FR/équivalent méthodologique.
- **Priorité V2** : **critique** (module dédié à clarifier explicitement).

## Incidents
- **Objectif** : déclaration, qualification, suivi incidents/presqu’accidents.
- **Fichiers V1** : `src/pages/incidents.js`, `src/components/incident*.js`, `backend/src/routes/incidents.routes.js`.
- **Fonctions principales** : saisie, analyse, workflows, liaisons actions.
- **Valeur métier** : réduction sinistralité.
- **Priorité V2** : **critique**.

## Audits
- **Objectif** : gestion audits, constats, écarts, preuves.
- **Fichiers V1** : `src/pages/audits.js`, `backend/src/routes/audits.routes.js`, `backend/src/services/audits.service.js`.
- **Fonctions principales** : cycle d’audit, scoring, narration.
- **Valeur métier** : préparation ISO et amélioration continue.
- **Priorité V2** : **critique**.

## Actions
- **Objectif** : planifier/corriger/prioriser actions QHSE.
- **Fichiers V1** : `src/pages/actions.js`, `src/components/action*.js`, `backend/src/routes/actions.routes.js`.
- **Fonctions principales** : création, kanban, échéances, suivi exécution.
- **Valeur métier** : exécution opérationnelle.
- **Priorité V2** : **critique**.

## Documents
- **Objectif** : registre documentaire contrôlé.
- **Fichiers V1** : `backend/src/routes/controlledDocuments.routes.js`, `backend/src/controllers/controlledDocuments.controller.js`.
- **Fonctions principales** : gestion documents contrôlés, conformité documentaire.
- **Valeur métier** : traçabilité qualité.
- **Priorité V2** : **important**.

## FDS / Produits chimiques
- **Objectif** : parser et exploiter des FDS.
- **Fichiers V1** : `backend/src/routes/fdsParser.routes.js`, `backend/src/services/fdsParser.service.js`, `src/pages/products.js`.
- **Fonctions principales** : extraction PDF FDS, exposition données produits.
- **Valeur métier** : sécurité chimique.
- **Priorité V2** : **important**.

## Utilisateurs
- **Objectif** : gestion comptes/profils/rôles.
- **Fichiers V1** : `src/services/users.service.js`, `backend/src/routes/users.routes.js`, `backend/src/routes/auth.routes.js`.
- **Fonctions principales** : auth, profil, rôles, habilitations.
- **Valeur métier** : contrôle d’accès et adoption.
- **Priorité V2** : **critique**.

## Entreprises
- **Objectif** : gestion tenants/clients SaaS.
- **Fichiers V1** : `backend/src/routes/admin.routes.js`, scripts admin Prisma.
- **Fonctions principales** : administration multi-entreprises, paramètres.
- **Valeur métier** : modèle SaaS B2B.
- **Priorité V2** : **critique**.

## Sites
- **Objectif** : segmentation multi-sites opérationnels.
- **Fichiers V1** : `src/pages/sites.js`, `backend/src/routes/sites.routes.js`, `src/services/sitesCatalog.service.js`.
- **Fonctions principales** : référentiel sites, filtres par site.
- **Valeur métier** : pilotage terrain distribué.
- **Priorité V2** : **important**.

## Reporting
- **Objectif** : synthèses KPI et restitution direction.
- **Fichiers V1** : `backend/src/routes/reporting.routes.js`, `backend/src/controllers/reporting.controller.js`.
- **Fonctions principales** : consolidation et synthèses périodiques.
- **Valeur métier** : gouvernance et décision.
- **Priorité V2** : **critique**.

## PDF
- **Objectif** : génération de rapports documentaires.
- **Fichiers V1** : `src/components/auditPremiumSaaS.pdf.js`, `src/services/qhseReportsPdf.service.js`, `backend/src/services/report.service.js`.
- **Fonctions principales** : exports PDF audits/rapports.
- **Valeur métier** : livrables clients/audits.
- **Priorité V2** : **critique**.

## Excel
- **Objectif** : import/export tableaux métiers.
- **Fichiers V1** : `backend/src/routes/imports.routes.js`, `backend/src/routes/export.routes.js`, dépendance `xlsx`.
- **Fonctions principales** : ingestion/export structurés.
- **Valeur métier** : intégration existant client.
- **Priorité V2** : **critique**.

## Notifications
- **Objectif** : informer des alertes et événements clés.
- **Fichiers V1** : `src/stores/notifications.js`, `src/components/notifications*.js`, `backend/src/routes/notifications.routes.js`.
- **Fonctions principales** : flux notifications UI/API.
- **Valeur métier** : réactivité opérationnelle.
- **Priorité V2** : **important**.

## Admin
- **Objectif** : administration SaaS et supervision.
- **Fichiers V1** : `src/pages/saas-clients.js`, `backend/src/controllers/admin.controller.js`, `backend/src/routes/admin.routes.js`.
- **Fonctions principales** : clients, supervision, opérations admin.
- **Valeur métier** : scalabilité SaaS.
- **Priorité V2** : **critique**.

## Autres modules détectés
- **PTW / Permits** : `src/pages/permits.js`, `backend/src/routes/ptw.routes.js` (important).
- **Conformité/ISO/SMI** : `src/pages/iso.js`, `backend/src/routes/conformity.routes.js`, `backend/src/routes/iso.routes.js`, `backend/src/routes/smi.routes.js` (critique).
- **Habilitations** : `src/pages/habilitations.js`, `backend/src/routes/habilitations.routes.js` (important).
- **Automation périodique** : `backend/src/automationScheduler.js`, `periodicReporting.service.js` (secondaire à important selon offre).
