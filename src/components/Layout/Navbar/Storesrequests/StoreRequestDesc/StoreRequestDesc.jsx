import React from 'react'
import img from '../../../../../assets/images/images/Rectangle 61.png'
export default function StoreRequestDesc() {
  return (
    <div>
      <div className="req-describtion p-4 mt-5 shadow m-auto">
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
        <button className="btn px-4 btn-req2" type="button">Deny</button>
      </div>
    </div>
    </div>
  )
}
