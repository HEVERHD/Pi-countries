import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPages/LandingPage';
import Home from './components/Home/Home';
import ActivityCreate from './components/ActivityCreate/ActivityCreate';
import Detail from './components/Detail/Detail';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';

const App = () => {
	// const [darkMode, setDarkMode] = useState(false);
	// const [setChecked] = useState(false);
	// const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';

	// function changeMedia(mq) {
	// 	setDarkMode(mq.matches);
	// 	setChecked(mq.matches);
	// }

	// useEffect(() => {
	// 	const mq = window.matchMedia('(prefers-color-scheme: dark)');
	// 	mq.addListener(changeMedia);
	// 	setDarkMode(mq.matches);

	// 	return () => {
	// 		mq.removeListener(changeMedia);
	// 	};
	// }, []);
	return (
		<main className>
			<>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={LandingPage}></Route>
						<Route path='/'>
							<Navbar />
							<Route exact path='/home' component={Home}></Route>
							<Route exact path='/detail/:id' component={Detail}></Route>
							<Route
								exact
								path='/create/activity'
								component={ActivityCreate}
							></Route>
							<Route exact path='/about' component={About}></Route>
						</Route>
					</Switch>
				</BrowserRouter>
			</>
		</main>
	);
};

export default App;
