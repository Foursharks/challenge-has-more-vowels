// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

// If the phrase is over half vowels, it should return true:

// hasMoreVowels('moose')
// // true
// If it’s half vowels (or less), it’s false:

// hasMoreVowels('mice')
// // false

// hasMoreVowels('graph')
// // false
// Don’t consider “y” as a vowel:

// hasMoreVowels('yay')
// // false
// Uppercase vowels are still vowels:

// hasMoreVowels('Aal')
// // true

function hasMoreVowels(word){
    let vowels = [`a`, `e`, `i`, `o`, `u`]; 
    let vowelCount = 0; 
    let consenantCount = 0; 
    for(i=0; i<word.length; i++){
        if(vowels.includes(word[i])){
            vowelCount++; 
        }
        else{
            consenantCount++;
        }
    }
    if (vowelCount > consenantCount){
        return true; 
    }
    else {
        return false; 
    }
}
console.log(hasMoreVowels(`bed`)); 

