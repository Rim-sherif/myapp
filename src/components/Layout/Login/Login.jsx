import React, { useState } from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
import img from "../.././../assets/images/images/image_processing20200908-23070-1areanr 1 (1).jpg";

const schema = Joi.object({
  mobileNumber: Joi.string()
    .required()
    .pattern(new RegExp(/^\d{12}$/)),
});

export default function Login() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = () => {
    const validationResult = schema.validate(
      { mobileNumber },
      { abortEarly: false }
    );

    if (validationResult.error) {
      const newErrors = {};
      validationResult.error.details.forEach((detail) => {
        newErrors[detail.context.key] = detail.message;
      });
      setErrors(newErrors);
    } else {
      fetch("https://your-verification-api.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobileNumber }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the verification API
          // Redirect to the OTP page if verification is successful
          if (data.success) {
            // Redirect to OTP page
            // You may use React Router for navigation
          } else {
            // Handle unsuccessful verification (e.g., show an error message)
          }
        })
        .catch((error) => {
          console.error("Error during API call:", error);
        });
    }
  };
  return (
    <>
      <div className="admin-login py-5" id="loginn">
        <div className="container">
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

                <div className="input-group mb-3">
                  <input
                    type="number"
                    className={`form-control m-2 rounded-pill ${
                      errors.mobileNumber ? "is-invalid" : ""
                    }`}
                    placeholder="12XXX XXX38"
                    value={mobileNumber}
                    onChange={handleChange}
                  />
                  {errors.mobileNumber && (
                    <div className="invalid-feedback">
                      {errors.mobileNumber}
                    </div>
                  )}
                </div>
                <Link to="Otp" className="Link">
                  <div className="d-grid my-5 col-6 mx-auto">
                    <button
                      className="btn admin-btn"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Get OTP
                    </button>
                  </div>
                </Link>
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
}
