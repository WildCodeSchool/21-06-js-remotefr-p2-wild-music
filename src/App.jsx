import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import NavBar from './components/nav/NavBar';
import Home from './pages/Home';
import Listener from './pages/Listening';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import StyleList from './components/Style-mood-section/StyleList';


function App() {
  return (
    <div className="App">     
      <NavBar />
			<Switch>
				<Route exact path="/" components={Home}/>
				<Route path="/playlist-songs" components={Listener}/>
				<Route path="/contact"components={Contact}/>
			</Switch> 
      <Footer />
    </div>
  );
}

export default App;
