function getFullName(firstName, lastName) {
    let formattedFirstName = (firstName).split('').map((character,index) => {
        if(character!==' ')
        return index===0 ? character.toUpperCase() : character.toLowerCase();
    }).join('');
    
    let formattedLastName = (lastName).split('').map((character,index) => {
        if(character!==' ')
        return index===0 ? character.toUpperCase() : character.toLowerCase();
    }).join('');

    return formattedFirstName + (formattedFirstName ? ' ' : '') + formattedLastName;
}

console.log(getFullName('      ', 'Nguyen'))
console.log(getFullName('Alice', ''))
console.log(getFullName('john', 'pHAm')) 