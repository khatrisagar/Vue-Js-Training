// input: [false,1,0,1,2,0,1,3,"a"]
// output: [false,1,1,2,1,3,"a",0,0]

const inputArr = [false,1,0,1,2,0,1,3,"a"]

let z = []
const outputArr = inputArr.filter((ele,index,array)=>{
    if(ele !== 0){
        return array
    }
    if(ele ===0){
        z.push(0)
    }
})
let filterOutput = outputArr.concat(z)

console.log(filterOutput)
