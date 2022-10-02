import { prismaClient } from '../../database/client.js'

export class GetByNameLocalController {


    async handle(request, response) {

        const { nome } = request.params;

        const local = await prismaClient.local_coleta.findMany({
            where: {
                nome: nome
            },
            select: {
                id:true,
                 nome:true,
                 rua:true,
                 nummero:true,
                 complemento:true,
                 local:true

            }
        });

        return response.json(local);

    }

}