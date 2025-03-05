import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Base64About from './Base64About';

function Base64() {
   useEffect(() => { document.title = 'Base64 Encoding - The Cipher Codex'; }, []);
   const [text, setText] = useState('');
   const [ciphertext, setCiphertext] = useState('');

   const handleTextChange = (event) => {
      setText(event.target.value);
   };

   const encode = () => {
      try {
         setCiphertext(btoa(text));
      } catch (error) {
         console.error("Error encoding to Base64:", error);
         setCiphertext('');
      }
   }

   const decode = () => {
      try {
         setCiphertext(atob(text));
      } catch (error) {
         console.error("Error decoding from Base64:", error);
         setCiphertext('');
      }
   }

   return (
      <>
         <div>
            <h1> Base64 Encoding </h1>
            <textarea name="plaintext" type="text" className="textBox" value={text}
               onChange={handleTextChange} placeholder="Enter plaintext here..." autoFocus={true} />
         </div>

         <Button className="button" variant="contained" color="blue" onClick={encode}>
            Encode
         </Button>
         <Button className="button" variant="contained" color="blue" onClick={decode}>
            Decode
         </Button>

         <div>
            <textarea name="ciphertext" type="text" className="textBox"
               value={ciphertext} placeholder="Ciphertext appears here..."
               readOnly />
         </div>
         <div style={{ width: '80%', textAlign: 'initial', display: 'inline-block' }}><Base64About /></div>
      </>);
}

export default Base64;