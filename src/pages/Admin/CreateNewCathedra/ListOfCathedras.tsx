import React, { useState, useMemo } from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    TableContainer,
    Typography,
} from '@mui/material';
import styled from 'styled-components';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import type { Faculty } from '../../../redux/types/faculty';
import DeleteModal from '../../../components/__features__/DeleteModal/DeleteModal';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteCathedraAction,
    clearCathedraDeleteStatusAction,
} from '../../../redux/api/ApiActions';
import StatusAlert from '../../../components/__molecules__/StatusAlert/StatusAlert';
import {
    getCathedraDeleteStatusMessage,
    getListOfCathedras,
} from '../../../redux/selectors/admin';
import type { Cathedra } from '../../../redux/types/cathedra';
import TableHeaderCell from '../../../components/__atoms__/TableHeaderCell/TableHeaderCell';

function ListOfCathedras() {
    const dispatch = useDispatch();

    const cathedras = useSelector(getListOfCathedras);
    const deleteStatus = useSelector(getCathedraDeleteStatusMessage);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<Faculty>();

    const handleAskDeleteCathedra = (cathedra: Cathedra) => {
        setItemToDelete(cathedra);
        setIsDeleteModalOpen(true);
    };

    const handleClose = () => {
        setIsDeleteModalOpen(false);
    };

    const handleDeleteCathedra = () => {
        handleClose();
        dispatch(deleteCathedraAction.request({ id: itemToDelete?.id }));
    };

    const handleCloseDeleteStatusMessage = () => {
        dispatch(clearCathedraDeleteStatusAction.request());
    };

    const severity = useMemo(
        () => (deleteStatus.includes('successfully') ? 'success' : 'error'),
        [deleteStatus]
    );

    return (
        <Wrapper>
            <TitleWrapper>
                <h3>List of Cathedras</h3>
                <StatusAlert
                    status={deleteStatus}
                    severity={severity}
                    handleCloseStatusMessage={handleCloseDeleteStatusMessage}
                />
            </TitleWrapper>
            {!cathedras.length ? (
                <Typography>There are no cathedras...</Typography>
            ) : (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell width={'200px'}>
                                    Abbreviation
                                </TableHeaderCell>
                                <TableHeaderCell>Name</TableHeaderCell>
                                <TableHeaderCell>Faculty</TableHeaderCell>
                                <TableHeaderCell></TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cathedras.map((cathedra) => (
                                <TableRow key={cathedra.id}>
                                    <TableCell>
                                        {cathedra.abbreviation}
                                    </TableCell>
                                    <TableCell>{cathedra.name}</TableCell>
                                    <TableCell>{cathedra.faculty}</TableCell>
                                    <TableCell>
                                        <DeleteButtonCell>
                                            <DeleteOutlinedIcon
                                                onClick={() => {
                                                    handleAskDeleteCathedra(
                                                        cathedra
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
                handleProceed={handleDeleteCathedra}
                handleClose={handleClose}
                item={itemToDelete?.name ?? ''}
            />
        </Wrapper>
    );
}

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

export default ListOfCathedras;
