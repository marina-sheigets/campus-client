import { Button, Select, TextField, MenuItem } from '@mui/material';
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import CreatePageTitle from '../../../components/__atoms__/CreatePageTitle/CreatePageTitle';
import CreatePageWrapper from '../../../components/__atoms__/CreatePageWrapper/CreatePageWrapper';
import Form from '../../../components/__atoms__/Form/Form';
import Forms from '../../../components/__atoms__/Forms/Forms';
import TitleBox from '../../../components/__atoms__/TitleBox/TitleBox';
import StatusAlert from '../../../components/__molecules__/StatusAlert/StatusAlert';
import theme from '../../../constants/globalStyles';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import LabelBox from '../../../components/__features__/LabelBox/LabelBox';
import ResultBlock from '../../../components/__atoms__/Result/Result';
import ListOfCathedras from './ListOfCathedras';
import {
	getListOfFacultiesAction,
	createCathedraAction,
	clearCathedraStatusMessageAction,
	getListOfCathedrasAction,
} from '../../../redux/api/ApiActions';
import { useDispatch, useSelector } from 'react-redux';
import { getCathedraStatusMessage, getListOfFaculties } from '../../../redux/selectors/admin';
import { Faculty } from '../../../redux/types/faculty';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	paper: {
		overflow: 'scroll',
		width: '250px',
		height: '300px',
	},
});

const MenuProps = {
	autoFocus: false,
};

function Content() {
	const dispatch = useDispatch();

	const classes = useStyles();

	const status = useSelector(getCathedraStatusMessage);
	const facultiesList = useSelector(getListOfFaculties);

	const [name, setName] = useState('');
	const [abbreviation, setAbbreviation] = useState('');
	const [faculty, setFaculty] = useState('');
	const [faculties, setFaculties] = useState<Faculty[]>([]);

	const handleChangeName = (e: any) => setName(e.target.value);
	const handleChangeAbbreviation = (e: any) => setAbbreviation(e.target.value);
	const handleChangeFaculty = (e: any) => {
		setFaculty(e.target.value);
	};

	const handleCloseStatusMessage = useCallback(
		() => dispatch(clearCathedraStatusMessageAction.request()),
		[dispatch]
	);

	const isAllCompleted = useMemo(
		() => abbreviation.trim().length && name.trim().length && faculty.length,
		[abbreviation, faculty, name]
	);

	const severity = useMemo(
		() => (status.includes('successfully !') ? 'success' : 'error'),
		[status]
	);

	const createCathedra = useCallback(() => {
		dispatch(createCathedraAction.request({ name, abbreviation, facultyName: faculty }));
	}, [dispatch, name, abbreviation, faculty]);

	useEffect(() => {
		if (severity === 'success') {
			setName('');
			setAbbreviation('');
			setFaculty('');
			dispatch(getListOfCathedrasAction.request());
		}
	}, [severity, dispatch]);

	useEffect(() => {
		dispatch(getListOfFacultiesAction.request());
		dispatch(getListOfCathedrasAction.request());
	}, [dispatch]);

	useEffect(() => {
		if (facultiesList.length) {
			setFaculties(facultiesList);
		}
	}, [facultiesList]);

	return (
		<CreatePageWrapper>
			<TitleBox>
				<CreatePageTitle>
					<DomainAddIcon fontSize='large' />
					Add New Cathedra
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
								size='small'
								placeholder={'Enter cathedra name '}
							/>
						</StyledForm>
						<StyledForm>
							<LabelBox label={'Faculty'} />
							<Select
								MenuProps={{
									...MenuProps,
									classes: {
										paper: classes.paper,
									},
								}}
								size='small'
								placeholder='Select year of admission'
								value={faculty}
								onChange={handleChangeFaculty}>
								{faculties.map((faculty) => (
									<MenuItem key={faculty.id} value={faculty.name}>
										{faculty.name}
									</MenuItem>
								))}
							</Select>
						</StyledForm>
					</Column>

					<Column>
						<StyledForm>
							<LabelBox label={'Abbreviation'} />
							<TextField
								value={abbreviation}
								onChange={handleChangeAbbreviation}
								size='small'
								placeholder={'Enter abbreviation of cathedra'}
							/>
						</StyledForm>
					</Column>
				</FormBox>
			</Forms>
			<ResultBlock>
				<FinishButton
					variant='contained'
					onClick={createCathedra}
					disabled={!isAllCompleted}>
					Finish
				</FinishButton>
				<StatusAlert
					status={status}
					severity={severity}
					handleCloseStatusMessage={handleCloseStatusMessage}
				/>
			</ResultBlock>
			<ListOfCathedras />
		</CreatePageWrapper>
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

export default Content;
