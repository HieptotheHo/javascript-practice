function isEqual(obj1,obj2) {
    if(Object.keys(obj1).length !==Object.keys(obj2).length) return false;
    for(prop in obj1) {
        if (obj1[prop] !== obj2[prop]) return false;
    }
    return true;
}
console.log(isEqual({}, {}))
console.log(isEqual({ name: 'Bob' }, { name: 'Alice' }));
console.log(isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 }));

console.log(isEqual({ name: 'Bob' }, { name: 'Bob'}));