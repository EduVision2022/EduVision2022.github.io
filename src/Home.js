// Logos
import logoTransparent from "./images/logomain.png";

// Icons
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// State hooks
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Normal Imports
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const [timeLeft, setTimeLeft] = useState(5);

  const location = useLocation();

  const history = useHistory();
  // Redirect function to be used by the navbar buttons and the login button
  const redirect = (page) => {
    history.push("/" + page);
  };

  {
    /*Security measures */
  }
  useEffect(() => {
    if (location.state == undefined) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
  });
  if (location.state == undefined) {
    return (
      <div className="home">
        <div className="bg-white" style={{ height: "100vh" }}>
          <FontAwesomeIcon
            icon={faBan}
            style={{ width: "5rem", height: "5rem", color: "#453260" }}
          />
          <h1>
            Not authorized to access this page. Redirecting to home page in{" "}
            {timeLeft >= 0 ? timeLeft : redirect("")} seconds.
          </h1>
        </div>
      </div>
    );
  }
  {
    /*End of security measures */
  }

  const loggedIn = location.state.loggedIn;
  const profileObject = location.state.profileObject;

  const username = profileObject.name;
  const profilePicture = profileObject.picture;

  return (
    <div className="home">
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top"
        style={{
          backgroundColor: "#000000",
          color: "#a89984",
          marginBottom: "96px",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ marginLeft: "1.5rem" }}>
            <img
              src={logoTransparent}
              alt=""
              width="32"
              height="32"
              className="d-inline-block align-text-bottom"
            />
            EduVision
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{}}>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={profilePicture}
                    className="inline-block"
                    alt={faUser}
                    width="32"
                    height="32"
                    style={{
                      marginRight: "0.5rem",
                      outline: "1px solid #fff",
                      marginTop: "-0.3rem",
                      borderRadius: "50%",
                    }}
                  />

                  {username}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Timetables
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    redirect("about");
                  }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    redirect("contact");
                  }}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    redirect("docs");
                  }}
                >
                  Docs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/EduVision2022"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              {/*<li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faUser} /> Profile
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
      </li>*/}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default { Home };
