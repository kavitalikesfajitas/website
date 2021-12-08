import * as React from 'react';
import { Button, DialogActions, Dialog, useMediaQuery, useTheme, DialogContent, DialogTitle } from '@mui/material';

type ModalPopupProps = {
    open: boolean;
    title: string;
    handleClose: () => void;
    children?: React.ReactNode;
};

const ModalPopup = ({ open, title, handleClose, children }: ModalPopupProps) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
            <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};
export default ModalPopup;
