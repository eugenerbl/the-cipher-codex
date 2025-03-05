import './Base64.css';
import Base64Table from '../../assets/Info/Base64Table.png';

function Base64About() {
   return (
      <>
         <h3>How to Use</h3>
         <p>
            Enter your message in the top box. Click 'Encode' or 'Decode' to see the transformed 
            text in the results box below. This tool uses the standard UTF-8 encoding.
         </p>

         <h3>What is Base64 Encoding?</h3>
         <p>
            Base64 encoding is a technique that converts binary data into ASCII text format. It uses
            a set of 64 different characters (hence the name "Base64").
         </p>
         <p>
            The standard Base64 encoding uses uppercase letters (A-Z), lowercase letters (a-z),
            digits (0-9), and two special characters (+ and /). An additional character, "=", is
            used as a padding character when the encoded string's length is not divisible by 4.
         </p>
         <p>
            Base64 is often used to store or transmit binary data over text-based protocols. It is
            widely used in applications such as embedding binary data like files and images, as well
            as encoding data that may be unsupported or damaged during transfer.
         </p>
         <p>
            Base64 encoding increases the size of the original data by about 33%. This overhead occurs
            because Base64 replaces every three bytes of data with four bytes and, if necessary, adds
            padding characters to ensure the result is a multiple of four. This is important to
            consider in cases where storage or bandwidth is a concern.
         </p>


         <h3>Encode It!</h3>
         <p>
            Encoding a text string using Base64 begins by converting each character into binary. 
            Take the following example with the plaintext "word":
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
            The binary digits are grouped into sets of 6 bits, adding extra zeros at the end if necessary.
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
            set. Table 1 shows the binary values and the corresponding characters for the Base64 
            encoding standard.
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
            <figcaption className="base64TableText">Table 1: A Base64 Table. Image source: Wikipedia.</figcaption>
         </figure>

         <p>
            Finally, Base64 requires the encoded string to consist of groups of 4 characters. If the 
            string's length is not a multiple of 4, add padding characters "=" to the end of the 
            string until the length is correct.<br /><br />

            Here, <b>d29yZA</b>, which has 6 characters, needs to be 8 characters (a multiple of 4). 
            Thus, we add two "=" signs to create the final encoded message, <b>d29yZA==</b>.
         </p>

         <h3>Decode It!</h3>
         <p>
            Decoding Base64 data is the reverse of the encoding process. First, convert each character 
            to its 6-bit binary equivalent. Then, combine these binary values to find the original 
            binary data. Ignore all padding characters such as "=".
         </p>
         <p>
            Example: For the message a2V5cw==, ignore the two "=" signs. The characters a, 2, V, 5, 
            c, and w correspond to these values in the Base64 Table:
         </p>
         <p className="binary">
            011010 110110 010101 111001 011100
         </p>

         <p>
            Combining and splitting these into 8-bit binary values gives:
         </p>
         <p className="binary">
            01101011 01100101 01111001 01110011

         </p>
         <p>
            Finally, decode the 8-bit binary values based on the original encoding (usually UTF-8
            Unicode or ASCII).
         </p>
         <p>
            <span className="binary">01101011 01100101 01111001 01110011</span> corresponds to
            the 4 characters <b>keys</b>.
         </p>

         <h3>How Easy is it to Break?</h3>
         <p>
            Base64 is not a form of encryption and should not be used to encrypt data. The encoding 
            algorithm can be easily reversed, making it simple to decode text. Base64 encoding is 
            often used alongside proper encryption methods to encode data, but it is not a replacement 
            for encryption itself.
         </p>

         <h3>Origins</h3>
         <p>
            Early computer systems could only handle 128 ASCII characters. While this worked for 
            English text, it caused problems when transmitting binary data such as images or files. 
            Base64 was created to solve this problem by converting binary data into characters that 
            could be safely transmitted.<br /><br />

            The algorithm was first described by <a href="https://datatracker.ietf.org/doc/html/rfc989" target="_blank">RFC 989</a> in 1987 
            as part of the <a href="https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail" target="_blank"> Privacy-enhanced Electronic Mail (PEM)</a> protocol. 
            PEM referred to the algorithm as a "printable encoding" scheme. <a href="https://datatracker.ietf.org/doc/html/rfc1341" target="_blank">RFC 1341</a> in 
            1992 gave it the name "Base64". Using 64 characters (as opposed to other options like 16 
            and 32) offered the best balance between efficiency and practicality, so it became the 
            most widely used encoding method.<br /><br />

            The current set of 64 characters was described in <a href="https://datatracker.ietf.org/doc/html/rfc1421" target="_blank">RFC 1421</a>, 
            consisting of letters, numbers, and the symbols + and /, with = as a padding character. 
            The algorithm has evolved over the years, with <a href="https://datatracker.ietf.org/doc/html/rfc4648#section-4" target="_blank">RFC 4648</a> being 
            the current standard.
         </p>
      </>
   )
}

export default Base64About;