const wait = (second) =>{
    return new Promise ((resolve)=>{
        console.log("call")
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
const imagesArray = [
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgUHI4QY359Y_rn-iIXkqKfIYpAWY7yWJcMlL2qxS1A&s' ,
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43wDN0j33I98NSoGA_Hm_jgIt1nYVyDWlYw&usqp=CAU',
'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwb2YlMjBpbmRpYXxlbnwwfHwwfHw%3D&w=1000&q=80',

]

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


    printNum()

//         imageContainer.innerHTML =''


//    for(image of imagesArray){
//         await showImage(image) 
//         await wait(2)
//    }


    // to resolve a pending promises 
    // let imageElementsPromisify = await Promise.all(imgs)
    // console.log(imageElementsPromisify)
}

const printNum = async() =>{

    const arr = new Array(5).fill(0)
    let i = 1

    // arr.map(async()=>{
    //     console.log(i)
    //     i++
    //     await wait(2)
    // })
    // for(val of arr){
    // console.log(i)
    // i++
    //     await wait(2)
    // }

    arr.forEach(async()=>{
        console.log(i)
        i++
        await wait(2)
    })
}
// we can't use forEach loop with asynchronous functions.
