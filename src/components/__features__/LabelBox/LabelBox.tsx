import { Tooltip } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import theme from '../../../constants/globalStyles';

interface LabelBoxProps {
    label: string;
    maxOfCharacters?: number;
    currentAmount?: number;
    tooltip?: string;
}

function LabelBox({
    label,
    maxOfCharacters,
    currentAmount,
    tooltip,
}: LabelBoxProps) {
    return (
        <Wrapper>
            <Label>
                {label}
                {tooltip ? (
                    <Tooltip placement="top" title={tooltip} arrow>
                        <InfoOutlinedIcon />
                    </Tooltip>
                ) : null}
            </Label>
            {maxOfCharacters ? (
                <Characters error={maxOfCharacters === currentAmount}>{`${
                    currentAmount ?? 1
                }/${maxOfCharacters} characters`}</Characters>
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

const Characters = styled('span')<{ error: boolean }>`
    font-weight: 200;
    font-size: 0.75rem;
    color: ${(props) => (props.error ? `${theme.text.error.primary}` : 'none')};
`;
const Wrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export default LabelBox;
