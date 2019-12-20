import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import MapPage from "./MapPage";
import PageNotFound from "./PageNotFound";
import ProfilePage from "./ProfilePage";
import HelpPage from "./HelpPage";


const AppRouter = () => (
    <BrowserRouter>
    <div>
      {/* this swtich will loop through each of the route and check if there is a match */}
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
)

export default AppRouter;

