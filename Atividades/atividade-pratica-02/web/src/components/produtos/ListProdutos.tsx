import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

import { doacaoModel } from '../doacoes/ListDoacoes';

export interface ProdutoModel {
    id: number;
    etiqueta: string;
    created_at: string;
    
    
    validade:Date;
    doacao: doacaoModel;
}

const ListProdutos = () => {

    const [ produtos, setProdutos ] = useState<ProdutoModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/produtos')        
            .then(response => {
                setProdutos(response.data);
            } );

    }

    
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Etiqueta</th>
                        <th>Id do local</th>
                       
                       
                        <th>Data da doação</th>
                    </tr>
                </thead>

                <tbody>

                    { produtos.map( item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.etiqueta}</td>
                                <td>{item.doacao.local_id}</td>
                                <td>{item.doacao.data}</td>
                             
                               
                            </tr>
                        )  
                      )
                    }

                </tbody>


            </table>
        </div>
    );

}

export default ListProdutos;