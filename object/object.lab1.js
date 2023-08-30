function cloneObject(obj) {
    let clonedObj = {};
   
    for (var prop in obj) {
        clonedObj[prop] = obj[prop];
    }
    return clonedObj;
}

const studentA = { name: 'Bob', math: 9 };
const studentB = cloneObject(studentA);

console.log(studentA === studentB); // should be false
console.log(studentB.name); // Bob
console.log(studentB.math); // 9
