const newFunction =  ()=>{
    return new Promise((resolve, reject)=>{
     setTimeout(() => {
        resolve('Hello after 3 sec')
     }, 3000);   
    })
}
const newFunction2 =  ()=>{
    return new Promise((resolve, reject)=>{
     setTimeout(() => {
        reject('Hello after 2 sec')
     }, 2000);   
    })
}
async function verify(){
    try {
        let data = await newFunction()
        console.log(data);
        let data2 = await newFunction2()
        console.log(data2);
    }
    catch(err){
        console.log("err",err);
    }
}

verify()