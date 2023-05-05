import React, { useState, useMemo, useCallback, useEffect } from 'react';
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
import {
    clearArticleStatusMessageAction,
    createArticleAction,
    getListOfArticlesAction,
} from '../../../redux/api/ApiActions';
import { useDispatch, useSelector } from 'react-redux';
import StatusAlert from '../../../components/__molecules__/StatusAlert/StatusAlert';
import ResultBlock from '../../../components/__atoms__/Result/Result';
import { getArticleStatusMessage } from '../../../redux/selectors/admin';
import ListOfArticles from '../ListOfArticles/ListOfArticles';
import TextArea from '../../../components/__atoms__/TextArea/TextArea';
import LinkField from '../../../components/__atoms__/LinkField/LinkField';
import AddLinkButton from '../../../components/__atoms__/AddLinkButton/AddLinkButton';

function CreateNewArticle() {
    const dispatch = useDispatch();

    const status = useSelector(getArticleStatusMessage);

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
        setLinks([{ id: Date.now(), url: '' }, ...links]);
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

    const preparedLinks = useMemo(() => {
        const arrayOfStrings = links.map((link) => link.url);
        return arrayOfStrings;
    }, [links]);

    const createArticle = useCallback(() => {
        dispatch(
            createArticleAction.request({
                name: articleName,
                content: articleContent,
                links: preparedLinks,
            })
        );
    }, [dispatch, articleName, articleContent, preparedLinks]);

    const handleCloseStatusMessage = useCallback(
        () => dispatch(clearArticleStatusMessageAction.request()),
        [dispatch]
    );

    const severity = useMemo(
        () => (status.includes('successfully') ? 'success' : 'error'),
        [status]
    );

    const currentNameLength = useMemo(() => articleName.length, [articleName]);
    const currentContentLength = useMemo(
        () => articleContent.length,
        [articleContent]
    );
    const isAllCompleted = useMemo(() => {
        return articleName.trim().length;
    }, [articleName]);

    useEffect(() => {
        if (severity === 'success') {
            setArticleName('');
            setArticleContent('');
            setLinks([{ id: 1, url: '' }]);
            dispatch(getListOfArticlesAction.request());
        }
    }, [severity, dispatch]);
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
                        <TextArea
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
                <ResultBlock>
                    <FinishButton
                        disabled={!isAllCompleted}
                        variant="contained"
                        onClick={createArticle}
                    >
                        Finish
                    </FinishButton>
                    <StatusAlert
                        status={status}
                        severity={severity}
                        handleCloseStatusMessage={handleCloseStatusMessage}
                    />
                </ResultBlock>
                <ListOfArticles />
            </CreatePageWrapper>
        </CreatePageSkeleton>
    );
}
const FinishButton = styled(Button)`
    width: 300px;
    margin-top: 2rem;
    margin-bottom: 1rem;
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

export default CreateNewArticle;
