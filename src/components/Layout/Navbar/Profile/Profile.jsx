import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Profile() {
  const [imageUrl, setImageUrl] = useState(
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
  );
  const [editMode, setEditMode] = useState(false);
  const [apiError, setApiError] = useState('');

  const headers = {
    token: `a2z ${localStorage.getItem('userToken')}`
  };

  const fetchAdminInfo = async () => {
    try {
      const { data } = await axios.get("https://a2z-render.onrender.com/admin/getadmininfo", { headers });
      return data;
    } catch (err) {
      setApiError('Failed to fetch admin info.');
      return {};
    }
  };

  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFieldValue('imageUrl', reader.result);
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const profileSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    gender: Yup.string().required('Gender is required'),
    age: Yup.number().required('Age is required').positive('Age must be a positive number').integer('Age must be an integer')
  });

  return (
    <div className="">
  <div className="admin-profile mt-5">
    <div className="container p-5 bg-white">
      <div className="row" id="user-profile">
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
          <div className="main-box left-side-profile">
            <h2>{editMode ? "Edit Profile" : "Admin Info"}</h2>
            <div className="flex-shrink-0 text-center">
              <img
                src={imageUrl}
                alt=""
                className="img-fluid"
                style={{ width: "220px", borderRadius: "10px" }}
              />
            </div>
            <div className="profile-stars text-center">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i> <span>Super User</span>
            </div>
            <div className="profile-since text-center">Member since: Jan 2012</div>
            <div className="profile-details">
              <ul className="fa-ul">
                <li>
                  <i className="fa-li fa fa-truck"></i>Orders: <span>456</span>
                </li>
                <li>
                  <i className="fa-li fa fa-comment"></i>Posts: <span>828</span>
                </li>
              </ul>
            </div>
            <div className="profile-social">
              <ul className="fa-ul">
                <li>
                  <i className="fa-li fab fa-twitter-square"></i>
                  <Link className="a" to="#">
                    @scjohansson
                  </Link>
                </li>
                <li>
                  <i className="fa-li fab fa-linkedin"></i>
                  <Link className="a" to="#">
                    John_Doe
                  </Link>
                </li>
                <li>
                  <i className="fa-li fab fa-facebook-square"></i>
                  <Link className="a" to="#">
                    John_Doe
                  </Link>
                </li>
                <li>
                  <i className="fa-li fab fa-skype"></i>
                  <Link className="a" to="#">
                    Black_widow
                  </Link>
                </li>
                <li>
                  <i className="fa-li fab fa-instagram"></i>
                  <Link className="a" to="#">
                    Avenger_Scarlett
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <div className="main-box clearfix">
            <div className="profile-header">
              <h3>
                <span>Admin info</span>
              </h3>
              {editMode ? (
                <button
                  type="submit"
                  className="btn edit-profile"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
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
            {apiError && <div className="alert alert-danger">{apiError}</div>}
            <div className="row profile-user-info">
              <div className="col-sm-12 profile-user-details">
                {editMode ? (
                  <Formik
                    initialValues={{
                      name: '',
                      email: '',
                      phoneNumber: '',
                      gender: '',
                      age: '',
                      imageUrl: imageUrl,
                    }}
                    validationSchema={profileSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                      setSubmitting(true);
                      try {
                        const { data } = await axios.put("https://a2z-render.onrender.com/admin/updateprofile", values, { headers });
                        if (data.message === "Profile updated successfully") {
                          setEditMode(false);
                          setImageUrl(values.imageUrl);
                        }
                      } catch (err) {
                        setApiError('Failed to update profile.');
                      }
                      setSubmitting(false);
                    }}
                    enableReinitialize
                  >
                    {({ setFieldValue, isSubmitting }) => (
                      <Form>
                        <div className="form-group">
                          <label>Name</label>
                          <Field type="text" className="form-control" name="name" />
                          <ErrorMessage name="name" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <Field type="email" className="form-control" name="email" />
                          <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                          <label>Phone Number</label>
                          <Field type="tel" className="form-control" name="phoneNumber" />
                          <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                          <label>Gender</label>
                          <Field type="text" className="form-control" name="gender" />
                          <ErrorMessage name="gender" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                          <label>Age</label>
                          <Field type="number" className="form-control" name="age" />
                          <ErrorMessage name="age" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                          <label>Image</label>
                          <input
                            className="form-control"
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, setFieldValue)}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                          Save
                        </button>
                      </Form>
                    )}
                  </Formik>
                ) : (
                  <div>
                    <div className="profile-user-details clearfix">
                      <div className="profile-user-details-label">Name</div>
                      <div className="profile-user-details-value">John Doe</div>
                    </div>
                    <div className="profile-user-details clearfix">
                      <div className="profile-user-details-label">Email</div>
                      <div className="profile-user-details-value">johndoe@bootdey.com</div>
                    </div>
                    <div className="profile-user-details clearfix">
                      <div className="profile-user-details-label">Phone Number</div>
                      <div className="profile-user-details-value">011 223 344 556 677</div>
                    </div>
                    <div className="profile-user-details clearfix">
                      <div className="profile-user-details-label">Gender</div>
                      <div className="profile-user-details-value">male</div>
                    </div>
                    <div className="profile-user-details clearfix">
                      <div className="profile-user-details-label">Age</div>
                      <div className="profile-user-details-value">30</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-12 col-lg-12">
              <div className="profile-header">
                <h3>
                  <span>Activation</span>
                </h3>
              </div>
              <div
                className="table-responsive mb-1"
                style={{ height: "75vh" }}
              >
                <table className="table">
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
                          className="rounded-circle"
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
