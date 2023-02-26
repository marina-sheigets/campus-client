import { Button, TextField } from '@mui/material';
import React, { useState, useMemo, useCallback, memo, useEffect } from 'react';
import styled from 'styled-components';
import CreatePageTitle from '../../../components/__atoms__/CreatePageTitle/CreatePageTitle';
import CreatePageWrapper from '../../../components/__atoms__/CreatePageWrapper/CreatePageWrapper';
import Forms from '../../../components/__atoms__/Forms/Forms';
import TitleBox from '../../../components/__atoms__/TitleBox/TitleBox';
import theme from '../../../constants/globalStyles';
import LabelBox from '../../../components/__features__/LabelBox/LabelBox';
import Form from '../../../components/__atoms__/Form/Form';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import ListOfFaculties from './ListOfFaculties';
import { useDispatch, useSelector } from 'react-redux';
import {
    clearFacultyStatusMessageAction,
    createFacultyAction,
    getListOfFacultiesAction,
} from '../../../redux/api/ApiActions';
import ResultBlock from '../../../components/__atoms__/Result/Result';
import { getFacultyStatusMessage } from '../../../redux/selectors/admin';
import StatusAlert from '../../../components/__molecules__/StatusAlert/StatusAlert';

function Content() {
    const dispatch = useDispatch();

    const status = useSelector(getFacultyStatusMessage);

    const [name, setName] = useState('');
    const [abbreviation, setAbbreviation] = useState('');

    const handleChangeName = (e: any) => {
        setName(e.target.value);
    };
    const handleChangeAbbreviation = (e: any) => {
        setAbbreviation(e.target.value);
    };
    const isAllCompleted = useCallback(
        () => abbreviation.trim().length && name.trim().length,
        [abbreviation, name]
    );

    const severity = useMemo(
        () =>
            status === 'Faculty was created successfully !'
                ? 'success'
                : 'error',
        [status]
    );

    const createFaculty = useCallback(() => {
        dispatch(createFacultyAction.request({ name, abbreviation }));
    }, [dispatch, name, abbreviation]);

    const handleCloseStatusMessage = useCallback(
        () => dispatch(clearFacultyStatusMessageAction.request()),
        [dispatch]
    );

    useEffect(() => {
        if (severity === 'success') {
            setName('');
            setAbbreviation('');
            dispatch(getListOfFacultiesAction.request());
        }
    }, [severity, dispatch]);

    return (
        <CreatePageWrapper>
            <TitleBox>
                <CreatePageTitle>
                    <DomainAddIcon fontSize="large" />
                    Add New Faculty
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
                                placeholder={'Enter faculty name '}
                            />
                        </StyledForm>
                    </Column>

                    <Column>
                        <StyledForm>
                            <LabelBox label={'Abbreviation'} />
                            <TextField
                                value={abbreviation}
                                onChange={handleChangeAbbreviation}
                                size="small"
                                placeholder={'Enter abbreviation of faculty'}
                            />
                        </StyledForm>
                    </Column>
                </FormBox>
            </Forms>
            <ResultBlock>
                <FinishButton
                    variant="contained"
                    onClick={createFaculty}
                    disabled={!isAllCompleted || !!status}
                >
                    Finish
                </FinishButton>
                <StyledStatusAlert
                    status={status}
                    severity={severity}
                    handleCloseStatusMessage={handleCloseStatusMessage}
                />
            </ResultBlock>
            <ListOfFaculties />
        </CreatePageWrapper>
    );
}

const StyledStatusAlert = styled(StatusAlert)`
    width: auto;
`;

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
export default memo(Content);
