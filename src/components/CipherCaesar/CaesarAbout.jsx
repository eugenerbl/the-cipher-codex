import React from 'react';

function CaesarAbout() {
  return (
    <>
      <h3>How to Use</h3>
      <p>
        Enter the text you want to encode/decode in the top text box. Then drag the slider to set 
        the number of letters to shift each letter by. Positive and negative values are matched 
        together for convenience. The ciphertext will appear instantly in the bottom text box.
      </p>
      <p>
        There are buttons that will move the slider to common shift values: one for the ROT13
        cipher (±13), and two for Julius Caesar's preferred encoding (+3) and decoding (-3) values.
      </p>
      <p>
        Use the "Swap Text" button to switch the contents of the two text boxes. The shift value 
        will adjust automatically, allowing an easy way to switch between encoding and decoding.
        Two buttons are also available to switch between all-uppercase or all-lowercase text.
      </p>

      <h3>What is the Caesar Cipher?</h3>
      <p>
        The Caesar Cipher is one of the simplest and oldest encryption techniques.
        It is a type of substitution cipher in which each letter in the plaintext is shifted
        a certain number of places forward or backward in the alphabet. For example, with a left
        (backward) shift of 3, D would be replaced by A, E would become B, and so on.
      </p>
      

      <h3>Encode It!</h3>
      <p>
        Encryption with Caesar code is based on shifting the alphabet.
        The cipher alphabet is the plain alphabet rotated left (-) or right (+) by some
        number of positions (this shift is the key to breaking the cipher).
      </p>
      <p>
        The most commonly used shift is moving forward 3 letters such that A becomes D.
        Here is what the encrypted alphabet would look like for such a shift; this is a right
        shift of three places (-3), equivalent to a left shift of 23 (+23):
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
        We can then match each plain letter with the Caesar letter directly below it to get the 
        ciphertext. For example, using this shift, <strong>HELLO</strong>, would be transformed 
        into <strong>KHOOR</strong>.
      </p>

      <h3>Decode It!</h3>
      <p>
        The first step to decoding a Caesar ciphertext is determining the shift used to encode the 
        plaintext. This is relatively easy (see How Easy is it to Break?), but let's say you already 
        know the shift used is 3 letters forward. Now decoding goes in the other direction, in this 
        case, 3 letters backward.
      </p>

      <h3>How Easy is it to Break?</h3>
      <p>
        The Caesar cipher is very easy to crack. There are only 25 possible ways to
        shift the letters, so a decoder can use brute force and try every possible shift. This will
        reveal the message shortly as the right shift will be the only one that makes coherent text.
        Using frequency analysis of the letters is also a fast approach to finding the correct shift.
      </p>

      <h3>Origins</h3>
      <p>
        The Caesar cipher is named after Julius Caesar, who, according to Suetonius,
        used it with a shift of three letters forward (A becoming D when encrypting, and D becoming A
        when decrypting) to protect messages of military significance.
      </p>
      <p>
        His nephew, Augustus, also used the cipher, but with a forward shift of one.
        Also, Z did not wrap around back to A; instead, AA was used to represent Z.
      </p>
    </>
  )
}

export default CaesarAbout;