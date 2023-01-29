import { Button, TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import CreatePageTitle from '../../../components/__atoms__/CreatePageTitle/CreatePageTitle';
import CreatePageWrapper from '../../../components/__atoms__/CreatePageWrapper/CreatePageWrapper';
import Forms from '../../../components/__atoms__/Forms/Forms';
import TitleBox from '../../../components/__atoms__/TitleBox/TitleBox';
import theme from '../../../constants/globalStyles';
import LabelBox from '../../../components/__features__/LabelBox/LabelBox';
import Form from '../../../components/__atoms__/Form/Form';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import ListOfFaculties from './ListOfFaculties';

function Content() {
	return (
		<CreatePageWrapper>
			<TitleBox>
				<CreatePageTitle>
					<DomainAddIcon fontSize='large' />
					Add New Faculty
				</CreatePageTitle>
			</TitleBox>
			<Forms>
				<FormBox>
					<Column>
						<StyledForm>
							<LabelBox label={'Name'} />
							<TextField size='small' placeholder={'Enter faculty name '} />
						</StyledForm>
					</Column>

					<Column>
						<StyledForm>
							<LabelBox label={'Abbreviation'} />
							<TextField size='small' placeholder={'Enter abbreviation of faculty'} />
						</StyledForm>
					</Column>
				</FormBox>
			</Forms>
			<FinishButton variant='contained'>Finish</FinishButton>
			<ListOfFaculties />
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
