import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { UserProvider } from './contexts/UserContext.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import AppRouters from './App.jsx'
import './index.css'
import '@fontsource/roboto'; 

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <CssBaseline />
        <BrowserRouter>
          <AppRouters />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  </StrictMode>,
)


