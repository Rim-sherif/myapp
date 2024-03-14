import React, { useState } from "react";
import { Link } from "react-router-dom";
// import img from '../../../../assets/images/images/Rectangle 62.jpg';

export default function Profile() {
  const [editMode, setEditMode] = useState(true);
  const [imageSrc, setImageSrc] = useState(
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
  );

  const handleEditClick = () => {
    setEditMode(false);
  };

  const handleSaveClick = () => {
    setEditMode(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="container">
      <div className="admin-profile mt-5">
        <div className="container p-5  bg-white">
          <div className="row" id="user-profile">
            <div className="col-lg-3 col-md-4 col-sm-4 h-100vh">
              <div className="main-box left-side-profile">
                <h2>John Doe </h2>
                <div className="profile-status">
                  <i className="fa fa-check-circle"></i> Online
                </div>
                <div className="flex-shrink-0">
                  {/* <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt=""
                    className="img-fluid"
                    style={{ width: "190px", borderRadius: "10px" }}
                  /> */}
                  <div className="media-container">
                    {!editMode && (
                      <div className="media-overlay">
                        <input
                          type="file"
                          id="media-input"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                        <i className="an an-write media-icon"></i>
                      </div>
                    )}
                    <figure className="media-object">
                      <img className="img-object" src={imageSrc} alt="" />
                    </figure>
                  </div>
                  <div className="media-control">
                    {editMode ? (
                      <button className="bt" onClick={handleEditClick}>
                        <i className="an an-write"></i>Upload Photo
                      </button>
                    ) : (
                      <button
                        className="btn save-profile"
                        onClick={handleSaveClick}
                      >
                        <i className="an an-save"></i>Save
                      </button>
                    )}
                  </div>
                </div>

                {/* <div className="profile-stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i> <span>Super User</span>
                </div>

                <div className="profile-since">Member since: Jan 2012</div> */}

                <div className="profile-details">
                  <ul className="fa-ul">
                    <li>
                      <i className="fa-li fa fa-truck"></i>Orders:{" "}
                      <span>456</span>
                    </li>
                    <li>
                      <i className="fa-li fa fa-comment"></i>Posts:{" "}
                      <span>828</span>
                    </li>
                    {/* <li>
                      <i className="fa-li fa fa-tasks"></i>Tasks done:{" "}
                      <span>1024</span>
                    </li> */}
                  </ul>
                </div>

                {/* <div className="profile-message-btn center-block text-center">
                  <Link href="#" className="btn btn-success">
                    <i className="fa fa-envelope"></i> Send message
                  </Link>
                </div> */}
              </div>
            </div>

            <div className="col-lg-9 col-md-8   col-sm-4">
              <div className="main-box clearfix">
                <div className="profile-header">
                  <h3>
                    <span>Admin info</span>
                  </h3>
                  <Link href="#" className="btn btn-primary edit-profile">
                    <i className="fa fa-pencil-square fa-lg"></i> Edit profile
                  </Link>
                </div>

                <div className="row profile-user-info">
                  <div className="col-sm-8">
                    <div className="profile-user-details clearfix">
                      <div className="profile-user-details-label">Name</div>
                      <div className="profile-user-details-value">John Doe</div>
                    </div>

                    <div className="profile-user-details clearfix">
                      <div className="profile-user-details-label">Email</div>
                      <div className="profile-user-details-value">
                        johndoe@bootdey.com
                      </div>
                    </div>
                    <div className="profile-user-details clearfix">
                      <div className="profile-user-details-label">
                        PhoneNumber
                      </div>
                      <div className="profile-user-details-value">
                        011 223 344 556 677
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 profile-social">
                    <ul className="fa-ul">
                      <li>
                        <i className="fa-li fab fa-twitter-square "></i>
                        <Link className="a" href="#">
                          @scjohansson
                        </Link>
                      </li>
                      <li>
                        <i className="fa-li fab fa-linkedin"></i>
                        <Link className="a" href="#">
                          John Doe
                        </Link>
                      </li>
                      <li>
                        <i className="fa-li fab fa-facebook-square"></i>
                        <Link className="a" href="#">
                          John Doe
                        </Link>
                      </li>
                      <li>
                        <i className="fa-li fab fa-skype"></i>
                        <Link className="a" href="#">
                          Black_widow
                        </Link>
                      </li>
                      <li>
                        <i className="fa-li fab fa-instagram"></i>
                        <Link className="a" href="#">
                          Avenger_Scarlett
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-7">
                  <div className="profile-header">
                    <h3>
                      <span>Your Activation</span>
                    </h3>
                  </div>
                  <div
                    className="table-responsive   mb-1"
                    style={{ height: "60vh" }}
                  >
                    <table className="table ">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Admin</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody id="myTable">
                        <tr className="table-row">
                          <td>1</td>
                          <td>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                              className="rounded-circle"
                              style={{ width: "40px" }}
                              alt="Avatar"
                            />
                          </td>
                          <td>2/2/2022</td>
                          <td>...</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                              className="rounded-circle "
                              style={{ width: "40px" }}
                              alt="Avatar"
                            />
                          </td>
                          <td>15/3/2023</td>
                          <td>...</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                              className="rounded-circle shadow-4"
                              style={{ width: "40px" }}
                              alt="Avatar"
                            />
                          </td>
                          <td>30/2/2024</td>
                          <td>...</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                              className="rounded-circle"
                              style={{ width: "40px" }}
                              alt="Avatar"
                            />
                          </td>
                          <td>2/2/2022</td>
                          <td>...</td>
                        </tr>
                        <tr className="success">
                          <td>5</td>
                          <td>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                              className="rounded-circle"
                              style={{ width: "40px" }}
                              alt="Avatar"
                            />
                          </td>
                          <td>2/2/2022</td>
                          <td>...</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                              className="rounded-circle"
                              style={{ width: "40px" }}
                              alt="Avatar"
                            />
                          </td>
                          <td>2/2/2022</td>
                          <td>...</td>
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