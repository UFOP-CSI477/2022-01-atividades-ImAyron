import { prismaClient } from "../../database/client.js";

export class UpdateLocalController {
    async handle(request, response) {

        const { id, nome, rua, nummero, complemento, cidade_id } = request.body;

        const local = await prismaClient.local_coleta.update({
        
            where: {
                id: id
            },
            data: {
                nome,
                rua,
                nummero,
                complemento,
                local:{
                   connect:{
                       id: cidade_id
                   }
                }
            }
        });

        return response.json(local);


    }
}