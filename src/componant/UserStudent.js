//IMPORTS
import { Container, Row, Col, Button } from "react-bootstrap";
import UserData from "../Data/UserStudentData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { Zoom } from "react-reveal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


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
          <tr >
            <td className="col-lg-2 rr">{item.title}</td>
            <td className="col-lg-2">
              <button style={buttonStyle}>{buttonText}</button>
            </td>
            <td className="col-lg-2">{item.userid}</td>
          
            <td className="col-lg-2 time">{item.role}</td>
            <td className="col-lg-2 time">{item.email}</td>
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

  return (
    <Zoom>
    <div>
      {/* SECTION 1 */}
      <div className="all-project col-lg-12">
        <div className="opicity">
          <div className="hheader">
            <div className="line-hight col-9">
              <h2 style={{ margin: "20px 30px" }}>User-Students</h2>
              <div className="line"></div>
            </div>
            <div className="search">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid">
                  <div className="search-container">
                    <Form.Control
                      className="form"
                      type="text"
                      placeholder="Search"
                      style={{ backgroundColor: "gray", border:'0'}}
                    />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </div>
                </FloatingLabel>
              </Col>
            </div>
          </div>
          {/* ================================================================= */}
          {/* SECTION2 */}
          <Container className="mt-4">
            <Row>
              <Col>
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
              </Col>
            </Row>

            <Col className="push">{UsItem}</Col>
          </Container>
          {/* =========================================================================== */}
          <div className="next">
            <Pagination
              className="next1"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)", // لون الخلفية لجميع عناصر الترقيم
                border: "none", // إزالة الحدود
              }}
            >
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item active>{4}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
    </Zoom>
  );
  
}

export default UserStudent

