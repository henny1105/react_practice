import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import SwiperContent from './components/SwiperContent';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/swiper-content' element={<SwiperContent />} />
			</Routes>
		</Router>
	);
}

export default App;
