import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import React from 'react';
import './Header.css'

const Header = () => {

    const {user, userSignOut} = useAuth();

    const active = { borderTop: "1px double white", borderLeft: " 1px double white" }

    return (
        <nav className="navbar navbar-expand-lg navbar-light cus-bg-color fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand ms-md-3" to="/home">
                    <img src="https://i.ibb.co/6tF84Jg/clipart1293061.png" style={{"width": "120px"}} alt="" />
                </Link>
                {/* toggle button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="mx-auto navbar-nav">
                        <NavLink className="nav-link py-0" activeStyle={active} to="/home">Home</NavLink>
                        <NavLink className="nav-link py-0" activeStyle={active} to="/allProducts">All Products</NavLink>
                        {
                            user.uid && <NavLink className="nav-link py-0" activeStyle={active} to="/dashboard">Dashboard</NavLink>
                        }
                    </div>

                    { user.uid ? <span className="navbar-text">
                        <div className="navbar-nav me-lg-5">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span style={{"width" : "100px","textAlign": "end","display": "inline-block"}}>{user.displayName}</span></a>
                                    <ul className="dropdown-menu">
                                        <li><span onClick={userSignOut} className="dropdown-item text-center log-pointer">Log Out</span></li>
                                    </ul>
                            </li>
                        </div>
                    </span>
                    :
                    <div className="me-5">
                        <Link to="/login">
                            <span className="cus-login-icon"><i className="far fa-user-circle"></i></span>
                        </Link>
                    </div> }
                </div>
            </div>
        </nav>
    );
};

export default Header;