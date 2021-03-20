import React from 'react';
import styled from 'styled-components';
import desktopImg from './assets/blog.jpeg';
import githubIcon from './assets/github-icon.png';
import linkedinIcon from './assets/linkedin-icon.png';

const ThirdSection = () => {
    return (
        <StyledWrapper>
            <div id='about'>
                <h1>About me</h1>
                <div className='desktop-image'></div>
                <hr className='first-line' />
                <hr className='second-line' />
                <div className='about-text'>
                    <p>
                        My name is Donovan and I'm a Software Engineer. I
                        started out coding in university where I pursued a
                        degree in Computer Science. Coding has always been a
                        deep interest and passion for me. Being able to create
                        what the user sees and uses is where my interests will
                        always be aligned for me. Grabbing the users attention
                        and keeping them coming back to use what I made and
                        worked on are all very challenging aspects of
                        programming that I love.
                    </p>
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
            </div>
        </StyledWrapper>
    );
};

export default ThirdSection;

const StyledWrapper = styled.div`
    background-color: rgba(8, 21, 136, 0);
    width: 100%;
    h1 {
        color: #fff;
        font-family: Roboto Condensed;
        font-size: 3.5rem;
        font-weight: 100;
        padding: 1rem;
    }
    .about-text {
        height: 45rem;
        background-color: #fff;
        padding: 3rem;
        padding-top: 1rem;
        font-family: Roboto Condensed;
        font-size: 1rem;
        p {
            line-height: 2rem;
        }
    }
    .first-line {
        border: none;
        height: 0.15rem;
        background-color: rgba(8, 21, 136);
        position: absolute;
        bottom: 3rem;
        right: 0;
        width: 15rem;
    }
    .second-line {
        border: none;
        height: 0.15rem;
        background-color: rgba(8, 21, 136);
        position: absolute;
        bottom: 1rem;
        right: 0;
        width: 10rem;
    }
    a {
        z-index: 1000;
    }

    @media all and (min-width: 750px) {
        h1 {
            position: absolute;
            top: 2rem;
            z-index: 100;
            text-shadow: 3px 3px 0px rgba(8, 21, 136), 4px 4px 0px #ffe1d9;
        }
        .about-text {
            position: absolute;
            right: 1rem;
            bottom: 0;
            width: 50%;
            padding: 2rem;
        }

        .first-line {
            border: none;
            height: 0.15rem;
            background-color: white;
            position: absolute;
            top: 31rem;
            right: 1rem;
            width: 80%;
        }
        .second-line {
            border: none;
            height: 0.15rem;
            background-color: white;
            position: absolute;
            top: 34rem;
            right: 1rem;
            width: 70%;
        }

        .desktop-image {
            position: absolute;
            top: 5rem;
            left: 1rem;
            background-image: url(${desktopImg});
            background-size: cover;
            background-position: center center;
            height: 20rem;
            width: 40%;
            box-shadow: 10px 10px 0px white;
        }

        a {
            z-index: 1000;
        }
    }
`;
