import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal2(props) {
  const [apiError, setApiError] = useState("");

  const headers = {
    authorization: "a2z" + " " + `${localStorage.getItem("userToken")}`,
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required("User name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    gender: Yup.string().required("Gender is required"),
    age: Yup.number()
      .required("Age is required")
      .min(18, "Age must be at least 18")
      .max(100, "Age must be at most 100"),
    address: Yup.string().required("Address is required"),
    spicalAt: Yup.string().required("Major is required"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      phoneNumber: "",
      gender: "",
      age: "",
      address: "",
      spicalAt: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        let { data } = await axios.post(
          "https://a2z-render.onrender.com/admin/addengineer",
          values,
          { headers: headers }
        );

        if (data.message === "Done") {
          console.log(data);
          toast.success("Engineer Added successfully!");
          formik.resetForm();
        }
      } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
          setApiError(err.response.data.message);
        } else {
          setApiError("An error occurred while processing your request.");
        }
      }
    },
  });

  return (
    <Modal
      {...props}
      size="s"
      aria-labelledby="contained-modal-title-vcenter"
      className="modal-0"
      centered
    >
      <Modal.Body>
        <div>
          {apiError && <div className="alert alert-danger">{apiError}</div>}
          <Toaster toastOptions={{ duration: 4000 }} />
          <form onSubmit={formik.handleSubmit}>
            <div className="row g-3 px-3 add-form">
              <div className="row py-2 mt-3">
                <div className="col-md-10 text-start">
                  <h5>Add Engineer</h5>
                </div>
                <div className="col-md-2 text-end">
                  <button className="btn-close" onClick={props.onHide}></button>
                </div>
              </div>
              <div className="col-12 py-2">
                <input
                  type="text"
                  className="form-control shadow"
                  placeholder="User name"
                  aria-label="User name"
                  name="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.userName && formik.errors.userName ? (
                  <div className="alert alert-danger py-2 mt-2">
                    {formik.errors.userName}
                  </div>
                ) : null}
              </div>
              <div className="col-12 py-2">
                <input
                  type="email"
                  className="form-control shadow"
                  placeholder="E-mail"
                  aria-label="E-mail"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="alert alert-danger py-2 mt-2">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="col-12 py-2">
                <input
                  type="password"
                  className="form-control shadow"
                  placeholder="Password"
                  aria-label="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="alert alert-danger py-2 mt-2">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="col-12 py-2">
                <input
                  type="number"
                  className="form-control shadow"
                  placeholder="Phone"
                  aria-label="Phone"
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className="alert alert-danger py-2 mt-2">
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
              </div>
              <div className="col-12 py-2">
                <input
                  type="number"
                  className="form-control shadow"
                  placeholder="Age"
                  aria-label="Age"
                  name="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.age && formik.errors.age ? (
                  <div className="alert alert-danger py-2 mt-2">
                    {formik.errors.age}
                  </div>
                ) : null}
              </div>
              <div className="col-12 py-2">
                <input
                  type="text"
                  className="form-control shadow"
                  placeholder="City"
                  aria-label="City"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="alert alert-danger py-2 mt-2">
                    {formik.errors.address}
                  </div>
                ) : null}
              </div>
              <div className="col-12 py-2">
                <select
                  className="form-control shadow"
                  aria-label="Major"
                  name="spicalAt"
                  value={formik.values.spicalAt}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" label="Select major" />
                  <option value="Major1" label="Major1" />
                  <option value="Major2" label="Major2" />
                  <option value="Major3" label="Major3" />
                  <option value="Major4" label="Major4" />
                </select>
                {formik.touched.spicalAt && formik.errors.spicalAt ? (
                  <div className="alert alert-danger py-2 mt-2">
                    {formik.errors.spicalAt}
                  </div>
                ) : null}
              </div>
              <div className="col-6 ">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={formik.values.gender === "male"}
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
              </div>
              <div className="col-6 ">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    checked={formik.values.gender === "female"}
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
              <div className="text-center">
                <div className="d-grid gap-2 d-md-block p-3">
                  <button
                    className="btn px-4 btn-save mx-3 shadow"
                    type="submit"
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
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default function Requests() {
  const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <div>
      <div className="request-part ">
        <div className="container p-5">
          <div className="main-sec">
            <h4>Dashboard</h4>

            <div className="row mt-3 g-5">
              <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div class=" tm-block-card1">
                  <div class="card-body p-3">
                    <div class="row">
                      <div class="col-8">
                        <div class="numbers">
                          <p class="text-sm mb-0 text-uppercase font-weight-bold">
                            Today's Money
                          </p>
                          <h5 class="font-weight-bolder">$53,000</h5>
                          <p class="mb-0">
                            <span class="text-success text-sm font-weight-bolder">
                              +55%
                            </span>
                            since yesterday
                          </p>
                        </div>
                      </div>
                      <div class="col-4 text-end">
                        <div class="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle d-flex align-items-center justify-content-center">
                          <i
                            class="fa-solid fa-sack-dollar fa-lg opacity-10"
                            style={{ color: "#ffffff" }}
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div class=" tm-block-card1">
                  <div class="card-body p-3">
                    <div class="row">
                      <div class="col-8">
                        <div class="numbers">
                          <p class="text-sm mb-0 text-uppercase font-weight-bold">
                            Today's Users
                          </p>
                          <h5 class="font-weight-bolder">2,300</h5>
                          <p class="mb-0">
                            <span class="text-success text-sm font-weight-bolder">
                              +3%
                            </span>
                            since last week
                          </p>
                        </div>
                      </div>
                      <div class="col-4 text-end">
                        <div class="icon icon-shape1 bg-gradient-warning shadow-warning text-center rounded-circle d-flex align-items-center justify-content-center">
                          <i
                            class="fa-solid fa-earth-americas fa-lg opacity-10"
                            style={{ color: "#ffffff" }}
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div class=" tm-block-card1">
                  <div class="card-body p-3">
                    <div class="row">
                      <div class="col-8">
                        <div class="numbers">
                          <p class="text-sm mb-0 text-uppercase font-weight-bold">
                            New Clients
                          </p>
                          <h5 class="font-weight-bolder">+3,462</h5>
                          <p class="mb-0">
                            <span class="text-danger text-sm font-weight-bolder">
                              -2%
                            </span>
                            since last quarter
                          </p>
                        </div>
                      </div>
                      <div class="col-4 text-end">
                        <div class="icon icon-shape2 bg-gradient-warning shadow-warning text-center rounded-circle d-flex align-items-center justify-content-center">
                          <i
                            class="fa-solid fa-newspaper fa-lg opacity-10"
                            style={{ color: "#ffffff" }}
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class=" tm-block-card1">
                  <div class="card-body p-3">
                    <div class="row">
                      <div class="col-8">
                        <div class="numbers">
                          <p class="text-sm mb-0 text-uppercase font-weight-bold">
                            Sales
                          </p>
                          <h5 class="font-weight-bolder">$103,430</h5>
                          <p class="mb-0">
                            <span class="text-success text-sm font-weight-bolder">
                              +5%
                            </span>{" "}
                            than last month
                          </p>
                        </div>
                      </div>
                      <div class="col-4 text-end">
                        <div class="icon icon-shape3 bg-gradient-warning shadow-warning text-center rounded-circle d-flex align-items-center justify-content-center">
                          <i
                            class="fa-solid fa-cart-shopping fa-lg opacity-10"
                            style={{ color: "#ffffff" }}
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  col-sm-12">
                <div className="tm-block-card  py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center mt-3">
                      <div className="col-auto ">
                        <div className="text-xs h5 font-weight-bold text-uppercase">
                          New Requests
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-comments fa-2x text-gray-300 io"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="tm-block-card py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center  mt-3">
                      <div className="col-auto">
                        <div className="text-xs h5 font-weight-bold text-uppercase mb-1">
                          Create Report
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-download fa-2x io"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="tm-block-card py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center  mt-3">
                      <div className="col-auto">
                        <div className="text-xs h5 font-weight-bold text-uppercase mb-1">
                          Add Engineer
                        </div>
                      </div>
                      <div className="col-auto">
                        <button
                          className="io bg-white"
                          onClick={() => setModalShow2(true)}
                        >
                          <i className="fa-solid fa-circle-plus fa-2x"></i>
                        </button>
                        <MyVerticallyCenteredModal2
                          show={modalShow2}
                          onHide={() => setModalShow2(false)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="tm-block-card  py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center mt-3">
                      <div className="col-auto ">
                        <div className="text-xs h5 font-weight-bold text-uppercase">
                          Orders pend
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-comments fa-2x text-gray-300 io"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container mt-5">
                <div className="row tm-content-row">
                  <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
                    <div className=" tm-block tm-block-products">
                      <h3 className="text-titel-top text-center mb-3">
                        All Product Categories
                      </h3>
                      <div className="tm-product-table-container">
                        <table className="table table-hover tm-table-small tm-product-table">
                          <thead>
                            <tr>
                              <th scope="col">&nbsp;</th>
                              <th scope="col">PRODUCT NAME</th>
                              <th scope="col">UNIT SOLD</th>
                              <th scope="col">IN STOCK</th>
                              <th scope="col">EXPIRE DATE</th>
                              <th scope="col">&nbsp;</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">
                                <input type="checkbox" />
                              </th>
                              <td className="tm-product-name">
                                Lorem Ipsum Product 1
                              </td>
                              <td>1,450</td>
                              <td>550</td>
                              <td>28 March 2019</td>
                              <td>
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <input type="checkbox" />
                              </th>
                              <td className="tm-product-name">
                                Lorem Ipsum Product 2
                              </td>
                              <td>1,250</td>
                              <td>750</td>
                              <td>21 March 2019</td>
                              <td>
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <input type="checkbox" />
                              </th>
                              <td className="tm-product-name">
                                Lorem Ipsum Product 2
                              </td>
                              <td>1,250</td>
                              <td>750</td>
                              <td>21 March 2019</td>
                              <td>
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <input type="checkbox" />
                              </th>
                              <td className="tm-product-name">
                                Lorem Ipsum Product 2
                              </td>
                              <td>1,250</td>
                              <td>750</td>
                              <td>21 March 2019</td>
                              <td>
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <input type="checkbox" />
                              </th>
                              <td className="tm-product-name">
                                Lorem Ipsum Product 2
                              </td>
                              <td>1,250</td>
                              <td>750</td>
                              <td>21 March 2019</td>
                              <td>
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <input type="checkbox" />
                              </th>
                              <td className="tm-product-name">
                                Lorem Ipsum Product 2
                              </td>
                              <td>1,250</td>
                              <td>750</td>
                              <td>21 March 2019</td>
                              <td>
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <input type="checkbox" />
                              </th>
                              <td className="tm-product-name">
                                Lorem Ipsum Product 2
                              </td>
                              <td>1,250</td>
                              <td>750</td>
                              <td>21 March 2019</td>
                              <td>
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <input type="checkbox" />
                              </th>
                              <td className="tm-product-name">
                                Lorem Ipsum Product 2
                              </td>
                              <td>1,250</td>
                              <td>750</td>
                              <td>21 March 2019</td>
                              <td>
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <input type="checkbox" />
                              </th>
                              <td className="tm-product-name">
                                Lorem Ipsum Product 2
                              </td>
                              <td>1,250</td>
                              <td>750</td>
                              <td>21 March 2019</td>
                              <td>
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <input type="checkbox" />
                              </th>
                              <td className="tm-product-name">
                                Lorem Ipsum Product 2
                              </td>
                              <td>1,250</td>
                              <td>750</td>
                              <td>21 March 2019</td>
                              <td>
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <button className="btn  btn-Delete-selected-products btn-block text-uppercase mt-3">
                        Delete selected products
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
                    <div className=" tm-block tm-block-product-categories">
                      <h3 className="text-titel-top text-center mb-3">
                        Product Categories
                      </h3>
                      <div className="tm-product-table-container">
                        <table className="table tm-table-small tm-product-table">
                          <tbody>
                            <tr>
                              <td className="tm-product-name">
                                Product Category 1
                              </td>
                              <td className="text-center">
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="tm-product-name">
                                Product Category 2
                              </td>
                              <td className="text-center">
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="tm-product-name">
                                Product Category 1
                              </td>
                              <td className="text-center">
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="tm-product-name">
                                Product Category 1
                              </td>
                              <td className="text-center">
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="tm-product-name">
                                Product Category 1
                              </td>
                              <td className="text-center">
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="tm-product-name">
                                Product Category 1
                              </td>
                              <td className="text-center">
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="tm-product-name">
                                Product Category 1
                              </td>
                              <td className="text-center">
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="tm-product-name">
                                Product Category 1
                              </td>
                              <td className="text-center">
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="tm-product-name">
                                Product Category 1
                              </td>
                              <td className="text-center">
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="tm-product-name">
                                Product Category 1
                              </td>
                              <td className="text-center">
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="tm-product-name">
                                Product Category 1
                              </td>
                              <td className="text-center">
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="tm-product-name">
                                Product Category 1
                              </td>
                              <td className="text-center">
                               <Link to="#" className="tm-product-delete-link">
                                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                               </Link>
                              </td>
                            </tr>
                            {/* Continue with other rows */}
                          </tbody>
                        </table>
                      </div>

                      <button className="btn btn-Delete-selected-products btn-block text-uppercase mt-3">
                        Add new category
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="addproduct mt-5 mb-3 col-12">
                <div className="row">
                  <div className="col-xl-12 col-lg-10 col-md-12 col-sm-12 mx-auto">
                    <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                      <div className="row">
                        <div className="col-12">
                          <h3 className="text-titel-top text-center mb-3">
                            Add Product
                          </h3>
                          <hr />
                        </div>
                      </div>
                      <div className="row tm-edit-product-row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                          <form className="tm-edit-product-form">
                            <div className="form-group mb-3">
                              <label className="font-color" htmlFor="name">
                                Product Name
                              </label>
                              <input
                                id="name"
                                name="name"
                                type="text"
                                className="form-control validate"
                                required
                              />
                            </div>
                            <div className="form-group mb-3">
                              <label
                                className="font-color"
                                htmlFor="description"
                              >
                                Description
                              </label>
                              <textarea
                                className="form-control validate"
                                rows="3"
                                required
                              ></textarea>
                            </div>
                            <div className="form-group mb-3">
                              <label className="font-color" htmlFor="category">
                                Category
                              </label>
                              <select
                                className="custom-select tm-select-accounts"
                                id="category"
                              >
                                <option defaultValue>Select category</option>
                                <option value="1">New Arrival</option>
                                <option value="2">Most Popular</option>
                                <option value="3">Trending</option>
                              </select>
                            </div>
                            <div className="row">
                              <div className="form-group mb-3 col-xs-12 col-sm-6">
                                <label
                                  className="font-color"
                                  htmlFor="expire_date"
                                >
                                  Expire Date
                                </label>
                                <input
                                  id="expire_date"
                                  name="expire_date"
                                  type="text"
                                  className="form-control validate"
                                  data-large-mode="true"
                                />
                              </div>
                              <div className="form-group mb-3 col-xs-12 col-sm-6">
                                <label className="font-color" htmlFor="stock">
                                  Units In Stock
                                </label>
                                <input
                                  id="stock"
                                  name="stock"
                                  type="text"
                                  aria-label="User name"
                                  className="form-control validate"
                                  required
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group mb-3 col-xs-12 col-sm-6">
                                <label
                                  className="font-color"
                                  htmlFor="expire_date"
                                >
                                  Price
                                </label>
                                <input
                                  id="expire_date"
                                  name="expire_date"
                                  type="text"
                                  className="form-control validate"
                                  data-large-mode="true"
                                />
                              </div>
                              <div className="form-group mb-3 col-xs-12 col-sm-6">
                                <label className="font-color" htmlFor="stock">
                                  Price After Discount
                                </label>
                                <input
                                  id="stock"
                                  name="stock"
                                  type="text"
                                  className="form-control validate"
                                  required
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                          <div className="tm-product-img-dummy mx-auto">
                            <i
                              className="fas fa-cloud-upload-alt tm-upload-icon"
                              onClick={() =>
                                document.getElementById("fileInput").click()
                              }
                            ></i>
                          </div>
                          <div className="custom-file mt-3 mb-3">
                            <input
                              id="fileInput"
                              type="file"
                              style={{ display: "none" }}
                            />
                            <input
                              type="button"
                              className="btn btn-block mx-auto btn-color"
                              value="UPLOAD PRODUCT IMAGE"
                              onClick={() =>
                                document.getElementById("fileInput").click()
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-color btn-block text-uppercase"
                          >
                            Add Product Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="addproduct mt-5 mb-3 col-12">
                <div class="tm-block tm-block-product-categories">
                  <h2 class="text-titel-top text-center mb-3">Orders List</h2>
                  <div className="tm-product-table-container">
                    <table class="table tm-table-small tm-product-table">
                      <thead>
                        <tr>
                          <th scope="col">ORDER NO.</th>
                          <th scope="col">STATUS</th>
                          <th scope="col">OPERATORS</th>
                          <th scope="col">LOCATION</th>
                          <th scope="col">DISTANCE</th>
                          <th scope="col">START DATE</th>
                          <th scope="col">EST DELIVERY DUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <b>#122349</b>
                          </th>
                          <td>
                            <div class="tm-status-circle moving"></div>Moving
                          </td>
                          <td>
                            <b>Oliver Trag</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>485 km</b>
                          </td>
                          <td>16:00, 12 NOV 2018</td>
                          <td>08:00, 18 NOV 2018</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <b>#122348</b>
                          </th>
                          <td>
                            <div class="tm-status-circle pending"></div>Pending
                          </td>
                          <td>
                            <b>Jacob Miller</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>360 km</b>
                          </td>
                          <td>11:00, 10 NOV 2018</td>
                          <td>04:00, 14 NOV 2018</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <b>#122347</b>
                          </th>
                          <td>
                            <div class="tm-status-circle cancelled"></div>
                            Cancelled
                          </td>
                          <td>
                            <b>George Wilson</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>340 km</b>
                          </td>
                          <td>12:00, 22 NOV 2018</td>
                          <td>06:00, 28 NOV 2018</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <b>#122346</b>
                          </th>
                          <td>
                            <div class="tm-status-circle moving"></div>Moving
                          </td>
                          <td>
                            <b>William Aung</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>218 km</b>
                          </td>
                          <td>15:00, 10 NOV 2018</td>
                          <td>09:00, 14 NOV 2018</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <b>#122345</b>
                          </th>
                          <td>
                            <div class="tm-status-circle pending"></div>Pending
                          </td>
                          <td>
                            <b>Harry Ryan</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>280 km</b>
                          </td>
                          <td>15:00, 11 NOV 2018</td>
                          <td>09:00, 17 NOV 2018</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <b>#122344</b>
                          </th>
                          <td>
                            <div class="tm-status-circle pending"></div>Pending
                          </td>
                          <td>
                            <b>Michael Jones</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>218 km</b>
                          </td>
                          <td>18:00, 12 OCT 2018</td>
                          <td>06:00, 18 OCT 2018</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <b>#122343</b>
                          </th>
                          <td>
                            <div class="tm-status-circle moving"></div>Moving
                          </td>
                          <td>
                            <b>Timmy Davis</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>218 km</b>
                          </td>
                          <td>12:00, 10 OCT 2018</td>
                          <td>08:00, 18 OCT 2018</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <b>#122342</b>
                          </th>
                          <td>
                            <div class="tm-status-circle moving"></div>Moving
                          </td>
                          <td>
                            <b>Oscar Phyo</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>420 km</b>
                          </td>
                          <td>15:30, 06 OCT 2018</td>
                          <td>09:30, 16 OCT 2018</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <b>#122341</b>
                          </th>
                          <td>
                            <div class="tm-status-circle moving"></div>Moving
                          </td>
                          <td>
                            <b>Charlie Brown</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>300 km</b>
                          </td>
                          <td>11:00, 10 OCT 2018</td>
                          <td>03:00, 14 OCT 2018</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <b>#122340</b>
                          </th>
                          <td>
                            <div class="tm-status-circle cancelled"></div>
                            Cancelled
                          </td>
                          <td>
                            <b>Wilson Cookies</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>218 km</b>
                          </td>
                          <td>17:30, 12 OCT 2018</td>
                          <td>08:30, 22 OCT 2018</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <b>#122339</b>
                          </th>
                          <td>
                            <div class="tm-status-circle moving"></div>Moving
                          </td>
                          <td>
                            <b>Richard Clamon</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>150 km</b>
                          </td>
                          <td>15:00, 12 OCT 2018</td>
                          <td>09:20, 26 OCT 2018</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <b>#122339</b>
                          </th>
                          <td>
                            <div class="tm-status-circle moving"></div>Moving
                          </td>
                          <td>
                            <b>Richard Clamon</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>150 km</b>
                          </td>
                          <td>15:00, 12 OCT 2018</td>
                          <td>09:20, 26 OCT 2018</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <b>#122339</b>
                          </th>
                          <td>
                            <div class="tm-status-circle moving"></div>Moving
                          </td>
                          <td>
                            <b>Richard Clamon</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>150 km</b>
                          </td>
                          <td>15:00, 12 OCT 2018</td>
                          <td>09:20, 26 OCT 2018</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <b>#122339</b>
                          </th>
                          <td>
                            <div class="tm-status-circle moving"></div>Moving
                          </td>
                          <td>
                            <b>Richard Clamon</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>150 km</b>
                          </td>
                          <td>15:00, 12 OCT 2018</td>
                          <td>09:20, 26 OCT 2018</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <b>#122339</b>
                          </th>
                          <td>
                            <div class="tm-status-circle moving"></div>Moving
                          </td>
                          <td>
                            <b>Richard Clamon</b>
                          </td>
                          <td>
                            <b>London, UK</b>
                          </td>
                          <td>
                            <b>150 km</b>
                          </td>
                          <td>15:00, 12 OCT 2018</td>
                          <td>09:20, 26 OCT 2018</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
