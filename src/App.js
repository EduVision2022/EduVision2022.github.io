import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components import
import Main from "./Main";
import Testing from "./Testing";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="659959791723-d4cg060bjtk048i427hmblvng5q6g7ne.apps.googleusercontent.com">
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/home" component={Home.Home} />
          </Switch>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;

/********* APP STRUCTURE
 * -> Main.js : Main Component (Main page with descriptions, before login)
 *  |_ Login.js : Login Component (Login page)
 *   |_ LAPI(Intermediate step) -> Home.js : Home Component (After login, options dependant on user (create timetables, manage them etc.)
 * -> About.js : About Component
 * -> Contact.js : Contact Component
 ************/
