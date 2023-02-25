import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import CreateNewArticle from './pages/Admin/CreateNewArticle/CreateNewArticle';
import CreateNewCathedra from './pages/Admin/CreateNewCathedra/CreateNewCathedra';
import CreateNewFaculty from './pages/Admin/CreateNewFaculty/CreateNewFaculty';
import CreateNewGroup from './pages/Admin/CreateNewGroup/CreateNewGroup';
import CreateNewStudent from './pages/Admin/CreateNewStudent/CreateNewStudent';
import CreateNewSubject from './pages/Admin/CreateNewSubject/CreateNewSubject';
import CreateNewTeacher from './pages/Admin/CreateNewTeacher/CreateNewTeacher';
import Login from './pages/Login/Login';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/new/article' element={<CreateNewArticle />} />
					<Route path='/new/student' element={<CreateNewStudent />} />
					<Route path='/new/teacher' element={<CreateNewTeacher />} />
					<Route path='/new/group' element={<CreateNewGroup />} />
					<Route path='/new/faculty' element={<CreateNewFaculty />} />
					<Route path='/new/subject' element={<CreateNewSubject />} />
					<Route path='/new/cathedra' element={<CreateNewCathedra />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
