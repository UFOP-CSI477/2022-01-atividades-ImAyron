import { prismaClient } from '../../database/client.js'


export class CreateLocalController {

    // async/await 
    async handle( request, response ) {
 
         const { nome, rua, nummero, complemento, cidade_id } = request.body;
 
         const local = await prismaClient.local_coleta.create({
             data: {
                 nome,
                 rua,
                 nummero,
                 complemento,
                 local:{
                    connect:{
                        id: cidade_id
                    }
                 }
             }
         });
         console.log(local);
         return response.json(local);
 
    } 
 
 }