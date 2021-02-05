import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import About from './About/About';
import styled from 'styled-components';
import Nav from './NavBar/NavBar';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import './App.css';

const App = () => {
    return (
        <StyledWrapper>
            <Router>
                <nav>
                    <Nav />
                </nav>
                <Switch>
                    <Route exact path='/home'>
                        <LandingPage />
                    </Route>
                    <Route exact path='/about'>
                        <About />
                    </Route>
                    <Route exact path='/projects'>
                        <Projects />
                    </Route>
                    <Route exact path='/contact'>
                        <Contact />
                    </Route>
                    <Redirect path='*' to='/home'></Redirect>
                </Switch>
            </Router>
        </StyledWrapper>
    );
};
export default App;

const StyledWrapper = styled.main`
    @media all and (max-width: 930px) {
        nav {
            position: fixed;
            top: 0;
            right: 0;
            z-index: 100;
        }
    }
    @media all and (min-width: 930px) {
        nav {
            transform: rotate(90deg);
            position: fixed;
            right: -260px;
            top: 60%;
            z-index: 1000;
        }
    }
`;
