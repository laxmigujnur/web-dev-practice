console.log("Hello World!");
console.log("welcome to Js classes!");

console.error("U have done an error");

// alert("Warning alert");
// prompt("Do u want to exit");

// datatypes in Js
// var , let , const , boolean , number , string , null , undefined ,char

var fullName = "Laxmi";
var age = 25;
var avg = 87.9;
var isEligible = true;

// var datatype has a function scope

console.log("value in FullName Variable", fullName);

function getData() {
    var j = 10;
    console.log("variable J", j);
}

getData();

// let Datatype
// let has a block scope

let sgpa = 9.8;
let grade = "A";
let isAssigned = false;

function Sum() {
    if (2 > 3) {
        var m = 10;
    }
    console.log("value of M", m)
}

Sum()

// eg for let key word

for (var i = 0; i < 5; i++) {
    console.log("i", i)
}

console.log("loop terminates at", i);

// const
const pi = 3.142;
console.log("pi")

// undefined
var fruitslist = 0;
console.log("variable fruitslist", fruitslist);

// null
var scoredPoints = null;
console.log("scoredpoints", scoredPoints);

// hoisting in JS

console.log(spares);
var spares = 10;

// internal flow of hoisting in js

// var spares;
// console.log(spares);
// spares=10;

// data structure

// arraya

var myList = [1, 1.24, true, false, 'A', 'hello', null];
console.log("mylist", myList);

// insertion ,deletion , traversal , searching , sorting ,push ,pop

// splice();
// syntax
// splice ( starting index , delete count, new value(s))

var habits = ["drawing", "Swimming", "Dancing"];
habits.splice(1, 0, "Cycling", "Outdoor Games");
console.log("after insertion", habits);

// deletion

var myorder = [10, 20, 30, 45];
myorder.splice(2, 1)
console.log("after deletion", myorder);

// traversal
// map();

// callback funcs
// if a func accepts or returns a function then its called as a callback function
// function getOrders()
// {
//    return function test{}
// }

// map() is a callback func
// using this we can access the elements of an array or computer a new array from it

var myOrderHistory = [10, 245, 27, 89];

myOrderHistory.map((ele) => {
    console.log("map items", ele)
})

var computedArray = myOrderHistory.map((i) => {
    return i - 5;
});

console.log("computed Array", computedArray);

// searching
// filter()

// filter() its a callback func

var canceledList = [1001, 1010, 1020];

var filteredArray = canceledList.filter((a) => {
    return a > 1005
});
console.log("filterd Array", filteredArray);

// sorting

// sort()
// its a callback func

var distance = [100, 26, 4, 78, 56];
[4, 25, 56, 78, 100]
var sortedArray = distance.sort((a, b) => {
    return a - b;
});

console.log("sorted Array", sortedArray);

// push
var transHistory = ["Tr101", "Tr102", "Tr103"];
transHistory.push("Tr104");
console.log("after push", transHistory);
transHistory.pop();
console.log("after pop", transHistory);

//JSON (javascript Object Notation);

var myProfile = {
    name: "Laxmi",
    role: "SDE 2",
    exp: 3.5,
    edu: "B.E",
};
console.log("my profile obj", myProfile);

// destructure of an object
console.log("role of a user", myProfile.exp);

// nested Objects

var orderAddressProfile = {
    primaryemail: "test@yopmail.com",
    phone: "9876766",
    address: {
        streetNo: "5",
        doorno: "#18",
        city: "ABC",
    }
}

console.log("nested objects", orderAddressProfile);

// Array of objects

var productList = [
    { itemName: "Shoes", price: 100, rating: 4.5 },
    { itemName: "SSO", price: 56, rating: 4.0 },
    { itemName: "Bangles", price: 9, rating: 4.8 },
];

console.log("product List", productList);

// map();

productList.map((b) => { console.log(b.itemName) });

// filter();

var filterdProducts = productList.filter((product) => {
    return product.price > 50;
});

console.log("filterdProducts", filterdProducts);

// filter based on rating

var topratedProducts = productList.filter((k) => {
    return k.rating >= 4 && k.rating < -4.5
});

console.log("topratedProducts (4-4.5)", topratedProducts);

//DOM (Document object Model)
// document ~ web page
function onSubmit() {
    // alert("btn clicked!");
    var typeUserName = document.getElementById("typeIn").value;
    console.log(typeUserName);

    var typedInAge = document.getElementById("typedAge").value;
    console.log("age enterd by user", typedInAge);

    var typedEmailId = document.getElementById("emailId").value;
    console.log("email id", typedEmailId);

    var typedPassword = document.getElementById("typedPassword").value;
    console.log("password", typedPassword);

    var typedSearch = document.getElementById("country").value;
    console.log("country", typedSearch);

    var uploadedFile= document.getElementById("fileupload").value;
    console.log("file", uploadedFile);

    var selectedColor= document.getElementById("colorselector").value;
    console.log("file", selectedColor);


    //   getElementsByName()

    var radioOptions=document.getElementsByName("gender");
    // [{name;"Male",value:"Male",checked:false},
    // {name;"Female",value:"Female",checked:false}]
    for (let i=0;i<radioOptions.length;i++) 
    {
         if(radioOptions[i].checked) 
         {
         console.log(radioOptions[i].value)
         }
    }

    var subjects=document.getElementsByName("subjects");
    for (let i=0;i<subjects.length;i++) 
    {
         if(subjects[i].checked) 
         {
          console.log("selected subjects",subjects[i].value)
         }
    }

    
}        














