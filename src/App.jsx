import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import GenreList from './pages/GenreList';
import GenreDetails from './components/Style-mood-section/GenreDetails';
import Contact from './pages/Contact';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <Router>    
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/musics" component={GenreList}/>
          <Route exact path ="/musics/:genre" component={GenreDetails} />
          <Route path="/contact" component={Contact}/>
        </Switch>
        </Router> 
      <Footer />
      
    </div>
  );
}

export default App;