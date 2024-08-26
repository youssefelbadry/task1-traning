//IMPORTS
import { Container, Row, Col, Button } from "react-bootstrap";
import CCjobs from "../Data/CjobsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { Zoom } from "react-reveal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import bcg from "../image/secondary_background.jpg";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import logo from "../image/seff_logo_transparent.png";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons/faPhoneVolume";

function Cjobs() {
    // DRAWITEM
    const CJItem = CCjobs.map((item, index) => {
      let buttonStyle = {};
      let buttonText = "";
  
      if (index < 2) {
        buttonStyle = {
          backgroundColor: "#BF9B30",
          color: "white",
          borderRadius: "20px",
          border: "none",
          padding: "5px 15px",
        };
        buttonText = "Open";
      } else if (index < 6) {
        buttonStyle = {
          backgroundColor: "gray",
          color: "white",
          borderRadius: "20px",
          border: "none",
          padding: "5px 15px",
        };
        buttonText = "Closed";
      }
  
      return (
        <table className="table" key={index}>
          <tbody>
          <tr >
            <td className="col-lg-2 rr">{item.company}</td>
            
            <td className="col-lg-2">{item.posted}</td>
            <td className="col-lg-2">
              <button style={buttonStyle}>{buttonText}</button>
            </td>
            <td className="col-lg-2 time">{item.posted}</td>
            <td className="col-lg-2 time">{item.Applications}</td>
            <td className="col-lg-2 rrr">
              <div className="icons rrr">
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="col-lg-6"
                  style={{ cursor: "pointer" }}
                />
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="col-lg-6"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      );
    });
    //===============================================================================
    {
      /* SECTION 1 */
    }
    return (
      <Zoom>
        <div>
          <div className="all-project">
            <div className="opicity">
           
              {/* ================================================================= */}
              {/* SECTION2 */}
              <div className="admin-banel container">
        <div>
          <span>Admin Panel</span>
          <div className="line"></div>
          <span>6th June 2023</span>
        </div>

        <div>
          <button className="btn" style={{backgroundColor:'#bf9b30'}}>Create New Job</button>
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
                    <div className="hheader container">
                <div className="line-hight ">
                  <h2 style={{ margin: "20px 30px" }}>Jobs</h2>
                  <div className="line"></div>
                </div>
                <div className="search">
                  <div className="" md>
                    <FloatingLabel controlId="floatingInputGrid">
                      <div className="search-container">
                        <Form.Control
                          className="form"
                          type="text"
                          placeholder="Search"
                          style={{ backgroundColor: "gray", border: "0" }}
                        />
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="search-icon"
                        />
                      </div>
                    </FloatingLabel>
                  </div>
                </div>
              </div>
                      <table className="table">
                        <thead>
                          <tr>
                            <td className="col-lg-2">Title</td>
                            <td className="col-lg-2">Category</td>
                            <td className="col-lg-3">Status</td>
                            <td className="col-lg-3">Date & Time</td>
                            <td className="col-lg-2">Delete & Edit</td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
  
                  <div className=" push">{CJItem}</div>
                </div>
              </div>
              {/* =========================================================================== */}
              <div className="next container">
                <ul
                  className="pagination next1"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    border: "none",
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
        <img src={logo}  title="logo"
                height="150px"
                width="130px"
                alt="Logo"></img>
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
      <p>sefffuture@gmail.com <FontAwesomeIcon icon={faEnvelope} style={{color:'#bf9b30'}}/> </p>
      <p> +20 109 8481 288 <FontAwesomeIcon icon={faPhoneVolume} style={{color:'#bf9b30'}}/></p>
      <p> +20155 5177 645 </p>
    
    </div>
    </div>
    <hr/>
   <div className="after-footer container">
    <div>
  <span>@2023 EGYPT,ALL RIGHTS RESERVED</span>
    </div>
    <div>
<ul>
  <li><FontAwesomeIcon icon={faFacebook} style={{fontSize:'35px'}}/></li>
  <li><FontAwesomeIcon icon={faTwitter} style={{fontSize:'35px'}}/></li>
  <li><FontAwesomeIcon icon={faInstagram} style={{fontSize:'35px'}}/></li>
  <li><FontAwesomeIcon icon={faLinkedin} style={{fontSize:'35px'}}/></li>
</ul>
    </div>
   </div>
    </div>
            </div>
          </div>
        </div>
      </Zoom>
    );
  }
export default Cjobs