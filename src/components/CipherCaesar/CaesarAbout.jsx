import React from 'react';

function CaesarAbout() {
  return (
    <>
      <h2>How to Use</h2>
      <p>
        To encrypt or decrypt a message, type it in the top box. Then, adjust the slider to set the 
        number of places to shift each letter. Positive and negative values are paired together for 
        convenience. The ciphertext will appear instantly in the bottom box.
      </p>
      <p>
        Three buttons are available to automatically set the slider to common shift values: the 
        ROT13 cipher (±13), and Julius Caesar's preferred encrypting (+3) and decrypting (-3) values.
      </p>
      <p>
        Use the "Swap Text" button to switch the contents of the two text boxes. The shift value will 
        change automatically, making it easy to switch between encrypting and decrypting. Additionally, 
        there are buttons to display all text in uppercase or lowercase.
      </p>

      <h2>What is the Caesar Cipher?</h2>
      <p>
        The Caesar Cipher is one of the simplest and oldest encryption techniques.
        It is a type of substitution cipher where each letter in the plaintext is shifted
        a certain number of places forward or backward in the alphabet. For example, with a right 
        (forward) shift of 10, the letter A is replaced by K, B becomes L, and so on.
      </p>
      <p>
        The ROT13 cipher is a special case of the Caesar cipher, rotating each letter 13 places 
        forward (or backward) in the alphabet. Since the English alphabet has 26 letters, applying 
        ROT13 twice returns the original text, making it a reversible cipher.
      </p>
      
      <table>
        <tbody>
          <tr>
            <th style={{paddingRight: 20}}>Plain</th>
            <td>ABCDEFGHIJKLMNOPQRSTUVWXYZ</td>
          </tr>
          <tr>
            <th style={{paddingRight: 20}}>ROT13 (±13)</th>
            <td>NOPQRSTUVWXYZABCDEFGHIJKLM</td>
          </tr>
        </tbody>
      </table>

      <h2>Encrypt It!</h2>
      <p>
        Encrypting a message with the Caesar cipher involves a simple shift of the alphabet. The 
        cipher alphabet is the plain alphabet shifted left or right by a certain number of positions. 
        This shift acts as the key to breaking the cipher.
      </p>
      <p>
        The most common shift involves moving forward 3 letters so that A becomes D (Read "Origins" to 
        see why). Here's what the encrypted alphabet looks like for a right shift of 3 places (+3), 
        equivalent to a left shift of 23 (-23): 
      </p>

      <table>
        <tbody>
          <tr>
            <th style={{paddingRight: 20}}>Plain</th>
            <td>ABCDEFGHIJKLMNOPQRSTUVWXYZ</td>
          </tr>
          <tr>
            <th style={{paddingRight: 20}}>Caesar (+3)</th>
            <td>DEFGHIJKLMNOPQRSTUVWXYZABC</td>
          </tr>
        </tbody>
      </table>
      <br />

      <p>
        By matching each letter in the plain alphabet with the corresponding letter in the 
        Caesar-shifted alphabet, we can generate the ciphertext. For example, the word "<b>HELLO</b>" 
        is transformed into "<b>KHOOR</b>."
      </p>

      <h2>Decrypt It!</h2>
      <p>
        The first step in decrypting a Caesar ciphertext is determining the shift used to encrypt the 
        plaintext. This step is relatively straightforward (see "How Easy is it to Break?"). To 
        decrypt, simply go in the opposite direction of the shift. For example, if you know that the 
        shift is eight letters forward, you decrypt it by shifting eight letters backward.
      </p>

      <h2>How Easy is it to Break?</h2>
      <p>
        The Caesar cipher is very easy to crack. There are only 26 possible letter shifts, so a decoder 
        can use brute force and try all of them. This will reveal the message quickly as the correct 
        shift will be the only one to create a readable text. Additionally, frequency analysis of the 
        letters provides a fast alternative for finding the correct shift.
      </p>

      <h2>Origins</h2>
      <p>
        The Caesar cipher is named after the famed Roman general and dictator, Julius Caesar. 
        According to the historian Suetonius, Caesar used the cipher with a shift of three letters 
        forward to protect military messages (meaning A becomes D when encrypting, and D becomes A 
        when decrypting).
      </p>
      <p>
        His nephew, Augustus, also used the cipher, but with a shift of one letter forward. Notably, 
        Z did not wrap around back to A; instead, AA was used to represent Z.
      </p>
    </>
  )
}

export default CaesarAbout;