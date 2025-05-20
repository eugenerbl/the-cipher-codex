import './Playfair.css';

function PlayfairAbout() {
  return (
    <>
      <h3>How to Use</h3>
      <p>
        To encrypt or decrypt a message, enter the text in the top box, then input the keyword and 
        choose letters for three different options. Click "Encrypt" or "Decrypt" to see the transformed 
        text in the bottom box. <i>Note that numbers, spaces, and non-letter characters will be 
        ignored; however, you may see padding letters.</i>
      </p>
      <p>
        You'll find the complete 25-letter alphabet in the Playfair Alphabet box. This alphabet will 
        be arranged in a 5x5 Playfair grid for encryption and decryption. <i>This cipher uses the 
        English alphabet. The omitted letter, all numbers, and all non-letter characters in the 
        Keyword box will be ignored.</i>
      </p>

      <p>
        Three letter options are provided to customize your cipher:
      </p>
      <ul>
        <li>
          <b>Letter to omit</b>: Choose one letter to leave out of the alphabet. This letter will be 
          removed from the keyword and replaced in the message with the replacement letter. This letter 
          cannot be the same as the replacement or padding letter.
        </li>
        <li>
          <b>Replace omitted letter with (Replacement letter)</b>: All instances of the omitted letter 
          in the message will be replaced with this letter.
        </li>
        <li>
          <b>Padding letter</b>: This letter is used to either split pairs of double letters or 
          attach to leftover single letters at the end of the message.<br/> 
          For example, if the pair 'RR' or the single letter 'A' is found, and the padding letter 
          is 'X', these will change to 'RX R_' and 'AX', respectively.
        </li>
      </ul>

      <p>
        Buttons are also available to clear the keyword and reset the letter options to default values.
      </p>

      <p>
        More information coming soon!
      </p>


    </>
  )
}

export default PlayfairAbout;