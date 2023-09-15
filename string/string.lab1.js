// HỌC REGEX

function removeVowel(str) {
    return str.split('').map((character)=>{
        if(!/[aeiou]/.test(character)) return character;
    }).join('');
}

console.log(removeVowel('say hello'));