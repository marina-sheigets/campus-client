import { Tooltip } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

type LabelBoxProps = {
	label: string;
	maxOfCharacters?: number;
	currentAmount?: number;
	tooltip?: string;
};

function LabelBox({ label, maxOfCharacters, currentAmount, tooltip }: LabelBoxProps) {
	return (
		<Wrapper>
			<Label>
				{label}
				{tooltip ? (
					<Tooltip placement='top' title={tooltip} arrow>
						<InfoOutlinedIcon />
					</Tooltip>
				) : null}
			</Label>
			{maxOfCharacters ? (
				<Characters>{`${currentAmount}/${maxOfCharacters} characters`}</Characters>
			) : null}
		</Wrapper>
	);
}

const Label = styled('h3')`
	margin: 0.5rem 0;
	display: flex;
	align-items: center;
	gap: 0.5rem;
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
