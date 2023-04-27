console.log('start timer')
setTimeout(()=>{
    console.log("timer after 0 second")
},0)
setTimeout(()=>{
    Promise.resolve("Promise in time out").then(res=> console.log(res))
},0)

// it will creates an promise and resolve it.
Promise.resolve("Promise 1").then(res=> console.log(res))

// i takes arround 10+ second
Promise.resolve("Promise 2").then(res=>{
    // for(let i = 0; i<10000000000; i++){}
    console.log(res)
})


console.log('end timer')


// promises are execute in microtask queue 
// and callback are execute in callback queue
// microtask queue have a more priority than callback queue.

// if microtask takes more time to run than the timer goes delay and callback function is not run after 0 second instead of this it will run little bit later





// creating promise

const newPromise =  new Promise(function(resolve,reject){
    // this function is called a executer
    const number =  Math.random()
    if(number >= 0.5){
        resolve("True")
    }
    else{
        reject('False')
    }
})

newPromise
.then(res=>console.log(res))
.catch(err=>console.log(err))


// promisify --> convert a collback function into promise

const wait  =  (second)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,second*1000)
    })
}

wait(2).then(()=> {
    console.log('i am waiting..')
    return wait(3)
}).then(()=>{
    console.log('3 sec more')
})


