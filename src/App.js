import NavBar from './NavBar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
        <NavBar/>
        <div className='content'>
          <Switch>
            <Route path = "/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
