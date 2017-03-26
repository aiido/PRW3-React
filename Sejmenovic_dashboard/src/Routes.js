import AppComponent from './components/Main'
import React, {Component} from 'react';

// Routing
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

// import the view home, projects and login
import Home from './components/Home';
import Projects from './components/Projects';
import Login from './components/Login';
import ProjectView from './components/ProjectView';
// component for the roots
class Root extends Component {
    /*
    setting up some routes
    main root is : /
    index is : /Home
    for the list of projects : /Projects
    */
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={AppComponent}>
                    <IndexRoute component={Home}/>
                    <Route path="/Projects" component={Projects} />
                    <Route path="/Projects/:id" component={ProjectView} />
                    <Route path="/Login" component={Login} />
                </Route>
            </Router>
        );
    }
}

export default Root;
