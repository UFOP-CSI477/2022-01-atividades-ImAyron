import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

import { CidadeModel } from '../cidades/ListCidades';

export interface UnidadeModel {
    id: number;
    nome: string;
    created_at: string;
    cidade_id: number;
    numero:string;
    complemento:string;
    cidade: CidadeModel;
}

const ListUnidades = () => {

    const [ unidades, setUnidades ] = useState<UnidadeModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/unidades')        
            .then(response => {
                setUnidades(response.data);
            } );

    }

    
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Cidade</th>
                       
                        <th>numero</th>
                        <th>complemento</th>
                    </tr>
                </thead>

                <tbody>

                    { unidades.map( item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.cidade.nome}</td>
                                <td>{item.numero}</td>
                                <td>{item.complemento}
                                </td>
                            </tr>
                        )  
                      )
                    }

                </tbody>


            </table>
        </div>
    );

}

export default ListUnidades;