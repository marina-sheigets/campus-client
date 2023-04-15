import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@mui/material';
import React, { type ChangeEvent } from 'react';

interface ForgetPasswordDialogProps {
    isOpen: boolean;
    handleClose: () => void;
    handleProceed: () => void;
    email: string;
    changeEmail: (value: ChangeEvent<HTMLInputElement>) => void;
}
function ForgetPasswordDialog({
    isOpen,
    email,
    changeEmail,
    handleClose,
    handleProceed,
}: ForgetPasswordDialogProps) {
    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Restore password</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To restore password, you should enter your email. Then you
                    will get the email with new password.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={changeEmail}
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button variant="contained" onClick={handleProceed}>
                    Restore
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ForgetPasswordDialog;
