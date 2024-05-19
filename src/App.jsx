import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
	console.log('--Hello App - test rebase PR');
	return (
		<BrowserRouter>
			<div className='app'>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
