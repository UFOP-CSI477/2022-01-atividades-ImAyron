import { prismaClient } from "../database/client.js";


export class localModel{

    async exists(id) {

        const localCount = await prismaClient.local_coleta.count({
            where: {
                id: id
            }
        });
    
        console.log(`[localModel] exists().count = ${localCount} (${localCount > 0})`);
    
        return localCount > 0;
    
    }
}
