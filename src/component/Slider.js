import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./images/covid1.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import logo from "./images/unnamed.jpg";
import medicare from "./images/medicare.jpg";
import logo1 from "./images/medicare_img.jpg";
import img11 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/31.jpg";
import img4 from "./images/41.jpg";
import img5 from "./images/5.jpg";

export default function Slider() {
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Dropdown className="nav-item">
                <Dropdown.Toggle id="dropdown-basic">Login as</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link className="nav-link" to="/login">
                    Patient
                  </Link>
                  <Link className="nav-link" to="/adminlogin">
                    Admin
                  </Link>
                  <Link className="nav-link" to="/doctorlogin">
                    Doctor
                  </Link>
                  <Link className="nav-link" to="/receptionistlogin">
                    Receptionist
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown className="nav-item">
                <Dropdown.Toggle id="dropdown-basic">
                  Register as
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link className="nav-link" to="/register">
                    Patient
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              style={{ height: "483px" }}
              src={logo1}
              alt="..."
            />
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <div className="container">
        <div className="paragraphs">
          <div className="row">
            <div className="span4">
              <img className="img1" src={logo} />
              <div className="content-heading">
                <h3 style={{ color: " #01307a", marginTop: "10px" }}>
                  <b>WELCOME TO MEDICARE HOSPITAL</b>
                </h3>
                <h1 style={{ marginTop: "30px" }}>
                  RANK - 1 IN FORBES LIST OF BEST HOSPITAL
                </h1>
                <p style={{ marginTop: "20px", fontSize: "20px" }}>
                  MEDICARE HOSPITAL has all the facilities, all the latest
                  Equipment which helps to treat a patient in Best Possible way
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: "100px", marginBottom: "70px" }}
        className="container"
      >
        <div className="paragraphs">
          <div className="row">
            <div className="span4">
              <img className="img2" src={img1} />
              <div className="content-heading">
                <h3 style={{ color: "red", marginTop: "10px" }}>
                  Need Emergency?
                </h3>
                <h1 style={{ marginTop: "30px" }}>
                  In an emergency don't hesitate
                </h1>
                <p style={{ marginTop: "20px", fontSize: "20px" }}>
                  Call Ambulances for reliable care you trust. Our teams is on
                  call 24/7 and ready to provide the best emergency response.
                  Dont't wait get te care you need now by contacting Ambulances
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid ">
        <div class="row mb-4 shadow bg-#e9e9e9 justify-content-center py-4 text-center">
          <h1>Centres of Excellence</h1>
          <div class="col-12">
            <div class="row text-center">
              <div class="col-1"></div>
              <div class="col-2 ">
                <div class="card-body ">
                  <div>
                    <img className="img3" src={img11} class="rounded-circle" />
                  </div>
                  <h3 class="card-title">Cardiology</h3>
                </div>
              </div>

              <div class="col-2">
                <div class="card-body">
                  <div>
                    <img className="img3" src={img2} class="rounded-circle" />
                  </div>
                  <h3 class="card-title">Gynecologist</h3>
                </div>
              </div>

              <div class="col-2">
                <div class="card-body">
                  <div>
                    <img className="img3" src={img3} class="rounded-circle" />
                  </div>
                  <h3 class="card-title">Neurologist</h3>
                </div>
              </div>
              <div class="col-2">
                <div class="card-body">
                  <div>
                    <img className="img3" src={img4} class="rounded-circle" />
                  </div>
                  <h3 class="card-title">Skin</h3>
                </div>
              </div>
              <div class="col-2">
                <div class="card-body">
                  <div>
                    {/* <img src="pexels (3).jpg" class="rounded rounded-5" alt=""> */}
                    <img className="img3" src={img5} class="rounded-circle" />
                  </div>
                  <h3 class="card-title">Dentist</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
