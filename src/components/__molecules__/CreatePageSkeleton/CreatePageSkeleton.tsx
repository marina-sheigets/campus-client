import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LeftSideBar from '../LeftSideBar/LeftSideBar';

type CreatePageSkeletonProps = {
	children: React.ReactNode;
};

function CreatePageSkeleton({ children }: CreatePageSkeletonProps) {
	return (
		<Wrapper>
			<Header />
			<Main>
				<LeftSideBar />
				{children}
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
export default CreatePageSkeleton;
