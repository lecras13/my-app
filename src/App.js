import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialog/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogPages}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePages}
                                                                  updateNewPostText={props.updateNewPost}
                                                                  addPost={props.addPost}/>}/>
                    {/*<Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/*/}
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
