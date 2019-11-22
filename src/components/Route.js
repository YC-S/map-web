import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Map from './Map'
import Landing from './users'
import App from 'App'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/landing" component={Landing} />
            <Route path="/map" component={Map} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))