import React from 'react';
import styled from 'styled-components';
import Footer from '../../../components/__molecules__/Footer/Footer';
import Header from '../../../components/__molecules__/Header/Header';
import LeftSideBar from '../../../components/__molecules__/LeftSideBar/LeftSideBar';
import Content from './Content';

function CreateNewFaculty() {
	return (
		<Wrapper>
			<Header />
			<Main>
				<LeftSideBar />
				<Content />
			</Main>
			<Footer />
		</Wrapper>
	);
}
const Wrapper = styled('div')`
	width: 100vw;
	height: 100vh;
`;

const Main = styled('main')`
	display: flex;
`;
export default CreateNewFaculty;
