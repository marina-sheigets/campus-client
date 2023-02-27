import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import LeftSideBar from '../LeftSideBar/LeftSideBar';

interface CreatePageSkeletonProps {
    children: React.ReactNode;
}

function CreatePageSkeleton({ children }: CreatePageSkeletonProps) {
    return (
        <Wrapper>
            <Header />
            <Main>
                <LeftSideBar />

                {children}
            </Main>
        </Wrapper>
    );
}
const Wrapper = styled('div')`
    height: 100vh;
`;

const Main = styled('main')`
    display: flex;
`;
export default CreatePageSkeleton;
