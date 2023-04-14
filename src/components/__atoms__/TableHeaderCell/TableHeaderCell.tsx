import { TableCell, tableCellClasses } from '@mui/material';
import styled from 'styled-components';

const TableHeaderCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'black',
        color: 'white',
    },
}));

export default TableHeaderCell;
