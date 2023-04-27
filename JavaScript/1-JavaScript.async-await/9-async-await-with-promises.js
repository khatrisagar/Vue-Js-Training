// Promise using async and await 


const function1 = async() =>{
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        const data = await response.json()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
// function1()





// running promises in parallel

const fetchCapital = async(name)=>{
    const response1 = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const [data]= await response1.json()
    return data
}


const function2 = async() =>{
    try{
        
        const data1 = fetchCapital("india")
        const data2 = fetchCapital("portugal")
        const data3 = fetchCapital("canada")

        const [data11,data22,data33] = await Promise.all([data1,data2,data3])

        // console.log(data1.capital[0])
        // console.log(data2.capital[0])
        // console.log(data3.capital[0])
        console.log(data11.capital[0],data22.capital[0],data33.capital[0])
    }
    catch(err){
        console.log(err)
    }
}
// function2()
