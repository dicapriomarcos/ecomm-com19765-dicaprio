import React from 'react'
import './main.css'
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../../containers/ItemListContainer/ItemListContainer'
import { Switch, Route } from "react-router-dom";
import Carrito from '../../pages/Carrito/Carrito';


export default function Main() {
    return (
        <main id="page-content">
            <Switch>
                <Route exact path="/">
                <ItemListContainer  greeting="Todos los productos" />
                </Route>
                <Route exact path="/categoria/:slug">
                <ItemListContainer  greeting="Categoría: " />
                </Route>
                <Route exact path="/producto/:productId">
                <ItemDetailContainer />
                </Route>
                <Route exact path="/carrito">
                <Carrito />
                </Route>
            </Switch>
        </main>
    )
}
