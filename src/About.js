// Backgrounds
import background1 from "./images/b2.jpeg";
import backgroundtesting from "./images/image.png";
import backgroundreversed from "./images/image2.png";

// Logos
import logoTransparent from "./images/logomain.png";

// Font Awesome (icons)
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Normal Imports
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();

  // Redirect function to be used by the navbar buttons and the login button
  const redirect = (page) => {
    history.push("/" + page);
  };

  return (
    <div
      style={{ background: "url(" + backgroundreversed + ")", height: "110vh" }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top"
        style={{
          backgroundColor: "#000000",
          color: "#a89984",
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
      <div
        className="about bg-white"
        style={{
          height: "100vh",
          background: "url(" + backgroundreversed + ")",
        }}
      >
        <h1>About</h1>
      </div>
    </div>
  );
};

export default About;