import { client } from "../server/prisma/client";
import { Request, Response } from "express";

export default class TipoDespesaController {
    static async list(request: Request, response: Response) {
        const { id } = request.query;
        console.log(id)
        let data;

        if (id) {
            data = await client.tipoDespesa.findFirst({
                where: {
                    id: Number(id)
                },
                orderBy: {
                    id: "asc"
                }
            });
        } else {
            data = await client.tipoDespesa.findMany({
                orderBy: {
                    id: "asc"
                }
            });
        }

        if (!data) {
            return response.status(204).json({
                "msg" : "Sem resultado"
            });
        } else {
            return response.json(data);
        };
    };

    static async create(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        try {
            const tipoDespesa = await client.tipoDespesa.create({
                data: {
                    nome: objJson.nome,
                    descricao: objJson.descricao 
                }
            });
            if (tipoDespesa) {
                return response.json(
                    {
                        "msg" : "Successes"
                    }
                );
            }
        } catch (error) {
            return response.status(500).json({
                message: error
            });
        };
    };

    static async update(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        try {
            const updateTipoDespesa = await client.tipoDespesa.update({
                where: {
                    id: Number(objJson.id)
                },
                data: {
                    nome: objJson.nome,
                    descricao: objJson.descricao,
                }
            });
            if (updateTipoDespesa) {
                return response.json(
                    {
                        "msg" : "Successes"
                    }
                );
            };
        } catch (error) {
            return response.status(500).json({
                message: error
            });
        };
    };
};