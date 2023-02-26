import React from 'react';
import Content from './Content';
import CreatePageSkeleton from '../../../components/__molecules__/CreatePageSkeleton/CreatePageSkeleton';

function CreateNewTeacher() {
    return (
        <CreatePageSkeleton>
            <Content />
        </CreatePageSkeleton>
    );
}

export default CreateNewTeacher;
