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
      <Router>    
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/musics" component={ListeningList}/>
          <Route path ='/musics/:genre' component={ListeningDetails} />
          <Route path="/contact" component={Contact}/>
        </Switch>
        </Router> 
      <Footer />
      
    </div>
  );
}

export default App;