import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateTipo = () => {

    const [ tipo, setTipo ] = useState('');
    const [ fator, setFator] = useState('');

    const navigate = useNavigate();

    const handleNewTipo = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateNome() || !validateSigla()) {
            return false;
        }


        const data = {
            tipo,
            fator
        }

        try{

            await api.post('/tipos', data);
            alert('Tipo Inserido com Sucesso!');
            navigate('/tipos');

        } catch(error) {
            alert('Erro ao cadastrar o Tipo!');
            console.error(error);
        }


    }

    const validateNome = () => {

        if (tipo === "") {
            alert('Informe o tipo!');
            document.getElementById('tipo')?.focus();
            return false;
        }

        return true;

    }

    const validateSigla = () => {

        if (fator === "") {
            alert('Informe o fator!');
            document.getElementById('fator')?.focus();
            return false;
        }

        return true;

    }    

    return (
        <div>
            <h3>Cadastrar tipo: {tipo}{fator}</h3>
            <form onSubmit={handleNewTipo}>

                <div>
                    <label 
                        htmlFor="tipo"
                    >tipo</label>

                    <input type="text" 
                        name="tipo" 
                        id="tipo"
                        value={tipo}
                        onChange={e => setTipo(e.target.value)}
                        placeholder="tipo"
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

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateTipo;