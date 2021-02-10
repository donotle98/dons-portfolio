import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img from './assets/me.jpeg';
import githubIcon from './assets/github-icon.png';
import linkedinIcon from './assets/linkedin-icon.png';
import Body from './Body/Body';

const LandingPage = () => {
    const [scrollState, setScrollState] = useState('top');

    useEffect(() => {
        let listener = null;
        listener = document.addEventListener('scroll', (e) => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 120) {
                if (scrollState !== 'don') {
                    setScrollState('don');
                }
            } else {
                if (scrollState !== 'top') {
                    setScrollState('top');
                }
            }
        });
        return () => {
            document.removeEventListener('scroll', listener);
        };
    }, [scrollState]);

    return (
        <StyledWrapper>
            <div
                className='header'
                style={{ opacity: scrollState === 'top' ? '1' : '.1' }}
            >
                <div className='left-side'>
                    <a
                        className='blog-link mobile-link'
                        href='https://blog.donle.dev/'
                        target='_blank'
                        rel='noreferrer'
                        style={{ display: 'none' }}
                    >
                        View my Blog
                    </a>
                    <a
                        href='https://github.com/donotle98'
                        className='github-icon mobile-link'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={`${githubIcon}`} alt='link to site'></img>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/dtle647/'
                        className='linkedin-icon mobile-link'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={`${linkedinIcon}`} alt='link to site'></img>
                    </a>
                    <h1 className='mobile-name'>Donovan</h1>
                    <h1 className='mobile-title'>Le</h1>
                    <span>FULL-STACK DEVELOPER</span>
                </div>
                <div className='img'></div>
                <div className='right-side'>
                    <h1>Le</h1>
                    <div className='links'>
                        <a
                            className='blog-link'
                            href='https://blog.donle.dev/'
                            target='_blank'
                            rel='noreferrer'
                            style={{ display: 'none' }}
                        >
                            View my Blog
                        </a>
                        <a
                            href='https://github.com/donotle98'
                            className='icon'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img src={`${githubIcon}`} alt='link to site'></img>
                        </a>
                        <a
                            href='https://www.linkedin.com/in/dtle647/'
                            className='icon'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                src={`${linkedinIcon}`}
                                alt='link to site'
                            ></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className='body'>
                <Body />
            </div>
        </StyledWrapper>
    );
};
export default LandingPage;

const StyledWrapper = styled.main`
    @media all and (max-width: 700px) {
        .header {
            color: white;
            transition: ease-in-out 0.5s;

            .left-side {
                margin-top: 27rem;
                align-items: center;

                a {
                    z-index: 100;
                }

                h1 {
                    font-size: 4rem;
                    margin-top: 0;
                }

                .mobile-name {
                    margin-bottom: 0;
                }

                .mobile-title {
                    margin-bottom: 3rem;
                }

                span {
                    font-size: 3rem;
                    color: #8fc0a9;
                }

                .blog-link {
                    border: solid 1px #8fc0a9;
                    text-decoration: none;
                    color: white;
                    font-size: 1.3rem;
                    padding: 0.5rem 1rem 0.5rem 1rem;
                    float: right;
                    margin-top: 1rem;
                }

                img {
                    width: 4rem;
                    height: 4rem;
                    color: white;
                    background-color: white;
                    border-radius: 10rem;
                    margin-left: 1rem;
                }
            }

            .img {
                position: absolute;
                top: 0;
                left: 0;
                z-index: -100;
                background-image: url(${img});
                background-size: cover;
                background-position: center center;
                width: 100%;
                height: 100%;
                -webkit-filter: grayscale(100%);
                filter: grayscale(100%);
                transition: filter 0.5s ease-in-out;
            }

            .right-side {
                display: none;
            }
        }

        .body {
            color: white;
            text-align: center;
        }
    }

    @media all and (min-width: 700px) {
        .header {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            color: white;
            transition: ease-in-out 0.5s;

            .left-side {
                grid-area: 1 / 1 / 2 / 2;
                text-align: right;
                margin-top: 50%;
                margin-right: 2rem;

                .mobile-title {
                    display: none;
                }

                h1 {
                    font-size: 3rem;
                }

                span {
                    font-size: 3rem;
                    color: #8fc0a9;
                }

                .mobile-link {
                    display: none;
                }
            }

            .img {
                grid-area: 1 / 2 / 2 / 3;
                background-image: url(${img});
                background-size: cover;
                background-position: -70px center;
                background-repeat: no-repeat;
                width: 100%;
                height: 50rem;
                -webkit-filter: grayscale(100%);
                filter: grayscale(100%);
                transition: filter 0.5s ease-in-out;
            }

            .img:hover {
                transition: filter 0.5s ease-in-out;
                -webkit-filter: grayscale(0%);
                filter: grayscale(0%);
            }

            .right-side {
                grid-area: 1 / 3 / 2 / 4;
                margin-top: 50%;
                margin-left: 2rem;
                h1 {
                    font-size: 3rem;
                }

                .links {
                    display: flex;
                    flex-direction: column;
                    width: 10rem;

                    a {
                        z-index: 1000;
                    }

                    .blog-link {
                        color: white;
                        text-decoration: none;
                        padding: 0.5rem 1rem 0.5rem 1rem;
                        border: solid 1px #8fc0a9;
                        width: 7rem;
                        text-align: center;
                        z-index: 100;
                        transition: 0.5s;
                    }

                    .blog-link:hover {
                        background-color: #8fc0a9;
                        transition: 0.5s;
                    }

                    .icon {
                        width: 4rem;
                    }

                    .icon img {
                        width: 4rem;
                        height: 4rem;
                        color: white;
                        background-color: white;
                        border-radius: 10rem;
                        margin: 1.5rem 0 0 0;
                        transition: 0.5s;
                    }

                    .icon img:hover {
                        background-color: #8fc0a9;
                        transition: 0.5s;
                    }
                }
            }
        }
    }

    @media all and (min-height: 1000px) {
        .img {
            min-height: 50vh;
        }
    }
`;
