import { Button, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
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
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function Content() {
	const [years, setYears] = useState<number[]>([]);

	const currentYear = useMemo(() => new Date().getFullYear(), []);

	useEffect(() => {
		const arr = Array.from(new Array(6), (val, index) => currentYear - index);
		setYears(arr);
		console.log(arr);
	}, [currentYear]);
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
							<TextField size='small' placeholder={"Enter student's  first name "} />
						</StyledForm>
						<Form>
							<LabelBox label={'Generate a password'} />
							<TextFieldWithIcon
								size='small'
								placeholder={'Password'}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<SettingsOutlinedIcon />
										</InputAdornment>
									),
								}}
							/>
						</Form>
						<StyledForm>
							<LabelBox label={'Email'} />
							<TextField size='small' placeholder={"Enter student's  email "} />
						</StyledForm>
						<Form>
							<LabelBox label={'Phone number'} />
							<TextFieldWithIcon
								size='small'
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
								value={currentYear}
								onChange={() => {}}>
								{years.map((year, index) => (
									<MenuItem key={index}>{year}</MenuItem>
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
								value={''}
								onChange={() => {}}>
								{[].map((year, index) => (
									<MenuItem key={index}>{year}</MenuItem>
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
								value={''}
								onChange={() => {}}>
								{[].map((year, index) => (
									<MenuItem key={index}>{year}</MenuItem>
								))}
							</Select>
						</StyledForm>
						<StyledForm>
							<LabelBox label={'Specialty'} />
							<Select
								size='small'
								placeholder='Select specialty'
								value={''}
								onChange={() => {}}>
								{[].map((year, index) => (
									<MenuItem key={index}>{year}</MenuItem>
								))}
							</Select>
						</StyledForm>
						<StyledForm>
							<LabelBox label={'Group'} />
							<Select
								size='small'
								placeholder="Select student's  group"
								value={''}
								onChange={() => {}}>
								{[].map((year, index) => (
									<MenuItem key={index}>{year}</MenuItem>
								))}
							</Select>
						</StyledForm>
						<StyledForm>
							<LabelBox label={'Type of studying'} />
							<Select
								size='small'
								placeholder='Select type of studying'
								value={''}
								onChange={() => {}}>
								{[].map((year, index) => (
									<MenuItem key={index}>{year}</MenuItem>
								))}
							</Select>{' '}
						</StyledForm>
					</Column>
				</FormBox>
			</Forms>
			<FinishButton variant='contained'>Finish</FinishButton>
		</CreatePageWrapper>
	);
}

const StyledForm = styled(Form)`
	.MuiInputBase-input {
		background: ${theme.background.black.light};
		border: none;
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
