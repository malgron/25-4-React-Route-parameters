import React from "react";
import UserProfile from "./UserProfile.js";
import { Link, Switch, Route } from "react-router-dom";

function NoMatch() {
  return (
    <h1>404 Not Found</h1>
  );
}


function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <Link to="/user/:userId"></Link>
      <Link to="/user/new">New User</Link>
      {Array(10)
        .fill()
        .map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`} data-testid={`user-${id}`}>
              User{id}
            </Link>
          </div>
        ))}
      // Setup routes with route paramaters as needed
      <Switch>
        <Route exact path="/user/new">
          <h1>Unable to create a new user</h1>
        </Route>
        <Route path="/user/:userId">
          <UserProfile />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
