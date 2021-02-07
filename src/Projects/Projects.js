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
                                        <a href={project.live_app}>Live App</a>
                                    ) : null}
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
        grid-auto-rows: minmax(100px, auto);
        margin-right: 9rem;

        .each-project {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            border: solid 1px white;
            border-radius: 4rem;
            width: 100%;
            height: 45rem;
            justify-content: center;
            margin-bottom: 2rem;

            .title {
                font-size: 1.4rem;
                text-align: center;
                margin-bottom: 1rem;
            }

            .tech {
                font-size: 1.2rem;
                margin-top: 1rem;
                margin-bottom: 1.5rem;
            }
            .desc {
                line-height: 1.6rem;
                margin-bottom: 1rem;
            }

            .links {
                display: flex;
                flex-direction: column;
                line-height: 2rem;
                padding-bottom: 3rem;

                a {
                    color: white;
                }
            }

            .project-img {
                background-size: cover;
                background-position: center center;
                height: 30rem;
                width: 20rem;
                margin: auto;
            }
        }
    }
    @media all and (min-width: 900px) {
        .project-wrapper {
            grid-template-columns: repeat(2, 1fr);
            margin-top: 2%;

            .each-project {
                width: 22rem;
            }
        }
    }

    @media all and (min-width: 1330px) {
        .project-wrapper {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;
