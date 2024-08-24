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
import logo from '../image/seff_logo_transparent.png'
import { color } from "framer-motion";

function NavHeader() {
  return (
    <Router>
      <Navbar expand="lg" className="navbar" sticky="top">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} title="logo" height='40px' width="50px"/></Navbar.Brand>
          <Navbar.Toggle style={{color:"white"}} aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse  id=" icon">
            <Nav className="me-auto aaa ">
              <Nav.Link  as={NavLink} to="/articles">
                Articles
              </Nav.Link>
              <Nav.Link  as={NavLink} to="/jobs">
                Jobs
              </Nav.Link>
              <Nav.Link  as={NavLink } to="/userstudent">
                UserStudent
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route  path="/articles" element={<Articles />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/userstudent" element={<UserStudent />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default NavHeader;
