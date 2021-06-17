import Axios from "axios";
import * as ReactDOM from 'react-dom';
import React, { Component } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends Component {
    render () {
        const login = localStorage.getItem("isLoggedIn");
        return (
            <div className="App">
                {login ? (
                    <Router>
                        <Route exact path="/" component={Signup}></Route>
                        <Route path="/sign-in" component={Signin}></Route>
                        <Route path="/home" component={Home}></Route>
                    </Router>
                ) : (
                    <Router>
                        <NavLink to="/sign-in" activeClassName="activeLink" className="signIn">
                            Sign In
                        </NavLink>
                        <NavLink exact to="/" activeClassName="activeLink" className="signUp">
                            Sign Up
                        </NavLink>
                        <Route exact path="/" component={Signup}></Route>
                        <Route path="/sign-in" component={Signin}></Route>
                        <Route path="/home" component={Home}></Route>
                    </Router>
                )}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
