import { prismaClient } from '../../database/client.js'

export class GetAllUnidadesController {


    async handle(request, response) {

        const unidades = await prismaClient.Unidade.findMany({
            select: {
                cidade: true,
                nome: true,
                numero: true,
                complemento: true
            }
        });

        return response.json(unidades);

    }

}