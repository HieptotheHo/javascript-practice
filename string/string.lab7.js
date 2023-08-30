function getFullName(firstName, lastName) {

    return firstName + (firstName ? ' ' : '') + lastName;
}

console.log(getFullName('', 'Nguyen'))
console.log(getFullName('Alice', ''))
console.log(getFullName('john', 'pHAm')) 