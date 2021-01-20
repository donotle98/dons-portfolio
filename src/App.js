import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import styled from 'styled-components';
import Nav from './NavBar/NavBar';
import './App.css';
import About from './AboutMe/about';

const App = () => {
    return (
        <StyledWrapper>
            <Router>
                <nav>
                    <Nav />
                </nav>
                <Switch>
                    <Route exact path='/'>
                        <LandingPage />
                    </Route>
                    <Route exact path='/about'>
                        <About />
                    </Route>
                </Switch>
            </Router>
        </StyledWrapper>
    );
};
export default App;

const StyledWrapper = styled.main``;

//Blog || articles of my experience with JS, React on this portfolio
