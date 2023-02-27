import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../../assets/5920.jpg';
import { Button, Tooltip } from '@mui/material';
import iconBack from '../../../assets/exit-to-app.png';
import theme from '../../../constants/globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../redux/selectors/auth';
import type { Student, Teacher, Admin } from '../../../redux/types/auth';
import { BiCrown } from 'react-icons/bi';
import { checkUserAuthAction } from '../../../redux/api/ApiActions';
function Header() {
    const dispatch = useDispatch();

    const user: Admin | Student | Teacher = useSelector(getUser);

    useEffect(() => {
        dispatch(checkUserAuthAction.request());
    }, []);

    return (
        <Wrapper>
            <Logo src={logo} />
            <h3>Welcome, {user.name}</h3>

            <Tools>
                <ToolsItems>
                    {user.isAdmin ? (
                        <Tooltip
                            title="You`re admin !"
                            placement="bottom"
                            arrow
                        >
                            <span>
                                <BiCrown />
                            </span>
                        </Tooltip>
                    ) : null}

                    <MyProfileButton variant="contained">
                        My Profile
                    </MyProfileButton>
                    <IconButton src={iconBack} />
                </ToolsItems>
            </Tools>
        </Wrapper>
    );
}

const MyProfileButton = styled(Button)`
    background: ${theme.background.black.middle} !important;
    opacity: 0.5;
    cursor: pointer;
`;

const IconButton = styled('img')``;
const Tools = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ToolsItems = styled('div')`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    svg {
        fill: ${theme.background.gold.primary};
        width: 30px;
        height: 30px;
    }
`;
const Logo = styled('img')`
    width: 60px;
    cursor: pointer;
`;
const Wrapper = styled('div')`
    display: flex;
    padding: 0 1rem;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.3);
`;
export default Header;
