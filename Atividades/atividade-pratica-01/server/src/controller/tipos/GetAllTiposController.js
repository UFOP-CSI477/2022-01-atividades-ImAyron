import { prismaClient } from '../../database/client.js'

export class GetAllTiposController {


    async handle(request, response) {

        const tipos = await prismaClient.tipo_sanguineo.findMany({
            select: {
                id:true,
                tipo:true,
                fator:true
               
            }
        });

        return response.json(tipos);

    }

}