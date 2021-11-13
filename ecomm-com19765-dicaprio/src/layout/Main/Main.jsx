import React from 'react'
import './main.css'
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../../containers/ItemListContainer/ItemListContainer'
import { Switch, Route } from "react-router-dom";


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
            </Switch>
        </main>
    )
}
