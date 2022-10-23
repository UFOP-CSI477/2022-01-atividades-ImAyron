import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { DistribuicaoModel } from "../distribuicoes/ListDistribuicao";
import SelectUnidade from "../unidades/SelectUnidades";

const CreateDistribuicao = () => {

    const navigate = useNavigate();
    const  [produto_id, setProdutoId]= useState(0);
    const  [unidade_id, setUnidadeId]= useState(0);
    const [data1, setData1] = useState('');
  

    const [distribuicoes, setDistribuicoes] = useState<DistribuicaoModel[]>([]);

 
    
    useEffect(() => {
        api.get('/distribuicoes')
            .then(response => {
                setDistribuicoes(response.data);
            })
    }, []);

    const handleNewDistribuicao = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
          
                
              produto_id:produto_id,
              unidade_id:unidade_id,
              data:data1
              
            
        }

        try {
            await api.post('/distribuicoes', data);
            navigate('/distribuicoes');
        } catch (error) {
            alert('Erro ao cadastrar a distribuicão!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar distribuicao</h3>

            <form onSubmit={handleNewDistribuicao}>

                <div>
                    <label htmlFor="produto_id">produto_id</label>
                    <input
                        type="number"
                        name="produto_id"
                        id="produto_id"
                        placeholder="produto_id"
                        value={produto_id}
                        onChange={e => setProdutoId(parseInt(e.target.value))} />
                        
                </div>

              

                <div>
                <label htmlFor="data">data</label>
                    <input
                        type="dateTime"
                        name="data"
                        id="data"
                        placeholder="data"
                        value={data1}
                        onChange={e => setData1((e.target.value))} />
                    
                </div>

                 
                <SelectUnidade
                    id={unidade_id} 
                    setId={setUnidadeId}
                />
                

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateDistribuicao;