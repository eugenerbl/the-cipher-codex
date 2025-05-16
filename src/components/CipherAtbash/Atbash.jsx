import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
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

   const transformText = (letters) => {
      if (!text) {
         setErrorMessage('Plaintext input cannot be blank.');
         setCiphertext('');
      }
      else {
         setErrorMessage('');
         setCiphertext(substitution(text, letters, normalAlphabet));
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

         <Box sx={{ flexGrow: 1 }}>
            <Grid container direction="row" sx={{ justifyContent: "center", alignItems: "center" }}>
               <Grid>
                  <label htmlFor="key" className="keyBoxLabel">Key:</label>
                  <input type="text" id="key" name="keyBox" className="keyBox" value={key}
                     onChange={handleKeyChange} placeholder="Enter 26-character key..." />
               </Grid>
               <Grid>
                  <Button className="button" variant="contained" disableElevation color="blue"
                     onClick={() => transformText(key)}>Encrypt/Decrypt with Key
                  </Button>
               </Grid>
               <Grid>
                  <Button className="button" variant="contained" disableElevation color="brown"
                     onClick={keyToTable}> Copy Key Value to Table
                  </Button>
               </Grid>
            </Grid>
         </Box>

         <div className="tableDiv">
            <table className="alphabetTable">
               <thead>
                  <tr>
                     {normalAlphabet.split('').map((letter, index) => (
                        <th key={index}>
                           <label htmlFor={letter}>{letter}</label>
                        </th>
                     ))}
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

         <Box sx={{ flexGrow: 1 }}>
            <Grid container direction="row" sx={{ justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
               <Grid>
                  <Button className="button" variant="contained" disableElevation color="blue"
                     onClick={() => transformText(letters)}>Encrypt/Decrypt with Table
                  </Button>
               </Grid>
               <Grid>
                  <Button className="button" variant="contained" disableElevation color="brown"
                     onClick={tableToKey}> Copy Table Values to Key
                  </Button>
               </Grid>
            </Grid>
            <Grid container direction="row" sx={{ justifyContent: "center", alignItems: "center" }}>
               <Grid>
                  <Button className="button" variant="contained" disableElevation color="green"
                     onClick={atbashKey}> Atbash Key (A=Z)
                  </Button>
               </Grid>
               <Grid>
                  <Button className="button" variant="contained" disableElevation color="green"
                     onClick={normalKey}> Normal Key (A=A)
                  </Button>
               </Grid>
               <Grid>
                  <Button className="button" variant="contained" disableElevation color="red"
                     onClick={clearKey}> Clear Key and Table
                  </Button>
               </Grid>
            </Grid>
         </Box>

         <div>
            <textarea name="ciphertext" type="text" className="textBox"
               value={ciphertext} placeholder="Ciphertext appears here..."
               readOnly />
         </div>
         <div className="cipherInfo"><AtbashAbout /></div>
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