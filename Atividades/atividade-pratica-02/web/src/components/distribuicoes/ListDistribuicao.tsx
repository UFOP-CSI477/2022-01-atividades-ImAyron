import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { PessoaModel } from "../pessoas/ListPessoas";


export interface DistribuicaoModel {
    id: number;
    produto_id:  number;
    unidade_id: number;
    data: string;
   
   

}


const ListDistribuicao = () => {

    
    const [distribuicao, setDistribuicoes] = useState<DistribuicaoModel[]>([]);

    const navigate = useNavigate();

   
    useEffect(() => {
        
        api.get('/distribuicoes', )
            .then(reponse => {
                
                console.log(reponse.data);
                setDistribuicoes(reponse.data);
            })

    }, [navigate])


    return (
        <div>
            <h2>Lista das distribuições</h2>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Unidade</th>
                     
                        
                    </tr>
                </thead>

                <tbody>
                    {distribuicao.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.produto_id}</td>
                            <td>{item.unidade_id}</td>
                            
                           
                        </tr>
                    ))}



                </tbody>


            </table>

        </div>
    );

}

export default ListDistribuicao;