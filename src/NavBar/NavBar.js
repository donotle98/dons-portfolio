import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [page, setPage] = useState('home');
    //rgb(48, 48, 48, .8)
    return (
        <StyledWrapper>
            <div className='nav-wrapper'>
                <ul>
                    <Link to='/home'>
                        <li
                            onClick={() => setPage('home')}
                            style={{
                                textDecoration:
                                    page === 'home' ? 'line-through' : 'none',
                                color: page === 'home' ? '#8fc0a9' : 'white',
                            }}
                        >
                            Home
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li
                            onClick={() => setPage('about')}
                            style={{
                                textDecoration:
                                    page === 'about' ? 'line-through' : 'none',
                                color: page === 'about' ? '#8fc0a9' : 'white',
                            }}
                        >
                            About
                        </li>
                    </Link>
                    <Link to='/projects'>
                        <li
                            onClick={() => setPage('projects')}
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
                        </li>
                    </Link>
                    <Link to='/contact'>
                        <li
                            onClick={() => setPage('contact')}
                            style={{
                                textDecoration:
                                    page === 'contact'
                                        ? 'line-through'
                                        : 'none',
                                color: page === 'contact' ? '#8fc0a9' : 'white',
                            }}
                        >
                            Contact
                        </li>
                    </Link>
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
                color: white;
                padding: 1rem;
                a {
                    text-decoration: none;
                }
                li {
                    list-style-type: none;
                    padding-right: 1rem;
                    font-size: 1.2rem;
                }
            }
        }
    }
    @media all and (min-width: 930px) {
        .nav-wrapper {
            ul {
                display: flex;

                color: white;
                a {
                    text-decoration: none;
                }
                li {
                    list-style-type: none;
                    margin-right: 3rem;
                    padding: 1rem;
                    font-size: 1.2rem;
                }

                li:hover {
                    text-decoration: line-through;
                    color: #8fc0a9;
                }
            }
        }
    }
`;
