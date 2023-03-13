import React, { Component } from "react";
import { Link } from "react-router-dom";

import img from "../images/3.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import medicare from "../images/medicare.jpg";

export class ReceptionistMain extends Component {
  render() {
    return (
      <div style={{ marginBottom: "70px" }}>
        <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
          <a className="navbar-brand" href="#">
            <img
              src={medicare}
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="medicare"
            />
            Medicare
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Dropdown className="nav-item">
                  <Dropdown.Toggle id="dropdown-basic">Patient</Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link className="nav-link" to="/update">
                      Update Patient
                    </Link>
                    <Link className="nav-link" to="/delete">
                      Delete Patient
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li className="nav-item">
                <Dropdown className="nav-item">
                  <Dropdown.Toggle id="dropdown-basic">
                    Appointment
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link className="nav-link" to="/add">
                      Add Appointment
                    </Link>
                    <Link className="nav-link" to="/ViewAppReception">
                      View Appointment
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <img src={img} class="container img-fluid" alt="Responsive image" />
      </div>
    );
  }
}

export default ReceptionistMain;
