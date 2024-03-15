import React from 'react'
import img from '../../../../assets/images/images/Rectangle 61.png'
import imggg from '../../../../assets/images/images/Rectangle 66.png'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
  
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="s"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     
      <Modal.Body className="req-describtion p-4 bg-white   m-auto">
      <div className="">
      <div className="text-center">
        <img src={img} alt='' />
      </div>
      <p className="pt-5"><span className="fw-bold">Name:</span> Skelly</p>
      <p><span className="fw-bold">phone:</span> 01234758457</p>
      <p><span className="fw-bold">E-mail:</span> ahmed-ali@gmail.com</p>
      <p><span className="fw-bold">City:</span> cairo</p>
      <div className="d-flex">
        <label for="formFile" className="form-label fw-bold px-2">ID: </label>
        <input className="form-control w-25" type="file" id="formFile" />
      </div>
      <div className="d-grid gap-2 d-md-block text-center mt-5">
        <button className="btn px-4 btn-req1" type="button">Accept</button>
        <button className="btn px-4 btn-req2" type="button" onClick={props.onHide}>Deny</button>
      </div>
    </div>
      </Modal.Body>
     
    </Modal>
  );
}



export default function Storesrequests() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="request-part mt-5 ">
      <div className="container bg-white p-5">
      <div className="d-flex justify-content-between ">
          <div className="d-flex">
            <h3 className="fst h2">Requests</h3>
        
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
        <div className="d-flex justify-content-between ">
          <div className="d-flex">
            <h3 className="fst h3">Stores request list</h3>
            <i className="fa-solid fa-list list py-1 req-ico"></i>
          </div>
          
        </div>
        <div className="row mt-3 g-4">
          <div className="col-lg-3 col-md-6">
            <div className="req-item pt-3">
              <img src={img} alt='' className="w-75" />
              <Link to=""><h4 className="py-1">Name</h4></Link>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 px-4 btn-req1" type="button">Accept</button>
                <button className="btn px-4 btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="req-item pt-3">
              <img src={img} alt='' className="w-75" />
              <Link onClick={() => setModalShow(true)}><h4 className="py-1">Name</h4></Link>
              <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 px-4 btn-req1" type="button">Accept</button>
                <button className="btn px-4 btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="req-item pt-3">
              <img src={img} alt='' className="w-75" />
              <Link to=""><h4 className="py-1">Name</h4></Link>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 px-4 btn-req1" type="button">Accept</button>
                <button className="btn px-4 btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="req-item pt-3">
              <img src={imggg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 px-4 btn-req1" type="button">Accept</button>
                <button className="btn px-4 btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="req-item pt-3">
              <img src={img} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 px-4 btn-req1" type="button">Accept</button>
                <button className="btn px-4 btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="req-item pt-3">
              <img src={img} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 px-4 btn-req1" type="button">Accept</button>
                <button className="btn px-4 btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="req-item pt-3">
              <img src={imggg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 px-4 btn-req1" type="button">Accept</button>
                <button className="btn px-4 btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="req-item pt-3">
              <img src={imggg} alt='' className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 px-4 btn-req1" type="button">Accept</button>
                <button className="btn px-4 btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
