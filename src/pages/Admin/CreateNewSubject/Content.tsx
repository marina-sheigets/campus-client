import { Button, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import CreatePageTitle from '../../../components/__atoms__/CreatePageTitle/CreatePageTitle';
import CreatePageWrapper from '../../../components/__atoms__/CreatePageWrapper/CreatePageWrapper';
import Forms from '../../../components/__atoms__/Forms/Forms';
import TitleBox from '../../../components/__atoms__/TitleBox/TitleBox';
import theme from '../../../constants/globalStyles';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import LabelBox from '../../../components/__features__/LabelBox/LabelBox';
import Form from '../../../components/__atoms__/Form/Form';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function Content() {
	return (
		<CreatePageWrapper>
			<TitleBox>
				<CreatePageTitle>
					<AutoStoriesOutlinedIcon fontSize='large' />
					Add New Subject
				</CreatePageTitle>
			</TitleBox>

			<Forms>
				<FormBox>
					<StyledForm>
						<LabelBox label={'Full name'} />
						<TextField size='small' placeholder={"Enter teacher's full name "} />
					</StyledForm>
				</FormBox>
				<LinkForm>
					<LabelBox label={'You can add one group or click on button to add more'} />
					<LinkBox>
						<StyledSelect
							size='small'
							placeholder='Select group'
							value={''}
							onChange={() => {}}>
							{[].map((year, index) => (
								<MenuItem key={index}>{year}</MenuItem>
							))}
						</StyledSelect>
						<AddCircleOutlineOutlinedIcon fontSize='large' />
					</LinkBox>
				</LinkForm>
				<LinkForm>
					<LabelBox label={'You can add one teacher or click on button to add more'} />
					<LinkBox>
						<StyledSelect
							size='small'
							placeholder='Select teacher'
							value={''}
							onChange={() => {}}>
							{[].map((year, index) => (
								<MenuItem key={index}>{year}</MenuItem>
							))}
						</StyledSelect>
						<AddCircleOutlineOutlinedIcon fontSize='large' />
					</LinkBox>
				</LinkForm>
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

const LinkBox = styled('div')`
	width: 100%;
	justify-content: space-between;
	display: flex;
	gap: 1rem;
	align-items: center;
	svg {
		cursor: pointer;
	}
	.MuiInputBase-input {
		background: ${theme.background.black.light};
		border: none;
	}
`;

const StyledSelect = styled(Select)`
	flex: 8;
`;

const LinkForm = styled(Form)`
	gap: 1rem;
	width: 70%;
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
