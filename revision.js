/* ========   Jay shree Ram  ========== */

// HOC

/* function add(a,b,cb){
    let c =  a+b
    cb(c)
    return (()=>{console.log(c)})
}
function show(result){
    console.log(result)
}
let sum = add(1,2, ()=>{})
sum() */

// function sum(...numbers){
//     let add = 0;
//     for(let i = 0; i<=numbers.length-1; i++){
//         add = add + numbers[i];
//     }
//     return add;
// }
// let total = sum(10,20,30,40,50,60,70,80)
// console.log(total)

/* ======== Compositions ======== 

function add(a, b) {
  return a + b;  a=2, b=2 a +b = 4 
}
function square(num) {
  return num * num;  4 * 4 = 16 
}

function mutiply(args) {
  return args[0] * args[1];
}

function div(args){
    return args / 2;
}

function comspose(...fns){
    return function(...value){
        return fns.reduce((a,b)=>{
            return b(a)
        },value)
    };
}
ES6

const composeAll =
  (...fns) =>
  (...val) =>
    fns.reduce((a, b) => b(a), val);
let ans = composeAll(mutiply, square, div);
console.log(ans(2, 2));
let ans = comspose(mutiply, square)
console.log(ans(2,2))
function composeTwoFunction(fn1, fn2){
    return function(a,b){
        return fn2(fn1(a,b));
    };
}

const cf2 = (fn1, fn2) => (a, b)=> fn2(fn1(a,b))

let result = composeTwoFunction(add,square)
let result = cf2(add,square)
console.log(result(10,10));
console.log(result(10,10));

function addTwoandSquare(a,b){
    return square(add(a,b))
}
let sum = add(5,5)
console.log(addTwoandSquare(5,5)) */

/* ======= IIFE Immediatly Invoked Function ========

;(function add(a,b){
    console.log(a + b);
})(2,4);

(function sayMyName(){
    console.log("Puneet Yadav")
})()
(()=> console.log("Puneet Yadav"))()


let data = ( async () =>  await fetch() )

const atm = function(initialBalance){
    let balance = initialBalance;
    function withdraw(amt){
        if(amt > balance){
            return "Fuckkk You!!!"
        }else{
            balance -= atm;
            return balance;
        }
    }
    return { withdraw };
};

const puneet = atm(1000);
console.log(puneet.withdraw(100))  */

/*---------- Curring  --------------

function add(a, b, c){
    return a + b + c
}
console.log(add(2,2,2))

function add(a){
    return function(b){
        return function(c){
            return function (d){
                return a + b+ c + d;
            }
        }
    };
}
const add = (a)=>(b)=>(c)=> a+b+c; ES^6
console.log(add(2)(2)(2)(2))


function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`Email: ${to} Subject ${subject}  ${body}`)
        }
    }
}
let step1 = sendAutoEmail("Puneety431@gmail.com");
let step2 = step1("Order Placed Successfuly");
step2("Hey Puneet",step1, step2)

function curryAdd(a) {
    return function(b) {
        return a + b;
    }
}
Ab isse alag-alag tareeke se call kar sakte hain
const addTwo = curryAdd(2);
console.log(addTwo(3)); // Output: 5

const addFive = curryAdd(5);
console.log(addFive(3)); // Output: 8

const result = curryAdd(2)(3);
console.log(result); // Output: 5  */


/* ========  Promisification ========== */

// function fetchData(callback) {
//     setTimeout(function() {
//         const data = "Yeh kuch data hai!";
//         callback(null, data);
//     }, 2000);
// }
// Iska use callback ke through karte hain
// fetchData(function(error, result) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(result);
//     }
// });

// function promisifiedFetchData() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             const data = "Yeh kuch data hai!";
//             resolve(data);
//         }, 2000);
//     })
// }
// Iska use Promise ke through karte hain
// promisifiedFetchData()
//     .then(function(result) {
//         console.log(result);
//     })
//     .catch(function(error) {
//         console.error(error);
//     });

/* LocalStorage */

// let form = document.getElementById('my-form');
// let submit = document.getElementById("submit");

// form.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     let name = event.target.name.value;
//     let Email = event.target.email.value;

//     localStorage.setItem("Name",name)
//     localStorage.setItem("Email",Email)
//     const mail = localStorage.getItem("Email");
//     console.log(mail)
// })


// button.addEventListener('click', function(){
//     const val = input.value;
//     localStorage.setItem("Name", val)
//     console.log(val)
// })
// window.addEventListener('load', ()=>{
//     const value = localStorage.getItem("Name");
//     input.innerText = value
// })








