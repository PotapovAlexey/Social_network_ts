import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import {Route} from 'react-router-dom';
import Dialogs from "./Components/Dialogs/Dialogs";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={Profile}/>
                <Route path="/dialogs" render={Dialogs}/>
            </div>
            <Footer/>

        </div>
    );
}

export default App;


