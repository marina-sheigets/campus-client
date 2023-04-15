import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import { useSelector, useDispatch } from 'react-redux';
import { getIsAuth } from '../../../redux/selectors/auth';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import LoaderWrapper from '../../__atoms__/LoaderWrapper/LoaderWrapper';
import { automaticLogOutAction } from '../../../redux/api/ApiActions';

interface CreatePageSkeletonProps {
    children: React.ReactNode;
}

function CreatePageSkeleton({ children }: CreatePageSkeletonProps) {
    const dispatch = useDispatch();
    const isAuth = useSelector(getIsAuth);

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 600);
        if (window.location.pathname !== '/' && !isAuth) {
            navigate('/');
        }
    }, []);

    useEffect(() => {
        const handleTokenChange = (e: StorageEvent) => {
            if (e.key === 'token' && e.oldValue && !e.newValue) {
                // Token has been removed from local storage
                localStorage.removeItem('token');
                dispatch(automaticLogOutAction.request());
                navigate('/');
            }
        };

        window.addEventListener('storage', handleTokenChange);

        return () => {
            window.removeEventListener('storage', handleTokenChange);
        };
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
