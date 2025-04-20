import { createTheme } from '@mui/material/styles';

export default createTheme({
   palette: {
      green: {
         main: '#228631',
         dark: '#1A5D26',
         contrastText: '#FFFFFF'
      },
      blue: {
         main: '#4F4CC4',
         dark: '#454195',
         contrastText: '#FFFFFF',
      },
      brown: {
         main: '#795548',
         dark: '#553D34',
         contrastText: '#FFFFFF',
      },
      red: {
         main: '#D12727',
         dark: '#B22222',
         contrastText: '#FFFFFF',
      },
      contrastThreshold: 4.5
   },
});