import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <Link className="navbar-brand" to="/" style={{ fontWeight: "700" }}>
          I -∧ NY
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`${this.state.open ? "" : "collapse "}navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/"
              >
                R MUTT
              </Link>
            </li>

            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/saved"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/Designs"
              >
                DESIGNS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/saved"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/Gallery"
              >
                GALLERY
              </Link>
            </li>

            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/saved"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/Artwork"
              >
                ARTWORK
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
