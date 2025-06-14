import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export const LogoutButton = () => {
    const { logout } = useAuth();
    const [openDialog, setOpenDialog]= useState(false);

    const handleLogout = () => {
        logout();
    }
    
    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <Button 
                variant="outlined" 
                size="small" 
                color="error" 
                onClick={handleClickOpen}
            >
                Logout
            </Button>

            <Dialog open={openDialog} onClose={handleClose} >
                <DialogTitle>
                    Confirmação
                </DialogTitle>
                <DialogContent>
                    Tem certeza que deseja sair da aplicação?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" size="small">
                        Cancelar
                    </Button>
                    <Button onClick={handleLogout} color="secondary" variant="contained" size="small">
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default LogoutButton;