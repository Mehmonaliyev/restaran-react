import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='container-fluid'>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container ">
                <a className="navbar-brand p-3 f4" href="/">Restaran</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 p-3 h4 ">
                        <li className="nav-item">
                            <a className="nav-link" ><NavLink className='as' to='/'>Home</NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><NavLink className='as' to='/menu'>Menu</NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" ><NavLink className='as' to='/book'>Book</NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link "><NavLink className='as' to='/login'>Login</NavLink></a>
                        </li>
                    </ul>

                    <div>
                        <i className="fa-solid fa-moon nav-link f4 p-3 disabled" ></i>
                    </div>
                </div>
            </div>
        </nav>
        
        </div>
    )
}

export default Navbar
