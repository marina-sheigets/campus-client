import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../constants/globalStyles';
import { LINKS } from '../../../constants/routing';

function LeftSideBar() {
    const [path, setPath] = useState('');
    const [currentPath, setCurrentPath] = useState<number>(0);
    const navigate = useNavigate();
    const handleSetPath = (value: string) => {
        setPath(value);
    };

    useEffect(() => {
        navigate(path);
    }, [path, navigate]);

    useEffect(() => {
        const url = window.location.pathname;
        const location = LINKS.find((link) => link.route === url);
        setCurrentPath(location?.id ?? 0);
    }, []);

    return (
        <Wrapper>
            <UL currentPath={currentPath}>
                {LINKS.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => {
                            handleSetPath(item.route);
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
