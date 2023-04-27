const wait = (second) =>{
    return new Promise ((resolve)=>{
        setTimeout(resolve, second * 1000)
    })
}

const imageContainer = document.getElementById('imgContainer')

const showImage = (imageUrl)=>{
    return new Promise((resolve,reject)=>{
        const img =  document.createElement('img')

        img.src = imageUrl

        img.addEventListener('load',()=>{
            imageContainer.appendChild(img)
            resolve(img)
        })
        img.addEventListener('error',()=>{
            reject('Issue With image')
        })
    })
}
const imagesArray = ['https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgUHI4QY359Y_rn-iIXkqKfIYpAWY7yWJcMlL2qxS1A&s' ]

const loadSingleImage = async () =>{
    try{
       let img = await showImage(imagesArray[0])
       await wait(2);
       img.style.display = 'none'
       await wait(4);
       img = await showImage(imagesArray[1])
       await wait(2);
       img.style.display = 'none'
    }
    catch(err){
        console.log(err)
    }
}

const loadAllImage = async()=>{
    // imagesArray.forEach(async(img)=>{
    //     await showImage(img); 
    //     await wait(5);
    // })
    for(let i = 0; i<imagesArray.length; i++){
        await showImage(imagesArray[i]) 
        await wait(2)
    }
    // to resolve a pending promises 
    // let imageElementsPromisify = await Promise.all(imgs)
    // console.log(imageElementsPromisify)


}

const printNum =async () =>{
    for(let i = 0; i<10; i++){
        console.log(i)
        await wait(2)
    }
}
