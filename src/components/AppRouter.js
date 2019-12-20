import React from "react";

//need to download react-router-dom
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HelpPage from "./HelpPage";
import ProfilePage from "./ProfilePage";
import Landing from "./Landing";
import PageNotFound from "./PageNotFound";
import MapPage from "./MapPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      {/* this swtich will loop through each of the route and check if there is a match */}
      <Switch>
        {/* urlpath to match and the component to render for the page. exact specifies the exact url*/}
        <Route path="/" exact={true} component={Landing} />
        <Route path="/help" component={HelpPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/map" component={MapPage} />
        {/* this Route without a path will match every other pages */}
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;