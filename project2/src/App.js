import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AbousUs';



function App() {
  return (
    <div className="App">
     <Navbar />
     <Route exact path="/">
        Home
      </Route>
      <Route path='/about-us'>
        <AboutUs />
      </Route>
    </div>
  );
}

export default App;
