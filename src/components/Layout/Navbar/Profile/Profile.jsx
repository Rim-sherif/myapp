import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@bootdey.com");
  const [phoneNumber, setPhoneNumber] = useState("011 223 344 556 677");
  const [gender, setGender] = useState("male"); // Add gender state
  const [age, setAge] = useState("30");
  const [imageUrl, setImageUrl] = useState(
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
  );
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEditMode(false);
  };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//   try {
//     const response = await fetch("https://a2z-render.onrender.com/admin/phonenumber", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ name,phoneNumber,email })
//     });
    
//     if (!response.ok) {
//       throw new Error("Failed to update phone number");
//     }
    
  
//     setEditMode(false);
//   } catch (error) {
//     console.error(error);
//   }
// };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="">
      <div className="admin-profile mt-5">
        <div className="container p-5  bg-white">
          <div className="row" id="user-profile">
            <div className="col-lg-3 col-md-4 col-sm-4 h-100vh">
              <div className="main-box left-side-profile">
                <h2>{name}</h2>

                <div className="flex-shrink-0">
                  <img
                    src={imageUrl}
                    alt=""
                    className="img-fluid"
                    style={{ width: "220px", borderRadius: "10px" }}
                  />
                </div>

                <div className="profile-stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i> <span>Super User</span>
                </div>

                <div className="profile-since">Member since: Jan 2012</div>

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
                        John_Doe
                      </Link>
                    </li>
                    <li>
                      <i className="fa-li fab fa-facebook-square"></i>
                      <Link className="a" href="#">
                        John_Doe
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
            </div>

            <div className="col-lg-9 col-md-8   col-sm-4">
              <div className="main-box clearfix">
                <div className="profile-header">
                  <h3>
                    <span>Admin info</span>
                  </h3>
                  {editMode ? (
                    <button
                      type="submit"
                      className="btn edit-profile"
                      onClick={handleSubmit}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn edit-profile"
                      onClick={() => setEditMode(true)}
                    >
                      <i className="fa fa-pencil-square fa-lg"></i> Edit profile
                    </button>
                  )}
                </div>

                <div className="row profile-user-info">
                  <div className="col-sm-8 profile-user-details">
                    <form onSubmit={handleSubmit}>
                      {!editMode && (
                        <div className="profile-user-details clearfix">
                          <div className="profile-user-details-label">Name</div>
                          <div className="profile-user-details-value">
                            {name}
                          </div>
                        </div>
                      )}
                      {editMode && (
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={!editMode}
                          />
                        </div>
                      )}

                      {!editMode && (
                        <div className="profile-user-details clearfix">
                          <div className="profile-user-details-label">
                            Email
                          </div>
                          <div className="profile-user-details-value">
                            {email}
                          </div>
                        </div>
                      )}
                      {editMode && (
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={!editMode}
                          />
                        </div>
                      )}

                      {!editMode && (
                        <div className="profile-user-details clearfix">
                          <div className="profile-user-details-label">
                          PhoneNumber
                          </div>
                          <div className="profile-user-details-value">
                          {phoneNumber}
                          </div>
                        </div>
                      )}
                      {editMode && (
                        <div className="form-group">
                          <label>Phone Number</label> 
                          <input
                            type="tel"
                            className="form-control"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            disabled={!editMode}
                          />
                        </div>
                      )}

{!editMode && (
                        <div className="profile-user-details clearfix">
                          <div className="profile-user-details-label">Gender</div>
                          <div className="profile-user-details-value">
                            {gender}
                          </div>
                        </div>
                      )}
                      {editMode && (
                        <div className="form-group">
                          <label>Gender</label>
                          <input
                            type="text"
                            className="form-control"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            disabled={!editMode}
                          />
                        </div>
                      )}

                      {/* Age Input */}
                      {!editMode && (
                        <div className="profile-user-details clearfix">
                          <div className="profile-user-details-label">Age</div>
                          <div className="profile-user-details-value">
                            {age}
                          </div>
                        </div>
                      )}
                      {editMode && (
                        <div className="form-group">
                          <label>Age</label>
                          <input
                            type="number"
                            className="form-control"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            disabled={!editMode}
                          />
                        </div>
                      )}

                      {editMode && (
                        <div className="form-group">
                          <label>Image</label>
                          <input
                            className="form-control"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            disabled={!editMode}
                          />
                        </div>
                      )}
                    </form>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-7">
                  <div className="profile-header">
                    <h3>
                      <span>Activation</span>
                    </h3>
                  </div>
                  <div
                    className="table-responsive   mb-1"
                    style={{ height: "75vh" }}
                  >
                    <table className="table ">
                      <thead>
                        <tr>
                          <th>Admin</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody id="myTable">
                        <tr className="table-row">
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
