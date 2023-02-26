import React from 'react';
import CreatePageSkeleton from '../../../components/__molecules__/CreatePageSkeleton/CreatePageSkeleton';
import Content from './Content';

function CreateNewArticle() {
    return (
        <CreatePageSkeleton>
            <Content />
        </CreatePageSkeleton>
    );
}

export default CreateNewArticle;
