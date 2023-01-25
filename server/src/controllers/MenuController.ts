import { client } from "../server/prisma/client";
import { Request, Response } from "express";

export default class MenuController {
    static async list(request: Request, response: Response) {
        const data = await client.menus.findMany({
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