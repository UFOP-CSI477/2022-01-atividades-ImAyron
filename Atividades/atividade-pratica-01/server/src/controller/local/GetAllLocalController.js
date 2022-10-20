import { prismaClient } from '../../database/client.js'

export class GetAllLocalController {


    async handle(request, response) {

        const local = await prismaClient.local_coleta.findMany({
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