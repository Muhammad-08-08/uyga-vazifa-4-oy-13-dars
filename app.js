// ? 1-misol

// let car1 = {
//   brand: "Toyota",
//   calculatespeed(distance, time) {
//     return `${this.brand} tezlik ${distance / time} km/soat`;
//   },
// };

// let car2 = {
//   brand: "Honda",
// }

// let speed = car1.calculatespeed.call(car1, 100, 2);
// let speed1 = car1.calculatespeed.call(car2, 100, 2);
// console.log(speed);
// console.log(speed1);

// ? 1-misol tugadi

// ? 2-misol

// let ages = [25, 30, 18, 22, 40];

// let youngest = Math.min.apply(null, ages);
// console.log(youngest);

// ? 2-misol tugadi

// ? 3-misol

// let product = {
//   price: 200,

// };
// function bindDiscount(discount) {
//   return this.price - (this.price * discount) / 100;
// }

// let tenPercentDiscount = bindDiscount.bind(product, 10);
// console.log(tenPercentDiscount());

// ? 3-misol tugadi

// ? 4-misol

function greet(greeting) {
  return `${greeting} men ${this.name}, ${this.role}`;
}

let person1 = {
  name: "Muhammad",
  role: "Dasturchi",
};
let person2 = {
  name: "bob",
  role: "Dizayner",
};

let greetMuhammad = greet.call(person1, "Salom");
let greetBob = greet.call(person2, "Salom");
console.log(greetMuhammad);
console.log(greetBob);
