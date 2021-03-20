import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
    return (
        <StyledWrapper>
            <div id='home'>
                <ul>
                    <li>
                        <a href='#home'>Home</a>
                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    font-family: Roboto Condensed;
    color: #081588;
    height: 4rem;
    padding-top: 1rem;
    width: 100%;
    ul {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        padding-left: 0;
        padding: 0.5rem 1rem;
    }

    li {
        a {
            text-decoration: none;
            color: #081588;
        }
    }

    @media all and (min-width: 550px) {
        ul {
            position: absolute;
            right: 0;
            display: flex;
            justify-content: center;
            padding-right: 3rem;

            li {
                padding-left: 2.25rem;

                a:hover {
                    border-bottom: 1px solid #081588;
                }
            }
        }
    }

    @media all and (min-width: 850px) {
        ul {
            li {
                padding-left: 3.5rem;
            }
        }
    }
`;

export default NavBar;
