import * as React from 'react';
import styled from 'styled-components';

export const DividerDivContainer = styled.div`
    text-align: -webkit-center;
    margin: 10px;
`;

type DividerDivProps = {
    color?: string;
    maxWidth?: string;
};

export const DividerDiv = styled.div<DividerDivProps>`
    color: ${(props) => (props.color ? props.color : 'white')};
    background-color: ${(props) => (props.color ? props.color : 'white')};
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
    height: 6px;
`;

const SnazzyDivider: React.FC = () => (
    <DividerDivContainer>
        <DividerDiv color={'#ffaaf5'} />
        <DividerDiv color={'#28ff3d'} maxWidth={'90%'} />
        <DividerDiv maxWidth={'80%'} />
    </DividerDivContainer>
);

export default SnazzyDivider;
