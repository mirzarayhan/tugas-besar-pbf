import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class GunplaIndex extends Component {
     
    constructor () {
        super()
        this.state = {
            gunplas: [],
            msg: null,
            type: null,
            flash:false,
            alert: null,
        }
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    componentDidMount () {
        axios.get('/api/gunplas').then(response => {
            this.setState({
                gunplas: response.data
            })
        })  
    }
 
    goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
                >
                Deleted Model successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess(){
        this.componentDidMount();
        this.hideAlert();
    }
 
    render () {
        const { gunplas } = this.state
        return (
          <div className='container py-4'>
            <div className="jumbotron">
                <h1 class="display-4">Welcome to Gundam Town!</h1>
                <p class="lead">Sebuah toko Gundam Plastic Model(Gunpla) Terlengkap di Indonesia</p>
                <hr class="my-4"/>
            </div>
            <div className='row'>
                    {gunplas.map((gunpla, i) => (
                        <div className='col-sm-4'>
                            <div class="card text-center" style={{width: '18rem'}}>
                                <img class="card-img-top" src={gunpla.photo} alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">{gunpla.model}</h5>
                                    <p class="card-text">Grade : {gunpla.grade}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">{gunpla.series}</li>
                                    <li class="list-group-item">{gunpla.release}</li>
                                    <li class="list-group-item">{gunpla.price}</li>
                                </ul>
                                <div class="card-body">
                                    <Link
                                        className='btn btn-primary'
                                        to={`/gunpla/${gunpla.id}`}
                                        >Detail
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    {this.state.alert}   
            </div>
          </div>
        )
    }
}
 
export default GunplaIndex