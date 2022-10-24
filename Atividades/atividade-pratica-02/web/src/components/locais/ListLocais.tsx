import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { CidadeModel } from '../cidades/ListCidades';



export interface LocalModel {
    id: number;
    nome:string;
    rua:string;
    nummero:string;
    complemento:string;
    cidade_id:number;
   

}

const ListLocais = () => {

    const [ locais, setLocais ] = useState<LocalModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/locais')        
            .then(response => {
                setLocais(response.data);
            } );

    }

    const handleDeleteLocal = async (id : number) => {
        
        if(!window.confirm("Confirma a Exclusão do local?")) {
            return;
        }

        const data = {
            id
        }

        try {
           
            
            window.alert("Local excluído com sucesso!");
            
            //loadData();

            setLocais(locais.filter(item => item.id !== id));

        } catch (error) {
            window.alert("Erro ao excluir a Cidade!");
            console.error(error);
        }
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>rua</th>
                        <th>numero</th>
                        <th>complemento</th>
                        <th>cidade id</th>
                        <th>Vizualizar</th>
                    </tr>
                </thead>

                <tbody>

                    { locais.map( item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.rua}</td>
                                <td>{item.nummero}</td>
                                <td>{item.complemento}</td>
                                <td>{item.cidade_id}</td>
                              
                                <td><Link to={`/locais/show/${item.id}`}>Visualizar</Link> </td>
                            </tr>
                        )  
                      )
                    }

                </tbody>


            </table>
        </div>
    );

}

export default ListLocais;