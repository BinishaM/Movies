import React, {Component} from 'react';
import './App.css';
import TopNav from './container/TopNav'
import Welcome from './views/Welcome/Welcome'
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Search from "./views/Search/Search";
import Categories from "./views/Categories/Categories";

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopNav/>
                <Welcome/>
            </div>
        );
    }
}

export default App;
