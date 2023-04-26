// input : ['a', 'b', 'c', 'd', 'u'] (only small letter)
// output : [1,2,3,4,20]


let alphabetsArray = ['a','b','c','u']
let numberArr =  alphabetsArray.map((alphabet)=>
    (alphabet.charCodeAt()-97)+1
)
console.log(numberArr)

