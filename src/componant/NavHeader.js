import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Articles from "./Articles";
import Jobs from "./Jops";
import UserStudent from "./UserStudent";
import logo from "../image/seff_logo_transparent.png";
import { color } from "framer-motion";
import CreateJob from "./Cjobs";

function NavHeader() {
  return (
    <Router>
       <div>
        <nav className="navbar navbar-expand-lg navbar-custom bar">
          <div className="container">
            <div
              className="collapse navbar-collapse bbaarr"
              id="basic-navbar-nav"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <ul className="navbar-nav aaa admin">
                <li class="nav-item">
                  <NavLink className="nav-link" to="/articles">
                    Articles
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/jobs">
                    Jobs
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/userstudent">
                    UserStudent
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/cjob">
                    Create Job
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> 
     
      
        <nav className="navbar navbar-expand-lg sticky-top navbar-custom navvv">
          <div className="container">
            <a className="navbar-brand" href="#home">
              <img
                src={logo}
                title="logo"
                height="40px"
                width="50px"
                alt="Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#basic-navbar-nav"
              aria-controls="basic-navbar-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ color: "white" }}
            >
              <span className="navbar-toggler-icon" id="icon"></span>
            </button>
            <div className="lis collapse navbar-collapse" id="basic-navbar-nav" style={{color:'white'}}>
              <ul className="navbar-nav me-auto aaa admin">
                <li className="nav-item">
                  <NavLink className="nav-link">
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link">
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      TECH
                    </NavLink>
                    <ul className="dropdown-menu tt bg-dark">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link">
                    BUSINESS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link">
                    SECURITY
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link">
                    SPORTS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link">
                    MEDICAL
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link">
                    STARTUPS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link">
                    APPS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      COURSES
                    </NavLink>
                    <ul className="dropdown-menu tt bg-dark">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link">
                    JOPS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    className="btn"
                    style={{ backgroundColor: "#BF9B30", border: "0" }}
                  >
                    CONTACT US
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/userstudent" element={<UserStudent />} />
          <Route path="/cjob" element={<CreateJob />} />
        </Routes>
     
    </Router>
  );
}

export default NavHeader;
