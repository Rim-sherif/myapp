import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../../../assets/images/images/9829 3.png'

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
        toggle.classList.toggle("fa-xmark");
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

  const headerToggle = document.getElementById("header-toggle");

  // Validate that headerToggle exists
  if (headerToggle) {
    headerToggle.addEventListener("click", showNavbar);
  }

  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Cleanup function
  return () => {
    if (headerToggle) {
      headerToggle.removeEventListener("click", showNavbar);
    }
    linkColor.forEach((l) => l.removeEventListener("click", colorLink));
  };
}, [isNavbarVisible]);

  return (
    <body id="body-pd" >
      <header className="header" id="header">
        <div className="header_toggle">
          <i
            className={`fa-solid ${isNavbarVisible ? "fa-xmark" : "fa-bars"}`}
            id="header-toggle"
          ></i>
        </div>
        
        <div className=" "  >
          <input
            className=" me-2 search-1"
            type="search"
            placeholder="   Search...."
            aria-label="Search"
          />
        </div>

        <div>
      
          <i className="nav_icon fa-regular fa-bell fa-xl " style={{color: "#ffffff"}}></i>
          {"   "}
        </div>
        
        <Link to="Profile">{" "}

          <div className="header_img">
            <img src="https://i.imgur.com/hczKIze.jpg" alt="" />{" "}
            
          </div>
        </Link>
      </header>
      <div className={`l-navbar ${isNavbarVisible ? "show" : ""}`} id="nav-bar">
              <img className= "logo_img" src={logo} alt="" />{" "}
        <nav className="nav">
          <div>
          
            <div className="nav_list">
              <Link to="Requests" className="nav_link">
                <i className="fa-solid fa-grip-vertical fa-xl nav_icon"></i>{" "}
                <span className="nav_name">Dash Board</span>
              </Link>
              <Link to="Profile" className="nav_link">
                <i className="fa-solid fa-user nav_icon"></i>{" "}
                <span className="nav_name">Profile</span>{" "}
              </Link>
              <Link to="Clients" className="nav_link">
                <i className="fa-solid fa-users nav_icon"></i>{" "}
                <span className="nav_name">Users</span>{" "}
              </Link>
              <Link to="Stores" className="nav_link">
                <i className="fa-solid fa-store nav_icon"></i>{" "}
                <span className="nav_name">Stores</span>{" "}
              </Link>
              <Link to="Engineer" className="nav_link">
                <i className="fa-solid fa-helmet-safety nav_icon"></i>{" "}
                <span className="nav_name">Engineers</span>{" "}
              </Link>
              <li className="dropdown">
                <Link
                  to=""
                  className="nav_link text-truncate"
                  id="dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-comments fs-5 bi-bootstrap nav_icon"></i>{" "}
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
          <Link to="" className="nav_link">
            <i className="fa-solid fa-arrow-right-from-bracket fa-rotate-180 nav_icon"></i>
            <span className="nav_name">LogOut</span>
          </Link>
        </nav>
      </div>
      {/* Container Main start */}
      <div className="height-100" >
        <Outlet />
      </div>

      {/* Container Main end */}
    </body>
  );
};

export default Navbar;
