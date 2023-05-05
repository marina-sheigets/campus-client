import React, { useEffect, useMemo, useState } from 'react';
import type { Article } from '../../../redux/types/article';
import {
    Button,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import styled from 'styled-components';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteModal from '../../../components/__features__/DeleteModal/DeleteModal';
import {
    clearArticleDeleteStatusAction,
    deleteArticleAction,
    deleteSeveralArticlesAction,
} from '../../../redux/api/ApiActions';
import { useDispatch, useSelector } from 'react-redux';
import TableHeaderCell from '../../../components/__atoms__/TableHeaderCell/TableHeaderCell';
import EditIcon from '@mui/icons-material/Edit';
import ArticleEditModal from '../ArticleEditModal/ArticleEditModal';
import Link from '../../../components/__atoms__/Link/Link';
import LinksBox from '../../../components/__atoms__/LinksBox/LinksBox';
import ButtonCell from '../../../components/__atoms__/ButtonCell/ButtonCell';
import CheckboxTableCell from '../../../components/__atoms__/CheckboxTableCell/CheckboxTableCell';
import DeleteSeveralItemsModal from '../../../components/__features__/DeleteSeveralItemsModal/DeleteSeveralItemsModal';
import { getArticleDeleteStatusMessage } from '../../../redux/selectors/admin';
import StatusAlert from '../../../components/__molecules__/StatusAlert/StatusAlert';
import type { ArticleTable } from '../../../types/tables';

interface ArticlesTableProps {
    articles: Article[];
}
function ArticlesTable({ articles }: ArticlesTableProps) {
    const dispatch = useDispatch();
    const deleteStatus = useSelector(getArticleDeleteStatusMessage);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [articlesData, setArticlesData] = useState<ArticleTable[]>([]);
    const [itemToDelete, setItemToDelete] = useState<Article>();
    const [itemToEdit, setItemToEdit] = useState<Article>();
    const [isDeleteManyModalOpen, setIsDeleteManyModalOpen] = useState(false);

    const handleAskDeleteArticle = (article: Article) => {
        setItemToDelete(article);
        setIsDeleteModalOpen(true);
    };
    const handleClose = () => {
        setIsDeleteModalOpen(false);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    };
    const handleDeleteArticle = () => {
        handleClose();
        dispatch(deleteArticleAction.request({ id: itemToDelete?.id }));
    };

    const handleOpenEditModal = (article: Article) => {
        setItemToEdit(article);
        setIsEditModalOpen(true);
    };

    const handleChangeSelected = (id: string) => {
        const updatedArticles = articlesData.map((article) => {
            if (article.id === id) {
                return {
                    ...article,
                    selected: !article.selected,
                };
            }
            return article;
        });
        setArticlesData(updatedArticles);
    };

    const handleToggleAll = () => {
        let updatedArticles = [];
        if (isAllArticlesSelected) {
            updatedArticles = articlesData.map((article) => ({
                ...article,
                selected: false,
            }));
        } else {
            updatedArticles = articlesData.map((article) => ({
                ...article,
                selected: true,
            }));
        }
        setArticlesData(updatedArticles);
    };

    const handleOpenDeleteModal = () => {
        setIsDeleteManyModalOpen(true);
    };

    const handleCloseDeleteSeveralModal = () => {
        setIsDeleteManyModalOpen(false);
    };

    const handleDeleteSeveralArticles = () => {
        handleCloseDeleteSeveralModal();
        const itemsToDelete = articlesData.filter(
            (article) => article.selected
        );
        const itemsIdsToDelete = itemsToDelete.map((article) => ({
            id: article.id,
        }));
        dispatch(
            deleteSeveralArticlesAction.request({ articles: itemsIdsToDelete })
        );
    };

    const handleCloseStatusMessage = () => {
        dispatch(clearArticleDeleteStatusAction.request());
    };
    const isSomeArticlesSelected = useMemo(
        () =>
            articlesData.some((article) => article.selected) &&
            !articlesData.every((article) => article.selected),
        [articlesData]
    );
    const isAllArticlesSelected = useMemo(
        () => articlesData.every((article) => article.selected),
        [articlesData]
    );

    const amountItemsToDelete = useMemo(
        () => articlesData.filter((article) => article.selected).length,
        [articlesData]
    );

    const severity = useMemo(
        () => (deleteStatus.includes('successfully') ? 'success' : 'error'),
        [deleteStatus]
    );

    useEffect(() => {
        if (articles.length) {
            const preparedArr = articles.map((elem) => ({
                ...elem,
                selected: false,
            }));
            setArticlesData(preparedArr);
        } else {
            setArticlesData([]);
        }
    }, [articles]);

    useEffect(() => {
        handleCloseStatusMessage();
    }, []);
    return (
        <Wrapper>
            <ActionsButtons>
                {isSomeArticlesSelected || isAllArticlesSelected ? (
                    <Button
                        variant="contained"
                        endIcon={<DeleteOutlinedIcon />}
                        onClick={handleOpenDeleteModal}
                    >
                        Delete Selected
                    </Button>
                ) : null}
            </ActionsButtons>
            <StatusAlert
                status={deleteStatus}
                severity={severity}
                handleCloseStatusMessage={handleCloseStatusMessage}
            />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <CheckboxTableCell>
                                <Checkbox
                                    checked={isAllArticlesSelected}
                                    indeterminate={isSomeArticlesSelected}
                                    onChange={handleToggleAll}
                                />
                            </CheckboxTableCell>
                            <TableHeaderCell>Id</TableHeaderCell>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Content</TableHeaderCell>
                            <TableHeaderCell>Links</TableHeaderCell>
                            <TableHeaderCell></TableHeaderCell>
                            <TableHeaderCell></TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {articlesData.map((article, index) => {
                            return (
                                <TableRow key={article.id}>
                                    <CheckboxTableCell>
                                        <Checkbox
                                            checked={article.selected}
                                            onChange={() => {
                                                handleChangeSelected(
                                                    article.id
                                                );
                                            }}
                                        />
                                    </CheckboxTableCell>
                                    <TableCell>{index}</TableCell>
                                    <TableCell>{article.name}</TableCell>
                                    <TableCell>
                                        <Content>{article.content}</Content>
                                    </TableCell>
                                    <TableCell>
                                        <LinksBox>
                                            {!article.links.length
                                                ? '-'
                                                : article.links.map(
                                                      (
                                                          link: string,
                                                          index: number
                                                      ) => {
                                                          return (
                                                              <Link
                                                                  target="_blank"
                                                                  rel="noreferrer"
                                                                  key={index}
                                                                  href={link}
                                                              >
                                                                  {link}
                                                              </Link>
                                                          );
                                                      }
                                                  )}
                                        </LinksBox>
                                    </TableCell>
                                    <TableCell>
                                        <ButtonCell>
                                            <EditIcon
                                                onClick={() => {
                                                    handleOpenEditModal(
                                                        article
                                                    );
                                                }}
                                            />
                                        </ButtonCell>
                                    </TableCell>
                                    <TableCell>
                                        <ButtonCell>
                                            <DeleteOutlinedIcon
                                                onClick={() => {
                                                    handleAskDeleteArticle(
                                                        article
                                                    );
                                                }}
                                            />
                                        </ButtonCell>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <DeleteModal
                isOpen={isDeleteModalOpen}
                handleProceed={handleDeleteArticle}
                handleClose={handleClose}
                item={itemToDelete?.name ?? ''}
            />
            <DeleteSeveralItemsModal
                isOpen={isDeleteManyModalOpen}
                handleProceed={handleDeleteSeveralArticles}
                handleClose={handleCloseDeleteSeveralModal}
                amountOfItems={amountItemsToDelete}
            />

            {itemToEdit ? (
                <ArticleEditModal
                    article={itemToEdit}
                    isOpen={isEditModalOpen}
                    handleClose={handleCloseEditModal}
                />
            ) : null}
        </Wrapper>
    );
}
const Wrapper = styled('div')`
    margin: 1rem 0 3rem;
`;

const TableContainer = styled('div')`
    padding: 1rem 0;
`;
const ActionsButtons = styled('div')`
    padding: 1rem 0;
`;
const Content = styled('div')`
    width: 100%;
    max-width: 400px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export default ArticlesTable;
