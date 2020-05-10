import React from 'react';
import './App.css';
import MyPage from "./components/MyPage/MyPage";
import {HashRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MyCounter from "./components/MyCounter/MyCounter";

class App extends React.Component {

    render = () => {
        return (
            <HashRouter>
                <div className="App">
                    <Navbar/>
                    <Route exact path="/monday" render={() => <MyPage/>}/>
                    <Route exact path="/counter" render={() => <MyCounter/>}/>
                </div>
            </HashRouter>

        );
    }
}

export default App;