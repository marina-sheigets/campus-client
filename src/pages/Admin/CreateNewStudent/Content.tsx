import {
	Button,
	InputAdornment,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
} from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import CreatePageTitle from '../../../components/__atoms__/CreatePageTitle/CreatePageTitle';
import CreatePageWrapper from '../../../components/__atoms__/CreatePageWrapper/CreatePageWrapper';
import Forms from '../../../components/__atoms__/Forms/Forms';
import TitleBox from '../../../components/__atoms__/TitleBox/TitleBox';
import theme from '../../../constants/globalStyles';
import PersonIcon from '@mui/icons-material/Person';
import LabelBox from '../../../components/__features__/LabelBox/LabelBox';
import Form from '../../../components/__atoms__/Form/Form';
import {
	createStudentAction,
	clearStudentStatusMessageAction,
} from '../../../redux/api/ApiActions';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentStatus } from '../../../redux/selectors/admin';
import StatusAlert from '../../../components/__molecules__/StatusAlert/StatusAlert';
import ResultBlock from '../../../components/__atoms__/Result/Result';

function Content() {
	const dispatch = useDispatch();

	const status = useSelector(getStudentStatus);

	const [years, setYears] = useState<number[]>([]);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [yearOfAdmission, setYearOfAdmission] = useState(new Date().getFullYear().toString());
	const [group, setGroup] = useState('ТР-92');
	const [faculty, setFaculty] = useState('ТР-92');
	const [cathedra, setCathedra] = useState('');
	const [specialty, setSpecialty] = useState('');
	const [type, setType] = useState('');

	const handleChangeName = (e: any) => setName(e.target.value);
	const handleChangeEmail = (e: any) => setEmail(e.target.value);
	const handleChangePhoneNumber = (e: any) => setPhoneNumber(e.target.value);
	const handleChangeYearOfAdmission = (event: SelectChangeEvent) =>
		setYearOfAdmission(event.target.value as string);
	const handleChangeGroup = (event: SelectChangeEvent) => setGroup(event.target.value as string);
	const handleChangeFaculty = (event: SelectChangeEvent) =>
		setFaculty(event.target.value as string);
	const handleChangeCathedra = (event: SelectChangeEvent) =>
		setCathedra(event.target.value as string);
	const handleChangeSpecialty = (event: SelectChangeEvent) =>
		setSpecialty(event.target.value as string);
	const handleChangeType = (event: SelectChangeEvent) => setType(event.target.value as string);
	const handleCloseStatusMessage = () => dispatch(clearStudentStatusMessageAction.request());

	const handleCreateUser = () => {
		dispatch(
			createStudentAction.request({
				name,
				email,
				phoneNumber,
				yearOfAdmission,
				group,
				faculty,
				cathedra,
				specialty,
				type,
			})
		);
	};
	const severity = useMemo(
		() => (status === 'Student was successfully created' ? 'success' : 'error'),
		[status]
	);
	const regEx = useMemo(() => /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/, []);
	const isAllCompleted = useMemo(
		() =>
			name.trim().length &&
			email.match(regEx) &&
			phoneNumber.trim().length === 10 &&
			yearOfAdmission.length &&
			group.length &&
			faculty.length &&
			cathedra.length &&
			specialty.length &&
			type.length,
		[
			name,
			email,
			regEx,
			phoneNumber,
			yearOfAdmission,
			group,
			faculty,
			cathedra,
			specialty,
			type,
		]
	);
	useEffect(() => {
		const arr = Array.from(new Array(6), (val, index) => parseInt(yearOfAdmission) - index);
		setYears(arr);
	}, [yearOfAdmission]);

	return (
		<CreatePageWrapper>
			<TitleBox>
				<CreatePageTitle>
					<PersonIcon fontSize='large' />
					Add New Student
				</CreatePageTitle>
			</TitleBox>

			<Forms>
				<FormBox>
					<Column>
						<StyledForm>
							<LabelBox label={'Full name'} />
							<TextField
								size='small'
								value={name}
								onChange={handleChangeName}
								placeholder={"Enter student's full name "}
							/>
						</StyledForm>

						<StyledForm>
							<LabelBox label={'Email'} />
							<TextField
								size='small'
								value={email}
								onChange={handleChangeEmail}
								type={'email'}
								placeholder={"Enter student's  email "}
							/>
						</StyledForm>
						<Form>
							<LabelBox label={'Phone number'} />
							<TextFieldWithIcon
								size='small'
								type='number'
								value={phoneNumber}
								onChange={handleChangePhoneNumber}
								placeholder={"Enter student's  phone number "}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>+38</InputAdornment>
									),
								}}
							/>
						</Form>
						<StyledForm>
							<LabelBox label={'Year of admission'} />
							<Select
								size='small'
								placeholder='Select year of admission'
								value={yearOfAdmission}
								onChange={handleChangeYearOfAdmission}>
								{years.map((year, index) => (
									<MenuItem key={index} value={year}>
										{year}
									</MenuItem>
								))}
							</Select>
						</StyledForm>
						<StyledForm>
							<LabelBox label={'Group'} />
							<Select
								size='small'
								placeholder="Select student's group"
								value={group}
								onChange={handleChangeGroup}>
								{['ТР-92', 'ТР-93'].map((group, index) => (
									<MenuItem key={index} value={group}>
										{group}
									</MenuItem>
								))}
							</Select>
						</StyledForm>
					</Column>

					<Column>
						<StyledForm>
							<LabelBox label={'Faculty'} />
							<Select
								size='small'
								placeholder="Select the student's faculty"
								value={faculty}
								onChange={handleChangeFaculty}>
								{['nbs', 'dgfd'].map((faculty, index) => (
									<MenuItem key={index} value={faculty}>
										{faculty}
									</MenuItem>
								))}
							</Select>
						</StyledForm>
						<StyledForm>
							<LabelBox
								label={'Cathedra'}
								tooltip='You should select faculty at first'
							/>
							<Select
								size='small'
								placeholder="Select student's cathedra"
								value={cathedra}
								onChange={handleChangeCathedra}>
								{['APEPS'].map((item, index) => (
									<MenuItem key={index} value={item}>
										{item}
									</MenuItem>
								))}
							</Select>
						</StyledForm>
						<StyledForm>
							<LabelBox label={'Specialty'} />
							<Select
								size='small'
								placeholder='Select specialty'
								value={specialty}
								onChange={handleChangeSpecialty}>
								{['122 Computer science'].map((item, index) => (
									<MenuItem key={index} value={item}>
										{item}
									</MenuItem>
								))}
							</Select>
						</StyledForm>
						<StyledForm>
							<LabelBox label={'Type of studying'} />
							<Select
								size='small'
								placeholder='Select type of studying'
								value={type}
								onChange={handleChangeType}>
								{['Budget'].map((item, index) => (
									<MenuItem key={index} value={item}>
										{item}
									</MenuItem>
								))}
							</Select>
						</StyledForm>
					</Column>
				</FormBox>
			</Forms>
			<ResultBlock>
				<FinishButton
					disabled={!isAllCompleted || status}
					variant='contained'
					onClick={handleCreateUser}>
					Finish
				</FinishButton>
				<StyledStatusAlert
					status={status}
					severity={severity}
					handleCloseStatusMessage={handleCloseStatusMessage}
				/>
			</ResultBlock>
		</CreatePageWrapper>
	);
}

const StyledForm = styled(Form)`
	.MuiInputBase-input {
		background: ${theme.background.black.light};
		border: none;
	}
`;
const StyledStatusAlert = styled(StatusAlert)`
	.MuiSnackbar-root {
		background: green;
		bottom: 3rem;
		right: 2rem;
	}
`;
const TextFieldWithIcon = styled(TextField)`
	div {
		background: ${theme.background.black.light};
		border: none;
	}
	svg {
		cursor: pointer;
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
