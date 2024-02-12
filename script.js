// {
// let a=4;    
// let b=2;
// b=3;
// console.log(a+b);
// };
     //const variable
// const msg = "hi how are you"
// msg ="bye"
// console.log(msg);

     //primitive types
// let myName = "dhanush"
// console.log(typeof myName);  
// let myAge = 19
// console.log(typeof myAge);  
// let check = true
// console.log(typeof check);  
// let sell =""
// console.log(sell);

    //object
// let myFamily = {
//     father:"sekar",
//     mother:"sumathi",
//     sisters:"megala",
//     brother:"dhanush",
//     another:{
//         sister:"sangeetha"
//     }
// }       
// // console.log(myFamily);
    
// //    dot notation
// console.log(myFamily.another.sister);

// //    bracket notation
// console.log(myFamily['sisters']);

    //Array
// let color = ["red","gray","yellow"]
// console.log(color);
// color[5] = "black"
// console.log(color);
// console.log(color[2]);

    //  concadinate
// let aname = "dhanush"
// let msg = "hi " + aname + " how are you"
// console.log(msg);

//    function

// function add(num1,num2){
//     console.log(num1+num2);
// }
// add(55,45)

//    operators
// its like assign operators
// let x = 35
// x = x+4
// x += x
// console.log(x);
 
//  increment
// let x = 57;
// console.log(++x);
// console.log(++x);
// console.log(++x);
// console.log(x++);
// console.log(x++);
// console.log(x++);

// let age = 13
// let type =age>18? "eligible for vote" : "not eligible for vote";
// console.log(type);

// let hour = 18;
// if(hour>0 && hour<=11)
// {
//     console.log("morning time");
// }
// else if(hour>12 && hour<15)
// {
//     console.log("ofternoon time");
// }
// else
// {
//     console.log("evening time");
// }
// console.log(typeof null);
    //while loop
// for(let i = 1; i<=50;i++)
// {
//    console.log("dhanush");
// }    


   //while loop
// let i = 1
// while(i<=10)
// {
//     console.log("hi");
//     i++;
// }


    //  for in loop
// const person = {
//     name: 'John',
//     age: 34,
//     sex:'male'

// }
// for(let dai in person)
// {
//     console.log(dai + ": " + person[dai]);
// }

// let color = ['red','black','yellow'];
// for(let dai in color)
// {
//     console.log(color[dai]);
// }


     //for of loop
// for of loop is mainly used for array

// let color = ['red', 'green', 'blue'];
// for(let dai of color)
// {
//     console.log(dai);
// }

    //  Object Oriented programing
     //   Object
// let person = {
//     name: 'John',
//     age: 34,
//     sex: 'male',
//     isAlive: true,
//     character:{
//         brother:'dhanush',
//         sister:'dharshini',
//     },
//     greet: function()
//     {
//        let msg = `hi da ${this.name} epdi irruka, onaku ippo ${this.age} vayasaa aaaguthu`;
//         console.log(msg);
//     }
// };
// person.greet();

     //factory function
// function createPerson(name,age,){
//     return {
//     name,
//     age,
//     greet: function()
//     {
//        let msg = `hi da ${this.name} epdi irruka, onaku ippo ${this.age} vayasaa aaaguthu`;
//         console.log(msg);
//     },
   
// };
// }
// const person1 =  createPerson("dhanush",25)
// const person2 =  createPerson("bhuvi",26)
// person1.greet();
// person2.greet();

    //  constructor function  //pascal =>first letter capital
// function Person(name){
//     this.name = name
//     this.greet = function(){
        
//        let msg = `hi da ${this.name} epdi irruka, onaku ippo ${this.age} vayasaa aaaguthu`;
//         console.log(msg);

//     }

// }    
// let person = new Person("dhanush");
// person.greet()


      //dynamic object
// const person = {
//     name: 'dhanush',
// }
// person.age = 18

// // delete person.age
// console.log(person);


//cloning a object
// let user = {
//     name:"dhanush",
//     age:19
// }
// console.log(user);

// let another = {
//     ...user
// }

// console.log(another);


    

// js array indepth


// let fruit = ["apple","orange","bannana"]
// console.log(fruit);
// console.log(fruit[3]);

// fruit[4] = "gauva"

//three methods of array
// let number = [1,2,3]
// console.log(Number);
// //  * push
//    Number.push(4,5)

// //  *unshift
//   Number.unshift(6,7)

// //  *spice
//   Number.splice(3, 8,9)



//find an element in reference type in array

// const orders = [
//     {id:1, item:"mobile", quantity:3},
//     {id:2, item:"headset", quantity:4},
//     {id:3, item:"charger", quantity:1},
//     {id:4, item:"battary", quantity:66}
// ]

// let gadjets = orders.find((order) => {
//     return order.item === "headset"
// })

// console.log(gadjets);



//for Each 

// const routine = ["wake up","eat","sleep"]

// routine.forEach((daily) => {
//     console.log(daily);

// })