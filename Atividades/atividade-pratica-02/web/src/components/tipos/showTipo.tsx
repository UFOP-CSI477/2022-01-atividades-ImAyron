import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { TipoModel } from "./ListTipos";

const ShowTipo = () => {

    const { id } = useParams();

    const [ tipo, setTipo ] = useState<TipoModel>();

    const [ tipo1, setTipo1 ] = useState('');
    const [ fator, setFator] = useState('');

    useEffect(() => {
        
        api.get(`/tipos/${id}`)
            .then(response => {
                // console.log(response.data);
                setTipo(response.data);
                setTipo1(response.data.tipo);
                setFator(response.data.fator);
            })
            
    },[id]);

    const navigate = useNavigate();

    const handleDeleteTipo = async() => {

        if (!window.confirm("Confirma exclusão do tipo?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/tipos/${id}` , {
                data: {
                    data
                }
            })
            navigate('/tipos');
        } catch(error) {
            alert('Erro ao excluir o tipo!');
            console.error(error);
        }

    }


    return(
        <div>
            <h2>Dados do tipo: {tipo1} {fator}</h2>

            <p>tipo: {tipo1}</p>
            <p>fator: {fator}</p>
          


            <div>
                <Link to={`/tipos/update/${id}`}><button>Atualizar</button></Link>
            </div>
            <div>
                <button onClick={handleDeleteTipo}>Excluir</button>
            </div>



        </div>
    );


}

export default ShowTipo;