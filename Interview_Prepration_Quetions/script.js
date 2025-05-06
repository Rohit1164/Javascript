// Quetions-1
// let a = [];
// let b = [];

// console.log(a == b);
// console.log(a === b);

// Quetions-2
// let a = [];
// let b = a;

// console.log(a == b);
// console.log(a === b);

// Quetions-3
// let a = [20];
// let b = [20];

// console.log("_", a[0] == b[0]);
// console.log(a[0] === b[0]);

// Quetions-4
// console.log(typeof NaN);

// Quetions-5
// let set = new Set([1, 2, 3, 1, 4]);
// console.log(set);

// Quetions-6
// let obj = { name: "Rohit", lName: "kumar" };

// console.log(obj);
// console.log(delete obj.name);
// // console.log(delete obj);
// console.log(obj);

// Quetions-7
// let obj = ["Rohit", "kumar", "vikash"];
// let [, , a] = obj;

// console.log(a);

// Quetions-8
// let data = { name: "Rohit", lName: "kumar" };
// let { name } = data;
// console.log(name);

// Quetions-9
// let data = { name: "Rohit", lName: "kumar" };
// let info = { age: "20", vill: "lalgarhi" };
// data = { data, ...info };
// console.log(data);

// Quetions-10
// let result = false || {} || null;
// console.log(result);

// Quetions-11
// console.log(Promise.resolve(10));

// Quetions-12
// function sum(x, y, z) {
//   return x + y + z;
// }
// console.log(sum(1, 3, 2));

// Quetions-13
// let type = "hello";
// console.log(!typeof type === Object);
// console.log(typeof type === String);

// Quetions-14
// const user = {
//   name: "Alice",
//   age: 25,
// };
// Object.seal(user);
// user.name = "Bob";
// user.age = 30;
// user.city = "Paris";
// // delete user.age;
// console.log(user);
// // { name: 'Bob', age: 25 }

// // Quetions-15
// let a = 1;
// let b = 1;
// let c = 2;
// console.log(--c === a);
// console.log((a === b) === --c);

// Quetions-16
// console.log([[[[[]]]]]);

// Quetions-17
// how to check plateform by using Javascript
// console.log(navigator.platform);

// Quetions-18
// let a = { name: "Rohit" };
// let b;
// b = a;
// console.log(a);
// a.name = "Mohit";
// console.log(b.name);

// Quetions-19
// obj = { 1: "a", 2: "b", 3: "c" };
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));

// Quetions-20
// function sayhii() {
//   return () => 0;
// }
// console.log(typeof sayhii()());

// Quetions-21
// console.log(typeof typeof 1);

// Quetions-22
// let number = [1, 2, 3];
// number[8] = number;
// console.log(number);

// Quetions-23
// console.log(..."Rohit");

// Quetions-24
// const first = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, "one");
// });

// const second = new Promise((resolve, reject) => {
//   setTimeout(resolve, 300, "two");
// });
// Promise.race([first, second]).then((res) => console.log(res));

// Quetions-25
// console.log(typeof (3 + 4 + +"5"));

// Quetions-26
// console.log([] == []);

// Quetions-26
let data = [1, 2, 3].map((num) => {
  if (typeof num === Number) {
    return num * 2;
  }
});
console.log(data);
