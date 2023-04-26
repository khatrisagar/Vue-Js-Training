let function1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data = "hello1"
            resolve(data)
            console.log(data)
        }, 9000);
    });
};
let function2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data = "hello2"
            resolve(data)
            console.log(data)
        }, 7000);
    });
};

let caller = async () => {
    await function1();
    await function2();
};

caller();
