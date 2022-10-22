import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { PessoaModel } from "./ListPessoas";

interface SelectPessoasProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectPessoas = (props: SelectPessoasProps) => {

    const [pessoa, setPessoa] = useState<PessoaModel[]>([]);

   

    useEffect(() => {

        api.get('/pessoas')
            .then(response => {
                setPessoa(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="pessoa">Selecione a pessoa:</label>
            </div>
            <div>
                <select name="pessoa"
                    id="pessoa"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        pessoa.map(item => (
                            <option value={item.id}>{item.nome}-{item.documento}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectPessoas;