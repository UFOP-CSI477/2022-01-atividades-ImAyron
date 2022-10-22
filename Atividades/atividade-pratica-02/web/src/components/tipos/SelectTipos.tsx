import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { TipoModel } from "./ListTipos";

interface SelectTiposProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectTipos = (props: SelectTiposProps) => {

    const [tipos, setTipos] = useState<TipoModel[]>([]);

   

    useEffect(() => {

        api.get('/tipos')
            .then(response => {
                setTipos(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="tipo">Selecione o tipo:</label>
            </div>
            <div>
                <select name="tipo"
                    id="tipo"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        tipos.map(item => (
                            <option value={item.id}>{item.tipo}{item.fator}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectTipos;