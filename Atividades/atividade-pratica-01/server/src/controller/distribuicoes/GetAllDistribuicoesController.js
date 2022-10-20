import { prismaClient } from '../../database/client.js'

export class GetAllDistribuicoesController {


    async handle(request, response) {

        const distribuicoess = await prismaClient.Distribuicao.findMany({
            select: {
                produto: true,
                unidade: true,
                data: true
            }
        });

        return response.json(distribuicoess);

    }

}