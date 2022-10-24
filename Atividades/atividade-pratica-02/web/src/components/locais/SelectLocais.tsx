import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { LocalModel } from "./ListLocais";

interface SelectLocaisProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectLocais = (props: SelectLocaisProps) => {

    const [locais, setLocais] = useState<LocalModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/locais')
            .then(response => {
                setLocais(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="locais">Selecione o local de coleta:</label>
            </div>
            <div>
                <select name="locais"
                    id="locais"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        locais.map(item => (
                            <option value={item.id}>{item.nome} </option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectLocais;