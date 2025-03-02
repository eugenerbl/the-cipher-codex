import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import './Caesar.css';
import CaesarAbout from './CaesarAbout';

// Labels to make using slider easier
const marks = [
  { value: 0, label: '+0\n-0' },
  { value: 5, label: '+ 5\n-21' },
  { value: 10, label: '+10\n-16' },
  { value: 15, label: '+15\n-11' },
  { value: 20, label: '+20\n- 6' },
  { value: 25, label: '+25\n- 1' }
];

function Caesar() {
  useEffect(() => { document.title = 'Caesar Cipher - The Cipher Codex'; }, []);
  const [text, setText] = useState('');   // Input in textarea
  const [shift, setShift] = useState(3);  // Value to shift letters by

  // Preset shift value setting; update slider
  const preset = (preset) => {
    setShift(preset);
    encode(text, preset);
  };

  // Change in text box content
  const handleChange = (event) => {
    setText(event.target.value);    
  };
  // Change in shift value
  const handleShiftChange = (event) => {
    setShift(event.target.value);   
  };

  // Custom formatting for value labels
  const valueLabelFormat = (value) => { 
    let valuePad = value.toString().padStart(2, ' ');
    let opposite = value === 0 ? ' 0' : (26-value).toString().padStart(2, ' ');
    return `+${valuePad}  -${opposite}`;
  };

  // Change text case
  const changeCase = (type) => {
    type === 1 ? setText(text.toUpperCase()) : setText(text.toLowerCase()); 
  };

  // Swaps the content of the two text boxes for easy switching between encoding and decoding
  const swapText = () => {
    setShift(Math.abs(shift-26));   // Reverse shift value by taking absolute value of (shift - 26)
    setText(encode(text, shift));   // Encode current text value with new shift to swap text boxes
  }

  return (
    <>
      <div>
        <h1> Caesar Cipher </h1>
        <textarea type="text" value={text} className="textBox" onChange={handleChange}
          placeholder="Enter plaintext here..." autoFocus={true} />
      </div>
      <div>
        <Box display="flex" alignItems="center" style={{placeSelf: "center", margin: "20px 0px"}}>
          <span className="sliderLabel">Shift Value:</span>
          <Slider
            name="Caesar Shift Value" className="slider"
            aria-label="Shift Value" getAriaValueText={shiftText} aria-labelledby="shift-label"
            valueLabelDisplay="on" defaultValue={0} value={shift}
            marks={marks} track={false}
            shiftStep={5} step={1}        
            min={0} max={25}
            onChange={handleShiftChange}
            valueLabelFormat={valueLabelFormat}
          />
        </Box>
        <Button className="button" variant="contained" color="green" onClick={() => preset(13)}> ROT13 (±13) </Button>
        <Button className="button" variant="contained" color="green" onClick={() => preset(3)}> Classic Encryption (+3) </Button>
        <Button className="button" variant="contained" color="green" onClick={() => preset(23)}> Classic Decryption (-3) </Button>
        <br />

        <Button className="button" variant="contained" color="blue" onClick={swapText}> Swap Text </Button>
        <Button className="button" variant="contained" color="brown" onClick={() => changeCase(1)}> UPPERCASE </Button>
        <Button className="button" variant="contained" color="brown" onClick={() => changeCase(0)}> lowercase </Button>
      </div>
      <div>
        <textarea value={encode(text, shift)} className="textBox" 
          placeholder="Ciphertext appears here..." readOnly />
      </div>
      <div style={{width: '80%', textAlign: 'initial', display: 'inline-block'}}><CaesarAbout/></div>
    </>
  );
}

function encode(text, shift) {
  const shiftValue = shift;
  const encoded = text.split('').map(char => {
    // Locates alphabetic characters
    if (char.match(/[a-z]/i)) {
      const unicode = char.charCodeAt(0);  // Converts chars to their matching Unicode values
      let shiftedUnicode = 65;

      // General formula for encoding with Caesar:
      // Encrypted letter = ((letter - 'a' + number to shift by) modulus 26) + 'a'
      // Uppercase: A = 65, Z = 90
      if (unicode >= 65 && unicode <= 90) {
        shiftedUnicode = ((unicode - 65 + shiftValue) % 26) + 65;
      }
      // Lowercase: a = 97, z = 122
      else if (unicode >= 97 && unicode <= 122) {
        shiftedUnicode = ((unicode - 97 + shiftValue) % 26) + 97;
      }
      else {
        return char; // Non-alphabetic characters are not shifted
      }
      return String.fromCharCode(shiftedUnicode); // Converts Unicode values to their matching chars
    }
    return char; // Non-alphabetic characters are not shifted
  }).join('');

  return encoded;
};

// Aria text for slider
function shiftText(shift) {
  let backward = 26 - shift;
  return `Forward ${shift} letters, backward ${backward} letters`;
}

export default Caesar;