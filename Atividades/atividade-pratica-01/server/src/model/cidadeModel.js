import { prismaClient } from "../database/client.js";

export class cidadeModel {

    async exists(id) {

        const cidadeCount = await prismaClient.cidade.count({
            where: {
                id: id
            }
        });

        console.log(`[cidadeModel] exists().count = ${cidadeCount} (${cidadeCount > 0})`);

        return cidadeCount > 0;

    }

}