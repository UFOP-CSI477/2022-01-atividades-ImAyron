import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { doacaoModel } from "../doacoes/ListDoacoes";


const CreateDoacao = () => {

    const navigate = useNavigate();
    const  [pessoa_id, setPessoaId]= useState(0);
    const  [local_id, setlocalId]= useState(0);
    const [data1, setData] = useState('');
  

    const [doacoes, setDoacoes] = useState<doacaoModel[]>([]);

    useEffect(() => {
        api.get('/pessoas')
            .then(response => {
                setDoacoes(response.data);
            })
    }, []);
    
    useEffect(() => {
        api.get('/locais')
            .then(response => {
                setDoacoes(response.data);
            })
    }, []);

    const handleNewDoacao = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
          
                
                local:{
                    connect:{
                        id:local_id
                    }
                },
                pessoa:{
                    connect:{
                        id: pessoa_id
                    }
                },
                data1
              
            
        }

        try {
            await api.post('/doacoes', data);
            navigate('/doacoes');
        } catch (error) {
            alert('Erro ao cadastrar a doacoes!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar Cidade</h3>

            <form onSubmit={handleNewDoacao}>

                <div>
                    <label htmlFor="pessoa_id">pessoa</label>
                    <input
                        type="text"
                        name="pessoa_id"
                        id="pessoa_id"
                        placeholder="pessoa_id"
                        value={pessoa_id}
                        />
                </div>

               
                <div>
                    <label htmlFor="localId">localId</label>
                    <input
                        type="text"
                        name="localId"
                        id="localId"
                        placeholder="local"
                        value={local_id}
                        onChange={e => setlocalId(parseInt(e.target.value))} />
                    
                </div>

                <div>
                <label htmlFor="data">data</label>
                    <input
                        type="text"
                        name="data"
                        id="data"
                        placeholder="data"
                        value={data1}
                        onChange={e => setlocalId(parseInt(e.target.value))} />
                    
                </div>

                

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateDoacao;