import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CreateCidade from "./components/cidades/CreateCidade";
import ListCidades from "./components/cidades/ListCidades";
import ShowCidade from "./components/cidades/ShowCidade";
import UpdateCidade from "./components/cidades/UpdateCidade";
import CreateDistribuicao from "./components/distribuicoes/CreateDistribuicao";
import ListDistribuicao from "./components/distribuicoes/ListDistribuicao";
import CreateDoacao from "./components/doacoes/CreateDoacao";
import ListDoacoes from "./components/doacoes/ListDoacoes";
import ShowDoacao from "./components/doacoes/ShowDoacao";
import UpdateDoacao from "./components/doacoes/UpdateDoacao";
import CreateEstado from "./components/estados/CreateEstado";
import ListEstados from "./components/estados/ListEstados";
import ShowEstado from "./components/estados/ShowEstado";
import UpdateEstado from "./components/estados/UpdateEstado";
import Header from "./components/header/Header";
import CreateLocal from "./components/locais/CreateLocal";
import ListLocais from "./components/locais/ListLocais";
import ShowLocal from "./components/locais/ShowLocal";
import UpdateLocal from "./components/locais/UpdateLocal";
import CreatePessoa from "./components/pessoas/CreatePessoa";
import ListPessoas from "./components/pessoas/ListPessoas";
import ShowPessoa from "./components/pessoas/ShowPessoa";
import UpdatePessoa from "./components/pessoas/UpdatePessoa";
import CreateProduto from "./components/produtos/CreateProduto";
import ListProdutos from "./components/produtos/ListProdutos";
import CreateTipo from "./components/tipos/CreateTipo";
import ListTipos from "./components/tipos/ListTipos";
import ShowTipo from "./components/tipos/showTipo";
import UpdateTipo from "./components/tipos/UpdateTipos";
import CreateUnidade from "./components/unidades/CreateUnidade";
import ListUnidades from "./components/unidades/ListUnidades";
import LoginUser from "./components/users/LoginUser";

const AppRoutes = () => {

    const userName = window.localStorage.getItem('nome') || undefined;

    return(

        <BrowserRouter>

            <Header name={userName} />

            <Routes>

                <Route path="/" element={ <App /> } />

                <Route path="/estados" element={<ListEstados />} />

                <Route path="/estados/create" element={<CreateEstado />} />

                <Route path="/estados/show/:id" element={<ShowEstado /> } />

                <Route path="/estados/update/:id" element={<UpdateEstado />} />

                <Route path="/cidades" element={<ListCidades />} />

                <Route path="/cidades/create" element={<CreateCidade />} />

                <Route path="/cidades/show/:id" 
                    element={<ShowCidade />} />

                <Route path="/cidades/update/:id"
                    element={<UpdateCidade />} />

                <Route path="/login"
                    element={<LoginUser />} />

                <Route path="/doacoes/create" element={<CreateDoacao/>}/>

                <Route path="/doacoes" element={<ListDoacoes/>}/>

                <Route path="/doacoes/show/:id" element={<ShowDoacao/>}/>

                <Route path="/doacoes/update/:id" element={<UpdateDoacao/>}/>

                <Route path="/tipos/create" element={<CreateTipo/>}/>

                <Route path="/tipos" element={<ListTipos/>}/>

                <Route path="/tipos/show/:id" element={<ShowTipo/>}/>

                <Route path="/tipos/update/:id" element={<UpdateTipo/>}/>
                
                <Route path="/pessoas/create" element={<CreatePessoa/>}/>

                <Route path="/pessoas/show/:id" element={<ShowPessoa/>}/>

                <Route path="/pessoas/update/:id" element={<UpdatePessoa/>}/>

                <Route path="/pessoas" element={<ListPessoas/>}/>

                <Route path="/unidades" element={<ListUnidades/>}/>

                <Route path="/unidades/create" element={<CreateUnidade/>}/>
                
                <Route path="/produtos/create" element={<CreateProduto/>}/>
                
                <Route path="/produtos" element={<ListProdutos/>}/>
                
                <Route path="/distribuicoes" element={<ListDistribuicao/>}/>

                <Route path="/distribuicoes/create" element={<CreateDistribuicao/>}/>

                          
                <Route path="/locais" element={<ListLocais/>}/>

                <Route path="/locais/create" element={<CreateLocal/>}/>

                <Route path="/locais/show/:id" element={<ShowLocal/>}/>

                <Route path="/locais/update/:id" element={<UpdateLocal/>}/>

            
            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;