const data  =  {
    message:  "Hello",
    message2: "Hello !!!"
}


const handler=  {
    set(target, key, value){
        if(key === message){
            target.message2 = value + '!!!'
        }
        target.message = value
    }
}


const proxy  =  new Proxy(data,handler)

console.log(proxy.messages)

proxy.message =  "Hey"
console.log(proxy.message2)
