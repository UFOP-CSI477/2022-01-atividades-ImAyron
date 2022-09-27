import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";
import { prismaClient } from "../../database/client.js";
import { cidadeModel } from "../../model/cidadeModel.js";

export class DeletecidadeController {

    async handle(request, response) {

        const { id } = request.body;
        const cidadeModel = new cidadeModel();
        if (! (await cidadeModel.exists(id))) {
            console.log(`[DeletecidadeController] cidade id: ${id} does not exist!`);
            return response.status(403).json({ 
                message: `[DeletecidadeController] cidade id: ${id} does not exist! (model check)`
            });            
        }

        try{
            const cidade = await prismaClient.cidade.delete({
                where: {
                    id: id
                }
            });

            return response.json(cidade);

        } catch(error) {
            if ( error.code === "P2025" &&
                error instanceof PrismaClientKnownRequestError ) {
                    console.log(`[DeletecidadeController] cidade id: ${id} does not exist!`);

                    return response.status(400).json({ 
                        message: "cidade id does not exist."
                    });

                }
        }


    }
}