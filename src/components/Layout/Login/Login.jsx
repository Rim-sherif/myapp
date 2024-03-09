import React from "react";
import { Link } from "react-router-dom";

// import Joi from "joi";
import img from "../.././../assets/images/images/image_processing20200908-23070-1areanr 1 (1).jpg";

// const schema = Joi.object({
//   mobileNumber: Joi.string()
//     .required()
//     .pattern(new RegExp(/^\d{12}$/)),
// });

export default function Login() {
  
    
  return (
    <>
      <div className="admin-login py-5" id="loginn">
        <div className="">
          <div className="row ">
            <div className="col-lg-6">
              <div className="admin-login-form text-center">
                <h1>welcome to our commuinty</h1>
                {/* <svg
                className="my-4"
                
                width="102"
                height="102"
                viewBox="0 0 102 102"
                fill="none"
              >
                <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
              
              </svg> */}

                <img className="img1" src={img} alt=""></img>

                <h2>Verify your number</h2>
                <p className="py-3">
                  Please enter your mobile number to receive verification code.
                </p>
                <form >
                  <div id="">
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className={"form-control m-2 rounded-pill"}
                    placeholder="12XXX XXX38"
                   
                  />
                </div>
                <Link to="Otp" className="Link">
                  <div className="d-grid my-5 col-6 mx-auto">
                    <button
                      className="btn admin-btn"
                      type="submit"
                    >
                      Get OTP
                    </button>
                  </div>
                </Link>
                </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={img} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

