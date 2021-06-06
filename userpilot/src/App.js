
import './App.css';
import User from './Components/UserComponent/User';
import React ,{useState,useEffect} from 'react'
import Ticket from './Components/TicketsComponent/Ticket'
import axios from "axios";
import SideBare from './Components/SideBarComponent/SideBare';
import Header from './Components/HeaderComponent/Header';
import userStyle from './Components/UserComponent/UserStyle'
import {BrowserRouter,Route,Router} from 'react-router-dom';


function App() {
  const classes = userStyle();  

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Header/>
        <SideBare/>
        <Ticket/>
      <Route path="/Tickets" component={Ticket}/>
      </div>
      </BrowserRouter>
      )
     
  
}

export default App;
