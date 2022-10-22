import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { UnidadeModel } from "./ListUnidades";

interface SelectUnidadeProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectUnidade = (props: SelectUnidadeProps) => {

    const [unidade, setUnidade] = useState<UnidadeModel[]>([]);

   

    useEffect(() => {

        api.get('/unidades')
            .then(response => {
                setUnidade(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="pessoa">Selecione a unidade:</label>
            </div>
            <div>
                <select name="unidade"
                    id="unidade"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        unidade.map(item => (
                            <option value={item.id}>{item.nome}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectUnidade;