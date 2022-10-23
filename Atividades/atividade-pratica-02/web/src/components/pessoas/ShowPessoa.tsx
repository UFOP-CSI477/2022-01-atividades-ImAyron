import { useEffect, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { PessoaModel } from "./ListPessoas";

const ShowPessoa = () => {

    const [ pessoa, setPessoa ] = useState<PessoaModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/pessoas/${id}`)
            .then(response => {
                setPessoa(response.data);
            })
    }, [id]);

    const navigate = useNavigate();

    const handleDeletePessoa = async() => {

        if (!window.confirm("Confirma exclusão da pessoa?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/pessoas/${id}` , {
                data: {
                    data
                }
            })
            navigate('/pessoas');

            
        } catch(error) {
            alert('Erro ao excluir o Estado!');
            console.error(error);
        }

    }

    return(
        <div>
            <h2>Dados da pessoa</h2>

            <p> Id: {pessoa?.id}</p>
            <p> Nome: {pessoa?.nome}</p>
            <p>Documento: {pessoa?.documento}</p>
            <p>Data de inserção: {pessoa?.created_at}</p>

            <div>
                <Link to={`/pessoas/update/${pessoa?.id}`}><button>Atualizar</button></Link>
            </div>
            <div>
            <button onClick={handleDeletePessoa}>Excluir</button>
            </div>

        </div>
    )

}

export default ShowPessoa;