import CreatePageSkeleton from '../../../components/__molecules__/CreatePageSkeleton/CreatePageSkeleton';
import {
    Button,
    InputAdornment,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
import React from 'react';
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
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function CreateNewTeacher() {
    return (
        <CreatePageSkeleton>
            <CreatePageWrapper>
                <TitleBox>
                    <CreatePageTitle>
                        <PersonIcon fontSize="large" />
                        Add New Teacher
                    </CreatePageTitle>
                </TitleBox>

                <Forms>
                    <FormBox>
                        <Column>
                            <StyledForm>
                                <LabelBox label={'Full name'} />
                                <TextField
                                    size="small"
                                    placeholder={"Enter teacher's full name "}
                                />
                            </StyledForm>
                            <Form>
                                <LabelBox label={'Generate a password'} />
                                <TextFieldWithIcon
                                    size="small"
                                    placeholder={'Password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SettingsOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Form>
                            <StyledForm>
                                <LabelBox label={'Email'} />
                                <TextField
                                    size="small"
                                    placeholder={"Enter teacher's email "}
                                />
                            </StyledForm>
                            <Form>
                                <LabelBox label={'Phone number'} />
                                <TextFieldWithIcon
                                    size="small"
                                    placeholder={
                                        "Enter teacher's  phone number "
                                    }
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                +38
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Form>
                            <StyledForm>
                                <LabelBox label={'Date of Employment'} />
                                <Select
                                    size="small"
                                    placeholder="Select date of employment"
                                    value={''}
                                    onChange={() => {}}
                                >
                                    {[].map((year, index) => (
                                        <MenuItem key={index}>{year}</MenuItem>
                                    ))}
                                </Select>
                            </StyledForm>
                        </Column>

                        <Column>
                            <StyledForm>
                                <LabelBox label={'Faculty'} />
                                <Select
                                    size="small"
                                    placeholder="Select the teacher's faculty"
                                    value={''}
                                    onChange={() => {}}
                                >
                                    {[].map((year, index) => (
                                        <MenuItem key={index}>{year}</MenuItem>
                                    ))}
                                </Select>
                            </StyledForm>
                            <StyledForm>
                                <LabelBox
                                    label={'Cathedra'}
                                    tooltip="You should select faculty at first"
                                />
                                <Select
                                    size="small"
                                    placeholder="Select cathedra"
                                    value={''}
                                    onChange={() => {}}
                                >
                                    {[].map((year, index) => (
                                        <MenuItem key={index}>{year}</MenuItem>
                                    ))}
                                </Select>
                            </StyledForm>

                            <StyledForm>
                                <LabelBox label={'Position'} />
                                <Select
                                    size="small"
                                    placeholder="Select teacher's position"
                                    value={''}
                                    onChange={() => {}}
                                >
                                    {[].map((year, index) => (
                                        <MenuItem key={index}>{year}</MenuItem>
                                    ))}
                                </Select>
                            </StyledForm>
                        </Column>
                    </FormBox>
                    <LinkForm>
                        <LabelBox
                            label={
                                'You can add one subject or click on button to add more'
                            }
                        />
                        <LinkBox>
                            <StyledSelect
                                size="small"
                                placeholder="Select subject"
                                value={''}
                                onChange={() => {}}
                            >
                                {[].map((year, index) => (
                                    <MenuItem key={index}>{year}</MenuItem>
                                ))}
                            </StyledSelect>
                            <AddCircleOutlineOutlinedIcon fontSize="large" />
                        </LinkBox>
                    </LinkForm>
                </Forms>
                <FinishButton variant="contained">Finish</FinishButton>
            </CreatePageWrapper>
        </CreatePageSkeleton>
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
export default CreateNewTeacher;
