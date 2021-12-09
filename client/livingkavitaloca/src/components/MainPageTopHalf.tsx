import * as React from 'react';
import styled from 'styled-components';

const MainText = styled.div`
    font-family: 'Lobster', cursive;
    color: white;
    justify-content: center;
    display: flex;

    font-size: calc(90px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
    @media (max-width: 670px) {
        font-size: calc(50px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
        flex-direction: column;
        justify-content: flex-start;
    }
`;

const ImageDivContainer = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 670px) {
        justify-content: flex-end;
    }
`;

const StyledImg = styled.img`
    border-radius: 50px;
    max-width: 65%;
`;

type ColorChangeCssSpanProps = {
    color: string;
    leftIndent: string;
};
const ColorChangeCssSpan = styled.span<ColorChangeCssSpanProps>`
    color: ${(props) => (props.color ? props.color : 'white')};
    @media (max-width: 670px) {
        margin-left: ${(props) => (props.leftIndent ? props.leftIndent : '5px')};
    }
`;
const Main: React.FC = () => {
    return (
        <>
            <MainText>
                <ColorChangeCssSpan> Living </ColorChangeCssSpan>
                <ColorChangeCssSpan color={'#28ff3d'} leftIndent={'10%'}>
                    Kavita
                </ColorChangeCssSpan>
                <ColorChangeCssSpan leftIndent={'20%'} color="#ffaaf5">
                    Loca
                </ColorChangeCssSpan>
            </MainText>
            <ImageDivContainer>
                <StyledImg src={'./images/DSC00684.jpeg'} />
            </ImageDivContainer>
        </>
    );
};
export default Main;
