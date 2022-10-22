import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

export interface TipoModel {
    id: number;
    tipo: string;
    fator: string;

}


const ListTipos = () => {

    
    const [tipos, setTipos] = useState<TipoModel[]>([]);
    
    const navigate = useNavigate();

    
    useEffect(() => {
        
        api.get('/tipos', )
            .then(reponse => {
                // atualizar o state
                console.log(reponse.data);
                setTipos(reponse.data);
            })

    }, [navigate])


    return (
        <div>
            <h2>Lista dos Tipos</h2>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>tipo</th>
                        <th>fator</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                   
                    {tipos.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.tipo}</td>
                            <td>{item.fator}</td>
                            <td><Link
                                to={`/tipos/show/${item.id}`}>Visualizar</Link></td>
                        </tr>
                    ))}



                </tbody>


            </table>

        </div>
    );

}

export default ListTipos;