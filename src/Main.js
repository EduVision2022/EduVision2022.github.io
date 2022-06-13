// Backgrounds
import background1 from "./images/b2.jpeg";
import backgroundtesting from "./images/image.png";

// Logos
import logoTransparent from "./images/logomain.png";

// Login Imports
import { refreshTokenSetup } from "./refreshToken";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

// Font Awesome (icons)
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Normal Imports
import { useHistory } from "react-router-dom";

// Components Imports
import Home from "./Home";

const clientId =
  "659959791723-d4cg060bjtk048i427hmblvng5q6g7ne.apps.googleusercontent.com";

const Main = () => {
  const history = useHistory();

  // Redirect function to be used by the navbar buttons and the login button
  const redirect = (page) => {
    history.push("/" + page);
  };

  return (
    <div className="main">
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top"
        style={{
          backgroundColor: "#000000",
          color: "#a89984",
          marginBottom: "96px",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ marginLeft: "1.5rem" }}>
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
                <a className="nav-link disabled">
                  <FontAwesomeIcon icon={faUser} /> Not Logged In
                </a>
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

      {/* Content */}
      <div
        className="first"
        style={{
          background: "url(" + backgroundtesting + ")",
          height: "110vh",
        }}
      >
        <h1
          className="position-absolute start-50 top-50 translate-middle"
          style={{ fontSize: "6rem" }}
        >
          Edu <br />
          Vision
        </h1>
        <h2
          className="position-absolute start-50 top-50 translate-middle"
          style={{ marginTop: "22vh", color: "white", fontSize: "1.5rem" }}
        >
          Viziunea noastră despre educație
        </h2>
        <div
          className="position-absolute start-50 top-50 translate-middle"
          style={{ marginTop: "40vh", paddingBottom: "17vh" }}
        >
          <GoogleLogin
            theme="filled_black"
            shape="pill"
            onSuccess={(credentialResponse) => {
              //console.log(credentialResponse);
              var decoded = jwt_decode(credentialResponse.credential);
              //console.log(decoded);
              history.push({
                pathname: "/home",
                state: {
                  loggedIn: true,
                  profileObject: decoded,
                },
              });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        </div>
        <div
          className="bootstrap-container position-absolute start-50 top-100 translate-middle mx-auto py-12 md:py-16"
          style={{ marginTop: "10vh" }}
        >
          <div className="flex flex-col md:flex-row  ">
            <div className="flex flex-col basis-5/12 items-center justify-center text-white dark:text-black">
              <h3 className="text-center ">
                <span className="text-white" style={{ fontSize: "5rem" }}>
                  <b>100</b>
                  <br />
                </span>
                <span className="text-white">orare generate</span>
              </h3>
            </div>
            <div className="flex basis-2/12 justify-center">
              <div className="h-[1px] w-[100%] my-12 md:my-0 md:w-[1px] md:h-[170px] bg-neutral-300 opacity-50 dark:bg-gray-900"></div>
            </div>
            <div className="flex flex-col basis-5/12 items-center justify-center text-white dark:text-black ">
              <h2 className="text-5xl md:text-7xl leading-[1.05] mb-2 flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="-ml-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="-ml-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="-ml-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="-mx-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path>
                </svg>
              </h2>
              <h3 className="h3 mb-0">Votat de elevi</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="bootstrap-container mx-auto py-12 md:py-16">
          <h3 className="text-center uppercase h3">how eduvision works</h3>
          <h2 className="text-center mb-12 h2">
            Generează orare de învățare în 3 pași simpli
          </h2>
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-between w-[100%] relative my-6 Steps_step-circle-line-vertical__9K5IK">
              <div className="rounded-[50%] p-2 bg-[#7649E7] h-[100px] w-[100px] flex justify-center items-center relative z-10 flex-shrink-0">
                <p className="-ml-[1px] -mt-[1px] text-6xl text-white">1</p>
              </div>
              <h5 className="ml-5 text-lg font-bold w-[100%]">
                Completează un formular
              </h5>
            </div>
            <div className="flex items-center justify-between w-[100%] relative my-6 Steps_step-circle-line-vertical__9K5IK">
              <div className="rounded-[50%] p-2 bg-[#7649E7] h-[100px] w-[100px] flex justify-center items-center relative z-10 flex-shrink-0">
                <p className="-ml-[1px] -mt-[1px] text-6xl text-white">2</p>
              </div>
              <h5 className="ml-5 text-lg font-bold w-[100%]">
                Rezolvă un test
              </h5>
            </div>
            <div className="flex items-center justify-between w-[100%] relative my-6 Steps_step-circle-line-vertical__9K5IK">
              <div className="rounded-[50%] p-2 bg-[#7649E7] h-[100px] w-[100px] flex justify-center items-center relative z-10 flex-shrink-0">
                <p className="-ml-[1px] -mt-[1px] text-6xl text-white">3</p>
              </div>
              <h5 className="ml-5 text-lg font-bold w-[100%]">
                Învață în timp real
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
