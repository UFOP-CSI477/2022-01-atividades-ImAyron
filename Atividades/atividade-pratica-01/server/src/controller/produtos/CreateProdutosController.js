import { prismaClient } from '../../database/client.js'


export class CreateProdutosController {

   // async/await 
   async handle( request, response ) {

        const { etiqueta,doacao_id,validade} = request.body;

        const produtos = await prismaClient.Produto.create({
            data: {
                
                doacao:{
                    connect:{
                        id:doacao_id
                    }
                },
                etiqueta,
                validade:  new Date().toISOString()
            }
        });
        console.log(produtos);
        return response.json(produtos);

   } 

}
