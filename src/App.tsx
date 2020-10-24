import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import {Route} from 'react-router-dom';
import {AppStateType} from "./Redux/redux-store";
import {useDispatch, useSelector} from "react-redux";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


function App() {

   /* const dispatch = useDispatch();
    const store = useSelector((state: AppStateType) => state)*/
    /*const [state, setState] = useState('');*/


    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">

                <Route exact path="/" render={() =>
                    <Profile />}/>
                <Route exact path="/profile" render={() =>
                    <Profile />}/>

                <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
            </div>
            <Footer/>

        </div>
    );
}

export default App;


