require('dotenv').config();
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

function tokenAutorization(
    request: Request,
    response: Response,
    next: NextFunction
) {

};