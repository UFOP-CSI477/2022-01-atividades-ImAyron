import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { doacaoModel } from "../doacoes/ListDoacoes";
import SelectDoacaos from "../doacoes/SelectDoacaos";

const CreateProduto = () => {

    const navigate = useNavigate();

    const [etiqueta, setEtiqueta] = useState('');
    const [validade, setValidade]=useState(Date);
    const [doacaoId, setDoacaoId] = useState(0);
   

    const [doacao, setDoacao] = useState<doacaoModel[]>([]);

    useEffect(() => {
        api.get('/doacoes')
            .then(response => {
                setDoacao(response.data);
            })
    }, []);

    const handleNewProduto = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
           doacao_id:doacaoId,
           etiqueta,
           validade
        }

        try {
            await api.post('/produtos', data);
            navigate('/produtos');
        } catch (error) {
            alert('Erro ao cadastrar a unidade!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar Produto</h3>

            <form onSubmit={handleNewProduto}>

                <div>
                    <label htmlFor="Etiqueta">Etiqueta</label>
                    <input
                        type="text"
                        name="Etiqueta"
                        id="Etiqueta"
                        placeholder="Etiqueta"
                        value={etiqueta}
                        onChange={e => setEtiqueta(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="data">Data</label>
                    <input
                        type="date"
                        name="validade"
                        id="validade"
                        placeholder="validade"
                        value={validade}
                        onChange={e => setValidade(e.target.value)} />
                </div>
                
                
                

              
                <SelectDoacaos
                    id={doacaoId} 
                    setId={setDoacaoId}
                />

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateProduto;