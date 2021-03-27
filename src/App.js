import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { db } from './firebase'

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
