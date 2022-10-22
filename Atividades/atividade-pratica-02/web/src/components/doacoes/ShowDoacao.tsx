import { useEffect, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { doacaoModel } from "./ListDoacoes";

const ShowDoacao = () => {

    const [ doacao, setDoacao] = useState<doacaoModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/doacoes/${id}`)
            .then(response => {
                setDoacao(response.data);
            })
    }, [id]);

    const navigate = useNavigate();

    const handleDeleteDoacao = async() => {

        if (!window.confirm("Confirma exclusão da doacao?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/doacoes/${id}` , {
                data: {
                    data
                }
            })
            navigate('/doacoes');

            
        } catch(error) {
            alert('Erro ao excluir a doacao!');
            console.error(error);
        }

    }

    return(
        <div>
            <h2>Dados da pessoa</h2>

            <p> Id: {doacao?.id}</p>
            <p> Nome: {doacao?.pessoa_id}</p>
            <p>cidade: {doacao?.local_id}</p>
           

            <div>
                <Link to={`/doacoes/update/${doacao?.id}`}><button>Atualizar</button></Link>
            </div>
            <div>
            <button onClick={handleDeleteDoacao}>Excluir</button>
            </div>

        </div>
    )

}

export default ShowDoacao;