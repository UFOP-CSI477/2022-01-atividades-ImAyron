import { prismaClient } from '../../database/client.js'

export class GetAllDoacaoController {


    async handle(request, response) {

        const doacao = await prismaClient.doacao.findMany({
            select: {
                id: true,
                data:true,
                pessoa:true,
                local:true
               
            }
        });

        return response.json(doacao);

    }

}