import { prismaClient } from '../../database/client.js'

export class GetByIdLocalController {


    async handle(request, response) {

        const { id } = request.params;

        const local = await prismaClient.local_coleta.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(local);

    }

}