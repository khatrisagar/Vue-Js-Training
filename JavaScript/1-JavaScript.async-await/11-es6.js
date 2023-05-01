// function test1(){

//     return "Hello Sagar"
// }


const test2 = () =>{
    const h = "test hello fucntion to return a value"
    return h
}


// const headingTag = document.getElementById('headingTag')
// headingTag.innerHTML = test2()

//  function stopSubmit(){
//     return false
// }


const getIP = async()=>{
    const response =  await fetch('https://api.ipify.org?format=json')
    const data =  await response.json()
    return data
}

const verifyIP = async () =>{
    const ipData = await getIP()
    if(ipData.ip == '103.215.158.90'){
        return true
    }
    else{
        return false
    }
}

const stopSubmit = (event) =>{
    event.preventDefault()
    let d;
    verifyIP().then(data=> {
        console.log("data",data)
        d = data
        if(data == false){
            console.log("fffffalse")
            return false
        }
        else{
            console.log("ttttrue")
            return true
        }
    })
    // setTimeout(()=>{
    //     console.log(d)
    //     return d
    // },2000)
}


// headingTag.innerHTML = stopSubmit()

const check = async(event)=>{
    console.log("aaaaaaaa", stopSubmit(event))
    // check(event)
    
    const test = document.getElementById('test')
    test.innerHTML = await stopSubmit(event)
}
check()