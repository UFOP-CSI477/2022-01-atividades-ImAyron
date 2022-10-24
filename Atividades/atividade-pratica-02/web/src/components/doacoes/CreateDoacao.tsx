import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { doacaoModel } from "../doacoes/ListDoacoes";
import SelectLocais from "../locais/SelectLocais";
import SelectPessoas from "../pessoas/SelectPessoas";
const CreateDoacao = () => {

    const navigate = useNavigate();
    const  [pessoa_id, setPessoaId]= useState(0);
    const  [local_id, setlocalId]= useState(0);
    const [data1, setData1] = useState('');
  

    const [doacoes, setDoacoes] = useState<doacaoModel[]>([]);

   

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
            <h3>Cadastrar doação</h3>

            <form onSubmit={handleNewDoacao}>

               
                     
            <SelectPessoas
                    id={pessoa_id} 
                    setId={setPessoaId}
                />

                <SelectLocais
                    id={local_id} 
                    setId={setlocalId}
                />
               

                <div>
                <label htmlFor="data">data</label>
                    <input
                        type="date"
                        name="data"
                        id="data"
                        placeholder="data"
                        value={data1}
                        onChange={e => setData1((e.target.value))} />
                    
                </div>
          

                

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateDoacao;