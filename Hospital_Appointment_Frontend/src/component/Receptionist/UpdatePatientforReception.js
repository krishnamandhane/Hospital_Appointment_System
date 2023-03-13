import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
import medicare from "../images/medicare.jpg";

export class UpdatePatientforReception extends Component {
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

  edit1(id) {
    axios.get(`http://localhost:8102/api/updatebyiduser/${id}`).then((res) => {
      this.setState({
        id: res.data.id,
        username: res.data.username,
        email: res.data.email,
        mobile: res.data.mobile,
        password: res.data.password,
      });
    });
  }

  submit(event, id) {
    event.preventDefault();
    axios
      .put("http://localhost:8102/api/editpatient", {
        id: this.state.id,
        username: this.state.username,
        email: this.state.email,
        mobile: this.state.mobile,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data == 0) {
          alert("Patient updated");
          window.location = "/update";
        } else {
          alert("Credential Invalid");
        }
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
                    onClick={(e) => this.edit1(user.id)}
                    type="button"
                    className="btn btn-primary"
                    name="action"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1 class="text-center">Update Patient</h1>

        <form onSubmit={(e) => this.submit(e, this.state.id)} method="POST">
          <div class="form-group mt-3">
            <label for="exampleInputEmail1">Username</label>
            <input
              onChange={(e) => this.setState({ username: e.target.value })}
              value={this.state.username}
              type="text"
              class="form-control mt-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
              required
            />
          </div>
          <div class="form-group mt-3">
            <label for="exampleInputEmail1">Email address</label>
            <input
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
              type="email"
              class="form-control mt-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
          </div>
          <div class="form-group mt-3">
            <label for="exampleInputEmail1">Mobile number</label>
            <input
              onChange={(e) => this.setState({ mobile: e.target.value })}
              value={this.state.mobile}
              type="text"
              class="form-control mt-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Mobile number"
              maxLength="10"
              minLength="10"
              required
            />
          </div>
          <div class="form-group mt-3">
            <label for="exampleInputPassword1">Password</label>
            <input
              onChange={(e) => this.setState({ password: e.target.value })}
              value={this.state.password}
              type="password"
              class="form-control mt-2"
              id="exampleInputPassword1"
              placeholder="Password"
              minLength="5"
              required
            />
          </div>
          <div class="form-group mt-3">
            <button type="submit" name="action" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdatePatientforReception;
