import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Base64About from './Base64About';

function Base64() {
   useEffect(() => { document.title = 'Base64 Encoding - The Cipher Codex'; }, []);
   const [text, setText] = useState('');
   const [ciphertext, setCiphertext] = useState('');
   const [encoding, setEncoding] = useState('base64');

   const handleTextChange = (event) => {
      setText(event.target.value);
   };

   const handleEncodingChange = (event) => {
      setEncoding(event.target.value);
   };

   const encode = () => {
      try {
         // btoa() encodes a string in base64 using the standard encoding
         let encodedText = btoa(text);
         if (encoding === 'urlsafe') {
            // Use URL-safe Base64 character set, which replaces + with - and / with _
            setCiphertext(encodedText.replace(/\+/g, '-').replace(/\//g, '_'));
         }
         else if (encoding === 'mime') {
            // MIME format breaks up the string into lines of 76 characters
            // Add a newline character after every 76th character
            let result = "";
            for (let i = 0; i < encodedText.length; i += 76) {
               result += encodedText.slice(i, i + 76) + "\n";
            }
            setCiphertext(result);
         }
         else {
            setCiphertext(encodedText);   // encoding === 'base64' (Standard)
         }
      } catch (error) {
         console.error("Error encoding to Base64:", error);
         setCiphertext('Error: The text to encode contains non-Latin characters.');
      }
   }

   const decode = () => {
      try {
         let base = text;
         // Before using atob, adapt to standard character set by replacing - with + and _ and /
         base = base.replace(/-/g, '+').replace(/_/g, '/');
         // atob() decodes a base64 encoded string
         setCiphertext(atob(base));
      } catch (error) {
         // Check if text contains characters outside standard set
         const pattern = /^[a-zA-Z0-9+/\-_=]+$/;
         if (!pattern.test(text)) {
            setCiphertext('Error: The text to decode contains characters outside the standard character set (A-Z, a-z, +, /, -, _, =).');
         }
         else {
            // Otherwise, text is not encoded properly
            setCiphertext('Error: The text to decode is not correctly encoded.');
         }
         console.error("Error decoding from Base64:", error);
      }
   }

   return (
      <>
         <div>
            <h1> Base64 Encoding </h1>
            <textarea name="plaintext" type="text" className="textBox" value={text}
               onChange={handleTextChange} placeholder="Enter plaintext here..." autoFocus={true} />
         </div>

         <FormControl>
            <FormLabel id="encoding-radio-buttons" className="encodingLabel">Encoding</FormLabel>
            <RadioGroup row aria-labelledby="encoding-radio-buttons" name="encoding-buttons"
               value={encoding} onChange={handleEncodingChange} defaultValue="base64" style={{ marginLeft: 15 }}
            >
               <FormControlLabel value="base64" control={<Radio color="blue" />} label="Standard" />
               <FormControlLabel value="urlsafe" control={<Radio color="blue" />} label="URL Safe" />
               <FormControlLabel value="mime" control={<Radio color="blue" />} label="MIME" />
            </RadioGroup>
         </FormControl>

         <Container>
            <Button className="button" variant="contained" color="blue" onClick={encode}>
               Encode
            </Button>
            <Button className="button" variant="contained" color="blue" onClick={decode}>
               Decode
            </Button>
         </Container>

         <div>
            <textarea name="ciphertext" type="text" className="textBox"
               value={ciphertext} placeholder="Ciphertext appears here..."
               readOnly />
         </div>
         <div className="cipherInfo"><Base64About /></div>
      </>
   );
}

export default Base64;