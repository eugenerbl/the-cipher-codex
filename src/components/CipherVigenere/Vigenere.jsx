import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Vigenere.css';
import VigenereAbout from './VigenereAbout';

function Vigenere() {
   useEffect(() => { document.title = 'Vigenère Cipher - The Cipher Codex'; }, []);
   const [text, setText] = useState('');
   const [key, setKey] = useState('');
   const [ciphertext, setCiphertext] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

   const handleChange = (event) => {
      setText(event.target.value);
   };

   const handleKeyChange = (event) => {
      setKey(event.target.value);
   };

   const handleSubmit = (mode) => {
      let errors = [];
      if (!text) { errors.push('Plaintext input cannot be blank. '); }
      if (key.length < 2) { errors.push('Key value must contain at least 2 characters.'); }
      if (!hasOnlyLetters(key)) { errors.push('Key value must not contain numbers or special characters.'); }
      
      if (errors.length > 0) {
         setErrorMessage(errors.join(' '));
         setCiphertext('');
      } else {
         setErrorMessage('');
         // mode: 1 = encryption, 2 = decryption
         mode === 1 ? setCiphertext(encrypt(text, key)) : setCiphertext(decrypt(text, key));
      }
   };

   return (
      <>
         <div>
            <h1> Vigenère Cipher </h1>
            <textarea type="text" value={text} className="textBox" onChange={handleChange}
               placeholder="Enter plaintext here..." autoFocus={true} />
            {errorMessage && (<Typography color="error" style={{ marginBottom: 20 }}>{errorMessage}</Typography>)}
         </div>
         <div>
            <span className="keyBoxLabel">Key:</span>
            <input type="text" value={key} className="keyBox" onChange={handleKeyChange}
               placeholder="Enter keyword..." name="keyBox" />
            <Button className="button" variant="contained" color="blue" onClick={() => handleSubmit(1)}>
               Encrypt
            </Button>
            <Button className="button" variant="contained" color="blue" onClick={() => handleSubmit(0)}>
               Decrypt
            </Button>
         </div>
         <div>
            <textarea value={ciphertext} className="textBox"
               placeholder="Ciphertext appears here..." readOnly />
         </div>
         <div className="cipherInfo"><VigenereAbout/></div>
      </>
   );
};

function isLetter(str) {
   return str.length === 1 && str.match(/[a-zA-Z]/i);
}

function isUpperCase(str) {
   return str === str.toUpperCase() && str !== str.toLowerCase();
}

function hasOnlyLetters(str) {
   return /^[a-zA-Z]+$/.test(str);
 }

function encrypt(message, key) {
   let result = '';

   for (let i = 0, j = 0; i < message.length; i++) {
      const c = message.charAt(i);
      if (isLetter(c)) {
         if (isUpperCase(c)) {
            result += String.fromCharCode((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65); // A: 65
         } else {
            result += String.fromCharCode((c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26 + 97); // a: 97
         }
      } else {
         result += c;
      }
      j = ++j % key.length;
   }
   return result;
}


function decrypt(message, key) {
   let result = '';

   for (let i = 0, j = 0; i < message.length; i++) {
      const c = message.charAt(i);
      if (isLetter(c)) {
         if (isUpperCase(c)) {
            result += String.fromCharCode(90 - (25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26);
         } else {
            result += String.fromCharCode(122 - (25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26);
         }
      } else {
         result += c;
      }
      j = ++j % key.length;
   }
   return result;
}

export default Vigenere;