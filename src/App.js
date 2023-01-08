import React from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navbar,
  ShortDesc,
  Community,
  OpenSource,
  Guidance,
  Profile,
  Learning,
  Hackathons,
} from "./components";
const App = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ShortDesc />
        {/* 
        {!isLoading && user && <Community name={user.nickname} />}
        {!isLoading && user && <OpenSource />}
        {!isLoading && user && <Guidance />} */}
        <Switch>
          <Route path="/Community" component={Community} />
          <Route path="/OpenSource" component={OpenSource} />
          <Route path="/Guidance" component={Guidance} />
          <Route path="/Learning" component={Learning} />
          <Route path="/Hackathons" component={Hackathons} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
