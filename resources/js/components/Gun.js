import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import GunplaIndex from './GunplaIndex'
import GunplaCreate from './GunplaCreate'
import GunplaShow from './GunplaShow'
import GunplaEdit from './GunplaEdit'
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
 
class Gun extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={GunplaIndex}/>
                        <Route exact path='/create' component={GunplaCreate} />
                        <Route path='/gunpla/edit/:id' component={GunplaEdit} />
                        <Route path='/gunpla/:id' component={GunplaShow} />
                        <Route exact path="/sign-up" component={Signup}></Route>
                        <Route path="/sign-in" component={Signin}></Route>
                        <Route path="/home" component={Home}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
 
ReactDOM.render(<Gun />, document.getElementById('gun'))