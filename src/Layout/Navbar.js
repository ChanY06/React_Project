import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bco text-dark">
            <div className="container-fluid">
            <NavLink className="navbar-brand" exact to="/">Restaurant Booking</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home </NavLink>
                    </li>
                    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"    
        id="navbarDropdown" role="button" data-toggle="dropdown" 
        aria-haspopup="true" aria-expanded="false">
          Bookings
        </a>
        <div className="dropdown-menu bg-" aria-labelledby="navbarDropdown">
        <NavLink className="dropdown-item " exact to="/viewbooking">View Booking</NavLink>
        <NavLink className="dropdown-item " exact to="/updatebooking">Upadate Booking</NavLink>
        <NavLink className="dropdown-item " exact to="/cancelbooking">Cancel Booking</NavLink>
        </div>
      </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/About">
                         About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Contact">
                         Contact us
                        </NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;