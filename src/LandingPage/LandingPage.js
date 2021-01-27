import React, { useState } from 'react';
import styled from 'styled-components';
import sightsImg from './assets/sights.png';
import img from './assets/ACS_0035.JPG';
import gsnImg from './assets/GSN-Home.png';
import srImg from './assets/spacedRep.png';
import { Linking } from 'react-native';
import { FaChevronDown } from 'react-icons/fa';

const LandingPage = () => {
    const [contact, setContact] = useState(false);
    const handleContact = () => {
        if (contact) {
            return (
                <div className='contact-info contact'>
                    <span
                        style={{ paddingBottom: '.5rem' }}
                        onClick={() =>
                            Linking.openURL('mailto:donovanle18@gmail.com')
                        }
                        target='_blank'
                    >
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
                    <div className='full-stack'>
                        <span>Full-Stack Developer</span>
                    </div>
                </header>
                {handleContact()}
                <a href='#first-project'>
                    <div className='link-projects'>
                        <span>Some of my work</span>
                        <span>
                            <FaChevronDown />
                        </span>
                    </div>
                </a>
                <div className='main-projects'>
                    <h1>Some of my work</h1>
                    <div
                        className='sights-in-cali indi-projects'
                        id='first-project'
                    >
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
                            seeing locations to visit in California. I built
                            this app to fix the problem of easily finding
                            sights, sharing your own sights, and keeping all
                            these sights in one easy to find place.
                        </p>
                        <p>
                            Users can sign up to bookmark sights, submit a new
                            sight, or contact an admin to change details about a
                            sight. This app is really for users that are
                            visiting or living in California.
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
                            connect with other video game fans. My group and I
                            built this app to solve the problem of finding
                            others that play the same game. It makes it easier
                            to build relations and communities.
                        </p>
                        <p>
                            Users can sign up to create a profile, upload their
                            activities and images, find other people who play
                            the same games, and create communities of friends.
                            This app was made for the shy gamers that have
                            trouble finding friends to play games with. This
                            website is an easy place to upload your achievements
                            and find groups that have a interest like yours.
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
                            wanted users to learn was italian. This app was made
                            to solve the problem of the intimidation of learning
                            another language. If the user starts with just a few
                            words to learn, then they can transition into more
                            words and even sentences.
                        </p>
                        <p>
                            Users can sign up to view a dashboard which
                            contained a list of words. Their score of how many
                            times they have tried to guess each word, and their
                            total overall score of how many they got wrong and
                            got right. This app was made for the quick learners,
                            people who just want to have a little fun while
                            learning another language.
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
            margin-bottom: 2rem;

            .special-name {
                color: lightblue;
                font-size: 2.5rem;
            }
            
        }
        .full-stack{
            color: lightblue;
            margin-top: 2rem;
            margin-bottom: 2rem;

            span{
                color: #fff;
                font-size: 2.6rem;
                text-transform: uppercase;
                font-weight: 700;
                background: linear-gradient(to right,lightblue 10%, lightblue 50%, white 60%);
                background-size: auto auto;
                background-clip: border-box;
                background-size: 200% auto;
                color: #fff;
                background-clip: text;
                text-fill-color: transparent;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: textclip 5.5s linear infinite;
                display: inline-block;
            }
        }
    }
    @keyframes textclip {
        to {
            background-position: 200% center;
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
        span{
            cursor: pointer;
            text-decoration: underline;
        }

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
    a{
        color: white;
    }

    .link-projects{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 10rem;
        margin: auto;
        text-align: center;
        margin-bottom: 5rem;
    }

    .main-projects {
        h1 {
            text-align: center;
            font-size: 1.7rem;
            display: none;
        }
        h2 {
            text-align: center;
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

    @media all and (min-width: 500px){
        header{
            .image{
                width: 60%;
                margin: auto;
                margin-top: 2rem;
                margin-bottom: 3rem;
            }
        }

        .main-projects{
            h1{
                display: block;
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
            bottom: 12rem;
            left: 3%;

            .image{
                position: fixed;
                top: 5rem;
                width: 35%;
                height: 35%;
                z-index: -100;
            }
            .full-stack{
                span{
                    font-size: 1.8rem;
                }
            }
        }

        .contact-info{
            font-size: 1.2rem;
        }
        .contact {
            position: fixed;
            bottom: 0rem;
            left: 3%;
        }

        .link-projects{
            display: none;
        }
        .main-projects {
            margin-right: 2rem;
            grid-area: 1 / 2 / 2 / 3;

            h2{
                text-align: left;
            }

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

    @media all and (min-width: 1050px){
        header{
            .full-stack{
                span{
                    font-size: 2.5rem;
                }
            }
        }
    }
`;
