import styled from 'styled-components';

const CreatePageWrapper = styled('div')`
    padding: 1rem 4rem 2rem;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    gap: 1.5rem;
`;

export default CreatePageWrapper;
