import React from 'react';
import styled from 'styled-components';
import '../../styles/app.css';

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

const MobileHamburgerMenu = styled.div`
    visiblity: hidden;
    display: none;
    @media (max-width: 640px) {
        visibility: visible;
        display: block;
    }
`;
const NavigationMenu = () => {
    return (
        <>
            <MobileHamburgerMenu>
                <img src={'../../images/icons/hamburger.svg'} />
            </MobileHamburgerMenu>
            <NavigationMenuDiv className="hide-mobile">
                <div>Adventures</div>
                <div>|</div>
                <div>About Me</div>
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
            <div>{children}</div>
        </div>
    );
};

export default AppFrame;
