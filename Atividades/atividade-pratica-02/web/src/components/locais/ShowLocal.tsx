import { useEffect, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { LocalModel } from "./ListLocais";

const ShowLocal = () => {

    const [ local, setLocal] = useState<LocalModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/locais/${id}`)
            .then(response => {
                setLocal(response.data);
            })
    }, [id]);

    const navigate = useNavigate();

    const handleDeleteLocal = async() => {

        if (!window.confirm("Confirma exclusão da doacao?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/locais/${id}` , {
                data: {
                    data
                }
            })
            navigate('/locais');

            
        } catch(error) {
            alert('Erro ao excluir a doacao!');
            console.error(error);
        }

    }

    return(
        <div>
            <h2>Dados do local de coleta</h2>

            <p> Id: {local?.id}</p>
            <p> Nome: {local?.nome}</p>
            <p>Rua: {local?.rua}</p>
            <p>Numero: {local?.nummero}</p>
            <p>Complemento: {local?.complemento}</p>
           

            <div>
                <Link to={`/locais/update/${local?.id}`}><button>Atualizar</button></Link>
            </div>
            <div>
            <button onClick={handleDeleteLocal}>Excluir</button>
            </div>

        </div>
    )

}

export default ShowLocal;