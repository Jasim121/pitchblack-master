import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "../util/auth";

export function PrivateRoute(props) {
  const auth = useAuth();

  const { path, exact, component } = props;

  const history = useHistory();

  useEffect(() => {
    // Redirect if not signed in
    if (auth.user === false) {
      // history.push("/auth/signin");
    }
  }, [auth]);

  // Render component now that we have user
  return <Route path={path} exact={exact} component={component} />;
}
