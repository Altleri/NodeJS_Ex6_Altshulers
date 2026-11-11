const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'text');

// Read the three input files.
const text1 = fs.readFileSync(`${dirPath}/1.txt`, 'utf-8');
const text2 = fs.readFileSync(`${dirPath}/2.txt`, 'utf-8');
const text3 = fs.readFileSync(`${dirPath}/3.txt`, 'utf-8');

// Make an array from each file, using one line for each item.
const arr1 = text1.split('\r\n');
const arr2 = text2.split('\r\n');
const arr3 = text3.split('\r\n');

// These numbers show how many lines were added from each file.
let i = 1;
let a = 0;
let b = 0;
let c = 0;
let textOut = '';

// Continue until all lines from the three files are used.
while (a < arr1.length || b < arr2.length || c < arr3.length) {
    // Add i lines from the first file.
    for (let j = 0; j < i && a < arr1.length; j++) {
        textOut += arr1[a] + '\r\n';
        a++;
    }

    // Add i lines from the second file.
    for (let j = 0; j < i && b < arr2.length; j++) {
        textOut += arr2[b] + '\r\n';
        b++;
    }

    // Add i lines from the third file.
    for (let j = 0; j < i && c < arr3.length; j++) {
        textOut += arr3[c] + '\r\n';
        c++;
    }

    i++;
}

// Save the result in the output file.
fs.writeFileSync(`${dirPath}/output.txt`, textOut);
console.log('File created successfully');
