
const axios = require('axios')


// default settings for the api request or api response

// instead of common we can define a get or post method to use for the specific that request ....
// axios.default.headers.common['auth'] = "authkey"

// interceptors in axios

// it is used to set a config to every request
axios.interceptors.request.use(config=>{
    

    console.log("req send successfully")
    config.headers["auth"] = "this is the auth token"

    return config;
})


const fetchData =  async()=>{
    const res = await axios.get('https://restcountries.com/v3.1/name/india')
    console.log("axios data",res.data)
}


fetchData()

