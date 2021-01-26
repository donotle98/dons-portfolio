import React from 'react';
import styled from 'styled-components';
import me from './assets/ACS_0034.jpg';
import firstImg from './assets/IMG_9698.jpg';
import secondImg from './assets/IMG_9701.JPG';
import thirdImg from './assets/IMG_9702.JPG';
import fourthImg from './assets/IMG_9705.jpg';

const about = () => {
    return (
        <StyledWrapper>
            <div className='about'>
                <h1>Who is Donovan Le?</h1>
                <div className='personal'>
                    <div className='person-img'></div>
                    <p>
                        My name is Donovan and I'm a Full-Stack Engineer. I
                        started out coding in university where I pursued a
                        degree in Computer Science. Coding has always been a
                        deep interest and passion for me. In addition to getting
                        a degree in Computer Science I double majored in Finance
                        accounting. I have an eye for attention to detail and my
                        coding projects reflect that. <br />I really enjoy
                        building command line interfaces, frontend web designs
                        and admin systems. The ability to create something out
                        of thin air is one of my favorite parts about coding. In
                        addition to that, project management has also been one
                        of my favorite parts of the work, so I decided that it
                        was time to transition fully to Coding.
                        <br /> To refine my coding skills, I recently completed
                        a certificate program in full-stack software engineering
                        from the Thinkful software engineering program. In this
                        program, I learned how to plan, code, deploy, and
                        maintain real life coding projects, use industry
                        standard programming tools, and programming best
                        practices. I also learned how to handle the less
                        technical aspects of the job, like how to be a team
                        player and how to motivate people to complete code on
                        time.
                    </p>
                </div>
                <br />
                <div className='hobbies'>
                    <div className='hobby-img'>
                        <div className='firstImg grid-img'></div>
                        <div className='secondImg grid-img'></div>
                        <div className='thirdImg grid-img'></div>
                        <div className='fourthImg grid-img'></div>
                    </div>
                    <p>
                        I love photography. My interest in photography peaked in
                        high school, where one of the best teachers ever made me
                        one of only 4 advanced photography students. He made it
                        so fun and interesting. He constantly kept pushing us to
                        go out and explore and really delve deep into the
                        environment we shot in. The best part of photography is
                        that each photograph does not have to mean anything to
                        the photographer or the viewer. It can simply just be a
                        photograph of something you think looks nice. It can
                        also be a great way to meet and socialize with new
                        people. Whether you are taking on a client for new
                        photos or you're working with new photographers to
                        create a new scene or portfolio together. <br /> I also
                        have a very big interest in playing video games,
                        specifically FPS games. The reason I have a big interest
                        in FPS games is because for the most part you work with
                        a team to complete an objective. One of the games I play
                        is Apex Legends. I actually play it so much I'm involved
                        in a lot of the tournaments the game developers will
                        host, where my team and I will play with professional
                        gamers. It is a great way to test our skills and really
                        perfect our communication.
                    </p>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.main`
    p {
        color: white;
        line-height: 2.5rem;
    }
    .about {
        h1 {
            text-align: center;
            color: white;
            margin-top: 4rem;
        }
        .personal {
            .person-img {
                background-image: url(${me});
                background-size: cover;
                background-position: center center;
                height: 20rem;
                width: 15rem;
                margin: auto;
            }
        }
        .hobbies {
            .hobby-img {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(2, 1fr);
                grid-column-gap: 0px;
                grid-row-gap: 0px;

                .grid-img {
                    background-size: cover;
                    background-position: center center;
                    height: 20rem;
                    width: 100%;
                    margin: auto;
                }

                .firstImg {
                    grid-area: 1 / 1 / 2 / 2;
                    background-image: url(${firstImg});
                }
                .secondImg {
                    grid-area: 1 / 2 / 2 / 3;
                    background-image: url(${secondImg});
                }
                .thirdImg {
                    grid-area: 2 / 1 / 3 / 2;
                    background-image: url(${thirdImg});
                }
                .fourthImg {
                    grid-area: 2 / 2 / 3 / 3;
                    background-image: url(${fourthImg});
                }
            }
        }
    }

    @media all and (min-width: 750px) {
        p {
            width: 50%;
            margin-right: 4rem;
            margin-top: 5rem;
        }
        .about {
            .personal {
                display: flex;
                flex-direction: row;

                .person-img {
                    width: 30rem;
                    height: 40rem;
                }
            }
        }
        .hobbies {
            display: flex;

            .hobby-img {
                width: 35rem;
                height: 40rem;
                margin: auto;
            }
        }
    }
`;

export default about;
