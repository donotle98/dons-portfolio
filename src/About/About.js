import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <StyledWrapper>
            <div className='about-wrapper'>
                <header>
                    <h1>The Donovan Le Story</h1>
                    <span>Get to know me</span>
                </header>
                <div className='about-me'>
                    {' '}
                    My name is Donovan and I'm a Front-End Developer. I started
                    out coding in university where I pursued a degree in
                    Computer Science. Coding has always been a deep interest and
                    passion for me. Since my time from university, I attended
                    Thinkful's engineering immersion program where I learned how
                    to work in a team, getting big projects done on time, and
                    being able to integrate different technologies into one
                    project. I graduated from Thinkful with a certificate in
                    January and I’m openly looking for software development
                    opportunities to build, learn and grow. Being able to create
                    and design what the user sees is very important for me.
                    Grabbing the users attention and keeping them coming back
                    are all very challenging aspects of front-end development
                    that I love.
                </div>
            </div>
        </StyledWrapper>
    );
};

export default About;

const StyledWrapper = styled.div`
    max-width: 60rem;
    margin: auto;
    header {
        width: 100%;
        height: 5rem;
        text-align: center;
        margin-top: 5.5rem;
        margin-bottom: 1rem;
        color: #b9134f;
    }

    .about-me {
        text-align: center;
        color: white;
        padding: 1rem;
        line-height: 45px;
        width: 100%;
        font-size: 1.2rem;
    }

    @media all and (min-width: 930px) {
        header {
            margin: 0;
            height: 10rem;
            color: #8fc0a9;
            box-shadow: 0px 4px 0px #8fc0a9;

            h1 {
                margin: 0;
                padding-top: 2rem;
                padding-bottom: 1rem;
                font-size: 2.6rem;
            }

            span {
                font-size: 1.5rem;
            }
        }

        .about-me {
            margin-top: 3rem;
            margin-right: 4rem;
        }
    }
`;
