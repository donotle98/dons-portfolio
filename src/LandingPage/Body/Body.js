import React from 'react';
import sightsImg from '../assets/sights.png';
import mobileSightsImg from '../assets/sights-mobile.png';
import gsnImg from '../assets/gsn-desktop.png';
import mobileGsnImg from '../assets/gsn-mobile.png';
import blogImg from '../assets/blog-desktop.png';
import mobileBlogImg from '../assets/blog-mobile.png';
import styled from 'styled-components';

const Body = () => {
    return (
        <StyledWrapper>
            <div className='wrapper'>
                <StyledSights>
                    <div className='sights'>
                        <div className='sights-img img'></div>
                        <p className='title'>Sights In California</p>
                        <p className='tech'>React, Node, Express, PostgreSQL</p>
                        <p className='desc'>
                            This was made to help people in California find
                            sights to see in California.
                        </p>
                        <p className='links'>
                            <a href='https://github.com/donotle98/Sights-in-California-frontend'>
                                Client Code
                            </a>
                            <a href='https://github.com/donotle98/Sights-in-California-backend'>
                                Server Code
                            </a>
                            <a href='http://sightsincali.donotle98.vercel.app/'>
                                Live App
                            </a>
                        </p>
                    </div>
                </StyledSights>
                <StyledGSN>
                    <div className='gsn'>
                        <div className='gsn-img img'></div>
                        <p className='title'>Gaming Social Network</p>
                        <p className='tech'>
                            React, Node, Express, PostgreSQL, AWS S3 Bucket
                        </p>
                        <p className='desc'>
                            This was made to help video game users easily
                            connect with others and find new games to play.
                        </p>
                        <p className='links'>
                            <a href='https://github.com/donotle98/gaming-social-network-client'>
                                Client Code
                            </a>
                            <a href='https://github.com/donotle98/gaming-social-network-server'>
                                Server Code
                            </a>
                        </p>
                    </div>
                </StyledGSN>
                <StyledBlog>
                    <div className='blog'>
                        <div className='blog-img img'></div>
                        <p className='title'>My blog site, The Joy of Coding</p>
                        <p className='tech'>React, Node, Express, MongoDB</p>
                        <p className='desc'>
                            This was made so thought I as a developer can
                            express my thoughts, share my knowledge with those
                            who are also learning to code.
                        </p>
                        <p className='links'>
                            <a href='https://github.com/donotle98/blog-portfolio'>
                                Client Code
                            </a>
                        </p>
                    </div>
                </StyledBlog>
            </div>
        </StyledWrapper>
    );
};

export default Body;

const StyledWrapper = styled.div`
    p {
        margin-left: 2rem;
        margin-right: 1rem;
        text-align: left;
        line-height: 2rem;
        color: white;
    }
    .title {
        font-size: 1.7rem;
        text-decoration: underline;
        color: #b9134f;
    }

    .tech {
        font-size: 1.5rem;
    }

    .desc {
        font-size: 1.4rem;
    }

    a {
        color: #8fc0a9;
        display: flex;
        flex-direction: column;
    }

    .img {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        width: 90%;
        height: 30rem;
        margin: auto;
        border: solid 1px white;
        box-shadow: -6px 6px 0px #8fc0a9;
        transition: filter 0.5s ease-in-out;
    }

    .img:hover {
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
        border: solid 1px #b9134f;
        transition: filter 0.5s ease-in-out;
    }

    @media all and (min-width: 450px) {
        .wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .tech {
            font-size: 1.4rem;
        }

        .desc {
            font-size: 1.2rem;
        }
    }

    @media all and (min-width: 883px) {
        .wrapper {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }
    }
`;

const StyledSights = styled.div`
    .sights {
        margin-top: 5rem;

        .sights-img {
            background-image: url(${mobileSightsImg});
            background-size: cover;
            background-position: 0 0;
            overflow-y: auto;
        }
    }
`;

const StyledGSN = styled.div`
    .gsn {
        margin-top: 5rem;
        .gsn-img {
            background-image: url(${mobileGsnImg});
            background-size: cover;
            background-position: center center;
        }
    }
`;

const StyledBlog = styled.div`
    .blog {
        margin-top: 5rem;
        .blog-img {
            background-image: url(${mobileBlogImg});
            background-size: cover;
            background-position: center center;
        }
    }
`;