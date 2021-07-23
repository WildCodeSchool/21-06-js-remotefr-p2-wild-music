import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from './components/nav/NavBar';
import Listener from './pages/Listening';
import Footer from './components/footer/Footer';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">     
      <NavBar />
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/playlist-songs" component={Listener}/>
				<Route path="/contact"component={Contact}/>
			</Switch> 
      <Footer />
    </div>
  );
}

export default App;