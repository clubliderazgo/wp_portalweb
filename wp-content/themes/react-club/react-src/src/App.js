import React from "react";
import logo from "./logo.png";
import "./App.css";

import Menu from './components/menu/Menu';
import Home from './components/pages/Home'

class App extends React.Component {
    render () {
        return (
            <div className="main">
                <header className="app-header">
                    <div className="logo">
                        <img alt="logo-club-liderazgo" src={logo} />
                        CLUB DE <strong>LIDERAZGO</strong>
                    </div>
                    <Menu />
                </header>
                <Home />
            </div>
        )
    }
}

export default App;
