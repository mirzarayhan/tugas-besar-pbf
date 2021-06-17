import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
    class ArticleShow extends Component {
      constructor (props) {
        super(props)
        this.state = {
          gunpla: {}
        }
      }
 
      componentDidMount () {
 
        const gunplaId = this.props.match.params.id
 
        axios.get(`/api/gunpla/${gunplaId}`).then(response => {
          this.setState({
            gunpla: response.data
          })
        })
      }
 
      render () {
        const { gunpla } = this.state
 
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                    <div className='card-img'> 
                        <img className='img-fluid' src={gunpla.photo}/>
                    </div>
                    <div className='card-header'>Model : {gunpla.model}</div>
                    <div className='card-header'>Series : {gunpla.series}</div>
                    <div className='card-header'>Release : {gunpla.release}</div>
                    <div className='card-header'>Grade : {gunpla.grade}</div>
                    <div className='card-header'>Price : {gunpla.price}</div>
                    <div className='card-body'>
                        <Link
                            className='btn btn-primary'
                            to={`/`}
                            >Back
                        </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
 
export default ArticleShow