import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";
import { prismaClient } from "../../database/client.js";
import { localModel } from "../../model/localModel.js";

export class DeletelocalController {

    async handle(request, response) {

        let { id } = request.body.data;
        id = parseInt(id);
        const localModel1 = new localModel();
        if (! (await localModel1.exists(id))) {
            console.log(`[DeletelocalController] local id: ${id} does not exist!`);
            return response.status(403).json({ 
                message: `[DeletelocalController] local id: ${id} does not exist! (model check)`
            });            
        }

        try{
            const local = await prismaClient.local_coleta.delete({
                where: {
                    id: id
                }
            });

            return response.json(local);

        } catch(error) {
            if ( error.code === "P2025" &&
                error instanceof PrismaClientKnownRequestError ) {
                    console.log(`[DeletelocalController] local id: ${id} does not exist!`);

                    return response.status(400).json({ 
                        message: "local id does not exist."
                    });

                }
        }


    }
}