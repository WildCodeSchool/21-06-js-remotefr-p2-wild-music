import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from './components/nav/NavBar';
import Listener from './pages/Listening';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';
import { Switch, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

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