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
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import logo from "../image/seff_logo_transparent.png";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons/faPhoneVolume";



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
              <div className="hheader container">
            <div className="line-hight">
              <h2 style={{ margin: "20px 30px" }}>User-Students</h2>
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
                      style={{ backgroundColor: "gray", border:'0'}}
                    />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </div>
                </FloatingLabel>
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

export default UserStudent

// ==================================================================================

// //IMPORTS
// import { Container, Row, Col, Button } from "react-bootstrap";
// import UserData from "../Data/UserStudentData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
// import React, { useState } from "react";
// import Pagination from "react-bootstrap/Pagination";
// import { Zoom } from "react-reveal";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";


// function UserStudent() {
//   // DRAWITEM
//   const UsItem = UserData.map((item, index) => {
//     let buttonStyle = {};
//     let buttonText = "";

//     if (index < 2) {
//       buttonStyle = {
//         backgroundColor: "#BF9B30",
//         color: "white",
//         borderRadius: "10px",
//         border: "none",
//         padding: "5px 30px",
//       };
//       buttonText = "Active";
//     } else if (index < 6) {
//       buttonStyle = {
//         backgroundColor: "gray",
//         color: "white",
//         borderRadius: "10px",
//         border: "none",
//         padding: "5px 30px",
//       };
//       buttonText = "Inactive";
//     }

   
//     return (
//       <table className="table" key={index}>
//         <tbody>
//           <tr >
//             <td className="col-lg-2 rr">{item.title}</td>
//             <td className="col-lg-2">
//               <button style={buttonStyle}>{buttonText}</button>
//             </td>
//             <td className="col-lg-2">{item.userid}</td>
          
//             <td className="col-lg-2 time">{item.role}</td>
//             <td className="col-lg-2 time">{item.email}</td>
//             <td className="col-lg-2 rrr">
//               <div className="icons rrr">
//                 <FontAwesomeIcon
//                   icon={faTrashCan}
//                   className="col-lg-6"
//                   style={{ cursor: "pointer" }}
//                 />
//                 <FontAwesomeIcon
//                   icon={faPenToSquare}
//                   className="col-lg-6"
//                   style={{ cursor: "pointer" }}
//                 />
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   });
//   //===============================================================================

//   return (
//     <Zoom>
//     <div>
//       {/* SECTION 1 */}
//       <div className="all-project col-lg-12">
//         <div className="opicity">
//           <div className="hheader">
//             <div className="line-hight col-9">
//               <h2 style={{ margin: "20px 30px" }}>User-Students</h2>
//               <div className="line"></div>
//             </div>
//             <div className="search">
//               <Col md>
//                 <FloatingLabel controlId="floatingInputGrid">
//                   <div className="search-container">
//                     <Form.Control
//                       className="form"
//                       type="text"
//                       placeholder="Search"
//                       style={{ backgroundColor: "gray", border:'0'}}
//                     />
//                     <FontAwesomeIcon icon={faSearch} className="search-icon" />
//                   </div>
//                 </FloatingLabel>
//               </Col>
//             </div>
//           </div>
//           {/* ================================================================= */}
//           {/* SECTION2 */}
//           <Container className="mt-4">
//             <Row>
//               <Col>
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       <td className="col-lg-2">Name</td>
//                       <td className="col-lg-2">Status</td>
//                       <td className="col-lg-2">User Id</td>
//                       <td className="col-lg-2">Role</td>
//                       <td className="col-lg-2">EmailL</td>
//                       <td className="col-lg-2">Delete & Edit</td>
//                     </tr>
//                   </thead>
//                 </table>
//               </Col>
//             </Row>

//             <Col className="push">{UsItem}</Col>
//           </Container>
//           {/* =========================================================================== */}
//           <div className="next">
//             <Pagination
//               className="next1"
//               style={{
//                 backgroundColor: "rgba(0, 0, 0, 0.5)", // لون الخلفية لجميع عناصر الترقيم
//                 border: "none", // إزالة الحدود
//               }}
//             >
//               <Pagination.First />
//               <Pagination.Prev />
//               <Pagination.Item>{1}</Pagination.Item>
//               <Pagination.Item>{2}</Pagination.Item>
//               <Pagination.Item>{3}</Pagination.Item>
//               <Pagination.Item active>{4}</Pagination.Item>
//               <Pagination.Ellipsis />
//               <Pagination.Item>{10}</Pagination.Item>
//               <Pagination.Next />
//               <Pagination.Last />
//             </Pagination>
//           </div>
//         </div>
//       </div>
//     </div>
//     </Zoom>
//   );
  
// }

// export default UserStudent

// ==================================================================================