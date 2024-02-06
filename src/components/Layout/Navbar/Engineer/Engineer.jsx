import React from 'react'
import img from '../../../../assets/images/images/Rectangle 61.jpg';
import imge from '../../../../assets/images/images/Rectangle 62.jpg';
import im from '../../../../assets/images/images/Rectangle 63.jpg';
import i from '../../../../assets/images/images/Rectangle 64.jpg';
import imageee from '../../../../assets/images/images/Rectangle 65.jpg';
import { Link } from 'react-router-dom';


export default function Engineer() {
  return (
    <>
       <div className="engineer-section mt-5  ">
      <div className="container bg-white p-5">
        <div className="main-sec">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2 className="fst-italic">EngineerList</h2>
              <Link className="dropdown-item" to="AddEngineer">
              <button className="btn btn-req1 mx-4" type="button" >
                +Add Engineer
              </button></Link>
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
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="engineer-item p-3 mt-5 ">
                <div className="d-flex justify-content-between">
                  <ul className="fa-ul">
                    <li className="py-1">
                      <span className="fa-li"><i className="fa-solid fa-user"></i></span
                      >Mohammed
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-phone"></i></span
                      >+20 10377742
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-envelope"></i></span
                      >E-mail
                    </li>
                  </ul>
                  <div className="edit">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
                <div className="text-center">
                  <img src={img}  alt="" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="engineer-item p-3 mt-5 ">
                <div className="d-flex justify-content-between">
                  <ul className="fa-ul">
                    <li className="py-1">
                      <span className="fa-li"><i className="fa-solid fa-user"></i></span
                      >Mohammed
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-phone"></i></span
                      >+20 10377742
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-envelope"></i></span
                      >E-mail
                    </li>
                  </ul>
                  <div className="edit">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
                <div className="text-center">
                  <img src={img}  alt="" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="engineer-item p-3 mt-5 ">
                <div className="d-flex justify-content-between">
                  <ul className="fa-ul">
                    <li className="py-1">
                      <span className="fa-li"><i className="fa-solid fa-user"></i></span
                      >Mohammed
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-phone"></i></span
                      >+20 10377742
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-envelope"></i></span
                      >E-mail
                    </li>
                  </ul>
                  <div className="edit">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
                <div className="text-center">
                  <img src={img}  alt="" className="w-100" />
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="engineer-item p-3 mt-5 ">
                <div className="d-flex justify-content-between">
                  <ul className="fa-ul">
                    <li className="py-1">
                      <span className="fa-li"><i className="fa-solid fa-user"></i></span
                      >Mohammed
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-phone"></i></span
                      >+20 10377742
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-envelope"></i></span
                      >E-mail
                    </li>
                  </ul>
                  <div className="edit">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
                <div className="text-center">
                  <img src={imageee}  alt="" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="engineer-item p-3 mt-5 ">
                <div className="d-flex justify-content-between">
                  <ul className="fa-ul">
                    <li className="py-1">
                      <span className="fa-li"><i className="fa-solid fa-user"></i></span
                      >Mohammed
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-phone"></i></span
                      >+20 10377742
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-envelope"></i></span
                      >E-mail
                    </li>
                  </ul>
                  <div className="edit">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
                <div className="text-center">
                  <img src={imageee}  alt="" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="engineer-item p-3 mt-5 ">
                <div className="d-flex justify-content-between">
                  <ul className="fa-ul">
                    <li className="py-1">
                      <span className="fa-li"><i className="fa-solid fa-user"></i></span
                      >Mohammed
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-phone"></i></span
                      >+20 10377742
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-envelope"></i></span
                      >E-mail
                    </li>
                  </ul>
                  <div className="edit">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
                <div className="text-center">
                  <img src={imge}  alt="" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="engineer-item p-3 mt-5 ">
                <div className="d-flex justify-content-between">
                  <ul className="fa-ul">
                    <li className="py-1">
                      <span className="fa-li"><i className="fa-solid fa-user"></i></span
                      >Mohammed
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-phone"></i></span
                      >+20 10377742
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-envelope"></i></span
                      >E-mail
                    </li>
                  </ul>
                  <div className="edit">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
                <div className="text-center">
                  <img src={i}  alt="" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="engineer-item p-3 mt-5 ">
                <div className="d-flex justify-content-between">
                  <ul className="fa-ul">
                    <li className="py-1">
                      <span className="fa-li"><i className="fa-solid fa-user"></i></span
                      >Mohammed
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-phone"></i></span
                      >+20 10377742
                    </li>
                    <li className="py-1">
                      <span className="fa-li"
                        ><i className="fa-solid fa-envelope"></i></span
                      >E-mail
                    </li>
                  </ul>
                  <div className="edit">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
                <div className="text-center">
                  <img src={im}  alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
