import { prismaClient } from '../../database/client.js'

export class GetByIdTipoController {


    async handle(request, response) {

        const { id } = request.params;

        const tipo = await prismaClient.tipo_sanguineo.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(tipo);

    }

}