import React from 'react';
import styled from 'styled-components';

type LabelBoxProps = {
	label: string;
	maxOfCharacters?: number;
	currentAmount?: number;
};

function LabelBox({ label, maxOfCharacters, currentAmount }: LabelBoxProps) {
	return (
		<Wrapper>
			<Label>{label}</Label>
			{maxOfCharacters ? (
				<Characters>{`${currentAmount}/${maxOfCharacters} characters`}</Characters>
			) : null}
		</Wrapper>
	);
}

const Label = styled('h3')`
	margin: 0.5rem;
`;

const Characters = styled('span')`
	font-weight: 200;
	font-size: 0.75rem;
`;
const Wrapper = styled('div')`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export default LabelBox;
