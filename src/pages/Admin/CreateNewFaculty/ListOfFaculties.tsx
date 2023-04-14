import React, { useCallback, useState, useMemo, useEffect, memo } from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    TableContainer,
    Typography,
    tableCellClasses,
} from '@mui/material';
import styled from 'styled-components';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import type { Faculty } from '../../../redux/types/faculty';
import DeleteModal from '../../../components/__features__/DeleteModal/DeleteModal';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteFacultyAction,
    clearFacultyDeleteStatusAction,
    getListOfFacultiesAction,
} from '../../../redux/api/ApiActions';
import StatusAlert from '../../../components/__molecules__/StatusAlert/StatusAlert';
import {
    getFacultyDeleteStatusMessage,
    getListOfFaculties,
} from '../../../redux/selectors/admin';

function ListOfFaculties() {
    const dispatch = useDispatch();

    const faculties = useSelector(getListOfFaculties);
    const deleteStatus = useSelector(getFacultyDeleteStatusMessage);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<Faculty>();

    const handleAskDeleteFaculty = useCallback((faculty: Faculty) => {
        setItemToDelete(faculty);
        setIsDeleteModalOpen(true);
    }, []);

    const handleClose = () => {
        setIsDeleteModalOpen(false);
    };

    const handleDeleteFaculty = useCallback(() => {
        handleClose();
        dispatch(deleteFacultyAction.request({ id: itemToDelete?.id }));
    }, [dispatch, itemToDelete]);

    const handleCloseDeleteStatusMessage = useCallback(() => {
        dispatch(clearFacultyDeleteStatusAction.request());
    }, [dispatch]);

    const severity = useMemo(
        () => (deleteStatus.includes('successfully') ? 'success' : 'error'),
        [deleteStatus]
    );

    useEffect(() => {
        if (!faculties.length) dispatch(getListOfFacultiesAction.request());
    }, [dispatch]);

    return (
        <Wrapper>
            <TitleWrapper>
                <h3>List of Faculties</h3>
                <StyledStatusAlert
                    status={deleteStatus}
                    severity={severity}
                    handleCloseStatusMessage={handleCloseDeleteStatusMessage}
                />
            </TitleWrapper>
            {!faculties.length ? (
                <Typography>There are no faculties...</Typography>
            ) : (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell width={'200px'}>
                                    Abbreviation
                                </TableHeaderCell>
                                <TableHeaderCell>Name</TableHeaderCell>
                                <TableHeaderCell></TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {faculties.map((faculty) => (
                                <TableRow key={faculty.id}>
                                    <TableCell>
                                        {faculty.abbreviation}
                                    </TableCell>
                                    <TableCell>{faculty.name}</TableCell>
                                    <TableCell>
                                        <DeleteButtonCell>
                                            <DeleteOutlinedIcon
                                                onClick={() => {
                                                    handleAskDeleteFaculty(
                                                        faculty
                                                    );
                                                }}
                                            />
                                        </DeleteButtonCell>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            <DeleteModal
                isOpen={isDeleteModalOpen}
                handleProceed={handleDeleteFaculty}
                handleClose={handleClose}
                item={itemToDelete?.name ?? ''}
            />
        </Wrapper>
    );
}

const StyledStatusAlert = styled(StatusAlert)``;

const TitleWrapper = styled('div')`
    display: flex;
    gap: 2rem;
    align-items: center;
`;
const Wrapper = styled('div')`
    margin-bottom: 3rem;
`;
const DeleteButtonCell = styled('span')`
    display: flex;
    justify-content: end;
    border-bottom: none;
    svg {
        cursor: pointer;
    }
`;

const TableHeaderCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'black',
        color: 'white',
    },
}));
export default memo(ListOfFaculties);
