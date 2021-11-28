import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import styled from 'styled-components';
import { useTheme } from '@mui/material';
import '../../styles/app.css';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

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
const MenuBar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const theme = useTheme();

    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    // const MenuOptions = {}.map((item, key) => {
    //     const { value, menuText, icon } = item;
    //     return (
    //         <Link to={`/${value}`} key={key}>
    //             <ListItem button key={value}>
    //                 <ListItemIcon>{icon()}</ListItemIcon>
    //                 <ListItemText
    //                     className={classes.listItem}
    //                     primary={menuText}
    //                     onClick={() => {
    //                         handleDrawerClose();
    //                     }}
    //                 />
    //             </ListItem>
    //         </Link>
    //     );
    // });
    return (
        <>
            <MobileHamburgerMenu>
                <img src={'../../images/icons/hamburger.svg'} onClick={handleDrawerToggle} />
            </MobileHamburgerMenu>
            <Drawer anchor={'left'} open={open}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={handleDrawerToggle}
                    onKeyDown={handleDrawerToggle}
                >
                    {/* <ChevronRight /> */}
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default MenuBar;
