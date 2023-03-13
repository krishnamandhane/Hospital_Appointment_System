import React, { Component } from "react";
import { Link } from "react-router-dom";
import medicare from "../images/medicare.jpg";
import axios from "axios";

export class ViewAppDoctor extends Component {
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
    axios
      .get(
        "http://localhost:8102/loadappointmentbytype/" +
          localStorage.getItem("LoginDoctortype")
      )
      .then((res) => {
        console.log(res.data);
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

  edit(
    username,
    id,
    fname,
    email,
    address,
    city,
    type,
    time,
    date,
    doctor,
    status
  ) {
    axios
      .put("http://localhost:8102/approved/", {
        username: username,
        id: id,
        fname: fname,
        email: email,
        address: address,
        city: city,
        type: type,
        timeofapp: time,
        dateofapp: date,
        doctorname: doctor,
        status: status,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data == 0) {
          alert("Appointment booked");
        } else {
          alert("Credential Invalid");
        }
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
                <Link className="nav-link" to="/ViewApp">
                  View appointment
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

        <h1 className="text-center mt-5">View Appointment</h1>

        <table class="table mt-5">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">First name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Time</th>
              <th scope="col">Date</th>
              <th scope="col">Doctor name</th>
              <th scope="col">Status</th>
              <th scope="col">type</th>
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
                <td>{user.doctorname}</td>
                <td>{user.status}</td>
                <td>{user.type}</td>
                <td>
                  <button
                    onClick={(e) =>
                      this.edit(
                        user.username,
                        user.id,
                        user.fname,
                        user.email,
                        user.address,
                        user.city,
                        user.type,
                        user.timeofapp,
                        user.dateofapp,
                        localStorage.getItem("LoginDoctorname"),
                        "Approved"
                      )
                    }
                    type="button"
                    className="btn btn-primary"
                    name="action"
                  >
                    Approved
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

export default ViewAppDoctor;
