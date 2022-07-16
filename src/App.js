import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { Switch, Route, Redirect } from "react-router-dom";

	function App() {
		return (
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
			</Switch>
		);
	}

export default App;
