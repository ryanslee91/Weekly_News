import { Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import AboutUs from './components/AbousUs';
import Home from './components/Home';
import AllNews from './components/AllNews';
import NewsDetail from './components/NewsDetail';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';


import './App.css';
import 'react-toastify/dist/ReactToastify.css';

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
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
