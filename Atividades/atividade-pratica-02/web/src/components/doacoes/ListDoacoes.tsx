import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { LocalModel } from "../locais/ListLocais";
import { PessoaModel } from "../pessoas/ListPessoas";


export interface doacaoModel {
    id: number;
    local_id:  number;
    pessoa_id: number;
    data: string;
    pessoa:PessoaModel;
    local:LocalModel
   

}


const ListDoacoes = () => {

    
    const [doacao, setDoacao] = useState<doacaoModel[]>([]);

    const navigate = useNavigate();

   
    useEffect(() => {
        
        api.get('/doacoes', )
            .then(reponse => {
                
                console.log(reponse.data);
                setDoacao(reponse.data);
            })

    }, [navigate])


    return (
        <div>
            <h2>Lista das doacoes</h2>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Local</th>
                        <th>Pessoa</th>
                        <th>Documento</th>
                     
                        <th>View</th>
                    </tr>
                </thead>

                <tbody>
                    {doacao.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.local.nome}</td>
                            <td>{item.pessoa.nome}</td>
                            <td>{item.pessoa.documento}</td>
                            
                            <td><Link
                                to={`/doacoes/show/${item.id}`}>Visualizar</Link></td>
                        </tr>
                    ))}



                </tbody>


            </table>

        </div>
    );

}

export default ListDoacoes;