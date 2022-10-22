import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";
import { prismaClient } from "../../database/client.js";
import { PessoaModel } from "../../model/PessoaModel.js";

export class DeletePessoaController {

    async handle(request, response) {

        let { id } = request.body.data;
        id = parseInt(id);
        
        try{
            const Pessoa = await prismaClient.Pessoa_coleta.delete({
                where: {
                    id: id
                }
            });

            return response.json(Pessoa);

        } catch(error) {
            if ( error.code === "P2025" &&
                error instanceof PrismaClientKnownRequestError ) {
                    console.log(`[DeletePessoaController] Pessoa id: ${id} does not exist!`);

                    return response.status(400).json({ 
                        message: "Pessoa id does not exist."
                    });

                }
        }


    }
}