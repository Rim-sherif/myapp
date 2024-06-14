import React from "react";
import { Link } from "react-router-dom";

export default function Stores() {
  return (
    <>
      <div className="store-section">
        <div className="container p-5">
          <div className="main-sec">
            <div className=" justify-content-between">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row mb-2">
                        <div className="col-md-6">
                          <div className="mb-3">
                          <h2 className="fst">Client List</h2>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inline float-md-right mb-3">
                            <div className="search-box ml-2">
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control rounded bg-light border-0"
                                  placeholder="Search..."
                                />
                                <i className="mdi mdi-magnify search-icon"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive mb-4">
                        <table className="table table-centered table-nowrap table-check mb-0">
                          <thead>
                            <tr>
                            
                              <th scope="col">Name</th>
                              <th scope="col">id</th>
                              <th scope="col">Email</th>
                              <th scope="col" style={{ width: "200px" }}>
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                        
                        <td>
                     
                          <label to="#" className="text-body a">
                            Donald Risher
                          </label>
                        </td>
                        <td>fdkii234btrwuignidod</td>
                        <td>DonaldRisher@drezon.com</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="uil uil-pen font-size-18"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="fa-solid fa-trash" size="xlg"  ></i>
                              </a>
                            </li>
                           
                          </ul>
                        </td>
                      </tr>
                            <tr>
                        
                        <td>
                     
                          <label to="#" className="text-body a">
                            Donald Risher
                          </label>
                        </td>
                        <td>fdkii234btrwuignidod</td>
                        <td>DonaldRisher@drezon.com</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="uil uil-pen font-size-18"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="fa-solid fa-trash" size="xlg"  ></i>
                              </a>
                            </li>
                           
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        
                        <td>
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt=""
                            className="avatar-xs rounded-circle mr-2"
                          />
                          <a href="#" className="text-body">
                            Donald Risher
                          </a>
                        </td>
                        <td>fdkii234btrwuignidod</td>
                        <td>DonaldRisher@drezon.com</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="uil uil-pen font-size-18"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="fa-solid fa-trash" size="xlg"  ></i>
                              </a>
                            </li>
                           
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        
                        <td>
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt=""
                            className="avatar-xs rounded-circle mr-2"
                          />
                          <a href="#" className="text-body">
                            Donald Risher
                          </a>
                        </td>
                        <td>fdkii234btrwuignidod</td>
                        <td>DonaldRisher@drezon.com</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="uil uil-pen font-size-18"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="fa-solid fa-trash" size="xlg"  ></i>
                              </a>
                            </li>
                           
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        
                        <td>
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt=""
                            className="avatar-xs rounded-circle mr-2"
                          />
                          <a href="#" className="text-body">
                            Donald Risher
                          </a>
                        </td>
                        <td>fdkii234btrwuignidod</td>
                        <td>DonaldRisher@drezon.com</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="uil uil-pen font-size-18"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="fa-solid fa-trash" size="xlg"  ></i>
                              </a>
                            </li>
                           
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        
                        <td>
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt=""
                            className="avatar-xs rounded-circle mr-2"
                          />
                          <a href="#" className="text-body">
                            Donald Risher
                          </a>
                        </td>
                        <td>fdkii234btrwuignidod</td>
                        <td>DonaldRisher@drezon.com</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="uil uil-pen font-size-18"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="fa-solid fa-trash" size="xlg"  ></i>
                              </a>
                            </li>
                           
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        
                        <td>
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt=""
                            className="avatar-xs rounded-circle mr-2"
                          />
                          <a href="#" className="text-body">
                            Donald Risher
                          </a>
                        </td>
                        <td>fdkii234btrwuignidod</td>
                        <td>DonaldRisher@drezon.com</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="uil uil-pen font-size-18"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="fa-solid fa-trash" size="xlg"  ></i>
                              </a>
                            </li>
                           
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        
                        <td>
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt=""
                            className="avatar-xs rounded-circle mr-2"
                          />
                          <a href="#" className="text-body">
                            Donald Risher
                          </a>
                        </td>
                        <td>fdkii234btrwuignidod</td>
                        <td>DonaldRisher@drezon.com</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="uil uil-pen font-size-18"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="fa-solid fa-trash" size="xlg"  ></i>
                              </a>
                            </li>
                           
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        
                        <td>
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt=""
                            className="avatar-xs rounded-circle mr-2"
                          />
                          <a href="#" className="text-body">
                            Donald Risher
                          </a>
                        </td>
                        <td>fdkii234btrwuignidod</td>
                        <td>DonaldRisher@drezon.com</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="uil uil-pen font-size-18"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="fa-solid fa-trash" size="xlg"  ></i>
                              </a>
                            </li>
                           
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        
                        <td>
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt=""
                            className="avatar-xs rounded-circle mr-2"
                          />
                          <a href="#" className="text-body">
                            Donald Risher
                          </a>
                        </td>
                        <td>fdkii234btrwuignidod</td>
                        <td>DonaldRisher@drezon.com</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="uil uil-pen font-size-18"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="fa-solid fa-trash" size="xlg"  ></i>
                              </a>
                            </li>
                           
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        
                        <td>
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt=""
                            className="avatar-xs rounded-circle mr-2"
                          />
                          <a href="#" className="text-body">
                            Donald Risher
                          </a>
                        </td>
                        <td>fdkii234btrwuignidod</td>
                        <td>DonaldRisher@drezon.com</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="uil uil-pen font-size-18"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="fa-solid fa-trash" size="xlg"  ></i>
                              </a>
                            </li>
                           
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        
                        <td>
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt=""
                            className="avatar-xs rounded-circle mr-2"
                          />
                          <a href="#" className="text-body">
                            Donald Risher
                          </a>
                        </td>
                        <td>fdkii234btrwuignidod</td>
                        <td>DonaldRisher@drezon.com</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="uil uil-pen font-size-18"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="fa-solid fa-trash" size="xlg"  ></i>
                              </a>
                            </li>
                           
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        
                        <td>
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt=""
                            className="avatar-xs rounded-circle mr-2"
                          />
                          <a href="#" className="text-body">
                            Donald Risher
                          </a>
                        </td>
                        <td>fdkii234btrwuignidod</td>
                        <td>DonaldRisher@drezon.com</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-primary"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                              >
                                <i className="uil uil-pen font-size-18"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                className="px-2 text-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                              >
                                <i className="fa-solid fa-trash" size="xlg"  ></i>
                              </a>
                            </li>
                           
                          </ul>
                        </td>
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
      </div>
    </>
  );
}
