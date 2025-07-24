import React from 'react';
import { Link } from 'react-router-dom';
import './Vigenere.css';
import VigenereSquare from '../../assets/Info/VigenèreSquare.svg';

function VigenereAbout() {
  return (
    <>
      <h2>How to Use</h2>
      <p>
        To encrypt or decrypt a message, start by entering the text in the top box. Next, input the 
        Key string. The Key must be at least 2 characters long and should not contain any numbers or 
        special characters. Finally, choose whether to Encrypt or Decrypt the plaintext. The result 
        will appear in the bottom text box.
      </p>

      <h2>What is the Vigenère Cipher?</h2>
      <p>
        The Vigenère cipher encrypts a message by using several <span><Link to="/caesar">Caesar ciphers</Link></span> based 
        on a single keyword. It is a polyalphabetic cipher, meaning it uses multiple alphabets to 
        encrypt the message, making it harder to break.
      </p>


      <h2>Encrypt It!</h2>
      <p>
        Encrypting begins by taking the plaintext and choosing a keyword. Repeat the keyword until 
        its length matches the length of the plaintext. For example, for the plaintext "<b>so many secrets</b>" 
        and the keyword "<b>code</b>", the new keyword is "<b>codecodecodec</b>":
      </p>

      <table style={{placeSelf: 'center', fontWeight: '600'}}>
        <tbody>
          <tr>
            <td>so many secrets</td>
          </tr>
          <tr>
            <td>co deco decodec</td>
          </tr>
        </tbody>
      </table><br/>

      <p>
        Next, we can use a table of alphabets known as a tabula recta, Vigenère square, 
        or Vigenère table. This table writes the alphabet 26 times in 26 rows, with each row 
        shifted by one letter compared to the row above it. Each of the 26 rows represents one of the 
        possible Caesar ciphers.<br />
      </p>

      <figure>
        <img src={VigenereSquare} className="vigenereSquare" alt="A 26-row by 26-column Vigenère Square" />
        <figcaption className="vigenereSquareText">Table 1: A 26x26 Vigenère Square. Image source: Wikipedia.</figcaption>
      </figure>

      <p>
        Pair each letter of the plaintext with the letter of the key in the same position. Then locate 
        the column for the plaintext letter and the row for the key letter (or vice versa; either way 
        will yield the same result). The intersection of the selected row and column will return the 
        encrypted letter. For example, the intersection of column S and row C is the letter U.
      </p>
      <p>
        Continue this process for the remaining letters of the message and the key until the entire 
        message has been encrypted. In this example, the encrypted message is <b>uc pepm viefhxu</b>.
      </p>

      <h2>Decrypt It!</h2>
      <p>
        The process for decrypting is the same as for encrypting. If you know the key used to encrypt 
        a message, you can easily decrypt it using the Vigenère Square. Simply repeat the key until 
        its length matches that of the ciphertext. Then pair each letter from the key with the 
        corresponding letter from the ciphertext, and find the intersection of each pair in the 
        Vigenère Square to get the plaintext letter.
      </p>
      <p>
        However, if you do not know the key used for encryption, then decrypting becomes more 
        complicated. Luckily, there have been methods developed over the years to find the key 
        and decrypt the message. Read the next section below for one such method.
      </p>

      <h2>How Easy is it to Break?</h2>

      <p>
        While the Vigenère cipher was first described in 1553, it resisted all attempts to break 
        it until 1863. This earned it the title <span lang="fr">"le chiffrage indéchiffrable"</span> 
        (French for "the indecipherable cipher"). Eventually, codebreakers developed methods to 
        finally break the cipher.
      </p>
      <p>
        In 1863, Friedrich Kasiski published one such method for deciphering Vigenère ciphers. 
        Although several others had managed to break the Vigenère cipher before him, Kasiski was 
        the first to publish a decryption method.
      </p>
      <p>
        The Kasiski Test is based on the observation that in a ciphertext with a repeated key, 
        repeated words are likely to be encrypted using the same key letters, resulting in identical 
        sequences of encrypted letters in the ciphertext. This observation can help determine the 
        length of the key. For example, consider the following ciphertext:
      </p>
      <p>
        <b>ABC</b>XYZ<b>ABC</b>KLM<b>ABC</b>
      </p>
      <p>
        First, we calculate the distance (in number of characters) between occurrences of the 
        repeated groups. In this case, the distance is 6 characters. Then, take all common divisors 
        of this distance; these correspond to possible key lengths. The number 6 is evenly divisible 
        by 1, 2, 3, and 6. A key of length 1 is basically a Caesar cipher and a key of length 2 is 
        usually avoided as it is too short. Thus, the key is likely 3 or 6 letters long.
      </p>
      <p>
        From there, methods such as frequency analysis can be used to identify potential words of 
        that length that could be the keyword.
      </p>

      <h2>Origins</h2>
      <p>
        The cipher known today as the Vigenère cipher was originally described by Italian 
        cryptographer <span lang="it">Giovan Battista Bellaso</span> in his 1553 book 
        <span lang="it">"La cifra del Sig. Giovan Battista Bellaso"</span>. He introduced a 
        polyalphabetic cipher (based on the work of Johannes Trithemius) but featured a repeating 
        "countersign" (a key) to switch the cipher alphabet for each letter. Unlike today's 
        Vigenère cipher, Bellaso didn't use 26 different Caesar ciphers. Instead, he used 13 
        shifts for letter pairs (such as 'AB' and 'CD').
      </p>
      <p>
        In 1586, French cryptographer <span lang="fr">Blaise de Vigenère</span> described a similar 
        polyalphabetic cipher known as an autokey cipher, where the key is based on letters from 
        the original plaintext. However, Vigenère was misattributed as the inventor of Bellaso's 
        cipher in the 19th century, and the name has remained since.
      </p>
    </>
  )
}

export default VigenereAbout;

