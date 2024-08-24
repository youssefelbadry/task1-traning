//IMPORTS
import { Container, Row, Col, Button } from "react-bootstrap";
import JospsData from "../Data/JopsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {React,  useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { Zoom } from "react-reveal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function Jops() {
  const jItem = JospsData.map((item) => {
    
      return (
        <table className="table" >
          <tbody>
            <tr >
              <td className="col-lg-3 rr">{item.title}</td>
              <td className="col-lg-1">{item.Experiance}</td>
              <td className="col-lg-3">{item.Email} </td>
              <td className="col-lg-2 time">{item.phone}</td>
              <td className="col-lg-3 rrr">
               <Button style={{backgroundColor:"#BF9B30", border:'0'}}>DOWNLOAD CV</Button>
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
          <h2 style={{ margin: "20px 30px" }}>Applications "For "Job" at" company name"</h2>
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
                  <td className="col-lg-3">Title</td>
                  <td className="col-lg-">Experiance</td>
                  <td className="col-lg-3">Email</td>
                  <td className="col-lg-2">Mobile Number</td>
                  <td className="col-lg-3">Uploud</td>
                </tr>
              </thead>
            </table>
          </Col>
        </Row>

        <Col className="push">{jItem}</Col>
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
  )
}

export default Jops




//================================================================================================

