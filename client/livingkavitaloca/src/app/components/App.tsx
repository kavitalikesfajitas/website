import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import '../../styles/app.css';


const FlexDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: white;
`;

const App: React.FC = () => {
    return (
        <div className={'container'}>
          <div className={'parent-header-div'}>
            <FlexDiv>
              <div className={'top-caption-header'}>
                “LIFE IS EITHER A DARING ADVENTURE OR NOTHING AT ALL.” - HELEN
                KELLER
              </div>
            </FlexDiv>
            <div className={'header-div'}>
              <div className={'test'}>
                <div className={'navigation-header'}>
                  KAVITA CHAUDHRY

                </div>
              </div>
            </div>
          </div>
        </div>)
};

export default App;