import React from 'react';
import img from '../../../../assets/images/images/Rectangle 62.jpg';



export default function Profile() {
  return (
    <div>
      <div className="admin-profile  ">
      <div className="container p-4 mt-5  w-75  bg-white">
        <h2 className="brdr">Account information</h2>
        <div className="d-flex py-5 row">
          <div className="profile-img col-lg-4 col-md-12">
            <img
              style={{width: "75%"}}
              src={img}
              alt=""
            />
          </div> 
           
              <div className="col-lg-4 col-md-12 profile-info ">
                <p><span>Name: </span> Rdam smith</p>
                <p><span> Age: </span> 26 Year</p>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender"
                  checked
                />
                <label className="form-check-label" for="gender"> Male</label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender"
                  
                />
                <label className="form-check-label" for="gender"> Female </label>
              </div>
              <div className=" col-lg-4 col-md-12 profile-info">
                <p><span>E-mail: </span>example@gmail.com</p>
                <p><span>Phone: </span>+20 104579473</p>
                <p><span>Role: </span>Adminstrator</p>
              </div>
            
            
          
          
    
        </div>
        <div className="item  px-5 ">
          <h2 className="brdr">Your Activiation</h2>
          <div className="d-flex justify-content-between pt-3 ">
            <p> you made updates to the user's information.</p>
            <p>At 9 AM today</p>
          </div>
          <div className="d-flex justify-content-between ">
            <p> you made updates to the user's information.</p>
            <p>At 9 AM today</p>
          </div>
          <div className="d-flex justify-content-between ">
            <p> you made updates to the user's information.</p>
            <p>At 9 AM today</p>
          </div>
          <div className="d-flex justify-content-between ">
            <p> you made updates to the user's information.</p>
            <p>At 9 AM today</p>
          </div>
          <div className="d-flex justify-content-between mb-3 ">
            <p> you made updates to the user's information.</p>
            <p>At 9 AM today</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
