function lastLetters(word) {
    if(word.length >= 2 && word.length <= 100){
        return word.split('').reverse().join('  ').substring(0, 4);
    }
}

console.log(lastLetters('APPLE'));