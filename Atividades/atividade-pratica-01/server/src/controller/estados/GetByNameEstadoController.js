import { prismaClient } from '../../database/client.js'

export class GetByNameEstadoController {


    async handle(request, response) {

        const { nome } = request.params;

        const estado = await prismaClient.estado.findMany({
            where: {
                nome: nome
            },
            select: {
                id: true,
                nome: true,
                sigla:true,

            }
        });

        return response.json(estado);

    }

}