import React from "react";
import { Route, Switch} from "react-router-dom";
import Produtos from './pages/Produtos'
import Inicio from './pages/Inicio'
import AdicionarProduto from "./pages/AddProduto";
import DetalhesProduto from './pages/DetProduto';
import EditarProduto from "./pages/PatchProduto";

export default function Routes(){
    return(
            <Switch>
                <Route path='/' exact component={Inicio}/>
                <Route path='/produtos' component={Produtos}/>
                <Route path='/adicionar' component={AdicionarProduto}/>
                <Route path='/detalhes/:id' component={DetalhesProduto}/>
                <Route path='/editar/:id' component={EditarProduto}/>
            </Switch>
    )
}