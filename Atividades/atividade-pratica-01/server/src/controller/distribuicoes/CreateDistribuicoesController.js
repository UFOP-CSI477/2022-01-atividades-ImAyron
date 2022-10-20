import { prismaClient } from '../../database/client.js'


export class CreateDistribuicoesController {

   // async/await 
   async handle( request, response ) {

        const { data, produto_id, unidade_id} = request.body;

        const distribuicoes = await prismaClient.Distribuicao.create({
            data: {
                
                produto:{
                    connect:{
                        id:produto_id
                    }
                },
                unidade:{
                    connect:{
                        id: unidade_id
                    }
                },
                data
            }
        });
        console.log(distribuicoes);
        return response.json(distribuicoes);

   } 

}
