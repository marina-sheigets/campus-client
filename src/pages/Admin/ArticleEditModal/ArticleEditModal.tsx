import { Dialog, Button, Typography, TextField } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import type { Article } from '../../../redux/types/article';
import Forms from '../../../components/__atoms__/Forms/Forms';
import LabelBox from '../../../components/__features__/LabelBox/LabelBox';
import Form from '../../../components/__atoms__/Form/Form';
import TextArea from '../../../components/__atoms__/TextArea/TextArea';
import theme from '../../../constants/globalStyles';
import LinksBox from '../../../components/__atoms__/LinksBox/LinksBox';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { checkArraysEqual } from '../../../utils/arraysUtils';
import { useDispatch } from 'react-redux';
import { editArticleAction } from '../../../redux/api/ApiActions';

interface ArticleEditModalProps {
    isOpen: boolean;
    handleClose: () => void;
    article: Article;
}

function ArticleEditModal({
    article,
    isOpen,
    handleClose,
}: ArticleEditModalProps) {
    const dispatch = useDispatch();
    const nameMaxChar = 100;
    const contentMaxChar = 2000;

    const [articleName, setArticleName] = useState('');
    const [articleContent, setArticleContent] = useState('');
    const [links, setLinks] = useState<Array<{ id: number; url: string }>>([]);
    const currentNameLength = useMemo(() => articleName.length, [articleName]);
    const currentContentLength = useMemo(
        () => articleContent.length,
        [articleContent]
    );

    const handleChangeArticleName = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target.value.length > nameMaxChar) {
            return;
        }
        setArticleName(e.target.value);
    };
    const handleChangeArticleContent = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
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

    const handleEditArticle = () => {
        handleClose();
        dispatch(
            editArticleAction.request({
                id: article.id,
                name: articleName,
                links: preparedLinks,
                content: articleContent,
            })
        );
    };

    const preparedLinks = useMemo(() => links.map((link) => link.url), [links]);
    const isSaveButtonDisabled = useMemo(
        () =>
            !articleName.length ||
            (article.name === articleName &&
                article.content === articleContent &&
                checkArraysEqual(article.links, preparedLinks)),
        [article, articleName, articleContent, preparedLinks]
    );

    useEffect(() => {
        const linksUrls = article.links;
        const newLinks = linksUrls.map((url, index) => ({ id: index, url }));
        setLinks(newLinks);
        setArticleName(article.name);
        setArticleContent(article.content);
    }, [handleClose]);
    return (
        <StyledDialog scroll="paper" open={isOpen} onClose={handleClose}>
            <Wrapper>
                <TitleBox>
                    <Typography variant="h6">Edit Item</Typography>
                    <CloseIcon onClick={handleClose} />
                </TitleBox>
                <Main>
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
                                label={'Edit the content of article'}
                                currentAmount={currentContentLength}
                            />
                            <TextArea
                                value={articleContent}
                                onChange={handleChangeArticleContent}
                            />
                        </Form>
                    </Forms>

                    <StyledLinksBox>
                        <AddLinkButton
                            variant="contained"
                            onClick={handleAddLink}
                        >
                            Add Link
                        </AddLinkButton>
                        {!links.length
                            ? null
                            : links.map((link, index) => {
                                  return (
                                      <LinkWrapper key={index}>
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
                                      </LinkWrapper>
                                  );
                              })}
                    </StyledLinksBox>
                </Main>
                <ControlButtonsWrapper>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        variant="contained"
                        disabled={isSaveButtonDisabled}
                        onClick={handleEditArticle}
                    >
                        Save
                    </Button>
                </ControlButtonsWrapper>
            </Wrapper>
        </StyledDialog>
    );
}
const StyledLinksBox = styled(LinksBox)`
    padding-top: 1rem;
`;
const AddLinkButton = styled(Button)`
    width: 200px;
    margin-top: 2rem;
`;

const LinkField = styled(TextField)`
    flex: 8;
`;
const LinkWrapper = styled('div')`
    svg {
        cursor: pointer;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;
const StyledDialog = styled(Dialog)`
    .MuiPaper-root {
        min-width: 700px !important;
    }
`;
const StyledForm = styled(Form)`
    .MuiInputBase-input {
        background: ${theme.background.black.light};
        border: none;
    }
`;
const ControlButtonsWrapper = styled('div')`
    display: flex;
    justify-content: end;
    gap: 0.5rem;
`;
const Wrapper = styled('div')`
    padding: 1rem;
`;

const Main = styled('main')`
    padding: 1rem 0;
`;
const TitleBox = styled('div')`
    display: flex;
    justify-content: space-between;
    svg {
        cursor: pointer;
    }
`;
export default ArticleEditModal;
