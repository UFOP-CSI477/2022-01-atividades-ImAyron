import { prismaClient } from '../../database/client.js'

export class GetAllTiposController {


    async handle(request, response) {

        const tipos = await prismaClient.tipo_sanguineo.findMany({
            select: {
                tipo:true,
                fator:true
               
            }
        });

        return response.json(tipos);

    }

}