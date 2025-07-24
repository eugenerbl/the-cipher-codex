import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
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
         
         <Box sx={{ flexGrow: 1 }}>
            <Grid container direction="row" sx={{ justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
               <Grid>
                  <label htmlFor="alphabet" className="keyBoxLabel">Alphabet:</label>
                  <input type="text" id="alphabet" value={alphabet} className="keyBox" 
                     onChange={handleAlphabetChange} placeholder="Enter alphabet..." name="alphabetBox" />
               </Grid>
            </Grid>

            <Grid container direction="row" spacing={{ xs: 2, sm: 2, md: 4 }} sx={{ justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
               <Grid>
                  <label htmlFor="separator" className="keyBoxLabel">Separator between numbers:</label>
                  <input type="text" id="separator" value={separator} className="keyBox separatorBox"
                     onChange={handleSeparatorChange} name="separatorBox" />
               </Grid>
               <Grid>
                  <label htmlFor="spaces" className="keyBoxLabel">Include Spaces when Encrypting</label>
                  <input type="checkbox" id="spaces" defaultChecked={false} className="checkBox"
                     onChange={handleSpaces} name="includeSpaces"/>
               </Grid>
            </Grid>

            <Grid container direction="row" sx={{ justifyContent: "center", alignItems: "center" }}>
               <Grid>
                  <Button className="button" variant="contained" disableElevation color="blue" onClick={handleEncryption}>Encrypt</Button>
               </Grid>
               <Grid>
                  <Button className="button" variant="contained" disableElevation color="blue" onClick={handleDecryption}>Decrypt</Button>
               </Grid>
               <Grid>
                  <Button className="button" variant="contained" disableElevation color="red" onClick={resetAlphabet}>Reset Alphabet (A-Z)</Button>
               </Grid>
            </Grid>
         </Box>

         <div>
            <textarea value={ciphertext} className="textBox"
               placeholder="Ciphertext appears here..." readOnly />
         </div>
         <div className="cipherInfo"><A1Z26About /></div>
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