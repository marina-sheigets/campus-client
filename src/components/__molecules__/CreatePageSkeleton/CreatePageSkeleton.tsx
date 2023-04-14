import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../../redux/selectors/auth';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import LoaderWrapper from '../../__atoms__/LoaderWrapper/LoaderWrapper';

interface CreatePageSkeletonProps {
    children: React.ReactNode;
}

function CreatePageSkeleton({ children }: CreatePageSkeletonProps) {
    const isAuth = useSelector(getIsAuth);

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        if (window.location.pathname !== '/' && !isAuth) {
            navigate('/');
        }
    }, []);
    return (
        <Wrapper>
            {isLoading ? (
                <LoaderWrapper>
                    <CircularProgress />
                </LoaderWrapper>
            ) : (
                <>
                    <Header />
                    <Main>
                        <LeftSideBar />

                        {children}
                    </Main>
                </>
            )}
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
