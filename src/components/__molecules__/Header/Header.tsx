import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/5920.jpg';
import { Button } from '@mui/material';
import iconBack from '../../../assets/exit-to-app.png';
import theme from '../../../constants/globalStyles';
function Header() {
	return (
		<Wrapper>
			<Logo src={logo} />
			<h3>Welcome, Marina Sheihets</h3>

			<Tools>
				<ToolsItems>
					<MyProfileButton variant='contained'>My Profile</MyProfileButton>
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
