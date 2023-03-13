import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import medicare from "../images/medicare.jpg";

export class BookAppoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: "",
      fname: "",
      email: "",
      address: "",
      city: "",
      type: "",
      timeofapp: "",
      dateofapp: "",
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8102/appointment/").then((res) => {
      this.setState({
        users: res.data,
        username: "",
        fname: "",
        email: "",
        address: "",
        city: "",
        type: "",
        timeofapp: "",
        dateofapp: "",
      });
    });
  }

  submit(event, name) {
    event.preventDefault();
    axios
      .post("http://localhost:8102/appointment/", {
        username: localStorage.getItem("LoginUsername"),
        fname: this.state.fname,
        email: this.state.email,
        address: this.state.address,
        city: this.state.city,
        type: this.state.type,
        timeofapp: this.state.timeofapp,
        doctorname: "None",
        status: "Pending",
        dateofapp: this.state.dateofapp,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data == 0) {
          alert("Appointment booked");
          window.location = "/edit";
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
              alt="Logo"
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
                <Link className="nav-link" to="/appointment">
                  Book Appointment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/edit">
                  View Appointment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <h1 class="text-center">Book Appointment</h1>
        <form
          onSubmit={(e) => this.submit(e, this.state.username)}
          method="POST"
        >
          <div class="form-group mt-3">
            <div>
              <label for="inputEmail4">Full name</label>
              <input
                onChange={(e) => this.setState({ fname: e.target.value })}
                value={this.state.fname}
                type="text"
                class="form-control"
                id="inputEmail4"
                required
              />
            </div>
          </div>
          <div class="form-group mt-3">
            <div>
              <label for="inputPassword4">Email address</label>
              <input
                onChange={(e) => this.setState({ email: e.target.value })}
                value={this.state.email}
                type="email"
                class="form-control"
                id="inputPassword4"
                required
              />
            </div>
          </div>
          <div class="form-group mt-3">
            <label for="inputAddress">Address</label>
            <input
              onChange={(e) => this.setState({ address: e.target.value })}
              value={this.state.address}
              type="text"
              class="form-control"
              id="inputAddress"
              required
            />
          </div>
          <div class="form-group mt-3">
            <div>
              <label for="inputCity">City</label>
              <select
                onChange={(e) => this.setState({ city: e.target.value })}
                value={this.state.city}
                id="inputState"
                class="form-control"
                required
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
          <div class="form-group mt-3">
            <div class="form-group">
              <label for="inputState">Doctor type</label>
              <select
                onChange={(e) => this.setState({ type: e.target.value })}
                value={this.state.type}
                id="inputState"
                class="form-control"
                required
              >
                <option selected>Choose...</option>
                <option>Cardiologist</option>
                <option>Gynecologist </option>
                <option>Neurologist</option>
                <option>Skin specialist</option>
                <option>Dentist</option>
              </select>
            </div>

            <div class="form-group mt-3">
              <label for="inputMDEx1">Select time</label>
              <input
                onChange={(e) => this.setState({ timeofapp: e.target.value })}
                value={this.state.timeofapp}
                type="time"
                id="inputMDEx1"
                class="form-control"
                required
              />
            </div>

            <div class="form-group mt-3">
              <label for="inputState">Enter date</label>
              <input
                onChange={(e) => this.setState({ dateofapp: e.target.value })}
                value={this.state.dateofapp}
                type="date"
                class="form-control"
                id="inputAddress"
                required
              />
            </div>
          </div>
          <div class="form-group mt-3">
            <button type="submit" name="action" class="btn btn-primary">
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookAppoint;
