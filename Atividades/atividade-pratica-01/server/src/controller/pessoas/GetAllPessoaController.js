import { prismaClient } from '../../database/client.js'

export class GetAllPessoaController {


    async handle(request, response) {

        const pessoa = await prismaClient.pessoa.findMany({
            select: {
                id:true,
                nome:true,
                rua:true,
                numero:true,
                complemento:true,
                documento:true,
                cidade:true,
                tipo:true,
                created_at:true
               
            }
        });

        return response.json(pessoa);

    }

}