import React from 'react';
import './Atbash.css';

function AtbashAbout() {
  return (
    <>
      <h2>How to Use</h2>
      <p>
        This Monoalphabetic Substitution cipher is designed for use with the English alphabet. Enter 
        the message you want to encrypt or decrypt in the top box. There are two ways to input the 
        key value that specifies which symbol represents each letter of the alphabet:
      </p>

      <ol>
        <li style={{ marginBottom: 10 }}>
          The "Key" Field: Enter the entire substitution alphabet here. <b> For best results, this 
          key should be 26 characters long, and no character should be used more than once. </b>
          Letters, numbers, and symbols are allowed. Click "Encrypt/Decrypt with Key" to transform 
          your text using this key.
        </li>
        <li>
          The Alphabet Table: Enter a character for each letter. Each input box accepts only one 
          character, but letters, numbers, and symbols are allowed. Click "Encrypt/Decrypt with Table" 
          to transform your text based on these values.
        </li>
      </ol>

      <p><b>
        Hint: You can use symbols like an underscore "_" as a wildcard for unknown symbols. An underscore 
        will be used in the bottom box if a letter does not have a character mapped to it.
      </b></p>

      <p>
        You can also copy key values between the two methods, making it easier to map each letter to 
        a character:
      </p>
      <ul>
        <li>
          Copy Key Value to Table: Maps the characters in the Key Field to the Alphabet Table, 
          assigning the Key's first character to 'A', the second to 'B', and so on. Any text in 
          the Alphabet Table will be overridden.
        </li>
        <li>
          Copy Table Values to Key: Combines all characters in the Table into a single string and 
          inserts it into the Key Field, replacing any blank values with underscores "_". Any text in 
          the Key Field will be overridden.
        </li>
      </ul>

      <p>
        Finally, you can set the Key value to the classic Atbash cipher (where Z=A), reset to the 
        English Alphabet (where A=A), or clear the values from both the Key Field and Table.
      </p>

      <h2>What is the Monoalphabetic Substitution Cipher?</h2>
      <p>
        A substitution cipher is a method of encrypting text by replacing the letters of the alphabet 
        according to specific rules. There are various types of substitution ciphers, each one 
        utilizing different alphabets and substitutions. A monoalphabetic cipher, for instance, is 
        named as such because it uses only one alphabet. It has a 1-1 correspondence, meaning each 
        plaintext letter always translates to the same ciphertext letter.
      </p>

      <h2>What is the Atbash Cipher?</h2>
      <p>
        The Atbash cipher is a monoalphabetic substitution cipher where each letter is replaced by the letter in 
        the opposite position in the alphabet. That is, the first letter A becomes the last letter Z; 
        the second, B, becomes the second to last, Y, and so on.
      </p>


      <h2>Encrypt It!</h2>
      <p>
        The monoalphabetic substitution cipher is used by taking the classic alphabet and replacing 
        each letter with one from a randomized alphabet. One example is shown below:
      </p>

      <table>
        <tbody>
          <tr>
            <th>Classic</th>
            <td>ABCDEFGHIJKLMNOPQRSTUVWXYZ</td>
          </tr>
          <tr>
            <th>Random</th>
            <td>YNUKPCLGXSRZEIQAJWTOFVHBMD</td>
          </tr>
        </tbody>
      </table><br/>

      <p>
        To encrypt the plaintext, replace all letters in the first row with their corresponding ones 
        in the second row. Here, all 'A's turn into 'Y's, 'B's become 'N's, and so on. Therefore, the 
        word 'CIPHER' is encrypted into 'UXAGPW'.
      </p>
      <p>
        The Atbash cipher uses the reverse of the classic alphabet:
      </p>
      <table>
        <tbody>
          <tr>
            <th>Classic</th>
            <td>ABCDEFGHIJKLMNOPQRSTUVWXYZ</td>
          </tr>
          <tr>
            <th>Atbash</th>
            <td>ZYXWVUTSRQPONMLKJIHGFEDCBA</td>
          </tr>
        </tbody>
      </table><br/>
      <p>
        With this substition, 'CIPHER' becomes 'XRKSVI'.
      </p>


      <h2>Decrypt It!</h2>
      <p>
        Decrypting a monoalphabetic substitution cipher is very straightforward. If you know the key 
        alphabet used to encrypt the plaintext, you can use the same tables (like those shown above) 
        to decrypt it. This time, replace each letter in the bottom row with the matching letter in 
        the top row.
      </p>
      <p>
        Decrypting the Atbash cipher is even easier because there is only one way to encrypt the text. 
        Simply replace each letter with its opposite, as seen in the Atbash Alphabet table above.
      </p>

      <h2>How Easy is it to Break?</h2>
      <p>
        Despite the large number of possible substitution alphabets, this cipher is not very strong 
        and can be easily broken. If the message is of reasonable length, frequency analysis can be 
        used to deduce the meanings of the most common symbols. From there, words can be partially 
        formed and can be filled in gradually.
      </p>
      <p>
        The Atbash cipher, which has only one possible key, can be instantly broken, so it provides 
        no real security for messages.
      </p>

      <h2>Atbash Cipher: Origins</h2>
      <p>
        The Atbash Cipher originates from the Hebrew alphabet. In the alphabet, the first letter, 
        <span lang="he">alef (א)</span> is replaced with the last letter, <span lang="he">tav (ת)</span>; 
        the second letter, <span lang="he">bet (ב)</span> is replaced with the second-to-last, 
        <span lang="he">shin (ש)</span>. These letters create the sequence 
        <span lang="he">Aleph-Tav-Bet-Shin</span>, which becomes A-T-B-SH.
      </p>
    </>
  )
}

export default AtbashAbout;

