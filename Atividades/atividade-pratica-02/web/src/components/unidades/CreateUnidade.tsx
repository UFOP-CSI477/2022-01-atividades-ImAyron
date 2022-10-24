import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { CidadeModel } from "../cidades/ListCidades";
import SelectCidades from "../cidades/SelectCidades";

const CreateUnidade = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [cidadeId, setCidadeId] = useState(0);
    const [complemento, setComplemento] = useState('');

    const [cidade, setCidades] = useState<CidadeModel[]>([]);

    useEffect(() => {
        api.get('/unidades')
            .then(response => {
                setCidades(response.data);
            })
    }, []);

    const handleNewUnidade = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            nome,
            numero,
            cidade_id:cidadeId,
            complemento
        }

        try {
            await api.post('/unidades', data);
            navigate('/cidades');
        } catch (error) {
            alert('Erro ao cadastrar a unidade!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar unidade</h3>

            <form onSubmit={handleNewUnidade}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome da cidade"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="numero">numero</label>
                    <input
                        type="text"
                        name="numero"
                        id="numero"
                        placeholder="numero"
                        value={numero}
                        onChange={e => setNumero(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="complemento">complemento</label>
                    <input
                        type="text"
                        name="complemento"
                        id="complemento"
                        placeholder="complemento"
                        value={complemento}
                        onChange={e => setComplemento(e.target.value)} />
                </div>

              
                <SelectCidades
                    id={cidadeId} 
                    setId={setCidadeId}
                />

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateUnidade;