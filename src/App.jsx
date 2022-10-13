import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/index';

import AxiosExamplePage from './pages/AxiosExample';
import CarDetailPage from './pages/CarDetail';
import EventPage from './pages/Event';
import Homepage from './pages/Homepage';
import NetworkRequestPage from './pages/HTTPRequest';
import ReactLifeCyclePage from './pages/ReactLifecycle';
import RoutingPage from './pages/Routing';
import StateManagementPage from './pages/StateManagement';

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={<Homepage />} />
						<Route exact path="/event" element={<EventPage />} />
						<Route exact path="/routing" element={<RoutingPage />} />
						<Route exact path="/http-request" element={<NetworkRequestPage />} />
						<Route exact path="/axios-example" element={<AxiosExamplePage />} />
						<Route exact path="/react-lifecycle" element={<ReactLifeCyclePage />} />
						<Route exact path="/car/:id" element={<CarDetailPage />} />
						<Route exact path="/state-management" element={<StateManagementPage />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
