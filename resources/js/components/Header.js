import React from 'react'
import { Link } from 'react-router-dom'
 
const Header = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className='navbar-brand' to='/'>
        <img className="d-inline-block align-top" src='https://icon-library.com/images/gundam-icon/gundam-icon-23.jpg' style={{height: '30px', width: '30px'}}/>
         Gundam Town</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <Link className='nav-link' to='/sign-in'>Log In</Link>
            </li>
            <li class="nav-item">
                <Link className='nav-link' to='/sign-up'>Sign Up</Link>
            </li>
            </ul>
        </div>
    </nav>
)
 
export default Header