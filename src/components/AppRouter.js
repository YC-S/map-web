import React from "react";

//need to download react-router-dom
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HelpPage from "./HelpPage";
import ProfilePage from "./ProfilePage";
import Landing from "./Landing";
import MapPage from "./MapPage";
import PageNotFound from "./PageNotFound";

const AppRouter = () => (
  <BrowserRouter>
    <div>
        <Switch>
          {/* urlpath to match and the component to render for the page. exact specifies the exact url*/}
          <Route path="/" exact={true} component={Landing} />
          <Route path="/map" exact={true} component={MapPage} /> 
          <Route path="/help" component={HelpPage} />
          <Route path="/profile" component={ProfilePage} /> 
          {/* this Route without a path will match every other pages */}
          <Route component={PageNotFound} />       
        </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

