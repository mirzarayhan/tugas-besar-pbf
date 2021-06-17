import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class GunplaCreate extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            photo: '',
            model: '',
            series: '',
            release: '',
            grade: '',
            price: '',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewGunpla = this.handleCreateNewGunpla.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }
 
    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
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
                Created Gunpla successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/home');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewGunpla (event) {
        event.preventDefault()
        const gunpla = {
            photo: this.state.photo,
            model: this.state.model,
            series: this.state.series,
            release: this.state.release,
            grade: this.state.grade,
            price: this.state.price
        }
        axios.post('/api/gunpla/store', gunpla).then(response => { 
            var msg = response.data.success;
            if(msg == true){
                return this.goToHome();
            }
        })
    }
 
    hasErrorFor (field) {
        return !!this.state.errors[field]
    }
 
    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }
 
    render () {
        return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-10'>
                <div className='card'>
                  <div className='card-header'>Create new project</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewGunpla}>
                      <div className='form-group'>
                        <label htmlFor='photo'>Photo</label>
                        <input
                          id='photo'
                          type='text'
                          className={`form-control ${this.hasErrorFor('photo') ? 'is-invalid' : ''}`}
                          name='photo'
                          value={this.state.photo}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('photo')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='model'>Model</label>
                        <input
                          id='model'
                          type='text'
                          className={`form-control ${this.hasErrorFor('model') ? 'is-invalid' : ''}`}
                          name='model'
                          value={this.state.model}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('model')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='series'>Series</label>
                        <input
                          id='series'
                          type='text'
                          className={`form-control ${this.hasErrorFor('series') ? 'is-invalid' : ''}`}
                          name='series'
                          value={this.state.series}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('series')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='release'>Release</label>
                        <input
                          id='release'
                          type='text'
                          className={`form-control ${this.hasErrorFor('release') ? 'is-invalid' : ''}`}
                          name='release'
                          value={this.state.release}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('release')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='grade'>Grade</label>
                        <input
                          id='grade'
                          type='text'
                          className={`form-control ${this.hasErrorFor('grade') ? 'is-invalid' : ''}`}
                          name='grade'
                          value={this.state.grade}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('grade')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='price'>Price</label>
                        <input
                          id='price'
                          type='text'
                          className={`form-control ${this.hasErrorFor('price') ? 'is-invalid' : ''}`}
                          name='price'
                          value={this.state.price}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('price')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/home`}
                        >Back
                      </Link>
                      <button className='btn btn-primary'>Create</button>
                      {this.state.alert}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default GunplaCreate