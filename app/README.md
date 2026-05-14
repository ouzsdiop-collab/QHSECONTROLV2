# QHSE Control V2 - App Workspace

Socle technique local (frontend + backend + shared) sans configuration de déploiement.

## Lancement local
1. `cd app`
2. `npm install`
3. `npm run dev`

Ou séparément :
- `npm run dev:frontend`
- `npm run dev:backend`
- `npm run dev:shared`

## Vérifications
- `npm run typecheck`
- `npm run build`

## Vérification locale recommandée
Si votre environnement CI/sandbox bloque le registry npm, lancez ces commandes sur votre machine :
1. `cd app && npm install`
2. `npm run typecheck`
3. `npm run build`
4. `npm run build -w @qhse/shared`
5. `npm run build -w @qhse/frontend`
6. `npm run build -w @qhse/backend`

Aucun déploiement (Vercel/Render/Railway/Netlify/Docker prod) n'est configuré dans ce lot.
