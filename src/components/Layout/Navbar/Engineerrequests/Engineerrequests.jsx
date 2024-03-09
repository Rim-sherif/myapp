import React from 'react'
import imgg from '../../../../assets/images/images/Rectangle 61.jpg'
import img  from '../../../../assets/images/images/Rectangle 62.jpg'
import imggg from '../../../../assets/images/images/Rectangle 63.jpg'
import { Link } from 'react-router-dom';




export default function Engineerrequests() {
  return (
  <>
     <div className="request-part  mt-5  ">
      <div className="container p-5   ">
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
            <h3 className="fst h3">Engineer request list</h3>
            <i className="fa-solid fa-list list py-1 req-ico"></i>
          </div>
          
        </div>
        <div className="row mt-3 g-4">
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imggg} alt="" className="w-75" />
              <Link to="EngineerRequestDesc"><h4 className="py-1">Name</h4></Link>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imgg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imgg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imgg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imgg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imgg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imgg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid  d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn  btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imgg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn  btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={img} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imggg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imggg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imggg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imggg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imggg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imggg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imggg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={imgg} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="req-item pt-3">
              <img src={img} alt="" className="w-75" />
              <h4 className="py-1">Name</h4>
              <div className="d-grid gap-2 d-md-block m-2">
                <button className="btn m-1 btn-req1" type="button">Accept</button>
                <button className="btn btn-req2" type="button">Deny</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
