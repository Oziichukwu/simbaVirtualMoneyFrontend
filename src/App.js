import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import ListTransaction from './components/ListTransactions'
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import netflix from '../src/img/netflixBackground.png'
import moneypic from '../src/img/money-transfer-mobile-banking.jpg'




const App = () => {
  return (
    <div style={{ backgroundImage: `url(${moneypic})`}} className="babe" >
      <HeaderComponent/>
    <div className="container">
    <Routes>
    <Route exact path = "/" element = {<Signup/>}/>
    <Route path="/log-in" element = {<Login/>}/>
    <Route path="/transactions" element = {<ListTransaction/>}/>
    <Route path = "/sign-up" element = {<Signup/>}/>
     
     </Routes>
    </div>
    <FooterComponent/>

    </div>
  )
}

export default App