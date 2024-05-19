import React from "react";





export default function Stores() {
 
  return (
    <>
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
    </>
  );
}
