import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListeningList from './pages/ListeningList';
import ListeningDetails from './components/ListeningDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
         <Route exact path ='/' component={ListeningList} />
         <Route path ='/:id' component={ListeningDetails} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
