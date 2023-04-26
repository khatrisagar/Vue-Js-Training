// input : [1,2,3,2,4,3]
// output : [1,2,3,4]

const inputArr = [1,2,3,2,4,3]

const outputArr = inputArr.filter((value,index,array)=>{
    return array.indexOf(value) === index
})

console.log(outputArr)


// using set
const outputArr2 = new Set(inputArr)
console.log([...outputArr2])