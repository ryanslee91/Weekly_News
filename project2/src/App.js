import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AbousUs';
import Home from './components/Home';
import AllNews from './components/AllNews';
import ContactUs from './components/ContactUs';


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
      <Route path='all-news'>
        <AllNews />
      </Route>
      <Route path='contact-us'>
        <ContactUs />
      </Route>
    </div>
  );
}

export default App;
