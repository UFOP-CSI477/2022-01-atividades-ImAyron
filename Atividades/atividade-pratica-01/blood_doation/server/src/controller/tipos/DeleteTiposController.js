import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";
import { prismaClient } from "../../database/client.js";
import { tiposModel } from "../../model/tiposModel.js";

export class DeletetiposController {

    async handle(request, response) {

        const { id } = request.body;
        const tiposModel = new tiposModel();
        if (! (await tiposModel.exists(id))) {
            console.log(`[DeletetiposController] tipos id: ${id} does not exist!`);
            return response.status(403).json({ 
                message: `[DeletetiposController] tipos id: ${id} does not exist! (model check)`
            });            
        }

        try{
            const tipos = await prismaClient.tipo_sanguineo.delete({
                where: {
                    id: id
                }
            });

            return response.json(tipos);

        } catch(error) {
            if ( error.code === "P2025" &&
                error instanceof PrismaClientKnownRequestError ) {
                    console.log(`[DeletetiposController] tipos id: ${id} does not exist!`);

                    return response.status(400).json({ 
                        message: "tipos id does not exist."
                    });

                }
        }


    }
}