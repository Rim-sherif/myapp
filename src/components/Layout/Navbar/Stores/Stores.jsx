import React from "react";
import one from "../../../../assets/images/images/1.jpg";
import two from "../../../../assets/images/images/2.jpg";
import three from "../../../../assets/images/images/3.jpg";
import four from "../../../../assets/images/images/4.jpg";
import five from "../../../../assets/images/images/5.jpg";
import six from "../../../../assets/images/images/6.jpg";
import seven from "../../../../assets/images/images/7.jpg";
import eight from "../../../../assets/images/images/8.jpg";
import Modal from "react-bootstrap/Modal";

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
          <div >
            <div className="row g-3 px-3 add-form">
              <div className="col-12 py-2 text-end">
                <button className="btn btn-close " onClick={props.onHide}>
                  
                </button>
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

export default function Stores() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="store-section">
        <div className="container  p-5 ">
          <div className="main-sec">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <h2 className="fst">Stores List</h2>
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
            <div className="row" style={{ marginTop: '-10px' }}>
              <div className="col-lg-3 col-md-6 div-hov">
                <div className="req-item shadow  p-3 mt-5 ">
                  <div className="d-flex justify-content-between">
                    <ul className="fa-ul">
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        Skilly
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        +20 10377742
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        E-mail
                      </li>
                    </ul>
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
                  <div className="text-center">
                    <img src={one} alt="" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 div-hov">
                <div className="req-item shadow  p-3 mt-5 ">
                  <div className="d-flex justify-content-between">
                    <ul className="fa-ul">
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        Skilly
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        +20 10377742
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        E-mail
                      </li>
                    </ul>
                    <div className="">
                      <button
                        className=" shadow edit"
                        style={{ border: "none", outline: "none" }}
                      >
                        <i className="fa-solid fa-pen-to-square "></i>
                      </button>

                      <button
                        className="bg-white warn shadow"
                        style={{ border: "none", outline: "none" }}
                      >
                        <i className="fa-solid fa-trash  bg-white "></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <img src={two} alt="" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 div-hov">
                <div className="req-item shadow  p-3 mt-5 ">
                  <div className="d-flex justify-content-between">
                    <ul className="fa-ul">
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        Skilly
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        +20 10377742
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        E-mail
                      </li>
                    </ul>
                    <div className="">
                      <button
                        className=" shadow edit"
                        style={{ border: "none", outline: "none" }}
                      >
                        <i className="fa-solid fa-pen-to-square "></i>
                      </button>

                      <button
                        className="bg-white warn shadow"
                        style={{ border: "none", outline: "none" }}
                      >
                        <i className="fa-solid fa-trash  bg-white "></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <img src={three} alt="" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 div-hov">
                <div className="req-item shadow  p-3 mt-5 ">
                  <div className="d-flex justify-content-between">
                    <ul className="fa-ul">
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        Skilly
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        +20 10377742
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        E-mail
                      </li>
                    </ul>
                    <div className="">
                      <button
                        className=" shadow edit"
                        style={{ border: "none", outline: "none" }}
                      >
                        <i className="fa-solid fa-pen-to-square "></i>
                      </button>

                      <button
                        className="bg-white warn shadow"
                        style={{ border: "none", outline: "none" }}
                      >
                        <i className="fa-solid fa-trash  bg-white "></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <img src={four} alt="" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 div-hov">
                <div className="req-item shadow  p-3 mt-5 ">
                  <div className="d-flex justify-content-between">
                    <ul className="fa-ul">
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        Skilly
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        +20 10377742
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        E-mail
                      </li>
                    </ul>
                    <div className="">
                      <button
                        className=" shadow edit"
                        style={{ border: "none", outline: "none" }}
                      >
                        <i className="fa-solid fa-pen-to-square "></i>
                      </button>

                      <button
                        className="bg-white warn shadow"
                        style={{ border: "none", outline: "none" }}
                      >
                        <i className="fa-solid fa-trash  bg-white "></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <img src={five} alt="" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 div-hov">
                <div className="req-item shadow  p-3 mt-5 ">
                  <div className="d-flex justify-content-between">
                    <ul className="fa-ul">
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        Skilly
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        +20 10377742
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        E-mail
                      </li>
                    </ul>
                    <div className="">
                      <button
                        className=" shadow edit"
                        style={{ border: "none", outline: "none" }}
                      >
                        <i className="fa-solid fa-pen-to-square "></i>
                      </button>

                      <button
                        className="bg-white warn shadow"
                        style={{ border: "none", outline: "none" }}
                      >
                        <i className="fa-solid fa-trash  bg-white "></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <img src={six} alt="" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 div-hov">
                <div className="req-item shadow  p-3 mt-5 ">
                  <div className="d-flex justify-content-between">
                    <ul className="fa-ul">
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        Skilly
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        +20 10377742
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        E-mail
                      </li>
                    </ul>
                    <div className="">
                      <button
                        className=" shadow edit"
                        style={{ border: "none", outline: "none" }}
                      >
                        <i className="fa-solid fa-pen-to-square "></i>
                      </button>

                      <button
                        className="bg-white warn shadow"
                        style={{ border: "none", outline: "none" }}
                      >
                        <i className="fa-solid fa-trash  bg-white "></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <img src={seven} alt="" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 div-hov">
                <div className="req-item shadow  p-3 mt-5 ">
                  <div className="d-flex justify-content-between">
                    <ul className="fa-ul">
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        Skilly
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        +20 10377742
                      </li>
                      <li className="py-1">
                        <span className="fa-li">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        E-mail
                      </li>
                    </ul>
                    <div className="">
                      <button
                        className=" shadow edit"
                        style={{ border: "none", outline: "none" }}
                      >
                        <i className="fa-solid fa-pen-to-square "></i>
                      </button>

                      <button
                        className="bg-white warn shadow"
                        style={{ border: "none", outline: "none" }}
                      >
                        <i className="fa-solid fa-trash  bg-white "></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <img src={eight} alt="" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
