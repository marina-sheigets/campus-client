import React from 'react';
import CreatePageSkeleton from '../../../components/__molecules__/CreatePageSkeleton/CreatePageSkeleton';
import Content from './Content';

function CreateNewStudent() {
    return (
        <CreatePageSkeleton>
            <Content />
        </CreatePageSkeleton>
    );
}

export default CreateNewStudent;
