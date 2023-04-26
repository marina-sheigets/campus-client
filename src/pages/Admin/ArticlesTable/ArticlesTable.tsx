import React, { useState } from 'react';
import type { Article } from '../../../redux/types/article';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import styled from 'styled-components';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteModal from '../../../components/__features__/DeleteModal/DeleteModal';
import { deleteArticleAction } from '../../../redux/api/ApiActions';
import { useDispatch } from 'react-redux';
import TableHeaderCell from '../../../components/__atoms__/TableHeaderCell/TableHeaderCell';
import EditIcon from '@mui/icons-material/Edit';
import ArticleEditModal from '../ArticleEditModal/ArticleEditModal';
import Link from '../../../components/__atoms__/Link/Link';
import LinksBox from '../../../components/__atoms__/LinksBox/LinksBox';
import ButtonCell from '../../../components/__atoms__/ButtonCell/ButtonCell';

interface ArticlesTableProps {
    articles: Article[];
}
function ArticlesTable({ articles }: ArticlesTableProps) {
    const dispatch = useDispatch();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const [itemToDelete, setItemToDelete] = useState<Article>();
    const [itemToEdit, setItemToEdit] = useState<Article>();

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

    return (
        <Wrapper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Id</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Content</TableHeaderCell>
                        <TableHeaderCell>Links</TableHeaderCell>
                        <TableHeaderCell></TableHeaderCell>
                        <TableHeaderCell></TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {articles.map((article, index) => {
                        return (
                            <TableRow key={article.id}>
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
                                                  (link, index) => {
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
                                                handleOpenEditModal(article);
                                            }}
                                        />
                                    </ButtonCell>
                                </TableCell>
                                <TableCell>
                                    <ButtonCell>
                                        <DeleteOutlinedIcon
                                            onClick={() => {
                                                handleAskDeleteArticle(article);
                                            }}
                                        />
                                    </ButtonCell>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <DeleteModal
                isOpen={isDeleteModalOpen}
                handleProceed={handleDeleteArticle}
                handleClose={handleClose}
                item={itemToDelete?.name ?? ''}
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

const Content = styled('div')`
    width: 100%;
    max-width: 400px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export default ArticlesTable;
