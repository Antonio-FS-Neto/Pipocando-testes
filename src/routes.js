import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './Componets/Header';
import Home from './pages/Home';
import Filme from './pages/Filmes'
import Error404 from './Componets/Erros/404.js'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme} />

                <Route path="*" component={Error404} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes