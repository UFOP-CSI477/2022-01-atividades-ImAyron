import { prismaClient } from '../../database/client.js'

export class GetByNameCidadeController {


    async handle(request, response) {

        const { id,nome } = request.params;

        const cidade = await prismaClient.cidade.findMany({
            where: {
                id: parseInt(id),
                nome: nome
            }
        });

        return response.json(cidade);

    }

}