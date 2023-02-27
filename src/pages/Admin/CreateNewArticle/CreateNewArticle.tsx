import React, { useState, useMemo } from 'react';
import CreatePageSkeleton from '../../../components/__molecules__/CreatePageSkeleton/CreatePageSkeleton';
import styled from 'styled-components';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { TextField, Button } from '@mui/material';
import LabelBox from '../../../components/__features__/LabelBox/LabelBox';
import Forms from '../../../components/__atoms__/Forms/Forms';
import Form from '../../../components/__atoms__/Form/Form';
import theme from '../../../constants/globalStyles';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CreatePageWrapper from '../../../components/__atoms__/CreatePageWrapper/CreatePageWrapper';
import TitleBox from '../../../components/__atoms__/TitleBox/TitleBox';
import CreatePageTitle from '../../../components/__atoms__/CreatePageTitle/CreatePageTitle';

function CreateNewArticle() {
    const [articleName, setArticleName] = useState('');
    const [articleContent, setArticleContent] = useState('');
    const [links, setLinks] = useState([{ id: 1, url: '' }]);

    const nameMaxChar = 100;
    const contentMaxChar = 2000;

    const handleChangeArticleName = (e: any) => {
        if (e.target.value.length > nameMaxChar) {
            return;
        }
        setArticleName(e.target.value);
    };
    const handleChangeArticleContent = (e: any) => {
        if (e.target.value.length > contentMaxChar) {
            return;
        }
        setArticleContent(e.target.value);
    };

    const handleAddLink = () => {
        setLinks([...links, { id: Date.now(), url: '' }]);
    };

    const handleDeleteLink = (id: number) => {
        setLinks(links.filter((link) => link.id !== id));
    };

    const handleChangeLink = (url: string, id: number) => {
        const updatedLinks = links.map((link) => {
            if (link.id === id) {
                return {
                    ...link,
                    url,
                };
            }
            return link;
        });
        setLinks(updatedLinks);
    };

    const currentNameLength = useMemo(() => articleName.length, [articleName]);
    const currentContentLength = useMemo(
        () => articleContent.length,
        [articleContent]
    );
    const isAllCompleted = useMemo(() => {
        return articleName.trim().length && articleContent.trim().length;
    }, [articleName, articleContent]);

    return (
        <CreatePageSkeleton>
            <CreatePageWrapper>
                <TitleBox>
                    <CreatePageTitle>
                        <NewspaperIcon fontSize="large" />
                        Add New Article
                    </CreatePageTitle>
                </TitleBox>

                <Forms>
                    <StyledForm>
                        <LabelBox
                            maxOfCharacters={nameMaxChar}
                            label={'Name of article'}
                            currentAmount={currentNameLength}
                        />
                        <TextField
                            size="small"
                            placeholder="Enter the title of article"
                            value={articleName}
                            onChange={handleChangeArticleName}
                        />
                    </StyledForm>
                    <Form>
                        <LabelBox
                            maxOfCharacters={contentMaxChar}
                            label={'Enter the content of article'}
                            currentAmount={currentContentLength}
                        />
                        <Textarea
                            value={articleContent}
                            onChange={handleChangeArticleContent}
                        />
                    </Form>
                    <LinkForm>
                        <LabelBox
                            label={
                                'You can add one link or click on button to add more'
                            }
                        />
                        <AddLinkButton
                            variant="outlined"
                            onClick={handleAddLink}
                        >
                            Add Link
                        </AddLinkButton>

                        {links.map((link) => (
                            <LinkBox key={link.id}>
                                <LinkField
                                    size="small"
                                    placeholder="New link"
                                    value={link.url}
                                    onChange={(e: any) => {
                                        handleChangeLink(
                                            e.target.value,
                                            link.id
                                        );
                                    }}
                                />
                                <DeleteOutlinedIcon
                                    onClick={() => {
                                        handleDeleteLink(link.id);
                                    }}
                                />
                            </LinkBox>
                        ))}
                    </LinkForm>
                </Forms>
                <FinishButton disabled={!isAllCompleted} variant="contained">
                    Finish
                </FinishButton>
            </CreatePageWrapper>
        </CreatePageSkeleton>
    );
}
const FinishButton = styled(Button)`
    width: 300px;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

const AddLinkButton = styled(Button)`
    width: 300px;
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
    }
`;

const StyledForm = styled(Form)`
    .MuiInputBase-input {
        background: ${theme.background.black.light};
        border: none;
    }
`;

const Textarea = styled('textarea')`
    padding: 0.5rem;
    resize: none;
    outline: none;
    height: 250px;
    border-radius: 10px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-size: 1rem;
`;

export default CreateNewArticle;
