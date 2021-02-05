import React from 'react';
import styled from 'styled-components';
import './Projects.scss';

const Projects = () => {
    return (
        <StyledWrapper>
            <div className='container'>
                <h1>More projects to come...</h1>
            </div>
        </StyledWrapper>
    );
};

export default Projects;

const StyledWrapper = styled.div`
    h1 {
        text-align: center;
        color: white;
    }
`;
