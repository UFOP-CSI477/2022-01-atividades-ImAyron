import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import SelectCidades from "../cidades/SelectCidades";

const UpdateLocal = () => {

    const [ nome, setNome ] = useState('');
    const [ cidadeId, setCidadeId ] = useState(0);
    const [ rua ,setRua ]=useState('');
    const [nummero , setNummero ]=useState('');
    const [complemento , setComplemento ]=useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    
  


    const handleUpdateLocal = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));

        // Validações:
        const data = {
            id : intId,
            nome:nome,
            cidade_id:cidadeId,
            rua:rua,
            complemento:complemento,
            nummero:nummero,
        }

        try {
            await api.put('/locais', data);
            navigate('/locais');
        } catch (error) {
            window.alert('Erro ao atualizar a Cidade!');
            console.error(error);
            
        }

    }

    return (
        <div>
            <h3>Atualizar local de coleta: {nome}</h3>

            <form onSubmit={handleUpdateLocal}>

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
                            onChange={e => setNummero(e.target.value)} />
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

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>            

        </div>
    )

}

export default UpdateLocal;