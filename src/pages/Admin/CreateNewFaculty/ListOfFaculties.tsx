import React from 'react';
import { Table, TableBody, TableHead, TableRow, TableCell, TableContainer } from '@mui/material';
import theme from '../../../constants/globalStyles';
import styled from 'styled-components';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function ListOfFaculties() {
	return (
		<>
			<h3>List of Groups</h3>
			<TableContainer>
				<Table>
					<TableHead>
						<StyledTableRow>
							<TableHeaderCell>ID</TableHeaderCell>
							<TableHeaderCell>Abbreviation</TableHeaderCell>
							<TableHeaderCell>Name</TableHeaderCell>
							<TableHeaderCell></TableHeaderCell>
						</StyledTableRow>
					</TableHead>
					<TableBody>
						<StyledTableRow>
							<TableCell>ID</TableCell>
							<TableCell>Group</TableCell>
							<TableCell>Curator</TableCell>
							<DeleteButtonCell>
								<DeleteOutlinedIcon />
							</DeleteButtonCell>
						</StyledTableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

const DeleteButtonCell = styled(TableCell)`
	display: flex !important;
	justify-content: end;
`;

const StyledTableRow = styled(TableRow)`
	border: 1px solid ${theme.border.black.middle};
`;

const TableHeaderCell = styled(TableCell)`
	background: ${theme.background.black.light};
`;
export default ListOfFaculties;
