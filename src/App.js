import React from 'react';
import './App.css';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import NavBar from './components/NavBar';
import styled from 'styled-components';

function App() {
    return (
        <StyledWrapper>
            <div className='App'>
                <nav>
                    <NavBar></NavBar>
                </nav>
                <header>
                    <FirstSection></FirstSection>
                </header>
                <main className='projects'>
                    <SecondSection></SecondSection>
                </main>
                <main className='about'>
                    <ThirdSection></ThirdSection>
                </main>
                <footer className='contact'>
                    <FourthSection></FourthSection>
                </footer>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    header {
        min-height: 100vh;
        position: relative;
    }
    .projects {
        position: relative;
        min-height: 125vh;
    }
    .about {
        position: relative;
        min-height: 100vh;
        background-color: #081588;
    }
    .contact {
        position: relative;
        min-height: 100vh;
    }
`;

export default App;
