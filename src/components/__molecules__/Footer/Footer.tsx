import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/globalStyles';

function Footer() {
	return (
		<Wrapper>
			<Text>
				National Technical University of Ukraine "KPI named after Ihor Sikorskyi" .
				Electronic campus ©2022
			</Text>
		</Wrapper>
	);
}

const Text = styled('p')`
	font-weight: 200;
`;

const Wrapper = styled('div')`
	position: absolute;
	bottom: 0;
	width: 100%;
	z-index: 5;
	display: flex;
	background: ${theme.background.white.primary};
	justify-content: center;
	align-items: center;
	-webkit-box-shadow: 0px -5px 14px 0px rgba(51, 50, 51, 0.69);
	-moz-box-shadow: 0px -5px 14px 0px rgba(51, 50, 51, 0.69);
	box-shadow: 0px -5px 14px 0px rgba(51, 50, 51, 0.69);
`;
export default Footer;
