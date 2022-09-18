import { prismaClient } from "../../database/client.js";

export class CreateTiposController {

   // async/await 
   async handle( request, response ) {

        const { tipo, fator } = request.body;

        const tipos = await prismaClient.tipo_sanguineo.create({
            data: {
               tipo,
               fator
            }
        });
        console.log(tipos);
        return response.json(tipos);

   } 

}
