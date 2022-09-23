import { prismaClient } from '../../database/client.js'

export class GetByIdCidadeController {


    async handle(request, response) {

        const { nome } = request.params;

        const cidade = await prismaClient.cidade.findMany({
            where: {
                nome: nome
            }
        });

        return response.json(cidade);

    }

}