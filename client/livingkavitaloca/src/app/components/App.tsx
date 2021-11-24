import React from 'react';
import styled from 'styled-components';
import '../../styles/app.css';
import AppFrame from './AppFrame';


const FlexDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: white;
`;

const NavigationMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  color: white;
  font-family: RailwayBold, Arial, serif;
  font-size: calc(17px + (36 - 24) * ((100vw - 300px) / (1600 - 300)))
`


const MainText = styled.div`
  font-family: 'Lobster', cursive;
  color: white;
  justify-content: center;
  display: flex;
  font-size: calc(90px + (36 - 24) * ((100vw - 300px) / (1600 - 300)))
`

const App: React.FC = () => {
  return (
   <AppFrame>
<MainText>
  Living Kavita Loca
  </MainText>
     </AppFrame>
  );
};

export default App;