function hello(){
    console.log("hello")
}

hello()
hello()




welcome()
//hosting -- calling before declaring
function welcome(){
    console.log('welcome')
}

//parameterised function
function greet(name="there "){
    console.log(`hi ${name}`)

}
greet ()//hi there
greet("nithish")//hi nithish

//recursion
function fact(n){
    if (n==1){
        return 1
    }
    return n*fact(n-1)
}
console.log(fact(5))//120

//function expression

//Note: we can't use this function before declaring 
let hi=function(){
    console.log("hi")
}
hi()//hi

//volume
let volume=(l,b,h)=>l*b*h
console.log(volume(5,5,5))//125

//area
let area= r => (Math.PI*r*r);
console.log(area(5));//78.53981633974483

//rest parameters

let product= function (...args){
    let result=1
    for(let ele of args){
        result*=ele
    }
    return result
}
console.log(product(3,4,5))//60
console.log(product(3,4,5,6,7,8))//20160


let product1= function (){
    let result=1
    for(i=0;i<arguments.length;i++){
        result*=arguments[i]
    }
    return result}
console.log(product1(2,3,4,5))//120
console.log(product1(3,4,5,6,7,8))//20160

//Generator- can generate value one by one
// when calling infinitely
function *generator(){
    let index=1
    while(true){
        yield index++
    }

}
let generate=generator()
console.log(generate.next().value)//1
console.log(generate.next().value)//2
console.log(generate.next().value)//3
console.log(generate.next().value)//4

//Note :one by one generation when calling 
// differ from loops

/* only one memory value exists in memory at a time
repeaded infinitly*/


//callback
function nithish(){
    console.log("hi nithish")
}
function harish(){
    console.log("hi harish")
}
function callback(name){
    name()
}
callback(harish)

//foreach-calls the function each ele in array

arr=['deepa','suresh','ramya']
arr.forEach(print);
function print(val){
    console.log(val)
}

arr.forEach((val,index,array)=>{
    array[index]=val.toUpperCase()
})
console.log(arr)// ['DEEPA', 'SURESH', 'RAMYA']

branch_arr=['ECE','CSE','MECHANICAL','AIML']
branch_arr=['ECE','CSE','MECHANICAL','AIML'] 
branch_arr.forEach(val=>{     
    const opt=document.createElement("option")     
    opt.textContent=val     
    opt.value=val     
    document.getElementById("branch").appendChild(opt)      
})

//map taking element from the array one by one 
//  creating a new array
let priceUSD=[20,35,13]
let priceINR=priceUSD.map(convert)
function convert(val){
    return val*83
}

console.log(priceINR)

const input=[{name:'nithish',age:15},
    {name:'harish',age:18},{name:'kaushik',age:45},{name:'anu',age:21},
    {name:'divya',age:26}
]
const ages=input.map(func)

function func(objects){
    return objects.age
}
console.log(ages)// [15, 18, 45, 21, 26]

/*filter -retuns new array by checking each 
value of original arr using call back fn*/
let numbers = [45, 152, 89, 234, 67, 301, 23, 178, 92, 456];
let filtered=numbers.filter(x =>x<100)
console.log(filtered)

/*reduce - executes reducer call back 
and return accumulated result*/
let cost = [45, 152, 89, 234, 67, 301, 23, 178, 92, 456];

let total=cost.reduce(funct,9000)//initial value
function funct(total,ele){//we can also get the index, arr parameter
    return total+ele
}
console.log(total)//10637

let letters2D = [
    ['A', 'M', 'K', 'P', 'R'],
    ['B', 'N', 'L', 'Q', 'S'],
    ['C', 'O', 'H', 'T', 'U'],
    ['D', 'F', 'I', 'V', 'W'],
    ['E', 'G', 'J', 'X', 'Y']
];

console.log(letters2D.flat())//returns the 1d array of given dimention array

let count=letters2D.flat().reduce((accumulator, current)=>{
    if (accumulator[current]){
        accumulator[current]++}
    else {
        accumulator[current]=1
    }
    return accumulator    
},{})
console.log(count)

//remove duplicate using reduce()
arr=[4,6,2,3,1,1,3,5,7,8,4,3]
let unique=arr.reduce((uni,curret)=>{
    if (!uni.includes(curret)){
        uni.push(curret)    }
    return uni

},[])
console.log(unique)// [4, 6, 2, 3, 1, 5, 7, 8]

//abbreviate by gathering first letter of each word
let Name="robert Andrew George"
let words=Name.split(" ")
let first_letters=words.reduce((arr,current)=>{
    arr+=current[0].toUpperCase()
    return arr

},'')
console.log(first_letters)//RAG