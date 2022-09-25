import { prismaClient } from "../../database/client.js";

export class UpdateDoacaoController {
    async handle(request, response) {

        const { id, local_id, pessoa_id, data } = request.body;

        const doacao = await prismaClient.doacao.update({

            where: {
                id: id
            },
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

        return response.json(doacao);


    }
}