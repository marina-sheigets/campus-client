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

interface ArticlesTableProps {
    articles: Article[];
}
function ArticlesTable({ articles }: ArticlesTableProps) {
    const dispatch = useDispatch();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<Article>();

    const handleAskDeleteArticle = (article: Article) => {
        setItemToDelete(article);
        setIsDeleteModalOpen(true);
    };
    const handleClose = () => {
        setIsDeleteModalOpen(false);
    };
    const handleDeleteArticle = () => {
        handleClose();
        dispatch(deleteArticleAction.request({ id: itemToDelete?.id }));
    };
    return (
        <Wrapper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Content</TableCell>
                        <TableCell>Links</TableCell>
                        <TableCell></TableCell>
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
                                    <DeleteButtonCell>
                                        <DeleteOutlinedIcon
                                            onClick={() => {
                                                handleAskDeleteArticle(article);
                                            }}
                                        />
                                    </DeleteButtonCell>
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
        </Wrapper>
    );
}
const Wrapper = styled('div')`
    margin-bottom: 3rem;
`;
const Content = styled('div')`
    width: 100%;
    max-width: 400px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;
const Link = styled('a')`
    width: 250px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;
const DeleteButtonCell = styled('span')`
    display: flex;
    justify-content: end;
    border-bottom: none;
    svg {
        cursor: pointer;
    }
`;
const LinksBox = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export default ArticlesTable;
