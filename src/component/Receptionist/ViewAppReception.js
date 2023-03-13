import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import medicare from "../images/medicare.jpg";

export class ViewAppReception extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: [],
      id: "",
      username: "",
      fname: "",
      email: "",
      address: "",
      city: "",
      type: "",
      timeofapp: "",
      dateofapp: "",
      doctorname: "",
      status: "",
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8102/loadappointment/").then((res) => {
      this.setState({
        appointment: res.data,
        id: "",
        username: "",
        fname: "",
        email: "",
        address: "",
        city: "",
        type: "",
        timeofapp: "",
        dateofapp: "",
        doctorname: "",
        status: "",
      });
    });
  }

  edit1(id) {
    axios.get(`http://localhost:8102/updatebyid/${id}`).then((res) => {
      console.log(res.data);
      this.setState({
        id: res.data.id,
        fname: res.data.fname,
        email: res.data.email,
        address: res.data.address,
        city: res.data.city,
        type: res.data.type,
        timeofapp: res.data.timeofapp,
        doctorname: res.data.doctorname,
        status: res.data.status,
        dateofapp: res.data.dateofapp,
      });
    });
  }

  delete(id) {
    axios.delete(`http://localhost:8102/delappointment/${id}`).then(() => {
      this.componentDidMount();
    });
  }

  submit(event, id) {
    event.preventDefault();
    axios
      .put("http://localhost:8102/edit", {
        username: localStorage.getItem("LoginUsername"),
        id: this.state.id,
        fname: this.state.fname,
        email: this.state.email,
        address: this.state.address,
        city: this.state.city,
        type: this.state.type,
        timeofapp: this.state.timeofapp,
        doctorname: this.state.doctorname,
        status: this.state.status,
        dateofapp: this.state.dateofapp,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data == 0) {
          alert("Appointment updated");
          window.location = "/viewappreception";
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
              <th scope="col">First name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Time</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>

          <tbody>
            {this.state.appointment.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.fname}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                <td>{user.timeofapp}</td>
                <td>{user.dateofapp}</td>
                <td>{user.status}</td>
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

        <h1 className="text-center mt-5">Edit Appointment</h1>

        <form onSubmit={(e) => this.submit(e, this.state.id)} method="POST">
          <div className="form-group mt-3">
            <div>
              <label for="inputEmail4">Full name</label>
              <input
                onChange={(e) => this.setState({ fname: e.target.value })}
                value={this.state.fname}
                type="text"
                class="form-control"
                id="inputEmail4"
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <div>
              <label for="inputPassword4">Email</label>
              <input
                onChange={(e) => this.setState({ email: e.target.value })}
                value={this.state.email}
                type="text"
                class="form-control"
                id="inputPassword4"
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <label for="inputAddress">Address</label>
            <input
              onChange={(e) => this.setState({ address: e.target.value })}
              value={this.state.address}
              type="text"
              class="form-control"
              id="inputAddress"
            />
          </div>
          <div className="form-group mt-3">
            <div>
              <label for="inputCity">City</label>
              <select
                onChange={(e) => this.setState({ city: e.target.value })}
                value={this.state.city}
                id="inputState"
                class="form-control"
              >
                <option selected>Choose...</option>
                <option>Mumbai</option>
                <option>Mumbai suburbon</option>
                <option>Navi Mumbai</option>
                <option>Pune</option>
                <option>Ahemadnagar</option>
                <option>Ratnagiri</option>
              </select>
            </div>
          </div>
          <div className="form-group mt-3">
            <div className="form-group">
              <label for="inputState">Doctor type</label>
              <select
                onChange={(e) => this.setState({ type: e.target.value })}
                value={this.state.type}
                id="inputState"
                class="form-control"
              >
                <option selected>Choose...</option>
                <option>Cardiologist</option>
                <option>Gynecologist </option>
                <option>Neurologist</option>
                <option>Skin specialist</option>
                <option>Dentist</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label for="inputMDEx1">Select time</label>
              <input
                onChange={(e) => this.setState({ timeofapp: e.target.value })}
                value={this.state.timeofapp}
                type="time"
                id="inputMDEx1"
                class="form-control"
              />
            </div>
            <div className="form-group mt-3">
              <label for="inputState">Enter date</label>
              <input
                onChange={(e) => this.setState({ dateofapp: e.target.value })}
                value={this.state.dateofapp}
                type="date"
                class="form-control"
                id="inputAddress"
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <button type="submit" name="action" className="btn btn-primary">
              Save Appointment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ViewAppReception;
