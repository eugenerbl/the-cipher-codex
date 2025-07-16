import React from 'react';
import './A1Z26.css';

function A1Z26About() {
   return (
      <>
         <h2>How to Use</h2>
         <p>
            To encrypt or decrypt a message, type it in the top box. Then, specify
            the alphabet for encrypting and decrypting. The default is the English alphabet, but you can
            use alphabets from other languages and even symbols. Any non-alphabetic characters in your
            message will remain unchanged. You can go back to the English alphabet anytime by clicking
            "Reset Alphabet (A-Z)".
         </p>
         <p>
            Next, enter a separator character to appear between numbers. Common choices are a dash
            ("-") or a space. It's best not to leave this blank! If you are decrypting, ensure the
            separator you use in the top box matches the one you enter here.
         </p>
         <p>
            You can also choose to include spaces when encrypting. If this is checked, spaces
            will appear in the result box (for example, with a dash separator, you will see "- -").
            Finally, choose whether to Encrypt or Decrypt and view your results in the bottom box.
         </p>

         <h2>What is the A1Z26 Cipher?</h2>
         <p>
            The A1Z26 Cipher is a very simple substitution cipher in which each letter is replaced by
            its position in the alphabet. For example, A=1, B=2, and Z=26, hence the name.
         </p>

         <h2>Encrypt It!</h2>
         <p>
            Encrypting your message with A1Z26 involves knowing the indexes (positions) of the
            letters in the alphabet. For the 26-character English alphabet, here are the values that
            map to each letter:
         </p>
         <Table />
         <p style={{ marginTop: '1rem' }}>
            Simply replace each letter with its position in the alphabet, making sure to include a
            separator between each number. For example, the word "PASSWORD" with a dash separator
            becomes "16-1-19-19-23-15-18-4".
         </p>

         <h2>Decrypt It!</h2>
         <p>
            Decrypting is the inverse of encrypting. Simply replace each number with the letter in the
            corresponding position in the alphabet. For example, "3-18-25-16-20-15-7-18-1-16-8-25"
            translates to "CRYPTOGRAPHY".
         </p>

         <h2>How Easy is it to Break?</h2>
         <p>
            As a simple substitution cipher, the A1Z26 cipher is very easy to break if you know the 
            alphabet used.
         </p>
         <p>
            Variants of the cipher can add a bit more difficulty to the decrypting process. One variant 
            shifts the numbers for each letter, such as using A=0 through Z=25 or using ASCII codes 
            where A is either 65 or 97.
         </p>
         <p>
            Using another number as a separator, such as 0 or 27, can help disguise the message as a 
            long string of numbers. However, codebreakers can easily identify highly repeated numbers 
            and assume they represent spaces.
         </p>
         <p>
            Custom or mixed alphabets can also increase complexity. These alphabets might include 
            extra characters along with the standard letters, which would increase the range of 
            numbers being used and make it harder to uncover the message.
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
      <div style={{ overflowX: "auto" }} tabIndex="-1">
         <table className="azTable">
            <tbody>
               {alphabetTable()}
            </tbody>
         </table>
      </div>
   );
}

export default A1Z26About;