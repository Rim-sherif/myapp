import React from 'react'

export default function AddEngineer() {
  return (
    <>
      <div className="add-engineer-sec mt-5 ">
      <div className="container">
        <div className="add-engineer bg-white  shadow m-auto py-5">
          <div className="d-flex justify-content-between px-4">
            <h3 className=" ">Add Engineer</h3>
          <i className="fa-solid fa-xmark "></i>
          </div>
          
            <div className="row g-3 px-3 add-form">
              <div className="col-6 py-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div className="col-6 py-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
              <div className="col-12 py-2">
                <input
                  type="E-mail"
                  className="form-control"
                  placeholder="E-mail"
                  aria-label="E-mail"
                />
              </div>
              <div className="col-12 py-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone"
                  aria-label="Phone"
                />
              </div>
              <div className="col-12 py-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  aria-label="Last name"
                />
              </div>
              <div className="col-12 py-2">
                <label for="formFile" className="form-label text-muted px-2"
                  >ID:
                </label>
                <input className="form-control w-100" type="file" id="formFile" />
              </div>
              <div className="col-12 py-2">
                <label for="formFile" className="form-label text-muted px-2"
                  >ID:
                </label>
                <input className="form-control w-100" type="file" id="formFile" />
              </div>

              <div className="text-center">
                <div className="d-grid gap-2 d-md-block p-3">
                  <button className="btn px-4 btn-req1 mx-3" type="button">
                    Save
                  </button>
                  <button className="btn px-4 btn-req2 mx-3" type="button">
                    Reset
                  </button>
                </div>
              </div>
            </div>
        
        </div>
      </div>
      </div>
    </>
  )
}
