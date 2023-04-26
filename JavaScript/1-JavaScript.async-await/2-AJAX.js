
const XMLHttpRequest = require('xhr2')


const request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/name/india',true)
request.send()


request.addEventListener('load',async()=>{
    const [data] = JSON.parse(request.responseText)
    console.log(data)
})



// const request =async  () =>{
//     const url = 'https://restcountries.com/v3.1/name/india'
//     const response = await fetch(url)
//     const data= await response.json()
//     console.log(data)
// }
// request()

