import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import './A1Z26.css';
import A1Z26About from './A1Z26About';

function A1Z26() {
   useEffect(() => { document.title = 'A1Z26 Cipher - The Cipher Codex'; }, []);
   const [text, setText] = useState('');
   const [alphabet, setAlphabet] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
   const [ciphertext, setCiphertext] = useState('');
   const [separator, setSeparator] = useState('-');
   const [spaces, setSpaces] = useState(false);

   const normalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

   const handleTextChange = (event) => {
      setText(event.target.value);
   };

   const handleAlphabetChange = (event) => {
      setAlphabet(event.target.value);
   };
   
   const handleSeparatorChange = (event) => {
      setSeparator(event.target.value);
   };

   const handleSpaces = (event) => {
      setSpaces(event.target.checked);
   }

   const handleEncryption = () => {
      setCiphertext(encrypt(text, alphabet, separator, spaces));
   }

   const handleDecryption = () => {
      setCiphertext(decrypt(text, alphabet, separator));
   }

   const resetAlphabet = () => {
      setAlphabet(normalAlphabet);
   }

   return (
      <>
         <div>
            <h1> A1Z26 Cipher </h1>
            <textarea type="text" value={text} className="textBox" onChange={handleTextChange}
               placeholder="Enter plaintext here..." autoFocus={true} />
         </div>
         <div>
            <span className="keyBoxLabel">Alphabet:</span>
            <input type="text" value={alphabet} className="keyBox" onChange={handleAlphabetChange}
               placeholder="Enter alphabet..." name="alphabetBox" />
            <Button className="button" variant="contained" color="secondary" onClick={resetAlphabet}>
               Reset Alphabet (A-Z)
            </Button>
         </div>
         <div style={{ margin: "10px 0px" }}>
            <span className="keyBoxLabel">Separator between numbers:</span>
            <input type="text" value={separator} className="keyBox separatorBox"
               onChange={handleSeparatorChange} name="separatorBox" />
            <label>
               <span className="keyBoxLabel">Include Spaces when Encrypting</span>
               <input type="checkbox" defaultChecked={false} className="spaces" onChange={handleSpaces} />
            </label>
         </div>
         <Button className="button" variant="contained" color="primary" onClick={handleEncryption}>
            Encrypt
         </Button>
         <Button className="button" variant="contained" color="primary" onClick={handleDecryption}>
            Decrypt
         </Button>

         <div>
            <textarea value={ciphertext} className="textBox"
               placeholder="Ciphertext appears here..." readOnly />
         </div>
         <div style={{ width: '80%', textAlign: 'initial', display: 'inline-block' }}><A1Z26About /></div>
      </>
   );
}

function encrypt(text, alphabet, separator, spaces) {
   // If spaces are ignored, remove white space from text
   let spaceOption = !spaces ? text.replace(/\s+/g, '') : text;

   return spaceOption.toUpperCase().split('').map(char => {

      // Find index of corresponding character from alphabet
      // All other characters will not be changed
      let index = alphabet.indexOf(char);
      return index !== -1 ? index + 1 : char;

   }).join(separator);
}

function decrypt(text, alphabet, separator) {
   // Replace all white space with a single space between two separators so spaces are kept
   let spaceless = text.replace(/\s+/g, separator + ' ' + separator);

   return spaceless.split(separator).map(number => {

      // Find alphabetic character in the 'number' position
      let index = parseInt(number);
      return (!isNaN(index) && index >= 1 && index <= 26) ? alphabet[index - 1] : number;

   }).join('');
}

export default A1Z26;