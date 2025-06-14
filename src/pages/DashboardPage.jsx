import { styled } from '@mui/material/styles';
import { useAuth } from "../contexts/AuthContext";
import { Box, Button, Container, Dialog } from '@mui/material';
import LogoutButton from '../components/LogoutButton';

//components
const StyledContainer = styled(Container)(() => ({
    height: '100svh',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(45deg, #61d8de 0%, #e839f6 100%)',
}))

const StyledBox = styled(Box)(() => ({
    width: '90%',
    height: '90%',
    padding: '3rem',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 12px 4px rgba(0,0,0,.1)'
}))


export const DashboardPage = () => {
    const { user } = useAuth();

    return (
        <StyledContainer>
            <StyledBox >
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <h1>Bem-Vindo, <strong>{user?.fullName}</strong>!</h1>
                    <LogoutButton />
                </Box>
            </StyledBox>
        </StyledContainer>
    );
};

export default DashboardPage;