
// navigator.geolocation.getCurrentPosition(position => console.log(position),err => console.log(err))

// callback to promise

const getPostion = () =>{
    return new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(resolve,reject)
    })
}

getPostion().then(res=>console.log(res))

