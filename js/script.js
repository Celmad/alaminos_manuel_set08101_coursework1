// BACK TO TOP BTN BEHAVIOR
document.querySelector('.btn__back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});

// CAESAR CIPHER
const CAESAR_INPUT = document.getElementById("caesar-cipher-input");    
const CAESAR_OUTPUT = document.getElementById("caesar-cipher-output");

function rot13() {
    let str = CAESAR_INPUT.value.toLowerCase();
    let encrypted ="";

    for (let i in str) {
        if (str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) {
            encrypted += str[i];
            continue;
        }
        str.charCodeAt(i) < 110 ? encrypted += String.fromCharCode(str.charCodeAt(i) + 13) : encrypted += String.fromCharCode(str.charCodeAt(i) - 13);
        // Without ternary conditional, it would look like:
        //
        // if (str.charCodeAt(i) < 110) {
        //     encrypted += String.fromCharCode(str.charCodeAt(i) + 13);
        // }
        // else {
        //     encrypted += String.fromCharCode(str.charCodeAt(i) - 13);
        // }
    }
    CAESAR_OUTPUT.value = encrypted;
}

function clearCaesar() {
    CAESAR_INPUT.value = "";
    CAESAR_OUTPUT.value = "";    
}

// REVERSED CIPHER
const REVERSE_INPUT = document.getElementById("reverse-cipher-input");
const REVERSE_OUTPUT = document.getElementById("reverse-cipher-output");

function reverseCipher() {
    let str = REVERSE_INPUT.value;
    let encrypted = str.split("").reverse().join("");
    REVERSE_OUTPUT.value = encrypted;
}

function clearReverse() {
    REVERSE_INPUT.value = "";
    REVERSE_OUTPUT.value = "";    
}

// ATBASH CIPHER
const ATBASH_INPUT = document.getElementById("atbash-cipher-input");
const ATBASH_OUTPUT = document.getElementById("atbash-cipher-output");

function atbashCipher() {
    let str = ATBASH_INPUT.value;
    let encrypted = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((13 - (code - 65)) + 12) + 65);
            }
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((13 - (code - 97)) + 12) + 97);
            }
        }
        encrypted += char;
    }
    ATBASH_OUTPUT.value = encrypted;
}

function clearAtbash() {
    ATBASH_INPUT.value = "";
    ATBASH_OUTPUT.value = "";    
}