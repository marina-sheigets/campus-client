import React, { useState } from 'react';
import type { Student } from '../../../redux/types/auth';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import styled from 'styled-components';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch } from 'react-redux';
import DeleteModal from '../../../components/__features__/DeleteModal/DeleteModal';
import {
    deleteStudentByIdAction,
    getAllStudentsAction,
} from '../../../redux/api/ApiActions';
import TableHeaderCell from '../../../components/__atoms__/TableHeaderCell/TableHeaderCell';

interface StudentsTableProps {
    students: Student[];
}
function StudentsTable({ students }: StudentsTableProps) {
    const dispatch = useDispatch();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<Student>();

    const handleAskDeleteStudent = (student: Student) => {
        setItemToDelete(student);
        setIsDeleteModalOpen(true);
    };

    const handleClose = () => {
        setIsDeleteModalOpen(false);
    };
    const handleDeleteStudent = () => {
        handleClose();
        dispatch(deleteStudentByIdAction.request({ id: itemToDelete?.id }));
        dispatch(getAllStudentsAction.request());
    };
    return (
        <Wrapper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Id</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Email</TableHeaderCell>
                        <TableHeaderCell>Phone Number</TableHeaderCell>
                        <TableHeaderCell>Year Of Admission</TableHeaderCell>
                        <TableHeaderCell>Faculty</TableHeaderCell>
                        <TableHeaderCell>Cathedra</TableHeaderCell>
                        <TableHeaderCell>Specialty</TableHeaderCell>
                        <TableHeaderCell>Group</TableHeaderCell>
                        <TableHeaderCell>Type</TableHeaderCell>
                        <TableHeaderCell></TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map((student, index) => (
                        <TableRow key={index}>
                            <TableCell>{index}</TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.email}</TableCell>
                            <TableCell>{student.phoneNumber}</TableCell>
                            <TableCell>{student.yearOfAdmission}</TableCell>
                            <TableCell>{student.faculty}</TableCell>
                            <TableCell>{student.cathedra}</TableCell>
                            <TableCell>{student.specialty}</TableCell>
                            <TableCell>{student.group}</TableCell>
                            <TableCell>{student.type}</TableCell>
                            <TableCell>
                                <DeleteButtonCell>
                                    <DeleteOutlinedIcon
                                        onClick={() => {
                                            handleAskDeleteStudent(student);
                                        }}
                                    />
                                </DeleteButtonCell>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <DeleteModal
                isOpen={isDeleteModalOpen}
                handleProceed={handleDeleteStudent}
                handleClose={handleClose}
                item={itemToDelete?.name ?? ''}
            />
        </Wrapper>
    );
}

const Wrapper = styled('div')`
    margin: 1rem 0 3rem;
`;

const DeleteButtonCell = styled('span')`
    display: flex;
    justify-content: end;
    border-bottom: none;
    svg {
        cursor: pointer;
    }
`;

export default StudentsTable;
