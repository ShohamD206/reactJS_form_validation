import { Component } from "react";
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  state = {};

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                <Link
                    className="nav-item nav-link" to='/'>
                    Real App
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-item nav-link" to="/about/shoham">
                              About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-item nav-link" to="/my-cards">
                              My Cards
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-item nav-link" to="/signin">
                              SignIn🔑
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-item nav-link" to="/signup">
                              SignUp🔓
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Navbar;
