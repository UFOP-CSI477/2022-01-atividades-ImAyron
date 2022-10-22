import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import SelectCidades from "../cidades/SelectCidades";
import SelectTipos from "../tipos/SelectTipos";

const UpdatePessoa = () => {

    const [ nome, setNome ] = useState('');
    const [ cidadeId, setCidadeId ] = useState(0);
    const [ documento, setDocumento] = useState('');
    const [ rua ,setRua]= useState('');
    const [ numero ,setNumero]= useState('');
    const [ complemento ,setComplemento]= useState('');
    const [ tipo_id, setTipoId]= useState(0);


    const { id } = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        
        api.get(`/pessoas/${id}`)
        .then(response => {
                setNome(response.data.nome);
                setCidadeId(response.data.cidade_id);
                setComplemento(response.data.complemento);
                setDocumento(response.data.documento);
                setRua(response.data.rua);
                setNumero(response.data.numero);
                setTipoId(response.data.tipo_id);

            })

    }, [id]);


    const handleUpdatePessoa = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));

        // Validações:
        const data = {
            id : intId,
            nome,
            cidade_id : cidadeId,
            documento,
            rua,
            numero,
            tipo_id

        }

        try {
            await api.put('/pessoas', data);
            navigate('/pessoas');
        } catch (error) {
            window.alert('Erro ao atualizar a Cidade!');
            console.error(error);
            
        }

    }

    return (
        <div>
            <h3>Atualizar pessoa: {nome}</h3>

            <form onSubmit={handleUpdatePessoa}>

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
                    id={tipo_id} 
                    setId={setTipoId}
                />

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>            

        </div>
    )

}

export default UpdatePessoa;