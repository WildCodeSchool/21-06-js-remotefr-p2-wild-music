import NavBar from './components/nav/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Listener from './pages/Listening';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import ArtistList from './components/Artists/ArtistList';
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
    </div>
  );
}

export default App;
