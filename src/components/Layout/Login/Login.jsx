import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../.././../assets/images/images/image_processing20200908-23070-1areanr 1 (1).jpg";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from 'yup'

export default function Login() {
  let navigate = useNavigate()
  let [apiError, setapiError] = useState("")
  const [phoneNumber, setPhoneNumber] = useState('');


  let validationSchema = Yup.object({
    phoneNumber: Yup.string().required("phone is required").matches(/^01[0-5]\d{1,8}$/, "phone is not correct")
  })


  let formik = useFormik({
    initialValues: {
      phoneNumber: ""
    },
    onSubmit: getCodeApi,
    validationSchema
  })

  async function getCodeApi(value) {
    let req = await axios.post("https://a2z-render.onrender.com/admin/phonenumber", value)
      .catch((err) => {
        setapiError(err.response.data.message)
      })
    console.log(req)
    if (req.data.message === 'OTP sended') {
      localStorage.setItem('phoneNumber', value.phoneNumber);
      setPhoneNumber(value.phoneNumber);
      navigate('/otp')
    }


  }

  return (
    <>

      <div className="admin-login py-5 bg-white" id="loginn">
        <div className="">
          <div className="row ">
            <div className="col-lg-6">
              <div className="admin-phone text-center">
                <h1>welcome to our commuinty</h1>

                <img className="img1" src={img} alt=""></img>

                <h2>Verify your number</h2>
                <p className="py-3">
                  Please enter your mobile number to receive verification code.
                </p>

                <div className="input-group mb-1">
                  {apiError ? <div className="alert alert-danger w-100 ">{apiError}</div>
                    : ""}
                  <form action="" onSubmit={formik.handleSubmit}  >
                    <input
                      type="tel"
                      className={`form-control m-2 rounded-pill `}
                      placeholder="12XXX XXX38"
                      name='phoneNumber' value={formik.values.phoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                    {formik.errors.phoneNumber && formik.touched.phoneNumber ? <div className='alert alert-danger py-2'>{formik.errors.phoneNumber}</div> : ""}
                    <div className="d-grid mt-4 col-6 mx-auto admin-phone">
                      <button
                        className="btn admin-phone "
                        type="submit"
                        disabled={!(formik.isValid && formik.dirty)}

                      >
                        Get OTP
                      </button>

                    </div>

                  </form>
                </div>
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
