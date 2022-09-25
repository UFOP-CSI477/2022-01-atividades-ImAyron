import { prismaClient } from '../../database/client.js'

export class DeleteCidadeController{

    async handle(request,response){

        const { id } = request.params;


        const cidade= await prismaClient.cidade.delete({

            where:{
                id: parseInt(id)
            }

        })
        return response.json(cidade);
    }
}