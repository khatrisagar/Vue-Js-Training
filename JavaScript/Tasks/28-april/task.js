require('dotenv').config()

// task 1 --> promicify the setTimeout to consume as promiss insted of callbacks


const setTimeoutPromisify = (time) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, time*1000)
    })
}

// setTimeoutPromisify()

// -------------------------------------->Task 2 <--------------------------------------------

// task 2 --> create axios like function which will go resolve promiss when status is in 2XX to 3XX status all other are rejected state

const mainAxios = () =>{
    const get = async (api) => {
        try{

            const response = await fetch(`${api}`,{
                method: 'GET'
            })
            const status = response.status

            if(status >= 200 && status <= 300){
                const getResponse = response.json()
                return getResponse
            }

            else{
                throw new Error(response.statusText)
            }
        }

        catch(err){
            console.log("getErr",err)
        }

    }

    const post = async (api,options) => {
        try{
            const response = await fetch(`${api}`,{
                method: "POST",
                headers: options.headers,
                body: options.body
            })
    
            const postResponse = await response.json()
    
            return postResponse

        }   
        catch(err){
            console.log("postErr",err)
        }
    }
    return{
        get,post
    }
}
const axios = mainAxios()
// axios.get()
// axios.post()


// -------------------------------------->Task 3 <--------------------------------------------



//task 3 --> call this 7 apis and just log the data https://jsonplaceholder.typicode.com/todos/1 to 7

const fetchData = async (n) =>{
    try{
        const data = await axios.get(`https://jsonplaceholder.typicode.com/todos/${n}`)
        console.log(data)
    }
    catch(err){
        console.log("fetchDataErr",err)
    }
}
// fetchData(5)


const logApiData =async (range) =>{
    try{
        for(let i = 1; i<=range; i++){
            await fetchData(i)
            await setTimeoutPromisify(2)
        }
    }
    catch(err){
        console.log("logApiDataErr",err)
    }
    
}

// logApiData(7)

// -------------------------------------->Task 4 <--------------------------------------------


// task 4 --> use above developed function to post data at endpoint

const postData = async ()=>{
    try{
        const data = {
            activityId: "64325f409942ad7ccff8484d",
    
            activity: {
            activityVisibility: {name:"sagar", isVerified: false},
            attachedRoles: ['admin','manager','users'],
            audience: "KIDS",
            category: "5c67e5a1c7cc90124ccfaf4b",
            created_at: "2011-10-05T14:48:00.000Z",
            editorial: true,
            free: true,
            groupSortPriority: 4,
            languageCode: ['he', 'en'],
            level: null,
            mediaType: "Photo",
            name: {en: "test"},
            printable: false
            }
        }
    
        const response = await axios.post(process.env.API_ROUTE, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${process.env.AUTH_TOKEN}`
            },
            body: JSON.stringify(data),
        })
        
        console.log("responseeeee",response)
    }
    catch(err){
        console.log("postErr",err)
    }
}

// postData()