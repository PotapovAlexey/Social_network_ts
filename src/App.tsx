import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import {Route} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainerRemove";


function App() {



    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">

                <Route exact path="/" render={() =>
                    <ProfileContainer />}/>
                <Route  path="/profile/:userId?" render={() =>
                    <ProfileContainer />}/>

                <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route exact path="/users" render={() => <UsersContainer/>}/>
            </div>
            <Footer/>

        </div>
    );
}

export default App;


