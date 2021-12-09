import * as React from 'react';
import styled from 'styled-components';
import Main from './MainPageTopHalf';
import SnazzyDivider from './SnazzyDivider';

const MainHeaderText = styled.div`
    font-family: 'Lobster', cursive;
    justify-content: center;
    display: flex;
    color: white;
    font-size: calc(50px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
    @media (max-width: 670px) {
        font-size: calc(50px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
        flex-direction: column;
    }
`;

const ImageDivContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
`;

const FlexDivContainer = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15%;
    flex-direction: column;
    @media (max-width: 670px) {
        margin-left: 20px;
        margin-top: 10%;
        margin-right: 20px;
        font-size: 13px;
    }
    @media (max-width: 1070px) {
        margin-top: 20%;
    }
    @media (max-width: 960px) {
        margin-top: 10%;
    }
    align-items: baseline;
`;

const AboutMeContentDiv = styled.div`
    display: flex;
    flex: 1;
    background: #fff6ed;
    padding: 38px;
    border-radius: 40px;
    font-weight: 200px;
    font-family: 'ArchivoLight', sans-serif;
`;

const MainLanding = () => {
    return (
        <div className="display-flex-column">
            <Main />
            <FlexDivContainer>
                <ImageDivContainer>
                    <MainHeaderText>About Me</MainHeaderText>

                    <SnazzyDivider />
                </ImageDivContainer>

                <AboutMeContentDiv>
                    <div>
                        <p className="header-font-caps font-size-sm-20">HI I'M KAVITA!</p>
                        I'm a Software Engineer located in New York. I grew up in Baltimore, MD. I went to Lehigh
                        University for Computer Engineering. I would like to consider myself a very passionate
                        individual and I believe that everything you do you should do it with your whole heart. I've
                        also got some awesome hobbies, if I may say so. I'm an huge fitness lover, an avid snowboarder,
                        and a dedicated crossfitter. I love to travel. I just finished my second sprint triathlon and I
                        like run half-marathons, 10ks, you name it. I believe that everything is an adventure, if you
                        let it be. I like to constantly test the limits because I believe almost nothing is impossible.
                    </div>
                </AboutMeContentDiv>
            </FlexDivContainer>
        </div>
    );
};

export default MainLanding;
