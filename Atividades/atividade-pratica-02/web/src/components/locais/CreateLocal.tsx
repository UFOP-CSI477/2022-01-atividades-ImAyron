import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { LocalModel } from "../locais/ListLocais";
import SelectCidades from "../cidades/SelectCidades";


const CreateLocal = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [nummero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidadeId, setCidadeId] = useState(0);


    const [locais, setLocais] = useState<LocalModel[]>([]);

    useEffect(() => {
        api.get('/locais')
            .then(response => {
                setLocais(response.data);
            })
    }, []);

    const handleNewLocal = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            nome,
            rua,
            nummero,
            complemento,
           
            cidade_id: cidadeId
        }

        try {
            await api.post('/locais', data);
            navigate('/locais');
        } catch (error) {
            alert('Erro ao cadastrar o local!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar Local</h3>

            <form onSubmit={handleNewLocal}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome do local"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>

               

                    <div>
                        <label htmlFor="rua">rua</label>
                        <input
                            type="text"
                            name="rua"
                            id="rua"
                            placeholder="rua"
                            value={rua}
                            onChange={e => setRua(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="nummero">numero</label>
                        <input
                            type="text"
                            name="nummero"
                            id="nummero"
                            placeholder="nummero"
                            value={nummero}
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

export default CreateLocal;