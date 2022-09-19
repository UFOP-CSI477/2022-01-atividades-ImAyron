import { prismaClient } from '../../database/client.js'


export class CreateDoacaoController {

   // async/await 
   async handle( request, response ) {

        const { data, pessoa_id, local_id} = request.body;

        const doacao = await prismaClient.doacao.create({
            data: {
                
                local:{
                    connect:{
                        id:local_id
                    }
                },
                pessoa:{
                    connect:{
                        id: pessoa_id
                    }
                },
                data
            }
        });
        console.log(doacao);
        return response.json(doacao);

   } 

}
