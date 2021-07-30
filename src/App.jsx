import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from './components/nav/NavBar';
import ListeningList from './pages/ListeningList';
import Footer from './components/footer/Footer';
import ListeningDetails from './components/ListeningDetails';
import './App.css';

function App() {
  return (
    <div className="App">     
      <NavBar />
      <Router>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/playlist-songs" component={ListeningList}/>
				<Route path="/contact" component={Contact}/>
        <Route path ='/:id' component={ListeningDetails} />
			</Switch>
      </Router> 
      <Footer />
    </div>
  );
}

export default App;