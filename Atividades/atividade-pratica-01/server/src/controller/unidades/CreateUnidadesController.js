import { prismaClient } from '../../database/client.js'


export class CreateUnidadesController {

   // async/await 
   async handle( request, response ) {

        const { nome, numero, complemento, cidade_id} = request.body;

        const unidades = await prismaClient.Unidade.create({
            data: {
                
                cidade:{
                    connect:{
                        id:cidade_id
                    }
                },
            
                nome,
                numero,
                complemento,
            }
        });
        console.log(unidades);
        return response.json(unidades);

   } 

}
