import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import NavBar from './components/nav/NavBar';
import Home from './pages/Home';
import Listener from './pages/Listening';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">     
      <NavBar />
      <Router>
			<Switch>
				<Route path="/" components={Home}/>
				<Route path="/playlist-songs" components={Listener}/>
				<Route path="/contact"components={Contact}/>
			</Switch> 
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
