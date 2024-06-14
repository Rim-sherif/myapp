import React from "react";
import one from "../../assets/images/images/1.jpg";
import Modal from "react-bootstrap/Modal";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="s"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <form>
          <div>
            <div className="row g-3 px-3 add-form">
              <div className="col-12 py-2 text-end">
                <button
                  className="btn btn-close "
                  onClick={props.onHide}
                ></button>
              </div>

              <div className="col-12 py-2">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control shadow"
                    placeholder="Name"
                    aria-label="Name"
                  />
                </div>
              </div>

              <div className="col-12 py-2">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <input
                    type="number"
                    className="form-control shadow"
                    placeholder="Phone"
                    aria-label="Phone"
                  />
                </div>
              </div>
              <div className="col-12 py-2">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control shadow"
                    placeholder="E-mail"
                    aria-label="E-mail"
                  />
                </div>
              </div>

              <div className="col-12 py-2">
                <div className="text-center">
                  <img src={one} alt="" className="w-75" />
                </div>
              </div>

              <div className="col-12 py-2">
                <label
                  htmlFor="formFile"
                  className="form-label text-muted px-2"
                >
                  Upload Image:
                </label>
                <input
                  className="form-control w-100 shadow"
                  type="file"
                  id="formFile"
                />
              </div>

              <div className="col-12 py-2 text-center">
                <button
                  className="btn btn-save shadow"
                  type="button"
                  style={{
                    backgroundColor: "#242760",
                    color: "#fff",
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
export default function Engineer() {
  const [modalShow, setModalShow] = React.useState(false);
   const headers = {
    authorization: "a2z" + " " + `${localStorage.getItem("userToken")}`,
  };

 

async function getAllEngineer(){
   return await axios.get( `https://a2z-render.onrender.com/admin/getalleng`,{ headers: headers }
     );
}

let {data,isLoading}= useQuery("engineer",getAllEngineer,{refetchInterval:3000}
)
console.log(data)


  return (
    <>
    
      <div className="store-section">
        <div className="container  p-5 ">
          <div className="main-sec">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <h2 className="fst">Engineer List</h2>
              </div>

              <form className="w-25" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>

            {!isLoading ? (
              <div className=" row" style={{ marginTop: "-10px" }}>
                {data?.data.Engs.map((engineer) => {
                  return (
                    <>
                     
                      <div className="col-lg-3 col-md-6 div-hov">
                      <Link to={`engineerProfile/${engineer._id}`} className="a">
                        <div className="req-item shadow  p-3 mt-5 ">
                          <div className=" justify-content-between">
                            <div className="mt-2 mb-4">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                className="rounded-circle img-fluid"
                                style={{ width: "100px" }}
                                alt="Avatar"
                              />
                            </div>
                            <ul className="fa-ul mt-3">
                              <li className="py-1">
                                <span className="fa-li">
                                  <i className="fa-solid fa-user"></i>
                                </span>
                                {engineer.userName}
                              </li>
                              <li className="py-1">
                                <span className="fa-li">
                                  <i className="fa-solid fa-phone"></i>
                                </span>
                                {engineer.phoneNumber}
                              </li>
                              <li className="py-1">
                                <span className="fa-li">
                                  <i className="fa-solid fa-envelope"></i>
                                </span>
                                {engineer.email}
                              </li>
                            </ul>
                          </div>
                          <div className="">
                            <button
                              className=" shadow edit"
                              onClick={() => setModalShow(true)}
                              style={{ border: "none", outline: "none" }}
                            >
                              <i className="fa-solid fa-pen-to-square "></i>
                            </button>

                            <MyVerticallyCenteredModal
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                            />
                            <button
                              className="bg-white warn shadow"
                              style={{ border: "none", outline: "none" }}
                            >
                              <i className="fa-solid fa-trash  bg-white "></i>
                            </button>
                          </div>
                        </div>
                        </Link>
                      </div>
                      
                    </>
                  );
                })}
              </div>
            ) : (
              <div className="vh-100 d-flex justify-content-center align-items-center">
                <BeatLoader color="#262152" margin={4} size={50} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
