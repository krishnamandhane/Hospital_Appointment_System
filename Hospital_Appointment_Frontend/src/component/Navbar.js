import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export default function Navbar() {
    return (
        <div style={{ marginBottom: "70px" }}>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
            <a className="navbar-brand" href="#">
                <img src={logo} width="35" height="35" className="d-inline-block align-top" alt="Logo"/>
                Medicare
            </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                         <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
