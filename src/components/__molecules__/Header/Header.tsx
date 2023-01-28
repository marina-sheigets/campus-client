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
			<h4>Welcome, Marina Sheihets</h4>

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
	padding: 0.5rem 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	-webkit-box-shadow: 0px 5px 14px 0px rgba(51, 50, 51, 0.69);
	-moz-box-shadow: 0px 5px 14px 0px rgba(51, 50, 51, 0.69);
	box-shadow: 0px 5px 14px 0px rgba(51, 50, 51, 0.69);
`;
export default Header;
