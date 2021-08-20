import routers from "./router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const generateRoutes = (routers) => {
  return routers.map((route, index) => {
    // Private Router
    if (route.auth == true)
      return (
        <Route
          key={route.key}
          exact={route.exact}
          path={route.path}
          component={route.component}
        ></Route>
      );

    // Public Router
    if (route.auth == false)
      return (
        <Route
          key={route.key}
          exact={route.exact}
          path={route.path}
          component={route.component}
        ></Route>
      );
  });
};

function App() {
  return (
    <div>
      <Router>
        <Switch>
          { generateRoutes(routers) }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
