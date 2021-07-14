import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AbousUs';
import Home from './components/Home';
import AllNews from './components/AllNews';
import ContactUs from './components/ContactUs';
import NewsDetail from './components/NewsDetail';


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
      <Route path='/contact-us'>
        <ContactUs />
        </Route>
    </div>
  );
}

export default App;
