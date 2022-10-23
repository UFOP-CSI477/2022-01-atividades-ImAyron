import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import SelectPessoas from "../pessoas/SelectPessoas";


const UpdateDoacao = () => {

    const [ pessoa_id, setPessoaId ] = useState(0);
    const [ localId, setLocalId ] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        
        api.get(`/doacoes/${id}`)
        .then(response => {
            setPessoaId(response.data.pessoa_id);
                setLocalId(response.data.local_id);
            })

    }, [id]);


    const handleUpdateDoacao = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));

        // Validações:
        const data = {
            id : intId,
            pessoa_id: pessoa_id,
            local_id : localId
        }

        try {
            await api.put('/doacoes', data);
            navigate('/doacoes');
        } catch (error) {
            window.alert('Erro ao atualizar a Cidade!');
            console.error(error);
            
        }

    }

    return (
        <div>
            <h3>Atualizar doacao: {id}</h3>

            <form onSubmit={handleUpdateDoacao}>

                <div>
                    <label htmlFor="local_id">local_id</label>
                    <input
                        type="number"
                        name="local_id"
                        id="local_id"
                        placeholder="local_id"
                        value={localId}
                        onChange={e => setLocalId(parseInt(e.target.value))} />
                </div>

                <SelectPessoas
                    id={pessoa_id}
                    setId={setPessoaId}
                />

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>            

        </div>
    )

}

export default UpdateDoacao;