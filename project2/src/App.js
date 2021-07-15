import { Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import AboutUs from './components/AbousUs';
import Home from './components/Home';
import AllNews from './components/AllNews';
import NewsDetail from './components/NewsDetail';
import Footer from './components/Footer';
import Sports from './components/Sports';
import LatAme from './components/LatAme'
import { ToastContainer } from 'react-toastify';


import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Economy from './components/Economy';
import Fashion from './components/Fashion';
import Tech from './components/Tech';
import Markets from './components/Markets';
import Business from './components/Business';
import UsNews from './components/UsNews';
import World from './components/World';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Route exact path="/">
      <Home />
      </Route>
      <Route path='/about-us'>
        <AboutUs />
      </Route>
      <Route path='/all-news'>
        <AllNews />
        </Route>
        <Route path='/article/:id'>
        <NewsDetail />
      </Route>
      <Route path='/sports'>
        <Sports />
      </Route>
      <Route path='/latin-america'>
        <LatAme />
      </Route>
      <Route path='/world'>
        <World />
      </Route>
      <Route path='/politics'>
        <UsNews />
      </Route>
      <Route path='/us-news'>
        <LatAme />
      </Route>
      <Route path='/tech'>
        <Tech />
      </Route>
      <Route path='/business'>
        <Business />
      </Route>
      <Route path='/markets'>
        <Markets />
      </Route>
      <Route path='/fashion'>
        <Fashion />
      </Route>
      <Route path='/economy'>
        <Economy />
      </Route>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
