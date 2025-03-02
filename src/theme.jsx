import { createTheme } from '@mui/material/styles';

export default createTheme({
   palette: {
      green: {
         main: '#187D30',
         contrastText: '#FFFFFF'
      },
      blue: {
         main: '#4F4CAF',
         contrastText: '#FFFFFF',
      },
      brown: {
         main: '#795548',
         contrastText: '#FFFFFF',
      },
      contrastThreshold: 4.5
   },
});