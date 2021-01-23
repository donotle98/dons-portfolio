import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import styled from 'styled-components';
import Nav from './NavBar/NavBar';
import './App.css';
import About from './AboutMe/about';
import MoreProjects from './MoreProjects/MoreProjects';
import Blog from './Blog/Blog';

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
                    <Route exact path='/projects'>
                        <MoreProjects />
                    </Route>
                    <Route exact path='/blog'>
                        <Blog />
                    </Route>
                    <Redirect path='*' to='/'></Redirect>
                </Switch>
            </Router>
        </StyledWrapper>
    );
};
export default App;

const StyledWrapper = styled.main``;

//Blog || articles of my experience with JS, React on this portfolio
