import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/__molecules__/Header/Header';
import LeftSideBar from '../../../components/__molecules__/LeftSideBar/LeftSideBar';

function CreateNewArticle() {
	return (
		<Wrapper>
			<Header />
			<Main>
				<LeftSideBar />
				<Content></Content>
			</Main>
		</Wrapper>
	);
}
const Wrapper = styled('div')`
	width: 100vw;
	height: 100vh;
`;

const Content = styled('div')``;

const Main = styled('main')`
	display: flex;
`;

export default CreateNewArticle;
