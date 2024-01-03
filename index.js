// name();
// var data = [1,2,3,4,5,6];
// console.log(data);

// function data(a){
//     return a;
// }

// Template String Template literals

// var user = "Puneet Bhai";
// var  greet  = "Good morning";

// var userG = `Hello ${user}  ${greet}`;

// console.log(userG);

/* Arrow Function */

/* Normal function */
// function hello(){
//     console.log("Hello For hello Function")
// }

// hello();

// let hello = (Name) =>{
//     console.log(`Hello For hello Function ${Name.Name}`)
// }
// console.log(typeof hello({Name : "Puneet"}));

// let data = function(){
//     console.log("This's also a function")
// }
// console.log(typeof data())

// let user = a => a;
// console.log(user(2))

/* ======= Rest  operator ======== */

// let sum = (User, add) => {
//   let total = 0;
//   for (let i = add; i <= add.length - 1; i++) {
//     console.log(add[i]);
//   }
//   for(let i in add){
//     total += add[i]
//   }
//   console.log(total)
//   return `${User.Name} ${total}`;
// };
// console.log(sum({ Name: "Puneet" }, [12,30,40]));

/* ============ Object literals ========== */

// let name = "Punnet";
// let sirName = "Yadav";

// let obj = { name, sirName}
// console.log(obj)
// let firstName =  "Name";
// var obj = {
//   [firstName] : "Puneet",
//   lastName: "Yadav",
//   city: "Lucknow"
// };

// console.log(obj)

// let firstName = "Mr";
// let lastName = "Full Stack";

// let obj = {
//     firstName,
//     lastName,
//     fullName : `${firstName} ${lastName}`
// }
// console.log(obj)

// let n = "student";
// var obj = {
//   [n + "name"]: "Puneet",
//   lastName: "Yadav",
//   fullName: function(){
//     return `${this.studentname} ${this.lastName}`
//   }
// };
// console.log(obj);
// console.log(obj.fullName())

// let name = "Puneet";

// var obj = {
//     name : "Puneet",
//     lastName : "Yadav",
//     // fullName : function(){
//     //     return `FullName : ${this.name} ${this.lastName}`
//     // }
//     'full Name'(course){
//         return `FullName : ${this.name} ${this.lastName} ${course}`
//     }
// }
// // console.log(obj.fullName())
// console.log(obj['full Name']("Btech"))

// let firstName = "Puneet";
// let lastName = "Yadav";
// let course = "Diploma";
// function curx(firstName, lastName, course) {
//   let fullName = firstName + " " + lastName;
//   return { fullName, course };
// }
// let a = curx(firstName, lastName, course);
// console.log(a.fullName);
// console.log(a.name);
// console.log(a.course);

/*========== Destructuring Array ==========*/
// let data = ["Puneet", "Yadav", "Diploma"];
// let [firstName, ...args ] = data;
// function user([firstName, lastName, course ]){
//     return ["Puneet", "Yadav", "Diploma"]
// }
// console.log(user())
// console.log(firstName,args)
// console.log(lastName)
// console.log(gender)
// function user(){
//     return ["Puneet", "Yadav", "diploma"]
// }
// user()
// console.log(user())

// class hello {
//   constructor(name, age) {
//     this.studentname = name;
//     this.age = age;
//     console.log("This is Constructor Method");
//   }
//   message(){
//     console.log(`this is prototype method ${this.studentname} ${this.age}`);
//   }
//   static staticMethod(){
//     console.log("This is Staic Method")
//   }
// }

// let a = new hello("Puneet", 25);
// let b = new hello("Ram", 10);
// a.message();
// b.message();

// hello.staticMethod();

/* ==== Classes and Objects =========*/

// class name{
//     constructor(a , b){
//         this.a = a;
//         this.b = b;
//         console.log("This is a Constructor Function")
//     }
//     sum(){
//         let c = this.a + this.b;
//         console.log("This is a Normal/Prototype Function" + "Sum of Two N. " + c)
//     }
//     static staticMethod(){

//         console.log("This is Static Function/Method")
//     }
// }
// let obj = new name(5,5);
// let a = new name(10,10);
// obj.sum();
// a.sum();
// name.staticMethod()

/* ========= Inheritance ============ */

// class emplyee {
//     constructor(name, company, salary) {
//         this.emplyee = name;
//         this.company = company;
//         this.salary = salary;
//     }
//     info() {
//         document.write(`
//         <h1> Emplyee Salary Reciept </h1>
//         Name : ${this.emplyee} <br>
//         Company : ${this.company} <br>
//         Salary : ${this.salary} <br>
//        `);
//     }
// }
// class manager extends emplyee {
//     info() {
//         let ta = 300;
//         let pa = 300;
//         let totalSalary = this.salary + ta + pa;
//         document.write(`
//             <h1> Emplyee Salary Reciept </h1>
//             Name : ${this.emplyee} <br>
//             Company : ${this.company} <br>
//             Salary : ${totalSalary} <br>
//        `);
//     }
// }
// class test extends manager{

// }
// let emplyee = new emplyee("Puneet", "Google", 20);
// let manager = new manager("Puneet", "Amazon", 50);
// emplyee.info();
// manager.info();

// let textObject = new test("Annu" , "Microsoft", 10)
// textObject.info()

/* =========== Modules ============= */

/* ========= Promise ========= */

// promis have three stages to complete the process
// pending ---> fullfil --->reject

// function prom() {
//     return new Promise(function(resolve, reject){
//         console.log("Fetching data, Please wait!!!")
//         let data = 'user.json';
//         setTimeout(()=>{
//             if(data){
//                 resolve(data)
//             }else{
//                 reject("failed to Console")
//             }
//         }, 1000)
//     })
// }
// let onfulfilment = (result)=>{
//     console.log(result)
// }
// let onRejection = (error) =>{
//     console.warn(error);
// }
// prom().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

/* ========= Promise all ======== */

// let prom1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("First Promise");
//     reject("First");
//   }, 1000);
// });
// let prom2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Second Promise");
//     resolve("Second");
//   }, 2000);
// });
// let prom3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Third Promise");
//     resolve("Third");
//   }, 3000);
// });

// Promise.all([prom1, prom2, prom3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
// });

/*========= AJAX Programming ============*/

/*   function loadData() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById('demo').innerHTML = this.responseText;
                    // for(let i in this.responseText){
                    //     document.write(this.responseText[i])
                    // }
                } else if (this.readyState == 4 && this.status == 404) {
                    document.getElementById('demo').innerHTML = "File not Found"
                } else {
                    console.log("Somethig Went Wrong!!!")
                }
            };
            xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
            xhttp.send();
        }
 */

/*============= Fetch method  ============*/
// let endPoint = "user.json";
// fetch(endPoint)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     for (const x in data) {
//       // console.log(data)
//       document.write(`<br> title : ${data[x].address.city}<br>`);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// document.getElementById("saveForm").addEventListener("click", function (e) {
//   e.preventDefault();
// //   var obj = {
// //     title: document.getElementById("titleText").value,
// //     body: document.getElementById("body").value,
// //     UserId: document.getElementById("userid").value,
// //   };
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: new FormData(document.getElementById('my-form')),
//     headers: {
//       "Content-type": "application/x-www.form-urlencoded",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => error);
// });

// if(window.fetch){
//     console.log(hello)
// }else{
//     console.log("nannn")
// }

/* ========== Async Function ================== */

// async function myFuc(){
//     return "Hello"
// }

// let myFuc = async function(){
//     return 'Hello'
// }

// let myFuc = async () =>{
    // let response = await fetch('./user.json')
    // let student = await response.json();
    // return student

//     return (await fetch("./user.json")).json()
// }
// myFuc().then((res)=>{
//     res.forEach(res=> {
//         console.log(res.name)
//     });
// }).catch((error)=>{
//     console.log(error)
// })


/* =========== Symbol data type ========== */

/* let id = Symbol("hello")
console.log(typeof id)
console.log(id) 

let a = Symbol("Hello");
let b = Symbol("Hello");
console.log(a===b); 
let a = Symbol("Hello");

console.log(a.description)
*/

/* ========= Iterators ========== */

var x = ["Apple", "Grapes", "Mongo"]

let y = x[Symbol.iterator]()
y.next()
y.next()
y.next()
console.log(y.next())
console.log(y.next())
console.log(y.next())



