import * as React from 'react';
import { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Drawer from '@mui/material/Drawer';
import styled from 'styled-components';
import '../styles/app.css';
import MenuIcon from '@mui/icons-material/Menu';

const StyledLinkText = styled.p`
    font-family: 'RailwayBold', Arial, serif !important;
    letter-spacing: 5px;
    font-size: 18px;
`;
const StyledLogoImg = styled.img`
    max-width: 150px;
    padding-bottom: 10px;
    padding-top: 13px;
    background-color: black;
}
`;
const MobileHamburgerMenu = styled.div`
    visiblity: hidden;
    display: none;
    @media (max-width: 640px) {
        visibility: visible;
        display: flex;
        justify-content: end;
        align-items: center;
        align-content: center;
    }
`;

type MenuEntry = {
    value: string;
    key: string;
    menuText: string;
};
const drawerWidth = 150;

const MenuBar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    const menuList: MenuEntry[] = [
        { value: 'portfolio', key: 'portfolio-link', menuText: 'Portfolio' },
        { value: '', key: 'home-link', menuText: 'Home' },
    ];
    const MenuOptions = menuList.map((item: MenuEntry, key) => {
        const { value, menuText } = item;
        return (
            <Link to={`/${value}`} key={key}>
                <ListItem button key={value}>
                    <StyledLinkText onClick={handleDrawerToggle}>{menuText} </StyledLinkText>
                </ListItem>
            </Link>
        );
    });
    return (
        <>
            <MobileHamburgerMenu>
                <MenuIcon sx={{ color: grey[900] }} fontSize={'large'} onClick={handleDrawerToggle} />
            </MobileHamburgerMenu>
            <Drawer
                sx={{
                    width: drawerWidth,
                }}
                anchor={'right'}
                open={open}
                onClick={handleDrawerToggle}
            >
                <Box
                    sx={{ width: 150 }}
                    role="presentation"
                    onClick={handleDrawerToggle}
                    onKeyDown={handleDrawerToggle}
                >
                    <StyledLogoImg src={'./images/logo.png'} />
                    {MenuOptions}
                </Box>
            </Drawer>
        </>
    );
};

export default MenuBar;
