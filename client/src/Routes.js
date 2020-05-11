import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import UserAccount from "./components/UserAccount"
import BooksList from "./components/books/BooksList"
import BooksOrder from "./components/books/BooksOrder"
import NotFound from "./components/NotFound"



function Routes() {
    return (

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={UserAccount} />
            <Route path="/books" component={BooksList} />
            <Route path="/orders" component={BooksOrder} />


            <Route component={NotFound} />
        </Switch>

    )
}

export default Routes

