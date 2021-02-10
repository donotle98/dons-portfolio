import React from 'react';
import styled from 'styled-components';
import './Projects.scss';
import { projects } from './store/projectsStore';

const Projects = () => {
    return (
        <StyledWrapper>
            <div>
                <div className='project-wrapper'>
                    {projects.map((project, index) => {
                        return (
                            <div key={index} className='each-project'>
                                <span className='title'>{project.title}</span>
                                <div
                                    className='project-img'
                                    style={{
                                        backgroundImage: `url(${project.img})`,
                                    }}
                                ></div>
                                <div className='overlay'>
                                    <span className='tech'>{project.tech}</span>
                                    <span className='desc'>
                                        {project.description}
                                    </span>
                                    <div className='links'>
                                        <a href={project.client_link}>
                                            Client code
                                        </a>
                                        {project.server_link?.length > 0 ? (
                                            <a href={project.server_link}>
                                                Server Link
                                            </a>
                                        ) : null}
                                        {project.live_app?.length > 0 ? (
                                            <a href={project.live_app}>
                                                Live App
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='container'>
                    <h1>More projects to come...</h1>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default Projects;

const StyledWrapper = styled.div`
    span {
        color: white;
    }
    .project-wrapper {
        margin-top: 20%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;
        grid-auto-rows: minmax(50px, 100%);

        .each-project {
            position: relative;
            display: inline-block;
            overflow: hidden;
            max-width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: 5rem;
        }

        .title {
            font-size: 1.6rem;
        }

        .project-img {
            display: block;
            background-size: cover;
            background-position: center top;
            width: 100%;
            height: 30rem;
            border-radius: 5rem;
        }

        .overlay {
            opacity: 0;
            position: absolute;
            top: 2;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 30rem;
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
            border-radius: 5rem;
            -moz-transition: all 0.4s ease-in-out 0s;
            -webkit-transition: all 0.4s ease-in-out 0s;
            -ms-transition: all 0.4s ease-in-out 0s;
            transition: all 0.4s ease-in-out 0s;
            display: flex;
            flex-direction: column;

            .tech {
                font-size: 1.3rem;
                margin-top: 4rem;
                margin-bottom: 2rem;
            }

            .desc {
                font-size: 1.1rem;
                padding: 1rem;
            }

            .links {
                display: flex;
                flex-direction: column;
                margin-top: 5rem;

                a {
                    font-size: 1.3rem;
                    width: 8rem;
                    color: #8fc0a9;
                    margin: auto;
                    margin-top: 1rem;
                }
            }
        }

        .each-project:hover .overlay {
            opacity: 1;
        }
    }

    @media all and (min-width: 700px) {
        .project-wrapper {
            grid-template-columns: repeat(2, 1fr);
            margin-top: 10%;
            margin-left: 2rem;
            .each-project {
                width: 22rem;
            }
        }
    }

    @media all and (min-width: 1330px) {
        .project-wrapper {
            margin-top: 2%;
            margin-left: 3rem;
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;
