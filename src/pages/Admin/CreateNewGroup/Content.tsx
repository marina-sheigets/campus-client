import { Button, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import CreatePageTitle from '../../../components/__atoms__/CreatePageTitle/CreatePageTitle';
import CreatePageWrapper from '../../../components/__atoms__/CreatePageWrapper/CreatePageWrapper';
import Forms from '../../../components/__atoms__/Forms/Forms';
import TitleBox from '../../../components/__atoms__/TitleBox/TitleBox';
import theme from '../../../constants/globalStyles';
import LabelBox from '../../../components/__features__/LabelBox/LabelBox';
import Form from '../../../components/__atoms__/Form/Form';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import ListOfGroups from './ListOfGroups';

function Content() {
	return (
		<CreatePageWrapper>
			<TitleBox>
				<CreatePageTitle>
					<GroupAddOutlinedIcon fontSize='large' />
					Add New Group
				</CreatePageTitle>
			</TitleBox>
			<Forms>
				<FormBox>
					<Column>
						<StyledForm>
							<LabelBox label={'Name'} />
							<TextField size='small' placeholder={'Enter group name '} />
						</StyledForm>
					</Column>

					<Column>
						<StyledForm>
							<LabelBox label={'Curator'} />
							<Select
								size='small'
								placeholder='Select teacher'
								value={''}
								onChange={() => {}}>
								{[].map((year, index) => (
									<MenuItem key={index}>{year}</MenuItem>
								))}
							</Select>
						</StyledForm>
					</Column>
				</FormBox>
			</Forms>
			<FinishButton variant='contained'>Finish</FinishButton>

			<ListOfGroups />
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
