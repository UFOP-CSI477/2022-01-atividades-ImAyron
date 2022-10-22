import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

export interface PessoaModel {
    id: number;
    cidade_id:number;
    tipo_id:number;
    nome: string;
    documento: string;
    rua:string;
    numero:string;
    created_at: string;
}


const ListPessoas = () => {

    // Hooks
    // State -> armazenar os dados dos estados (uf)
    const [pessoas, setPessoas] = useState<PessoaModel[]>([]);

    const navigate = useNavigate();

    // Effect -> carregar os dados
    useEffect(() => {
        
        api.get('/pessoas', )
            .then(reponse => {
                // atualizar o state
                console.log(reponse.data);
                setPessoas(reponse.data);
            })

    }, [navigate])


    return (
        <div>
            <h2>Lista dos Estados</h2>

            <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Criação</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    {pessoas.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.created_at}</td>
                            <td><Link
                                to={`/pessoas/show/${item.id}`}>Visualizar</Link></td>
                        </tr>
                    ))}



                </tbody>


            </table>

        </div>
    );

}

export default ListPessoas;