import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </HashRouter>
  </StrictMode>,
)
