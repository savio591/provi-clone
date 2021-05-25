import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
