// input : [{name: 'abc', age: 20}, {name: 'xyz', age: 30}]
// output : ['abc', 'xyz']


const inputArr = [{name: 'abc', age: 20}, {name: 'xyz', age: 30}]


const outputArr = inputArr.map(arrObj=>(
    arrObj.name
))
console.log(outputArr)