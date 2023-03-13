import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import medicare from '../images/medicare.jpg'
import img from '../images/3.jpg'

export class AdminMainNew extends Component {
    render() {
        return (
            <div style={{ marginBottom: "70px" }}>
                <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                    <a className="navbar-brand" href="#">
                        <img src={medicare} width="35" height="35" className="d-inline-block align-top" alt="Logo" />
                        Medicare
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Dropdown className="nav-item">
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Patient
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Link className="nav-link" to="/updatePatient">Update Patient</Link>
                                        <Link className="nav-link" to="/deletePatient">Delete Patient</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="nav-item">
                                <Dropdown className="nav-item">
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Doctor
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Link className="nav-link" to="/doctorregister">Add Doctor</Link>
                                        <Link className="nav-link" to="/updateDoctor">Update Doctor</Link>
                                        <Link className="nav-link" to="/deleteDoctor">Delete Doctor</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="nav-item">
                                <Dropdown className="nav-item">
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Receptionist
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Link className="nav-link" to="/receptionistregister">Add Receptionist</Link>
                                        <Link className="nav-link" to="/updateReceptionistr">Update Receptionist</Link>
                                        <Link className="nav-link" to="/deleteReceptionist">Delete Receptionist</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/adminmain">View Appointment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Logout</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
                <img src={img} class="container img-fluid" alt="Responsive image"/>
            </div>
        )
    }
}

export default AdminMainNew

