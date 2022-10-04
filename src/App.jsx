import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import EventPage from './pages/Event';
import RoutingPage from './pages/Routing';
import CarDetailPage from './pages/CarDetail';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route exact path="/event" element={<EventPage />} />
					<Route exact path="/routing" element={<RoutingPage />} />
					<Route exact path="/car/:id" element={<CarDetailPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
