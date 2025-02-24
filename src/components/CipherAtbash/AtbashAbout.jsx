import React from 'react';
import './Atbash.css';

function AtbashAbout() {
  return (
    <>
      <h3>How to Use</h3>
      <p>
        This Monoalphabetic Substitution cipher is designed for use with the <strong>English
        Alphabet.</strong> Enter the text to encrypt/decrypt in the top text box.
        There are two ways to enter the key value that indentifies which symbol represents each
        alphabet letter:
      </p>

      <ol>
        <li style={{ marginBottom: 10 }}>
          The "Key" Field: Enter the entire substitution alphabet here. <strong> For best results, 
          this key should be 26 characters long, and no character should be used more than 
          once.</strong> Letters, numbers, and symbols are allowed. Click "Encode/Decode with Key" 
          to transform your text using this key value.
        </li>
        <li>
          The Alphabet Table: Enter a character for each letter of the alphabet. Each input box
          takes only one character, but letters, numbers, and symbols are allowed. Click
          "Encode/Decode with Table" to transform your text using the values in this table.
        </li>
      </ol>

      <p><b>
        Hint: If you don't know the symbol that matches to a particular character, try using
        an underscore "_" as a wild card.
      </b></p>

      <p>
        In addition, there are buttons that allow you to copy the key values between the two methods, 
        allowing you to easily map each letter to a character:
      </p>
      <ul>
        <li>
          Copy Key Value to Table: Maps the characters in the Key Field into the Alphabet Table,
          with the first character in the Key assigned to 'A', the second to 'B', and so on. 
          Any text in the Alphabet Table will be overriden.
        </li>
        <li>
          Copy Table Values to Key: Condenses all characters in the Table into a single string 
          and inserts it in the Key Field. Any blank values in the table will be replaced with 
          underscores "_". Any text in the Key Field will be overriden.
        </li>
      </ul>

      <p>
        Finally, there are buttons to set the Key value to the classic Atbash cipher (where Z=A), 
        the normal English Alphabet (where A=A), and a button to clear the values of both the 
        Key Field and Table.
      </p>

      <h3>What is the Monoalphabetic Substitution Cipher?</h3>
      <p>
        A substitution cipher is where the letters of the alphabet are replaced by others according 
        to a set of rules. There are several different types of substitution ciphers, each of which 
        use varying numbers of alphabets and substitutions. A monoalphabetic cipher, for instance, 
        is called that because it uses only one alphabet. There is also a 1-1 correspondence, 
        meaning each plain letter always translates to the same cipher letter.
      </p>

      <h3>What is the Atbash Cipher?</h3>
      <p>
        The Atbash cipher is a monoalphabetic cipher where each letter is replaced with the letter 
        in the opposite position in the alphabet. That is, the first letter A becomes the last letter Z, 
        the second, B, becomes the second to last, Y, and so on.
      </p>


      <h3>Encode It!</h3>
      <p>
        The monoalphabetical substitution cipher is used by taking the normal alphabet and replacing
        each letter with one from a randomized alphabet. One example is shown below:
      </p>

      <table>
        <tbody>
          <tr>
            <th>Classic Alphabet</th>
            <td>ABCDEFGHIJKLMNOPQRSTUVWXYZ</td>
          </tr>
          <tr>
            <th>Random Alphabet</th>
            <td>YNUKPCLGXSRZEIQAJWTOFVHBMD</td>
          </tr>
        </tbody>
      </table><br/>

      <p>
        To encode the plaintext, replace all letters in the first row with their corresponding ones 
        in the second row. So here, all 'A's turn into 'Y's, 'B's become 'N's, and so on.<br/>
        So here, 'CIPHER' is encrypted into 'UXAGPW'.
      </p>
      <p>
        The Atbash cipher uses the reverse of the standard alphabet:
      </p>
      <table>
        <tbody>
          <tr>
            <th>Classic Alphabet</th>
            <td>ABCDEFGHIJKLMNOPQRSTUVWXYZ</td>
          </tr>
          <tr>
            <th>Atbash Alphabet</th>
            <td>ZYXWVUTSRQPONMLKJIHGFEDCBA</td>
          </tr>
        </tbody>
      </table><br/>
      <p>
        So with this substition, 'CIPHER' becomes 'XRKSVI'.
      </p>


      <h3>Decode It!</h3>
      <p>
        Decoding a monoalphabetical substitution and Atbash cipher is fairly straightforward.
        Assuming you already know the key alphabet used to encrypt the plaintext, you can use the 
        same tables as shown above to decrypt, this time replacing each letter in the bottom row
        with the matching letter in the top row.
      </p>
      <p>
        Breaking the Atbash cipher is even easier because there is only one way to encrypt the text. 
        Simply replace each letter with its opposite, as seen in the Atbash Alphabet table above.
      </p>

      <h3>How Easy is it to Break?</h3>
      <p>
        Although the number of possible substitution alphabets is very large this cipher is not 
        very strong, and can be easily broken. Provided the message is of reasonable length, 
        frequency analysis can be used to deduce the meaning of the most common symbols. Then words 
        can be partially formed and can be filled in progressively.
      </p>
      <p>
        Because the Atbash cipher has only one possible key, it can be instantly broken, so Atbash 
        provides basically no security for messages.
      </p>

      <h3>Atbash Cipher: Origins</h3>
      <p>
        The Atbash Cipher takes its origins from the Hebrew alphabet. In the alphabet, the first 
        letter, aleph (א) was replaced by the last letter, tav (ת), and the second letter, bet (ב) 
        was replaced with the second last, shin (ש). When combined, the letters become 
        Aleph-Tav-Bet-Shin, then A-T-B-SH.
      </p>
    </>
  )
}

export default AtbashAbout;

