import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const NavBar = () => {
    return (
        <StyledWrapper>
            <div className='mobile'>
                <Menu width={'14.5rem'} disableAutoFocus>
                    <div className='sidebar'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About me</Link>
                        <Link to='/projects'>More Projects</Link>
                        <a href='https://blog.donle.dev/'>Blog</a>
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
                        <a href='https://blog.donle.dev/'>Blog</a>
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
        position: fixed;
        left: 0;
        top: 0;
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

    @media all and (min-width: 1000px) {
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
                margin-right: 2rem;

                a {
                    font-size: 1.1rem;
                    color: white;
                    text-decoration: none;
                    border-top: solid 1px white;
                    border-bottom: solid 1px white;
                    padding: 0.3rem 1rem 0.3rem 1rem;
                    transition: 0.5s;
                }
                a:hover {
                    color: lightblue;
                    padding: 0rem 0.5rem 0rem 0.5rem;
                    border-top: solid 1px lightblue;
                    border-bottom: solid 1px lightblue;
                    transition: 0.5s;
                }
            }
        }
    }
`;
