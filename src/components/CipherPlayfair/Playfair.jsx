import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import { encrypt, decrypt } from './playfairCipher';
import './Playfair.css';
import PlayfairAbout from './PlayfairAbout';


function Playfair() {
   useEffect(() => { document.title = 'Playfair Cipher - The Cipher Codex'; }, []);
   const [text, setText] = useState('');
   const [keyword, setKeyword] = useState('');
   const [alphabet, setAlphabet] = useState('ABCDEFGHIKLMNOPQRSTUVWXYZ');  // J is omitted

   const [omittedLetter, setOmittedLetter] = useState('J');
   const [repLetter, setRepLetter] = useState('I');
   const [padLetter, setPadLetter] = useState('X');

   const [ciphertext, setCiphertext] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

   const normalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

   const resetKeyword = () => {
      setKeyword('');
      // omitted letter doesn't change, so must keep existing letter
      setAlphabet(completeKeyword('', omittedLetter, normalAlphabet));
   }

   const resetLetters = () => {
      setOmittedLetter('J');
      setRepLetter('I');
      setPadLetter('X');
      // keyword doesn't change, so must keep keyword in front of alphabet
      setAlphabet(completeKeyword(keyword, 'J', 'ABCDEFGHIKLMNOPQRSTUVWXYZ'));
   }

   const handleKeywordChange = (event) => {
      setKeyword(event.target.value);
      setAlphabet(completeKeyword(event.target.value, omittedLetter, normalAlphabet));
   }

   const handleOmitLtrChange = (event) => {
      setOmittedLetter(event.target.value);
      setAlphabet(completeKeyword(keyword, event.target.value, normalAlphabet));
   }

   const handleEncryption = () => {
      let [notes, encryptedText] = encrypt(text, alphabet, omittedLetter, repLetter, padLetter);

      setErrorMessage(notes.join('\n'));
      setCiphertext(encryptedText);
   };

   const handleDecryption = () => {
      let [notes, decryptedText] = decrypt(text, alphabet, omittedLetter, repLetter, padLetter);

      setErrorMessage(notes.join('\n'));
      setCiphertext(decryptedText);
   };

   return (
      <>
         <div>
            <h1> Playfair Cipher </h1>
            <textarea type="text" value={text} className="textBox"
               onChange={(event) => {setText(event.target.value);}}
               placeholder="Enter plaintext here..." autoFocus={true} 
            />
         </div>
         
         <Box sx={{ flexGrow: 1 }}>
            <Grid container direction="row" sx={{ justifyContent: "center", margin: "0px 10vw 20px" }}>
               <Grid size={{ xs: 12, sm: 8, lg: 6 }} sx={{ placeItems: "center"}}>
                  <Stack>
                     <label htmlFor="keyword" className="keyBoxLabel">Keyword:</label>
                     <input type="text" id="keyword" value={keyword} className="keyBox" 
                        onChange={handleKeywordChange} 
                        placeholder="Enter keyword..." name="keywordBox"
                     />
                     <label htmlFor="completeKeyword" className="keyBoxLabel">Playfair Alphabet:</label>
                     <input readOnly type="text" id="completeKeyword" value={alphabet}
                        className="keyBox completeKey" name="completeKeywordBox"
                     />
                  </Stack>
               
                  <FormControl className="letterOption" sx={{ m: 1 }}>
                     <label id="omit-select" htmlFor="omtLtrSel" className="keyBoxLabel">Letter to omit:</label>
                     <Select
                        labelId="omit-select"
                        id="omtLtrSel"
                        aria-label="Choose a letter to omit"
                        className="letterOptionBox"
                        value={omittedLetter}
                        onChange={handleOmitLtrChange}
                     >
                        {normalAlphabet.split('').map((letter) => (
                           <MenuItem key={letter} value={letter} disabled={letter === repLetter || letter === padLetter}> 
                              {letter}
                           </MenuItem>
                        ))}
                     </Select>
                  </FormControl>
                  <FormControl className="letterOption" sx={{ m: 1 }}>
                     <label id="replace-select" htmlFor="repLtrSel" className="keyBoxLabel">Replacement letter:</label>
                     <Select
                        labelId="replace-select"
                        id="repLtrSel"
                        aria-label="Choose a letter to replace omitted letters"
                        value={repLetter}
                        className="letterOptionBox"
                        onChange={(event) => {setRepLetter(event.target.value);}}
                     >
                        {normalAlphabet.split('').map((letter) => (
                           <MenuItem key={letter} value={letter} disabled={letter === omittedLetter}> {letter} </MenuItem>
                        ))}
                     </Select>
                  </FormControl>
                  <FormControl className="letterOption" sx={{ m: 1 }}>
                     <label id="padding-select" htmlFor="padLtrSel" className="keyBoxLabel">Padding letter:</label>
                     <Select
                        labelId="padding-select"
                        id="padLtrSel"
                        value={padLetter}
                        className="letterOptionBox"
                        onChange={(event) => {setPadLetter(event.target.value);}}
                     >
                        {normalAlphabet.split('').map((letter) => (
                           <MenuItem key={letter} value={letter} disabled={letter === omittedLetter}> {letter} </MenuItem>
                        ))}
                     </Select>
                  </FormControl>
               </Grid>
            
               <Grid size={{ xs: 12, sm: 4, lg: 4 }}>
                  <label className="keyBoxLabel">Playfair Grid:</label>
                  <LetterTable inputString={alphabet} />
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
                  <Button className="button" variant="contained" disableElevation color="red" onClick={resetKeyword}>Clear Keyword</Button>
               </Grid>
               <Grid>
                  <Button className="button" variant="contained" disableElevation color="brown" onClick={resetLetters}>Reset Letter Options</Button>
               </Grid>
            </Grid>
         </Box>

         <div>
            {errorMessage && (<Typography color="error" style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>{errorMessage}</Typography>)}
            <textarea value={ciphertext} className="textBox"
               placeholder="Ciphertext appears here..." readOnly />
         </div>
         <div className="cipherInfo"><PlayfairAbout /></div>
      </>
   );
}

// Translates a keyword into a 25-character cipher key
function completeKeyword(keyword, omitLetter, alphabet) {

   // remove omitted letter from keyword, if applicable
   if (keyword.toUpperCase().includes(omitLetter.toUpperCase())) {
      keyword = keyword.toUpperCase().replaceAll(omitLetter, "");
   }

   // convert keyword to uppercase and remove non-letters
   keyword = keyword.toUpperCase().replace(/[^A-Z]/g, "");

   // create new Set to remove duplicate letters; spread (...) converts to array
   let usedChars = [...new Set(keyword)];

   // get remaining characters by filtering out omitted letter and letters already in keyword
   let remainingChars = alphabet.split("").filter(letter => !usedChars.includes(letter) && letter !== omitLetter);

   return usedChars.concat(remainingChars).join("");
}

// Builds a 5x5 Playfair Grid
const LetterTable = ({ inputString }) => {
   const gridSize = 5;

   // Convert string into a 2D array
   const tableData = [];
   for (let i = 0; i < gridSize; i++) {
      const row = inputString.slice(i * gridSize, (i + 1) * gridSize).split('');
      tableData.push(row);
   }

   return (
      <table className="grid" style={{ borderCollapse: 'collapse' }}>
         <tbody>
            {tableData.map((row, rowIndex) => (
               <tr key={rowIndex}>
                  {row.map((char, colIndex) => (
                     <td className="gridLetter" key={colIndex}>
                        {char}
                     </td>
                  ))}
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default Playfair;