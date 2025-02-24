import React from 'react';
import { Link } from 'react-router-dom';
import './Vigenere.css';
import VigenereSquare from '../../assets/Info/VigenèreSquare.svg';

function VigenereAbout() {
  return (
    <>
      <h3>How to Use</h3>
      <p>
        Enter the text you want to encode/decode in the top text box.
        Then enter the Key string. The Key must have at least 2 characters and must not contain 
        any numbers or special characters. Finally, choose whether to Encrypt or Decrypt the 
        plaintext. The result appears in the bottom text box.
      </p>

      <h3>What is the Vigènere Cipher?</h3>
      <p>
        The Vigenère cipher is a polyalphabetic cipher (meaning it uses multiple alphabets)
        which encrypts a message by using several <span><Link to="/caesar">Caesar ciphers</Link></span> based on a single keyword.
        to encrypt the message, making the cipher hard to crack.
      </p>


      <h3>Encode It!</h3>
      <p>
        Encrypting begins by taking the plaintext, choosing a keyword, and repeating the keyword
        until it matches the length of the plaintext. For example, with the plaintext "secrets" and
        the keyword "code", the new keyword is "CODECOD":
      </p>

      <table>
        <tbody>
          <tr>
            <td>secrets</td>
          </tr>
          <tr>
            <td>CODECOD</td>
          </tr>
        </tbody>
      </table><br/>

      <p>
        Next, we can use a table of alphabets known as a <em>tabula recta</em>, <em>Vigenère square</em>,
        or <em>Vigenère table</em>. It writes the alphabet 26 times in 26 rows, and each row is the
        previous row shifted by one, to match one of the possible Caesar ciphers.<br />
      </p>

      <figure>
        <img src={VigenereSquare} className="vigenereSquare" alt="Vigenère Square" />
        <figcaption className="vigenereSquareText">A 26x26 Vigènere Square. Image source: Wikipedia.</figcaption>
      </figure>

      <p>
        Pair each letter of the plaintext with the letter of the key in the same position. Then locate
        the column for the plaintext letter and the row for the key letter, or vice versa (you get
        the same letter regardless of what you use the column and row for). The intersection of the row
        and the column returns the encrypted letter. For example, the intersection of column S and row
        C gives the letter U.
      </p>
      <p>
        Repeat with the next letter of the message and the next letter of the key, and so on until the
        end of the message. Therefore, here the encrypted message is USFVGHV.
      </p>

      <h3>Decode It!</h3>
      <p>
        If you know the key used to encrypt the message, then decrypting using the Vigènere Square
        is basically the same process as encrypting. Repeat the key over and over until the length
        matches the ciphertext. Then pair the letters in the key and ciphertext, and find the
        intersection of each pair in the Vigènere Square to get the plaintext letter.
      </p>

      <h3>How Easy is it to Break?</h3>

      <p>
        While the Vigenère cipher was first described in 1553, it resisted all attempts to break
        it until 1863. This earned it the title <em>le chiffrage indéchiffrable</em> (French for 'the
        indecipherable cipher'). But eventually, cryptanalysts developed methods to finally break
        the cipher.
      </p>
      <p>
        In 1863, Friedrich Kasiski published a general method of deciphering
        Vigenère ciphers. Although several others had managed to break the Vigènere previously,
        Kasiski was the first to publish a decrypting method.<br />

        The Kasiski Test is based on the observation that, in a ciphertext with a repeated key,
        there is a chance that repeated words are encrypted using the same key letters,
        thus creating the same sequence of encrypted letters in the ciphertext. Thus, it is possible
        to determine the length of the key. For example, consider the following ciphertext:
      </p>
      <p>
        <b>ABC</b>XYZ<b>ABC</b>KLM<b>ABC</b>
      </p>
      <p>
        First we must calculate the distance (in number of characters) between occurrences of the
        repeated groups. In this case, it is 6 characters. Then take all common divisors of this
        distance; these correspond to possible lengths for the key. The number 6 is evenly divisible
        by 1, 2, 3 and 6. A key of length one is just a Caesar cipher, and usually a key of length 2
        is not used as it is too short, so the key has a high probability of being of length 3 or 6.<br />

        From there, methods such as frequency analysis can be used to find words of that length that
        could be the key to the cipher.
      </p>

      <h3>Origins</h3>
      <p>
        The cipher known today as the Vigènere cipher was originally described by Italian cryptologist 
        Giovan Battista Bellaso in his 1553 book <em>La cifra del Sig. Giovan Battista Bellaso</em>. 
        He describes a polyalphabetic cipher based on the work of Johannes Trithemius, but introduced 
        a repeating "countersign" (a key) to switch the cipher alphabet on every letter. Unlike today's 
        Vigenère cipher, Bellaso didn't use 26 different Caesar ciphers, instead using 13 shifts for 
        pairs of letters (such as 'AB' and 'CD').
      </p>
      <p>
        In 1586 Blaise de Vigenère published a polyalphabetic cipher called an autokey cipher, where 
        the key is based on letters from the original plaintext. However, in the 19th century, 
        Vigenère was misattributed as the inventor of Bellaso's cipher, but the name stuck.
      </p>
    </>
  )
}

export default VigenereAbout;

