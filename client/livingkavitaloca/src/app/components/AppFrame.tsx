import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../../styles/app.css';
import MenuBar from './MenuBar';
import Connect from './Connect';

const FlexDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: #fff6ed;
`;

const NavigationMenuDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    color: white;
    font-family: RailwayBold, Arial, serif;
    letter-spacing: 0.2em;
    font-weight: 700;
    font-size: calc(13px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
    @media (max-width: 640px) {
        display: none;
        visibility: hidden;
    }
    a:active,
    a:link,
    a:visited {
        color: white;
        text-decoration: none;
    }
    a:hover {
        opacity: 0.7;
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

const NavigationMenu: React.FC = () => {
    return (
        <>
            <MenuBar />
            <NavigationMenuDiv className="hide-mobile">
                <Link to={'/portfolio'} key={'portfolio'}>
                    <div>Portfolio</div>
                </Link>
                <div>|</div>
                <Link to={'/'} key={'home'}>
                    <div>Home</div>
                </Link>
            </NavigationMenuDiv>
        </>
    );
};
const Header: React.FC = () => {
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

type AppFrameProps = {
    children: React.ReactNode;
};

const AppFrame: React.FC<AppFrameProps> = ({ children }: AppFrameProps) => {
    return (
        <div className={'container'}>
            <Header />
            {children}
            <Connect />
        </div>
    );
};

export default AppFrame;
