import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import CreateNewArticle from './pages/Admin/CreateNewArticle/CreateNewArticle';
import CreateNewFaculty from './pages/Admin/CreateNewFaculty/CreateNewFaculty';
import CreateNewGroup from './pages/Admin/CreateNewGroup/CreateNewGroup';
import CreateNewStudent from './pages/Admin/CreateNewStudent/CreateNewStudent';
import CreateNewSubject from './pages/Admin/CreateNewSubject/CreateNewSubject';
import CreateNewTeacher from './pages/Admin/CreateNewTeacher/CreateNewTeacher';
import Login from './pages/Login/Login';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/new/article' element={<CreateNewArticle />} />
				<Route path='/new/student' element={<CreateNewStudent />} />
				<Route path='/new/teacher' element={<CreateNewTeacher />} />
				<Route path='/new/group' element={<CreateNewGroup />} />
				<Route path='/new/faculty' element={<CreateNewFaculty />} />
				<Route path='/new/subject' element={<CreateNewSubject />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
