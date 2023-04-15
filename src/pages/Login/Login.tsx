import React, { useMemo, useState, useEffect, type ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import img from '../../assets/login.jpg';
import logo from '../../assets/5920.jpg';
import theme from '../../constants/globalStyles';
import { TextField, Alert, CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import {
    signInAction,
    clearAuthErrorAction,
    checkUserAuthAction,
    restorePasswordAction,
} from '../../redux/api/ApiActions';
import {
    getAuthError,
    getIsAuth,
    getIsAuthInProgress,
    getRestoreMessage,
} from '../../redux/selectors/auth';
import { useNavigate } from 'react-router';
import LoaderWrapper from '../../components/__atoms__/LoaderWrapper/LoaderWrapper';
import ForgetPasswordDialog from '../../components/__molecules__/ForgetPasswordDialog/ForgetPasswordDialog';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const isAuthInProgress = useSelector(getIsAuthInProgress);
    const authError = useSelector(getAuthError);
    const isAuth = useSelector(getIsAuth);
    const restoreMessage: string = useSelector(getRestoreMessage);

    const [email, setEmail] = useState('');
    const [emailForRestoring, setEmailForRestoring] = useState('');
    const [password, setPassword] = useState('');
    const [isForgetPasswordDialogOpen, setIsForgetPasswordDialogOpen] =
        useState(false);
    const emailReg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignIn = () => {
        dispatch(signInAction.request({ email, password }));
    };

    const handleAlertMessageClose = () => {
        dispatch(clearAuthErrorAction.request());
    };

    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailForRestoring(e.target.value);
    };
    const isAllCompleted = useMemo(
        () => email.match(emailReg) && password.length > 7,
        [email, password]
    );

    const handleForgetPassword = () => {
        setIsForgetPasswordDialogOpen(true);
    };

    const handleModalClose = () => {
        setIsForgetPasswordDialogOpen(false);
    };
    const handleRestorePassword = () => {
        handleModalClose();
        dispatch(restorePasswordAction.request({ email: emailForRestoring }));
    };
    useEffect(() => {
        if (isAuth) {
            navigate('/new/article');
        }
    }, [isAuth, navigate]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkUserAuthAction.request());
        }
    }, []);

    if (isAuthInProgress) {
        return (
            <LoaderWrapper>
                <CircularProgress />
            </LoaderWrapper>
        );
    }

    return (
        <Wrapper>
            <LoginBox>
                <LogoImg
                    alt="Logo image"
                    width="150"
                    height="150"
                    src={logo}
                ></LogoImg>
                <MainTitle>Welcome to Campus</MainTitle>
                <LoginForm>
                    <Title>Enter your credentials</Title>
                    {authError ? (
                        <StyledAlert
                            onClose={handleAlertMessageClose}
                            severity="error"
                        >
                            {authError}
                        </StyledAlert>
                    ) : null}
                    {restoreMessage ? (
                        <StyledAlert
                            onClose={handleAlertMessageClose}
                            severity={
                                restoreMessage.includes('wrong') || restoreMessage.includes('does not')
                                    ? 'error'
                                    : 'success'
                            }
                        >
                            {restoreMessage}
                        </StyledAlert>
                    ) : null}
                    <StyledTextField
                        value={email}
                        onChange={handleChangeEmail}
                        size="small"
                        placeholder="Email"
                        autoComplete="on"
                    />
                    <StyledTextField
                        value={password}
                        onChange={handleChangePassword}
                        size="small"
                        type="password"
                        placeholder="Password"
                        autoComplete="on"
                    />
                    <ForgetPassword>
                        <span onClick={handleForgetPassword}>
                            Forget password ?
                        </span>
                    </ForgetPassword>
                    <SignInButton
                        disabled={!isAllCompleted}
                        onClick={handleSignIn}
                        variant="contained"
                    >
                        Sign In
                    </SignInButton>
                    <ViewButton variant="contained">
                        View Group Curators
                    </ViewButton>
                </LoginForm>
            </LoginBox>
            <ForgetPasswordDialog
                isOpen={isForgetPasswordDialogOpen}
                handleClose={handleModalClose}
                handleProceed={handleRestorePassword}
                email={emailForRestoring}
                changeEmail={changeEmail}
            />
        </Wrapper>
    );
}
const StyledAlert = styled(Alert)`
    width: 100%;
`;
const LogoImg = styled('img')`
    width: 150px;
`;

const SignInButton = styled(Button)`
    width: 100%;
    opacity: 0.5;
    background: ${theme.background.blue.primary} !important;
`;

const ViewButton = styled(Button)`
    width: 100%;
    opacity: 0.5;
    background: ${theme.background.black.middle} !important;
`;
const StyledTextField = styled(TextField)`
    width: 100%;
    .MuiInputBase-root {
        background: ${theme.background.black.light};
    }
`;

const ForgetPassword = styled('div')`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    span {
        cursor: pointer;
    }
`;

const Title = styled('p')`
    font-size: 18px;
`;
const LoginForm = styled('div')`
    width: 70%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
`;

const MainTitle = styled('h1')`
    font-size: 2rem;
`;
const Wrapper = styled('div')`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${img}) no-repeat center center fixed;
    background-size: cover;
`;

const LoginBox = styled('div')`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 600px;
    border-radius: 30px;
    background: ${theme.background.white.primary};
`;
export default Login;
