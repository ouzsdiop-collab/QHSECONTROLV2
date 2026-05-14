import { Request, Response } from 'express';
export function getHealth(_req:Request,res:Response){res.json({status:'healthy',service:'qhsecontrolv2-backend'});}
