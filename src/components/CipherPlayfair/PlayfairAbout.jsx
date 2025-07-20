import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import './Playfair.css';
import PlayfairGrids from '../../assets/Info/Playfair1Grids.png';
import PlayfairRow   from '../../assets/Info/Playfair2Row.png';
import PlayfairCol   from '../../assets/Info/Playfair2Column.png';
import PlayfairRect  from '../../assets/Info/Playfair2Rectangle.png';
import PlayfairEx    from '../../assets/Info/Playfair3Example.png';

function PlayfairAbout() {
  return (
    <>
      <h2>How to Use</h2>
        <p>
          To encrypt or decrypt a message, enter the text in the top box, then input the keyword and 
          choose letters for three different options. Click "Encrypt" or "Decrypt" to see the transformed 
          text in the bottom box. Numbers, spaces, and non-letter characters will be ignored; 
          however, you may see padding letters.
        </p>
        <p>
          You'll find the complete 25-letter alphabet in the Playfair Alphabet box. This alphabet will 
          be arranged in the Playfair Grid (5 rows and 5 columns) to the right of the input box for 
          encryption and decryption. This cipher uses the English alphabet. The omitted letter, all 
          numbers, and all non-letter characters in the Keyword box will be ignored.
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
            <b>Replacement letter</b>: All instances of the omitted letter in the message will be 
            replaced with this letter.
          </li>
          <li>
            <b>Padding letter</b>: This letter is used to either split pairs of double letters or 
            attach to leftover single letters at the end of the message.<br/> 
            For example, if the pair 'RR' or the single letter 'A' is found, and the padding letter 
            is 'X', these will change to 'RX R_' and 'AX', respectively.
          </li>
        </ul>
        <p>
          Additional buttons are available to clear the keyword and reset the letter options to default values.
        </p>


      <h2>What is the Playfair Cipher?</h2>
        <p>
          The Playfair cipher is an encryption method that transforms text using pairs of letters. 
          It is classified as a polygraphic substitution cipher, meaning it encrypts pairs of letters 
          (called bigrams or digrams) rather than individual letters, like in a monoalphabetic cipher. 
          It uses a square grid of letters to convert these pairs into other letters.
        </p>


      <h2>Encrypt It!</h2>
        <p>
          Encryption starts with a 5x5 grid of letters. Each cell in the grid contains one of the 
          26 letters in the English alphabet. But since there are only 25 cells, one letter must 
          be omitted - usually, this is J, and all instances of J in the plaintext are replaced 
          with I. This tool allows you to select which letter to omit. Figure 1 below is the standard 
          grid with no keyword, and J excluded.
        </p>
        <p>
          First, take a keyword, remove any duplicate letters, and place its letters at the beginning 
          of the grid. Then, fill in the rest of the alphabet, leaving out the omitted letter. Figure 
          2 is the grid with the keyword <b>"SOLUTION"</b> (note there is only one O):
        </p>

        <Container maxWidth="md">
            <img src={PlayfairGrids} className="playfairGrids"
            alt="Two 5-by-5 Playfair grids showing how the normal alphabet and a keyword are arranged on the grid" />
        </Container>
        
        <p className="textAfterImage">
          Next, break the plaintext into two-letter pairs known as bigrams or digrams. If a bigram 
          consists of two identical letters, separate them with a padding letter (usually X). If 
          there's one letter left at the end, add one more padding letter to make a complete pair.
        </p>
        <p>
          For example, consider the plaintext <b>"HELLO WORLD."</b> The bigrams are: <b>"HE LX LO 
          WO RL DX."</b> The bigram "LL" is separated with an X to form "LX LO". We have one 
          character (D) left at the end, so we add one more pad to make "DX". 
        </p>

        <p>
          After creating the letter pairs, examine their positions in the grid relative to each other. 
          The rules for moving the letters may vary, but here's the standard approach:
        </p>
        <ul>
          <li>
            If both letters are in the same <b>row</b>, move each letter one position to the <b>right</b>. 
            If you reach the end of the row, loop around to the leftmost column. In our example, "HE" 
            is in the same row. Moving right by one gives "DF", with H looping around to D.

          </li>
          <li>
            If both letters are in the same <b>column</b>, slide one position <b>down</b>. If you go 
            past the edge, loop back to the top row. "LX" is in the same column, so moving down one 
            gives "AL", where X loops back to the top.

          </li>
          <li>
            If neither of the above is true, the bigram forms <b>two corners of a rectangle</b>. Take the 
            bigram's first letter and find the letter on its row that is in the same column as the 
            second letter. Do the same for the second letter. <br/>
            
            In our example, "RL" forms two corners of a rectangle, and the other letters are T and P. 
            Start with R and slide through its row to the letter in the same column as L, which is P. 
            Similarly, take L and slide over to get T. Thus, these letters become "PT".
          </li>
        </ul>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} >
            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
              <img src={PlayfairRow} className="playfairRules" 
              alt="A Playfair grid demonstrating how letters in the same row are shifted to the right" />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
              <img src={PlayfairCol} className="playfairRules" 
              alt="A Playfair grid demonstrating how letters in the same column are shifted down" />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
              <img src={PlayfairRect} className="playfairRules" 
              alt="A Playfair grid demonstrating how letters in the corners of a rectangle are shifted" />
            </Grid>
          </Grid>
        </Box>
        
        <p className="textAfterImage">
          After transforming each bigram, combine the results to form the ciphertext. The final 
          message is "DF AL UL ON PT FV" or simply <b>"DFALULONPTFV."</b>
        </p>

        <Container maxWidth="md">
            <img src={PlayfairEx} className="playfairGrids" 
            alt="A series of diagrams showing the complete process of encrypting using the Playfair grid" />
        </Container>

      <h2>Decrypt It!</h2>
        <p>
          Decrypting a message is almost the same process as encrypting one. Create a 5x5 grid with 
          the keyword and split the message into bigrams (padding letters are not necessary this 
          time). The difference here is with some of the grid rules:
        </p>
        <ul>
          <li>
            If both letters are in the same row, slide one letter to the <b>left</b> instead of the 
            right. If you go past the grid's edge, loop to the rightmost column.
          </li>
          <li>
            If both letters are in the same column, slide one letter <b>up</b>. If you reach the edge, 
            loop around to the bottom row.
          </li>
          <li>
            If the bigram forms two corners of a rectangle, the same rule from encryption applies. 
            Use the character on the same row as the selected letter, but in the same column as its 
            paired letter.
          </li>
        </ul>
        <p>
          Keep in mind that the decrypted text may contain padding letters. Make sure to remove these 
          to read the message clearly.
        </p>


      <h2>How Easy is it to Break?</h2>
        <p>
          Playfair, compared to other classical ciphers, is significantly harder to break since the 
          frequency analysis technique used to break simple substitution ciphers is more difficult. 
          There are around 600 possible bigrams to analyze rather than 26 possible monograms (letters).
        </p>
        <p>
          However, Playfair can still be cracked if the text is long enough. And finding the key is 
          relatively straightforward if both the plaintext and ciphertext are known. Also, since 
          Playfair is symmetric, the same keyword is used for both encryption and decryption.
        </p>
        <p>
          Another notable weakness is that a digraph in the ciphertext (like AB) and its reverse (BA) 
          can correspond to plaintext pairs such as UR and RU (and vice versa). This vulnerability 
          can be exploited through frequency analysis. By finding reversed pairs in the ciphertext 
          and comparing them to a list of known plaintext words, you can generate possible plaintext 
          strings that could help find the key.
        </p>
        <p>
          You might suspect that a text was encrypted using Playfair if it contains at most 25 
          distinct letters or if you never encounter a double-letter bigram (like SS).
        </p>


      <h2>Origins</h2>
        <p>
          The Playfair cipher was invented in 1854 by Charles Wheatstone, an English physicist and 
          inventor. He named the cipher after his friend, Lord Playfair, who strongly promoted its 
          use. This was the first practical digraph substitution cipher.
        </p><p>
          It was used to encrypt tactical messages by British forces in World War I and Australians 
          during World War II. This was because Playfair is relatively fast to use and requires no 
          special equipment — just a pencil and paper. It is no longer used by military forces today 
          since modern computers can easily break it.
        </p>
    </>
  )
}

export default PlayfairAbout;