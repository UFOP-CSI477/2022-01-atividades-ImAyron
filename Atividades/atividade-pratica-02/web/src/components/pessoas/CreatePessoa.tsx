import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { CidadeModel } from "../cidades/ListCidades";
import { TipoModel } from "../tipos/ListTipos";
import SelectTipos from "../tipos/SelectTipos";
import SelectCidades from "../cidades/SelectCidades";

const CreatePessoa = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [documento, setDocumento]=useState('');
    const [rua, setRua]=useState('');
    const [numero , setNumero]=useState('');
    const [cidadeId, setCidadeId] = useState(0);
    const [tipoId,setTipoId]=useState(0);
    const [complemento, setComplemento]=useState('');

    const [cidades, setCidades] = useState<CidadeModel[]>([]);
    const [tipos,setTipos]=useState<TipoModel[]>([]);
    useEffect(() => {
        api.get('/cidades')
            .then(response => {
                setCidades(response.data);
            })
    }, []);
    useEffect(() => {
        api.get('/tipos')
            .then(response => {
                setTipos(response.data);
            })
    }, []);

    const handleNewPessoa = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            nome,
            cidade_id: cidadeId,
            tipo_id: tipoId,
            documento,
            rua,
            numero, 
            complemento
        }

        try {
            await api.post('/pessoas', data);
            navigate('/pessoas');
        } catch (error) {
            alert('Erro ao cadastrar a Pessoa!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar Pessoa</h3>

            <form onSubmit={handleNewPessoa}>

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
                    <label htmlFor="documento">documento</label>
                    <input
                        type="text"
                        name="documento"
                        id="documento"
                        placeholder="documento"
                        value={documento}
                        onChange={e => setDocumento(e.target.value)} />
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
                <SelectTipos 
                    id={tipoId} 
                    setId={setTipoId}
                />

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreatePessoa;