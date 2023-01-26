import { Request, Response } from "express";
import { client } from "../server/prisma/client";

export default class UsuarioController {
    static async list(request: Request, response: Response) {
        const data = await client.user.findFirst({
            orderBy: {
                id: "asc"
            }
        });
        if (!data) {
            return response.status(204).json({
                "msg" : "Sem resultado"
            });
        } else {
            return response.json(data);
        };
    };
};