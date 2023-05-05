import { Dialog, Button, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

interface Props {
    isOpen: boolean;
    handleClose: () => void;
    amountOfItems: number;
    handleProceed: () => void;
}
function DeleteSeveralItemsModal({
    isOpen,
    handleClose,
    amountOfItems,
    handleProceed,
}: Props) {
    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <Wrapper>
                <TitleBox>
                    <Typography variant="h6">Delete </Typography>
                    <CloseIcon onClick={handleClose} />
                </TitleBox>
                <Main>
                    <Typography>{`Are you sure you want to delete ${
                        amountOfItems === 1
                            ? '1 item'
                            : `${amountOfItems} items`
                    } ?`}</Typography>
                </Main>
                <ControlButtonsWrapper>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleProceed}>
                        Delete
                    </Button>
                </ControlButtonsWrapper>
            </Wrapper>
        </Dialog>
    );
}

const ControlButtonsWrapper = styled('div')`
    display: flex;
    justify-content: end;
    gap: 0.5rem;
`;
const Wrapper = styled('div')`
    padding: 1rem;
`;

const Main = styled('main')`
    padding: 1rem 0;
`;
const TitleBox = styled('div')`
    display: flex;
    justify-content: space-between;
    svg {
        cursor: pointer;
    }
`;

export default DeleteSeveralItemsModal;
