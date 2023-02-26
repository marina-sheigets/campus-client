import CreatePageWrapper from '../../../components/__atoms__/CreatePageWrapper/CreatePageWrapper';
import CreatePageSkeleton from '../../../components/__molecules__/CreatePageSkeleton/CreatePageSkeleton';
import { Button, TextField } from '@mui/material';
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import CreatePageTitle from '../../../components/__atoms__/CreatePageTitle/CreatePageTitle';
import Form from '../../../components/__atoms__/Form/Form';
import Forms from '../../../components/__atoms__/Forms/Forms';
import TitleBox from '../../../components/__atoms__/TitleBox/TitleBox';
import StatusAlert from '../../../components/__molecules__/StatusAlert/StatusAlert';
import theme from '../../../constants/globalStyles';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LabelBox from '../../../components/__features__/LabelBox/LabelBox';
import ResultBlock from '../../../components/__atoms__/Result/Result';
import {
    clearSpecialtyStatusMessageAction,
    createSpecialtyAction,
} from '../../../redux/api/ApiActions';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecialtyStatusMessage } from '../../../redux/selectors/admin';

function CreateNewGroup() {
    const dispatch = useDispatch();

    const status = useSelector(getSpecialtyStatusMessage);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChangeName = (e: any) => {
        setName(e.target.value);
    };
    const handleChangeNumber = (e: any) => {
        setNumber(e.target.value);
    };

    const handleCloseStatusMessage = useCallback(
        () => dispatch(clearSpecialtyStatusMessageAction.request()),
        [dispatch]
    );

    const createSpecialty = useCallback(() => {
        dispatch(
            createSpecialtyAction.request({
                name,
                number,
            })
        );
    }, [dispatch, name, number]);

    const isAllCompleted = useMemo(
        () => number.trim().length && name.trim().length,
        [number, name]
    );

    const severity = useMemo(
        () => (status.includes('successfully !') ? 'success' : 'error'),
        [status]
    );

    useEffect(() => {
        if (severity === 'success') {
            setName('');
            setNumber('');
        }
    }, [severity, dispatch]);

    return (
        <CreatePageSkeleton>
            <CreatePageWrapper>
                <TitleBox>
                    <CreatePageTitle>
                        <PostAddIcon fontSize="large" />
                        Add New Specialty
                    </CreatePageTitle>
                </TitleBox>
                <Forms>
                    <FormBox>
                        <Column>
                            <StyledForm>
                                <LabelBox label={'Name'} />
                                <TextField
                                    value={name}
                                    onChange={handleChangeName}
                                    size="small"
                                    placeholder={'Enter specialty name '}
                                />
                            </StyledForm>
                        </Column>

                        <Column>
                            <StyledForm>
                                <LabelBox label={'Number'} />
                                <TextField
                                    value={number}
                                    onChange={handleChangeNumber}
                                    size="small"
                                    placeholder={'Enter the number of cathedra'}
                                />
                            </StyledForm>
                        </Column>
                    </FormBox>
                </Forms>
                <ResultBlock>
                    <FinishButton
                        variant="contained"
                        onClick={createSpecialty}
                        disabled={!isAllCompleted}
                    >
                        Finish
                    </FinishButton>
                    <StatusAlert
                        status={status}
                        severity={severity}
                        handleCloseStatusMessage={handleCloseStatusMessage}
                    />
                </ResultBlock>
            </CreatePageWrapper>
        </CreatePageSkeleton>
    );
}

const StyledForm = styled(Form)`
    .MuiInputBase-input {
        background: ${theme.background.black.light};
        border: none;
    }
`;

const Column = styled('div')`
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    width: 45%;
`;

const FormBox = styled('div')`
    display: flex;
    justify-content: space-between;
`;

const FinishButton = styled(Button)`
    width: 300px;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

export default CreateNewGroup;
