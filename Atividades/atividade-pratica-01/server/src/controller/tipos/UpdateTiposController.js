import { prismaClient } from "../../database/client.js";

export class UpdateTiposController {
    async handle(request, response) {

        const { id, tipo, fator } = request.body;

        const tipos = await prismaClient.tipo_sanguineo.update({
        
            where: {
                id: id
            },
            data: {
                tipo,
                fator
            }
        });

        return response.json(tipos);


    }
}