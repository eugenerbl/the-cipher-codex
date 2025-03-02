import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Atbash.css';
import AtbashAbout from './AtbashAbout';

function Atbash() {
   useEffect(() => { document.title = 'Atbash and Monoalphabetic Substitution Cipher - The Cipher Codex'; }, []);
   const [text, setText] = useState('');
   const [ciphertext, setCiphertext] = useState('');
   const [key, setKey] = useState('');
   const [letters, setLetters] = useState(Array(26).fill(''));
   const [errorMessage, setErrorMessage] = useState('');

   const normalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const atbashAlphabet = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';

   const handleKeyChange = (event) => {
      setKey(event.target.value);
   };

   const handleLetterChange = (event, index) => {
      const newLetters = [...letters];
      newLetters[index] = event.target.value;
      setLetters(newLetters);
   };

   const keyToTable = () => {
      const newLetters = [...letters];
      key.split('').forEach((char, index) => {
         if (index < 26) { newLetters[index] = char; }
      });
      setLetters(newLetters);
   };

   const tableToKey = () => {
      const underscores = letters.map(letter => letter === '' ? '_' : letter);
      setKey(underscores.join(''));
   };

   const handleSubmit = (value) => {
      let errors = [];
      if (!text) {
         errors.push('Plaintext input cannot be blank. ');
      }

      if (errors.length > 0) {
         setErrorMessage(errors.join(' '));
         setCiphertext('');
      } else {
         setErrorMessage('');
         setCiphertext(substitution(text, value, normalAlphabet));
      }
   };

   const normalKey = () => { setKey(normalAlphabet); };
   const atbashKey = () => { setKey(atbashAlphabet); };
   const clearKey = () => {
      setKey('');
      setLetters(Array(26).fill(''));
   };

   return (
      <>
         <div>
            <h1> Atbash and Monoalphabetic <br /> Substitution Cipher </h1>
            <textarea name="plaintext" type="text" className="textBox" value={text}
               onChange={(e) => setText(e.target.value)}
               placeholder="Enter plaintext here..." autoFocus={true} />
            {errorMessage && (<Typography color="error" style={{ marginBottom: 20 }}>{errorMessage}</Typography>)}
         </div>

         <div>
            <span className="keyBoxLabel">Key:</span>
            <input type="text" name="keyBox" className="keyBox" value={key}
               onChange={handleKeyChange} placeholder="Enter 26-character key..."
            />
            <Button className="button" variant="contained" color="blue"
               onClick={() => handleSubmit(key)}>Encrypt/Decrypt with Key
            </Button>
            <Button className="button" variant="contained" color="brown"
               onClick={keyToTable}> Copy Key Value to Table
            </Button>

            <div className="tableDiv">
               <table className="alphabetTable">
                  <thead>
                     <tr>
                        {normalAlphabet.split('').map((letter, index) => (<th key={index}>{letter}</th>))}
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        {normalAlphabet.split('').map((letter, index) => (
                           <td key={index}>
                              <input id={letter} type="text" maxLength="1" value={letters[index]}
                                 onChange={(e) => handleLetterChange(e, index)} className="smallInput"
                              />
                           </td>
                        ))}
                     </tr>
                  </tbody>
               </table>
            </div>
            <div>
               <Button className="button" variant="contained" color="blue"
                  onClick={() => handleSubmit(letters)}>Encrypt/Decrypt with Table
               </Button>
               <Button className="button" variant="contained" color="brown"
                  onClick={tableToKey}> Copy Table Values to Key
               </Button>
            </div>


            <Button className="button" variant="contained" color="green"
               style={{ marginTop: 30 }} onClick={atbashKey}> Atbash Key (A=Z)
            </Button>
            <Button className="button" variant="contained" color="green"
               style={{ marginTop: 30 }} onClick={normalKey}> Normal Key (A=A)
            </Button>
            <Button className="button" variant="contained" color="brown"
               style={{ marginTop: 30 }} onClick={clearKey}> Clear Key and Table
            </Button>
         </div>

         <div>
            <textarea name="ciphertext" type="text" className="textBox"
               value={ciphertext} placeholder="Ciphertext appears here..."
               readOnly />
         </div>
         <div style={{ width: '80%', textAlign: 'initial', display: 'inline-block' }}><AtbashAbout /></div>

      </>
   )
}

// Substitute all letters in the text using the key value; alphabet refers to the normal alphabet A-Z
function substitution(text, key, alphabet) {
   let ciphertext = '';

   text.toUpperCase().split('').forEach(char => {
      // Determine which letter the char is referring to
      const index = alphabet.indexOf(char);
      if (index !== -1) {
         // Use the letter in the key that the alphabet letter corresponds to
         // If the alphabet letter does not have a mapped char in the key, replace with an underscore _ 
         key[index] ? ciphertext += key[index] : ciphertext += "_";
      }
      else { ciphertext += char; }  // do not convert non-alphabetic chars
   });

   return ciphertext;
};

export default Atbash;