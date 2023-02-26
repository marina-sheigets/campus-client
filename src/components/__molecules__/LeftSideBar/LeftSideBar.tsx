import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../constants/globalStyles';

const LINKS = [
    {
        id: 1,
        name: 'Add Article',
    },
    {
        id: 2,
        name: 'Add Student',
    },
    {
        id: 3,
        name: 'Add Teacher',
    },
    {
        id: 4,
        name: 'Add Group',
    },
    {
        id: 5,
        name: 'Add Faculty',
    },
    {
        id: 6,
        name: 'Add Cathedra',
    },
    {
        id: 7,
        name: 'Add Subject',
    },
];

function LeftSideBar() {
    const [path, setPath] = useState('');
    const [currentPath, setCurrentPath] = useState<number>(0);
    const navigate = useNavigate();
    const handleSetPath = (value: string) => {
        setPath(value);
    };

    useEffect(() => {
        switch (path) {
            case LINKS[0].name:
                navigate('/new/article');
                break;
            case LINKS[1].name:
                navigate('/new/student');
                break;
            case LINKS[2].name:
                navigate('/new/teacher');
                break;
            case LINKS[3].name:
                navigate('/new/group');
                break;
            case LINKS[4].name:
                navigate('/new/faculty');
                break;
            case LINKS[5].name:
                navigate('/new/cathedra');
                break;
            case LINKS[6].name:
                navigate('/new/subject');
                break;
        }
    }, [path, navigate]);

    useEffect(() => {
        const url = window.location.pathname;
        let location = 0;
        switch (url) {
            case '/new/article':
                location = LINKS[0].id;
                break;
            case '/new/student':
                location = LINKS[1].id;
                break;
            case '/new/teacher':
                location = LINKS[2].id;
                break;
            case '/new/group':
                location = LINKS[3].id;
                break;
            case '/new/faculty':
                location = LINKS[4].id;
                break;
            case '/new/cathedra':
                location = LINKS[5].id;
                break;
            case '/new/subject':
                location = LINKS[6].id;
                break;
        }
        setCurrentPath(location);
    }, []);
    return (
        <Wrapper>
            <UL currentPath={currentPath}>
                {LINKS.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => {
                            handleSetPath(item.name);
                        }}
                    >
                        {item.name}
                    </li>
                ))}
            </UL>
        </Wrapper>
    );
}

const Wrapper = styled('div')`
    width: 250px;
    padding: 2rem 0.5rem;
    background: ${theme.background.blue.primary};
    height: 85vh;
    z-index: 1;
`;

const UL = styled('ul')<{ currentPath: number }>`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1.5rem;
    color: ${theme.text.white.primary};
    font-size: 1.2rem;
    li {
        cursor: pointer;
    }

    li: nth-child(${(props) => props.currentPath}) {
        color: ${theme.text.white.light};
    }
`;

export default LeftSideBar;
