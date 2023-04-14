import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAllStudentsAction } from '../../../redux/api/ApiActions';
import {
    getListOfStudents,
    getStudentStatus,
} from '../../../redux/selectors/admin';
import StudentsTable from './StudentsTable';

function ListOfStudents() {
    const dispatch = useDispatch();
    const status = useSelector(getStudentStatus);

    const studentsList = useSelector(getListOfStudents);
    useEffect(() => {
        dispatch(getAllStudentsAction.request());
    }, [status]);

    return (
        <Wrapper>
            <Title>List Of Students</Title>
            {studentsList.length ? (
                <StudentsTable students={studentsList} />
            ) : (
                <h4>There are no data...</h4>
            )}
        </Wrapper>
    );
}

const Title = styled('div')`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
`;

const Wrapper = styled('div')``;
export default ListOfStudents;
