const promise1 =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hello from promise1')
    },2000)
})
const promise2 =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hello from promise2')
    },9000)
})
const promise3 =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Hello from promise3')
    },3000)
})


// used to resolve all the promises together

// Promise.all([promise1,promise2,promise3]).then(res=>console.log(res)).catch(err=> console.log("err",err))

// Promise.resolve(promise3).then(value=>console.log(value)).catch(err=> console.log("err",err))



// Promise.allSettled take input as a array of all promsies and return a single promise

const promises =  [promise1,promise2,promise3]
// Promise.allSettled(promises).then(value=>console.log(value))



// Promise.any returns a fullfield value if any of the given promise is resolved and if all the promise are rejected it returns the rejected err
// Promise.any(promises).then((value) => console.log(value)).catch(err=> console.log("err",err));


// Promise.race returns a first resolve promise or rejected promise
Promise.race(promises).then((value) => console.log(value)).catch(err=> console.log("err",err));


// diffrence between Promise.race and Promise.any is that rejected promises are ignored in any