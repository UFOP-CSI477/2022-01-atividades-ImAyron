import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {


    return(
        <div className='tabela'>
            <table className='tabela'>
            <tr>
                <th><Link to="/">Home</Link></th>
                <p></p>
                <th><Link to="/login">Login</Link></th>
                <p></p>
                <th><Link to="/estados">Listar Estados</Link></th>
                <p></p>
                <th><Link to="/estados/create">Criar estado</Link></th>
                <p></p>
                <th><Link to="/cidades">Listar Cidades</Link></th>
                <p></p>
                <th><Link to="/cidades/create">Criar cidade</Link></th>
                <p></p>
                <th><Link to="/doacoes">Criar doacao</Link></th>
                <p></p>
                <th><Link to="/tipos/create">Criar Tipo</Link></th>
                
                <th><Link to="/tipos">Listar Tipos</Link></th>

                <th><Link to="/pessoas/create">Criar Pessoa</Link></th>
                
                <th><Link to="/pessoas">Listar Pessoas</Link></th>

                <th><Link to="/unidades/create">Criar unidade</Link></th>
                
                <th><Link to="/unidades">Listar unidades</Link></th>

            </tr>
            </table>
           
        </div>
    );

}

export default Menu;