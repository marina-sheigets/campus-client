import React from 'react';
import styled from 'styled-components';
import theme from '../../../constants/globalStyles';

const LINKS = [
	{
		id: 1,
		name: 'Create Article',
	},
	{
		id: 2,
		name: 'Add Student',
	},
	{
		id: 3,
		name: 'Add Teacher',
	},
	{
		id: 4,
		name: 'Add Group',
	},
	{
		id: 5,
		name: 'Add Faculty',
	},
	{
		id: 6,
		name: 'Add Subject',
	},
];
function LeftSideBar() {
	return (
		<Wrapper>
			<UL>
				{LINKS.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</UL>
		</Wrapper>
	);
}

const Wrapper = styled('div')`
	width: 250px;
	padding: 2rem 0.5rem;
	background: ${theme.background.blue.primary};
	opacity: 57%;
	height: 85vh;
	z-index: 1;
`;

const UL = styled('ul')`
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 1.5rem;
	color: ${theme.text.white.primary};
	font-size: 1.2rem;
	li {
		cursor: pointer;
	}
`;

export default LeftSideBar;
