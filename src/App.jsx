import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import GenreList from './pages/GenreList';
import GenreDetails from './components/Style-mood-section/GenreDetails';
import Contact from './pages/Contact';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';
import { useEffect, useState } from 'react';
import './App.css';
// import Cart from './components/Cart/Cart';

function App() {
  
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    
    setTimeout (() => {
      setLoader(false);
    }, 2500)

  }, [])

  return loader ? (
    <Loader /> 
  ) : (
    <div className="App">
      <Router>    
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/musics" component={GenreList}/>
          <Route exact path ="/musics/:genre" component={GenreDetails} />
          <Route path="/contact" component={Contact}/>
        </Switch>
        </Router> 
      <Footer /> 
    </div>
  );
}

export default App;