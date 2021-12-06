import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import '../../styles/app.css';
import MenuBar from './MenuBar';

const FlexDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: white;
`;

const NavigationMenuDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    color: white;
    font-family: RailwayBold, Arial, serif;
    font-size: calc(17px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
    @media (max-width: 640px) {
        display: none;
        visibility: hidden;
    }
`;

const NavigationContainer = styled.div`
    font-size: calc(24px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 700;
    letter-spacing: 0.17em;
    line-height: 1.5em;
    font-family: RailwayBold, Arial, serif;
    color: white;
    display: flex;
    flex-direction: row;
    font-variant: all-small-caps;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    @media (max-width: 640px) {
        color: black;
    }
`;

const NavigationMenu = () => {
    return (
        <>
            <MenuBar />
            <NavigationMenuDiv className="hide-mobile">
                <div>Adventures</div>
                <div>|</div>
                <Link to={'/about-me'} key={'about-me'}>
                    <div>About Me</div>
                </Link>{' '}
            </NavigationMenuDiv>
        </>
    );
};
const Header = () => {
    return (
        <div className={'parent-header-div'}>
            <FlexDiv>
                <div className={'top-caption-header'}>
                    “LIFE IS EITHER A DARING ADVENTURE OR NOTHING AT ALL.” - HELEN KELLER
                </div>
            </FlexDiv>
            <div className={'header-div'}>
                <div className={'test'}>
                    <NavigationContainer>
                        <div> KAVITA CHAUDHRY</div>

                        <NavigationMenu />
                    </NavigationContainer>
                </div>
            </div>
        </div>
    );
};

const AppFrame: React.FC = ({ children }) => {
    return (
        <div className={'container'}>
            <Header />
            {children}
        </div>
    );
};

export default AppFrame;
