import './Base64.css';
import Base64Table from '../../assets/Info/Base64Table.png';

function Base64About() {
   return (
      <>
         <h3>How to Use</h3>
         <p>
            Enter the text to encode or decode in the top text box. Then click 'Encode' or 'Decode'
            to transform the text, which will appear in the results box below. This encoding
            currently uses the standard UTF-8 encoding.
         </p>

         <h3>What is Base64 Encoding?</h3>
         <p>
            Base64 encoding is a technique to convert binary data into ASCII text format, which
            consists of a set of 64 different characters (hence the name "Base64").<br /><br />

            The standard Base64 encoding (RFC 4648) uses uppercase letters (A-Z), lowercase letters
            (a-z), digits (0-9), and two special characters (+ and /). An additional character,
            "=", is used as a padding character when the binary data being encoded is not divisible
            by 3.<br /><br />

            Base64 is widely used in many applications such as embedding binary data such as files
            and images, and encoding data that may be unsupported or damaged during data transfer.
            It is useful when binary data needs to be stored or transferred over text-based protocols.
            <br /><br />

            Base64 encoding causes an overhead of 33% larger than the original data. This is because
            during encoding, Base64 replaces every three bytes with four bytes and (if necessary)
            adds padding characters, so the result is a multiple of four.
         </p>


         <h3>Encode It!</h3>
         <p>
            Base64 encoding a text string starts off by converting each character to its binary
            equivalent. Take the following example with the plaintext 'word':
         </p>

         <table id="b64Example">
            <tbody>
               <tr>
                  <th style={{ paddingRight: 20 }}>Letter</th>
                  <td>w</td>
                  <td>o</td>
                  <td>r</td>
                  <td>d</td>
               </tr>
               <tr>
                  <th style={{ paddingRight: 20 }}>Binary</th>
                  <td>01110111</td>
                  <td>01101111</td>
                  <td>01110010</td>
                  <td>01100100</td>
               </tr>
            </tbody>
         </table>
         <br />

         <p>
            Next, the binary characters are split into groups of 6 bits, adding extra 0s at the end
            if necessary.
         </p>

         <table id="b64Example">
            <tbody>
               <tr>
                  <th style={{ paddingRight: 20 }}>8-bit Binary</th>
                  <td colSpan={2}>01110111</td>
                  <td colSpan={2}>01101111</td>
                  <td colSpan={2}>01110010</td>
                  <td colSpan={2}>01100100</td>
               </tr>
               <tr>
                  <th style={{ paddingRight: 20 }}>6-bit Binary</th>
                  <td>011101</td>
                  <td colSpan={2}>110110</td>
                  <td colSpan={2}>111101</td>
                  <td>110010</td>
                  <td>011001</td>
                  <td>00(0000)</td>
               </tr>
            </tbody>
         </table>
         <br />

         <p>
            Then convert each 6-bit group to its matching character from a predefined 64-character
            alphabet/array. The table below shows the character for each binary, and another table 
            showing the alphabet array for the RFC 4648 standard is provided:
         </p>

         <table id="b64Example">
            <tbody>
               <tr>
                  <th style={{ paddingRight: 20 }}>6-bit Binary</th>
                  <td>011101</td>
                  <td>110110</td>
                  <td>111101</td>
                  <td>110010</td>
                  <td>011001</td>
                  <td>000000</td>
               </tr>
               <tr>
                  <th style={{ paddingRight: 20 }}>Base64 Value</th>
                  <td>d</td>
                  <td>2</td>
                  <td>9</td>
                  <td>y</td>
                  <td>Z</td>
                  <td>A</td>
               </tr>
            </tbody>
         </table>
         <br />

         <figure>
            <img src={Base64Table} className="base64Table" alt="Base64 Table" />
            <figcaption className="base64TableText">A Base64 Table. Image source: Wikipedia.</figcaption>
         </figure>

         <p>
            Finally, the Base64 standard requires groups of 4 characters. If necessary, add
            the filler character = to the end of the string until the length of the string is
            perfectly divisible by 4.<br /><br />

            Here, <b>d29yZA</b>, which has 6 characters, needs to be 8 characters (a multiple
            of 4), so two = signs are added to create the final encoded message, <b>d29yZA==</b>.
         </p>

         <h3>Decode It!</h3>
         <p>
            Decoding Base64 data is the reverse of the encoding process: convert each character to
            its 6-bit binary equivalent, then recombine these binaries to find the original binary
            data. Ignore all filler characters like =.

         </p>
         <p>
            Example: For the message <b>a2V5cw==</b>, ignore the 2 = signs. The characters a, 2,
            V, 5, c, and w are represented in the Base64 Table as:
         </p>
         <p className="binary">
            011010 110110 010101 111001 011100
         </p>

         <p>
            Combining and splitting these into 8-bit binary gives:
         </p>
         <p className="binary">
            01101011 01100101 01111001 01110011

         </p>
         <p>
            Finally, the 8-bit binaries are decoded based on the original encoding (usually UTF-8
            Unicode or ASCII).
         </p>
         <p>
            <span className="binary">01101011 01100101 01111001 01110011</span> corresponds to
            the 4 characters '<b>keys</b>'.
         </p>

         <h3>How Easy is it to Break?</h3>
         <p>
            Base64 is not an form of encryption and should never be used to encrypt data. The
            algorithm to encode text can be reversed for decoding, so it is very easy to encrypt
            and decrypt text.
         </p>

         <h3>Origins</h3>
         <p>

            Early computer systems could only handle 128 ASCII characters. While this was fine
            for English text, problems arise when transmitting binary data like images or files.
            Base64 was created to solve this problem by converting binary data into characters that
            could be safely transmitted.<br /><br />

            The algorithm was first described by <a href="https://datatracker.ietf.org/doc/html/rfc989" target="_blank">RFC 989</a> in 1987,
            which describes the <a href="https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail" target="_blank">
               Privacy-enhanced Electronic Mail (PEM)</a> protocol. PEM describes the algorithm as a
            "printable encoding" scheme. <a href="https://datatracker.ietf.org/doc/html/rfc1341" target="_blank">RFC 1341</a> named
            it as “Base64” in 1992. Using 64 characters (as opposed to 16 and 32, for instance)
            was found to be the best balance between efficiency and practicality, so it became
            the most widely used encoding method.<br /><br />

            The current set of 64 characters was described in <a href="https://datatracker.ietf.org/doc/html/rfc1421" target="_blank">RFC 1421</a> as
            letters, numbers, and the + and / symbols, with = as a padding character. The algorithm
            has evolved over the years, with <a href="https://datatracker.ietf.org/doc/html/rfc4648#section-4" target="_blank">RFC 4648</a> describing
            the current standard.
         </p>
      </>
   )
}

export default Base64About;