import {
    Box,
    Button,
    Container,
    Divider,
    InputAdornment,
    Link,
    TextField,
    Typography,
    Snackbar,
    Alert,
} from "@mui/material"
import { Facebook, GitHub, Google, LockOutline, LoginOutlined, PersonOutline } from "@mui/icons-material"
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { mockUsers } from "../db/mockUsers.js";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext.jsx";


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
    width: '100%',
    maxWidth: '428px',
    padding: '3rem',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 12px 4px rgba(0,0,0,.1)'
}))

const StyledButton = styled(Button)(() => ({
    width: '80%',
    margin: '3em auto',
    background: 'linear-gradient(to right, #2fd7e4, #c143f8)',
    color: '#fff',
    padding: '0.75rem',
    borderRadius: '20px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: '.8',
    transition: 'all .3s ease-in-out',

    '&:hover': {
        opacity: '1',
        boxShadow: '0px 0px 8px rgba(0,0,0,.1)',
    },
}));

const LoginPage = () => {
    const [userTextField, setUserTextField] = useState('');
    const [passwordTextField, setPasswordTextField] = useState('');
    const [openError, setOpenError] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault();
        const authenticatedUser = mockUsers.find(
            (obj) => obj.username === userTextField && obj.password === passwordTextField
        );

        if (authenticatedUser) {
            login(authenticatedUser);
            navigate('/dashboard');
            return;
        }

        //invalid login
        setUserTextField('');
        setPasswordTextField('');
        setOpenError(true);
    }

    return (
        <StyledContainer maxWidth={false}>
            <StyledBox>
                <Typography variant="h4" sx={{mb: '1em'}}>
                    Sign in
                </Typography>
                <form action="#" onSubmit={handleSubmit}>
                    {/* inputs - username & password */}
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                        <TextField
                            value={userTextField}
                            type="text"
                            label="User"
                            placeholder="Type your username"
                            variant="standard"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment sx={{mr: '.5em'}}>
                                            <PersonOutline />
                                        </InputAdornment>
                                    )
                                }
                            }}
                            required
                            onChange={(event) => setUserTextField(event.target.value)}
                        />
                        <TextField
                            value={passwordTextField}
                            type="password"
                            label="Password"
                            placeholder="Type your password"
                            variant="standard"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment sx={{mr: '.5em'}}>
                                            <LockOutline />
                                        </InputAdornment>
                                    )
                                }
                            }}
                            required
                            onChange={(event) => setPasswordTextField(event.target.value)}
                        />
                    </Box>
                    {/* forgot password link */}
                    <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: '.5em'}}>
                        <Link href="#" underline="hover" color="textSecondary" variant="body2">
                            Forgot password?
                        </Link>
                    </Box>
                    {/* submit form button */}
                    <StyledButton type="submit">
                        Login
                    </StyledButton>
                </form>

                {/* snackbar */}
                <Snackbar 
                    open={openError} 
                    autoHideDuration={4000} 
                    onClose={() => setOpenError(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                <Alert onClose={() => setOpenError(false)} severity="error" variant="standard">
                    Invalid user and/or password!
                </Alert>
                </Snackbar>

                {/* login options */}
                <Box sx={{marginBlock: '1rem 4rem'}}> 
                    <Divider>
                        Or Sign up with
                    </Divider>
                    <Box sx={{display: 'flex', justifyContent:'center', gap: '8px', mt: '.5em'}}>
                        <Link href="https://facebook.com/" target='_blank'> 
                            <Facebook 
                                sx={{
                                    color: '#425d92',
                                    fontSize: '2.25rem',
                                }}
                            />
                        </Link>
                        <Link href="https://github.com/" target='_blank'>
                            <GitHub 
                                sx={{
                                    color: '#1b1f23',
                                    fontSize: '2.25rem',
                                }}
                            />
                        </Link>
                        <Link href="https://google.com/" target='_blank'>
                            <Google 
                                sx={{
                                    color: '#d84c3d',
                                    fontSize: '2.25rem',
                                }}
                            />
                        </Link>
                    </Box>
                </Box>

                <Typography variant="body2" color="textDisabled">
                    Don't have any account? <Link href='/signup'>Sign Up</Link>
                </Typography>
            </StyledBox>
        </StyledContainer>
    );
};

export default LoginPage;