import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import CreateNewArticle from './pages/Admin/CreateNewArticle/CreateNewArticle';
import Login from './pages/Login/Login';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/new/article' element={<CreateNewArticle />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
