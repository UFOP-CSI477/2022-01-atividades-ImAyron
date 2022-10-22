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
                        <th>doacao</th>
                       
                       
                        <th>data</th>
                    </tr>
                </thead>

                <tbody>

                    { produtos.map( item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.etiqueta}</td>
                                <td>{item.doacao.pessoa_id}</td>
                              
                             
                               
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