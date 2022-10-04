import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import EventPage from './pages/Event';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/event" element={<EventPage />} />
			</Routes>
		</div>
	);
}

export default App;
