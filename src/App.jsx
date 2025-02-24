import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound';
import { Caesar, Vigenere, Atbash, A1Z26, Base64 } from './components/index';

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caesar" element={<Caesar />} />
          <Route path="/atbash" element={<Atbash />} />
          <Route path="/vigènere" element={<Vigenere />} />
          <Route path="/a1z26" element={<A1Z26 />} />
          <Route path="/base64" element={<Base64 />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;