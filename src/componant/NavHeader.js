import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Articles from "./Articles";
import Jobs from "./Jops";
import UserStudent from "./UserStudent";
import CreateJob from "./Cjobs";

function NavHeader() {
  return (
    <div>
      <Router>
        <div className="barrrrr">
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
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/userstudent" element={<UserStudent />} />
          <Route path="/cjob" element={<CreateJob />} />
        </Routes>
      </Router>
    </div>
  );
}

export default NavHeader;
