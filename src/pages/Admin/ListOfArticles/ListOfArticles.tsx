import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListOfArticlesAction } from '../../../redux/api/ApiActions';
import { getListOfArticles } from '../../../redux/selectors/admin';
import styled from 'styled-components';
import ArticlesTable from '../ArticlesTable/ArticlesTable';

function ListOfArticles() {
    const dispatch = useDispatch();
    const articlesList = useSelector(getListOfArticles);
    console.log(articlesList);
    useEffect(() => {
        dispatch(getListOfArticlesAction.request());
    }, []);

    return (
        <div>
            <Title>List Of Articles</Title>
            {articlesList.length ? (
                <ArticlesTable articles={articlesList} />
            ) : (
                <h4>There are no data...</h4>
            )}
        </div>
    );
}

const Title = styled('div')`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
`;
export default ListOfArticles;
