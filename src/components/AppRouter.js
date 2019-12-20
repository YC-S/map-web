import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import MapPage from "./MapPage";


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Switch>
            <Route path="/" exact={true} component={Landing} />
            <Route path="/map" exact={true} component={MapPage} />         
        </Switch>
    </div>
    
    </BrowserRouter>
)

export default AppRouter;