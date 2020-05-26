import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App() {
    const count = useSelector((state) => state.Counter);
    const user = useSelector((state) => state.User);
    return ( <
        >
        <
        BrowserRouter > {
            /* <Route  path="/home" component={Home}>
                      <Home/>
                    </Route> */
        } { /* <Link to="/home">home</Link> */ } <
        h1 > Counter < /h1> { count } <
        h1 > User < /h1> { user } <
        /BrowserRouter> <
        />
    );
}

export default App;