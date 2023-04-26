import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getListOfArticlesAction,
    deleteEditingStatusAction,
} from '../../../redux/api/ApiActions';
import {
    getEditingStatus,
    getListOfArticles,
} from '../../../redux/selectors/admin';
import styled from 'styled-components';
import ArticlesTable from '../ArticlesTable/ArticlesTable';
import StatusAlert from '../../../components/__molecules__/StatusAlert/StatusAlert';

function ListOfArticles() {
    const dispatch = useDispatch();
    const editingStatus = useSelector(getEditingStatus);
    const articlesList = useSelector(getListOfArticles);
    const handleCloseEditingStatusMessage = () => {
        dispatch(deleteEditingStatusAction.request());
    };
    useEffect(() => {
        dispatch(getListOfArticlesAction.request());
    }, [editingStatus]);

    const severity = useMemo(
        () => (editingStatus.includes('successfully') ? 'success' : 'error'),
        [editingStatus]
    );
    return (
        <div>
            <Title>List Of Articles</Title>
            <StatusAlert
                severity={severity}
                status={editingStatus}
                handleCloseStatusMessage={handleCloseEditingStatusMessage}
            />
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
`;
export default ListOfArticles;
