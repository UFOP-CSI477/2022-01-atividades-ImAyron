import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

export interface doacaoModel {
    id: number;
    local_id:  number;
    pessoa_id: number;
    data: Date;
}


const ListDoacoes = () => {

    
    const [estados, setEstados] = useState<doacaoModel[]>([]);

    const navigate = useNavigate();

   
    useEffect(() => {
        
        api.get('/doacoes', )
            .then(reponse => {
                
                console.log(reponse.data);
                setEstados(reponse.data);
            })

    }, [navigate])


    return (
        <div>
            <h2>Lista dos Estados</h2>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Criação</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    {estados.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.local_id}</td>
                            <td>{item.pessoa_id}</td>
                            <td><Link
                                to={`/doacoes/${item.id}`}>Visualizar</Link></td>
                        </tr>
                    ))}



                </tbody>


            </table>

        </div>
    );

}

export default ListDoacoes;