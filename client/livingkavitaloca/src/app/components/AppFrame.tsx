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
  font-size: calc(17px + (36 - 24) * ((100vw - 300px) / (1600 - 300)))
`

const AppFrame: React.FC = ({children}) => {
  return (
    <div className={'container'}>
        <Header/>
    <div>{children}</div>
    </div>
  );
};

const Header = () => {
    return (<div className={'parent-header-div'}>
    <FlexDiv>
      <div className={'top-caption-header'}>
        “LIFE IS EITHER A DARING ADVENTURE OR NOTHING AT ALL.” - HELEN
        KELLER
        
      </div>
    </FlexDiv>
    <div className={'header-div'}>
      <div className={'test'}>
        <div className={'navigation-header'}>
         <div> KAVITA CHAUDHRY</div>
        <NavigationMenu/>
        </div>
      </div>
    </div>
  </div>)
}

const NavigationMenu = () => {
    return (
    <>
    <NavigationMenuDiv className="hide-mobile">
        <div>
         Adventures</div> 
         <div>|</div>
        <div>
          About Me
        </div>
      </NavigationMenuDiv>
      </>
    )
}

export default AppFrame;