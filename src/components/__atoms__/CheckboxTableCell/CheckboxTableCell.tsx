import { TableCell, tableCellClasses } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../constants/globalStyles';

const CheckboxTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        width: '2rem',
        backgroundColor: theme.background.black.light,
        color: 'white',
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: theme.background.black.light,
        color: 'white',
    },
}));

export default CheckboxTableCell;
