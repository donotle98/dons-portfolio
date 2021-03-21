import React from 'react';
import styled from 'styled-components';
import githubIcon from './assets/github-icon.png';
import linkedinIcon from './assets/linkedin-icon.png';
import downArrow from './assets/down-arrow.png';
import imgMe from './assets/me.jpeg';

const FirstSection = () => {
    return (
        <StyledWrapper>
            <div>
                <div className='name'>
                    <span className='first-name'>DONOVAN</span>
                    <span className='last-name'>LE</span>
                </div>
                <div className='links'>
                    <a
                        href='https://github.com/donotle98'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={`${githubIcon}`} alt='link to site'></img>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/dtle647'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={`${linkedinIcon}`} alt='link to site'></img>
                    </a>
                </div>
                <hr />
                <h1>full stack developer</h1>

                <div className='img-me'>
                    <img src={`${imgMe}`}></img>
                </div>

                <div className='down-arrow'>
                    <img src={`${downArrow}`}></img>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default FirstSection;

const StyledWrapper = styled.div`
    padding-left: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    .name {
        color: #081588;
        display: flex;
        flex-direction: column;
        font-family: Roboto Condensed;
        padding-bottom: 0.5rem;

        .first-name {
            font-size: 4rem;
        }

        .last-name {
            font-size: 2.7rem;
        }
    }

    hr {
        margin-left: 2rem;
        margin-top: 3.5rem;
        z-index: -100;
        background-color: #081588;
        border: none;
        height: 2px;
    }

    h1 {
        position: absolute;
        top: 14rem;
        color: #081588;
        font-family: Roboto Condensed;
        font-size: 3.5rem;
        text-shadow: 3px 3px 0px #ffe1d9, 6px 6px 0px white;
    }

    .links {
        position: absolute;
        top: 5rem;
        right: 0;
    }

    .img-me {
        margin-top: 8rem;
        img {
            position: absolute;
            z-index: -100;
            right: 0;
            width: 17rem;
            box-shadow: -10px 10px 0px white;
        }
    }

    .down-arrow {
        position: absolute;
        bottom: 10rem;
        left: 48.5%;

        img {
            width: 2rem;
        }
    }

    @media all and (min-width: 550px) {
        .name {
            .first-name {
                font-size: 7rem;
            }
            .last-name {
                font-size: 5.5rem;
            }
        }
        .links {
            position: absolute;
            top: 24rem;
            left: 0;
        }
        .img-me {
            margin-top: 0;

            img {
                position: absolute;
                top: 18rem;
                z-index: 100;
                width: 20rem;
            }
        }
        hr {
            margin-top: 0;
            z-index: -1000;
        }
        h1 {
            position: absolute;
            top: 16rem;
            z-index: 1000;
        }
    }
    @media all and (min-width: 850px) {
        margin-left: 4rem;
        .name {
            .first-name {
                font-size: 7rem;
            }
            .last-name {
                font-size: 5rem;
            }
        }
        .links {
            margin-left: 4rem;
        }
        hr {
            margin-top: 2rem;
            margin-left: 0;
        }
        h1 {
            top: 18rem;
            font-size: 4rem;
        }
        .img-me {
            img {
                top: 13rem;
                width: 23rem;
            }
        }
    }

    @media all and (min-width: 1440px) {
        margin-left: 8rem;
        .links {
            margin-left: 8rem;
        }
        hr {
            margin-right: 2rem;
            margin-left: 3rem;
        }
        h1 {
            font-size: 4.5rem;
        }
        .img-me {
            img {
                top: 10rem;
                right: 1rem;
                width: 26rem;
            }
        }
    }
`;
