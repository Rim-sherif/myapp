import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/images/image_processing20200908-23070-1areanr 1.jpg";

export default function Otp() {
  return (
    <section>
      <div>
        <div className="admin-login py-5" id="ootp">
          <div className="">
            <div className="row">
              <div className="col-lg-6">
                <div className="admin-login-form text-center">
                  <h1>welcome to our commuinty</h1>
                  <img className="img1" src={img} alt=""></img>
                  <h2>OTP Verification</h2>
                  <p className="py-3">
                    We have sent you access code via SMS for Mobile
                    Verification.
                  </p>
                  <div className="otp-number d-flex justify-content-center gx-2">
                    <div className="otp mx-2">5</div>
                    <div className="otp mx-2">5</div>
                    <div className="otp mx-2">5</div>
                    <div className="otp mx-2">5</div>
                    <div className="otp mx-2">5</div>
                    <div className="otp mx-2">5</div>
                  </div>
                  <Link to="/navbar" className="Link">
                    <div className="d-grid my-5 col-6 mx-auto">
                      <button className="btn admin-btn" type="button">
                        Login
                      </button>
                    </div>
                  </Link>
                  <p className="my-1">Didn’t Received the OTP?</p>
                  <Link href="#" className="text-decoration-none ">
                    Resend Code
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <img src={img} className="w-100 mt-4" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
