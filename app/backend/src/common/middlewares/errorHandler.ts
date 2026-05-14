import { NextFunction, Request, Response } from 'express'; import { AppError } from '../errors/AppError.js';
export function errorHandler(error:unknown,_req:Request,res:Response,_next:NextFunction){ if(error instanceof AppError){res.status(error.statusCode).json({ok:false,error:error.message}); return;} res.status(500).json({ok:false,error:'Internal server error'}); }
