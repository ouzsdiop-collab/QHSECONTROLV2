import { Request, Response } from 'express'; import { ok } from '../../common/responses/apiResponse.js';
export function getStatus(_req:Request,res:Response){res.json(ok({app:'QHSE Control V2',offlineReady:true,importsValidation:'human_review_pending'}));}
