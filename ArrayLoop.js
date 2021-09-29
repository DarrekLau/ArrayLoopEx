// Exercise #1

const names = ["Sofia", "David", "Juan"];
names.push("Sara", "Augustin");
names.shift();
console.log(names);

// const newNames = [...names.slice(0,1), ...names.slice(2,0)]

names.splice(1, 0, "Renata");
names.push("Elena");
console.log(names);

// #Hugo Ver
//Ex1 part1
const queue = ['Sofia', 'David', 'Juan']
console.log(queue)
//Ex1 part2
queue.push('Sara')
queue.push('Augustin')
queue.shift()
console.log(queue)
//Bonus
// const newQueue = [...queue.slice(0,1), ...queue.slice(2, 4)]
// console.log(newQueue)

// Ex1 part3
//Array.prototype.splice()
//... spread operator
queue.push('Elena')

const newQueue = [ queue[0], 'Renata', ...queue.slice(1)]
console.log(newQueue)



// #Exercise 2

let star = "";
let i = "";
for (let i = 1; i <= 5; i++) {
    var output = "";
    for (j=i; j<=i; j++){
        output += "* ";
    }
  console.log(output);
}

for (let i = 1; i <= 5; i++) {
    var output = "";
    for (j=1; j<=i; j++){
        output += "* ";
    }
  console.log(output);
}

// #Exercise 3a

let a = 10;
while (a >= 0) {
  console.log(a);
  if (a === 0) {
    break;
  } else {
    a -= 0.5;
  }
}

// #Exercise 3b

let a = 1;
while (a <= 97) {
  console.log(a);
  a += 2;
}

// #Exercise 3c

function square(max) {
  let n = 1;
  let output = "";
  while (n <= max) {
    output += `[${n}]`;
    n++;
  }
  console.log(output);
}

square(6);

// #Exercise 3d

function sum(a) {
  let count = 1;
  let total = 0;
  while (count <= a) {
    total = total + count;
    count++;
  }
  console.log(`n = ${a}  sum = ${total}`);
}

sum(5);
sum(19);
