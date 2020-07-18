import React, {Component} from 'react';
import SideNav from "./container/SideNav";
import './Welcome.css'
import {Route, Switch} from "react-router";
import routes from '../../AppRoutes';

class Welcome extends Component {

    state = {
        sideNavItems: [
            {label: 'Dashboard', path: '/'},
            {label: 'Categories', path: '/categories'},
        ],
        transVal: 0
    };
    translationHandler = (val) => {
        console.log(val);
        this.setState({
            transVal: val
        })
    };
    alertHandler = (val) => {
        alert(val)
    };


    render() {
        return (
            <section id="welcome">
                <SideNav translationChangeHandler={this.translationHandler}
                         transVal={this.state.transVal}
                         {...this.props}
                         sideNavItems={this.state.sideNavItems}/>
                <Switch>
                    {routes.map((route, key) => (
                        <Route path={route.path} component={route.component} exact={route.exact} key={key}/>
                    ))}
                </Switch>
            </section>
        );
    }
}

export default Welcome;