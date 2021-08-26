import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from './components/nav/NavBar';
import Listener from './pages/Listening';
import Footer from './components/footer/Footer';
// import ListeningList from './pages/ListeningList';
import ListeningDetails from './components/ListeningDetails';
import './App.css';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App"> 
      <Router>    
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/playlist-songs" component={Listener}/>
          <Route path="/contact" component={Contact}/>
          <Route path ='/:id' component={ListeningDetails} />
        </Switch>
        </Router> 
      <Footer />
      
    </div>
  );
}

export default App;