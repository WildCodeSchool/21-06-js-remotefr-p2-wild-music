import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from './components/nav/NavBar';
import Listener from './pages/Listening';
import Footer from './components/footer/Footer';
// import ListeningList from './pages/ListeningList';
import ListeningDetails from './components/ListeningDetails';
import './App.css';

function App() {
  return (
    <div className="App">     
      <NavBar />
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/playlist-songs" component={Listener}/>
				<Route path="/contact" component={Contact}/>
        <Route path ='/:id' component={ListeningDetails} />
			</Switch> 
      <Footer />
    </div>
  );
}

export default App;