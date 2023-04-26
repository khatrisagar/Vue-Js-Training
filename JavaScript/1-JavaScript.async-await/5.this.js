const test1 = {name: ()=>{
    console.log("test1",this)
}
}
// returns a global object
test1.name()


const test2  =  {name2:this}
// returns a global object
console.log("test2",test2.name2)

const test3 =()=>{
    console.log("test3",this)
}
// returns a global object
test3()

const test5 = {name5: function(){
    console.log(this)
}}
// returns a fucntion
test5.name5()



function test6(){
    console.log("test6",this)
}
// global object
test6()