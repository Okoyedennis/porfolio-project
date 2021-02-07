import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h1>Dennis</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon className="nav-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                about me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                how work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
