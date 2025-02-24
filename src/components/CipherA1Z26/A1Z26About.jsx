import React from 'react';
import './A1Z26.css';

function A1Z26About() {
   return (
      <>
         <h3>How to Use</h3>
         <p>
            Enter the text you want to encode/decode in the top text box.
            Then enter the alphabet to be used for encoding and decoding. By default, the English
            alphabet is provided, but alphabets in other languages and even symbols can be used. All
            non-alphabetic characters in the text will not be transformed. You can reset back to 
            the English alphabet at any time by clicking "Reset Alphabet (A-Z)".
         </p>
         <p>
            You can enter the separator character that appears between numbers. Typically this is a
            dash "-" or space " ". It is NOT recommended to leave this blank. Note that if you are 
            decrypting, ensure that the separator character used in the top text box matches the 
            character entered here for accurate results.
         </p>
         <p>
            You also have the option to include spaces when encrypting. If this is checked,
            spaces will appear in the result box (for example, with dash separator, "- -"). Finally,
            choose whether to Encrypt or Decrypt and see your results in the result box.
         </p>

         <h3>What is the A1Z26 Cipher?</h3>
         <p>
            The A1Z26 Cipher is a very simple substitution cipher, where each letter is replaced by
            its position in the alphabet. For example, A=1, B=2, and Z=26, hence the name.
         </p>

         <h3>Encode It!</h3>
         <p>
            Encrypting your message with A1Z26 involves knowing the indexes (positions) of the
            letters in the alphabet. For example, with the 26-character English alphabet, these are
            the values that map to each letter:
         </p>
         <Table />
         <p style={{ marginTop: '1rem' }}>
            Simply replace each letter with its position in the alphabet (don't forget the separator
            between each number!). For example, the word "PASSWORD" with a dash separator becomes
            "16-1-19-19-23-15-18-4".
         </p>

         <h3>Decode It!</h3>
         <p>
            Decoding is the inverse of encoding. Just replace each number with the letter in the
            corresponding position in the alphabet. For example, "3-18-25-16-20-15-7-18-1-16-8-25"
            translates to "CRYPTOGRAPHY".
         </p>

         <h3>How Easy is it to Break?</h3>
         <p>
            As it is a simple substitution cipher, the A1Z26 cipher is very easy to break as long
            as you know the alphabet used.
         </p>
         <p>
            Variants of the cipher exist which could make it a little more difficult to decode.
            One such variant is shifting the numbers for each letter, for example using
            A=0 up to Z=25, or perhaps using ASCII code where A=65 or 97.
         </p>
         <p>
            Using another number as a separator, such as 0 or 27, may help disguise the message
            as a long string of numbers. However, codebreakers could easily see the highly
            repeated numbers and assume that for a space.
         </p>
         <p>
            Custom or mixed alphabets can also be used to increase complexity. Alphabets
            that add a few additional characters along with the normal letters would increase
            the numbers being used and may hide the message better.
         </p>
      </>
   );
}

// A table assigning each letter to its position on the alphabet
function Table() {
   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

   const alphabetTable = () => {
      const rows = [];

      const letters = [];
      for (let j = 0; j < 26; j++) {
         letters.push(<td key={j}>{`${alphabet[j]}`}</td>);
      }
      rows.push(<tr key="letters">{letters}</tr>);

      const numbers = [];
      for (let j = 0; j < 26; j++) {
         numbers.push(<td key={j}>{`${j + 1}`}</td>);
      }
      rows.push(<tr key="numbers">{numbers}</tr>);


      return rows;
   };

   return (
      <div style={{ overflowX: "auto" }}>
         <table className="azTable">
            <tbody>
               {alphabetTable()}
            </tbody>
         </table>
      </div>
   );
}

export default A1Z26About;