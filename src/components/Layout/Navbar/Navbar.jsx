import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const showNavbar = () => {
      const toggle = document.getElementById("header-toggle");
      const nav = document.getElementById("nav-bar");
      const bodypd = document.getElementById("body-pd");
      const headerpd = document.getElementById("header");

      // Validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
        setNavbarVisible(!isNavbarVisible);

        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      }
    };

    const linkColor = document.querySelectorAll(".nav_link");

    function colorLink() {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }

    document
      .getElementById("header-toggle")
      .addEventListener("click", showNavbar);
    linkColor.forEach((l) => l.addEventListener("click", colorLink));

    return () => {
      document
        .getElementById("header-toggle")
        .removeEventListener("click", showNavbar);
      linkColor.forEach((l) => l.removeEventListener("click", colorLink));
    };
  }, [isNavbarVisible]);

  return (
    <>
      <body id="body-pd">
        <header className="header" id="header">
          <div className="header_toggle">
            <i
              className={`bx ${isNavbarVisible ? "bx-x" : "bx-menu"}`}
              id="header-toggle"
            ></i>
          </div>
          <form className="w-25" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ borderRadius: "15px" }}
            />
          </form>

          <div>
            <i className="fa-solid fa-bell app-header"></i>
            {"   "}
            <i className="fa-solid fa-moon app-header"></i>
          </div>
          <div className="header_img">
            <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
          </div>
        </header>
        <div
          className={`l-navbar ${isNavbarVisible ? "show" : ""}`}
          id="nav-bar"
        >
          <nav className="nav">
            <div>
              <Link to="Profile" className="nav_logo">
                <div className="header_img">
                  {/* <img src="https://i.imgur.com/hczKIze.jpg" alt="" /> */}
                </div>
                <span className="nav_logo-name">Admin Control</span>
              </Link>
              <div className="nav_list">
                <Link to="Requests" className="nav_link">
                  <i className="fa-solid fa-grip-vertical nav_icon"></i>{" "}
                  <span className="nav_name">Dash Board</span>{" "}
                </Link>
                <Link to="Profile" className="nav_link">
                  <i className="fa-solid fa-user nav_icon"></i>{" "}
                  <span className="nav_name">Profile</span>{" "}
                </Link>
                <li className="dropdown">
                  <Link
                    to=""
                    className="nav_link   text-truncate"
                    id="dropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-users  fs-5 bi-bootstrap"></i>{" "}
                    <span className="nav_name ms-1 d-none d-sm-inline">
                      Users
                    </span>{" "}
                  </Link>
                  <ul className="dropdown-menu text-small shadow">
                    <li>
                      <Link className="dropdown-item" to="Clients">
                        Clients
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Engineer">
                        Engineer
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Stores">
                        Stores
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link
                    to=""
                    className="nav_link active  text-truncate"
                    id="dropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-comments fs-5 bi-bootstrap"></i>{" "}
                    <span className="nav_name ms-1 d-none d-sm-inline">
                      Requests
                    </span>{" "}
                  </Link>
                  <ul className="dropdown-menu text-small shadow">
                    <li>
                      <Link className="dropdown-item" to="Engineerrequests">
                        Enginneer Requests
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Storesrequests">
                        Store Requests
                      </Link>
                    </li>
                  </ul>
                </li>
              </div>
            </div>
            <Link to="Login" className="nav_link">
              <i className="fa-solid fa-arrow-right-from-bracket fa-rotate-180 nav_icon"></i>
              <span className="nav_name">SignOut</span>
            </Link>
          </nav>
        </div>
        {/* Container Main start */}
        <div className="height-100 bg-light">
          <Outlet />
        </div>

        {/* Container Main end */}
      </body>

      <script src="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/dist/boxicons.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    </>
  );
};

export default Navbar;
