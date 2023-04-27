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
// returns a function
test5.name5()



function test6(){
    console.log("test6",this)
}
// global object
test6()


const test7 = {name7: {age: ()=>{
    const f1 =()=>{
        // returns global object
        console.log("test7",this)
        const f2 =()=>{
            // returns global object
            console.log("test7",this)
        }
        f2()
    }
    f1()
}}}
test7.name7.age()


const test8 = {name8: {age: function c1(){
    function c2(){
        // returns a global object
        console.log("test8",this)
    }
    c2()
}}}
test8.name8.age()


