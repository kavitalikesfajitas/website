import React from 'react';
import styled from 'styled-components';

const MainText = styled.div`
    font-family: 'Lobster', cursive;
    color: white;
    justify-content: center;
    display: flex;
    margin-left: 20px;
    font-size: calc(90px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
    @media (max-width: 670px) {
        font-size: calc(40px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
    }
`;

const ImageDivContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledImg = styled.img`
    max-width: 75%;
`;

const Main = () => {
    return (
        <>
        <MainText>Living Kavita Loca</MainText>
        <ImageDivContainer>
            <StyledImg src={'../../images/HAD_3985.jpg'} />
        </ImageDivContainer>
        </>
    )
}
export default Main;