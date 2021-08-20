import { Switch, Route } from "react-router-dom";
import { Home } from "../home";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      {/**
       * 完全一致の時のみ発動するように仕向けるのがexac
       */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <switch>
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <switch>
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </switch>
        )}
      />
    </Switch>
  );
};
