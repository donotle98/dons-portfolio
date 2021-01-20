import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import React, { useState } from 'react';

const NavBar = () => {
    return (
        <StyledWrapper>
            <div className='mobile'>
                <Menu width={'14.5rem'} disableAutoFocus>
                    <div className='sidebar'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About me</Link>
                        <Link to='/projects'>More Projects</Link>
                        <Link to='/blog'>Blog</Link>
                    </div>
                </Menu>
            </div>
            <div className='desktop'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About me</Link>
                    </li>
                    <li>
                        <Link to='/projects'>More Projects</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                </ul>
            </div>
        </StyledWrapper>
    );
};

export default NavBar;

const StyledWrapper = styled.main`
    .mobile {
        display: block;
    }
    .desktop {
        display: none;
    }
    .bm-burger-button {
        position: fixed;
        width: 2rem;
        height: 1.5rem;
        left: 1rem;
        top: 1rem;
    }
    .bm-burger-bars {
        background: white;
    }
    .bm-cross-button {
        height: 24px;
        width: 24px;
        z-index: 1000;
    }

    /* Color/shape of close button cross */
    .bm-cross {
        background: white;
    }

    .bm-menu {
        background: #373a47;
        font-size: 1.15em;
        padding: 2.5em 1.5em 0;
        width: 14rem;
    }

    .sidebar a {
        display: flex;
        flex-direction: column;
        color: white;
        margin-bottom: 3rem;
        text-decoration: none;
        font-size: 1.8rem;
    }

    @media all and (min-width: 800px) {
        .mobile {
            display: none;
        }

        .desktop {
            display: block;
        }
        ul {
            display: flex;
            position: fixed;
            left: 0;
            top: 0;

            li {
                list-style-type: none;
                margin-right: 1rem;

                a {
                    font-size: 1.1rem;
                    color: white;
                }
                a:hover {
                    color: lightblue;
                }
            }
        }
    }
`;
