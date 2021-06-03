import React from "react";
import { Route } from "react-router-dom";

export default function Welcome() {
  return (
    // we can use nested route here.
    <section>
      <h1>The welcome page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome new user</p>
      </Route>
    </section>
  );
}
