const checkError  = () =>{
    try{
        throw new Error("Custom Error from try")
        // redirect to catch after error
        console.log("from try")
    } 
    catch(err){
        console.log(err.message)
    } 
}


checkError()
