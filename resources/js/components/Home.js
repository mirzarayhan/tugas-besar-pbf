import React, { Component } from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom"
import axios from 'axios'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

export default class Home extends Component {
  
  state = {
    navigate: false,
  };

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

  confirmDelete(id){
      const getAlert = () => (
          <SweetAlert
              warning
              showCancel
              confirmBtnText="Hapus Deh"
              cancelBtnText="Nggak Jadi"
              confirmBtnBsStyle="danger"
              cancelBtnBsStyle="default"
              title="Tunggu ..."
              onConfirm={() => this.deleteItem(id)}
              onCancel={() => this.hideAlert()}
              focusCancelBtn
              >
              Kalau udah dihapus, nggak bakal balik lagi.
          </SweetAlert>
      );
      this.setState({
          alert: getAlert()
      });
  }

  deleteItem(id) {
      axios.delete(`/api/gunpla/delete/${id}`).then(response => {
          var msg = response.data.success;
          if(msg == true){
              this.hideAlert();
              this.goToHome();
          }
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

  onLogoutHandler = () => {
    localStorage.clear();
    this.setState({
      navigate: true,
    });
  };

  render() {
    const user = JSON.parse(localStorage.getItem("userData"));
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/" push={true} />;
    }
    const { gunplas } = this.state
    return (
      <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-12'>
                <div className='card'>
                  <div className='card-header'> Welcome, {user.first_name} </div>
                  <div className='card-body'>
                    <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                      Add New Model
                    </Link>
                    <br></br>
                    <Button
                      className="btn btn-danger btn-sm mb-3"
                      onClick={this.onLogoutHandler}
                    >
                      Logout
                    </Button>
                  </div>
                </div>
                <div className='card-header'>All Model</div>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th width="50" className="text-center">No</th>
                                <th className="text-center">Photo</th>
                                <th className="text-center">Model</th>
                                <th className="text-center">Series</th>
                                <th className="text-center">Release</th>
                                <th className="text-center">Grade</th>
                                <th className="text-center">Price</th>
                                <th width="200" className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gunplas.map((gunpla, i) => (
                            <tr key={i}>
                                <td width="50" className="text-center">{i + 1}</td>
                                <td>
                                    <div>
                                        <img src={gunpla.photo} style={{height:'100px', width:'200px'}}/>
                                    </div> 
                                </td>
                                <td>{gunpla.model}</td>
                                <td>{gunpla.series}</td>
                                <td>{gunpla.release}</td>
                                <td>{gunpla.grade}</td>
                                <td>{gunpla.price}</td>
                                <td width="200" className="text-center">
                                    <div className="btn-group">
                                    <Link
                                        className='btn btn-primary'
                                        to={`/gunpla/${gunpla.id}`}
                                        >Detail
                                    </Link>
                                    <Link
                                        className='btn btn-success'
                                        to={`/gunpla/edit/${gunpla.id}`}
                                        >Edit
                                    </Link>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => this.confirmDelete(gunpla.id)}
                                        >Delete
                                    </button>
                                    </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    {this.state.alert}
                </div>
            </div>
          </div>
        </div>
              
    );
  }
}