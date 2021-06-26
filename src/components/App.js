import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Profile from './Profile';
import Login from './Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/profile/:username'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
