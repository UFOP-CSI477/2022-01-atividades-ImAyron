import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";
import { prismaClient } from "../../database/client.js";
import { doacaoModel } from "../../model/doacaoModel.js";

export class DeletedoacaoController {

    async handle(request, response) {

        const { id } = request.body;
        const doacaoModel1 = new doacaoModel();
        if (! (await doacaoModel1.exists(id))) {
            console.log(`[DeletedoacaoController] doacao id: ${id} does not exist!`);
            return response.status(403).json({ 
                message: `[DeletedoacaoController] doacao id: ${id} does not exist! (model check)`
            });            
        }

        try{
            const doacao = await prismaClient.doacao.delete({
                where: {
                    id: id
                }
            });

            return response.json(doacao);

        } catch(error) {
            if ( error.code === "P2025" &&
                error instanceof PrismaClientKnownRequestError ) {
                    console.log(`[DeletedoacaoController] doacao id: ${id} does not exist!`);

                    return response.status(400).json({ 
                        message: "doacao id does not exist."
                    });

                }
        }


    }
}