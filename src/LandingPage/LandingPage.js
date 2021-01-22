import React, { useState } from 'react';
import styled from 'styled-components';
import sightsImg from './assets/sights.png';
import img from './assets/ACS_0035.JPG';
import gsnImg from './assets/GSN-Home.png';
import srImg from './assets/spacedRep.png';
const LandingPage = () => {
    const [contact, setContact] = useState(false);
    const handleContact = () => {
        if (contact) {
            return (
                <div className='contact-info contact'>
                    <span style={{ paddingBottom: '.5rem' }}>
                        donovanle18@gmail.com
                    </span>
                    <a
                        href='https://github.com/donotle98'
                        style={{ marginBottom: '.5rem' }}
                    >
                        Github
                    </a>
                    <a href='https://www.linkedin.com/in/dtle647/'>LinkedIn</a>
                    <button onClick={() => setContact((c) => !c)}>X</button>
                </div>
            );
        } else {
            return (
                <div className='contact-btn contact'>
                    <button onClick={() => setContact((c) => !c)}>
                        Contact me
                    </button>
                </div>
            );
        }
    };
    return (
        <StyledWrapper>
            <div className='parent'>
                <header>
                    <div className='intro'>
                        <div className='image'></div>
                        <span>Hello,</span>
                        <div>
                            <span>I'm </span>
                            <span className='special-name'>Donovan</span>
                        </div>
                        <span className='special-name'>Le</span>
                    </div>
                    <span className='full-stack'>Full-Stack Developer</span>
                </header>
                {handleContact()}
                <div className='main-projects'>
                    <h1>Some of my work</h1>
                    <div className='sights-in-cali indi-projects'>
                        <h2>Sights in California</h2>
                        <div className='sic-image'></div>
                        <div className='links'>
                            <a href='http://sightsincali.donotle98.vercel.app/'>
                                Link to live app
                            </a>
                            <span>
                                Github{' '}
                                <a href='https://github.com/donotle98/Sights-in-California-frontend'>
                                    Client
                                </a>{' '}
                                and{' '}
                                <a href='https://github.com/donotle98/Sights-in-California-backend'>
                                    Server
                                </a>
                            </span>
                        </div>
                        <p>Built using React, Node, Express and PostgreSQL</p>
                        <p>
                            This web app was made to allow users to find sight
                            seeing locations to visit in California
                        </p>
                        <p>
                            Users can sign up to bookmark sights, submit a new
                            sight, or contact an admin to change details about a
                            sight.
                        </p>
                    </div>
                    <div className='gsn indi-projects'>
                        <h2>Gaming Social Network</h2>
                        <div className='gsn-image'></div>
                        <div className='links'>
                            <a href='https://thegsn.xyz/'>Link to live app</a>
                            <span>
                                Github{' '}
                                <a href='https://github.com/domcodesjs/gaming-social-network-client'>
                                    Client
                                </a>{' '}
                                and{' '}
                                <a href='https://github.com/domcodesjs/gaming-social-network-server'>
                                    Server
                                </a>
                            </span>
                        </div>
                        <p>Built using React, Node, Express and PostgreSQL</p>
                        <p>
                            This web app was made to allow users to better
                            connect with other video game fans
                        </p>
                        <p>
                            Users can sign up to create a profile, upload their
                            activities and images, find other people who play
                            the same games, and create communities of friends.
                        </p>
                    </div>
                    <div className='spaced-rep indi-projects'>
                        <h2>Spaced Repetition</h2>
                        <div className='sr-image'></div>
                        <div className='links'>
                            <a href='https://spaced-repetition-gilt.vercel.app/register'>
                                Link to live app
                            </a>
                            <span>
                                Github{' '}
                                <a href='https://github.com/donotle98/spaced-repetition'>
                                    Client
                                </a>{' '}
                                and{' '}
                                <a href='https://github.com/donotle98/spaced-repetition-api'>
                                    Server
                                </a>
                            </span>
                        </div>
                        <p>Built using React, Node, Express and PostgreSQL</p>
                        <p>
                            This web app was made to allow users to practice
                            specific words in another language, the language I
                            wanted users to learn was italian.
                        </p>
                        <p>
                            Users can sign up to view a dashboard which
                            contained a list of words. Their score of how many
                            times they have tried to guess each word, and their
                            total overall score of how many they got wrong and
                            got right.
                        </p>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
};
export default LandingPage;

const StyledWrapper = styled.main`
    color: white;
    header {
        .image{
            background-image: url(${img});
            background-size: cover;
            background-position: center center;
            height: 15rem;
            width: 100%;
            margin-bottom: 2rem;
        }
        .intro {
            font-size: 2.4rem;
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;

            .special-name {
                color: lightblue;
                font-size: 2.5rem;
            }
        }
        .full-stack{
            color: lightblue;
            font-size: 2.4rem;
        }
    }
    .contact-info {
        display: flex;
        flex-direction: column;
        border: solid 2px #98d98b;
        width: 13rem;
        padding: 1rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        color: #98d98b;

        a {
        color: #98d98b;
        }

        button {
            width: 2rem;
            border: solid 1px white;
            border-radius: 10rem;
            padding: 0.4rem;
            background-color: transparent;
            color: white;
            margin-left: 10rem;
        }
    }
    .contact-btn {
        margin-top: 2rem;
        margin-bottom: 8.5rem;
        button {
            border: solid 1px white;
            background-color: transparent;
            padding: 0.5rem 1rem 0.5rem 1rem;
            color: white;
        }
        button:hover{
            border: solid 1px #98d98b;
            color: #98d98b;
        }
    }

    .main-projects {
        h1 {
            text-align: center;
            font-size: 1.7rem;
        }
        h2 {
            font-size: 1.2rem;
            border-bottom: solid 1px white;
        }
        
        .links {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;

            a {
                text-decoration: underline;
                color: white;
            }
            a:hover{
                color: lightblue;
            }

            span{
                margin-top: 1rem;
                margin-bottom: 1.5rem;
            }
        }
        .indi-projects{
            margin-bottom: 3rem;
            line-height: 1.5rem;
        }
        .sights-in-cali {
            .sic-image {
                background-image: url(${sightsImg});
                height: 15rem;
                width: 90%;
                margin: auto;
                background-size: cover;
            }
        }

        .gsn{
            .gsn-image{
                background-image: url(${gsnImg});
                height: 15rem;
                width: 90%;
                margin: auto;
                background-size: cover;
            }
        }

        .spaced-rep{
            .sr-image{
                background-image: url(${srImg});
                height: 15rem;
                width: 90%;
                margin: auto;
                background-size: cover;
            }
        }
    }

    @media all and (min-width: 800px) {
        .parent {
            width: 100%:
            min-height: 100vh;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
        }
        header {
            grid-area: 1 / 1 / 2 / 2;
            position: fixed;
            bottom: 15rem;
            left: 3%;

            .image{
                position: fixed;
                top: 5rem;
                width: 40%;
                height: 40%;
            }
        }
        .contact-info{
            font-size: 1.2rem;
        }
        .contact {
            position: fixed;
            bottom: 2rem;
            left: 3%;
        }
        .main-projects {
            margin-right: 2rem;
            grid-area: 1 / 2 / 2 / 3;

            .sights-in-cali {
                .sic-image {
                height: 25rem;
                }
            }

            .gsn{
                .gsn-image{
                    
                    height: 25rem;
                }
            }

            .spaced-rep{
                .sr-image{
                   height: 25rem;
                }
            }
        }
    }
`;
