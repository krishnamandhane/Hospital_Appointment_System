import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
import medicare from "../images/medicare.jpg";

export class DeletePatientforReception extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      id: "",
      username: "",
      email: "",
      mobile: "",
      password: "",
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8102/api/loadpatient/").then((res) => {
      this.setState({
        users: res.data,
        id: "",
        username: "",
        email: "",
        mobile: "",
        password: "",
      });
    });
  }

  delete(id) {
    axios.delete(`http://localhost:8102/api/deluser/${id}`).then(() => {
      this.componentDidMount();
    });
  }

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

        <h1 class="text-center mb-5">Delete Patient</h1>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile number</th>
              <th scope="col">Password</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    onClick={(e) => this.delete(user.id)}
                    type="button"
                    className="btn btn-primary"
                    name="action"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DeletePatientforReception;
