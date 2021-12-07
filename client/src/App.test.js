import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Home from './components/Home/Home';

test('renders learn react link', () => {
	const history = createMemoryHistory();
	render(
		<Router history={history}>
			<App />
		</Router>
	);
	expect(screen.getByText(/go/i)).toBeInTheDocument();
});

test('NavBar not exists in landing', () => {
	const history = createMemoryHistory();
	history.push('/');
	render(
		<Router history={history}>
			<App />
		</Router>
	);
	expect(screen.queryByText(/Hevert Gelis/i)).not.toBeInTheDocument();
});

test('/home', () => {
	const history = createMemoryHistory();
	history.push('/home');
	render(
		<Router history={history}>
			<Home />
		</Router>
	);
	expect(screen.getByText(/Hevert Gelis/i)).toBeInTheDocument();
});

xtest('Create Activity', () => {
	const history = createMemoryHistory();
	history.push('/create/activity');
	render(
		<Router history={history}>
			<App />
		</Router>
	);
	expect(screen.queryByText(/Hevert Gelis/i)).toBeInTheDocument();
});
