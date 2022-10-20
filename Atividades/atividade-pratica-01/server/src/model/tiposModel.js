import { prismaClient } from "../database/client.js";


export class tiposModel{

    async exists(id) {

        const tiposCount = await prismaClient.tipo_sanguineo.count({
            where: {
                id: id
            }
        });
    
        console.log(`[tiposModel] exists().count = ${tiposCount} (${tiposCount > 0})`);
    
        return tiposCount > 0;
    
    }
}
