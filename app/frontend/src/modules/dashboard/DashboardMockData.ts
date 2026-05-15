import { DashboardData } from './DashboardTypes';

export const dashboardMockData: DashboardData = {
  score: {
    value: 40,
    level: 'Action urgente',
    trend: '↘ -8 pts vs période précédente',
    situation: 'action_urgente',
    explanationEssential: 'Votre situation demande une action rapide car plusieurs actions critiques sont en retard.',
    explanationExpert: 'Le score est pénalisé par les actions échues, les NC ouvertes sans preuve et les incidents critiques non analysés.',
    factors: [
      { label: '19 actions en retard' },
      { label: '5 incidents critiques' },
      { label: '4 NC ouvertes' },
    ],
  },
  periods: ['30 derniers jours', 'Trimestre en cours', '6 derniers mois'],
  sites: ['Tous les sites', 'Lille - Logistique', 'Nantes - Production', 'Lyon - HQ'],
  services: ['Tous les services', 'Exploitation', 'Maintenance', 'QHSE central'],
  kpis: [
    { id: 'inc', title: 'Incidents critiques', value: 2, description: 'Événements à risque élevé non clos', trend: '+1 vs mois dernier', trendDirection: 'up', status: 'Urgent', severity: 'danger', recommendedAction: 'Déployer une enquête terrain immédiate', whyImportant: 'Impact sécurité humaine et arrêt possible.', source: 'Registre incidents mock', impactedItems: ['Engin/circulation - Lille', 'Chimique mineur - Nantes'] },
    { id: 'act', title: 'Actions en retard', value: 11, description: 'Actions CAPA dépassant l’échéance', trend: '+3 en 2 semaines', trendDirection: 'up', status: 'Sous tension', severity: 'warning', recommendedAction: 'Arbitrer et replanifier sous 48h', whyImportant: 'Risque de récidive et dérive conformité.', source: 'Plan d’actions mock', impactedItems: ['7 > 30 jours', '4 sans propriétaire actif'] },
    { id: 'nc', title: 'NC ouvertes', value: 9, description: 'Non-conformités actives à traiter', trend: 'Stable', trendDirection: 'flat', status: 'Vigilance', severity: 'warning', recommendedAction: 'Lancer revue locale NC', whyImportant: 'Bloque les audits et la preuve de maîtrise.', source: 'Workflow NC mock', impactedItems: ['5 sans preuve associée', '2 majeures'] },
    { id: 'risk', title: 'Risques critiques', value: 6, description: 'Risques cotés critiques dans la matrice', trend: '-1 sur 30 jours', trendDirection: 'down', status: 'À contenir', severity: 'danger', recommendedAction: 'Ouvrir matrice et vérifier barrières', whyImportant: 'Menace directe sur la continuité opérationnelle.', source: 'Matrice des risques mock', impactedItems: ['Circulation interne', 'Coactivité sous-traitants'] },
    { id: 'fds', title: 'FDS à réviser', value: 14, description: 'Fiches de données sécurité arrivant à échéance', trend: '+4 ce mois', trendDirection: 'up', status: 'Planifier', severity: 'warning', recommendedAction: 'Lancer campagne de mise à jour FDS', whyImportant: 'Conformité réglementaire et sécurité chimique.', source: 'Référentiel documentaire mock', impactedItems: ['8 en maintenance', '6 en exploitation'] },
    { id: 'audit', title: 'Audits à planifier', value: 4, description: 'Audits internes ISO non planifiés', trend: 'Stable', trendDirection: 'flat', status: 'À cadrer', severity: 'info', recommendedAction: 'Planifier ISO 45001 ciblé site Lille', whyImportant: 'Conditionne l’audit readiness global.', source: 'Planification audit mock', impactedItems: ['ISO 45001', 'ISO 14001'] },
  ],

  heroMetrics: [
    { id: 'inc_critical', label: 'Incidents critiques', value: 2, status: 'Urgent', tone: 'danger' },
    { id: 'actions_late', label: 'Actions en retard', value: 11, status: 'Sous tension', tone: 'warning' },
    { id: 'nc_open', label: 'NC ouvertes', value: 9, status: 'Vigilance', tone: 'warning' },
    { id: 'iso_missing', label: 'Preuves ISO manquantes', value: 6, status: 'À compléter', tone: 'info' },
  ],
  priorities: [
    { id: 'p1', type: 'Incident', title: 'Collision engin/piéton évitée de justesse', site: 'Lille - Logistique', service: 'Exploitation', severity: 'danger', ageOrDue: 'Il y a 4h', sourceModule: 'Incidents', actionLabel: 'Ouvrir' },
    { id: 'p2', type: 'Action', title: 'Arbitrer et replanifier CAPA-21', site: 'Nantes - Production', service: 'QHSE central', severity: 'warning', ageOrDue: 'Retard de 17 jours', sourceModule: 'Plan d’actions', actionLabel: 'Ouvrir' },
    { id: 'p3', type: 'NC', title: 'NC-87 sans preuve associée', site: 'Lyon - HQ', service: 'QHSE central', severity: 'warning', ageOrDue: 'Ouverte depuis 28 jours', sourceModule: 'Non-conformités', actionLabel: 'Ouvrir' },
    { id: 'p4', type: 'FDS', title: 'Réviser solvants atelier A3', site: 'Nantes - Production', service: 'Maintenance', severity: 'warning', ageOrDue: 'Échéance dans 3 jours', sourceModule: 'Documents', actionLabel: 'Ouvrir' },
    { id: 'p5', type: 'Audit', title: 'Planifier audit ISO 45001 ciblé', site: 'Lille - Logistique', service: 'Exploitation', severity: 'info', ageOrDue: 'Avant le 28 mai', sourceModule: 'Audits', actionLabel: 'Ouvrir' },
  ],
  insights: [
    { id: 'i1', kind: 'derive', explanation: 'NC ouvertes concentrées sur Lille (+40% en 6 semaines).', confidence: 'Élevée (88%)', source: 'Croisement NC/site', recommendedAction: 'Initier revue locale avec responsables de service.' },
    { id: 'i2', kind: 'tendance', explanation: 'File d’actions qui vieillit : hausse des actions > 30 jours.', confidence: 'Moyenne (74%)', source: 'Historique plan d’actions', recommendedAction: 'Arbitrer les actions critiques et fermer les doublons.' },
    { id: 'i3', kind: 'anomalie', explanation: 'Scores audit en baisse sur processus maintenance.', confidence: 'Moyenne (71%)', source: 'Comparatif audits internes', recommendedAction: 'Planifier audit ciblé et coaching terrain.' },
  ],
  decisions: [
    { id: 'd1', title: 'Arbitrer les actions critiques', impact: 'Réduction du risque immédiat', delay: '24-48h', owner: 'Responsable QHSE' },
    { id: 'd2', title: 'Lancer revue locale NC', impact: 'Accélère la clôture preuves', delay: 'Cette semaine', owner: 'Manager de site' },
    { id: 'd3', title: 'Planifier audit ciblé', impact: 'Stabilise la conformité ISO 45001', delay: 'Sous 10 jours', owner: 'Auditeur interne' },
  ],
  incidentTrend6m: [4, 5, 7, 6, 5, 8],
  workload: { incidents: 18, actions: 47, nc: 21 },
  severitySplit: [{ label: 'Critique', value: 8 }, { label: 'Élevée', value: 19 }, { label: 'Moyenne', value: 23 }, { label: 'Faible', value: 12 }],
  actionStatus: [{ label: 'À faire', value: 16 }, { label: 'En cours', value: 20 }, { label: 'Bloquée', value: 7 }, { label: 'Terminée', value: 22 }],
  isoOverview: [
    { standard: 'ISO 45001', readiness: 73, missingEvidence: 3, suggestedControl: 'Vérifier preuves exercices d’urgence' },
    { standard: 'ISO 14001', readiness: 81, missingEvidence: 2, suggestedControl: 'Mettre à jour analyse aspects/impacts' },
    { standard: 'ISO 9001', readiness: 85, missingEvidence: 1, suggestedControl: 'Contrôler enregistrements de formation' },
  ],
  extendedIndicators: [
    { label: 'Habilitations expirées', value: '12', status: 'À renouveler' },
    { label: 'Sous-traitants à évaluer', value: '5', status: 'Vigilance' },
    { label: 'Permis actifs', value: '31', status: 'Sous contrôle' },
    { label: 'Conformité multi-sites', value: '79%', status: 'Progression attendue' },
  ],
  recentActivity: ['Incident #INC-502 déclaré il y a 2h', 'Action CAPA-21 réassignée', 'Audit interne maintenance clôturé', 'Synchronisation terrain effectuée il y a 18 min'],
};
