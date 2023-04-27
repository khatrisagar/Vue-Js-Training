// input: [false,1,0,1,2,0,1,3,"a"]
// output: [false,1,1,2,1,3,"a",0,0]

const inputArr = [false,1,0,1,2,0,1,3,"a"]

const outputArr = (inputArr.filter((ele)=> ele !== 0)).concat(inputArr.filter((ele)=> ele === 0))

const outputArr2 = [...(inputArr.filter((ele)=> ele !== 0)),...(inputArr.filter((ele)=> ele === 0))]

console.log(outputArr2)
