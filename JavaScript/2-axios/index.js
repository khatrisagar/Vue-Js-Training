const axios = require("axios");

// console.log(axios.isCancel("Dasdsa"));

// common request which is required an method url and data
const postData = async () => {
    const post = await axios({
        method: "post",
        url: "https://jsonplaceholder.typicode.com/posts/",
        data: {
            userId: 101,
            title: "fsdhjfsdklf",
            body: " fijsdihfisdfsdojflsfkd",
        },
    });
    console.log(post);
};

// aliases where we didn't need to specify mehtods, url or data
const getData = async () => {
    const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/",
        { params: { _limit: 5 } }
    );
    console.log(data);
};

// getData();

const postDataa = async () => {
    const post = await axios.post(
        "https://jsonplaceholder.typicode.com/posts/",
        {
            userId: 101,
            title: "fsdhjfsdklf",
            body: " fijsdihfisdfsdojflsfkd",
        }
    );
    console.log(post);
};
// postData();
// postDataa();

// instance method in axios

// put used to update an entire resource and patach used to update in specifi things only
// put removes user id but patch update the only specified things not remove the things which is not specified

const putData = async () => {
    const data = await axios.patch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            title: "updated",
            body: " fijsdihfisdfsdojflsfkd",
        }
    );
    console.log(data);
};
// putData();

// Instances
// it is a custom configuration to for each api call
const instance = axios.create({
    baseURL: "https://some-domain.com/api/",
    headers: {
        Authorization: "fhdjkashff_fnsdkf.dfasd",
    },
});

const check = async () => {
    const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/",
        { params: { _limit: 5 } }
    );
    console.log(data);
};
check();
//
// config defaults in axios request used to set a default configuration at globally

// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

// interceptors used to do something before request to api or after getting requests from api
// for request
axios.interceptors.request.use((config) => {
    config.headers["Authorization"] = "AuthToken";
    return config;
});
// for response
const interceptor = axios.interceptors.response.use((config) => {
    // do something
    return config;
});

// axios.interceptors.request.clear();
// to remove inteceptor after the perticular action
// axios.interceptors.request.eject(interceptor);

// usewith insatance
// instance.interceptors.response.use(() => {});
