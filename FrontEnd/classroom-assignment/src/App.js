import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Reservar from "./Pages/Reservar";


export default function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/reservar">
          <Reservar />
        </Route>
      </Switch>
    </Router>
  );
}

