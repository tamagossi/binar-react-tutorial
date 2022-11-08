import 'react-dropzone-uploader/dist/styles.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/index';
import LanguageProvider from './contexts/language.context';

import AuthenticationPage from './pages/Authentication';
import AxiosExamplePage from './pages/AxiosExample';
import CarDetailPage from './pages/CarDetail';
import ContextPage from './pages/Context';
import EventPage from './pages/Event';
import Homepage from './pages/Homepage';
import MediaHandlingPage from './pages/MediaHandling';
import NetworkRequestPage from './pages/HTTPRequest';
import OAuthPage from './pages/OAuth';
import ReactLifeCyclePage from './pages/ReactLifecycle';
import RoutingPage from './pages/Routing';
import StateManagementPage from './pages/StateManagement';
import StoragePage from './pages/Storage';
import TestingPage from './pages/Testing';

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<LanguageProvider>
					<BrowserRouter>
						<Routes>
							<Route exact path="/" element={<Homepage />} />
							<Route exact path="/authentication" element={<AuthenticationPage />} />
							<Route exact path="/axios-example" element={<AxiosExamplePage />} />
							<Route exact path="/car/:id" element={<CarDetailPage />} />
							<Route exact path="/context" element={<ContextPage />} />
							<Route exact path="/event" element={<EventPage />} />
							<Route exact path="/http-request" element={<NetworkRequestPage />} />
							<Route exact path="/media-handling" element={<MediaHandlingPage />} />
							<Route exact path="/oauth" element={<OAuthPage />} />
							<Route exact path="/react-lifecycle" element={<ReactLifeCyclePage />} />
							<Route exact path="/routing" element={<RoutingPage />} />
							<Route exact path="/storage" element={<StoragePage />} />
							<Route exact path="/testing" element={<TestingPage />} />
							<Route
								exact
								path="/state-management"
								element={<StateManagementPage />}
							/>
						</Routes>
					</BrowserRouter>
				</LanguageProvider>
			</Provider>
		</div>
	);
}

export default App;
