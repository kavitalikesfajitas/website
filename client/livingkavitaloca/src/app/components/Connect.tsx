import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import { grey } from '@mui/material/colors';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const StyledLetsConnect = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    color: white;
    margin: 21px 10px;
    font-family: 'Archivo', sans-serif;
`;

const Connect: React.FC = () => {
    return (
        <StyledLetsConnect>
            <div className="display-flex-center">Let's connect!</div>
            <div className="display-flex-center">
                <a
                    href={'https://www.instagram.com/kavitasutra/'}
                    target={'_blank'}
                    rel="noreferrer"
                    aria-label="Instagram"
                >
                    <InstagramIcon sx={{ color: grey[50] }} />
                </a>
                <a
                    href={'https://www.linkedin.com/in/kavita-chaudhry/'}
                    target={'_blank'}
                    rel="noreferrer"
                    aria-label="LinkedIn"
                >
                    <LinkedInIcon sx={{ color: grey[50] }} />
                </a>
                <a
                    href={'https://github.com/kavitalikesfajitas'}
                    target={'_blank'}
                    rel="noreferrer"
                    aria-label="GitHub"
                >
                    <GitHubIcon sx={{ color: grey[50] }} />
                </a>
            </div>
        </StyledLetsConnect>
    );
};

export default Connect;
