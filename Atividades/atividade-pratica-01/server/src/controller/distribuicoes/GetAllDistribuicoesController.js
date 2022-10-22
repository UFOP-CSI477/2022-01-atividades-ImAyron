import { prismaClient } from '../../database/client.js'

export class GetAllDistribuicoesController {


    async handle(request, response) {

        const distribuicoess = await prismaClient.Distribuicao.findMany({
            select: {
                id:true,
                produto: true,
                unidade: true,
                data: true
            }
        });

        return response.json(distribuicoess);

    }

}