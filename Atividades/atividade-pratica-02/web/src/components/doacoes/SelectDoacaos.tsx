import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { doacaoModel } from "./ListDoacoes";

interface SelectDoacoesProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectDoacoes = (props: SelectDoacoesProps) => {

    const [doacoes, setDoacoes] = useState<doacaoModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/doacoes')
            .then(response => {
                setDoacoes(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="doacao">Selecione a doacao:</label>
            </div>
            <div>
                <select name="doacao"
                    id="doacao"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        doacoes.map(item => (
                            <option value={item.id}>{item.pessoa.nome} - {item.data}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectDoacoes;