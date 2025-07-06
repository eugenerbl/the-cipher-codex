// Playfair Cipher encryption and decryption
// Modified from quinton-c's implementation (https://github.com/quinton-c/playfaircipher)

// move a char right or down for encryption: formula for new index (5x5 grid) is new = (old + 1) % 5
const ENCRYPT_OFFSET = 1;
// move a char left or up for decryption: formula for new index (5x5 grid) is new = (old + 4) % 5
// (this is equal to subtracting index by 1)
const DECRYPT_OFFSET = 4;
// letters most commonly used to pad when there are extra or double characters
const COMMON_PADDING_LETTERS = ['X', 'Q', 'Z'];
// List of notes regarding any changes to text and padding characters
let notes = [];


function addNote(message) {
    if(!notes.includes(message)) {
        notes.push(message);
    }
    return;
}

// Creates a 5x5 grid of letters based on the 25-char keyword
function createGrid(keyword) {
    let grid = [];
    for (let i = 0; i < keyword.length; i += 5) {
        let subArray = [keyword[i], keyword[i+1], keyword[i+2], keyword[i+3], keyword[i+4]];
        grid.push(subArray);
    }
    return grid;
}

// Converts plaintext to uppercase, removes non-letters,
// and replaces instances of omitted letter with replacement letter
function cleanText(text, omitLetter, repLetter) {
    let plaintext = text.toUpperCase().replace(/[^A-Z]/g, "");

    if (plaintext.toUpperCase().includes(omitLetter.toUpperCase())) {
        addNote(`Note: Found omitted letter ${omitLetter} in text. Replaced with ${repLetter}.`);
    }

    return plaintext.replaceAll(omitLetter, repLetter);
}

// Selects an alternate padding character
// Goes through common padding letters and uses first one that is not the padding or omitted letter
function choosePadChar(omitLetter, padLetter) {
    for (let ltr of COMMON_PADDING_LETTERS) {
        if (ltr !== padLetter && ltr !== omitLetter) {
            addNote(`Note: Double padding letter '${padLetter}${padLetter}' was created. Used '${ltr}' as padding letter here to make '${padLetter}${ltr} ${padLetter}'.`);
            return ltr;
        }
    }
    return padLetter;
}

// Groups characters into array of 2-char pairs
// Adds padding characters if there are double or leftover letters
function groupChars(plaintext, omitLetter, padLetter) {
    let inputArray = [];

    for (let i = 0; i < plaintext.length; i += 2) {
        // if one character left at end of plaintext or double letters found
        if (i + 1 === plaintext.length || plaintext[i] === plaintext[i + 1]) {
            // if padding letter is same as current letter...
            if (plaintext[i] === padLetter) {
                // choose an alternate padding character
                let newPad = choosePadChar(omitLetter, padLetter);
                plaintext = plaintext.slice(0, i + 1) + newPad + plaintext.slice(i + 1);
            }
            // otherwise add normal padding letter
            else {
                plaintext = plaintext.slice(0, i + 1) + padLetter + plaintext.slice(i + 1);
            }
        }
        let subArray = [plaintext[i], plaintext[i + 1]];
        inputArray.push(subArray);
    };
    return inputArray;
}

// Iterates through the playfair grid array to find the location of a character
function getCoord(char, grid) {

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (char === grid[row][col]) {
                return { row: row, col: col };
            }
        }
    };
    return null; // letter not found
};

// Changes all letters (2 at a time) based on rules and locations in the playfair grid
// charPairs = plaintext as an array of 2-character pairs with padding added
// grid = the 5x5 playfair grid
// offset = value added to indicate the direction we go when moving certain coordinates
function transformLetters(charPairs, grid, offset) {
    let output = '';

    charPairs.forEach(digram => {
        
        let coord1 = getCoord(digram[0], grid);
        let coord2 = getCoord(digram[1], grid);

        // letters on same row -> move col index right (encryption) or left (decryption) by 1
        if (coord1.row == coord2.row) {
            coord1.col = (coord1.col + offset) % 5;
            coord2.col = (coord2.col + offset) % 5;
        }
        // same col -> move row index down (encryption) or up (decryption) by 1
        else if (coord1.col == coord2.col) {
            coord1.row = (coord1.row + offset) % 5;
            coord2.row = (coord2.row + offset) % 5;
        }
        // different row and col -> move to opposite corners of the "box" on left or right
        else {
            let colDiff = Math.abs(coord1.col - coord2.col);
            if (coord1.col > coord2.col) {
                coord1.col = coord1.col - colDiff;
                coord2.col = coord2.col + colDiff;
            } 
            else {      // coord1.col < coord2.col; = is covered in previous else if
                coord1.col = coord1.col + colDiff;
                coord2.col = coord2.col - colDiff;
            }
        };

        // add encrypted letters to ciphertext
        output += grid[coord1.row][coord1.col] + grid[coord2.row][coord2.col];
    });

    return output;
}


export function encrypt(plainText, keyword, omitLtr, repLtr, padLtr) {
    
    notes.length = 0;   // Clear notes array
    const playfairGrid = createGrid(keyword);                       // Create 5x5 playfair grid
    const cleanPlain = cleanText(plainText, omitLtr, repLtr);       // Remove non-letters and omitted letter
    const inputArray = groupChars(cleanPlain, omitLtr, padLtr);     // Add padding and group characters into pairs
    const transformedText = transformLetters(inputArray, playfairGrid, ENCRYPT_OFFSET);     // encrypt chars with grid
    
    return [notes, transformedText];
};

// Decrypt follows same processing steps as in encrypt, but with DECRYPT_OFFSET
export function decrypt(plainText, keyword, omitLtr, repLtr, padLtr) {
    
    notes.length = 0;
    const playfairGrid = createGrid(keyword);
    const cleanPlain = cleanText(plainText, omitLtr, repLtr);
    const inputArray = groupChars(cleanPlain, omitLtr, padLtr);
    const transformedText = transformLetters(inputArray, playfairGrid, DECRYPT_OFFSET);
    
    return [notes, transformedText];
};