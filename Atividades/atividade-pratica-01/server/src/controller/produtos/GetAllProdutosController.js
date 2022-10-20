import { prismaClient } from '../../database/client.js'

export class GetAllProdutosController {


    async handle(request, response) {

        const produtos = await prismaClient.Produto.findMany({
            select: {
                doacao: true,
                etiqueta: true,
                validade: true
            }
        });

        return response.json(produtos);

    }

}