import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return <div>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/auth/signin">
            <SignIn onSignIn={onSignIn}></SignIn>
          </Route>
          <Route path="/auth/signup">
            <SignUp onSignIn={onSignIn}></SignUp>
          </Route>
        </Switch>
      </Router>
    </StylesProvider>

  </div>
}