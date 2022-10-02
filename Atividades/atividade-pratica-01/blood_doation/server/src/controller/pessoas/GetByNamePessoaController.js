import { prismaClient } from '../../database/client.js'

export class GetByNamePessoaController {


    async handle(request, response) {

        const { nome } = request.params;

        const pessoa = await prismaClient.pessoa.findMany({
            where: {
                nome: nome
            },
            select: {
                nome:true,
                rua:true,
                numero:true,
                complemento:true,
                documento:true,
                cidade:true,
                tipo:true
            }
        });

        return response.json(pessoa);

    }

}