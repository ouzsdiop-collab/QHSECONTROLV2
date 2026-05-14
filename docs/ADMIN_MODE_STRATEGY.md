# Stratégie Administration — séparation plateforme vs entreprise

## Principe clé
QHSE Control V2 distingue **2 niveaux d’administration** :

1. **Console Plateforme** (Super Admin QHSE Control uniquement)
2. **Paramètres entreprise** (Admin entreprise cliente)

Cette séparation évite toute confusion fonctionnelle et de sécurité entre gouvernance SaaS globale et administration d’un compte client.

## 1) Console Plateforme (Back-office Plateforme)
Visible uniquement pour les rôles plateforme (`platform_owner`, `platform_admin`).
Ne doit pas apparaître dans la navigation standard client.

Capacités placeholder attendues :
- gestion entreprises clientes ;
- abonnements ;
- modules activés ;
- packs réglementaires ;
- logs globaux ;
- support ;
- erreurs globales ;
- modèles PDF ;
- supervision SaaS.

## 2) Paramètres entreprise (Administration entreprise)
Visible uniquement pour les administrateurs du compte client (`company_owner`, `company_admin`).
Nom côté client : **Paramètres entreprise**.

Capacités placeholder attendues :
- utilisateurs de l’entreprise ;
- rôles internes ;
- sites ;
- services ;
- logo entreprise ;
- modules activés pour le compte ;
- objectifs ISO ;
- packs réglementaires du compte ;
- préférences rapports PDF ;
- notifications ;
- imports/exports de l’entreprise.

## Règles d’implémentation V2 (phase structure)
- Pas d’auth complète ni RBAC final à ce stade.
- Prévoir les rôles partagés et les points d’extension pour brancher l’auth ultérieurement.
- Afficher des placeholders fonctionnels, sans logique métier réelle.
