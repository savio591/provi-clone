import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";


const Routes = () => {
  const { hostname } = document.location;
  const isSavilExperimentsSite = hostname === "savilexperiments.com.br";
  const appPath = isSavilExperimentsSite ? "/provi-clone" : "/";

  return (
    <BrowserRouter basename={appPath}>
      <Switch>
        <Route exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
