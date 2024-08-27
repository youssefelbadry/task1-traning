//IMPORTS
import UserData from "../Data/UserStudentData";
import React, { useState } from "react";
import logo from "../image/seff_logo_transparent.png";
import Header from "./Header";

function UserStudent() {
  // DRAWITEM
  const UsItem = UserData.map((item, index) => {
    let buttonStyle = {};
    let buttonText = "";

    if (index < 2) {
      buttonStyle = {
        backgroundColor: "#BF9B30",
        color: "white",
        borderRadius: "10px",
        border: "none",
        padding: "5px 30px",
      };
      buttonText = "Active";
    } else if (index < 6) {
      buttonStyle = {
        backgroundColor: "gray",
        color: "white",
        borderRadius: "10px",
        border: "none",
        padding: "5px 30px",
      };
      buttonText = "Inactive";
    }

    return (
      <table className="table" key={index}>
        <tbody>
          <tr>
            <td className="col-lg-2 rr">{item.title}</td>
            <td className="col-lg-2">
              <button style={buttonStyle}>{buttonText}</button>
            </td>
            <td className="col-lg-2">{item.userid}</td>

            <td className="col-lg-2 time">{item.role}</td>
            <td className="col-lg-2 time">{item.email}</td>
            <td className="col-lg-2 rrr">
              <div className="icons rrr">
                <i class="far fa-trash-alt col-lg-6"></i>
                <i class="far fa-edit col-lg-6"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  });
  //===============================================================================

  return (
    <div>
      {/* SECTION 1 */}
      <div className="all-project col-lg-12">
        <div className="opicity">
          <Header />
          {/* ================================================================= */}
          {/* SECTION2 */}
          <div className="admin-banel container">
            <div>
              <span>Admin Panel</span>
              <div className="line"></div>
              <span>6th June 2023</span>
            </div>
          </div>
          <div className="sec2 container">
            <div class="left-nav col-sm-12 col-lg-3 det-left">
              <ul>
                <li class="head-det">Users</li>
                <ul>
                  <li>Admins</li>
                  <li>Editors</li>
                  <li>Instructors</li>
                  <li>Students</li>
                </ul>
                <li class="head-det">Articles</li>
                <ul>
                  <li>Published Articles</li>
                  <li>Scheduled Articles</li>
                  <li>Saved Drafts</li>
                </ul>
                <li class="head-det">Jobs</li>
                <ul>
                  <li>Published Jobs</li>
                  <li>Saved Drafts</li>
                </ul>
                <li class="head-det">Courses</li>
                <ul>
                  <li>Published Courses</li>
                  <li>Scheduled Couraea</li>
                  <li>Saved Drafts</li>
                </ul>
              </ul>
            </div>
            <div className="container mt-4">
              <div className="row">
                <div className="col">
                  <div className="container">
                    <div className="row">
                      <div className="show-phone-ul">
                        <div className="row">
                          <ul className="col">
                            <li className="col-3">
                              <h3>Users</h3>
                            </li>
                            <li className="col-3">
                              <h3>Articles</h3>
                            </li>
                            <li className="col-3">
                              <h3>Jobs</h3>
                            </li>
                            <li className="col-3">
                              <h3>Courses</h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="choeses">
                        <select
                          style={{
                            backgroundColor: "rgba(131, 128, 128,0.8)",
                            color: "white",
                          }}
                          class="form-select btn se"
                          aria-label="Default select example"
                        >
                          <option selected>Students</option>
                          <option value="1">Users</option>
                          <option value="2">Articles</option>
                          <option value="3">Jobs</option>
                          <option value="3">Courses</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="hheader container">
                    <div className="line-hight">
                      <h2 style={{ margin: "20px 30px" }}>User-Students</h2>
                      <div className="line"></div>
                    </div>
                    <div className="search">
                      <div className="" md>
                        <div
                          controlId="floatingInputGrid"
                          className=" form-floating"
                        >
                          <div className="search-container">
                            <input
                              className="form form-control"
                              type="text"
                              placeholder="Search"
                              style={{ backgroundColor: "gray", border: "0" }}
                            />
                            <i class="fas fa-search search-icon"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <td className="col-lg-2">Name</td>
                        <td className="col-lg-2">Status</td>
                        <td className="col-lg-2">User Id</td>
                        <td className="col-lg-2">Role</td>
                        <td className="col-lg-2">EmailL</td>
                        <td className="col-lg-2">Delete & Edit</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>

              <div className="col push">{UsItem}</div>
            </div>
          </div>
          {/* =========================================================================== */}
          <div className="next container">
            <ul
              className="pagination next1"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)", // لون الخلفية لجميع عناصر الترقيم
                border: "none", // إزالة الحدود
              }}
            >
              <li className="page-item">
                <a className="page-link" href="#">
                  Last
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <span className="page-link">...</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  10
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </div>
          <div className="footer">
            <div className="foot-logo">
              <img
                src={logo}
                title="logo"
                height="150px"
                width="130px"
                alt="Logo"
              ></img>
            </div>
            <div className="words-footer container">
              <div className="word-right ">
                <h2>SOFTWARE ENGINEERING FOR FUTURE</h2>
                <ul>
                  <li>HOME</li>
                  <li>ABOUT</li>
                  <li>TECH</li>
                  <li>BUSINESS</li>
                  <li>SECURITY</li>
                </ul>
                <ul>
                  <li>MEDICAL</li>
                  <li>STARTUPS</li>
                  <li>APPS</li>
                  <li>COURSES</li>
                  <li>CONTACT US</li>
                  <li>SPORTS</li>
                </ul>
              </div>
              <div className="left-footer">
                <p>
                  sefffuture@gmail.com{" "}
                  <i class="fas fa-envelope" style={{ color: "#bf9b30" }} />{" "}
                </p>
                <p>
                  {" "}
                  +20 109 8481 288{" "}
                  <i class="fa fa-phone" style={{ color: "#bf9b30" }}></i>
                </p>
                <p> +20155 5177 645 </p>
              </div>
            </div>
            <hr />
            <div className="after-footer container">
              <div>
                <span>@2023 EGYPT,ALL RIGHTS RESERVED</span>
              </div>
              <div>
                <ul>
                  <li>
                    <i
                      class="fab fa-facebook"
                      style={{ fontSize: "35px", color: "white" }}
                    ></i>
                  </li>
                  <li>
                    <i class="fab fa-twitter" style={{ fontSize: "35px" }}></i>
                  </li>
                  <li>
                    <i
                      class="fab fa-instagram"
                      style={{ fontSize: "35px" }}
                    ></i>
                  </li>
                  <li>
                    <i class="fab fa-linkedin" style={{ fontSize: "35px" }}></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStudent;
