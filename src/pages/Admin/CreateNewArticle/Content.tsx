import React from 'react';
import styled from 'styled-components';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { TextField, Button } from '@mui/material';
import LabelBox from '../../../components/__features__/LabelBox/LabelBox';
import Forms from '../../../components/__atoms__/Forms/Forms';
import Form from '../../../components/__atoms__/Form/Form';
import theme from '../../../constants/globalStyles';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function Content() {
	return (
		<Wrapper>
			<TitleBox>
				<Title>
					<NewspaperIcon fontSize='large' />
					Create New Article
				</Title>
			</TitleBox>

			<Forms>
				<StyledForm>
					<LabelBox maxOfCharacters={100} label={'Name of article'} currentAmount={0} />
					<TextField size='small' placeholder='Enter the title of article' />
				</StyledForm>
				<Form>
					<LabelBox
						maxOfCharacters={2000}
						label={'Enter the content of article'}
						currentAmount={0}
					/>
					<Textarea />
				</Form>
				<LinkForm>
					<LabelBox label={'You can add one link or click on button to add more'} />
					<LinkBox>
						<LinkField size='small' placeholder='New link' />
						<AddCircleOutlineOutlinedIcon fontSize='large' />
					</LinkBox>
					<LinkBox>
						<LinkField size='small' placeholder='New link' />
						<AddCircleOutlineOutlinedIcon fontSize='large' />
					</LinkBox>
					<LinkBox>
						<LinkField size='small' placeholder='New link' />
						<AddCircleOutlineOutlinedIcon fontSize='large' />
					</LinkBox>
				</LinkForm>
			</Forms>
			<FinishButton variant='contained'>Finish</FinishButton>
		</Wrapper>
	);
}

const FinishButton = styled(Button)`
	width: 300px;
	background: ${theme.background.blue.primary};
	opacity: 0.5;
	margin-top: 2rem;
	margin-bottom: 1rem;
`;

const LinkField = styled(TextField)`
	flex: 8;
`;

const LinkForm = styled(Form)`
	gap: 1rem;
	width: 70%;
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
		opacity: 0.5;
	}
`;

const TitleBox = styled('div')`
	display: flex;
	justify-content: center;
	width: 100%;
`;
const StyledForm = styled(Form)`
	.MuiInputBase-input {
		background: ${theme.background.black.light};
		border: none;
		opacity: 0.5;
	}
`;

const Textarea = styled('textarea')`
	padding: 0.5rem;
	resize: none;
	outline: none;
	height: 250px;
	border-radius: 10px;
`;
const Title = styled('h3')`
	font-size: 1.5rem;
	margin: 0.5rem;
	display: flex;
	gap: 1rem;
	align-items: center;
	width: 40%;
`;

const Wrapper = styled('div')`
	padding: 1rem 4rem 2rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	height: 90vh;
	overflow: scroll;
`;
export default Content;
