import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function App() {
	const { user } = useContext(AuthContext);

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					{user ? <Home /> : <Login />}
				</Route>

				<Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>

				<Route path="/register">
					{user ? <Redirect to="/" /> : <Register />}
				</Route>

				<Route path="/profile/:username">
					<Profile />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
