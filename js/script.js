// CAESAR CIPHER
var caesarInput = document.getElementById("caesar-cipher-input");    
var caesarOutput = document.getElementById("caesar-cipher-output");

function rot13() {
    var str = caesarInput.value.toLowerCase();
    var encrypted ="";

    for (var i in str) {
        if (str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) {
            encrypted += str[i];
            continue;
        }
        if (str.charCodeAt(i) < 110) {
            encrypted += String.fromCharCode(str.charCodeAt(i) + 13);
        }
        else {
            encrypted += String.fromCharCode(str.charCodeAt(i) - 13);
        }
    }
    caesarOutput.value = encrypted;
}

function clearCaesar() {
    caesarInput.value = "";
    caesarOutput.value = "";    
}

// REVERSED CIPHER
var reverseInput = document.getElementById("reverse-cipher-input");
var reverseOutput = document.getElementById("reverse-cipher-output");

function reverseCipher() {
    var str = reverseInput.value;
    var encrypted = str.split("").reverse().join("");
    reverseOutput.value = encrypted;
}

function clearReverse() {
    reverseInput.value = "";
    reverseOutput.value = "";    
}