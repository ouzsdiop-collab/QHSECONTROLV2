# Data Model Draft (conceptuel)

## Entités cœur
- Company
- User
- Role
- Subscription
- ModuleActivation
- RegulatoryPack

## Entités opérationnelles QHSE
- IncidentReport
- Hazard
- NearMiss
- ActionPlan
- RiskMatrix
- Audit
- Finding
- Evidence

## Entités import/export
- ImportJob
- ImportFile
- ImportSuggestion
- ImportValidation
- ExportJob
- ReportTemplate
- ReportDocument

## Statuts imports
- `draft` (brouillon)
- `to_review` (à vérifier)
- `validated` (validé)
- `rejected` (rejeté)
- `merged` (fusionné)
