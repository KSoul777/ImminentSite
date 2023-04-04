import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch,Redirect} from "react-router-dom";


// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/css/particles.css";
// pages
import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
