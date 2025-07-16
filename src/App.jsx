import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './App.css';
import { Caesar, Vigenere, Atbash, A1Z26, Base64, Playfair } from './components/index';

function App() {
  return (
    <>
      <Header />
      <main style={{minHeight: '100vh'}}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a1z26" element={<A1Z26 />} />
            <Route path="/atbash" element={<Atbash />} />
            <Route path="/base64" element={<Base64 />} />
            <Route path="/caesar" element={<Caesar />} />
            <Route path="/playfair" element={<Playfair />} />
            <Route path="/vigenere" element={<Vigenere />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </ThemeProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;