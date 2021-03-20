import React from 'react';
import styled from 'styled-components';
import sightsMobile from './assets/sights-mobile.png';
import gsnMobile from './assets/gsn-mobile.png';
import githubIcon from './assets/github-icon.png';

const SecondSection = () => {
    return (
        <StyledWrapper>
            <div id='projects'>
                <h1>Projects</h1>
                <div className='sights'>
                    <h2 className='sights-title'>
                        <a
                            href='http://sightsincali.donotle98.vercel.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            sights in California
                        </a>
                    </h2>
                    <img src={`${sightsMobile}`} className='sights-img'></img>
                    <div className='sights-description'>
                        <span>
                            This app was created to help people find things to
                            do and sights to see in California
                        </span>
                        <span className='tech'>
                            react/node/express/<br></br>postgresql
                        </span>
                        <a
                            href='https://github.com/donotle98/Sights-in-California-frontend'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                src={`${githubIcon}`}
                                className='github-img'
                            ></img>
                        </a>
                    </div>
                </div>
                <div className='gsn'>
                    <h2 className='gsn-title'>
                        <a
                            href='https://gaming-social-network-client-six.vercel.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            gaming social network
                        </a>
                    </h2>
                    <img src={`${gsnMobile}`} className='gsn-img'></img>
                    <div className='gsn-description'>
                        <span>
                            This app was created to connect video gamers with
                            other gamers in order to find community.
                        </span>
                        <span className='tech'>
                            react/node/express/<br></br>postgresql
                        </span>
                        <a
                            href='https://github.com/donotle98/gaming-social-network-client'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                src={`${githubIcon}`}
                                className='github-img'
                            ></img>
                        </a>
                    </div>
                </div>
                <span className='projects-links'>
                    More projects hosted on my{' '}
                    <a
                        href='https://vercel.com/donotle98'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Vercel
                    </a>{' '}
                    and my{' '}
                    <a
                        href='https://github.com/donotle98'
                        target='_blank'
                        rel='noreferrer'
                    >
                        github
                    </a>
                </span>
            </div>
        </StyledWrapper>
    );
};

export default SecondSection;

const StyledWrapper = styled.div`
    font-family: Roboto Condensed;
    img {
        width: 10rem;
    }

    h1 {
        color: #081588;
        font-family: Roboto Condensed;
        font-size: 3.5rem;
        font-weight: 100;
        padding-left: 1rem;
    }

    a {
        font-family: Roboto Condensed;
        color: #081588;
    }

    .sights {
        background-color: white;
        height: 30rem;

        .sights-title {
            text-align: center;
            padding: 0.75rem;
        }

        .sights-img {
            box-shadow: 10px 10px 0px #ffe1d9;
            margin-left: 0.25rem;
        }

        .sights-description {
            position: absolute;
            top: 10rem;
            left: 11rem;
            width: 45%;
            display: flex;
            flex-direction: column;

            .tech {
                font-size: 0.8rem;
                padding-top: 1.5rem;
            }

            .github-img {
                width: 4rem;
                margin: auto;
                padding-top: 1.5rem;
            }
        }
    }

    .gsn {
        height: 30rem;

        .gsn-title {
            text-align: center;
            padding: 1rem 0rem;
        }

        .gsn-img {
            position: absolute;
            right: 0;
            box-shadow: -10px 10px 0px white;
            margin-right: 0.25rem;
        }

        .gsn-description {
            width: 45%;
            text-align: right;
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 40rem;
            right: 12rem;

            .tech {
                font-size: 0.8rem;
                padding-top: 1.5rem;
            }

            .github-img {
                width: 4rem;
                margin: auto;
                padding-top: 1.5rem;
            }
        }
    }

    .projects-links {
        padding: 1rem;
    }

    @media all and (min-width: 500px) {
        img {
            width: 11rem;
        }

        .sights {
            .sights-title {
                text-align: center;
                padding: 0.75rem;
            }

            .sights-img {
                margin-left: 10%;
            }

            .sights-description {
                left: 50%;
                width: 45%;

                .tech {
                    font-size: 1rem;
                }

                .github-img {
                    width: 5rem;
                }
            }
        }

        .gsn {
            height: 30rem;

            .gsn-title {
                text-align: center;
                padding: 1rem 0rem;
            }

            .gsn-img {
                margin-right: 10%;
            }

            .gsn-description {
                right: 50%;
                width: 45%;

                .tech {
                    font-size: 1rem;
                }

                .github-img {
                    width: 5rem;
                }
            }
        }

        .projects-links {
            padding: 1rem;
            font-size: 1.2rem;
        }
    }

    @media all and (min-width: 950px) {
        img {
            width: 13rem;
        }

        .sights {
            width: 55%;
            height: 35rem;
            .sights-title {
                text-align: center;
                padding: 0.75rem;
            }

            .sights-img {
                margin-left: 5%;
            }

            .sights-description {
                left: 25%;
                width: 25%;

                .tech {
                    font-size: 1rem;
                }

                .github-img {
                    width: 5rem;
                }
            }
        }

        .gsn {
            height: 35rem;
            width: 50%;
            position: absolute;
            right: 0;
            bottom: 3rem;

            .gsn-title {
                text-align: center;
                padding: 1rem 0rem;
            }

            .gsn-img {
                margin-right: 2%;
                width: 15rem;
            }

            .gsn-description {
                top: 5rem;
                right: 50%;
                width: 45%;

                .tech {
                    font-size: 1rem;
                }

                .github-img {
                    width: 5rem;
                }
            }
        }
    }
`;
