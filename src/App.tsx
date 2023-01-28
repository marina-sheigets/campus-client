import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
