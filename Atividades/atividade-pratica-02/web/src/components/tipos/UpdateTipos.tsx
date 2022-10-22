import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const UpdateTipo = () => {

    const [ tipo, setTipo ] = useState('');
    const [ fator, setFator ] = useState('');

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/tipos/${id}`)
            .then(response => {
                setTipo(response.data.tipo);
                setFator(response.data.fator);
            })
    },[id]);


    const handleUpdateTipo = async (e : React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const intId = parseInt(String(id));

        const data = {
            id : intId,
            fator,
            tipo
        }

        try {

            await api.put('/tipos', data);
            navigate('/tipos');
            
        } catch(error) {
            alert('Erro ao atualizar o estado!')
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Atualizar Estado: {tipo}{fator}</h3>
            <form onSubmit={handleUpdateTipo}>

                <div>
                    <label 
                        htmlFor="tipo"
                    >tipo</label>

                    <input type="text" 
                        name="tipo" 
                        id="tipo"
                        value={tipo}
                        onChange={e => setTipo(e.target.value)}
                        placeholder="Tipo"
                        />
                </div>

                <div>
                    <label 
                        htmlFor="fator"
                    >fator</label>

                    <input type="text" 
                        name="fator" 
                        id="fator" 
                        value={fator}
                        onChange={e => setFator(e.target.value)}
                        placeholder="fator"
                        />
                </div>

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );    


}

export default UpdateTipo;