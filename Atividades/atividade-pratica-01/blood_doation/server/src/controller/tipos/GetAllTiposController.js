import { prismaClient } from '../../database/client.js'

export class GetAllTiposController {


    async handle(request, response) {

        const tipos = await prismaClient.tipos.findMany({
            select: {
                tipo:true,
                fator:true
               
            }
        });

        return response.json(tipos);

    }

}