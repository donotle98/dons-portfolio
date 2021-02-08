import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React, { useState } from 'react';

const NavBar = () => {
    const [page, setPage] = useState('home');
    return (
        <StyledWrapper>
            <div className='nav-wrapper'>
                <ul>
                    <li onClick={() => setPage('home')}>
                        <Link
                            to='/home'
                            style={{
                                textDecoration:
                                    page === 'home' ? 'line-through' : 'none',
                                color: page === 'home' ? '#8fc0a9' : 'white',
                            }}
                        >
                            Home
                        </Link>
                    </li>

                    <li onClick={() => setPage('about')}>
                        <Link
                            to='/about'
                            style={{
                                textDecoration:
                                    page === 'about' ? 'line-through' : 'none',
                                color: page === 'about' ? '#8fc0a9' : 'white',
                            }}
                        >
                            About
                        </Link>
                    </li>

                    <li onClick={() => setPage('projects')}>
                        <Link
                            to='/projects'
                            style={{
                                textDecoration:
                                    page === 'projects'
                                        ? 'line-through'
                                        : 'none',
                                color:
                                    page === 'projects' ? '#8fc0a9' : 'white',
                            }}
                        >
                            Projects
                        </Link>
                    </li>

                    <li onClick={() => setPage('contact')}>
                        <Link
                            to='/contact'
                            style={{
                                textDecoration:
                                    page === 'contact'
                                        ? 'line-through'
                                        : 'none',
                                color: page === 'contact' ? '#8fc0a9' : 'white',
                            }}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </StyledWrapper>
    );
};

export default NavBar;

const StyledWrapper = styled.main`
    @media all and (max-width: 930px) {
        .nav-wrapper {
            ul {
                background-color: rgb(48, 48, 48, 0.8);
                display: flex;

                padding: 1rem;

                li {
                    list-style-type: none;
                    padding-right: 1rem;
                    font-size: 1.2rem;

                    a {
                        text-decoration: none;
                        color: white;
                    }
                }
            }
        }
    }
    @media all and (min-width: 930px) {
        .nav-wrapper {
            ul {
                display: flex;

                li {
                    list-style-type: none;
                    margin-right: 5rem;
                    font-size: 1.4rem;
                    a {
                        text-decoration: none;
                        color: white;
                    }
                }

                li:hover {
                    text-decoration: line-through;
                    color: #8fc0a9;
                }
            }
        }
    }
`;
